/// <reference types="node" />

import { GlobalConfigInstance } from "./lib/config";

export * from "./clients/all";
export * from "./lib/core";
export var config: GlobalConfigInstance;

export as namespace AWS;
