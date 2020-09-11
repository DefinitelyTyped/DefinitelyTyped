// Type definitions for @node-red/editor-client 1.1
// Project: https://github.com/node-red/node-red/tree/master/packages/node_modules/%40node-red/editor-client, https://nodered.org/
// Definitions by: Alex Kaul <https://github.com/alexk111>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

/// <reference lib="dom" />
/// <reference types="ace" />
/// <reference types="jquery" />

import { LocalSettings as RuntimeLocalSettings } from '@node-red/runtime';
import { I18nTFunction } from '@node-red/util';

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
        value: TVal | '';
        /** Whether the property is required. If set to true, the property will be invalid if its value is null or an empty string. */
        required?: boolean;
        /** A function that can be used to validate the value of the property. */
        validate?: (this: NodeInstance<TInstProps>, val: string) => boolean;
        /** If this property is a pointer to a configuration node, this identifies the type of the node. */
        type?: string;
    }

    /**
     * Properties definitions (`defaults` object)
     * Read more: https://nodered.org/docs/creating-nodes/properties
     */
    type NodePropertiesDef<TProps extends NodeProperties, TInstProps extends TProps = TProps> = {
        [K in keyof TProps]: NodePropertyDef<TProps[K], TInstProps>;
    };

    /**
     * Node properties
     * Read more: https://nodered.org/docs/creating-nodes/properties
     */
    interface NodeProperties {
        name?: string;
        /** If a node wants to allow the number of outputs it provides to be configurable then outputs may be included. */
        outputs?: number;

        /** Reserved name for properties that MUST NOT BE USED. */
        changed?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        dirty?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        icon?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        id?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        info?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        inputLabels?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        inputs?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        outputLabels?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        ports?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        selected?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        type?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        valid?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        validationErrors?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        wires?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        a?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        b?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        c?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        d?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        e?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        f?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        g?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        h?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        i?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        j?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        k?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        l?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        m?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        n?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        o?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        p?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        q?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        r?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        s?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        t?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        u?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        v?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        w?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        x?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        y?: never;
        /** Reserved name for properties that MUST NOT BE USED. */
        z?: never;
    }

    type NodeInstance<TProps extends NodeProperties = NodeProperties> = TProps & {
        _: I18nTFunction;
    };

    type NodeCredentials<T> = {
        [K in keyof T]: NodeCredential;
    };

    interface NodeCredential {
        type: 'text' | 'password';
    }

    /**
     * Node Definition
     * Read more: https://nodered.org/docs/creating-nodes/node-html#node-definition
     */
    interface NodeDef<TProps extends NodeProperties, TCreds = undefined, TInstProps extends TProps = TProps> {
        /** The palette category the node appears in. */
        category: 'config' | string;
        /**
         * The editable properties for the node.
         * Read more: https://nodered.org/docs/creating-nodes/properties
         */
        defaults: NodePropertiesDef<TProps, TInstProps>;
        /**
         * The credential properties for the node.
         * Read more: https://nodered.org/docs/creating-nodes/credentials
         */
        credentials?: NodeCredentials<TCreds>;
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
        paletteLabel?: string | ((this: NodeInstance<TInstProps>) => string);
        /**
         * The label to use in the workspace.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#node-label
         */
        label?: string | ((this: NodeInstance<TInstProps>) => string);
        /**
         * The style to apply to the label.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#label-style
         */
        labelStyle?:
            | 'node_label'
            | 'node_label_italic'
            | string
            | ((this: NodeInstance<TInstProps>) => 'node_label' | 'node_label_italic' | string);
        /**
         * Optional label to add on hover to the input port of a node.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#port-labels
         */
        inputLabels?: string | ((this: NodeInstance<TInstProps>) => string);
        /**
         * Optional labels to add on hover to the output ports of a node.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#port-labels
         */
        outputLabels?: string | string[] | ((this: NodeInstance<TInstProps>, idx: number) => string | undefined);
        /**
         * The icon to use.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#icon
         */
        icon?: string;
        /**
         * The alignment of the icon and label.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#alignment
         */
        align?: 'left' | 'right';
        /**
         * Adds a button to the edge of the node.
         * Read more: https://nodered.org/docs/creating-nodes/appearance#buttons
         */
        button?: {
            /** Called when the button is clicked */
            onclick: (this: NodeInstance<TInstProps>) => void;
            /** Function to dynamically enable and disable the button based on the node’s current configuration. */
            enabled?: (this: NodeInstance<TInstProps>) => boolean;
            /** Function to determine whether the button should be shown at all. */
            visible?: (this: NodeInstance<TInstProps>) => boolean;
        };
        /**
         * Called when the edit dialog is being built.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditprepare?: (this: NodeInstance<TInstProps>) => void;
        /**
         * Called when the edit dialog is okayed.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditsave?: (this: NodeInstance<TInstProps>) => void;
        /**
         * Called when the edit dialog is cancelled.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditcancel?: (this: NodeInstance<TInstProps>) => void;
        /**
         * Called when the delete button in a configuration node’s edit dialog is pressed.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditdelete?: (this: NodeInstance<TInstProps>) => void;
        /**
         * Called when the edit dialog is resized.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        oneditresize?: (this: NodeInstance<TInstProps>, size: { width: number; height: number }) => void;
        /**
         * Called when the node type is added to the palette.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        onpaletteadd?: (this: NodeInstance<TInstProps>) => void;
        /**
         * Called when the node type is removed from the palette.
         * Read more: https://nodered.org/docs/creating-nodes/properties#custom-edit-behaviour
         */
        onpaletteremove?: (this: NodeInstance<TInstProps>) => void;
    }

    interface CommSubscriber {
        (topic: string, data: any): void;
    }
    interface Comms {
        connect(): void;
        subscribe(topic: string, callback: CommSubscriber): void;
        unsubscribe(topic: string, callback: CommSubscriber): void;
    }

    interface Events {
        on(evt: string, func: (...args: any[]) => void): void;
        off(evt: string, func: (...args: any[]) => void): void;
        emit(evt: string, ...args: any[]): void;
    }

    type HistoryEvent = {
        dirty?: boolean;
        callback?: (ev: HistoryEvent) => void;
    } & (
        | {
              t: 'multi';
              events: HistoryEvent[];
          }
        | {
              t: 'replace';
              config: object;
              changed: object;
              rev: string;
          }
        | {
              t: 'add';
              nodes?: object[];
              links?: object[];
              groups?: object[];
              workspaces?: object[];
              subflows?: object[];
              subflow?: object;
              removedLinks?: object[];
          }
        | {
              t: 'delete';
              workspaces?: object[];
              subflows?: object[];
              subflowInputs?: object[];
              subflowOutputs?: object[];
              subflow?: object;
              groups?: object[];
              nodes?: object[];
              links?: object[];
              createdLinks?: object[];
              changes?: object[];
          }
        | {
              t: 'move';
              nodes: object[];
              links?: object[];
              removedLinks?: object[];
              addToGroup?: object;
              removeFromGroup?: object;
          }
        | {
              t: 'edit';
              node: object;
              changes: object[];
              links?: object[];
              createdLinks?: object[];
          }
        | {
              t: 'createSubflow';
              nodes?: object[];
              links?: object[];
              subflow: object;
              removedLinks?: object[];
          }
        | {
              t: 'deleteSubflow';
              subflow?: object;
              subflows?: object[];
              movedNodes?: object[];
              links?: object[];
              createdLinks?: object[];
          }
        | {
              t: 'reorder';
              order?: object;
          }
        | {
              t: 'createGroup';
              groups?: object[];
          }
        | {
              t: 'ungroup';
              groups?: object[];
          }
        | {
              t: 'addToGroup';
              nodes?: object[];
          }
        | {
              t: 'removeFromGroup';
              nodes?: object[];
          }
    );
    interface History {
        markAllDirty(): void;
        list(): HistoryEvent[];
        listRedo(): HistoryEvent[];
        depth(): number;
        push(ev: HistoryEvent): void;
        pop(): void;
        peek(): HistoryEvent;
        clear(): void;
        redo(): void;
    }

    // tslint:disable-next-line:interface-name
    interface I18n {
        lang(): string;
    }

    interface NodesFontAwesome {
        getIconUnicode(name: string): string;
        getIconList(): string[];
    }

    interface NodesRegistry {
        setModulePendingUpdated(module: string, version: string): void;
        getModule(module: string): object;
        getNodeSetForType(nodeType: string): object;
        getModuleList(): object;
        getNodeList(): object[];
        getNodeTypes(): string[];
        setNodeList(list: object[]): void;
        addNodeSet(ns: object): void;
        removeNodeSet<T extends object>(ns: T): T;
        getNodeSet(id: string): object;
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
        registerNodeType<TProps extends NodeProperties, TCreds = undefined, TInstProps extends TProps = TProps>(
            nt: string,
            def: NodeDef<TProps, TCreds, TInstProps>, // tslint:disable-line:no-unnecessary-generics
        ): void;
        removeNodeType(nt: string): void;
        getNodeType(nt: string): NodeDef<NodeProperties>;
        setIconSets(sets: Record<string, string[]>): void;
        getIconSets(): Record<string, string[]>;
    }
    interface Nodes {
        fontAwesome: NodesFontAwesome;
        registry: NodesRegistry;
        setNodeList: NodesRegistry['setNodeList'];
        getNodeList: NodesRegistry['getNodeList'];
        removeNodeSet: NodesRegistry['removeNodeSet'];
        enableNodeSet: NodesRegistry['enableNodeSet'];
        disableNodeSet: NodesRegistry['disableNodeSet'];
        setIconSets: NodesRegistry['setIconSets'];
        getIconSets: NodesRegistry['getIconSets'];

        /**
         * Registers a node with the editor.     *
         * @param nt The node type is used throughout the editor to identify the node. It must
         * match the value used by the call to RED.nodes.registerType in the corresponding runtime
         * script.
         * @param def The node definition contains all of the information about the node
         * needed by the editor.
         */
        registerType: NodesRegistry['registerNodeType'];
        getType: NodesRegistry['getNodeType'];
        /**
         * Converts a node to an exportable JSON Object
         */
        convertNode(n: object, exportCreds: boolean): object;

        add(n: object): void;
        remove(id: string): { links: object[]; nodes: object[] };
        clear(): void;

        moveNodeToTab(node: object, z: string): void;

        addLink(l: object): void;
        removeLink(l: object): void;

        addWorkspace(ws: object, targetIndex?: number): void;
        removeWorkspace(id: string): { nodes: object[]; links: object[]; groups: object[] };
        getWorkspaceOrder(): object[];
        setWorkspaceOrder(): void;
        workspace(): object;

        addSubflow(sf: object, createNewIds?: boolean): void;
        removeSubflow(sf: object): void;
        subflow(id: string): object;
        subflowContains(sfid: string, nodeid: string): boolean;

        addGroup(group: object): void;
        removeGroup(group: object): void;

        group(id: string): object;
        groups(z: string): object;

        eachNode(cb: (n: object) => boolean): void;
        eachLink(cb: (l: object) => boolean): void;
        eachConfig(cb: (conf: object) => boolean): void;
        eachSubflow(cb: (subf: object) => boolean): void;
        eachWorkspace(cb: (w: object) => boolean): void;

        /**
         * @param id Node id
         * @returns node or config node, or null if no nodes with such id
         */
        node(id: string): object | null;

        version(): string;
        version(version: string): void;

        originalFlow(): object;
        originalFlow(flow: object): void;

        filterNodes(filter: object): object[];
        filterLinks(filter: object): object[];

        /**
         * @returns [new_nodes,new_links,new_groups,new_workspaces,new_subflows,missingWorkspace]
         */
        import(
            newNodesObj: string | object | object[],
            createNewIds?: boolean,
            createMissingWorkspace?: boolean,
        ): [object[], object[], object[], object[], object[], object];

        getAllFlowNodes(node: object): object[];
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
        set(key: string, value: unknown): void;
        get<T>(key: string, defaultIfUndefined: T): T;

        remove(key: string): void;
        theme<T>(property: string, defaultValue: T): T;
    }

    interface SettingsWithData extends Settings, RuntimeLocalSettings {}

    interface User {
        init(): void;
        login(done: () => void): void;
        login(opts: { cancelable?: boolean; updateMenu?: boolean }, done: () => void): void;
        logout(): void;
        hasPermission(permission: string | object): boolean;
    }

    interface Validators {
        number(blankAllowed?: boolean): (v: any) => boolean;
        regex(re: RegExp): (v: any) => boolean;
        typedInput(ptypeName: string, isConfig?: boolean): (v: any) => boolean;
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
        getHtml(text: string, type: string, args: { dir?: string } | null, isRtl: boolean, locale: string): string;

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
            type: 'filepath' | 'url' | 'email',
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
        add(name: string, handler: () => void): void;
        remove(name: string): void;
        get(name: string): () => void;
        invoke(name: string, args: any): void;
        list(): Array<{ id: string; scope?: string; key?: string; user?: boolean }>;
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
        init(options?: { type?: 'default' | 'simple'; label?: string; icon?: string }): void;
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
        init(): void;
        edit(node: object): void;
        /**
         *
         * @param name - name of the property that holds this config node
         * @param type - type of config node
         * @param id - id of config node to edit. _ADD_ for a new one
         * @param prefix - the input prefix of the parent property
         */
        editConfig(name: string, type: string, id: string, prefix: string): void;
        editSubflow(subflow: object): void;
        editGroup(group: object): void;
        editJavaScript(options: object): void;
        editExpression(options: object): void;
        editJSON(options: object): void;
        editMarkdown(options: object): void;
        editText(options: {
            value?: string;
            complete: (value: string, cursor: { row: number; column: number }) => void;
            title?: string;
            width: string;
            mode?: string;
            cursor?: { row: number; column: number };
            onclose?: () => void;
        }): void;
        editBuffer(options: object): void;
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
        showTypeEditor(type: string, options: object): void;

        /**
         * Register a type editor.
         * @param type - the type name
         * @param definition - the editor definition
         */
        registerTypeEditor(type: string, definition: object): void;

        /**
         * Create a editor ui component
         * @param options - the editor options
         */
        createEditor(options: {
            element?: JQuery;
            id?: string;
            mode?: string;
            foldStyle?: string;
            options?: object;
            readOnly?: boolean;
            value?: string;
            globals?: object;
        }): AceAjax.Editor;
    }

    interface EventLog {
        init(): void;
        show(): void;
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
        getNodes(group: object, recursive: boolean): object[];
        contains(group: object, item: object): boolean;
        markDirty(group: object): void;
    }

    interface Keyboard {
        init(): void;
        add(scope: string, key: string, modifiers: object, ondown: string | (() => void)): void;
        remove(key: string, modifiers?: object): void;
        getShortcut(actionName: string): object;
        revertToDefault(actionName: string): void;
        formatKey(key: string, plain?: boolean): string;
        validateKey(key: string): boolean;
    }

    interface Library {
        init(): void;
        create(options: {
            elementPrefix?: string;
            editor:
                | AceAjax.Editor
                | {
                      // Orion Editor
                      setText: () => void;
                      getText: () => void;
                  };
            type: string;
            url: string;
            mode?: string;
            ext?: string;
            fields: string[];
        }): void;
        createBrowser(options: {
            container: JQuery;
            onselect?: (item: object) => void;
            onconfirm?: (item: object) => void;
            folderTools?: boolean;
        }): {
            select(item: object): void;
            getSelected(): object;
            focus(): void;
            data(content: object[], selectFirst?: boolean): void;
        };
        loadLibraryFolder(library: string, type: string, root: string, done: (items: object[]) => void): void;
    }

    type NotificationType = 'warning' | 'compact' | 'success' | 'warning' | 'error';

    interface Notifications {
        init(): void;
        notify(
            msg: string | JQuery,
            options: {
                type?: NotificationType;
                fixed?: boolean;
                timeout?: number;
                id?: string;
                modal?: boolean;
                width?: number;
                buttons?: Array<{
                    id?: string;
                    class?: string;
                    text: string;
                    click: (event: JQuery.Event) => void;
                }>;
            },
        ): HTMLDivElement;
        notify(msg: string | JQuery, type?: NotificationType, fixed?: boolean, timeout?: number): HTMLDivElement;
    }

    interface PaletteEditor {
        init(): void;
        install(entry: object, container: object, done: (ret: Error | object) => void): void;
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
    }

    interface Search {
        init(): void;
        show(v: string): void;
        hide(): void;
        search(val: string): object[];
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
        build(): void;
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
            enableOnEdit?: boolean;
            toolbar?: HTMLElement;
            id: string;
            name: string;
            iconClass?: string;
            visible?: boolean;
        }): void;
        removeTab(id: string): void;
        show(id: string): void;
        containsTab(id: string): boolean;
        toggleSidebar(state: boolean): void;
    }

    interface StatusBar {
        init(): void;
        add(options: { id: string; element: JQuery; align?: 'left' | 'right' }): void;
    }

    interface Subflow {
        init(): void;
        createSubflow(): void;
        convertToSubflow(): void;
        removeSubflow(id: string): { nodes: object[]; links: object[]; subflows: object[] };
        refresh(markChange?: boolean): { instances: object[] } | undefined;
        removeInput(): { subflowInputs: object[]; links: object[] };
        removeOutput(removeSubflowOutputs?: object[]): { subflowOutputs: object[]; links: object[] };
        removeStatus(): { links: object[] };

        buildEditForm(type: string, node: object): void;
        buildPropertiesForm(node: object): void;

        exportSubflowTemplateEnv(list: JQuery, all?: boolean): object[] | null;
        exportSubflowInstanceEnv(node: object): object[];
    }

    interface Tray {
        init(): void;
        show(options?: object): void;
        hide(): void;
        resize(): void;
        close(done?: () => void): void;
    }

    interface TypeSearch {
        show(opts: object): void;
        refresh(opts: object): void;
        hide(fast?: boolean): void;
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
        normalisePropertyExpression(str: string): Array<string | number>;
        validatePropertyExpression(str: string): boolean;
        separateIconPath(
            icon?: string,
        ): {
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
        clearNodeColorCache(): void;
        addSpinnerOverlay(container: JQuery, contain?: boolean): JQuery;
        decodeObject(payload: string, format: string): any;
        parseContextKey(key: string): { store?: string; key: string };
        /**
         * Create or update an icon element and append it to iconContainer.
         * @param iconUrl - Url of icon.
         * @param iconContainer - Icon container element with red-ui-palette-icon-container class.
         * @param isLarge - Whether the icon size is large.
         */
        createIconElement(iconUrl: string, iconContainer: JQuery, isLarge?: boolean): void;
        sanitize(m: string): string;
        renderMarkdown(txt: string): string;
        createNodeIcon(node: NodeInstance): JQuery;
        getDarkerColor(c: string): string;
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
    }

    interface View {
        navigator: ViewNavigator;
        tools: ViewTools;
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
        importNodes(newNodesStr: string, addNewFlow?: boolean, touchImport?: boolean): void;
        calculateTextWidth(str: string, className: string): number;
        select(selection?: string | object): void;
        selection(): {
            nodes: object[];
            link?: object;
        };

        scale(): number;
        getLinksAtPoint(x: number, y: number): object[];
        getGroupAtPoint(x: number, y: number): object | null;
        getActiveGroup(): object;
        reveal(id: string, triggerHighlight?: boolean): void;
        gridSize(): number;
        gridSize(v: number): void;
        getActiveNodes(): object[];
        selectNodes(options: object): void;
        scroll(x: number, y: number): void;
        clickNodeButton(n: object): void;
    }

    interface Workspaces {
        init(): void;
        add(ws: object | false, skipHistoryEntry: boolean, targetIndex: number): object;
        remove(ws: object): void;
        order(order: string[]): void;
        edit(id: string): void;
        contains(id: string): boolean;
        count(): number;
        active(): object;
        selection(): object[];
        show(id: string): void;
        refresh(): void;
        resize(): void;
        enable(id: string): void;
        disable(id: string): void;
    }

    interface TouchRadialMenu {
        show(obj: HTMLElement, pos: number[], options: object): void;
        active(): boolean;
    }

    interface Touch {
        radialMenu: TouchRadialMenu;
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

    interface ColorPicker {
        create(options: {
            value: string;
            id: string;
            palette?: [];
            cellWidth?: number;
            cellHeight?: number;
            cellMargin?: number;
            cellPerRow?: number;
            opacity?: number;
        }): JQuery<HTMLDivElement>;
    }

    interface MenuItemOption {
        id?: string;
        setting?: string;
        selected?: boolean;
        group?: boolean;
        icon?: string;
        label?: string;
        sublabel?: string;
        onselect?: string | ((...args: any[]) => void);
        toggle?: boolean;
        href?: string;
        options?: Array<MenuItemOption | null>;
        disabled?: boolean;
    }

    interface Menu {
        init(options: { id?: string; options: Array<MenuItemOption | null> }): JQuery<HTMLUListElement>;
        setSelected(id: string, state: boolean): void;
        isSelected(id: string): boolean;
        toggleSelected(id: string): void;
        setDisabled(id: string, state: boolean): void;
        addItem(id: string, opt: MenuItemOption | null): void;
        removeItem(id: string): void;
        setAction(id: string, action: string | ((...args: any[]) => void)): void;
    }

    interface PanelsInstance {
        ratio(): number;
        ratio(ration: number): void;
        resize(size: number): void;
    }

    interface Panels {
        create(options: {
            id: string;
            container?: JQuery;
            dir?: 'vertical';
            resize?: (size1: number, size2: number) => void;
        }): PanelsInstance;
    }

    interface PopoverInstance {
        setContent(content: string): PopoverInstance;
        open(instant?: boolean): PopoverInstance;
        close(instant?: boolean): PopoverInstance;
    }

    interface Popover {
        create(options: {
            target: JQuery;
            direction?: 'right' | 'left' | 'bottom' | 'top';
            trigger?: 'hover' | 'click' | 'modal';
            interactive?: boolean;
            tooltip?: boolean;
            content: string | ((res: PopoverInstance) => void);
            delay?: { show: number; hide: number };
            autoClose?: boolean;
            width?: string;
            size?: string;
        }): PopoverInstance;
        tooltip(target: JQuery, content: string, action?: string): PopoverInstance;
        menu(options: {
            style?: 'compact';
            disposeOnClose?: boolean;
            onclose?: (v: boolean) => void;
            options?: Array<{
                onselect?: () => void;
            }>;
        }): {
            show(opts: {
                target: JQuery;
                align?: 'right' | 'left';
                offset?: [number, number];
                dispose?: boolean;
            }): void;
            hide(cancelled?: boolean): void;
        };
        panel(
            content: JQuery,
        ): {
            container: JQuery;
            show(options: {
                onclose: () => void;
                target: JQuery;
                align?: 'right' | 'left';
                offset?: [number, number];
                dispose?: boolean;
            }): void;
            hide(dispose?: boolean): void;
        };
    }

    interface StackInstanceEntry {
        collapsible?: boolean;
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
        add(entry: { collapsible?: boolean; title: string }): StackInstanceEntry;
        hide(): StackInstance;
        show(): StackInstance;
        resize(): void;
    }
    interface Stack {
        create(options: { container: JQuery; fill?: boolean; singleExpanded?: boolean }): StackInstance;
    }

    interface TabsInstance {
        addTab(
            tab: {
                id: string;
                icon?: string;
                iconClass?: string;
                label: string;
                pinned?: boolean;
                closeable?: boolean;
            },
            targetIndex: number,
        ): void;
        removeTab(id: string): void;
        activateTab(link: string | JQuery): void;
        nextTab(): void;
        previousTab(): void;
        resize(): void;
        count(): number;
        contains(id: string): boolean;
        renameTab(id: string, label: string): void;
        selection(): string[];
        order(order: string[]): void;
    }

    interface Tabs {
        create(options: {
            element?: JQuery;
            vertical?: boolean;
            addButton?: string | (() => void);
            addButtonCaption?: string;
            searchButton?: string | (() => void);
            searchButtonCaption?: string;
            scrollable?: boolean;
            collapsible?: boolean;
            menu?: boolean;
            onselect?: (selection: string[]) => void;
            onclick?: (item: string) => void;
            ondblclick?: (item: string) => void;
            onchange?: (item: string) => void;
            minimumActiveTabWidth?: number;
            onremove?: (item: object) => void;
        }): TabsInstance;
    }

    interface RED {
        // root
        comms: Comms;
        events: Events;
        history: History;
        i18n: I18n;
        nodes: Nodes;
        settings: SettingsWithData;
        user: User;
        validators: Validators;

        // assigned in i18n.js (on init)
        _: I18nTFunction;

        // text
        text: Text;

        // ui
        actionList: ActionList;
        actions: Actions;
        clipboard: Clipboard;
        deploy: Deploy;
        diff: Diff;
        editor: Editor;
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
        touch: Touch;
        tray: Tray;
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
        notify: Notifications['notify'];

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

    // tslint:disable-next-line:no-unnecessary-generics
    interface WidgetEditableListOptions<T> {
        /**
         * Determines whether a button is shown below the list that, when clicked, will add a new entry to the list.
         * If not specified, or set to true (boolean) a button is shown with the text ‘Add’.
         * If set to false (boolean), the button is not shown.
         * If set to a non-blank string, a button is shown using its value as the text of the button.
         */
        addButtons?: boolean | string;
        /**
         * A callback function that gets called when a new item is being added to the list.
         * If it was triggered by clicking the ‘add button’, data will be {}. Otherwise it will be the data passed to the call to the addItem method.
         *
         * @param row - the jQuery DOM element to which any row content should be added
         * @param index - the index of the row
         * @param data - the data object for the row
         */
        addItem?: (row: JQuery, index: number, data: T) => void;
        /**
         * If the list is sortable, this option allows items to be dragged from this list to any other jQuery sortable list, such as another editableList.
         */
        connectWith?: JQuery.Selector;
        /**
         * Inserts the DOM/JQuery object as a header for the list.
         */
        header?: HTMLElement | JQuery;
        /**
         * Sets the height of the list including, if enabled, its add button. Setting height
         * to ‘auto’ removes the vertical scrollbar and displays the list at the full height
         * needed to contain the contents.
         */
        height?: number | 'auto';
        /**
         * A callback function that gets called to filter what items are visible in the list.
         *
         * @param data - the data object for the row
         *
         * The function should return true/false (boolean) to indicate whether the item should be visible.
         */
        filter?: (data: T) => boolean;
        /**
         * A function that gets called when the size of the list changes.
         */
        resize?: () => void;
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
        resizeItem?: (row: JQuery, index: number) => void;
        /**
         * Determines whether the list should automatically scroll to the bottom whenever a new item is added.
         * If not specified, or set to true (boolean) the list will scroll to show newly added items.
         * If set to false (boolean), the list will not scroll
         */
        scrollOnAdd?: boolean;
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
        sort?: (itemDataA: T, itemDataB: T) => number;
        /**
         * Determines whether the list items can be dragged to sort them.
         * If set to true (boolean), a default drag handle is displayed alongside the item.
         * If set to a CSS Selector, that is used to identify the element that should be used as the drag handle within the item’s content element.
         */
        sortable?: boolean | JQuery.Selector;
        /**
         * A function that is called after an item in the list is moved.
         *
         * @param items - an Array of the jQuery DOM elements for each row, in order.
         * Each row element stores the original data for the item under property called data.
         */
        sortItems?: (items: JQuery[]) => void;
        /**
         * If set to true, each row is displayed with a delete button on the right-hand side.
         * Clicking the button will remove the row from the list and trigger the removeItem callback, if set.
         */
        removable?: boolean;
        /**
         * A function that is called when an item is removed from the list.
         *
         * @param data - the original data item for the item
         * The remove can be triggered by either clicking an item’s remove button, or calling the remoteItem method.
         */
        removeItem?: (data: T) => void;
    }

    interface WidgetEditableList extends JQuery {
        /**
         * Inits EditableList
         * A replacement for a <ol> element where the items can be complex elements in their own right. Used by the core Switch and Change nodes.
         *
         * More info: https://nodered.org/docs/api/ui/editableList/
         */
        <T>(opts: WidgetEditableListOptions<T>): this; // tslint:disable-line:no-unnecessary-generics
        /**
         * Adds an item to the end of the list.         *
         * @param value - An object that will be associated with the item in the list.
         */
        (action: 'addItem', value: object): void;
        /**
         * Adds items contained in an array to the end of the list.
         * @param value - An array of objects that will be associated with the item in the list.
         */
        (action: 'addItems', value: object[]): void;
        /**
         * Removes an item from the list.
         * @param value - The object that identifies the item to be removed.
         */
        (action: 'removeItem', value: object): void; // tslint:disable-line:unified-signatures
        /**
         * Sets the width of the editableList. This must be used in place of the standard jQuery.width() function as it ensures the component resizes properly.
         */
        (action: 'width', value: string | number): void;
        /**
         * Sets the height of the editableList. This must be used in place of the standard jQuery.height() function as it ensures the component resizes properly.
         */
        (action: 'height', value: string | number): void; // tslint:disable-line:unified-signatures
        /**
         * Gets an Array of all list items. Each item is the jQuery DOM element for the item.
         * Each element stores the original data for the item under property called data.
         */
        (action: 'items'): JQuery;
        /**
         * Clears the list of all items. This does not trigger any callbacks.
         */
        (action: 'empty'): void;
        /**
         * Filters the list to show/hide items based on the active filter function and returns the number of visible items.
         * If filter is not provided, the list is filtered using the current active filter function.
         * If filter is null, the filter is removed.
         */
        (action: 'filter', value?: (data: object) => boolean): number;
        /**
         * Scrolls the list to ensure the specific item is in view.
         * @param value - An object associated with the item in the list.
         */
        (action: 'show', value: object): void; // tslint:disable-line:unified-signatures
        /**
         * Get item at index. Returns item dat or undefined.
         * @param value - Item index: 0..length-1
         */
        (action: 'getItemAt', value: number): object | undefined;
        /**
         * Get index of item. Returns index or -1 if not found
         * @param value - Item data
         */
        (action: 'indexOf', value: object): number;
        /**
         * Sorts the list using the active sort function.
         *
         * @param value - A callback function that gets called to compare two items in the list to determine their order.
         *
         * If the function returns a value less than 0, itemDataA comes before itemDataB.
         * If the function returns 0, the items are left unchanged.
         * If the function returns a value greater than 0, itemDataA comes after itemDataB.
         */
        (action: 'sort', value: (itemDataA: object, itemDataB: object) => number): void;
        /**
         * Gets the number of list items.
         */
        (action: 'length'): number;
    }

    interface WidgetTypedInputOptions {
        /** If defined, sets the default type of the input if typeField is not set. */
        default?: WidgetTypedInputType | string;
        /** Sets the list of types the element will offer. */
        types: Array<WidgetTypedInputType | WidgetTypedInputTypeDefinition>;
        /**
         * In some circumstances it is desirable to already have an <input> element to store the type value of the typedInput.
         * This option allows such an existing element to be provided. As the type of the typedInput is changed, the value
         * of the provided input will also change.
         */
        typeField?: JQuery.Selector | JQuery;
    }

    type WidgetTypedInputType =
        | 'msg'
        | 'flow'
        | 'global'
        | 'str'
        | 'num'
        | 'bool'
        | 'json'
        | 'bin'
        | 're'
        | 'date'
        | 'jsonata'
        | 'env';

    interface WidgetTypedInputTypeDefinition {
        /** The identifier for the type */
        value: string;
        /** A label to display in the type menu */
        label?: string;
        /** An icon to display in the type menu */
        icon?: string;
        /** If the type has a fixed set of values, this is an array of string options for the value. For example, ["true","false"] for the boolean type. */
        options?: string[];
        /** Set to false if there is no value associated with the type. */
        hasValue?: boolean;
        /** A function to validate the value for the type. */
        validate?: ((v: string) => boolean) | RegExp;
    }

    interface WidgetTypedInput extends JQuery {
        /**
         * Inits TypedInput
         * A replacement for a regular <input> that allows the type of the value to be
         * chosen, including options for string, number and boolean types.
         * More info: https://nodered.org/docs/api/ui/typedInput/
         */
        (opts: WidgetTypedInputOptions): this;
        (action: 'hide'): void;
        (action: 'show'): void; // tslint:disable-line:unified-signatures
        /**
         * Gets the selected type of the typedInput.
         */
        (action: 'type'): WidgetTypedInputType | string;
        /**
         * Sets the selected type of the typedInput.
         */
        (action: 'type', value: WidgetTypedInputType | string): void;
        /**
         * Sets the list of types offered by the typedInput.
         */
        (action: 'types', value: Array<WidgetTypedInputType | WidgetTypedInputTypeDefinition>): void;
        /**
         * Triggers a revalidation of the typedInput’s type/value. This occurs automatically
         * whenever the type or value change, but this method allows it to be run manually.
         */
        (action: 'validate'): boolean;
        /**
         * Gets the value of the typedInput.
         */
        (action: 'value'): string;
        /**
         * Sets the value of the typedInput.
         */
        (action: 'value', value: string): void;
        /**
         * Sets the width of the typedInput. This must be used in place of the standard
         * ```jQuery.width()``` function as it ensures the component resizes properly.
         */
        (action: 'width', value: string | number): void;
    }
}

declare global {
    interface JQuery<TElement = HTMLElement> {
        editableList: editorClient.WidgetEditableList;
        typedInput: editorClient.WidgetTypedInput;
    }
}
