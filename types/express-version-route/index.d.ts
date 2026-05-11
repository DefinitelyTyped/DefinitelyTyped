import { Handler } from "express";

export function route(versionsMap: Map<string, Handler>): Handler;
