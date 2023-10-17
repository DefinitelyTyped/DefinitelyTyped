import { BackendFactory } from "dnd-core";
import { CSSProperties, FC, PureComponent, ReactNode } from "react";

/**
 * Callback function type definition for checking whether an event represents a transition between
 * dragging and dropping.
 * @param event Touch/Mouse/Keyboard/etc UI Event.
 * @returns True if the event triggers the start of a transition.
 */
export type CheckFunction<E extends UIEvent> = (event: E) => boolean;

/**
 * Drag and drop Transition interface.
 */
export interface Transition {
    /**
     * ???
     */
    _isMBTransition: boolean;
    /**
     * Event type that this transition should check against. This will be an HTML event, such as
     * "dragstart", "touchstart", etc.
     */
    event: string;
    /**
     * Check function to use for this transition.
     */
    check: CheckFunction<any>;
}

/**
 * Function to create a custom/new Transition.
 * @param eventType EventType string to identify the type of event being tested. This will be an
 *                  HTML event, such as "dragstart", "touchstart", etc.
 * @param check The CheckFunction to use to verify if an event matches the event type.
 * @returns A Transition to indicate when a particular Backend should be used.
 */
export function createTransition(eventType: string, check: CheckFunction<any>): Transition;

/**
 * Declaration for a Drag and Drop backend to be used.
 */
export interface BackendDeclaration {
    /**
     * Backend - e.g. the one provided by react-dnd-html5-backend.
     */
    backend: BackendFactory;
    /**
     * Parameters to the backend
     */
    options?: object | undefined;
    /**
     * Flag to indicate that this backend needs to have a custom preview generated. This is mainly
     * used for backends such as the react-dnd-touch-backend, where there is no default preview
     * available.
     */
    preview?: boolean | undefined;
    /**
     * The transition that this backend should be used for.
     */
    transition?: Transition | undefined;
}

/**
 * The declaration for the list of backends to be used.
 */
export interface Backends {
    /**
     * The array of backends to use. The first backend in the list is used as the default backend.
     * This means that you can start with the html5 backend, and fall-back to a touch backend if
     * the event is not one that is compatible with the html5 backend.
     */
    backends: BackendDeclaration[];
}

export interface PreviewGeneratorArg<T = any> {
    /**
     * The type of the item (monitor.getItemType())
     */
    itemType: string;

    /**
     * The item being dragged (monitor.getItem())
     */
    item: T;

    /**
     * An object representing the style to use for the item, it should be passed to
     * your component's style property and is used for positioning
     */
    style: CSSProperties;
}

export type PreviewGenerator<T = any> = (arg: PreviewGeneratorArg<T>) => ReactNode;

/**
 * Properties for the Preview class
 */
export interface PreviewProps<T = any> {
    /**
     * Callback function to generate a preview object when dragging. This preview will only be used
     * with backends that have the 'preview' flag set to true.
     * @param arg.itemType: the type of the item (monitor.getItemType())
     * @param arg.item: the item being dragged (monitor.getItem())
     * @param arg.style: an object representing the style to use for the item, it should be passed to
     *               your component's style property and is used for positioning.
     * @returns The JSX element to display for the drag preview.
     */
    generator: PreviewGenerator<T>;
}

/**
 * Class to use when generating a custom preview for a dragged item.
 * This is frequently used with the Touch backend to provide a preview on mobile devices.
 */
export class Preview extends PureComponent<PreviewProps> {}
/**
 * Pre-existing/default react-dnd-multi-backend transition available to use.
 */
export const MouseTransition: Transition;
/**
 * Pre-existing/default react-dnd-touch-backend transition available to use.
 * This transition has the setting for "enableMouseEvents" turned on.
 */
export const TouchTransition: Transition;
/**
 * Pre-existing/default react-dnd-html5-backend transition available to use.
 */
export const HTML5DragTransition: Transition;

/**
 * Multi-backend customized DndProvider implementation
 */
export const DndProvider: FC<{
    context?: any;
    debugMode?: boolean | undefined;
    options: Backends;
    children?: ReactNode;
}>;

/**
 * Primary BackendFactory for react-dnd-multi-backend.
 * You must pass an object containing `backends[]` as options
 * @returns A backend factory compatible with react-dnd.
 */
export const MultiBackend: BackendFactory;
export default MultiBackend;
