import { Handler } from "express";

declare function createRebindHost(forceHost?: string): Handler;
export = createRebindHost;
