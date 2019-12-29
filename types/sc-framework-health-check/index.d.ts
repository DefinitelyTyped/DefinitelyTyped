// Type definitions for sc-framework-health-check 2.0
// Project: https://github.com/SocketCluster/sc-framework-health-check
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import SCWorker = require("socketcluster/scworker");
import { Express } from "express";

export function attach(worker: SCWorker, expressApp: Express): void;
