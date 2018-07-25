// Type definitions for terminal-menu v2.1.1
// Project: https://github.com/substack/terminal-menu
// Definitions by: Arun Aravind <https://github.com/aravindarun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "terminal-menu" {
    import * as stream from "stream";

    /**
     * Creates a TerminalMenu with default settings.
     */
    function MenuContainerFactory(): MenuContainerFactory.TerminalMenu;

    /**
     * Creates a TerminalMenu using options to override default settings.
     * @param options Override values for available settings.
     */
    function MenuContainerFactory(options: MenuContainerFactory.TerminalMenuOptions): MenuContainerFactory.TerminalMenu;

    namespace MenuContainerFactory {

        /**
         * A Thickness structure specifying the amount of padding to apply.
         */
        export interface Thickness {
            /**
             * Represents width of the left side of the bounding rectangle.
             */
            left: number,

            /**
             * Represents width of the right side of the bounding rectangle.
             */
            right: number,

            /**
             * Represents width of the upper side of the bounding rectangle.
             */
            top: number,

            /**
             * Represents width of the lower side of the bounding rectangle.
             */
            bottom: number
        }

        /**
         * Options to configure the menu.
         */
        export interface TerminalMenuOptions {
            /**
             * Menu width in columns.
             * Default = 50.
             */
            width?: number;

            /**
             * Horizontal offset for top-left corner.
             * Default = 1
             */
            x?: number;

            /**
             * Vertical offset for top-left corner.
             * Default = 1
             */
            y?: number;

            /**
             * Foreground color for the menu.
             * Default = 'white'
             */
            fg?: string;

            /**
             * Background color for the menu.
             * Default = 'blue'
             */
            bg?: string;

            /**
             * Padding for the bounding rectangle.
             * If a number is passed, all elements of the Thickness structure will be set to
             * that value.
             * Default = {
             *      left: 2,
             *      right: 2,
             *      top: 1,
             *      bottom: 1
             * }
             */
            padding?: number | Thickness;

            /**
             * Index of the menu item to be selected.
             * Default = 0
             */
            selected?: number
        }

        /**
         * Retro ansi terminal menus.
         */
        export interface TerminalMenu extends NodeJS.EventEmitter {
            /**
             * Create a new selectable menu item with label as the anchor.
             * @param label Label to use as the menu item anchor.
             */
            add(label: string): void;

            /**
              * Create a new selectable menu item with label as the anchor.
              * @param label Label to use as the menu item anchor.
              * @param callback Callback to invoke when the menu item is selected.
              */
            add(label: string, callback: (label: string, index: number) => void): void;

            /**
             * Writes a message to the terminal.
             * @param msg Message to be written.
             */
            write(msg: string): void;

            /**
             * Return a duplex stream to wire up input and output.
             */
            createStream(): stream.Duplex;

            /**
             * Reset the terminal, clearing all content.
             */
            reset(): void;

            /**
             * Unregister all listeners and puts the terminal back to its original state.
             */
            close(): void;

            /**
             * When a menu item is selected, this event is fired.
             * @param eventName Name of the event. Only value available for eventName is "select"
             * @param callback Handler for the event specified by eventName
             */
            on(eventName: string | symbol, callback: (label: string, index: number) => void): this;

            /**
             * When a menu item is selected, this event is fired.
             * This overload ensures backward compatibility with older versions of NodeJS (< 6.0)
             * @param eventName Name of the event. Only value available for eventName is "select"
             * @param callback Handler for the event specified by eventName
             */
            on(eventName: string, callback: (label: string, index: number) => void): this;
        }
    }

    export = MenuContainerFactory;
}
