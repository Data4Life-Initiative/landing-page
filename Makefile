PROJECT := covid-19-mapview
APP     := landing-page
NAME    = $(PROJECT)-$(APP)

PROJECT_PACKAGE := github.com/igrant/$(APP)

TERM_FLAGS ?= -ti

EXTRA_RUN_ARGS ?=

VERSION   ?= $(shell git describe --tags --abbrev=0)
CANDIDATE ?= "dev"
CONTAINER_DASHBOARD ?= "igrant_dashboard_dev"

CONTAINER_DEFAULT_RUN_FLAGS := \
	--rm $(TERM_FLAGS) \
	$(EXTRA_RUN_ARGS)

GIT_BRANCH := $(shell git rev-parse --abbrev-ref HEAD | sed -E 's/[^a-zA-Z0-9]+/-/g')
GIT_COMMIT := $(shell git rev-parse --short HEAD)

# jenkins specific
ifdef BRANCH_NAME
    GIT_BRANCH = $(shell echo $(BRANCH_NAME) | tr '[:upper:]' '[:lower:]' | tr -cd '[[:alnum:]]_-')
endif

DEPLOY_VERSION_FILE = ./deploy_version
DEPLOY_VERSION = $(shell test -f $(DEPLOY_VERSION_FILE) && cat $(DEPLOY_VERSION_FILE))

GCLOUD_HOSTNAME = eu.gcr.io
GCLOUD_PROJECTID = public-data4life
DOCKER_IMAGE := ${GCLOUD_HOSTNAME}/${GCLOUD_PROJECTID}/$(NAME)

# tag based on git branch, date and commit
DOCKER_TAG := $(GIT_BRANCH)-$(shell date +%Y%m%d%H%M%S)-$(GIT_COMMIT)

.DEFAULT_GOAL := help
.PHONY: help
help:
	@echo "------------------------------------------------------------------------"
	@echo "MyData4Life landing page"
	@echo "------------------------------------------------------------------------"
	@grep -E '^[0-9a-zA-Z_/%\-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.bootstrap:
	git clone git@github.com:L3-iGrant/bootstrap.git "$(CURDIR)/.bootstrap"

.PHONY: bootstrap
bootstrap: .bootstrap ## Boostraps development environment
	git -C $(CURDIR)/.bootstrap fetch --all --prune
	git -C $(CURDIR)/.bootstrap reset --hard origin/master
	make -C .bootstrap bootstrap

setup: bootstrap ## Sets up development environment

run: ## Run dashboard locally for development purposes
	docker run \
		$(CONTAINER_DEFAULT_RUN_FLAGS) \
		--expose 5000 \
		-e VIRTUAL_HOST=$(APP).$(PROJECT).dev \
		--name "${CONTAINER_DASHBOARD}" \
		$(DOCKER_IMAGE):dev

.PHONY: build/docker/deployable
build/docker/deployable: ## Builds deployable docker image for preview, staging and production
	docker build -t $(DOCKER_IMAGE):$(DOCKER_TAG) -f resources/docker/Dockerfile .
	echo "$(DOCKER_IMAGE):$(DOCKER_TAG)" > $(DEPLOY_VERSION_FILE)

.PHONY: build
build: ## Builds the docker image
	docker build -t $(DOCKER_IMAGE):dev -f resources/docker/Dockerfile .

.PHONY: publish
publish: $(DEPLOY_VERSION_F ILE) ## Publish latest production Docker image to docker hub
	gcloud docker -- push $(DEPLOY_VERSION)

deploy/production: $(DEPLOY_VERSION_FILE) ## Deploy to K8s cluster (e.g. make deploy/{preview,staging,production})
	kubectl set image deployment/igrant-dashboard igrant-dashboard=$(DEPLOY_VERSION)

deploy/staging: $(DEPLOY_VERSION_FILE) ## Deploy to K8s cluster (e.g. make deploy/{preview,staging,staging})
	kubectl set image deployment/igrant-dashboard igrant-dashboard=$(DEPLOY_VERSION) -n staging

$(DEPLOY_VERSION_FILE):
	@echo "Missing '$(DEPLOY_VERSION_FILE)' file. Run 'make build/docker/deployable'" >&2
	exit 1

