import RED = require("node-red");
import { LocalSettings } from "@node-red/runtime";
import { createServer as createHttpServer, Server as HttpServer } from "http";
import { createServer as createHttpsServer, Server as HttpsServer } from "https";

async function REDTests() {
    const httpServer = createHttpServer();
    const httpsServer = createHttpsServer();
    const settings: LocalSettings = {
        uiHost: "127.0.0.1",
        uiPort: 1880,
    };
    RED.init(httpServer, settings);
    RED.init(httpsServer, settings);

    // @ts-expect-error The public API requires a server argument
    RED.init(settings);
    // @ts-expect-error The public API does not document a null server
    RED.init(null, settings);

    await RED.start();
    await RED.stop();

    // RED.log is covered in @node-red/util
    // just check the link
    // $ExpectType Log
    RED.log;

    // RED.util is covered in @node-red/util
    // just check the link
    // $ExpectType Util
    RED.util;

    // $ExpectType EventEmitter<any>
    RED.events;

    // $ExpectType Hooks
    RED.hooks;

    const version: string = RED.version();
    const server: HttpServer | HttpsServer = RED.server;

    // RED.runtime is covered in @node-red/runtime
    // just check the link
    // $ExpectType RuntimeModule
    RED.runtime;

    // RED.runtime is covered in @node-red/editor-api
    // just check the link
    // $ExpectType Auth
    RED.auth;

    const diagnostics: unknown = RED.diagnostics;

    // @ts-expect-error node-red 5.0.7 does not export the internal plugins module
    RED.plugins;
}

// check the shortcuts

type CheckTypeShortcutsForJs =
    | RED.NodeInitializer
    | RED.NodeConstructor<RED.Node<RED.NodeCredentials<{}>>, RED.NodeDef, RED.NodeCredentials<{}>>
    | RED.NodeAPISettingsWithData
    | RED.NodeSetting<string>
    | RED.NodeSettings<{}>
    | RED.NodeCredential
    | RED.NodeCredentials<{}>
    | RED.NodeMessage
    | RED.NodeMessageParts
    | RED.NodeMessageInFlow
    | RED.NodeAPI
    | RED.Node
    | RED.NodeStatusFill
    | RED.NodeStatusShape
    | RED.NodeStatus
    | RED.NodeDef
    | RED.NodeContextData
    | RED.NodeContext;

type CheckTypeShortcutsForHtml =
    | RED.EditorNodePropertyDef<string, RED.EditorNodeProperties>
    | RED.EditorNodePropertiesDef<RED.EditorNodeProperties, RED.EditorNodeProperties>
    | RED.EditorNodeProperties
    | RED.EditorNodeInstance
    | RED.EditorNodeCredentials<{}>
    | RED.EditorNodeCredential
    | RED.EditorNodeDef
    | RED.EditorRED
    | RED.EditorWidgetEditableListOptions<string>
    | RED.EditorWidgetEditableList
    | RED.EditorWidgetTypedInputOptions
    | RED.EditorWidgetTypedInputType
    | RED.EditorWidgetTypedInputTypeDefinition
    | RED.EditorWidgetTypedInput;
