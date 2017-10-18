#!/bin/bash
#example: ./gkompose up
export TT_DASHBOARD_IMAGE=gcr.io/formal-stratum-183105/tt-dashboard:latest
kompose -f ./kompose.yml $1
