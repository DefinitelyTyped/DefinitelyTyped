import { NativeEventEmitter } from "../EventEmitter/NativeEventEmitter";

/**
 * The DevSettings module exposes methods for customizing settings for developers in development.
 */
export interface DevSettingsStatic extends NativeEventEmitter {
    /**
     * Adds a custom menu item to the developer menu.
     *
     * @param title - The title of the menu item. Is internally used as id and should therefore be unique.
     * @param handler - The callback invoked when pressing the menu item.
     */
    addMenuItem(title: string, handler: () => any): void;

    /**
     * Reload the application.
     *
     * @param reason
     */
    reload(reason?: string): void;
}

export const DevSettings: DevSettingsStatic;
