#!/bin/bash
#example: ./gkompose up
export TT_DASHBOARD_IMAGE=gcr.io/expanded-run-177512/img-tt-dashboard:latest
kompose -f ./docker-compose.yml $1
