import SCWorker = require("socketcluster/scworker");
import { Express } from "express";

export function attach(worker: SCWorker, expressApp: Express): void;
