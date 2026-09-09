import editorAPI = require("@node-red/editor-api");
import { LocalSettings, RuntimeModule, StorageModule } from "@node-red/runtime";
import { RequestHandler } from "express";
import { createServer } from "http";

declare const settings: LocalSettings;
declare const storage: StorageModule;
declare const runtime: RuntimeModule;

editorAPI.init(settings, createServer(), storage, runtime);

const middleware: RequestHandler = editorAPI.auth.needsPermission("flows.read");

async function tests() {
    await editorAPI.start();
    await editorAPI.stop();
}
