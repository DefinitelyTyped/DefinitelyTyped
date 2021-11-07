import '../../';

declare module '../../' {
    interface EditorConfiguration {
        /**
         * Controls the mouse cursor appearance when hovering over the selection. It can be set to a string, like "pointer", or to true,
         * in which case the "default" (arrow) cursor will be used.
         */
         selectionPointer?: boolean | string | undefined;
    }
}
