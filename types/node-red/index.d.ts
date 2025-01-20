// tslint:disable:no-empty-interface

import { EventEmitter } from "events";
import { Express } from "express";
import { Server as HttpServer } from "http";

import * as editorAPI from "@node-red/editor-api";
import * as editorClient from "@node-red/editor-client";
import * as registry from "@node-red/registry";
import * as runtime from "@node-red/runtime";
import * as util from "@node-red/util";

declare const nodeRed: nodeRed.NodeRedApp;

export = nodeRed;

declare namespace nodeRed {
    interface NodeRedApp {
        /**
         * Initialise the Node-RED application.
         * @param httpServer - the HTTP server object to use
         * @param userSettings - an object containing the runtime settings
         */
        init: (httpServer: HttpServer, userSettings: runtime.LocalSettings) => void;

        /**
         * Start the Node-RED application.
         */
        start: () => Promise<void>;

        /**
         * Stop the Node-RED application.
         */
        stop: () => Promise<void>;

        /**
         * Logging utilities
         */
        log: util.Log;

        /**
         * General utilities
         */
        util: util.Util;

        /**
         * This provides access to the internal nodes module of the
         * runtime. The details of this API remain undocumented as they should not
         * be used directly.
         *
         * Most administrative actions should be performed use the runtime api
         * under @node-red/runtime.
         */
        readonly nodes: runtime.InternalNodesModule;

        /**
         * This provides access to the internal plugins module of the
         * runtime. The details of this API remain undocumented as they should not
         * be used directly.
         *
         * Most administrative actions should be performed use the runtime api
         * under @node-red/runtime.
         */
        readonly plugins: runtime.InternalPluginsModule;

        /**
         * Runtime events emitter
         */
        events: EventEmitter;

        /**
         * Runtime hooks engine
         */
        hooks: util.Hooks;

        /**
         * This provides access to the internal settings module of the
         * runtime.
         */
        readonly settings: runtime.PersistentSettings;

        /**
         * Get the version of the runtime
         */
        readonly version: string;

        /**
         * The express application for the Editor Admin API
         */
        readonly httpAdmin: Express;

        /**
         * The express application for HTTP Nodes
         */
        readonly httpNode: Express;

        /**
         * The HTTP Server used by the runtime
         */
        readonly server: HttpServer;

        /**
         * The runtime api
         */
        runtime: runtime.RuntimeModule;

        /**
         * The editor authentication api.
         */
        auth: editorAPI.Auth;
    }

    /*******************************************************************
     * Type shortcuts for writing the runtime side of nodes (.js file)
     *******************************************************************/

    /**
     * Type def for the functions that should be exported
     * by the node .js files.
     */
    interface NodeInitializer<TSets extends NodeAPISettingsWithData = NodeAPISettingsWithData>
        extends registry.NodeInitializer<TSets>
    {}

    interface NodeConstructor<TNode extends Node<TCreds>, TNodeDef extends NodeDef, TCreds extends {}>
        extends registry.NodeConstructor<TNode, TNodeDef, TCreds>
    {}

    interface NodeAPISettingsWithData extends registry.NodeAPISettingsWithData {}

    interface NodeSetting<T> extends registry.NodeSetting<T> {}

    type NodeSettings<TSets> = registry.NodeSettings<TSets>;

    interface NodeCredential extends registry.NodeCredential {}

    type NodeCredentials<TCreds> = registry.NodeCredentials<TCreds>;

    interface NodeMessage extends registry.NodeMessage {}

    interface NodeMessageParts extends registry.NodeMessageParts {}

    interface NodeMessageInFlow extends registry.NodeMessageInFlow {}

    interface NodeAPI<TSets extends NodeAPISettingsWithData = NodeAPISettingsWithData>
        extends registry.NodeAPI<TSets>
    {}

    interface Node<TCreds extends {} = {}> extends registry.Node<TCreds> {}

    type NodeStatusFill = registry.NodeStatusFill;

    type NodeStatusShape = registry.NodeStatusShape;

    interface NodeStatus extends registry.NodeStatus {}

    interface NodeDef extends registry.NodeDef {}

    interface NodeContextData extends registry.NodeContextData {}

    interface NodeContext extends registry.NodeContext {}

    /********************************************************************
     * Type shortcuts for writing the editor side of nodes (.html file)
     ********************************************************************/

    /**
     * Property definition
     * Read more: https://nodered.org/docs/creating-nodes/properties#property-definitions
     */
    interface EditorNodePropertyDef<TVal, TInstProps extends EditorNodeProperties = EditorNodeProperties>
        extends editorClient.NodePropertyDef<TVal, TInstProps>
    {}

    /**
     * Properties definitions (`defaults` object)
     * Read more: https://nodered.org/docs/creating-nodes/properties
     */
    type EditorNodePropertiesDef<
        TProps extends EditorNodeProperties,
        TInstProps extends TProps = TProps,
    > = editorClient.NodePropertiesDef<TProps, TInstProps>;

    /**
     * Node properties
     * Read more: https://nodered.org/docs/creating-nodes/properties
     */
    interface EditorNodeProperties extends editorClient.NodeProperties {}

    type EditorNodeInstance<TProps extends EditorNodeProperties = EditorNodeProperties> = editorClient.NodeInstance<
        TProps
    >;

    type EditorNodeCredentials<T> = editorClient.NodeCredentials<T>;

    interface EditorNodeCredential extends editorClient.NodeCredential {}

    /**
     * Node Definition
     * Read more: https://nodered.org/docs/creating-nodes/node-html#node-definition
     */
    interface EditorNodeDef<
        TProps extends EditorNodeProperties = EditorNodeProperties,
        TCreds = undefined,
        TInstProps extends TProps = TProps,
    > extends editorClient.NodeDef<TProps, TCreds, TInstProps> {}

    /**
     * Type def for the global `RED` in the node .html files.
     * Should be used to access `RED.nodes.registerType` function
     * registering a node with the editor.
     *
     * Example:
     * ```
     * declare const RED: EditorRED;
     *
     * RED.nodes.registerType<
     *   MyNodeProps
     * >("my-node", {
     *   ...
     * })
     * ```
     */
    interface EditorRED extends editorClient.RED {}

    /**
     * WIDGETS
     */

    interface EditorWidgetEditableListOptions<T> extends editorClient.WidgetEditableListOptions<T> {}

    interface EditorWidgetEditableList extends editorClient.WidgetEditableList {}

    interface EditorWidgetTypedInputOptions extends editorClient.WidgetTypedInputOptions {}

    type EditorWidgetTypedInputType = editorClient.WidgetTypedInputType;

    interface EditorWidgetTypedInputTypeDefinition extends editorClient.WidgetTypedInputTypeDefinition {}

    interface EditorWidgetTypedInput extends editorClient.WidgetTypedInput {}
}
