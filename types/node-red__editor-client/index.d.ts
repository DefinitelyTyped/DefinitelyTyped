/// <reference lib="dom" />
/// <reference types="ace" />
/// <reference types="jquery" />

import * as registry from "@node-red/registry";
import { LocalSettings as RuntimeLocalSettings } from "@node-red/runtime";
import { I18nTFunction } from "@node-red/util";

declare const editorClient: editorClient.EditorClientModule;

export = editorClient;

declare namespace editorClient {
    type EditorClientModule = false;

    /**
     * Property definition
     * Read more: https://nodered.org/docs/creating-nodes/properties#property-definitions
     */
    interface NodePropertyDef<TVal, TInstProps extends NodeProperties = NodeProperties> {
        /** The default value the property takes */
        value: TVal | "";
        /** Whether the property is required. If set to true, the property will be invalid if its value is null or an empty string. */
        required?: boolean | undefined;
        /** A function that can be used to validate the value of the property. */
        validate?:
            | ((
                this: NodeInstance<TInstProps>,
                val: TVal | "",
                options?: ValidationOptions,
            ) => boolean | string | string[])
            | undefined;
        /** If this property is a pointer to a configuration node, this identifies the type of the node. */
        type?: string | undefined;
        /** Optional label used in validation error messages. */
        label?: string | undefined;
        /** Optional input format used by content-editable fields. */
        format?: string | undefined;
    }

    interface ValidationOptions {
        label?: string | undefined;
    }

    /**
     * Properties definitions (`defaults` object)
     * Read more: https://nodered.org/docs/creating-nodes/properties
     */
    type NodePropertiesDef<TProps extends NodeProperties, TInstProps extends TProps = TProps> = {
        [K in keyof TProps]: K extends NodeReservedProperties ? never : NodePropertyDef<TProps[K], TInstProps>;
    };

    /**
     * Node properties
     * Read more: https://nodered.org/docs/creating-nodes/properties
     */
    interface NodeProperties {
        name?: string | undefined;
        inputs?: 0 | 1 | undefined;
    }

    /** Reserved name for properties that MUST NOT BE USED. */
    type NodeReservedProperties =
        | "changed"
        | "dirty"
        | "icon"
        | "id"
        | "info"
        | "inputLabels"
        | "outputLabels"
        | "ports"
        | "selected"
        | "type"
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
        }>
        & {
            changed?: boolean | undefined;
            dirty?: boolean | undefined;
            moved?: boolean | undefined;
            selected?: boolean | undefined;
            valid?: boolean | undefined;
            validationErrors?: string[] | undefined;
            wires?: string[][] | undefined;
            _def?: NodeDef<NodeProperties> | undefined;
        };

    type NodeCredentials<T> = {
        [K in keyof T]: NodeCredential;
    };

    interface NodeCredential {
        type: "text" | "password";
    }

    /**
     * Node Definition
     * Read more: https://nodered.org/docs/creating-nodes/node-html#node-definition
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
        inputLabels?: string | ((this: NodeInstance<TInstProps>, idx: number) => string | null | undefined) | undefined;
        /**
         * Optional labels to add on hover to the output ports of a node.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#port-labels
         */
        outputLabels?:
            | string
            | string[]
            | ((this: NodeInstance<TInstProps>, idx: number) => string | null | undefined)
            | undefined;
        /**
         * The icon to use.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#icon
         */
        icon?: string | ((this: NodeInstance<TInstProps>) => string) | undefined;
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
        oneditsave?: ((this: NodeInstance<TInstProps>) => unknown) | undefined;
        /**
         * Called when the edit dialog is cancelled.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditcancel?: ((this: NodeInstance<TInstProps>, isNew?: boolean) => void) | undefined;
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
        /** Whether newly-added nodes should immediately open their edit dialog. */
        autoedit?: boolean | undefined;
        /** Whether the node label can be shown in the workspace. */
        showLabel?: boolean | undefined;
        /** Description shown for a custom palette category. */
        categoryDescription?: string | undefined;
        /** Whether an unused configuration node should be treated as unused. */
        hasUsers?: boolean | undefined;
        /** Whether each referencing node owns a distinct configuration node. */
        exclusive?: boolean | undefined;
    }

    interface CommSubscriber {
        (topic: string, data: any): void;
    }
    interface Comms {
        connect(): void;
        subscribe(topic: string, callback: CommSubscriber): void;
        unsubscribe(topic: string, callback: CommSubscriber): void;
        on(evt: string, callback: (...args: any[]) => void): void;
        off(evt: string, callback: (...args: any[]) => void): void;
        send(topic: string, message: unknown): void;
    }

    interface Events {
        on(evt: string, func: (...args: any[]) => void): void;
        off(evt: string, func: (...args: any[]) => void): void;
        emit(evt: string, ...args: any[]): void;
    }

    type HistoryEvent =
        & {
            dirty?: boolean | undefined;
            callback?: ((ev: HistoryEvent) => void) | undefined;
        }
        & (
            | {
                t: "multi";
                events: HistoryEvent[];
            }
            | {
                t: "replace";
                config: object;
                changed: object;
                rev: string;
            }
            | {
                t: "add";
                nodes?: object[] | undefined;
                links?: object[] | undefined;
                groups?: object[] | undefined;
                workspaces?: object[] | undefined;
                subflows?: object[] | undefined;
                subflow?: object | undefined;
                removedLinks?: object[] | undefined;
            }
            | {
                t: "delete";
                workspaces?: object[] | undefined;
                subflows?: object[] | undefined;
                subflowInputs?: object[] | undefined;
                subflowOutputs?: object[] | undefined;
                subflow?: object | undefined;
                groups?: object[] | undefined;
                nodes?: object[] | undefined;
                links?: object[] | undefined;
                createdLinks?: object[] | undefined;
                changes?: object[] | undefined;
            }
            | {
                t: "move";
                nodes: object[];
                links?: object[] | undefined;
                removedLinks?: object[] | undefined;
                addToGroup?: object | undefined;
                removeFromGroup?: object | undefined;
            }
            | {
                t: "edit";
                node: object;
                changes: object[];
                links?: object[] | undefined;
                createdLinks?: object[] | undefined;
            }
            | {
                t: "createSubflow";
                nodes?: object[] | undefined;
                links?: object[] | undefined;
                subflow: object;
                removedLinks?: object[] | undefined;
            }
            | {
                t: "deleteSubflow";
                subflow?: object | undefined;
                subflows?: object[] | undefined;
                movedNodes?: object[] | undefined;
                links?: object[] | undefined;
                createdLinks?: object[] | undefined;
            }
            | {
                t: "reorder";
                order?: object | undefined;
            }
            | {
                t: "createGroup";
                groups?: object[] | undefined;
            }
            | {
                t: "ungroup";
                groups?: object[] | undefined;
            }
            | {
                t: "addToGroup";
                nodes?: object[] | undefined;
            }
            | {
                t: "removeFromGroup";
                nodes?: object[] | undefined;
            }
        );
    interface History {
        markAllDirty(): void;
        list(): HistoryEvent[];
        listRedo(): HistoryEvent[];
        depth(): number;
        push(ev: HistoryEvent): void;
        pop(): void;
        peek(): HistoryEvent | undefined;
        replace(ev: HistoryEvent): void;
        clear(): void;
        redo(): void;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface I18n {
        init(options: { apiRootUrl?: string | undefined }, done: () => void): void;
        lang(): string;
        loadNodeCatalog(namespace: string, done: () => void): void;
        loadNodeCatalogs(done: () => void): void;
        loadPluginCatalogs(done: () => void): void;
        detectLanguage(): string;
    }

    interface NodesFontAwesome {
        getIconUnicode(name: string): string;
        getIconList(): string[];
    }

    interface NodesRegistry {
        setModulePendingUpdated(module: string, version: string): void;
        getModule(module: string): NodeModule | undefined;
        getNodeSetForType(nodeType: string): NodeSet | undefined;
        getModuleList(): Record<string, NodeModule>;
        getNodeList(): NodeSet[];
        getNodeTypes(): string[];
        getNodeDefinitions(options?: {
            configOnly?: boolean | undefined;
            filter?: ((definition: NodeDef<NodeProperties>) => boolean) | undefined;
        }): Array<NodeDef<NodeProperties>>;
        setNodeList(list: NodeSet[]): void;
        addNodeSet(ns: NodeSet): void;
        removeNodeSet(id: string): NodeSet | Record<string, never>;
        getNodeSet(id: string): NodeSet | undefined;
        enableNodeSet(id: string): void;
        disableNodeSet(id: string): void;
        /**
         * Registers a node with the editor.     *
         * @param nt The node type is used throughout the editor to identify the node. It must
         * match the value used by the call to RED.nodes.registerType in the corresponding runtime
         * script.
         * @param def The node definition contains all of the information about the node
         * needed by the editor.
         */
        // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
        registerNodeType<TProps extends NodeProperties, TCreds = undefined, TInstProps extends TProps = TProps>(
            nt: string,
            def: NodeDef<TProps, TCreds, TInstProps>,
        ): void;
        removeNodeType(nt: string): void;
        getNodeType(nt: string): NodeDef<NodeProperties> | undefined;
        setIconSets(sets: Record<string, string[]>): void;
        getIconSets(): Record<string, string[]>;
    }

    interface NodeSet {
        id: string;
        module: string;
        name: string;
        version: string;
        types: string[];
        local?: boolean | undefined;
        enabled?: boolean | undefined;
        added?: boolean | undefined;
        err?: string | undefined;
        pending_version?: string | undefined;
        [key: string]: unknown;
    }

    interface NodeModule {
        name: string;
        version: string;
        local?: boolean | undefined;
        pending_version?: string | undefined;
        sets: Record<string, NodeSet | PluginModuleEntry>;
        plugin?: boolean | undefined;
        id?: string | undefined;
    }

    interface PluginModuleEntry {
        id?: string | undefined;
        module: string;
        name: string;
        version: string;
        local?: boolean | undefined;
        pending_version?: string | undefined;
        [key: string]: unknown;
    }

    interface EditorLink {
        source: NodeInstance;
        target: NodeInstance;
        sourcePort: number;
        targetPort: number;
        [key: string]: unknown;
    }

    interface ImportOptions {
        generateIds?: boolean | undefined;
        addFlow?: boolean | undefined;
        markChanged?: boolean | undefined;
        reimport?: boolean | undefined;
        importMap?: Record<string, "import" | "copy" | "replace"> | undefined;
        modules?: Record<string, string> | undefined;
        applyNodeDefaults?: boolean | undefined;
        eventContext?: unknown;
    }

    interface ImportResult {
        nodes: NodeInstance[];
        links: EditorLink[];
        groups: object[];
        junctions: object[];
        workspaces: object[];
        subflows: object[];
        missingWorkspace: object | null;
        removedNodes: NodeInstance[];
        nodeMap: Record<string, NodeInstance>;
    }

    interface ImportConflicts {
        tabs: Record<string, object>;
        subflows: Record<string, object>;
        groups: Record<string, object>;
        junctions: Record<string, object>;
        configs: Record<string, object>;
        nodes: Record<string, object>;
        all: object[];
        conflicted: Record<string, object>;
        zMap: Record<string, object[]>;
    }

    interface Nodes {
        fontAwesome: NodesFontAwesome;
        registry: NodesRegistry;
        init(): void;
        setNodeList: NodesRegistry["setNodeList"];
        getNodeList: NodesRegistry["getNodeList"];
        getNodeSet: NodesRegistry["getNodeSet"];
        addNodeSet: NodesRegistry["addNodeSet"];
        removeNodeSet: NodesRegistry["removeNodeSet"];
        enableNodeSet: NodesRegistry["enableNodeSet"];
        disableNodeSet: NodesRegistry["disableNodeSet"];
        setIconSets: NodesRegistry["setIconSets"];
        getIconSets: NodesRegistry["getIconSets"];

        /**
         * Registers a node with the editor.     *
         * @param nt The node type is used throughout the editor to identify the node. It must
         * match the value used by the call to RED.nodes.registerType in the corresponding runtime
         * script.
         * @param def The node definition contains all of the information about the node
         * needed by the editor.
         */
        registerType: NodesRegistry["registerNodeType"];
        getType: NodesRegistry["getNodeType"];
        getNodeHelp(type: string): string | undefined;
        /**
         * Converts a node to an exportable JSON Object
         */
        convertNode(n: object, exportCreds: boolean): object;

        add(n: object, options?: object): NodeInstance;
        remove(id: string): { links: object[]; nodes: object[] };
        clear(): void;
        detachNodes(nodes: object[]): { newLinks: EditorLink[]; removedLinks: EditorLink[] } | undefined;
        moveNodesForwards(nodes: object[]): object[];
        moveNodesBackwards(nodes: object[]): object[];
        moveNodesToFront(nodes: object[]): object[];
        moveNodesToBack(nodes: object[]): object[];
        getNodeOrder(z: string): string[];
        setNodeOrder(z: string, order: string[]): void;

        moveNodeToTab(node: object, z: string): void;

        addLink(l: object): void;
        removeLink(l: object): void;
        getNodeLinks(id: string | { id: string }, portType: 0 | 1): EditorLink[];

        addWorkspace(ws: object, targetIndex?: number): void;
        removeWorkspace(id: string): {
            nodes: object[];
            links: object[];
            groups: object[];
            junctions: object[];
        };
        getWorkspaceOrder(): object[];
        setWorkspaceOrder(order: string[]): void;
        workspace(id: string): object | undefined;

        addSubflow(sf: object, createNewIds?: boolean): void;
        removeSubflow(sf: object): void;
        subflow(id: string): object | undefined;
        subflowContains(sfid: string, nodeid: string): boolean;

        addGroup(group: object): object;
        removeGroup(group: object): void;

        group(id: string): object | undefined;
        groups(z: string): object[];
        addJunction(junction: object): object;
        removeJunction(junction: object): { links: EditorLink[] };
        junction(id: string): object | undefined;
        junctions(z: string): object[];

        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        eachNode(cb: (node: object) => boolean | void): void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        eachLink(cb: (link: object) => boolean | void): void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        eachConfig(cb: (configNode: object) => boolean | void): void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        eachSubflow(cb: (subflow: object) => boolean | void): void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        eachWorkspace(cb: (workspace: object) => boolean | void): void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        eachGroup(cb: (group: object) => boolean | void): void;
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        eachJunction(cb: (junction: object) => boolean | void): void;

        /**
         * @param id Node id
         * @returns node or config node, or null if no nodes with such id
         */
        node(id: string): object | undefined;

        version(): string | null;
        version(version: string): void;

        originalFlow(): object | undefined;
        originalFlow(flow: object): void;

        filterNodes(filter: object): object[];
        filterLinks(filter: object): object[];

        /**
         * @returns [new_nodes,new_links,new_groups,new_workspaces,new_subflows,missingWorkspace]
         */
        import(newNodesObj: string | object | object[], options?: ImportOptions): ImportResult | undefined;
        identifyImportConflicts(importedNodes: object[]): ImportConflicts;

        getAllFlowNodes(node: object): object[];
        getAllUpstreamNodes(node: object): object[];
        getAllDownstreamNodes(node: object): object[];
        getDownstreamNodes(node: object): object[];
        getNodeIslands(nodes: object[]): object[][];
        /**
         * Converts the current node selection to an exportable JSON Object
         */
        createExportableNodeSet(
            set: object[],
            exportedIds?: object,
            exportedSubflows?: object,
            exportedConfigNodes?: object,
        ): object[];
        createCompleteNodeSet(exportCredentials?: boolean): object[];
        updateConfigNodeUsers(n: object): void;
        id(): string;
        dirty(): boolean;
        dirty(d: boolean): void;
    }

    interface Settings {
        init(
            options: {
                apiRootUrl: string;
            },
            done: () => void,
        ): void;
        load(done: () => void): void;
        loadUserSettings(done: () => void): void;
        refreshSettings(done: (error: unknown, settings?: SettingsWithData) => void): void;
        set(key: string, value: unknown, flush?: boolean): void;
        get(key: string): unknown;
        get<T>(key: string, defaultIfUndefined: T): T;

        remove(key: string): void;
        theme<T>(property: string, defaultValue: T): T;
        setLocal(key: string, value: string): void;
        getLocal(key: string): string | null;
        removeLocal(key: string): void;
    }

    interface SettingsWithData extends Settings, RuntimeLocalSettings {}

    interface User {
        init(): void;
        login(done: () => void): void;
        login(opts: { cancelable?: boolean | undefined; updateMenu?: boolean | undefined }, done: () => void): void;
        logout(): void;
        hasPermission(permission: string | object): boolean;
        generateUserIcon(user: object): JQuery;
    }

    type Validator = (value: unknown, options?: ValidationOptions) => boolean | string;

    interface TypedInputValidatorOptions {
        type?: string | undefined;
        typeField?: string | undefined;
        isConfig?: boolean | undefined;
        allowBlank?: boolean | undefined;
        allowUndefined?: boolean | undefined;
    }

    interface Validators {
        number(blankAllowed?: boolean, options?: ValidationOptions): Validator;
        regex(re: RegExp, options?: ValidationOptions): Validator;
        typedInput(
            typeFieldOrOptions: string | TypedInputValidatorOptions,
            isConfig?: boolean,
            options?: ValidationOptions,
        ): Validator;
    }

    interface Plugins {
        registerPlugin(id: string, definition: PluginDef): void;
        getPlugin(id: string): PluginDef | undefined;
        getPluginsByType(type: string): PluginDef[];
        setPluginList(list: PluginModuleEntry[]): void;
        addPlugin(plugin: PluginModuleEntry): void;
        getModule(module: string): NodeModule | undefined;
    }
    interface PluginDef {
        onadd?: (() => void) | undefined;
        onremove?: (() => void) | undefined;
        type?: string | undefined;
        module?: string | undefined;
        _?: I18nTFunction | undefined;
        [key: string]: unknown;
    }

    type KnownHookId =
        | "viewRemoveNode"
        | "viewAddNode"
        | "viewRemovePort"
        | "viewAddPort"
        | "viewRedrawNode"
        | "debugPreProcessMessage"
        | "debugPostProcessMessage"
        | "all";

    type HookId = KnownHookId | (string & {});

    type HookCallback = (payload: any, done?: (error?: Error | string | boolean) => void) =>
        | boolean
        | Promise<unknown>
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        | void;

    interface Hooks {
        has(hookId: HookId): boolean;
        clear(): void;
        add(hookId: HookId, callback: HookCallback): void;
        remove(hookId: HookId): void;
        trigger(id: HookId, payload: unknown): Promise<unknown>;
        trigger(
            id: HookId,
            payload: unknown,
            done: (error?: Error | string | boolean) => void,
        ): void;
        isKnownHook(hookId: HookId): boolean;
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

    interface ActionList {
        init(): void;
        show(v: string): void;
        hide(): void;
    }

    interface Actions {
        add(name: string, handler: (...args: any[]) => void, options?: ActionOptions): void;
        remove(name: string): void;
        get(name: string): (...args: any[]) => void;
        getLabel(name: string): string;
        invoke(name: string, ...args: any[]): void;
        list(): ActionDefinition[];
    }

    interface ActionOptions {
        label?: string | undefined;
        [key: string]: unknown;
    }

    interface ActionDefinition {
        id: string;
        scope?: string | undefined;
        key?: string | undefined;
        user: boolean;
        label: string;
        options?: ActionOptions | undefined;
    }

    interface Clipboard {
        init(): void;
        import(mode?: string): void;
        export(mode?: string): void;
        copyText(value: any, element: HTMLElement, msg: string): boolean;
    }

    interface Deploy {
        /**
         * options:
         *   type: "default" - Button with drop-down options - no further customisation available
         *   type: "simple"  - Button without dropdown. Customisations:
         *      label: the text to display - default: "Deploy"
         *      icon : the icon to use. Null removes the icon. default: "red/images/deploy-full-o.svg"
         */
        init(options?: {
            type?: "default" | "simple" | undefined;
            label?: string | undefined;
            icon?: string | undefined;
        }): void;
        setDeployInflight(state: boolean): void;
    }

    interface Diff {
        init(): void;
        getRemoteDiff(callback: (diff: object) => void): void;
        showRemoteDiff(diff: object): void;
        showUnifiedDiff(options: object): void;
        showCommitDiff(options: object): void;
        mergeDiff(diff: object): void;
    }

    interface Editor {
        codeEditor: CodeEditorManager;
        colorPicker: ColorPicker;
        iconPicker: IconPicker;
        envVarList: EnvVarList;
        mermaid: Mermaid;
        init(): void;
        generateViewStateId(source: string, thing?: object, suffix?: string): string | false;
        edit(node: object): void;
        /**
         * @param name - name of the property that holds this config node
         * @param type - type of config node
         * @param id - id of config node to edit. _ADD_ for a new one
         * @param prefix - the input prefix of the parent property
         */
        editConfig(name: string, type: string, id: string, prefix: string): void;
        editFlow(flow: object): void;
        editSubflow(subflow: object, defaultTab?: any): void;
        editGroup(group: object, defaultTab?: any): void;
        editJavaScript(options: JavaScriptTypeEditorShowOptions): void;
        editExpression(options: ExpressionTypeEditorShowOptions): void;
        editJSON(options: JSONTypeEditorShowOptions): void;
        editMarkdown(options: MarkdownTypeEditorShowOptions): void;
        editText(options: TextTypeEditorShowOptions): void;
        editBuffer(options: BufferTypeEditorShowOptions): void;
        getEditStack(): object[];
        buildEditForm(container: JQuery, formId: string, type: string, ns: string, node: unknown): JQuery;
        /**
         * Validate a node
         * @param node - the node being validated
         */
        validateNode(node: unknown): boolean;
        /**
         * Called when the node's properties have changed.
         * Marks the node as dirty and needing a size check.
         * Removes any links to non-existant outputs.
         * @param node - the node that has been updated
         * @param outputMap - (optional) a map of old->new port numbers if wires should be moved
         * @returns the links that were removed due to this update
         */
        updateNodeProperties(node: object, outputMap?: Record<string, string>): object[];

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
        showTypeEditor(type: string, options: TypeEditorShowOptions): void;

        /**
         * Register a type editor.
         * @param type - the type name
         * @param definition - the editor definition
         */
        registerTypeEditor(type: string, definition: TypeEditorDefinition): void;

        /**
         * Create a editor ui component
         * @param options - the editor options
         */
        createEditor(options: CodeEditorOptions): CodeEditor;
        readonly customEditTypes: Record<string, TypeEditorDefinition>;
        registerEditPane(
            type: string,
            definition: (node: NodeInstance) => EditPaneDefinition,
            filter?: ((node: NodeInstance) => boolean) | undefined,
        ): void;
        prepareConfigNodeSelect(
            node: NodeInstance,
            property: string,
            type: string,
            prefix: string,
            filter?: ((node: NodeInstance) => boolean) | undefined,
            env?: object,
        ): void;
    }

    interface CodeEditorOptions {
        element?: JQuery | undefined;
        id?: string | undefined;
        mode?: string | undefined;
        foldStyle?: string | undefined;
        options?: object | undefined;
        readOnly?: boolean | undefined;
        value?: string | undefined;
        globals?: object | undefined;
        stateId?: string | false | undefined;
        focus?: boolean | undefined;
        cursor?: {
            row?: number | undefined;
            lineNumber?: number | undefined;
            column?: number | undefined;
            col?: number | undefined;
        } | undefined;
        expandable?: boolean | undefined;
    }

    interface CodeEditor {
        type: "ace" | "basic" | "monaco" | string;
        focus(): void;
        getValue(): string;
        setValue(value: string, cursorPosition?: number): void;
        setMode(mode: string, options?: object, resetMode?: boolean): void;
        getCursorPosition(): { row: number; column: number };
        gotoLine(row: number, column?: number): void;
        setTheme(theme: string): void;
        setFontSize(size: number): void;
        on(name: string, callback: (...args: any[]) => void): void;
        getView(): unknown;
        saveView(): unknown;
        restoreView(state?: unknown): void;
        destroy?(): void;
        [key: string]: unknown;
    }

    interface CodeEditorImplementation {
        readonly type: "ace" | "basic" | "monaco" | string;
        readonly initialised: boolean;
        init(): boolean;
        create(options: CodeEditorOptions): CodeEditor;
    }

    interface CodeEditorManager {
        readonly settings: { lib: string; options: object };
        readonly editor: CodeEditorImplementation | null;
        ace: CodeEditorImplementation;
        basic: CodeEditorImplementation;
        monaco: CodeEditorImplementation;
        init(): void;
        create(options: CodeEditorOptions): CodeEditor;
    }

    interface IconPicker {
        show(
            container: JQuery,
            backgroundColor: string,
            iconPath: object,
            faOnly: boolean,
            done: (result: string) => void,
        ): void;
    }

    interface EnvVarList {
        readonly DEFAULT_ENV_TYPE_LIST: readonly string[];
        readonly DEFAULT_ENV_TYPE_LIST_INC_CRED: readonly string[];
        create(container: JQuery, node: object): void;
        setLocale(locale: string): void;
        lookupLabel(labels: Record<string, string>, defaultLabel: string, locale: string): string;
    }

    interface Mermaid {
        render(selector?: string | JQuery, root?: JQuery): Promise<unknown[]>;
        setTheme(isDark: boolean): void;
    }

    interface EditPaneDefinition {
        label: string;
        name: string;
        iconClass?: string | undefined;
        create(container: JQuery): void;
        resize?(size: { width: number; height: number }): void;
        close?(): void;
        apply?(editState: object): void;
    }

    interface TypeEditorDefinition {
        show(options: any): void;
        buildToolbar?: (container: JQuery, editor: CodeEditor) => void;
        postInit?: ((editor: CodeEditor, options: CodeEditorOptions) => void) | undefined;
    }

    interface TypeEditorShowOptions {
        title?: string;
        parent?: JQuery;
        onclose?: () => void;
    }

    interface JavaScriptTypeEditorShowOptions extends TypeEditorShowOptions {
        value: any;
        width: number | "Infinite";
        stateId: string;
        mode: string;
        focus: boolean;
        cancel: () => void;
        complete: (value: any, cursor?: any) => void;
        extraLibs: any[];
    }

    interface ExpressionTypeEditorShowOptions extends TypeEditorShowOptions {
        value: string;
        stateId: string;
        focus: boolean;
        complete: (value: any) => void;
    }

    interface JSONTypeEditorShowOptions extends TypeEditorShowOptions {
        value: string;
        stateId?: string;
        focus?: boolean;
        complete?: (value: any) => void;
        title?: string;
        requireValid?: boolean;
        readOnly?: boolean;
        toolbarButtons?: TrayButton[];
    }

    interface MarkdownTypeEditorShowOptions extends TypeEditorShowOptions {
        value: string;
        width?: number | "Infinite";
        stateId: string;
        focus?: boolean;
        cancel?: () => void;
        complete?: (value: string, cursor?: any) => void;
        title?: string;
        header?: JQuery;
    }

    interface TextTypeEditorShowOptions extends TypeEditorShowOptions {
        mode: string;
        value: string;
        stateId: string;
        width: number | "Infinite";
        focus: boolean;
        complete?: (value: string, cursor?: any) => void;
    }

    interface BufferTypeEditorShowOptions extends TypeEditorShowOptions {
        value: any;
        stateId: string;
        focus: boolean;
        complete: (value: any) => void;
    }

    interface EventLog {
        init(): void;
        log(id: any, payload: object): void;
        startEvent(name: string): void;
    }

    interface Group {
        def: object;
        init(): void;
        createGroup(nodes: object[]): object;
        ungroup(g: object): object[];
        addToGroup(group: object, nodes: object | object[]): void;
        removeFromGroup(group: object, nodes: object | object[], reparent?: boolean): void;
        getNodes(group: object, recursive?: boolean, includeGroups?: boolean): object[];
        contains(group: object, item: object): boolean;
        markDirty(group: object): void;
    }

    interface Keyboard {
        init(): void;
        add(
            scope: string,
            key: string,
            modifiers: object | string | ((event?: KeyboardEvent) => void),
            ondown?: string | ((event?: KeyboardEvent) => void),
        ): void;
        remove(key: string, modifiers?: object): void;
        getShortcut(actionName: string): KeyboardShortcut | undefined;
        getUserShortcut(actionName: string): string | undefined;
        revertToDefault(actionName: string): void;
        formatKey(key: string, plain?: boolean): string;
        validateKey(key: string): boolean;
        disable(): void;
        enable(): void;
        handle(event: KeyboardEvent): void;
    }

    interface KeyboardShortcut {
        scope: string;
        key: string;
        user?: boolean | undefined;
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
        export(): void;
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

    type NotificationType = "warning" | "compact" | "success" | "error";

    interface Notifications {
        hide?: boolean | undefined;
        init(): void;
        notify(
            msg: string | JQuery,
            options: {
                type?: NotificationType | undefined;
                fixed?: boolean | undefined;
                timeout?: number | undefined;
                id?: string | undefined;
                modal?: boolean | undefined;
                width?: number | undefined;
                buttons?:
                    | Array<{
                        id?: string | undefined;
                        class?: string | undefined;
                        text: string;
                        click: (event: JQuery.Event) => void;
                    }>
                    | undefined;
            },
        ): HTMLDivElement;
        notify(msg: string | JQuery, type?: NotificationType, fixed?: boolean, timeout?: number): HTMLDivElement;
        shade(state: boolean): void;
    }

    interface PaletteEditor {
        init(): void;
        install(entry: object, container: object, done: (ret: Error | object) => void): void;
        getAvailableUpdates(): {
            count: number;
            core: { current: string; latest: string } | null;
            palette: object[];
        };
    }

    interface Palette {
        editor: PaletteEditor;
        init(): void;
        add(nt: string, def: object): void;
        remove(nt: string): void;
        hide(nt: string): void;
        show(nt: string): void;
        refresh(): void;
        getCategories(): Array<{ id: string; label: string }>;
        registerCategory(category: string, description: string): void;
    }

    interface Search {
        init(): void;
        show(v: string): void;
        hide(): void;
        search(val: string): object[];
        getSearchOptions(): object;
    }

    interface SidebarConfig {
        init(): void;
        /**
         * @param param - filterUnused or id
         */
        show(param: boolean | string): void;
        refresh(): void;
    }

    interface SidebarContext {
        init(): void;
    }

    interface SidebarHelp {
        init(): void;
        show(type?: string): void;
        set(html: string, title?: string): void;
    }

    interface SidebarInfoOutliner {
        init(): void;
        search(val: string): void;
        select(node?: object): void;
        reveal(node: object): void;
    }

    interface SidebarInfo {
        outliner: SidebarInfoOutliner;
        init(): void;
        show(): void;
        refresh(node?: object | object[]): void;
        clear(): void;
        set(html: string, title?: string): void;
    }

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
        init(): void;
        addTab(options: {
            enableOnEdit?: boolean | undefined;
            toolbar?: HTMLElement | undefined;
            content?: HTMLElement | undefined;
            id: string;
            name: string;
            label?: string;
            iconClass?: string | undefined;
            visible?: boolean | undefined;
            action?: string;
            target?: "primary" | "secondary" | undefined;
            onremove?: (() => void) | undefined;
        }): void;
        addTab(title: string, content: HTMLElement, closeable?: boolean, visible?: boolean): void;
        removeTab(id: string): void;
        show(id: string): void;
        containsTab(id: string): boolean;
        toggleSidebar(sidebar: object, state: boolean): void;
    }

    interface StatusBar {
        init(): void;
        add(options: { id: string; element: JQuery; align?: "left" | "right" | undefined }): void;
        hide(id: string): void;
        show(id: string): void;
    }

    interface Subflow {
        init(): void;
        createSubflow(): void;
        convertToSubflow(): void;
        removeSubflow(
            id: string,
            keepInstanceNodes?: boolean,
        ): { nodes: object[]; links: object[]; groups: object[]; junctions: object[]; subflows: object[] };
        delete(id?: string): void;
        refresh(markChange?: boolean): { instances: object[] } | undefined;
        removeInput(): { subflowInputs: object[]; links: object[] };
        removeOutput(removeSubflowOutputs?: object[]): { subflowOutputs: object[]; links: object[] };
        removeStatus(): { links: object[] };

        buildEditForm(type: string, node: object): void;
        exportSubflowTemplateEnv(list: JQuery, all?: boolean): object[] | null;
        exportSubflowInstanceEnv(node: object): object[];
    }

    interface Tray {
        init(): void;
        show(options?: TrayShowOptions): void;
        hide(): void;
        resize(): void;
        close(done?: () => void): void;
    }

    interface TrayShowOptions {
        buttons?: TrayButton[];

        close?: () => void;
        open?: (tray: any, done?: () => void) => void;
        resize?: (options: TrayResizeOptions) => void;
        show?: () => void;

        title?: string;

        maximized?: boolean;
        width?: number;

        overlay?: boolean;

        focusElement?: any;
    }

    interface TrayResizeOptions {
        width: number;
        height?: number;
    }

    interface TrayButton {
        class?: string;
        click?: (event: any) => void;
        id?: string;
        text?: string;
    }

    interface TypeSearch {
        show(opts: object): void;
        refresh(opts: object): void;
        hide(fast?: boolean): void;
        isVisible(): boolean;
    }

    interface UserSettings {
        init(): void;
        toggle(id: string): void;
        show(initialTab?: string): void;
        add(options: object): void;
    }

    interface Utils {
        createObjectElement(obj: any, options?: object): JQuery;
        getMessageProperty(msg: object, expr: string | string[]): any;
        setMessageProperty(msg: object, prop: string, value: any, createMissing?: boolean): null | undefined;
        normalisePropertyExpression(str: string, msg?: registry.NodeMessage): Array<string | number>;
        validatePropertyExpression(str: string): boolean;
        separateIconPath(icon?: string): {
            module: string;
            file: string;
        };
        getDefaultNodeIcon<TProps extends NodeProperties>(
            def: NodeDef<TProps>,
            node?: NodeInstance<TProps>,
        ): {
            module: string;
            file: string;
        };
        getNodeIcon<TProps extends NodeProperties>(def: NodeDef<TProps>, node?: NodeInstance<TProps>): string;
        getNodeLabel(node: NodeInstance, defaultLabel?: string): string;
        getNodeColor(type: string, def: NodeDef<NodeProperties>): string;
        getPaletteLabel(nodeType: string, def: NodeDef<NodeProperties>): string;
        clearNodeColorCache(): void;
        addSpinnerOverlay(container: JQuery, contain?: boolean): JQuery;
        decodeObject(payload: string, format: string): any;
        parseContextKey(key: string): { store?: string | undefined; key: string };
        /**
         * Create or update an icon element and append it to iconContainer.
         * @param iconUrl - Url of icon.
         * @param iconContainer - Icon container element with red-ui-palette-icon-container class.
         * @param isLarge - Whether the icon size is large.
         */
        createIconElement(iconUrl: string, iconContainer: JQuery, isLarge?: boolean): void;
        sanitize(m: string): string;
        truncateString(value: string, length?: number): string;
        renderMarkdown(txt: string): string;
        createNodeIcon(node: NodeInstance, includeLabel?: boolean): JQuery;
        getDarkerColor(c: string): string;
        parseModuleList(moduleList?: string[]): Array<{
            module: RegExp;
            version?: string | undefined;
            wildcardPos: number;
        }>;
        checkModuleAllowed(
            moduleName: string,
            version: string,
            allowList?: Array<{ module: RegExp; version?: string | undefined; wildcardPos: number }>,
            denyList?: Array<{ module: RegExp; version?: string | undefined; wildcardPos: number }>,
        ): boolean;
        getBrowserInfo(): {
            ua?: string | undefined;
            browser?: string | undefined;
            os?: string | undefined;
            touch?: boolean | undefined;
            mobile?: string | number | undefined;
            tablet?: boolean | undefined;
            ie?: boolean | undefined;
            android?: boolean | undefined;
        };
        validateTypedProperty(value: unknown, type: string, options?: ValidationOptions): boolean | string;
        renderInfoText(text: string, target: JQuery, options?: { collapseSections?: boolean | undefined }): void;
    }

    interface ViewNavigator {
        init(): void;
        refresh(): void;
        resize(): void;
        toggle(): void;
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
        calculateGridSnapOffsets(
            node: { x: number; y: number; w: number },
            options?: { align?: "nearest" | "left" | "right" | undefined },
        ): { x: number; y: number };
        isPointInNode(
            node: { type: string; x: number; y: number; w?: number | undefined; h?: number | undefined },
            point: [number, number],
            marginX?: number,
            marginY?: number,
        ): boolean;
    }

    interface ViewAnnotations {
        init(): void;
        register(id: string, options: ViewAnnotationOptions): void;
        unregister(id: string): void;
    }

    interface ViewAnnotationOptions {
        type: "badge";
        align?: "left" | "right" | undefined;
        class?: string | undefined;
        element(node: NodeInstance): SVGElement;
        show?: boolean | string | ((node: NodeInstance) => boolean) | undefined;
        refresh?: string | ((node: NodeInstance) => boolean) | undefined;
        filter?: ((node: NodeInstance) => boolean) | undefined;
        tooltip?: string | ((node: NodeInstance) => string) | undefined;
        popover?: {
            content(node: NodeInstance, popover: PopoverInstance): string | JQuery | HTMLElement;
            direction?: "right" | "left" | "bottom" | "top" | undefined;
            maxWidth?: number | undefined;
            width?: number | string | undefined;
            delay?: { show: number; hide: number } | undefined;
        } | undefined;
    }

    interface ZoomGestureState {
        active: boolean;
        initialFocalPoint: [number, number] | null;
        initialScale: number;
        currentScale: number;
        lastDistance: number;
        scrollPosAtStart: [number, number] | null;
        scaleFatorAtStart: number;
    }

    interface ViewZoomAnimator {
        easeOut(progress: number): number;
        easeToValuesRAF<T extends Record<string, number>>(options: {
            fromValues: T;
            toValues: T;
            onStep(values: T): void;
            duration?: number | undefined;
            interpolateValue?: ((from: number, to: number, progress: number) => number) | undefined;
            onStart?: (() => void) | undefined;
            onEnd?: (() => void) | undefined;
            onCancel?: (() => void) | undefined;
        }): () => void;
        calculateZoomDelta(currentScale: number, delta: number, isTrackpad: boolean): number;
        gestureState: ZoomGestureState;
        startGesture(
            focalPoint: [number, number] | null,
            scale: number,
            scrollPosition?: [number, number],
            currentScaleFactor?: number,
        ): ZoomGestureState;
        updateGesture(newScale: number): { scale: number; focalPoint: [number, number] | null; active: boolean } | null;
        endGesture(): void;
        isGestureActive(): boolean;
        getGestureFocalPoint(
            currentScrollPosition?: [number, number],
            currentScaleFactor?: number,
        ): [number, number] | null;
    }

    interface ViewZoomConstants {
        MIN_ZOOM: number;
        MAX_ZOOM: number;
        ZOOM_STEP: number;
        DEFAULT_ZOOM_DURATION: number;
        PINCH_THRESHOLD: number;
        FRICTION: number;
        BOUNCE_DAMPING: number;
    }

    interface ViewImportOptions {
        addFlow?: boolean | undefined;
        touchImport?: boolean | undefined;
        generateIds?: boolean | undefined;
        generateDefaultNames?: boolean | undefined;
        notify?: boolean | undefined;
        applyNodeDefaults?: boolean | undefined;
        eventContext?: unknown;
    }

    interface ViewImportResult {
        nodeMap: Record<string, NodeInstance>;
    }

    interface ViewSelection {
        nodes?: object[] | undefined;
        links?: object[] | undefined;
        link?: object | undefined;
    }

    interface View {
        navigator: ViewNavigator;
        tools: ViewTools;
        annotations: ViewAnnotations;
        zoomAnimator: ViewZoomAnimator;
        zoomConstants: ViewZoomConstants;
        init(): void;
        state(): number;
        state(state: number): void;

        updateActive(): void;
        redraw(updateActive?: boolean, syncRedraw?: boolean): void;
        focus(): void;
        /**
         * Imports a new collection of nodes from a JSON String.
         *  - all get new IDs assigned
         *  - all "selected"
         *  - attached to mouse for placing - "IMPORT_DRAGGING"
         */
        importNodes(newNodes: string | object | object[], options?: ViewImportOptions): ViewImportResult | undefined;
        calculateTextWidth(str: string, className: string): number;
        select(selection?: string | ViewSelection): void;
        selection(): ViewSelection;
        clearSelection(): void;
        createNode(
            type: string,
            x?: number,
            y?: number,
            z?: string,
        ): { node: NodeInstance; historyEvent: HistoryEvent };

        readonly node_width: number;
        readonly node_height: number;
        readonly snapGrid: boolean;
        scale(): number;
        getLinksAtPoint(x: number, y: number): SVGElement[];
        getGroupAtPoint(x: number, y: number): object | null;
        getActiveGroup(): null;
        reveal(id: string, triggerHighlight?: boolean): void;
        gridSize(): number;
        gridSize(v: number): void;
        getActiveNodes(): object[];
        getSubflowPorts(): object[];
        selectNodes(options: {
            selected?: string[] | undefined;
            single?: boolean | undefined;
            prompt?: string | JQuery | undefined;
            onselect?: ((nodes: object[]) => void) | undefined;
            oncancel?: (() => void) | undefined;
        }): void;
        scroll(): [number, number];
        scroll(x: number, y: number): void;
        clickNodeButton(n: object): void;
        clipboard(): unknown;
        redrawStatus(node: object): void;
        showQuickAddDialog(options?: object): void;
        calculateNodeDimensions(node: object): [number, number];
        getElementPosition(element: Element): [number, number];
        showTooltip(
            x: number,
            y: number,
            content: string,
            direction?: "right" | "left" | "bottom" | "top",
        ): { remove(): void };
        dimensions(): { width: number; height: number };
        setSuggestedFlow(suggestion: object | null): void;
        applySuggestedFlow(): ViewImportResult | undefined;
    }

    interface Workspaces {
        init(): void;
        add(ws?: object | false, skipHistoryEntry?: boolean, targetIndex?: number): object;
        remove(ws?: object): void;
        delete(ws: object): void;
        order(order: string[]): void;
        edit(id?: string): void;
        contains(id: string): boolean;
        count(): number;
        active(): string | undefined;
        isLocked(id?: string): boolean | undefined;
        selection(): object[];
        hide(id?: string): void;
        show(id: string, skipStack?: boolean | null, unhideOnly?: boolean | null, flash?: boolean): void;
        isHidden(id: string): boolean;
        refresh(): void;
        resize(): void;
        enable(id?: string): void;
        disable(id?: string): void;
        lock(id?: string): void;
        unlock(id?: string): void;
    }

    interface ProjectsSettings {
        init(utils: object): void;
        show(initialTab?: string): void;
        switchProject(name: string): void;
    }

    interface ProjectsUserSettings {
        init(utils: object): void;
    }

    interface Projects {
        settings: ProjectsSettings;
        userSettings: ProjectsUserSettings;
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
        getActiveProject(): object | undefined;
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

    interface MenuItemOption {
        id?: string | undefined;
        setting?: string | undefined;
        selected?: boolean | undefined;
        group?: boolean | undefined;
        icon?: string | undefined;
        label?: string | undefined;
        sublabel?: string | undefined;
        onselect?: string | ((...args: any[]) => void) | undefined;
        toggle?: boolean | undefined;
        href?: string | undefined;
        options?: Array<MenuItemOption | null> | undefined;
        disabled?: boolean | undefined;
    }

    interface Menu {
        init(options: { id?: string | undefined; options: Array<MenuItemOption | null> }): JQuery<HTMLUListElement>;
        setSelected(id: string, state: boolean): void;
        isSelected(id: string): boolean;
        toggleSelected(id: string): void;
        setDisabled(id: string, state: boolean): void;
        setVisible(id: string, state: boolean): void;
        addItem(id: string, opt: MenuItemOption | null): void;
        removeItem(id: string): void;
        setAction(id: string, action: string | ((...args: any[]) => void)): void;
        refreshShortcuts(): void;
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

    interface PopoverInstance {
        setContent(content: string): PopoverInstance;
        open(instant?: boolean): PopoverInstance;
        close(instant?: boolean): PopoverInstance;
        move(options: object): void;
    }

    interface Popover {
        create(options: {
            target: JQuery;
            direction?: "right" | "left" | "bottom" | "top" | "inset" | undefined;
            trigger?: "hover" | "click" | "modal" | "manual" | undefined;
            interactive?: boolean | undefined;
            tooltip?: boolean | undefined;
            content:
                | string
                | JQuery
                | HTMLElement
                | ((
                    this: PopoverInstance,
                    res: PopoverInstance,
                ) => string | JQuery | HTMLElement | null | Promise<string | JQuery | HTMLElement | null>);
            delay?: { show: number; hide: number } | undefined;
            autoClose?: boolean | undefined;
            width?: number | string | undefined;
            maxWidth?: number | string | undefined;
            size?: string | undefined;
            offset?: number | undefined;
            class?: string | undefined;
            closeOnOutsideClick?: boolean | undefined;
        }): PopoverInstance;
        tooltip(
            target: JQuery,
            content: string | (() => string),
            action?: string,
            interactive?: boolean,
        ): PopoverInstance;
        menu(options: {
            style?: "compact" | undefined;
            disposeOnClose?: boolean | undefined;
            onclose?: ((v: boolean) => void) | undefined;
            options?:
                | Array<{
                    onselect?: (() => void) | undefined;
                }>
                | undefined;
        }): {
            show(opts: {
                target: JQuery;
                align?: "right" | "left" | undefined;
                offset?: [number, number] | undefined;
                dispose?: boolean | undefined;
            }): void;
            hide(cancelled?: boolean): void;
        };
        panel(content: JQuery): {
            container: JQuery;
            show(options: {
                onclose: () => void;
                target: JQuery;
                align?: "right" | "left" | undefined;
                offset?: [number, number] | undefined;
                dispose?: boolean | undefined;
            }): void;
            hide(dispose?: boolean): void;
        };
        dialog(options: {
            title?: string | undefined;
            content: string;
            closeButton?: boolean | undefined;
            buttons?:
                | Array<{
                    text: string;
                    class?: string | undefined;
                    click?: (() => void) | undefined;
                }>
                | undefined;
        }): { close(): void };
    }

    interface StackInstanceEntry {
        collapsible?: boolean | undefined;
        expanded?: boolean | undefined;
        onexpand?: (() => void) | undefined;
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

    interface TabsInstance {
        addTab(
            tab: {
                id: string;
                icon?: string | undefined;
                iconClass?: string | undefined;
                label: string;
                pinned?: boolean | undefined;
                closeable?: boolean | undefined;
            },
            targetIndex: number,
        ): void;
        removeTab(id: string): void;
        activateTab(link: string | JQuery): void;
        firstTab(): void;
        lastTab(): void;
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
        selection(): object[];
        clearSelection(): void;
        order(order: string[]): void;
        container: JQuery;
    }

    interface Tabs {
        create(options: {
            element?: JQuery | undefined;
            vertical?: boolean | undefined;
            addButton?: string | (() => void) | undefined;
            addButtonCaption?: string | undefined;
            searchButton?: string | (() => void) | undefined;
            searchButtonCaption?: string | undefined;
            scrollable?: boolean | undefined;
            collapsible?: boolean | undefined;
            menu?: boolean | undefined;
            order?: string[] | undefined;
            onselect?: ((selection: object[]) => void) | undefined;
            onclick?: ((item: string) => void) | undefined;
            ondblclick?: ((item: string) => void) | undefined;
            onchange?: ((item: string) => void) | undefined;
            onadd?: ((item: object) => void) | undefined;
            minimumActiveTabWidth?: number | undefined;
            onremove?: ((item: object) => void) | undefined;
        }): TabsInstance;
    }

    interface Runtime {
        init(): void;
        readonly started: boolean;
    }

    interface Multiplayer {
        init(): void;
    }

    interface Diagnostics {
        init(): void;
    }

    interface EnvVar {
        init(): void;
    }

    interface ContextMenu {
        show(options: {
            type?: string | undefined;
            x?: number | undefined;
            y?: number | undefined;
            options?: MenuItemOption[] | undefined;
            [key: string]: unknown;
        }): void;
        hide(): void;
        active(): boolean;
    }

    interface Tour {
        id: string;
        label: string;
        path: string;
    }

    interface TourGuide {
        load(path: string, done: (error: Error | null, tour?: object) => void): void;
        run(path: string, done?: ((error?: Error) => void) | undefined): void;
        list(): Tour[];
        reset(): void;
    }

    interface Loader {
        init(): JQuery;
        start(text?: string, percent?: number): void;
        reportProgress(text: string, percent: number): void;
        end(): void;
    }

    interface RED {
        init(options: object): void;
        loader: Loader;

        // root
        comms: Comms;
        events: Events;
        history: History;
        hooks: Hooks;
        i18n: I18n;
        multiplayer: Multiplayer;
        nodes: Nodes;
        runtime: Runtime;
        settings: SettingsWithData;
        user: User;
        validators: Validators;
        plugins: Plugins;

        // assigned in i18n.js (on init)
        _: I18nTFunction;

        // text
        text: Text;

        // ui
        actionList: ActionList;
        actions: Actions;
        clipboard: Clipboard;
        contextMenu: ContextMenu;
        deploy: Deploy;
        diagnostics: Diagnostics;
        diff: Diff;
        editor: Editor;
        envVar: EnvVar;
        eventLog: EventLog;
        group: Group;
        keyboard: Keyboard;
        library: Library;
        notifications: Notifications;
        palette: Palette;
        projects: Projects;
        search: Search;
        sidebar: Sidebar;
        state: {
            readonly DEFAULT: number;
            readonly MOVING: number;
            readonly JOINING: number;
            readonly MOVING_ACTIVE: number;
            readonly ADDING: number;
            readonly EDITING: number;
            readonly EXPORT: number;
            readonly IMPORT: number;
            readonly IMPORT_DRAGGING: number;
            readonly QUICK_JOINING: number;
            readonly PANNING: number;
            readonly SELECTING_NODE: number;
            readonly GROUP_DRAGGING: number;
            readonly GROUP_RESIZE: number;
        };
        statusBar: StatusBar;
        subflow: Subflow;
        tray: Tray;
        tourGuide: TourGuide;
        typeSearch: TypeSearch;
        userSettings: UserSettings;
        utils: Utils;
        view: View;
        workspaces: Workspaces;

        // assigned in ui/notifications.js
        /*
        If RED.notifications.hide is set to true, all notifications will be hidden.
        This is to help with UI testing in certain cases and not intended for the
        end-user.

        // Example usage for a modal dialog with buttons
        var myNotification = RED.notify("This is the message to display",{
            modal: true,
            fixed: true,
            type: 'warning', // 'compact', 'success', 'warning', 'error'
            buttons: [
                {
                    text: "cancel",
                    click: function(e) {
                        myNotification.close();
                    }
                },
                {
                    text: "okay",
                    class:"primary",
                    click: function(e) {
                        myNotification.close();
                    }
                }
            ]
        });
        */
        notify: Notifications["notify"];

        // ui > common
        colorPicker: ColorPicker;
        menu: Menu;
        panels: Panels;
        popover: Popover;
        stack: Stack;
        tabs: Tabs;
    }

    /**
     * Widgets
     */

    interface WidgetEditableListOptions<T> {
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
         * If the list is sortable, this option allows items to be dragged from this list to any other jQuery sortable list, such as another editableList.
         */
        connectWith?: JQuery.Selector | undefined;
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
         * A callback function that gets called to filter what items are visible in the list.
         *
         * @param data - the data object for the row
         *
         * The function should return true/false (boolean) to indicate whether the item should be visible.
         */
        filter?: ((data: T) => boolean) | undefined;
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
    }

    interface WidgetEditableList extends JQuery {
        /**
         * Inits EditableList
         * A replacement for a <ol> element where the items can be complex elements in their own right. Used by the core Switch and Change nodes.
         *
         * More info: https://nodered.org/docs/api/ui/editableList/
         */
        <T>(opts: WidgetEditableListOptions<T>): this; // eslint-disable-line @definitelytyped/no-unnecessary-generics
        /**
         * Adds an item to the end of the list.         *
         * @param value - An object that will be associated with the item in the list.
         */
        (action: "addItem", value: object): void;
        /**
         * Adds items contained in an array to the end of the list.
         * @param value - An array of objects that will be associated with the item in the list.
         */
        (action: "addItems", value: object[]): void;
        /**
         * Removes an item from the list.
         * @param value - The object that identifies the item to be removed.
         */
        (action: "removeItem", value: object): void; // tslint:disable-line:unified-signatures
        /**
         * Sets the width of the editableList. This must be used in place of the standard jQuery.width() function as it ensures the component resizes properly.
         */
        (action: "width", value: string | number): void;
        /**
         * Sets the height of the editableList. This must be used in place of the standard jQuery.height() function as it ensures the component resizes properly.
         */
        (action: "height", value: string | number): void; // tslint:disable-line:unified-signatures
        /**
         * Gets an Array of all list items. Each item is the jQuery DOM element for the item.
         * Each element stores the original data for the item under property called data.
         */
        (action: "items"): JQuery;
        /**
         * Clears the list of all items. This does not trigger any callbacks.
         */
        (action: "empty"): void;
        /**
         * Filters the list to show/hide items based on the active filter function and returns the number of visible items.
         * If filter is not provided, the list is filtered using the current active filter function.
         * If filter is null, the filter is removed.
         */
        (action: "filter", value?: (data: object) => boolean): number;
        /**
         * Scrolls the list to ensure the specific item is in view.
         * @param value - An object associated with the item in the list.
         */
        (action: "show", value: object): void; // tslint:disable-line:unified-signatures
        /**
         * Get item at index. Returns item dat or undefined.
         * @param value - Item index: 0..length-1
         */
        (action: "getItemAt", value: number): object | undefined;
        /**
         * Get index of item. Returns index or -1 if not found
         * @param value - Item data
         */
        (action: "indexOf", value: object): number;
        /**
         * Sorts the list using the active sort function.
         *
         * @param value - A callback function that gets called to compare two items in the list to determine their order.
         *
         * If the function returns a value less than 0, itemDataA comes before itemDataB.
         * If the function returns 0, the items are left unchanged.
         * If the function returns a value greater than 0, itemDataA comes after itemDataB.
         */
        (action: "sort", value: (itemDataA: object, itemDataB: object) => number): void;
        /**
         * Gets the number of list items.
         */
        (action: "length"): number;
    }

    interface WidgetTypedInputOptions {
        /** If defined, sets the default type of the input if typeField is not set. */
        default?: WidgetTypedInputType | string | undefined;
        /** Sets the list of types the element will offer. */
        types: Array<WidgetTypedInputType | WidgetTypedInputTypeDefinition>;
        /**
         * In some circumstances it is desirable to already have an <input> element to store the type value of the typedInput.
         * This option allows such an existing element to be provided. As the type of the typedInput is changed, the value
         * of the provided input will also change.
         */
        typeField?: JQuery.Selector | JQuery | undefined;
    }

    type WidgetTypedInputType =
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
        | "env";

    interface WidgetTypedInputTypeDefinition {
        /** The identifier for the type */
        value: string;
        /** A label to display in the type menu */
        label?: string | undefined;
        /** An icon to display in the type menu */
        icon?: string | undefined;
        /** If the type has a fixed set of values, this is an array of string options for the value. For example, ["true","false"] for the boolean type. */
        options?: string[] | Array<{ value: string; label: string }> | undefined;
        /** Set to false if there is no value associated with the type. */
        hasValue?: boolean | undefined;
        /** A function to validate the value for the type. */
        validate?: ((v: string) => boolean) | RegExp | undefined;
    }

    interface WidgetTypedInput extends JQuery {
        /**
         * Inits TypedInput
         * A replacement for a regular <input> that allows the type of the value to be
         * chosen, including options for string, number and boolean types.
         * More info: https://nodered.org/docs/api/ui/typedInput/
         */
        (opts: WidgetTypedInputOptions): this;
        (action: "hide"): void;
        (action: "show"): void; // tslint:disable-line:unified-signatures
        /**
         * Gets the selected type of the typedInput.
         */
        (action: "type"): WidgetTypedInputType | string;
        /**
         * Sets the selected type of the typedInput.
         */
        (action: "type", value: WidgetTypedInputType | string): void;
        /**
         * Sets the list of types offered by the typedInput.
         */
        (action: "types", value: Array<WidgetTypedInputType | WidgetTypedInputTypeDefinition>): void;
        /**
         * Triggers a revalidation of the typedInput’s type/value. This occurs automatically
         * whenever the type or value change, but this method allows it to be run manually.
         */
        (action: "validate"): boolean;
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

declare global {
    interface JQuery<TElement = HTMLElement> {
        editableList: editorClient.WidgetEditableList;
        typedInput: editorClient.WidgetTypedInput;
    }
}
