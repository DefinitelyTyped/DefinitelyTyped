// Type definitions for react-dnd-multi-backend 3.0
// Project: https://github.com/LouisBrunner/react-dnd-multi-backend, https://louisbrunner.github.io/dnd-multi-backend/packages/react-dnd-multi-backend
// Definitions by: Janeene Beeforth <https://github.com/dawnmist>
//                 Adam Haglund <https://github.com/beeequeue>
//                 Rob Valentine <https://github.com/robcodemonkey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { CSSProperties, PureComponent } from "react";
import { BackendFactory } from "dnd-core";

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
     * Flag to indicate that this backend needs to have a custom preview generated. This is mainly
     * used for backends such as the react-dnd-touch-backend, where there is no default preview
     * available.
     */
    preview?: boolean;
    /**
     * The transition that this backend should be used for.
     */
    transition?: Transition;
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

/**
 * Properties for the Preview class
 */
export interface PreviewProps {
    /**
     * Callback function to generate a preview object when dragging. This preview will only be used
     * with backends that have the 'preview' flag set to true.
     * @param type: the type of the item (monitor.getItemType())
     * @param item: the item being dragged (monitor.getItem())
     * @param style: an object representing the style to use for the item, it should be passed to
     *               your component's style property and is used for positioning.
     * @returns The JSX element to display for the drag preview.
     */
    generator(type: string, item: any, style: CSSProperties): JSX.Element;
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
 * Primary construction function for react-dnd-multi-backend.
 * @param backends The list of backends in descending order of preference to use for drag and drop.
 * @returns A backend definition compatible with react-dnd.
 */
export default function(backends: Backends): BackendFactory;
