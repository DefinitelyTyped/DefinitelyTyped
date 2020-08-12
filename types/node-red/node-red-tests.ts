import RED = require('node-red');
import { createServer } from 'http';
import { LocalSettings } from '@node-red/runtime';

async function REDTests() {
    const server = createServer();
    const settings: LocalSettings = {
        uiHost: '127.0.0.1',
        uiPort: 1880,
    };
    RED.init(server, settings);

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

    // $ExpectType EventEmitter
    RED.events;

    // RED.runtime is covered in @node-red/runtime
    // just check the link
    // $ExpectType RuntimeModule
    RED.runtime;

    // RED.runtime is covered in @node-red/editor-api
    // just check the link
    // $ExpectType Auth
    RED.auth;
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
