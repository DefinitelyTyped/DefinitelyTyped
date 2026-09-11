/// <reference lib="dom" />
/// <reference types="ace" />
/// <reference types="jquery" />

import { NodeMessage } from "@node-red/registry";
import { LocalSettings as RuntimeLocalSettings } from "@node-red/runtime";
import { I18nTFunction } from "@node-red/util";

declare const editorClient: editorClient.EditorClientModule;

export = editorClient;

declare namespace editorClient {
    type EditorClientModule = false;

    /**
     * Property definition
     * Read more: https://nodered.org/docs/creating-nodes/properties#property-definitions
     * @deprecated Use {@link nodes.PropertyDefinition} instead
     */
    interface NodePropertyDef<TVal, TInstProps extends NodeProperties = NodeProperties> {
        /** The default value the property takes */
        value: TVal | "";
        /** Whether the property is required. If set to true, the property will be invalid if its value is null or an empty string. */
        required?: boolean | undefined;
        /** A function that can be used to validate the value of the property. */
        validate?: ((this: NodeInstance<TInstProps>, val: string) => boolean) | undefined;
        /** If this property is a pointer to a configuration node, this identifies the type of the node. */
        type?: string | undefined;
    }

    /**
     * Properties definitions (`defaults` object)
     * Read more: https://nodered.org/docs/creating-nodes/properties
     * @deprecated Use {@link nodes.PropertiesDefinition} instead
     */
    type NodePropertiesDef<TProps extends NodeProperties, TInstProps extends TProps = TProps> = {
        [K in keyof TProps]: K extends NodeReservedProperties ? never : NodePropertyDef<TProps[K], TInstProps>;
    };

    /** @deprecated Use {@link nodes.NodeInstance} instead */
    type NodeInstance<TProps extends NodeProperties = NodeProperties> =
        & Omit<TProps, NodeReservedProperties>
        & Readonly<{
            _: I18nTFunction;
            id: string;
            type: string;
            inputs: 0 | 1;
            outputs: number;
            h: number;
            w: number;
            x: number;
            y: number;
            z: string;
        }>;

    /** @deprecated Use {@link nodes.CredentialsDefinition} instead */
    type NodeCredentials<T> = {
        [K in keyof T]: NodeCredential;
    };

    /** @deprecated Use {@link nodes.CredentialDefinition} instead */
    interface NodeCredential {
        type: "text" | "password";
    }

    /**
     * Node Definition
     * Read more: https://nodered.org/docs/creating-nodes/node-html#node-definition
     * @deprecated Use {@link nodes.NodeDefinition} instead
     */
    interface NodeDef<TProps extends NodeProperties, TCreds = undefined, TInstProps extends TProps = TProps> {
        /** The palette category the node appears in. */
        category: "config" | string;
        /**
         * The editable properties for the node.
         * Read more: https://nodered.org/docs/creating-nodes/properties
         */
        defaults: NodePropertiesDef<TProps, TInstProps>;
        /**
         * The credential properties for the node.
         * Read more: https://nodered.org/docs/creating-nodes/credentials
         */
        credentials?: NodeCredentials<TCreds> | undefined;
        /**
         * How many inputs the node has, either 0 or 1.
         */
        inputs?: 0 | 1 | undefined;
        /**
         * How many outputs the node has. Can be 0 or more.
         */
        outputs?: number | undefined;
        /**
         * The background colour to use.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#background-colour
         */
        color?: string | undefined;
        /**
         * The label to use in the palette.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#palette-label
         */
        paletteLabel?: string | ((this: NodeInstance<TInstProps>) => string) | undefined;
        /**
         * The label to use in the workspace.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#node-label
         */
        label?: string | ((this: NodeInstance<TInstProps>) => string) | undefined;
        /**
         * The style to apply to the label.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#label-style
         */
        labelStyle?:
            | "node_label"
            | "node_label_italic"
            | string
            | ((this: NodeInstance<TInstProps>) => "node_label" | "node_label_italic" | string)
            | undefined;
        /**
         * Optional label to add on hover to the input port of a node.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#port-labels
         */
        inputLabels?: string | ((this: NodeInstance<TInstProps>) => string) | undefined;
        /**
         * Optional labels to add on hover to the output ports of a node.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#port-labels
         */
        outputLabels?:
            | string
            | string[]
            | ((this: NodeInstance<TInstProps>, idx: number) => string | undefined)
            | undefined;
        /**
         * The icon to use.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#icon
         */
        icon?: string | undefined;
        /**
         * The alignment of the icon and label.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#alignment
         */
        align?: "left" | "right" | undefined;
        /**
         * Adds a button to the edge of the node.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#buttons
         */
        button?:
            | {
                /** Called when the button is clicked */
                onclick: (this: NodeInstance<TInstProps>) => void;
                /** Function to dynamically enable and disable the button based on the node’s current configuration. */
                enabled?: ((this: NodeInstance<TInstProps>) => boolean) | undefined;
                /** Function to determine whether the button should be shown at all. */
                visible?: ((this: NodeInstance<TInstProps>) => boolean) | undefined;
            }
            | undefined;
        /**
         * Called when the edit dialog is being built.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditprepare?: ((this: NodeInstance<TInstProps>) => void) | undefined;
        /**
         * Called when the edit dialog is okayed.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditsave?: ((this: NodeInstance<TInstProps>) => void) | undefined;
        /**
         * Called when the edit dialog is cancelled.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditcancel?: ((this: NodeInstance<TInstProps>) => void) | undefined;
        /**
         * Called when the delete button in a configuration node’s edit dialog is pressed.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditdelete?: ((this: NodeInstance<TInstProps>) => void) | undefined;
        /**
         * Called when the edit dialog is resized.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditresize?: ((this: NodeInstance<TInstProps>, size: { width: number; height: number }) => void) | undefined;
        /**
         * Called when the node type is added to the palette.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        onpaletteadd?: ((this: NodeInstance<TInstProps>) => void) | undefined;
        /**
         * Called when the node type is removed from the palette.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        onpaletteremove?: ((this: NodeInstance<TInstProps>) => void) | undefined;
        /**
         * Called when the node type is dragged into workspace.
         */
        onadd?: ((this: NodeInstance<TInstProps>) => void) | undefined;
    }

    namespace actions {
        interface ActionSubscriber {
            (...args: any[]): void;
        }

        interface ActionDefinition {
            id: string;
            scope?: string;
            key?: string;
            user: boolean;
            label?: string;
            options?: object;
        }

        interface ActionOptions {
            label?: string;
        }
    }

    interface ActionList {
        /** @internal */
        init(): void;
        /**
         * Hides the action list dialog.
         */
        hide(): void;
        /**
         * Shows the action list dialog.
         * @param filter The filter to apply to the list
         */
        show(filter?: string): void;
    }

    /** @link https://nodered.org/docs/api/ui/actions/ */
    interface Actions {
        add(name: string, handler: actions.ActionSubscriber, options?: actions.ActionOptions): void;
        get(name: string): actions.ActionSubscriber;
        /**
         * Used to get or generate and translate action label
         */
        getActionLabel(name: string): string;
        invoke(name: string, ...args: any[]): void;
        list(): actions.ActionDefinition[];
        remove(name: string): void;
    }

    interface Clipboard {
        /** @internal */
        init(): void;
        /**
         * Show the import dialog
         * @param library which export destination to show
         */
        import<T extends string = "clipboard">(library?: T): void; // eslint-disable-line @definitelytyped/no-unnecessary-generics
        /**
         * Show the export dialog
         * @param library which export destination to show
         * @param mode whether to default to 'auto' (default) or 'flow'
         */
        export<T extends string = "clipboard">(library: T, mode?: "auto" | "flow"): void; // eslint-disable-line @definitelytyped/no-unnecessary-generics
        copyText(value: any, element: HTMLElement, msg: string): boolean;
    }

    interface ColorPicker {
        create(options: {
            value: string;
            id: string;
            palette?: [] | undefined;
            cellWidth?: number | undefined;
            cellHeight?: number | undefined;
            cellMargin?: number | undefined;
            cellPerRow?: number | undefined;
            opacity?: number | undefined;
        }): JQuery<HTMLDivElement>;
    }

    interface CommSubscriber {
        (topic: string, data: any): void;
    }

    interface Comms {
        /** @internal */
        connect(): void;
        /** @internal */
        on(event: string, listener: (...args: any[]) => void): void;
        /** @internal */
        off(event: string, listener: (...args: any[]) => void): void;
        /**
         * Sends data to the runtime.
         * NOTE: Please keep traffic as low as possible.
         */
        send(topic: string, data: any): void;
        subscribe(topic: string, callback: CommSubscriber): void;
        unsubscribe(topic: string, callback: CommSubscriber): void;
    }

    interface ContextMenu {
        hide(): void;
        show(options: menu.ContextMenuOptions): void;
    }

    /** @internal */
    interface Deploy {
        /**
         * options:
         *   type: "default" - Button with drop-down options - no further customisation available
         *      label: the text to display - default: "Deploy"
         *   type: "simple"  - Button without dropdown. Customisations:
         *      label: the text to display - default: "Deploy"
         *      icon : the icon to use. Null removes the icon. default: "red/images/deploy-full-o.svg"
         */
        init(options?: {
            type?: "default" | "simple";
            label?: string;
            icon?: string | null;
        }): void;
        setDeployInflight(state: boolean): void;
    }

    /** @internal */
    interface Diagnostics {
        init(): void;
    }

    /** @internal */
    interface Diff {
        init(): void;
        getRemoteDiff(callback: (diff: object) => void): void;
        showRemoteDiff(diff: object, options?: object): void;
        showUnifiedDiff(options: object): void;
        showCommitDiff(options: object): void;
        mergeDiff(diff: object): void;
    }

    /** NOTE: may be not complete */
    namespace editor {
        type ConfigNodePrefix = "node-config-input";
        type NodePrefix = "node-config-input" | "node-input";

        interface EditorOptions {
            element?: JQuery;
            id?: string;
            mode?: string;
            focus?: boolean;
            foldStyle?: string;
            options?: object;
            readOnly?: boolean;
            stateId?: string;
            value?: string;
            globals?: object;
        }

        interface BufferOptions {
            cancel?: () => void;
            complete?: (value: any) => void;
            focus: boolean;
            focusElement?: JQuery;
            onclose?: () => void;
            stateId: string;
            title?: string;
            value: any;
        }

        interface ExpressionOptions {
            cancel?: () => void;
            complete?: (value: any) => void;
            focusElement?: JQuery;
            onclose?: () => void;
            stateId: string;
            parent?: string;
            title?: string;
            value: any;
        }

        interface JavaScriptOptions {
            cancel?: () => void;
            complete?: (value: any) => void;
            cursor?: { column: number; row: number };
            extraLibs?: any[];
            focusElement?: JQuery;
            mode?: string;
            onclose?: () => void;
            stateId: string;
            title?: string;
            value: any;
            width?: "Infinite" | number;
        }

        interface JSONOptions {
            cancel?: () => void;
            complete?: (value: any) => void;
            focusElement?: JQuery;
            onclose?: () => void;
            readOnly?: boolean;
            requireValid?: boolean;
            stateId: string;
            title?: string;
            toolbarButtons?: {
                click?: (this: JQuery, event: JQuery.ClickEvent) => void;
                id?: string;
                icon?: string;
                label?: string;
                text?: string;
                title?: string;
            }[];
            value: any;
            width?: "Infinite" | number;
        }

        interface MarkdownOptions {
            cancel?: () => void;
            complete?: (value: any) => void;
            cursor?: { column: number; row: number };
            focusElement?: JQuery;
            header?: JQuery;
            onclose?: () => void;
            stateId: string;
            title?: string;
            value: any;
            width?: "Infinite" | number;
        }

        interface TextOptions {
            cancel?: () => void;
            complete?: (value: any) => void;
            cursor?: { column: number; row: number };
            focusElement?: JQuery;
            mode?: string;
            onclose?: () => void;
            stateId: string;
            title?: string;
            value: any;
            width?: string | number;
        }

        interface TypeEditorDefinition {
            show(options: TypeEditorOptions): void;
            buildToolbar?: (container: JQuery, editor: AceAjax.Editor) => void;
        }

        interface TypeEditorOptions extends Record<string, any> {
            cancel?: () => void;
            complete?: (value: any) => void;
            onclose?: () => void;
            focusElement?: JQuery;
            stateId: string;
            title?: string;
            value: any;
        }

        interface PaneDefinition {
            label: string;
            name: string;
            iconClass?: string;
            create: (container: JQuery) => void;
            resize?: (size: { height: number; width: number }) => void;
            close?: () => void;
            show?: () => void;
            apply?: (editState: object) => void;
        }

        interface Tray {
            buttons?: TrayButton[];
            focusElement?: JQuery | false;
            maximized?: boolean;
            title?: string;
            width?: number;

            close?: () => void;
            open?: (tray: JQuery, done?: () => void) => void;
            resize?: (options: TrayResizeOptions) => void;
            show?: () => void;
        }

        interface TrayButton {
            id?: string;
            class?: string;
            click?: (this: widgets.ToogleButton, event: JQuery.ClickEvent) => void;
            text?: string;
        }

        interface TrayOptions extends Omit<Tray, "width"> {
            overlay?: boolean;
            width?: "inherit" | number;
        }

        interface TrayResizeOptions {
            width: number;
            height?: number;
        }
    }

    interface Editor {
        readonly colorPicker: ColorPicker;
        /**
         * Returns a list of all TypeEditor registered by calling {@link registerTypeEditor}.
         */
        readonly customEditTypes: editor.TypeEditorDefinition[];
        /** @internal */
        init(): void;
        /** @internal */
        buildEditForm(
            container: JQuery<HTMLElement>,
            formId: string,
            type: string,
            ns: string,
            node: never,
        ): JQuery<HTMLElement>;
        /**
         * Create a editor ui component
         * @param options - the editor options
         */
        createEditor(options: editor.EditorOptions): AceAjax.Editor;
        /**
         * Opens the edit box for the given **node**.
         * Must be a regular node!
         * @param node The node to edit
         * @param defaultTab
         */
        edit(node: nodes.Node, defaultTab?: any): void;
        /**
         * Opens the edit box for the given **config node**.
         * @param name name of the property that holds this config node or empty
         * @param type type of config node
         * @param id id of config node to edit.`_ADD_` for a new one
         * @param prefix the input prefix of the parent property
         * @param editContext the node that was being edited that triggered editing this node
         */
        editConfig(
            name: string,
            type: string,
            id: string,
            prefix?: editor.ConfigNodePrefix,
            editContext?: nodes.Node,
        ): void;
        /**
         * Opens the edit box for the given **flow** (workspace).
         * @param workspace The flow to edit
         * @param defaultTab
         */
        editFlow(workspace: nodes.Workspace, defaultTab?: any): void;
        /**
         * Opens the edit box for the given **group**.
         * @param group The group node to edit
         * @param defaultTab
         */
        editGroup(group: nodes.Group, defaultTab?: any): void;
        /**
         * Opens the edit box for the given **subflow**.
         * @param subflow The subflow to edit
         * @param defaultTab
         */
        editSubflow(subflow: nodes.Subflow, defaultTab?: any): void;

        /**
         * Opens a Buffer edit box.
         */
        editBuffer(options: editor.BufferOptions): void;
        /**
         * Opens a Expression edit box.
         */
        editExpression(options: editor.ExpressionOptions): void;
        /**
         * Opens a JavaScript edit box.
         */
        editJavaScript(options: editor.JavaScriptOptions): void;
        /**
         * Opens a JSON edit box.
         */
        editJSON(options: editor.JSONOptions): void;
        /**
         * Opens a Markdown edit box.
         */
        editMarkdown(options: editor.MarkdownOptions): void;
        /**
         * Opens a Text edit box.
         */
        editText(options: editor.TextOptions): void;

        /**
         * Generates a consistent but unique ID for saving and restoring the code editors view state.
         */
        generateViewStateId(source: string, thing?: object, suffix?: string): string | false;
        /**
         * Returns a list of all modified objects (all open edit boxes)
         */
        getEditStack(): object[];
        /**
         * Creates a config-node select box for this property
         * @param node the node being edited
         * @param property the name of the node property
         * @param type the type of the config-node
         * @param prefix the prefix to use in the input element ids
         * @param filter a function to filter the list of config nodes
         * @param env the environment variable object (only used for subflow env vars)
         */
        prepareConfigNodeSelect(
            node: nodes.BaseNode,
            property: string,
            type: string,
            prefix: editor.ConfigNodePrefix,
            filter?: (configNode: nodes.ConfigNode) => boolean,
            env?: object,
        ): void;
        /** @internal */
        registerEditPane(type: string, definition: editor.PaneDefinition, filter?: any): void;
        /**
         * Register a type editor.
         * @param type the type name
         * @param definition the editor definition
         */
        registerTypeEditor(type: string, definition: editor.TypeEditorDefinition): void;
        showIconPicker(
            container: JQuery,
            backgroundColor: string,
            iconPath: object,
            faOnly: boolean,
            done: (res: string) => void,
        ): void;
        /**
         * Show a type editor.
         * @param type - the type to display
         * @param options - options for the editor
         */
        showTypeEditor(type: string, options: editor.TypeEditorOptions): void;
        /**
         * Called when the node's properties have changed.
         * Marks the node as dirty and needing a size check.
         * Removes any links to non-existant outputs.
         * @param node the node that has been updated
         * @param outputMap (optional) a map of old->new port numbers if wires should be moved
         * @returns the links that were removed due to this update
         * @internal
         */
        updateNodeProperties(node: nodes.BaseNode, outputMap?: Record<string, string>): nodes.Link[];
        /**
         * Validates each property of a node by calling {@link nodes.PropertyDefinition.validate validate}.
         * @param node - the node being validated
         */
        validateNode(node: nodes.BaseNode): boolean;
    }

    /** @internal */
    interface EnvVar {
        init(): void;
    }

    /** @internal */
    interface EventLog {
        init(): void;
        show(): void;
        log(id: any, payload: { ts: number; data?: string; type?: string }): void;
        startEvent(name: string): void;
    }

    namespace events {
        interface DefaultListener {
            [k: string]: (...args: any[]) => void;
        }

        type ListenerSignature<L> = {
            [E in keyof L]: (...args: any[]) => void;
        };

        /**
         * Note: any internal events should be considered private,
         * subject to change without notification and not for general use.
         * @link https://nodered.org/docs/api/ui/events/#available-events
         */
        interface Events extends DefaultListener {
            /** @internal */
            "actionList:close": () => void;
            /** @internal */
            "actionList:open": () => void;
            /**
             * A new flow has been deployed
             */
            deploy: () => void;
            /** @internal */
            "editor:change": () => void;
            /** @internal */
            "editor:close": () => void;
            /** @internal */
            "editor:open": () => void;
            /** @internal */
            "editor:save": (node: nodes.BaseNode) => void;
            /**
             * A new flow has been added
             */
            "flows:add": (workspace: nodes.Workspace) => void;
            /**
             * A flow’s properties have been changed
             */
            "flows:change": (workspace: nodes.Workspace) => void;
            /** @internal */
            "flows:loaded": () => void;
            /**
             * A flow has been removed
             */
            "flows:remove": (workspace: nodes.Workspace) => void;
            /**
             * The flows have been reordered
             */
            "flows:reorder": (workspaces: nodes.UID[]) => void;
            /**
             * A new group has been added
             */
            "groups:add": (group: nodes.Group) => void;
            /**
             * A group’s properties have been changed
             */
            "groups:change": (group: nodes.Group) => void;
            /**
             * A new group has been removed
             */
            "groups:remove": (group: nodes.Group) => void;
            /**
             * A new junction has been added
             */
            "junctions:add": (junction: nodes.Junction) => void;
            /**
             * A junction’s properties have been changed
             */
            "junctions:change": (junction: nodes.Junction) => void;
            /**
             * A new junction has been removed
             */
            "junctions:remove": (junction: nodes.Junction) => void;
            /**
             * A new link has been added
             */
            "links:add": (link: nodes.Workspace) => void;
            /**
             * A new link has been removed
             */
            "links:remove": (link: nodes.Workspace) => void;
            /**
             * A user has logged into the editor.
             * If `adminAuth` is not configured, this event is never emitted
             */
            login: (user: string) => void;
            /**
             * The current user has logged out.
             */
            logout: () => void;
            /**
             * A new node has been added
             */
            "nodes:add": (node: nodes.BaseNode) => void;
            /**
             * A node’s properties have been changed
             */
            "nodes:change": (node: nodes.BaseNode) => void;
            /**
             * A new node has been removed
             */
            "nodes:remove": (node: nodes.BaseNode) => void;
            /**
             * Nodes have been reordered on a flow
             */
            "nodes:reorder": (z: nodes.UID, nodes: nodes.BaseNode[]) => void;
            "project:change": (change: { name: string }) => void;
            /** @internal */
            "projects:load": (project: object) => void;
            /**
             * A module has updated to a new version
             */
            "registry:module-updated": (module: { module: string; version: string }) => void;
            /**
             * A new Node-Set has been added to the palette
             */
            "registry:node-set-added": (set: registry.NodeSet) => void;
            /**
             * A Node-Set has been disabled
             */
            "registry:node-set-disabled": (set: registry.NodeSet) => void;
            /**
             * A Node-Set has been enabled
             */
            "registry:node-set-enabled": (set: registry.NodeSet) => void;
            /**
             * A Node-Set has been removed
             */
            "registry:node-set-removed": (set: registry.NodeSet) => void;
            /**
             * A new Node has been added to the palette
             */
            "registry:node-type-added": (type: string) => void;
            /**
             * A Node has been removed from the palette
             */
            "registry:node-type-removed": (type: string) => void;
            /**
             * A Plugin has been added
             */
            "registry:plugin-added": (name: string) => void;
            /** @internal */
            "registry:plugin-module-added": (name: string) => void;
            /** @internal */
            "runtime-state": (state: Record<string, any>) => void;
            /** @internal */
            "search:close": () => void;
            /** @internal */
            "search:open": () => void;
            /** @internal */
            "sidebar:resize": () => void;
            /**
             * A new subflow has been added
             */
            "subflows:add": (subflow: nodes.Subflow) => void;
            /**
             * A subflow’s properties have been changed
             */
            "subflows:change": (subflow: nodes.Subflow) => void;
            /**
             * A new subflow has been removed
             */
            "subflows:remove": (subflow: nodes.Subflow) => void;
            /** @internal */
            "type-search:close": () => void;
            /** @internal */
            "type-search:open": () => void;
            /**
             * The current selection in the workspace has changed
             */
            "view:selection-changed": (selection: {
                nodes?: nodes.BaseNode;
                links?: nodes.Link[];
                link?: nodes.Link;
            }) => void;
            /**
             * The workspace has switched to a different tab
             */
            "workspace:change": (change: { old: nodes.UID; workspace: nodes.UID }) => void;
            /**
             * The workspace has been cleared - this happens when switching projects
             */
            "workspace:clear": () => void;
            /**
             * The workspace has been closed
             */
            "workspace:close": (workspace: { workspace: nodes.UID }) => void;
            /**
             * The dirty state of the editor has changed.
             */
            "workspace:dirty": (dirty: { dirty: boolean }) => void;
            /**
             * A tab has been hidden.
             */
            "workspace:hide": (hidden: { workspace: nodes.UID }) => void;
            /**
             * A previously hidden tab has been shown.
             */
            "workspace:show": (shown: { workspace: nodes.UID }) => void;
        }
    }

    /** @link https://nodered.org/docs/api/ui/events/ */
    interface Events<L extends events.ListenerSignature<L> = events.Events> {
        /**
         * Registers a new handler for the given event.
         * @param event The name of the event to listen
         * @param listener The handler function to add
         * @example
         * RED.events.on("nodes:add", function (node) {
         *   console.log("A node has been added to the workspace!")
         * });
         * @link https://nodered.org/docs/api/ui/events/#methods-on
         */
        on<U extends keyof L>(event: U, listener: L[U]): void;
        /**
         * Removes a previously registered event handler.
         * @param event The name of the event
         * @param listener The handler function to remove
         * @link https://nodered.org/docs/api/ui/events/#methods-off
         */
        off<U extends keyof L>(event: U, listener: L[U]): void;
        /**
         * Emits a event with the supplied arguments
         * @param event The name of the event
         * @param args The argument list
         */
        emit<U extends keyof L>(event: U, ...args: Parameters<L[U]>): void;
    }

    interface Group {
        readonly def: nodes.GroupDefinition;
        /** @internal */
        init(): void;
        /**
         * Adds node(s) to group
         */
        addToGroup(group: nodes.Group, nodes: nodes.BaseNode | nodes.BaseNode[]): void;
        contains(group: nodes.Group, item: nodes.BaseNode): boolean;
        /**
         * Creates a group and adds nodes to it
         */
        createGroup(nodes: nodes.BaseNode[]): nodes.Group;
        getNodes(group: nodes.Group, recursive: boolean): nodes.BaseNode[];
        markDirty(group: nodes.Group): void;
        /**
         * Removes node(s) from group
         * @param reparent
         */
        removeFromGroup(group: nodes.Group, nodes: nodes.BaseNode | nodes.BaseNode[], reparent?: boolean): void;
        /**
         * Deletes the group and returns the previously associated nodes
         */
        ungroup(group: nodes.Group): nodes.BaseNode[];
    }

    namespace history {
        /**
         * Represent an History event
         */
        type HistoryEvent =
            | AddEvent
            | DeleteEvent
            | EditEvent
            | MoveEvent
            | MultiEvent
            | ReorderEvent
            | ReplaceEvent
            | CreateSubflowEvent
            | DeleteSubflowEvent
            | AddToGroupEvent
            | CreateGroupEvent
            | UngroupEvent
            | RemoveFromGroupEvent;

        /**
         * Represents the type of a History event.
         */
        type HistoryType =
            | "add"
            | "delete"
            | "edit"
            | "move"
            | "multi"
            | "reorder"
            | "replace"
            | "createSubflow"
            | "deleteSubflow"
            | "addToGroup"
            | "createGroup"
            | "ungroup"
            | "removeFromGroup";

        interface BaseEvent {
            /**
             * The history event type
             */
            t: HistoryType;
            /**
             * Whether the workspace is dirty
             */
            dirty: boolean;
            /**
             * A called after the undo/redo event
             */
            callback?: (event: HistoryEvent) => void;
        }

        /**
         * Represents an event for adding elements to the history.
         */
        interface AddEvent extends BaseEvent {
            t: "add";
            /**
             * An array with added groups
             */
            groups?: nodes.Group[];
            /**
             * An array with added junctions
             */
            junctions?: nodes.Junction[];
            /**
             * An array with added links
             */
            links?: nodes.Link[];
            /**
             * An array with added node ids
             */
            nodes?: nodes.UID[];
            /**
             * An array with removed links
             */
            removedLinks?: nodes.Link[];
            subflow?: {
                id: string;
                changed?: boolean;
                instances: nodes.BaseNode[];
            };
            /**
             * An array with added subflows (tabs)
             */
            subflows?: nodes.Subflow[];
            /**
             * An array with added workspaces
             */
            workspaces?: nodes.Workspace[];
        }

        /**
         * Represents an event for adding nodes to a group.
         */
        interface AddToGroupEvent extends BaseEvent {
            t: "addToGroup";
            /**
             * The group in which remove nodes
             */
            group: nodes.Group;
            /**
             * An array of nodes or one node to remove from the group
             */
            nodes?: nodes.BaseNode[] | nodes.BaseNode;
            /**
             * Either to re-add to parent group
             */
            reparent?: boolean;
        }

        /**
         * Represents an event for creating a group.
         */
        interface CreateGroupEvent extends BaseEvent {
            t: "createGroup";
            /**
             * An array with groups to remove
             */
            groups?: nodes.Group[];
        }

        /**
         * Represents an event for creating a subflow.
         */
        interface CreateSubflowEvent extends BaseEvent {
            t: "createSubflow";
            /**
             * The ID of the active workspace
             */
            activeWorkspace: nodes.UID;
            /**
             * An array with added links (during conversion to Subflow - links inside the subflow)
             */
            links?: nodes.Link[];
            /**
             * An array with subflow node IDs
             */
            nodes?: nodes.UID[];
            /**
             * An array with removed links (during conversion to Subflow - links from active workspace)
             */
            removedLinks?: nodes.Link[];
            /**
             * The subflow created to delete
             */
            subflow: {
                subflow: nodes.Subflow;
                offsetX?: number;
                offsetY?: number;
            };
        }

        /**
         * Represents an event for deleting elements from the history.
         */
        interface DeleteEvent extends BaseEvent {
            t: "delete";
            /**
             * An object with changes.
             * The key is the node ID and the value is an object with the changes
             */
            changes?: Record<nodes.UID, object>;
            /**
             * An array with created links
             */
            createdLinks?: nodes.Link[];
            /**
             * An array with removed groups
             */
            groups?: nodes.Group[];
            /**
             * An array with removed junctions
             */
            junctions?: nodes.Junction[];
            /**
             * An array with removed links
             */
            links?: nodes.Link[];
            /**
             * An array with removed nodes
             */
            nodes?: nodes.BaseNode[];
            subflow?: {
                id?: nodes.UID;
                instances?: nodes.BaseNode[];
                status?: string;
            };
            /**
             * An array with removed subflow input
             */
            subflowInputs?: nodes.SubflowNode[];
            /**
             * An array with removed subflow outputs
             */
            subflowOutputs?: nodes.SubflowNode[];
            /**
             * An array with removed subflows (tabs)
             */
            subflows?: nodes.Subflow[];
            /**
             * An array with removed workspace
             */
            workspaces?: nodes.Workspace[];
        }

        /**
         * Represents an event for deleting a subflow.
         */
        interface DeleteSubflowEvent extends BaseEvent {
            t: "deleteSubflow";
            /**
             * The id of the active workspace
             */
            activeWorkspace: nodes.UID;
            /**
             * An array with added links (during undo conversion to Subflow - links from active workspace)
             */
            createdLinks?: nodes.Link[];
            /**
             * An array with removed links (during undo conversion to Subflow - links inside the subflow)
             */
            links?: nodes.Link[];
            /**
             * An array with nodes to move to the subflow to create
             */
            movedNodes?: nodes.BaseNode[];
            /**
             * The deleted subflow to create
             */
            subflow: {
                subflow: nodes.Subflow;
                offsetX?: number;
                offsetY?: number;
            };
            /**
             * An array with subflow nodes (redo conversion to subflow)
             */
            subflows?: nodes.Subflow[];
        }

        /**
         * Represents an event for editing a node.
         */
        interface EditEvent extends BaseEvent {
            t: "edit";
            /**
             * The changed node state before modifications
             */
            changed: boolean;
            /**
             * An object with previous node properties value
             */
            changes: object;
            /**
             * An array with links to create (redo)
             */
            createdLinks?: nodes.Link[];
            /**
             * An array with removed links
             */
            links?: nodes.Link[];
            /**
             * The current node/subflow
             */
            node: nodes.BaseNode | nodes.Subflow;
            outputMap?: object;
            /**
             * Subflow properties
             */
            subflow?: {
                instances?: nodes.BaseNode[];
                inputCount?: number;
                outputCount?: number;
                status?: string;
            };
        }

        /**
         * Represents an event for moving nodes.
         */
        interface MoveEvent extends BaseEvent {
            t: "move";
            /**
             * The group in which the nodes were added
             */
            addToGroup?: nodes.Group;
            links?: nodes.Link[];
            /**
             * An array with nodes moved
             */
            nodes: { n: nodes.BaseNode; ox: number; oy: number; dx: number; dy: number }[];
            removedLinks?: nodes.Link[];
            /**
             * The group in which the nodes were removed
             */
            removeFromGroup?: nodes.Group;
        }

        /**
         * Represents an event for multiple sub-events.
         */
        interface MultiEvent extends BaseEvent {
            t: "multi";
            /**
             * An array with sub-events
             */
            events: HistoryEvent[];
        }

        /**
         * Represents an event for removing nodes from a group.
         */
        interface RemoveFromGroupEvent extends BaseEvent {
            t: "removeFromGroup";
            /**
             * The group in which add nodes
             */
            group: nodes.Group;
            /**
             * An array of nodes or one node to add to the group
             */
            nodes?: nodes.BaseNode[] | nodes.BaseNode;
            /**
             * Either to re-add to parent group
             */
            reparent?: boolean;
        }

        /**
         * Represents an event for reordering nodes or workspaces.
         */
        interface ReorderEvent extends BaseEvent {
            t: "reorder";
            nodes?: { from: string; to: string; z: string };
            workspaces?: {
                from: nodes.UID[];
                to: nodes.UID[];
            };
        }

        /**
         * Represents a replacement event (complete or incomplete).
         */
        type ReplaceEvent = CompleteReplaceEvent | IncompleteReplaceEvent;

        /**
         * Represents a complete replacement event.
         */
        interface CompleteReplaceEvent extends BaseEvent {
            t: "replace";
            /**
             * An object with a node id as key and the node changed property as value
             */
            changed: Record<string, boolean>;
            /**
             * Either the {@link ReplaceEvent.config} property contains the complete flows
             */
            complete: true;
            /**
             * An array with the complete flows
             */
            config: nodes.BaseNode[];
            /**
             * An object with a node ID as key and the node moved property as value
             */
            moved: Record<nodes.UID, boolean>;
            /**
             * A revision version
             */
            rev: string;
        }

        /**
         * Represents an incomplete replacement event.
         */
        interface IncompleteReplaceEvent extends BaseEvent {
            t: "replace";
            /**
             * Either the {@link ReplaceEvent.config} property contains the complete flows
             */
            complete?: false;
            /**
             * An array with config nodes and/or subflow definitions to replace.
             */
            config: nodes.BaseNode[];
        }

        /**
         * Represents an event for ungrouping nodes.
         */
        interface UngroupEvent extends BaseEvent {
            t: "ungroup";
            /**
             * An array with groups to create
             */
            groups?: nodes.Group[];
        }
    }

    interface History {
        /**
         * @internal
         */
        markAllDirty(): void;
        /**
         * Returns a list with undo events.
         */
        list(): history.HistoryEvent[];
        /**
         * Returns a list with redo events.
         */
        listRedo(): history.HistoryEvent[];
        /**
         * Returns the size of the list with redo events.
         */
        depth(): number;
        /**
         * Pushes an event to the History. This event can be undo by
         * calling {@link History.pop pop}().
         * @param event The event to push
         */
        push(event: history.HistoryEvent): void;
        /**
         * Called to undo an event.
         * Takes the last event of the undo list, do undo event and adds
         * the redo event generated to the redo list.
         */
        pop(): void;
        /**
         * Returns the last event of undo list.
         */
        peek(): history.HistoryEvent;
        /**
         * Replaces the last event of undo list by the event given
         * in parameter.
         * @param event The event to replace
         */
        replace(event: history.HistoryEvent): void;
        /**
         * Clears the undo list and redo list.
         */
        clear(): void;
        /**
         * Called to redo an event.
         * Takes the last event of the redo list, do redo event and adds
         * the undo event generated to the undo list.
         */
        redo(): void;
    }

    namespace i18n {
        type I18nT = (id: string, tplStrs?: Record<string, string | number>) => string;
    }

    interface I18n {
        /** @internal */
        init(options: object, done: () => void): void;
        detectLanguage(): string;
        lang(): string;
        /** @internal */
        loadNodeCatalog(namespace: string, done: () => void): void;
        /** @internal */
        loadNodeCatalogs(done: () => void): void;
        /** @internal */
        loadPluginCatalogs(done: () => void): void;
    }

    interface Keyboard {
        /** @internal */
        init(done: () => void): void;
        /**
         * Adds the event for the given key with the given scope in the handler
         * and triggers an action for this event.
         */
        add(scope: string, key: string, action: string): void;
        /**
         * Adds the event for the given key with the given scope in the handler
         * and triggers the callback for this event.
         */
        add(scope: string, key: string, callback: () => void): void;
        add(scope: string, key: string, modifiers: string, ondown: boolean): void;
        disable(): void;
        enable(): void;
        getShortcut(actionName: string): { key: string; scope: string; user?: boolean };
        getUserShortcut(actionName: string): Record<string, { key: string; scope: string }>;
        formatKey(key: string, plain?: boolean): string;
        remove(key: string, modifiers?: object): void;
        revertToDefault(actionName: string): void;
        validateKey(key: string): boolean;
    }

    interface Library {
        init(): void;
        create(options: {
            elementPrefix?: string | undefined;
            editor:
                | AceAjax.Editor
                | {
                    // Orion Editor
                    setText: () => void;
                    getText: () => void;
                };
            type: string;
            url: string;
            mode?: string | undefined;
            ext?: string | undefined;
            fields: string[];
        }): void;
        createBrowser(options: {
            container: JQuery;
            onselect?: ((item: object) => void) | undefined;
            onconfirm?: ((item: object) => void) | undefined;
            folderTools?: boolean | undefined;
        }): {
            select(item: object): void;
            getSelected(): object;
            focus(): void;
            data(content: object[], selectFirst?: boolean): void;
        };
        loadLibraryFolder(library: string, type: string, root: string, done: (items: object[]) => void): void;
    }

    namespace menu {
        interface ContextMenuOptions {
            options?: menu.MenuItemOptions[];
            type?: "workspace";
            x: number;
            y: number;
        }

        interface MenuItemOptions {
            direction?: string;
            disabled?: boolean;
            group?: boolean;
            href?: string;
            icon?: string;
            id?: string;
            label?: string;
            local?: boolean;
            onselect?: string | ((state?: boolean) => void);
            options?: MenuOptions[];
            selected?: boolean;
            setting?: string;
            shortcut?: { scope: string; key: string; user?: boolean };
            sublabel?: string;
            toggle?: boolean;
            visible?: boolean;
        }

        interface MenuOptions {
            direction?: string;
            id?: string;
            onpostselect?: (state?: boolean) => void;
            onpreselect?: (state?: boolean) => void;
            options: Array<MenuItemOptions | null>;
        }
    }

    interface Menu {
        addItem(id: string, opt: menu.MenuItemOptions | null): void;
        init(options: menu.MenuOptions): JQuery<HTMLUListElement>;
        isSelected(id: string): boolean;
        refreshShortcuts(): void;
        removeItem(id: string): void;
        setAction(id: string, action: string | ((state?: boolean) => void)): void;
        setDisabled(id: string, state: boolean): void;
        setSelected(id: string, state: boolean): void;
        setVisible(id: string, state: boolean): void;
        toggleSelected(id: string): void;
    }

    /** @since v4.0.0 */
    interface MultiPlayer {
        /** @internal */
        init(): void;
    }

    namespace nodes {
        /**
         * The Unique Node ID:
         * A set of 16 number or lower alphabetic characters.
         * Generate one with {@link Nodes.id RED.nodes.id()}.
         */
        type UID = string;

        /** Reserved name for properties that MUST NOT BE USED. */
        type ReservedProperties =
            | "changed"
            | "colorChanged"
            | "dirty"
            | "icon"
            | "id"
            | "info"
            | "inputLabels"
            | "label"
            | "moved"
            | "outputLabels"
            | "ports"
            | "reordered"
            | "selected"
            | "type"
            | "users"
            | "valid"
            | "validationErrors"
            | "wires"
            | "a"
            | "b"
            | "c"
            | "d"
            | "e"
            | "f"
            | "g"
            | "h"
            | "i"
            | "j"
            | "k"
            | "l"
            | "m"
            | "n"
            | "o"
            | "p"
            | "q"
            | "r"
            | "s"
            | "t"
            | "u"
            | "v"
            | "w"
            | "x"
            | "y"
            | "z";

        /** Name for properties that are NOT importable/exportable. */
        type NotExportedProperties =
            | "_"
            | "_config"
            | "_def"
            | "changed"
            | "colorChanged"
            | "dirty"
            | "moved"
            | "reordered"
            | "selected"
            | "users"
            | "valid"
            | "validationErrors"
            | "a"
            | "b"
            | "c"
            | "e"
            | "f"
            | "h"
            | "i"
            | "j"
            | "k"
            | "m"
            | "n"
            | "o"
            | "p"
            | "q"
            | "r"
            | "s"
            | "t"
            | "u"
            | "v"
            | "w";

        type NodeCredentials = Record<string, string> | {};

        /**
         * Node properties
         * @see {@link https://nodered.org/docs/creating-nodes/properties}
         */
        interface NodeProperties {
            name?: string;
            inputs?: 0 | 1;
            outputs?: number;
        }

        interface CredentialDefinition<
            TVal,
            TProps extends NodeProperties = NodeProperties,
            TCreds extends NodeCredentials = NodeCredentials,
            TCategory extends string = "",
        > {
            /**
             * The credential label. Shown in the error badge/input popover.
             */
            label?: string;
            /**
             * The default value the credential takes. **Do not use it for legacy property**.
             */
            value?: TVal | "";
            /**
             * Whether the value must be non-empty
             */
            required?: boolean;
            validate?: PropertyValidator<TProps, TCreds, TCategory>;
            type: "text" | "password";
        }

        /**
         * Property definition
         * @see {@link https://nodered.org/docs/creating-nodes/properties#property-definitions}
         */
        interface PropertyDefinition<
            TVal,
            TProps extends NodeProperties = NodeProperties,
            TCreds extends NodeCredentials = NodeCredentials,
            TCategory extends string = "",
        > {
            /**
             * The property label. Shown in the error badge/input popover.
             */
            label?: string;
            /**
             * The default value the property takes. **Do not use it for legacy property**.
             */
            value?: TVal | "";
            /**
             * Whether the value must be non-empty
             */
            required?: boolean;
            validate?: PropertyValidator<TProps, TCreds, TCategory>;
            /**
             * Selector to a config node type
             */
            type?: string;
            /**
             * Defines the 'real' type for lists of nodes
             * @internal
             */
            _type?: { type: string; array: true };
        }

        /**
         * If the validator takes two arguments, it is a >= 3.x validator that can return a String
         * to mean 'invalid' and provide a reason.
         */
        type PropertyValidator<
            TProps extends NodeProperties = NodeProperties,
            TCreds extends NodeCredentials = NodeCredentials,
            TCategory extends string = "",
        > =
            | ((
                this: NodeInstance<TProps, TCreds, TCategory>,
                value: string,
                opt: { label?: string },
            ) => boolean | string)
            | ((this: NodeInstance<TProps, TCreds, TCategory>, value: string) => boolean);

        /**
         * Properties definitions (`defaults` object)
         * Read more: https://nodered.org/docs/creating-nodes/properties
         */
        type PropertiesDefinition<
            TProps extends NodeProperties,
            TCreds extends NodeCredentials,
            TCategory extends string,
        > = {
            [K in keyof TProps]: K extends ReservedProperties ? never
                : PropertyDefinition<TProps[K], TProps, TCreds, TCategory>;
        };

        /**
         * Credentials definitions (`credentials` object)
         */
        type CredentialsDefinition<
            TProps extends NodeProperties,
            TCreds extends NodeCredentials,
            TCategory extends string,
        > = {
            [K in keyof TCreds]: K extends "_" ? never : CredentialDefinition<TCreds[K], TProps, TCreds, TCategory>;
        };

        /**
         * Node Definition
         * Read more: https://nodered.org/docs/creating-nodes/node-html#node-definition
         */
        interface NodeDefinition<
            TProps extends NodeProperties = NodeProperties,
            TCreds extends NodeCredentials = NodeCredentials,
            TCategory extends "config" | string = string,
        > {
            /** The palette category the node appears in. */
            category: TCategory;
            /**
             * The editable properties for the node.
             * Read more: https://nodered.org/docs/creating-nodes/properties
             */
            defaults: PropertiesDefinition<TProps, TCreds, TCategory>;
            /**
             * The credential properties for the node.
             * Read more: https://nodered.org/docs/creating-nodes/credentials
             */
            credentials?: CredentialsDefinition<TProps, TCreds, TCategory>;
            /**
             * How many inputs the node has, either 0 or 1.
             */
            inputs?: 0 | 1;
            /**
             * How many outputs the node has. Can be 0 or more.
             */
            outputs?: number;
            /**
             * The background colour to use.
             * Read more: https://nodered.org/docs/creating-nodes/appearance#background-colour
             */
            color?: string;
            /**
             * The label to use in the palette.
             * Read more: https://nodered.org/docs/creating-nodes/appearance#palette-label
             */
            paletteLabel?: string | ((this: NodeInstance<TProps, TCreds, TCategory>) => string);
            /**
             * The label to use in the workspace.
             * Read more: https://nodered.org/docs/creating-nodes/appearance#node-label
             */
            label?: string | ((this: NodeInstance<TProps, TCreds, TCategory>) => string);
            /**
             * The style to apply to the label.
             * Read more: https://nodered.org/docs/creating-nodes/appearance#label-style
             */
            labelStyle?:
                | "node_label"
                | "node_label_italic"
                | string
                | ((this: NodeInstance<TProps, TCreds, TCategory>) => "node_label" | "node_label_italic" | string);
            /**
             * Optional label to add on hover to the input port of a node.
             * Read more: https://nodered.org/docs/creating-nodes/appearance#port-labels
             */
            inputLabels?: string | ((this: NodeInstance<TProps, TCreds, TCategory>) => string);
            /**
             * Optional labels to add on hover to the output ports of a node.
             * Read more: https://nodered.org/docs/creating-nodes/appearance#port-labels
             */
            outputLabels?:
                | string
                | string[]
                | ((this: NodeInstance<TProps, TCreds, TCategory>, idx: number) => string | undefined);
            /**
             * The icon to use.
             * Read more: https://nodered.org/docs/creating-nodes/appearance#icon
             */
            icon?: string;
            /**
             * The alignment of the icon and label.
             * Read more: https://nodered.org/docs/creating-nodes/appearance#alignment
             */
            align?: "left" | "right";
            /**
             * Adds a button to the edge of the node.
             * Read more: https://nodered.org/docs/creating-nodes/appearance#buttons
             */
            button?: {
                /** Called when the button is clicked */
                onclick: (this: NodeInstance<TProps, TCreds, TCategory>) => void;
                /** Function to dynamically enable and disable the button based on the node’s current configuration. */
                enabled?: (this: NodeInstance<TProps, TCreds, TCategory>) => boolean;
                /** Function to determine whether the button should be shown at all. */
                visible?: (this: NodeInstance<TProps, TCreds, TCategory>) => boolean;
            };
            /**
             * Called when the edit dialog is being built.
             * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
             */
            oneditprepare?: (this: NodeInstance<TProps, TCreds, TCategory>) => void;
            /**
             * Called when the edit dialog is okayed.
             * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
             */
            oneditsave?: (this: NodeInstance<TProps, TCreds, TCategory>) => void;
            /**
             * Called when the edit dialog is cancelled.
             * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
             */
            oneditcancel?: (this: NodeInstance<TProps, TCreds, TCategory>) => void;
            /**
             * Called when the delete button in a configuration node’s edit dialog is pressed.
             * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
             */
            oneditdelete?: (this: NodeInstance<TProps, TCreds, TCategory>) => void;
            /**
             * Called when the edit dialog is resized.
             * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
             */
            oneditresize?: (
                this: NodeInstance<TProps, TCreds, TCategory>,
                size: { width: number; height: number },
            ) => void;
            /**
             * Called when the node type is added to the palette.
             * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
             */
            onpaletteadd?: (this: NodeInstance<TProps, TCreds, TCategory>) => void;
            /**
             * Called when the node type is removed from the palette.
             * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
             */
            onpaletteremove?: (this: NodeInstance<TProps, TCreds, TCategory>) => void;
            /**
             * Called when the node type is dragged into workspace.
             */
            onadd?: (this: NodeInstance<TProps, TCreds, TCategory>) => void;
        }

        interface GroupDefinition {
            category: "config";
            defaults: {
                name: { value: "" };
                style: { value: { label: true } };
                nodes: { value: [] };
                env: { value: [] };
            };
            oneditprepare: (this: Group) => void;
            oneditresize: (this: Group, size: { width: number; height: number }) => void;
            oneditsave: (this: Group) => void;
            set: { module: "node-red" };
        }

        /** This type converts a node into its exportable form */
        type NodeObject<T extends BaseNode = BaseNode> =
            & Omit<T, NotExportedProperties>
            & (T extends { credentials: infer C } ? Omit<C, "_">
                : {});

        type NodeInstance<TProps extends NodeProperties, TCreds extends NodeCredentials, TCategory extends string> =
            & Omit<TProps, ReservedProperties>
            & (keyof TCreds extends never ? {} : Record<"credentials", Omit<TCreds, "_">>)
            // TODO: Make a selection of props
            // & Readonly<Omit<BaseNode, NotExportedProperties>>;
            & Readonly<TCategory extends "config" ? ConfigNode : Node>;

        interface BaseNode {
            _: i18n.I18nT;
            /**
             * Loaded node configuration
             * @internal
             */
            _config: object;
            /**
             * Node definition
             * @internal
             */
            _def: object;
            /** The Unique Node ID */
            id: UID;
            type: string;
            /** Whether the node configuration has changed */
            changed: boolean;
            /**
             * The flow, subflow or group ID. If the node is a Config Node,
             * the value can be undefined to use the global config
             */
            z?: UID;
        }

        interface Node extends BaseNode {
            _def: object;
            /** Whether the node color has changed and needs to be redrawn */
            colorChanged?: true;
            /** The node credentials */
            credentials?: {
                /**
                 * Loaded credentials
                 * @internal
                 */
                _?: Record<string, string>;
            };
            /** Whether the node is disabled */
            d?: true;
            /** Whether the node needs to be redrawn */
            dirty: boolean;
            /** Whether the node is included in a group */
            g?: nodes.UID;
            /** The node height in the 'flow' space */
            h?: number;
            /** An icon from file or Font Awesome */
            icon?: string;
            /** Description of the node */
            info?: string;
            /** The input count */
            inputs: 0 | 1;
            /** A list of input labels */
            inputLabels?: string[];
            /** Show/Hide the node label */
            l?: false;
            /** The node label */
            label?: string | ((this: Node) => string);
            /** Whether the node has moved */
            moved?: true;
            /** The output count */
            outputs: number;
            /** Whether the node has been reordered */
            reordered?: true;
            /** A list of output labels */
            outputLabels?: string[];
            /** Whether the node is selected */
            selected?: true;
            /** Whether the node has a valid configuration */
            valid: boolean;
            /** A list of error messages shown in the badge */
            validationErrors: string[];
            /** The node weight in the 'flow' space */
            w?: number;
            /** A list of linked nodes */
            wires?: Array<[UID]>; // eslint-disable-line @definitelytyped/no-single-element-tuple-type
            /** The horizontal position on the canvas */
            x: number;
            /** The vertical position on the canvas */
            y: number;
            z: nodes.UID;
        }

        interface ConfigNode extends BaseNode {
            /** The node credentials */
            credentials?: {
                /**
                 * Loaded credentials
                 * @internal
                 */
                _?: Record<string, string>;
            };
            /** Whether the node is disabled */
            d?: true;
            /** Description of the node */
            info?: string;
            /** The node label */
            label?: string | ((this: Node) => string);
            users: Array<ConfigNode | Node>;
            /** Whether the node has a valid configuration */
            valid: boolean;
            /** A list of error messages shown in the badge */
            validationErrors: string[];
        }

        interface Group extends BaseNode {
            _childGroups: Group[];
            _index: number;
            _order: number;
            env?: { name: string; value: string; type: string }[];
            /** The node height in the 'flow' space */
            h?: number;
            labels: string[];
            minWidth: number;
            nodes: BaseNode[];
            /** Whether the node is selected */
            selected?: true;
            style: object;
            type: "group";
            /** The node weight in the 'flow' space */
            w?: number;
            /** The horizontal position on the canvas */
            x: number;
            /** The vertical position on the canvas */
            y: number;
        }

        interface Junction extends BaseNode {
            /** Whether the node needs to be redrawn */
            dirty: boolean;
            /** The input count */
            inputs: 0 | 1;
            /** Whether the node has moved */
            moved?: true;
            /** The output count */
            outputs: number;
            type: "junction";
            /** The horizontal position on the canvas */
            x: number;
            /** The vertical position on the canvas */
            y: number;
        }

        interface Link extends BaseNode {
            source: BaseNode;
            sourcePort: number;
            target: BaseNode;
            x1: number;
            x2: number;
            y1: number;
            y2: number;
        }

        interface Subflow extends BaseNode {
            /** Whether the node needs to be redrawn */
            dirty: boolean;
            in: SubflowInput[];
            /** Description of the node */
            info?: string;
            instances: SubflowNode[];
            out: SubflowOutput[];
            type: "subflow";
            /** Whether the node has a valid configuration */
            valid: boolean;
            /** A list of error messages shown in the badge */
            validationErrors: string[];
        }

        /** Node instances of Subflow */
        interface SubflowNode extends BaseNode {
            /** The node credentials */
            credentials?: {
                /**
                 * Loaded credentials
                 * @internal
                 */
                _?: Record<string, string>;
            };
            /** Whether the node needs to be redrawn */
            dirty: boolean;
            dirtyStatus: boolean;
            env?: {
                name: string;
                type: string;
                value: string;
            }[];
            /** The node height in the 'flow' space */
            h: number;
            i: number;
            /** The input count */
            inputs: 0 | 1;
            /** The output count */
            outputs: number;
            resize: boolean;
            /** Whether the node is selected */
            selected?: true;
            /** Whether the node has a valid configuration */
            valid: boolean;
            /** A list of error messages shown in the badge */
            validationErrors: string[];
            /** The node weight in the 'flow' space */
            w: number;
            /** The horizontal position on the canvas */
            x: number;
            /** The vertical position on the canvas */
            y: number;
        }

        interface SubflowInput {
            direction: "in";
            h: number;
            i: number;
            id: UID;
            type: "subflow";
            w: number;
            x: number;
            y: number;
            z: UID;
        }

        interface SubflowOutput extends Omit<SubflowInput, "direction"> {
            direction: "out";
        }

        interface Workspace extends BaseNode {
            contentsChanged: boolean;
            disabled: boolean;
            env?: { name: string; value: string; type: string }[];
            hideable: boolean;
            /** Description of the node */
            info?: string;
            /** The node label */
            label?: string | ((this: Node) => string);
            locked: boolean;
            type: "tab";
        }

        interface ImportOptions {
            /**
             * Whether to import nodes to a new tab. Default false.
             */
            addFlow?: boolean;
            /**
             * Whether to replace all node ids. Default false.
             */
            generateIds?: boolean;
            /**
             * Whether to set `changed` = true on all newly imported nodes.
             */
            markChanged?: boolean;
            /**
             * Map of module:version - hints for unknown nodes
             * @since 4.1
             */
            modules?: Record<string, string>;
            /**
             * If node has a `z` property, dont overwrite it.
             * Only applicible when `generateIds` is false. Default false.
             */
            reimport?: boolean;
            /**
             * How to resolve any conflicts.
             *   - `import` - import as-is
             *   - `copy` - import with new id
             *   - `replace` - repace the existing
             */
            importMap?: Record<UID, "copy" | "import" | "replace">;
        }

        interface ImportResult {
            nodes: nodes.BaseNode[];
            links: {
                source: nodes.BaseNode;
                sourcePort: number;
                target: nodes.BaseNode;
            }[];
            groups: nodes.Group[];
            junctions: nodes.Junction[];
            workspaces: nodes.Workspace[];
            subflows: nodes.Subflow[];
            missingWorkspace: nodes.Workspace;
            removedNodes: nodes.BaseNode[] | undefined;
        }
    }

    interface Nodes extends Pick<registry.NodesRegistry, NodesRegistryExported> {
        readonly fontAwesome: NodesFontAwesome;
        readonly registry: registry.NodesRegistry;

        /**
         * Cleans all nodes and workspaces. Returns to a clean state before the first import.
         */
        clear(): void;
        /**
         * Get the dirty state of the editor. `Dirty` means there are undeployed changes.
         */
        dirty(): boolean;
        /**
         * Defines the dirty state of the editor. Triggers the {@link events.Events workspace:dirty} event.
         * @param dirty
         */
        dirty(dirty: boolean): void;
        /**
         * Generates a unique node ID.
         */
        id(): nodes.UID;
        version(): string;
        version(version: string): void;
        originalFlow(): nodes.NodeObject[];
        /** @internal */
        originalFlow(flow: nodes.NodeObject[]): void;

        add(node: nodes.NodeObject): nodes.BaseNode;
        addGroup(group: nodes.NodeObject<nodes.Group>): nodes.Group;
        addJunction(group: nodes.NodeObject<nodes.Junction>): nodes.Junction;
        addLink(link: nodes.Link): void;
        /**
         * Add a Subflow to the Workspace
         * @param subflow The Subflow to add
         * @param updateName Whether to update the name if already exists.
         */
        addSubflow(subflow: nodes.NodeObject<nodes.Subflow>, updateName?: boolean): void;
        addWorkspace(workspace: nodes.NodeObject<nodes.Workspace>, targetIndex?: number): void;

        remove(id: nodes.UID): { links: nodes.Link[]; nodes: nodes.BaseNode[] };
        removeGroup(group: nodes.Group): void;
        removeJunction(junction: nodes.Junction): { links: nodes.Link[] };
        removeLink(link: nodes.Link): void;
        removeSubflow(subflow: nodes.Subflow): void;
        removeWorkspace(id: nodes.UID): {
            nodes: nodes.BaseNode[];
            links: nodes.Link[];
            groups: nodes.Group[];
            junctions: nodes.Junction[];
        };

        group(id: nodes.UID): nodes.Group | null;
        junction(id: nodes.UID): nodes.Junction | null;
        node(id: nodes.UID): nodes.BaseNode | null;
        subflow(id: nodes.UID): nodes.Subflow | null;
        workspace(id: nodes.UID): nodes.Workspace | null;

        eachConfig(callback: (node: nodes.ConfigNode) => false | undefined): void;
        eachGroup(callback: (node: nodes.Group) => false | undefined): void;
        eachJunction(callback: (node: nodes.Junction) => false | undefined): void;
        eachLink(callback: (node: nodes.Link) => false | undefined): void;
        eachNode(callback: (node: nodes.Node | nodes.SubflowNode) => false | undefined): void;
        eachSubflow(callback: (node: nodes.Subflow) => false | undefined): void;
        eachWorkspace(callback: (node: nodes.Workspace) => false | undefined): void;

        getNodeLinks(id: nodes.UID, portType: 0 | 1): nodes.Link[];
        /** @deprecated */
        getNodeLinks(link: nodes.Link, portType: 0 | 1): nodes.Link[];
        groups(z: string): nodes.Group[];
        junctions(z: string): nodes.Junction[];

        getAllFlowNodes(node: nodes.BaseNode, direction?: "down" | "up"): nodes.BaseNode[];
        getAllUpstreamNodes(node: nodes.BaseNode): nodes.BaseNode[];
        getAllDownstreamNodes(node: nodes.BaseNode): nodes.BaseNode[];
        getDownstreamNodes(node: nodes.BaseNode): nodes.BaseNode[];
        getNodeIslands(nodes: nodes.BaseNode[]): nodes.BaseNode[];

        filterNodes(filter: { z?: nodes.UID; type?: string }): nodes.BaseNode[];
        filterLinks(filter: { source?: nodes.BaseNode; target?: nodes.BaseNode }): nodes.Link[];

        getNodeOrder(z: string): nodes.UID[];
        setNodeOrder(z: string, order: nodes.UID[]): void;
        getWorkspaceOrder(): nodes.UID[];
        setWorkspaceOrder(order: nodes.UID[]): void;

        moveNodesForwards(nodes: nodes.BaseNode[]): nodes.BaseNode[];
        moveNodesBackwards(nodes: nodes.BaseNode[]): nodes.BaseNode[];
        moveNodesToFront(nodes: nodes.BaseNode[]): nodes.BaseNode[];
        moveNodesToBack(nodes: nodes.BaseNode[]): nodes.BaseNode[];
        moveNodeToTab(node: nodes.BaseNode, z: string): void;

        detachNodes(nodes: nodes.BaseNode[]): { newLinks: nodes.Link[]; removedLinks: nodes.Link[] } | undefined;
        subflowContains(subflowId: nodes.UID, nodeId: nodes.UID): boolean;
        getNodeHelp(type: string): string;

        getType: registry.NodesRegistry["getNodeType"];
        registerType: registry.NodesRegistry["registerNodeType"];

        /**
         * Handles the import of nodes - these nodes can be copied, replaced or just imported.
         */
        import(nodes: string, options?: nodes.ImportOptions): nodes.ImportResult | undefined;
        import(node: nodes.NodeObject, options?: nodes.ImportOptions): nodes.ImportResult | undefined;
        import(nodes: nodes.NodeObject[], options?: nodes.ImportOptions): nodes.ImportResult | undefined;

        /**
         * Analyzes the given array of nodes to find unknown node types.
         */
        identifyImportConflicts(nodes: nodes.NodeObject[]): {
            all: nodes.BaseNode[];
            tabs: Record<nodes.UID, nodes.Workspace>;
            subflows: Record<nodes.UID, nodes.Subflow>;
            groups: Record<nodes.UID, nodes.Group>;
            junctions: Record<nodes.UID, nodes.Junction>;
            configs: Record<nodes.UID, nodes.ConfigNode>;
            nodes: Record<nodes.UID, nodes.Node>;
            conflicted: Record<nodes.UID, nodes.BaseNode>;
            zMap: Record<nodes.UID, nodes.BaseNode[]>;
        };

        /**
         * Converts a node to an exportable JSON Object
         */
        convertNode(node: nodes.BaseNode, exportCreds: boolean): nodes.NodeObject;
        convertNode(node: nodes.BaseNode, options: { credentials?: boolean; dimensions?: boolean }): nodes.NodeObject;
        /**
         * Converts the current node selection to an exportable JSON Object
         */
        /** @deprecated */
        createExportableNodeSet(
            set: nodes.BaseNode[],
            exportedIds?: Record<nodes.UID, boolean>,
            exportedSubflows?: Record<nodes.UID, boolean>,
            exportedConfigNodes?: Record<nodes.UID, boolean>,
        ): nodes.NodeObject[];
        /** @since 4.1 */
        createExportableNodeSet(set: nodes.BaseNode[], options?: {
            exportedIds?: Record<nodes.UID, boolean>;
            exportedSubflows?: Record<nodes.UID, boolean>;
            exportedConfigNodes?: Record<nodes.UID, boolean>;
            includeModuleConfig?: boolean;
        }): nodes.NodeObject[];
        /**
         * Converts the complete flow to an exportable JSON Object
         */
        createCompleteNodeSet(options?: {
            credentials?: boolean;
            dimensions?: boolean;
            includeModuleConfig?: boolean;
        }): nodes.NodeObject[];
        updateConfigNodeUsers(node: nodes.Node, options?: { action?: "add" | "remove"; emitEvent?: boolean }): void;
    }

    // TODO: list
    interface NodesFontAwesome {
        getIconUnicode(name: string): string;
        getIconList(): string[];
    }

    type NodesRegistryExported =
        | "addNodeSet"
        | "getNodeSet"
        | "disableNodeSet"
        | "enableNodeSet"
        | "removeNodeSet"
        | "setNodeList"
        | "setIconSets"
        | "getIconSets";

    namespace notifications {
        type NotificationType = "warning" | "compact" | "success" | "error";

        interface NotificationOptions {
            buttons?: {
                class?: string;
                text: string;
                click: (event: JQuery.Event) => void;
            }[];
            fixed?: boolean;
            modal?: boolean;
            silent?: boolean;
            timeout?: number;
            type?: NotificationType;
            width?: number;
        }
        interface NotificationElement extends HTMLDivElement {
            readonly options?: NotificationOptions;
            close(): void;
            /** @internal */
            hideNotification(): void;
            /** @internal */
            showNotification(): void;
            update(msg: string | JQuery, options?: NotificationOptions): void;
            update(msg: string | JQuery, timeout?: number): void;
        }
    }

    interface Notifications {
        /**
         * If set to true, all notifications will be hidden.
         * @internal
         */
        hide?: boolean;
        /** @internal */
        init(): void;
        /**
         * @example
         * // Plain information notification
         * RED.notify("Hello World");
         * // Warning notification for 10 seconds
         * RED.notify("Something has happened", { type: "warning", timeout: 10000 });
         * // Notification with buttons
         * let myNotification = RED.notify("This is the message to display", {
         *   modal: true,
         *   fixed: true,
         *   type: "warning",
         *   buttons: [
         *     {
         *        text: "cancel",
         *        click: function (e) {
         *          myNotification.close();
         *        }
         *     },
         *     {
         *        text: "okay",
         *        class: "primary",
         *        click: function (e) {
         *          myNotification.close();
         *        }
         *     }
         *   ]
         * });
         */
        notify(msg: string | JQuery, options?: notifications.NotificationOptions): notifications.NotificationElement;
        notify(msg: string | JQuery, type?: notifications.NotificationType): notifications.NotificationElement;
        /** @deprecated please use options instead */
        notify(
            msg: string | JQuery,
            type?: notifications.NotificationType,
            fixed?: boolean,
            timeout?: number,
        ): notifications.NotificationElement;
    }

    interface Palette {
        readonly editor: PaletteEditor;
        /** @internal */
        init(): void;
        /** @internal */
        add(type: string, definition: nodes.NodeDefinition): void;
        getCategories(): { id: string; label: string }[];
        hide(type: string): void;
        refresh(): void;
        /** @internal */
        remove(type: string): void;
        show(type: string): void;
    }

    /** @internal */
    interface PaletteEditor {
        init(): void;
        install(entry: registry.InstallModuleEntry, container: HTMLElement, done: (error: Error) => void): void;
        install(
            entry: registry.InstallModuleEntry,
            container: HTMLElement,
            done: (success: JQuery.jqXHR) => void,
        ): void;
    }

    interface PanelsInstance {
        ratio(): number;
        ratio(ration: number): void;
        resize(size: number): void;
    }

    interface Panels {
        create(options: {
            id: string;
            container?: JQuery | undefined;
            dir?: "vertical" | undefined;
            resize?: ((size1: number, size2: number) => void) | undefined;
        }): PanelsInstance;
    }

    namespace plugins {
        /**
         * @link https://nodered.org/docs/api/ui/themes
         */
        interface PluginDefinition {
            module: string;
            /**
             * Called by {@link Plugins.registerPlugin}.
             */
            onadd?: () => void;
            type?: string;
        }
    }

    interface Plugins {
        /**
         * Adds the plugin module to the module lists.
         * @internal
         */
        addPlugin(plugin: registry.PluginModule): void;
        /**
         * Gets the plugin module from the module lists.
         * @internal
         */
        getModule(module: string): registry.PluginModule | null;
        /**
         * Gets the plugin definition from the registry.
         */
        getPlugin(id: string): plugins.PluginDefinition | null;
        /**
         * Gets a list of plugin definitions for the given type.
         */
        getPluginsByType(id: string): plugins.PluginDefinition[];
        /**
         * Adds the plugin definition to the registry.
         */
        registerPlugin(id: string, definition: plugins.PluginDefinition): void;
        /**
         * Calls {@link addPlugin} for each element of the list.
         * @internal
         */
        setPluginList(list: registry.PluginModule[]): void;
    }

    namespace popover {
        /**
         * Options to create a popover.
         */
        interface PopoverOptions {
            /** The element to target with the popover */
            target: JQuery;
            /** Position of the popover relative to target: 'top', 'right'(default), 'bottom', 'left', 'inset-[top,right,bottom,left]' */
            direction?: string;
            /** What triggers the popover to be displayed: 'hover', 'click', 'modal' */
            trigger?: "hover" | "click" | "modal";
            /** Contents of the popover. If a string, handled as raw HTML. If a function, can return a string or a DOM element */
            content: string | JQuery | ((this: PopoverInstance) => string | JQuery);
            /** Sets show/hide delays after mouseover/out events */
            delay?: { show: number; hide: number };
            /** Delay before closing the popover in some cases */
            autoClose?: number;
            /** Width of popover, default 'auto' */
            width?: number | string;
            /** Max width of popover, default 'auto' */
            maxWidth?: number | string;
            /** Scale of popover. 'default', 'small' */
            size?: string;
            /** px offset from target */
            offset?: number;
            /** If true, clicking on popover closes it */
            tooltip?: boolean;
            /** Optional css class to apply to popover */
            class?: string;
            /** If trigger is 'hover' and this is set to true, allow the mouse to move over the popover without hiding it */
            interactive?: boolean;
        }

        /**
         * The popover object returned by the popover
         */
        interface PopoverInstance {
            /** The popover dom element */
            readonly element: JQuery | null;
            /** Hides the popover. If 'instant' is true, don't fade out */
            close(instant?: boolean): PopoverInstance;
            /**
             * Moves the popover. The options parameter can take many of the options detailed above including:
             * target, direction, content, width, offset
             */
            move(options: Partial<PopoverOptions>): void;
            /** Shows the popover. If 'instant' is true, don't fade in */
            open(instant?: boolean): PopoverInstance;
            /**
             * Changes the popover content. This only works if the popover is not currently displayed.
             * It does not change the content of a visible popover.
             */
            setContent(content: PopoverOptions["content"]): PopoverInstance;
        }

        interface MenuItem {
            /** The label of the item. Can be custom DOM element */
            label: string | JQuery;
            /** Called when the item is selected */
            onselect?: () => void;
        }

        interface MenuOptions {
            /** List of menu options */
            options?: MenuItem[];
            /** Width of the menu. Default: 'auto' */
            width?: number | string;
            /** Class to apply to the menu container */
            class?: string;
            /** Maximum height of menu before scrolling items. Default: none */
            maxHeight?: number;
            /** Called when a menu item is selected, if that item doesn't have its own onselect function */
            onselect?: (item: MenuItem) => void;
            /** Called when the menu is closed */
            onclose?: (cancelled?: boolean) => void;
            /**
             * by default, the menu is discarded when it closes and mustbe rebuilt to redisplay.
             * Setting this to 'false' keeps the menu on the DOM so it can be shown again.
             */
            disposeOnClose?: boolean;
            style?: string;
            tabSelect?: boolean;
        }

        interface MenuInstance {
            /** Returns the current items. */
            options(): MenuItem[];
            /** Sets the current menu items */
            options(options: MenuItem[]): void;
            /** Shows the menu. */
            show(options: PanelShowOptions): void;
            /** Hide the menu */
            hide(cancelled?: boolean): void;
        }

        interface PanelShowOptions {
            /** The element to display the panel relative to */
            target?: JQuery;
            /** Called when the panel closes */
            onclose?: () => void;
            /**
             * If the panel is closeable by a click of a button, by providing a reference
             * to it here, we can handle the events properly to hide the panel.
             */
            closeButton?: JQuery;
            /** Should the panel align to the left or right edge of target. default: 'right' */
            align?: string;
            /** px offset to apply from the target. [width, height] */
            offset?: [number, number];
            /** Whether the panel should be removed from DOM when hidden. default: true */
            dispose?: boolean;
            x?: number;
            y?: number;
        }

        interface PanelInstance {
            readonly container: JQuery;
            hide(dispose?: boolean): void;
            show(options: PanelShowOptions): void;
        }

        interface TooltipInstance extends PopoverInstance {
            delete(): void;
            setAction(action: string): void;
        }
    }

    interface Popover {
        create(options: popover.PopoverOptions): popover.PopoverInstance;
        menu(options: popover.MenuOptions): popover.MenuInstance;
        panel(content: JQuery): popover.PanelInstance;
        tooltip(
            target: JQuery,
            content: string | JQuery | (() => string | JQuery),
            action?: string,
            interactive?: boolean,
        ): popover.TooltipInstance;
    }

    interface ProjectsSettings {
        init(utils: object): void;
        show(initialTab?: string): void;
        switchProject(): void;
    }

    interface ProjectsUserSettings {
        init(utils: object): void;
    }

    interface Projects {
        settings: ProjectsSettings;
        userSettings: ProjectsUserSettings;
        /** @internal */
        init(): void;
        showStartup(): void;
        newProject(): void;
        selectProject(): void;
        showCredentialsPrompt(): void;
        showFilesPrompt(): void;
        showProjectDependencies(): void;
        createDefaultFileSet(): void;
        createDefaultPackageFile(): void;
        refresh(done?: (activeProject: object | null) => void): void;
        editProject(): void;
        getActiveProject(): object;
    }

    /** @internal */
    namespace registry {
        interface Catalogue {
            name: string;
            updated_at: string;
            modules: CatalogueModule[];
        }

        interface CatalogueModule {
            id: string;
            deprecated?: boolean | string;
            description: string;
            downloads?: { week: number };
            keywords: string[];
            types: string[];
            updated_at: string;
            url?: string;
            version: string;
        }

        interface NodeSet {
            added: boolean;
            enabled: boolean;
            id: string;
            local: boolean;
            module: string;
            name: string;
            types: string[];
            user: boolean;
            version: string;
        }

        interface NodesModule {
            local: boolean;
            name: string;
            sets: Record<string, NodeSet>;
            version: string;
        }

        // TODO: import NodeSet from registry (addNodeSet - setNodeList)
        interface NodesRegistry {
            addNodeSet(set: object): void;
            disableNodeSet(id: string): void;
            enableNodeSet(id: string): void;
            getIconSets(): Record<string, string[]>;
            getModule(module: string): NodesModule;
            getModuleList(): NodesModule[];
            getNodeDefinitions(
                options?: { configOnly?: boolean; filter?: (def: nodes.NodeDefinition) => boolean },
            ): nodes.NodeDefinition[];
            getNodeList(): NodeSet[];
            getNodeSet(id: string): NodeSet;
            getNodeSetForType(type: string): NodeSet;
            getNodeType(type: string): nodes.NodeDefinition;
            getNodeTypes(): string[];
            /**
             * Registers a node with the editor.     *
             * @param type The node type is used throughout the editor to identify the node. It must
             * match the value used by the call to RED.nodes.registerType in the corresponding runtime
             * script.
             * @param definition The node definition contains all of the information about the node
             * needed by the editor.
             */
            registerNodeType<
                TProps extends nodes.NodeProperties = nodes.NodeProperties, // eslint-disable-line @definitelytyped/no-unnecessary-generics
                TCreds extends nodes.NodeCredentials = nodes.NodeCredentials, // eslint-disable-line @definitelytyped/no-unnecessary-generics
            >(type: string, definition: nodes.NodeDefinition<TProps, TCreds>): void;
            /** @deprecated Use the other overload */
            registerNodeType<TProps extends NodeProperties, TCreds, TInstProps extends TProps>( // eslint-disable-line @definitelytyped/no-unnecessary-generics
                type: string,
                definition: NodeDef<TProps, TCreds, TInstProps>,
            ): void;
            removeNodeSet(id: string): NodeSet | Record<string, never>;
            removeNodeType(type: string): void;
            setIconSets(sets: Record<string, string[]>): void;
            setModulePendingUpdated(module: string, version: string): void;
            setNodeList(list: object[]): void;
        }

        interface InstallModuleEntry {
            id: string;
            version: string;
            pkg_url?: string;
            url?: string;
        }

        interface PluginModule {
            id: string;
            local: boolean;
            name: string;
            pending_version?: string;
            plugin: true;
            sets: Record<string, PluginSet>;
            version: string;
        }
        interface PluginSet {
            editor: boolean;
            enabled: boolean;
            id: string;
            local: boolean;
            module: string;
            name: string;
            plugins: { id: string; module: string; type?: string }[];
            runtime: boolean;
            version: string;
        }
    }

    interface Runtime {
        /** @internal */
        init(): void;
        readonly started: "start" | "stop" | "safe" | "";
    }

    interface Search {
        /** @internal */
        init(): void;
        getSearchOptions(): { label: string; value: string }[];
        hide(): void;
        hide(value: null, keepSearchToolbar: boolean): void;
        search(value: string): nodes.BaseNode[];
        show(value: string): void;
    }

    // TODO: runtime settings
    interface Settings {
        /**
         * The Node-RED version
         */
        readonly version: string;
        /**
         * Gets the setting from the user or runtime settings.
         * @param key The key to the setting to search for
         * @param defaultValue The default value if undefined
         * @example
         * // Returns an object
         * RED.settings.get("editor")
         * // Return a string
         * RED.settings.get("debug.filter")
         * // Returns undefined
         * RED.settings.get("fake")
         */
        get<D = any, T extends D = D>(key: string, defaultValue: D): T; // eslint-disable-line @definitelytyped/no-unnecessary-generics
        get<T = any>(key: string): T | undefined; // eslint-disable-line @definitelytyped/no-unnecessary-generics
        /**
         * Gets an item from the {@link Storage localStorage}.
         */
        getLocal(key: string): string | null;
        /** @internal */
        init(options: { apiRootUrl: string }, done: () => void): void;
        /** @internal */
        load(done: () => void): void;
        /** @internal */
        loadUserSettings(done: () => void): void;
        refreshSettings(done: () => void): void;
        /**
         * Sets and saves the user setting
         */
        set(key: string, value: any): void;
        /**
         * Sets an item to {@link Storage localStorage}.
         */
        setLocal(key: string, value: any): void;
        /**
         * Removes and saves the user setting
         */
        remove(key: string): void;
        /**
         * Removes an item from the {@link Storage localStorage}.
         */
        removeLocal(key: string): void;
        /**
         * Gets (like {@link get}) the property from the theme settings.
         */
        theme<T = any>(property: string, defaultValue: T): T; // eslint-disable-line @definitelytyped/no-unnecessary-generics
        theme<T = any>(property: string): T | undefined; // eslint-disable-line @definitelytyped/no-unnecessary-generics
    }

    interface SettingsWithData extends Settings, RuntimeLocalSettings {}

    interface SidebarConfig {
        /** @internal */
        init(): void;
        /**
         * Same as `RED.sidebar.show("config")`
         */
        show(): void;
        /**
         * Shows unused or all config nodes
         */
        show(unused: boolean): void;
        /**
         * Shows the config node with the given ID
         */
        show(id: nodes.UID): void;
        /**
         * Rebuilds the Sidebar Config content
         */
        refresh(): void;
    }

    interface SidebarContext {
        /** @internal */
        init(): void;
    }

    interface SidebarHelp {
        init(): void;
        /**
         * Shows the help for the given node type
         */
        show(type?: string): void;
        /**
         * Defines dynamically the tab content
         */
        set(html: string, title?: string): void;
    }

    interface SidebarInfo {
        outliner: SidebarInfoOutliner;
        /** @internal */
        init(): void;
        show(): void;
        /**
         * Refreshs the {@link View.selection selection}.
         */
        refresh(): void;
        /**
         * Same as {@link clear}.
         */
        refresh(node: null): void;
        refresh(node: nodes.BaseNode | nodes.BaseNode[]): void;
        /**
         * Clears the Info tab content
         */
        clear(): void;
        /** @deprecated use {@link SidebarHelp.set} instead */
        set(html: string, title?: string): void;
    }

    interface SidebarInfoOutliner {
        build(): HTMLElement;
        search(value: string): void;
        /**
         * Clears selection
         */
        select(): void;
        select(node: nodes.BaseNode | nodes.BaseNode[]): void;
        /**
         * Shows the node infos
         */
        reveal(node: nodes.BaseNode): void;
    }

    /**
     * Used by Projects
     * @internal
     */
    interface SidebarVersionControl {
        init(utils: object): void;
        show(): void;
        refresh(full?: boolean, includeRemote?: boolean): void;
        showLocalChanges(): void;
    }

    interface Sidebar {
        config: SidebarConfig;
        context: SidebarContext;
        help: SidebarHelp;
        info: SidebarInfo;
        versionControl: SidebarVersionControl;
        /** @internal */
        init(): void;
        /**
         * Adds a tab to the Sidebar
         */
        addTab(options: {
            action?: string;
            content: HTMLElement;
            enableOnEdit?: boolean;
            iconClass?: string;
            id: string;
            label: string;
            name: string;
            toolbar?: HTMLElement;
            visible?: boolean;
        }): void;
        containsTab(id: string): boolean;
        removeTab(id: string): void;
        show<T extends string = "config" | "context" | "degub" | "help" | "info">( // eslint-disable-line @definitelytyped/no-unnecessary-generics
            id: T,
            skipShowSidebar?: boolean,
        ): void;
        toggleSidebar(state: boolean): void;
    }

    interface StackInstanceEntry {
        collapsible?: boolean | undefined;
        container: JQuery<HTMLDivElement>;
        header: JQuery<HTMLDivElement>;
        contentWrap: JQuery<HTMLDivElement>;
        content: JQuery<HTMLDivElement>;
        title: JQuery<HTMLDivElement>;
        toggle(): boolean;
        expand(): boolean | undefined;
        collapse(): boolean | undefined;
        isExpanded(): boolean;
    }

    interface StackInstance {
        add(entry: { collapsible?: boolean | undefined; title: string }): StackInstanceEntry;
        hide(): StackInstance;
        show(): StackInstance;
        resize(): void;
    }

    interface Stack {
        create(options: {
            container: JQuery;
            fill?: boolean | undefined;
            singleExpanded?: boolean | undefined;
        }): StackInstance;
    }

    interface StatusBar {
        /** @internal */
        init(): void;
        /**
         * Adds a Widget to the Status Bar
         */
        add(options: { id: string; element: HTMLElement; align?: "left" | "right" }): void;
        /** @since v4.1 */
        hide(id: string): void;
        /** @since v4.1 */
        show(id: string): void;
    }

    interface Subflow {
        /** @internal */
        init(): void;
        /** @internal */
        createSubflow(): void;
        /** @internal */
        convertToSubflow(): void;

        delete(id: nodes.UID): void;
        refresh(markChange?: boolean): { instances: nodes.SubflowNode[] } | undefined;
        /** @internal */
        removeSubflow(id: nodes.UID, keepInstanceNodes?: boolean): {
            groups: nodes.Group[];
            junctions: nodes.Junction[];
            links: nodes.Link[];
            nodes: nodes.Node[];
            subflows: Array<nodes.Subflow | null>;
        };
        removeInput(): { subflowInputs: nodes.SubflowInput[]; links: nodes.Link[] } | undefined;
        removeOutput(removeSubflowOutputs?: nodes.SubflowOutput[]): {
            subflowOutputs: nodes.SubflowOutput[];
            links: nodes.Link[];
        } | undefined;
        removeStatus(): { links: nodes.Link[] } | undefined;

        /**
         * Builds the subflow edit form Called by subflow.oneditprepare for both instances and templates
         * @param type The type of subflow being edited
         * @param node The node being edited
         */
        buildEditForm(type: "subflow" | "subflow-template", node: nodes.SubflowNode): void;

        exportSubflowTemplateEnv(list: JQuery, all?: boolean): {
            name: string;
            type: string;
            value: string;
        }[] | null;
        exportSubflowInstanceEnv(node: nodes.SubflowNode): {
            name: string;
            type: string;
            value: string;
        }[];
    }

    namespace tabs {
        interface Tab {
            id: string;
            label: string;
            icon?: string;
            iconClass?: string;
            name?: string;
            action?: string;
            pinned?: boolean;
            closeable?: boolean;
            maximumTabWidth?: number;
        }

        interface TabsOptions {
            id?: string;
            element?: JQuery;
            order?: string[];
            vertical?: boolean;
            addButton?: string | (() => void) | ((args: { index: number }) => void);
            addButtonCaption?: string;
            searchButton?: string | (() => void);
            searchButtonCaption?: string;
            menu?: false | menu.MenuOptions[] | (() => menu.MenuOptions[]);
            contextmenu?: (tab?: Tab) => menu.MenuItemOptions[];
            scrollable?: boolean;
            collapsible?: boolean;
            minimumActiveTabWidth?: number;
            maximumTabWidth?: number;
            onselect?: (selection: Tab[]) => void;
            onclick?: (tab: Tab, event: JQuery.ClickEvent) => void;
            ondblclick?: (tab: Tab) => void;
            onchange?: (tab: Tab) => void;
            onshow?: (tab: Tab) => void;
            onhide?: (tab: Tab) => void;
            onadd?: (tab: Tab) => void;
            onremove?: (tab: Tab) => void;
            onreorder?: (oldOrder: string[], newOrder?: string[]) => void;
        }

        interface TabsInstance {
            addTab(tab: Tab, targetIndex?: number): void;
            removeTab(id: string): void;
            activateTab(link: string | JQuery): void;
            nextTab(): void;
            previousTab(): void;
            resize(): void;
            count(): number;
            activeIndex(): number;
            getTabIndex(id: string): number;
            contains(id: string): boolean;
            showTab(id: string): void;
            hideTab(id: string): void;
            renameTab(id: string, label: string): void;
            listTabs(): string[];
            selection(): Tab[];
            clearSelection(): void;
            order(order: string[]): void;
        }
    }

    interface Tabs {
        create(options: tabs.TabsOptions): tabs.TabsInstance;
    }

    interface TextBidi {
        /**
         * Sets the text direction preference
         * @param dir - the text direction preference
         */
        setTextDirection(dir: string): void;
        /**
         * Enforces the text direction of a given string by adding
         * UCC (Unicode Control Characters)
         * @param value - the string
         */
        enforceTextDirectionWithUCC(value: string): string;
        /**
         * Determines the text direction of a given string.
         * @param value - the string
         */
        resolveBaseTextDir(value: string): string;
        /**
         * Adds event listeners to the Input to ensure its text-direction attribute
         * is properly set based on its content.
         * @param input - the input field
         */
        prepareInput(input: HTMLInputElement): void;
    }

    interface TextFormat {
        /*
         * Returns the HTML representation of a given structured text
         * @param text - the structured text
         * @param type - could be one of filepath, url, email
         * @param args - pass additional arguments to the handler. generally null.
         * @param isRtl - indicates if the GUI is mirrored
         * @param locale - the browser locale
         */
        getHtml(
            text: string,
            type: string,
            args: { dir?: string | undefined } | null,
            isRtl: boolean,
            locale: string,
        ): string;

        /*
         * Handle Structured text correct display for a given HTML element.
         * @param element - the element  : should be of type div contenteditable=true
         * @param type - could be one of filepath, url, email
         * @param args - pass additional arguments to the handler. generally null.
         * @param isRtl - indicates if the GUI is mirrored
         * @param locale - the browser locale
         */
        attach(
            element: HTMLDivElement,
            type: "filepath" | "url" | "email",
            args: any,
            isRtl: boolean,
            locale: string,
        ): boolean;
    }

    interface Text {
        bidi: TextBidi;
        format: TextFormat;
    }

    /** @deprecated Removed in v5.0.0 */
    interface TouchRadialMenu {
        show(obj: HTMLElement, pos: number[], options: object): void;
        active(): boolean;
    }

    /** @deprecated Removed in v5.0.0 */
    interface Touch {
        radialMenu: TouchRadialMenu;
    }

    namespace tourGuide {
        /**
         * A valid CSS direction. The list is not exhaustive.
         */
        type Direction<T extends string = "right" | "left" | "bottom" | "top" | "inset"> = T;

        /**
         * Represents a tour. A version is recommended for tours that are
         * intended to introduce added functionality.
         */
        interface Tour {
            /**
             * The tour version.
             */
            version?: string;
            /**
             * A list with tour steps.
             */
            steps: TourStep[];
        }

        /**
         * Represents the state of a tour step.
         */
        interface TourStepState {
            /** The index of the current step */
            index: number;
            /** The total number of steps */
            count: number;
        }

        /**
         * Represents a wait condition for a tour step.
         */
        interface Wait {
            /**
             * The emitter type. If "dom-event", use {@link Wait.element}, otherwise use {@link Wait.filter}.
             */
            type: "dom-event" | "nr-event";
            /** The event name */
            event: string;
            /**
             * The DOM element to attach the event listener.
             */
            element?: string | ((this: TourStepState) => JQuery);
            /**
             * A function called when the event is triggered to filter the target action.
             */
            filter?: (event: object) => boolean;
        }

        /**
         * Represents a step of the Tour Guide.
         */
        interface TourStep {
            /**
             * A function called when the dialog is being closed.
             */
            complete?: (this: TourStepState, done?: () => void) => void;
            /**
             * The description of the dialog.
             */
            description?: string;
            /**
             * The direction of the dialog relative to the element. Default is "bottom".
             */
            direction?: Direction;
            /**
             * The DOM element to highlight.
             */
            element?: string | JQuery | ((this: TourStepState) => JQuery);
            /**
             * On mouse hover, stop highlighting the element and move the dialog in another direction.
             */
            fallback?: Direction;
            /**
             * The path to the image to be integrated into the dialog.
             */
            image?: string;
            /**
             * Whether to place the dialog on top of the overlapping stack. Enabled if wait is used.
             */
            interactive?: boolean;
            /**
             * A function called when the dialog is being built.
             */
            prepare?: (this: TourStepState, done?: () => void) => void;
            /**
             * The title of the dialog.
             */
            title?: string;
            /**
             * The icon to add to the title in the dialog.
             */
            titleIcon?: string;
            /**
             * Wait for an event to be triggered before closing the dialog.
             */
            wait?: Wait;
            /**
             * The width of the dialog.
             */
            width?: string | number;
        }
    }

    interface TourGuide {
        /**
         * Returns a list with available builtin tours.
         * @internal Hardcoded list for now
         */
        list(): { id: string; label: string; path: string }[];
        /**
         * Loads a Tour Guide.
         * @param tourPath The path to the tour file
         * @param done A function called when the guide is loaded or an error has occurred
         */
        loadTour(tourPath: string, done: (error: Error | null, tour?: tourGuide.Tour) => void): void;
        /** @internal */
        reset(): void;
        /**
         * Runs a Tour Guide.
         * Starts by importing the tour if it has not been loaded.
         * @param tourPath The path to the tour file
         * @param done A function called when the guide is finished/closed
         * @example
         * // Since the API is not yet publicly open, the recommended way is:
         * RED.tourGuide.load(tourUrl, function (error, tour) {
         *   if (tour) {
         *     const tourRunning = $(".red-ui-tourGuide-shade").length > 0;
         *     if (!tourRunning) {
         *       RED.tourGuide.run(tourUrl, function (error) {
         *         RED.settings.set("editor.tours." + tourName, tourVersion);
         *       });
         *     }
         *   }
         * }
         */
        run(tourPath: string, done?: (error?: Error) => void): void;
    }

    interface Tray {
        /** @internal */
        init(): void;
        close(done?: () => void): void;
        hide(): void;
        resize(): void;
        show(options?: editor.TrayOptions): void;
    }

    interface TypeSearch {
        show(options: {
            disableFocus?: boolean;
            filter?: { input?: boolean; output?: boolean; type?: string };
            x: number;
            y: number;
            add: (type: string, keepAdding?: boolean) => void;
            cancel: () => void;
            move: (x: number, y: number) => void;
        }): void;
        refresh(options: { input?: boolean; output?: boolean; type?: string }): void;
        hide(fast?: boolean): void;
    }

    interface User {
        generateUserIcon(user: object): JQuery<HTMLElement>;
        hasPermission(permission: string | string[]): boolean;
        /** @internal */
        init(): void;
        login(done: () => void): void;
        login(options: { cancelable?: boolean; updateMenu?: boolean }, done: () => void): void;
        logout(): void;
    }

    interface UserSettings {
        /** @internal */
        init(): void;
        add(tab: tabs.Tab): void;
        show(initialTab?: string): void;
        toggle(id: string): void;
    }

    interface Utils {
        /**
         * Create a DOM element representation of obj - as used by Debug sidebar etc
         * @param obj the data to display
         * @param options a bag of options
         * - If you want the Copy Value button, then set `sourceId`
         * - If you want the Copy Path button, also set `path` to the value to be copied
         */
        createObjectElement(obj: any, options?: {
            hideKey?: boolean;
            key?: boolean | null;
            path?: string;
            sourceId?: string;
            rootPath?: string;
            expandPaths?: string[];
            enablePinning?: boolean;
            expandLeafNodes?: boolean;
            ontoggle?: (path: string, state: boolean) => void;
            exposeApi?: boolean;
            tools?: any;
            nodeSelector?: (id: nodes.UID) => void;
            typeHint:
                | "number"
                | "Object"
                | "array"
                | "set"
                | "map"
                | "boolean"
                | "null"
                | "undefined"
                | "buffer"
                | "string";
        }): JQuery;
        getMessageProperty(msg: NodeMessage, expr: string | string[]): any;
        setMessageProperty(msg: NodeMessage, prop: string, value: any, createMissing?: boolean): null | undefined;
        normalisePropertyExpression(str: string, msg?: NodeMessage): Array<any>;
        validatePropertyExpression(str: string): boolean;
        validatePropertyExpression(str: string, options: { label?: string }): string | boolean;
        separateIconPath(icon?: string): { module: string; file: string };
        getDefaultNodeIcon(
            def: nodes.NodeDefinition,
            node?: nodes.BaseNode,
        ): { module: string; file: string };
        getNodeIcon(def: nodes.NodeDefinition, node?: nodes.BaseNode): string;
        getNodeLabel(node: nodes.BaseNode, defaultLabel?: string): string;
        getNodeColor(type: string, def: nodes.NodeDefinition): string;
        getPaletteLabel(type: string, def: nodes.NodeDefinition): string;
        clearNodeColorCache(): void;
        addSpinnerOverlay(container: JQuery, contain?: boolean): JQuery;
        decodeObject(
            payload: string,
            format:
                | "number"
                | "Object"
                | "array"
                | "set"
                | "map"
                | "boolean"
                | "null"
                | "undefined"
                | "buffer"
                | "string",
        ): any;
        parseContextKey(key: string, defaultStore?: string): { key: string; store?: string };
        /**
         * Create or update an icon element and append it to iconContainer.
         * @param iconUrl URL of icon.
         * @param iconContainer Icon container element with red-ui-palette-icon-container class.
         * @param isLarge Whether the icon size is large.
         */
        createIconElement(iconUrl: string, iconContainer: JQuery, isLarge?: boolean): void;
        sanitize(str: string): string;
        renderMarkdown(txt: string): string;
        createNodeIcon(node: nodes.BaseNode, includeLabel?: boolean): JQuery;
        getDarkerColor(color: string): string;
        parseModuleList(list: string[]): { module: RegExp; version: string; wildcardPos: number }[];
        checkModuleAllowed(module: string, version: string, allowList?: string[], denyList?: string[]): boolean;
        getBrowserInfo(): {
            ua: string;
            browser: string;
            os: string;
            touch: boolean;
            mobile: string;
            tablet: boolean;
            ie: boolean;
            android: boolean;
        };
        /**
         * Checks whether a typed property is valid according to its type.
         */
        validateTypedProperty(
            value: string,
            type: widgets.TypedInputType,
            opt: { label?: string },
        ): string | boolean;
    }

    interface Validators {
        number(allowBlanck?: boolean): nodes.PropertyValidator;
        regex(regex: RegExp): nodes.PropertyValidator;
        /** @deprecated */
        typedInput(typeField: string, isConfigNode?: boolean): nodes.PropertyValidator;
        typedInput(options: { allowBlank?: boolean; isconfig?: boolean; typeField: string }): nodes.PropertyValidator;
    }

    // TODO: other methods
    interface View {
        readonly node_width: number;
        readonly node_height: number;
        readonly snapGrid: boolean;

        readonly navigator: ViewNavigator;
        readonly tools: ViewTools;

        /** @internal */
        init(): void;
        calculateNodeDimensions(node: nodes.BaseNode): [number, number];
        clearSelection(): void;
        clickNodeButton(): void;
        clipboard(): string;
        dimensions(): { height: number; width: number };
        /**
         * Focuses the workspace chart
         */
        focus(): void;
        getActiveNodes(): nodes.BaseNode[];
        gridSize(): number;
        gridSize(size: number): void;
        redraw(updateActive?: boolean, syncRedraw?: boolean): void;
        reveal(id: string, triggerHighlight?: boolean): void;
        selectNodes(options?: {
            selected?: nodes.UID[];
            oncancel?: () => void;
            onselect?: (selection: nodes.BaseNode[]) => void;
            single?: boolean;
            prompt?: string;
        }): void;
        scale(): number;
        selection(): { nodes: nodes.BaseNode[]; links: nodes.Link[]; link: nodes.Link };
        /** @internal */
        state<K extends keyof ViewState>(state?: null): ViewState[K]; // eslint-disable-line @definitelytyped/no-unnecessary-generics
        /** @internal */
        state<K extends keyof ViewState>(state: ViewState[K]): void; // eslint-disable-line @definitelytyped/no-unnecessary-generics
        updateActive(): void;

        // TODO
        /**
         * Imports a new collection of nodes from a JSON String.
         *  - all get new IDs assigned
         *  - all "selected"
         *  - attached to mouse for placing - "IMPORT_DRAGGING"
         */
        importNodes(newNodesStr: string, addNewFlow?: boolean, touchImport?: boolean): void;
        calculateTextWidth(str: string, className: string): number;
        select(selection?: string | object): void;

        getLinksAtPoint(x: number, y: number): object[];
        getGroupAtPoint(x: number, y: number): object | null;
        getActiveGroup(): object;

        scroll(x: number, y: number): void;
    }

    interface ViewNavigator {
        init(): void;
        refresh(): void;
        resize(): void;
        toggle(): void;
    }

    interface ViewState {
        readonly DEFAULT: 0;
        readonly MOVING: 1;
        readonly JOINING: 2;
        readonly MOVING_ACTIVE: 3;
        readonly ADDING: 4;
        readonly EDITING: 5;
        readonly EXPORT: 6;
        readonly IMPORT: 7;
        readonly IMPORT_DRAGGING: 8;
        readonly QUICK_JOINING: 9;
        readonly PANNING: 10;
        readonly SELECTING_NODE: 11;
        readonly GROUP_DRAGGING: 12;
        readonly GROUP_RESIZE: 13;
        readonly DETACHED_DRAGGING: 14;
        readonly SLICING: 15;
        readonly SLICING_JUNCTION: 16;
    }

    interface ViewTools {
        init(): void;
        /**
         * Aligns all selected nodes to the current grid
         */
        alignSelectionToGrid(): void;
        /**
         * Moves all of the selected nodes by the specified amount
         * @param dx
         * @param dy
         */
        moveSelection(dx: number, dy: number): void;
    }

    namespace widgets {
        interface AutoCompleteOptions {
            /**
             * If provided instead of `search`, this will look for any plugins
             * registered with the given type that implement the `getCompletions` function. This
             * can be an async function that returns an array of string completions. It does not support
             * the full options object as above.
             */
            completionPluginType?: string;
            /** If `minLength` is 0, pressing down arrow will show the list */
            minLength?: number;
            /** If provided, this will be passed to the `getCompletions` function of the plugin
             * to allow the plugin to provide context-aware completions.
             */
            node?: nodes.BaseNode;
            /**
             * A function that is called when the input value changes that should
             * return a list of possible completions. If `done` is used, it must be called.
             * @param value The current value of the <input>
             * @param done A callback function that will be called with the completions.
             */
            search:
                | ((value: string) => Array<{ value: string; label: string | JQuery }>)
                | ((value: string, done: (result?: Array<{ value: string; label: string | JQuery }>) => void) => void);
        }

        /**
         * Attach to an <input type="text"> to provide auto-complete
         * @link https://nodered.org/docs/api/ui/autoComplete/
         */
        interface AutoComplete extends JQuery {
            (options: AutoCompleteOptions): this;
            /**
             * Removes auto-complete functionality from the <input>.
             */
            (action: "destroy"): void;
        }

        interface CheckboxSetOptions {
            parent?: JQuery;
        }

        interface CheckboxSet extends JQuery {
            (options: CheckboxSetOptions): this;
            (action: "addChild", child: JQuery): void;
            (action: "disable"): void;
            (action: "removeChild", child: JQuery): void;
            (action: "state", state: boolean | null, supressEvent?: boolean, suppressParentUpdate?: boolean): void;
            (action: "updateChild"): void;
        }

        interface EditableListOptions<T> {
            /**
             * Determines whether a button is shown below the list that, when clicked, will add a new entry to the list.
             * If not specified, or set to true (boolean) a button is shown with the text ‘Add’.
             * If set to false (boolean), the button is not shown.
             * If set to a non-blank string, a button is shown using its value as the text of the button.
             */
            addButton?: boolean | string | undefined;
            /**
             * A callback function that gets called when a new item is being added to the list.
             * If it was triggered by clicking the ‘add button’, data will be {}. Otherwise it will be the data passed to the call to the addItem method.
             *
             * @param row - the jQuery DOM element to which any row content should be added
             * @param index - the index of the row
             * @param data - the data object for the row
             */
            addItem?: ((row: JQuery, index: number, data: T) => void) | undefined;
            /**
             * An array of button objects, that need to be added at the bottom of the editableList.
             */
            buttons?: Array<{
                click: (this: JQuery, event: JQuery.ClickEvent) => void;
                icon?: string;
                id?: string;
                label?: string;
                title?: string;
            }>;
            /**
             * If the list is sortable, this option allows items to be dragged from this list to any other jQuery sortable list, such as another editableList.
             */
            connectWith?: JQuery.Selector | undefined;
            /**
             * A callback function that gets called to filter what items are visible in the list.
             *
             * @param data - the data object for the row
             *
             * The function should return true/false (boolean) to indicate whether the item should be visible.
             */
            filter?: ((data: T) => boolean) | undefined;
            /**
             * Inserts the DOM/JQuery object as a header for the list.
             */
            header?: HTMLElement | JQuery | undefined;
            /**
             * Sets the height of the list including, if enabled, its add button. Setting height
             * to ‘auto’ removes the vertical scrollbar and displays the list at the full height
             * needed to contain the contents.
             */
            height?: number | "auto" | undefined;
            /**
             * If set to true, each row is displayed with a delete button on the right-hand side.
             * Clicking the button will remove the row from the list and trigger the removeItem callback, if set.
             */
            removable?: boolean | undefined;
            /**
             * A function that is called when an item is removed from the list.
             *
             * @param data - the original data item for the item
             * The remove can be triggered by either clicking an item’s remove button, or calling the remoteItem method.
             */
            removeItem?: ((data: T) => void) | undefined;
            /**
             * A function that gets called when the size of the list changes.
             */
            resize?: (() => void) | undefined;
            /**
             * A function that gets called against each item in the list when the size of the list changes.
             *
             * @param row - the jQuery DOM element for the row
             * @param index - the index of the row
             *
             * The original data for the item is stored under a property called data.
             * ```const originalData = $(row).data('data');```
             *
             * This callback is invoked after the main resize callback is called.
             */
            resizeItem?: ((row: JQuery, index: number) => void) | undefined;
            /**
             * Determines whether the list should automatically scroll to the bottom whenever a new item is added.
             * If not specified, or set to true (boolean) the list will scroll to show newly added items.
             * If set to false (boolean), the list will not scroll
             */
            scrollOnAdd?: boolean | undefined;
            /**
             * A callback function that gets called to compare two items in the list to determine their order.
             *
             * @param itemDataA - a data item
             * @param itemDataB - a data item
             *
             * If the function returns a value less than 0, itemDataA comes before itemDataB.
             * If the function returns 0, the items are left unchanged.
             * If the function returns a value greater than 0, itemDataA comes after itemDataB.
             */
            sort?: ((itemDataA: T, itemDataB: T) => number) | undefined;
            /**
             * Determines whether the list items can be dragged to sort them.
             * If set to true (boolean), a default drag handle is displayed alongside the item.
             * If set to a CSS Selector, that is used to identify the element that should be used as the drag handle within the item’s content element.
             */
            sortable?: boolean | JQuery.Selector | undefined;
            /**
             * A function that is called after an item in the list is moved.
             *
             * @param items - an Array of the jQuery DOM elements for each row, in order.
             * Each row element stores the original data for the item under property called data.
             */
            sortItems?: ((items: JQuery[]) => void) | undefined;
        }

        /** @link https://nodered.org/docs/api/ui/editableList/ */
        interface EditableList extends JQuery {
            /**
             * Inits EditableList
             * A replacement for a <ol> element where the items can be complex elements in their own right. Used by the core Switch and Change nodes.
             *
             * More info: https://nodered.org/docs/api/ui/editableList/
             */
            <T>(options: EditableListOptions<T>): this; // eslint-disable-line @definitelytyped/no-unnecessary-generics
            /**
             * Adds an item to the end of the list.         *
             * @param value An object that will be associated with the item in the list.
             */
            (action: "addItem", value: object): void;
            /**
             * Adds items contained in an array to the end of the list.
             * @param value An array of objects that will be associated with the item in the list.
             */
            (action: "addItems", value: object[]): void;
            /**
             * Cancels the items move/reorder.
             */
            (action: "cancel"): void;
            /**
             * Clears the list of all items. This does not trigger any callbacks.
             */
            (action: "empty"): void;
            /**
             * Filters the list to show/hide items based on the active filter function and
             * returns the number of visible items.
             * If filter is not provided, the list is filtered using the current active filter function.
             * If filter is null, the filter is removed.
             */
            (action: "filter", filter?: (data: object) => boolean): number;
            /**
             * Gets the item data associated with the given item. Returns null if not found.
             */
            (action: "getItem", item: JQuery<HTMLLIElement>): object | null;
            /**
             * Gets item at index. Returns item data or undefined.
             * @param value Item index: 0..length-1
             */
            (action: "getItemAt", value: number): object | undefined;
            /**
             * Sets the height of the editableList. This must be used in place of the standard jQuery.height()
             * function as it ensures the component resizes properly.
             */
            (action: "height", value: string | number): void;
            /**
             * Inserts an item at the specified index.
             */
            (action: "insertItemAt", value: object, index: number): void;
            /**
             * Gets an Array of all list items. Each item is the jQuery DOM element for the item.
             * Each element stores the original data for the item under property called data.
             */
            (action: "items"): JQuery[];
            /**
             * Gets index of item. Returns index or -1 if not found.
             * @param value Item data
             */
            (action: "indexOf", value: object): number;
            /**
             * Gets the number of list items.
             */
            (action: "length"): number;
            /**
             * Removes an item from the list.
             * @param value The object that identifies the item to be removed.
             * @param detach Remove or detach the item
             */
            (action: "removeItem", value: object, detach?: boolean): void;
            /**
             * Scrolls the list to ensure the specific item is shown.
             * @param value An item into the list.
             */
            (action: "show", value: object): void;
            /**
             * Sorts the list using the active sort function.
             * @param value A callback function that gets called to compare two items in the list to determine their order.
             * If the function returns a value less than 0, itemDataA comes before itemDataB.
             * If the function returns 0, the items are left unchanged.
             * If the function returns a value greater than 0, itemDataA comes after itemDataB.
             */
            (action: "sort", value: (itemDataA: object, itemDataB: object) => number): void;

            /**
             * Sets the width of the editableList. This must be used in place of the standard jQuery.width()
             * function as it ensures the component resizes properly.
             */
            (action: "width", value: string | number): void;
        }

        interface SearchBoxOptions {
            /**
             * Delay, in ms, after a keystroke before firing change event
             */
            delay: number;
            /**
             * The minimum length of text before firing a change event
             */
            minimumLength: number;
        }

        /** @link https://nodered.org/docs/api/ui/searchBox/ */
        interface SearchBox extends JQuery {
            (options: SearchBoxOptions): this;
            /**
             * Triggers a change event on the search input.
             */
            (action: "change"): void;
            /**
             * Sets or clears a sub-label on the input. This can be used to provide
             * a feedback on the number of matches, or number of available entries to search.
             * The standard pattern to follow is:
             *   - if the search box is empty, set it to the number of available items: "300"
             *   - if the search box is not empty, set it to the number of matching items,
             *     as well as the number of available items: "120 / 300"
             * If value is `null`, `undefined` or `blank`, the count field is hidden.
             */
            (action: "count", value?: null | string): void;
            /**
             * Gets the current value of the search input.
             */
            (action: "value"): string;
            /**
             * Sets the current value of the search input.
             */
            (action: "value", value: string): void;
        }

        interface ToggleButtonOptions {
            /**
             * The base css class to apply, default "red-ui-button" (alternative eg "red-ui-sidebar-header-button")
             */
            baseClass?: string;
            /**
             * Additional classes to apply to the button - eg "red-ui-button-small"
             */
            class?: string;
            /**
             * The icon for "enabled" state, default "fa-check-square-o"
             */
            enabledIcon?: string;
            /**
             * The label for "enabled" state, default "Enabled" ("editor:workspace.enabled")
             */
            enabledLabel?: string;
            /**
             * The icon for "disabled" state, default "fa-square-o"
             */
            disabledIcon?: string;
            /**
             * The label for "disabled" state, default "Disabled" ("editor:workspace.disabled")
             */
            disabledLabel?: string;
            /**
             * If true, the button will show "enabled" when the checkbox is not selected and vice versa.
             */
            invertState?: boolean;
        }

        interface ToogleButton extends JQuery {
            (options: ToggleButtonOptions): this;
        }

        /** @link https://nodered.org/docs/api/ui/treeList/#options-data */
        interface TreeListData {
            /**
             * Whether to display a checkbox for the item.
             */
            checkbox?: boolean;
            /**
             * Prevent a parent item from being collapsed. Default true.
             */
            collapsible?: boolean;
            /**
             * An array of child items, or a function that calls the `done` callback with an array of child items.
             */
            children?:
                | TreeListData[]
                | ((done: (children: TreeListData[]) => void, item: TreeListData) => void);
            /**
             * Don't build any UI elements for the item's children until it is expanded by the user.
             */
            deferBuild?: boolean;
            /**
             * Custom DOM element to use for the item. Ignored if `label` is set.
             */
            element?: HTMLElement | JQuery;
            /**
             * Whether to show the child items by default.
             */
            expanded?: boolean;
            /**
             * Icon for the item.
             */
            icon?: string;
            /**
             * Label for the item.
             */
            label?: string;
            /**
             * Radio group name. If present, display radio box using group-name to set radio group.
             */
            radio?: string;
            /**
             * Whether the item is selected or not.
             */
            selected?: boolean;
            /**
             * A sub-label for the item.
             */
            sublabel?: string;
        }

        interface TreeListItem extends TreeListData {
            /**
             * The parent item in the tree, or undefined if this is a root item.
             */
            parent?: TreeListItem;
            /**
             * The depth of the item in the tree (0 == root).
             */
            depth: number;
            /**
             * TreeList-specific properties and methods.
             */
            treeList: {
                /**
                 * The container element for this item.
                 */
                container: HTMLElement | JQuery;
                /**
                 * The label element for this item.
                 */
                label: HTMLElement | JQuery;
                /**
                 * The editableList instance this item is in.
                 */
                parentList: JQuery;
                /**
                 * Removes the item from the tree.
                 * @param detach If true, detaches the element to preserve event handlers.
                 */
                remove(detach?: boolean): void;
                /**
                 * Turns an element with children into a leaf node, removing UI decoration.
                 * @param detachChildElements If true, detaches children with custom elements to preserve event handlers.
                 */
                makeLeaf(detachChildElements?: boolean): void;
                /**
                 * Turns an element into a parent node, adding UI decoration.
                 * @param children Optional children to add as child nodes.
                 */
                makeParent(children?: TreeListItem[]): void;
                /**
                 * Adds a child item at the specified position.
                 * @param newItem The new child item to insert.
                 * @param position The position to insert at.
                 * @param select If true, selects the item after adding.
                 */
                insertChildAt(newItem: TreeListItem, position: number, select?: boolean): void;
                /**
                 * Appends a child item.
                 * @param newItem The new child item to add.
                 * @param select If true, selects the item after adding.
                 */
                addChild(newItem: TreeListItem, select?: boolean): void;
                /**
                 * Expands the parent item to show children.
                 * @param done Optional callback when expansion is complete.
                 */
                expand(done?: () => void): void;
                /**
                 * Collapses the parent item to hide children.
                 */
                collapse(): void;
                /**
                 * Sorts the children using the provided sort function.
                 * @param sortFunction The function to sort children.
                 */
                sortChildren(sortFunction: (a: TreeListItem, b: TreeListItem) => number): void;
                /**
                 * Replaces the custom element for the item.
                 * @param element The new element to use.
                 */
                replaceElement(element: HTMLElement | JQuery): void;
            };
        }

        /** @link https://nodered.org/docs/api/ui/treeList/#options */
        interface TreeListOptions {
            /**
             * Automatically select items when navigating with keyboard.
             * Default true. If the list has checkboxed items, you probably want to set this to false.
             */
            autoSelect?: boolean;
            /**
             * Initial items to display in tree
             */
            data: TreeListData[];
            /**
             * If true, .selected will return an array of results; otherwise, returns the first selected item.
             */
            multi?: boolean;
            /**
             * Whether individual items can be selected. Default true.
             */
            selectable?: boolean;
            /**
             * If 'sortable' is set, then setting this to false prevents items being sorted to the top level of the tree.
             */
            rootSortable?: boolean;
            /**
             * Enable sorting. Boolean or string. (TODO: see editableList)
             */
            sortable?: boolean | string;
        }

        /** @link https://nodered.org/docs/api/ui/treeList/ */
        interface TreeList extends JQuery {
            (options: TreeListOptions): this;
            (action: "clearSelection"): void;
            /**
             * Returns the data the treeList is displaying.
             * If any items had the `selected` property set on them, its value will reflect the current checkbox state.
             */
            (action: "data"): TreeListData[];
            /**
             * Sets the data to be displayed by the list.
             */
            (action: "data", items: TreeListData[]): void;
            /**
             * Removes all items from the list.
             */
            (action: "empty"): void;
            (action: "filter", filter: (item: TreeListItem) => boolean): number;
            (action: "get", id: string): TreeListItem | null;
            (action: "reveal", item: string | TreeListItem): void;
            (
                action: "select",
                item: TreeListItem | TreeListItem[],
                triggerEvent?: boolean,
                deselectExisting?: boolean,
            ): void;
            (action: "selected"): TreeListItem | TreeListItem[] | undefined;
            (action: "show", item: string | TreeListItem, done?: () => void): void;
        }

        /** @link https://nodered.org/docs/api/ui/typedInput/#options */
        interface TypedInputOptions {
            /** If defined, sets the default type of the input if typeField is not set. */
            default?: TypedInputType | string | undefined;
            /** Sets the list of types the element will offer. */
            types: Array<TypedInputType | TypedInputTypeDefinition>;
            /**
             * In some circumstances it is desirable to already have an <input> element to store the type value of the typedInput.
             * This option allows such an existing element to be provided. As the type of the typedInput is changed, the value
             * of the provided input will also change.
             */
            typeField?: JQuery.Selector | JQuery | undefined;
        }

        /** @link https://nodered.org/docs/api/ui/typedInput/#types */
        type TypedInputType =
            | "msg"
            | "flow"
            | "global"
            | "str"
            | "num"
            | "bool"
            | "json"
            | "bin"
            | "re"
            | "date"
            | "jsonata"
            | "env"
            | "node"
            | "cred"
            | "conf-types";

        /** @link https://nodered.org/docs/api/ui/typedInput/#types-typedefinition */
        interface TypedInputTypeDefinition {
            /**
             * If set, enable autoComplete on the input, using this function to get completion suggestions.
             * This option cannot be used with {@link options}, {@link hasValue}=false or {@link valueLabel}.
             */
            autoComplete?:
                | ((value: string) => Array<{ value: string; label: string | JQuery }>)
                | ((value: string, done: (result?: Array<{ value: string; label: string | JQuery }>) => void) => void);
            /** A callback function that gets called when the input needs to be expanded */
            expand?: (this: TypedInput) => void;
            /** Set to false if there is no value associated with the type. */
            hasValue?: boolean | undefined;
            /** An icon to display in the type menu */
            icon?: string | undefined;
            /** The type of input. e.g. password,email... */
            inputType?: string | undefined;
            /** A label to display in the type menu */
            label?: string | undefined;
            /** If {@link options} is set, this can enable multiple selection of them. */
            multiple?: boolean;
            /** If the type has a fixed set of values, this is an array of string options for the value. For example, ["true","false"] for the boolean type. */
            options?: string[] | Array<{ value: string; label: string }> | undefined;
            /** A function to validate the value for the type. */
            validate?:
                | ((value: string) => boolean)
                | ((value: string, options: {}) => string | boolean)
                | RegExp;
            /** The identifier for the type */
            value: string;
            /**
             * A function that generates the label for a given value.
             * @param container the DOM element the label should be constructed in
             * @param value The value of the type
             */
            valueLabel?: (container: JQuery, value: string) => void;
        }

        /** @link https://nodered.org/docs/api/ui/typedInput/ */
        interface TypedInput extends JQuery {
            /**
             * Inits TypedInput
             * A replacement for a regular <input> that allows the type of the value to be
             * chosen, including options for string, number and boolean types.
             * More info: https://nodered.org/docs/api/ui/typedInput/
             */
            (options: TypedInputOptions): this;
            /**
             * Disables the typedInput.
             */
            (action: "disable", value?: boolean): void;
            /**
             * Gets the disabled state of the typedInput.
             */
            (action: "disabled"): boolean;
            /**
             * Enables the typedInput.
             */
            (action: "enable"): void;
            /**
             * Focuses the typedInput.
             */
            (action: "focus"): void;
            /**
             * Hides the typedInput.
             */
            (action: "hide"): void;
            /**
             * Shows the typedInput.
             */
            (action: "show"): void;
            /**
             * Gets the selected type of the typedInput.
             */
            <T extends string = TypedInputType>(action: "type"): T; // eslint-disable-line @definitelytyped/no-unnecessary-generics
            /**
             * Sets the selected type of the typedInput.
             */
            <T extends string = TypedInputType>(action: "type", value: T): void; // eslint-disable-line @definitelytyped/no-unnecessary-generics
            /**
             * Sets the list of types offered by the typedInput.
             */
            (action: "types", value: Array<TypedInputType | TypedInputTypeDefinition>): void;
            /**
             * Triggers manually a revalidation of the typedInput’s type/value.
             * This occurs automatically whenever the type or value change.
             */
            (action: "validate"): boolean;
            /** @since v4.0.0 */
            (action: "validate", options: { returnErrorMessage: boolean }): string | boolean;
            /**
             * Gets the value of the typedInput.
             */
            (action: "value"): string;
            /**
             * Sets the value of the typedInput.
             */
            (action: "value", value: string): void;
            /**
             * Sets the width of the typedInput. This must be used in place of the standard
             * ```jQuery.width()``` function as it ensures the component resizes properly.
             */
            (action: "width", value: string | number): void;
        }
    }

    interface Workspaces {
        /** @internal */
        init(): void;
        active(): 0 | nodes.UID;
        add(workspace?: nodes.Workspace, skipHistoryEntry?: boolean, targetIndex?: number): nodes.Workspace;
        contains(id: nodes.UID): boolean;
        count(): number;
        /**
         * Removes workspace and updates editor history
         */
        delete(workspace: nodes.Workspace): void;
        disable(id: nodes.UID): void;
        edit(id: nodes.UID): void;
        enable(id: nodes.UID): void;
        hide(id?: nodes.UID): void;
        isHidden(id: nodes.UID): boolean;
        isLocked(id: nodes.UID): boolean;
        lock(id: nodes.UID): void;
        order(order: nodes.UID[]): nodes.UID[];
        refresh(): void;
        /**
         * Removes workspace without editor history etc
         */
        remove(workspace: nodes.Workspace): void;
        resize(): void;
        selection(): nodes.Workspace[];
        show(id: nodes.UID, skipStack?: boolean, unhideOnly?: boolean, flash?: boolean): void;
        unlock(id: nodes.UID): void;
    }

    interface RED {
        _: i18n.I18nT;
        actionList: ActionList;
        /**
         * This API can be used to register and invoke Actions in the editor.
         * Actions are individual pieces of functionality that a user may want
         * to trigger and can be bound to keyboard shortcuts.
         * @link https://nodered.org/docs/api/ui/actions
         */
        actions: Actions;
        clipboard: Clipboard;
        colorPicker: ColorPicker;
        /**
         * This Comms API provides a real-time connection between the runtime and the editor via a WebSocket.
         * The network overhead of this connection **MUST** be kept as low as possible.
         */
        comms: Comms;
        contextMenu: ContextMenu;
        deploy: Deploy;
        diagnostics: Diagnostics;
        /** @internal */
        diff: Diff;
        editor: Editor;
        envVar: EnvVar;
        /** @internal */
        eventLog: EventLog;
        /**
         * The editor emits events that components can listen for so they can react as needed.
         * @link https://nodered.org/docs/api/ui/events
         */
        events: Events;
        group: Group;
        /**
         * The History API for undo / redo history buffer
         */
        history: History;
        i18n: I18n;
        keyboard: Keyboard;
        library: Library;
        menu: Menu;
        multiplayer: MultiPlayer;
        /**
         * The Nodes API
         */
        nodes: Nodes;
        notify: Notifications["notify"];
        /**
         * This API can be used to display notifications that pop-down from the top of the editor.
         * @link https://nodered.org/docs/api/ui/notifications
         */
        notifications: Notifications;
        palette: Palette;
        panels: Panels;
        plugins: Plugins;
        popover: Popover;
        projects: Projects;
        runtime: Runtime;
        search: Search;
        // TODO: settings of runtime
        // settings: Settings;
        settings: SettingsWithData;
        /**
         * @link https://nodered.org/docs/api/ui/sidebar
         */
        sidebar: Sidebar;
        stack: Stack;
        state: ViewState;
        statusBar: StatusBar;
        subflow: Subflow;
        tabs: Tabs;
        text: Text;
        /** @deprecated Removed in v5.0.0 */
        touch: Touch;
        /**
         * An API for Tour Guide
         */
        tourGuide: TourGuide;
        tray: Tray;
        typeSearch: TypeSearch;
        user: User;
        userSettings: UserSettings;
        utils: Utils;
        /**
         * @link https://nodered.org/docs/creating-nodes/properties#property-validation
         */
        validators: Validators;
        view: View;
        workspaces: Workspaces;
    }

    /**
     * Deprecated types
     */

    /** @deprecated */
    interface TypeEditorShowOptions {
        title?: string;
        parent?: JQuery;
        onclose?: () => void;
    }
    /** @deprecated Use {@link editor.TypeEditorDefinition} instead */
    interface TypeEditorDefinition extends editor.TypeEditorDefinition {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link editor.JavaScriptOptions} instead */
    interface JavaScriptTypeEditorShowOptions extends editor.JavaScriptOptions {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link editor.ExpressionOptions} instead */
    interface ExpressionTypeEditorShowOptions extends editor.ExpressionOptions {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link editor.JSONOptions} instead */
    interface JSONTypeEditorShowOptions extends editor.JSONOptions {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link editor.MarkdownOptions} instead */
    interface MarkdownTypeEditorShowOptions extends editor.MarkdownOptions {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link editor.TextOptions} instead */
    interface TextTypeEditorShowOptions extends editor.TextOptions {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link editor.BufferOptions} instead */
    interface BufferTypeEditorShowOptions extends editor.BufferOptions {} // eslint-disable-line @typescript-eslint/no-empty-interface

    /** @deprecated Use {@link editor.TrayOptions} instead */
    interface TrayShowOptions extends editor.TrayOptions {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link editor.TrayResizeOptions} instead */
    interface TrayResizeOptions extends editor.TrayResizeOptions {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link editor.TrayButton} instead */
    interface TrayButton extends editor.TrayButton {} // eslint-disable-line @typescript-eslint/no-empty-interface

    /** @deprecated Use {@link menu.MenuItemOptions} instead */
    interface MenuItemOption extends menu.MenuItemOptions {} // eslint-disable-line @typescript-eslint/no-empty-interface

    /** @deprecated Use {@link tabs.TabsInstance} instead */
    interface TabsInstance extends tabs.TabsInstance {} // eslint-disable-line @typescript-eslint/no-empty-interface

    /** @deprecated Use {@link popover.PopoverInstance} instead */
    interface PopoverInstance extends popover.PopoverInstance {} // eslint-disable-line @typescript-eslint/no-empty-interface

    /** @deprecated Use {@link nodes.NodeProperties} instead */
    interface NodeProperties extends nodes.NodeProperties {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link nodes.ReservedProperties} instead */
    type NodeReservedProperties = nodes.ReservedProperties;

    /** @deprecated Use {@link plugins.PluginDefinition} instead */
    interface PluginDef extends plugins.PluginDefinition {} // eslint-disable-line @typescript-eslint/no-empty-interface

    /** @deprecated Use {@link widgets.EditableListOptions} instead */
    interface WidgetEditableListOptions<T> extends widgets.EditableListOptions<T> {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link widgets.EditableList} instead */
    interface WidgetEditableList extends widgets.EditableList {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link widgets.TypedInputOptions} instead */
    interface WidgetTypedInputOptions extends widgets.TypedInputOptions {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link widgets.TypedInputType} instead */
    type WidgetTypedInputType = widgets.TypedInputType;
    /** @deprecated Use {@link widgets.TypedInputTypeDefinition} instead */
    interface WidgetTypedInputTypeDefinition extends widgets.TypedInputTypeDefinition {} // eslint-disable-line @typescript-eslint/no-empty-interface
    /** @deprecated Use {@link widgets.TypedInput} instead */
    interface WidgetTypedInput extends widgets.TypedInput {} // eslint-disable-line @typescript-eslint/no-empty-interface
}

declare global {
    /**
     * JQuery Widgets
     */
    interface JQuery<TElement = HTMLElement> {
        autoComplete: editorClient.widgets.AutoComplete;
        checkboxSet: editorClient.widgets.CheckboxSet;
        editableList: editorClient.widgets.EditableList;
        searchBox: editorClient.widgets.SearchBox;
        toggleButton: editorClient.widgets.ToogleButton;
        treeList: editorClient.widgets.TreeList;
        typedInput: editorClient.widgets.TypedInput;
    }
}
