import editorAPI = require("@node-red/editor-api");
import { LocalSettings, RuntimeModule, StorageModule } from "@node-red/runtime";
import { Express, RequestHandler } from "express";
import { createServer as createHttpServer } from "http";
import { createServer as createHttpsServer } from "https";

declare const settings: LocalSettings;
declare const storage: StorageModule;
declare const runtime: RuntimeModule;

editorAPI.init(settings, createHttpServer(), storage, runtime);
editorAPI.init(settings, createHttpsServer(), storage, runtime);
editorAPI.init(settings, null, storage, runtime);

const middleware: RequestHandler = editorAPI.auth.needsPermission("flows.read");
const httpAdmin: Express | null = editorAPI.httpAdmin;

async function tests() {
    await editorAPI.start();
    await editorAPI.stop();
}
