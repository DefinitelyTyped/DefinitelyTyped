// Adapted from the socketcluster sample

import healthChecker = require("sc-framework-health-check");
import express = require("express");
import SCWorker = require("socketcluster/scworker");

const app = express();
const worker = new SCWorker();

// Add GET /health-check express route
healthChecker.attach(worker, app);
