// Declare the workflow module to be able to used it in typescript
// this file must be defined in the include in tsconfig.json

export default class Drawflow {
    constructor(element: HTMLElement, render?: object, parent?: object);

    /**
     * @default {}
     */
    events: Record<string, { listeners: Array<(args: any) => void> }>;

    /**
     * @required
     */
    container: HTMLElement;

    /**
     * @default 1
     */
    nodeId: number;

    /**
     * @default null
     */
    ele_selected: HTMLElement | null;

    /**
     * @default null
     */
    node_selected: HTMLElement | null;

    /**
     * Drag nodes on click inputs
     * @default false
     */
    drag: boolean;

    /**
     * @param eventName
     * @param detail
     */
    dispatch: (eventName: string, detail: any) => void;

    /**
     * Active reroute
     * @default false
     */
    reroute: boolean;

    /**
     * Fix adding points
     * @default false
     */
    reroute_fix_curvature: boolean;

    /**
     * Curvature
     * @default 0.5
     */
    curvature: number;

    /**
     * Curvature reroute first point and last point
     * @default 0.5
     */
    reroute_curvature_start_end: number;

    /**
     * Curvature reroute
     * @default 0.5
     */
    reroute_curvature: number;

    /**
     * Width of reroute
     * @default 6
     */
    reroute_width: number;

    /**
     * flag for drawflow drag point
     */
    drag_point: boolean;

    /**
     * flag for drawflow editor canvas selected
     */
    editor_selected: boolean;

    /**
     * flag for drawflow connnection line
     */
    connection: boolean;

    /**
     * connection element
     */
    connection_ele: HTMLElement | null;

    /**
     *  selected connection
     */
    connection_selected: HTMLElement | null;

    /**
     * Width of line
     * @default 5
     */
    line_path: number;

    /**
     * first clicked element
     */
    first_click: HTMLElement | null;

    /**
     * Force the first input to drop the connection on top of the node
     * @default false
     */
    force_first_input: boolean;

    /**
     * edit or fixed mode
     * @default edit
     */
    editor_mode: DrawFlowEditorMode;

    /**
     * Default zoom
     * @default 1
     */
    zoom: number;

    /**
     * Default zoom max
     * @default 1.6
     */
    zoom_max: number;

    /**
     * Default zoom min
     * @default 0.5
     */
    zoom_min: number;

    /**
     * Default zoom value update
     * @default 0.1
     */
    zoom_value: number;

    /**
     * Default zoom last value
     * @default 1
     */
    zoom_last_value: number;

    /**
     * Drag nodes on click inputs
     * @default true
     */
    draggable_inputs: boolean;

    /**
     * Canvas origin x coordinate
     */
    canvas_x: number;

    /**
     * Canvas origin x coordinate
     */
    canvas_y: number;

    /**
     * focused x coordinate
     */
    pos_x: number;

    /**
     * original x coordinate
     */
    pos_x_start: number;

    /**
     * focused x coordinate
     */
    pos_y: number;

    /**
     * original x coordinate
     */
    pos_y_start: number;

    /**
     * mouse x coordinate
     */
    mouse_x: number;
    /**
     * mouse y coordinate
     */
    mouse_y: number;

    /**
     * mobile event cache list
     */
    evCache: any[];

    /**
     * the diff between previous handlers and current
     */
    prevDiff: number;

    /**
     * Graph data object
     */
    drawflow: DrawflowExport;

    /**
     * Nodes should use uuid instead of id
     * @default false
     */
    useuuid: boolean;

    /**
     * The drawflow "canvas" element
     */
    precanvas: HTMLElement;

    /**
     * The drawflow parent element
     */
    parent: object;

    /**
     * registered nodes for reuse.
     */
    noderegister: object;

    /**
     * user defined renderer, for example vue
     */
    render: object;

    /**
     * module name
     */
    module: string;

    start(): void;

    load(): any;

    import(data: any): void;

    export(): DrawflowExport;

    getUuid(): string;

    /**
     * @param name Name of module
     * @param inputs Number of inputs
     * @param outputs Number of outputs
     * @param posx Position on start node left
     * @param posy Position on start node top
     * @param className Added classname to de node
     * @param data Data passed to node
     * @param html HTML drawn on node or name of register node.
     * @param typenode Default false, true for Object HTML, vue for vue
     */
    addNode(
        name: string,
        inputs: number,
        outputs: number,
        posx: number,
        posy: number,
        className: string,
        data: any,
        html: string,
        typenode: boolean | string,
    ): number | string;

    /**
     *  Increment zoom +0.1
     */
    zoom_in(): void;

    /**
     *  Decrement zoom -0.1
     */
    zoom_out(): void;

    /**
     *  Restores zoom to 1
     */
    zoom_reset(): void;

    /**
     * Redraws according to new zoom
     */
    zoom_refresh(): void;

    /**
     * Get Info of node. Ex: id: 5
     * @param id
     */
    getNodeFromId(id: string | number): DrawflowNode;

    /**
     *  Return Array of nodes id. Ex: name: telegram
     *  @param name
     */
    getNodesFromName(name: string): number[];

    /**
     * Remove node. Ex id: node-x
     * @param id
     */
    removeNodeId(id: string | number): void;

    /**
     * Update data element. Ex: 5, { name: 'Drawflow' }
     * @param id
     * @param data
     */
    updateNodeDataFromId(id: string | number, data: any): void;

    /**
     * Add input to node. Ex id: 5
     * @param id
     */
    addNodeInput(id: string | number): void;

    /**
     * Add output to node. Ex id: 5
     * @param id
     */
    addNodeOutput(id: string | number): void;

    /**
     * Remove input to node. Ex id: 5, input_2
     * @param id
     * @param input_class
     */
    removeNodeInput(id: string | number, input_class: string): void;

    /**
     * Remove output to node. Ex id: 5, output_2
     * @param id
     * @param output_class
     */
    removeNodeOutput(id: string | number, output_class: string): void;

    /**
     * Add connection. Ex: 15,16,'output_1','input_1'
     * @param outputNodeId
     * @param inputNodeId
     * @param outputName
     * @param inputName
     */
    addConnection(
        outputNodeId: string | number,
        inputNodeId: string | number,
        outputName: string,
        inputName: string,
    ): void;

    /**
     * Remove connection. Ex: 15,16,'output_1','input_1'
     * @param id_output
     * @param id_input
     * @param output_class
     * @param input_class
     */
    removeSingleConnection(
        id_output: string | number,
        id_input: string | number,
        output_class: string,
        input_class: string,
    ): void;

    /**
     * Update connections position from Node Ex id: node-x
     * @param id
     */
    updateConnectionNodes(id: string | number): void;

    /**
     * Remove node connections. Ex id: node-x
     * @param id
     */
    removeConnectionNodeId(id: string | number): void;

    /**
     * Get name of module where is the id. Ex id: 5
     * @param id
     */
    getModuleFromNodeId(id: string | number): string;

    /**
     * Clear data of module selected
     */
    clearModuleSelected(): void;

    /**
     * Clear all data of all modules and modules remove.
     */
    clear(): void;

    addModule(moduleName: string): void;

    removeModule(moduleName: string): void;

    changeModule(moduleName: string): void;

    /**
     * @param name Name of module registered.
     * @param component HTML to drawn or vue component.
     * @param props Only for vue. Props of component. Not Required
     * @param options Only for vue. Options of component. Not Required
     */
    registerNode(name: string, component: any, props: any, options: any): void;

    /**
     * @param eventName
     * @param callback (event: id of Node)
     */
    /* tslint:disable:unified-signatures */
    on(eventName: "nodeCreated", callback: (event: number) => void): void;
    /**
     * @param eventName
     * @param callback (event: id of Node)
     */
    on(eventName: "nodeRemoved", callback: (event: number) => void): void;
    /**
     * @param eventName
     * @param callback (event: id of Node df-* attributes changed.)
     */
    on(eventName: "nodeDataChanged", callback: (event: number) => void): void;
    /**
     * @param eventName
     * @param callback (event: id of Node)
     */
    on(eventName: "nodeSelected", callback: (event: number) => void): void;
    /**
     * @param eventName
     * @param callback (event: true)
     */
    on(eventName: "nodeUnselected", callback: (event: boolean) => void): void;
    /**
     * @param eventName
     * @param callback
     */
    on(eventName: "nodeMoved", callback: (event: any) => void): void;
    /**
     * Called when starting to create a connection
     * @param eventName
     * @param callback
     */
    on(eventName: "connectionStart", callback: (event: ConnectionStartEvent) => void): void;
    /**
     * Called when the connection creation was canceled
     * @param eventName
     * @param callback (event: true)
     */
    on(eventName: "connectionCancel", callback: (event: boolean) => void): void;
    /**
     * @param eventName
     * @param callback (event: id's of nodes and output/input selected)
     */
    on(eventName: "connectionCreated", callback: (event: ConnectionEvent) => void): void;
    /**
     * @param eventName
     * @param callback (event: id's of nodes and output/input selected)
     */
    on(eventName: "connectionRemoved", callback: (event: ConnectionEvent) => void): void;
    /**
     * @param eventName
     * @param callback (event: id's of nodes and output/input selected)
     */
    on(eventName: "connectionSelected", callback: (event: ConnectionEvent) => void): void;
    /**
     * @param eventName
     * @param callback (event: true)
     */
    on(eventName: "connectionUnselected", callback: (event: boolean) => void): void;
    /**
     * @param eventName
     * @param callback (event: id of Node output)
     */
    on(eventName: "addReroute", callback: (event: number) => void): void;
    /**
     * @param eventName
     * @param callback (event: id of Node output)
     */
    on(eventName: "removeReroute", callback: (event: number) => void): void;
    /**
     * @param eventName
     * @param callback (event: name of Module)
     */
    on(eventName: "moduleCreated", callback: (event: string) => void): void;
    /**
     * @param eventName
     * @param callback (event: name of Module)
     */
    on(eventName: "moduleChanged", callback: (event: string) => void): void;
    /**
     * @param eventName
     * @param callback (event: name of Module)
     */
    on(eventName: "moduleRemoved", callback: (event: string) => void): void;
    /**
     * @param eventName
     * @param callback (event: mouse event)
     */
    on(eventName: "click", callback: (event: MouseEvent) => void): void;
    /**
     * Once the click changes have been made
     * @param eventName
     * @param callback
     */
    on(eventName: "clickEnd", callback: (event: any) => void): void;
    /**
     * Click second button mouse event
     * @param eventName
     * @param callback
     */
    on(eventName: "contextmenu", callback: (event: any) => void): void;
    /**
     * @param eventName
     * @param callback (event: position)
     */
    on(eventName: "mouseMove", callback: (event: MousePositionEvent) => void): void;
    /**
     * @param eventName
     * @param callback (event: keyboard event)
     */
    on(eventName: "keydown", callback: (event: KeyboardEvent) => void): void;
    /**
     * @param eventName
     * @param callback (event: Level of zoom)
     */
    on(eventName: "zoom", callback: (event: any) => void): void;
    /**
     * @param eventName
     * @param callback (event: position)
     */
    on(eventName: "translate", callback: (event: MousePositionEvent) => void): void;
    /**
     * Finish import
     * @param eventName
     * @param callback
     */
    on(eventName: "import", callback: (event: any) => void): void;
    /**
     * Data export
     * @param eventName
     * @param callback
     */
    on(eventName: "export", callback: (event: any) => void): void;
    /* tslint:enable:unified-signatures */
}

export interface ConnectionEvent {
    /**
     * outputNodeId
     */
    output_id: string;

    /**
     * inputNodeId
     */
    input_id: string;

    /**
     * name of the output
     */
    output_class: string;

    /**
     * name of the input
     */
    input_class: string;
}

export interface ConnectionStartEvent {
    /**
     * outputNodeId
     */
    output_id: string;

    /**
     * name of the output
     */
    output_class: string;
}

export interface MousePositionEvent {
    x: number;
    y: number;
}

export interface DrawflowExport {
    drawflow: {
        Home: DrawflowModuleData; // always present
        [customModuleName: string]: DrawflowModuleData;
    };
}

export interface DrawflowModuleData {
    data: {
        [nodeKey: string]: DrawflowNode;
    };
}

export interface DrawflowNode {
    class: string;
    data: any;
    html: string;
    id: number;
    inputs: Record<string, DrawflowConnection>;
    name: string;
    outputs: Record<string, DrawflowConnection>;
    pos_x: number;
    pos_y: number;
    typenode: boolean;
}

export interface DrawflowConnection {
    connections: DrawflowConnectionDetail[];
}

export interface DrawflowConnectionDetail {
    input: string;
    node: string;
}

export type DrawFlowEditorMode = "edit" | "fixed" | "view";
