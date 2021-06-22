// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace dojox {

    namespace gesture {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/gesture/Base.html
         *
         *
         * @param args
         */
        class Base {
            constructor(args: any);
            /**
             * Default event e.g. 'tap' is a default event of dojox.gesture.tap
             *
             */
            "defaultEvent": string;
            /**
             * A list of sub events e.g ['hold', 'doubletap'],
             * used by being combined with defaultEvent like 'tap.hold', 'tap.doubletap' etc.
             *
             */
            "subEvents": any[];
            /**
             * Whether the gesture is touch-device only
             *
             */
            "touchOnly": boolean;
            /**
             * Process the 'cancel' phase of a gesture
             *
             * @param data
             * @param e
             */
            cancel(data: any, e: any): void;
            /**
             * Release all handlers and resources
             *
             */
            destroy(): void;
            /**
             * Fire a gesture event and invoke registered listeners
             * a simulated GestureEvent will also be sent along
             *
             * @param node Target node to fire the gesture
             * @param event An object containing specific gesture info e.g {type: 'tap.hold'|'swipe.left'), ...}all these properties will be put into a simulated GestureEvent when fired.Note - Default properties in a native Event won't be overwritten, see on.emit() for more details.
             */
            fire(node: HTMLElement, event: Object): void;
            /**
             * Initialization works
             *
             */
            init(): void;
            /**
             * Check if the node is locked, isLocked(node) means
             * whether it's a descendant of the currently locked node.
             *
             * @param node
             */
            isLocked(node: any): boolean;
            /**
             * Lock all descendants of the node.
             *
             * @param node
             */
            lock(node: HTMLElement): void;
            /**
             * Process the 'move' phase of a gesture
             *
             * @param data
             * @param e
             */
            move(data: any, e: any): void;
            /**
             * Process the 'press' phase of a gesture
             *
             * @param data
             * @param e
             */
            press(data: any, e: any): void;
            /**
             * Process the 'release' phase of a gesture
             *
             * @param data
             * @param e
             */
            release(data: any, e: any): void;
            /**
             * Release the lock
             *
             */
            unLock(): void;
        }
    }

}


declare module "dojox/gesture/Base" {
    var exp: dojox.gesture.Base
    export=exp;
}
