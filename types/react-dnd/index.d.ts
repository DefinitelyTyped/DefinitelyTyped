// Type definitions for React DnD v2.0.2
// Project: https://github.com/gaearon/react-dnd
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="react" />

declare module __ReactDnd {
    // Decorated React Components
    // ----------------------------------------------------------------------

    class ContextComponent<P, S> extends React.Component<P, S> {
        getDecoratedComponentInstance(): React.Component<P, S>;
        // Note: getManager is not yet documented on the React DnD docs.
        getManager(): any;
    }

    class DndComponent<P, S> extends React.Component<P, S> {
        getDecoratedComponentInstance(): React.Component<P, S>;
        getHandlerId(): Identifier;
    }

    interface ContextComponentClass<P> extends React.ComponentClass<P> {
        new(props?: P, context?: any): ContextComponent<P, any>;
        DecoratedComponent: React.ComponentClass<P>;
    }

    interface DndComponentClass<P> extends React.ComponentClass<P> {
        new(props?: P, context?: any): DndComponent<P, any>;
        DecoratedComponent: React.ComponentClass<P>;
    }

    // Top-level API
    // ----------------------------------------------------------------------

    export function DragSource<P>(
        type: Identifier | ((props: P) => Identifier),
        spec: DragSourceSpec<P>,
        collect: DragSourceCollector,
        options?: DndOptions<P>
    ): (componentClass: React.ComponentClass<P> | React.StatelessComponent<P>) => DndComponentClass<P>;

    export function DropTarget<P>(
        types: Identifier | Identifier[] | ((props: P) => Identifier | Identifier[]),
        spec: DropTargetSpec<P>,
        collect: DropTargetCollector,
        options?: DndOptions<P>
    ): (componentClass: React.ComponentClass<P> | React.StatelessComponent<P>) => DndComponentClass<P>;

    export function DragDropContext<P>(
        backend: Backend
    ): <P>(componentClass: React.ComponentClass<P> | React.StatelessComponent<P>) => ContextComponentClass<P>;

    interface DragDropContextProviderProps {
        backend: Backend,
        window?: Window,
    }

    export class DragDropContextProvider extends React.Component<DragDropContextProviderProps> {
    }

    export function DragLayer<P>(
        collect: DragLayerCollector,
        options?: DndOptions<P>
    ): (componentClass: React.ComponentClass<P> | React.StatelessComponent<P>) => DndComponentClass<P>;

    type DragSourceCollector = (connect: DragSourceConnector, monitor: DragSourceMonitor) => Object;
    type DropTargetCollector = (connect: DropTargetConnector, monitor: DropTargetMonitor) => Object;
    type DragLayerCollector = (monitor: DragLayerMonitor) => Object;

    // Shared
    // ----------------------------------------------------------------------

    // The React DnD docs say that this can also be the ES6 Symbol.
    type Identifier = string;

    interface ClientOffset {
        x: number;
        y: number;
    }

    interface DndOptions<P> {
        arePropsEqual?(props: P, otherProps: P): boolean;
    }

    // DragSource
    // ----------------------------------------------------------------------

    interface DragSourceSpec<P> {
        beginDrag(props: P, monitor?: DragSourceMonitor, component?: React.Component<P>): Object;
        endDrag?(props: P, monitor?: DragSourceMonitor, component?: React.Component<P>): void;
        canDrag?(props: P, monitor?: DragSourceMonitor): boolean;
        isDragging?(props: P, monitor?: DragSourceMonitor): boolean;
    }

    class DragSourceMonitor {
        canDrag(): boolean;
        isDragging(): boolean;
        getItemType(): Identifier;
        getItem(): Object;
        getDropResult(): Object;
        didDrop(): boolean;
        getInitialClientOffset(): ClientOffset;
        getInitialSourceClientOffset(): ClientOffset;
        getClientOffset(): ClientOffset;
        getDifferenceFromInitialOffset(): ClientOffset;
        getSourceClientOffset(): ClientOffset;
    }

    class DragSourceConnector {
        dragSource(): ConnectDragSource;
        dragPreview(): ConnectDragPreview;
    }

    interface DragElementWrapper<O> {
        <P>(elementOrNode: React.ReactElement<P>, options?: O): React.ReactElement<P>;
    }

    interface DragSourceOptions {
        dropEffect?: string;
    }

    interface DragPreviewOptions {
        captureDraggingState?: boolean;
        anchorX?: number;
        anchorY?: number;
    }

    type ConnectDragSource = DragElementWrapper<DragSourceOptions>;
    type ConnectDragPreview = DragElementWrapper<DragPreviewOptions>;

    /// DropTarget
    // ----------------------------------------------------------------------

    interface DropTargetSpec<P> {
        drop?(props: P, monitor?: DropTargetMonitor, component?: React.Component<P>): Object|void;
        hover?(props: P, monitor?: DropTargetMonitor, component?: React.Component<P>): void;
        canDrop?(props: P, monitor?: DropTargetMonitor): boolean;
    }

    class DropTargetMonitor {
        canDrop(): boolean;
        isOver(options?: { shallow: boolean }): boolean;
        getItemType(): Identifier;
        getItem(): Object;
        getDropResult(): Object;
        didDrop(): boolean;
        getInitialClientOffset(): ClientOffset;
        getInitialSourceClientOffset(): ClientOffset;
        getClientOffset(): ClientOffset;
        getDifferenceFromInitialOffset(): ClientOffset;
        getSourceClientOffset(): ClientOffset;
    }

    class DropTargetConnector {
        dropTarget(): ConnectDropTarget;
    }

    type ConnectDropTarget = <P>(elementOrNode: React.ReactElement<P>) => React.ReactElement<P>;

    /// DragLayerMonitor
    // ----------------------------------------------------------------------

    class DragLayerMonitor {
        isDragging(): boolean;
        getItemType(): Identifier;
        getItem(): Object;
        getInitialClientOffset(): ClientOffset;
        getInitialSourceClientOffset(): ClientOffset;
        getClientOffset(): ClientOffset;
        getDifferenceFromInitialOffset(): ClientOffset;
        getSourceClientOffset(): ClientOffset;
    }

    /// Backend
    /// ---------------------------------------------------------------------

    // TODO: Fill in the Backend interface.
    // The React DnD docs do not cover this, and this is only needed for
    // creating custom backends (i.e. not using the built-in HTML5Backend).
    interface Backend {}
}

declare module "react-dnd" {
    export = __ReactDnd;
}
