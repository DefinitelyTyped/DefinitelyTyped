//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";
import { Manifest } from "./manifest";

/**
 * Namespace: browser.theme
 */
export namespace Theme {
    /**
     * Info provided in the onUpdated listener.
     */
    interface ThemeUpdateInfo {
        /**
         * The new theme after update
         */
        theme: ThemeUpdateInfoThemeType;

        /**
         * The id of the window the theme has been applied to
         * Optional.
         */
        windowId?: number;
    }

    /**
     * The new theme after update
     */
    interface ThemeUpdateInfoThemeType {
        [s: string]: unknown;
    }

    interface Static {
        /**
         * Returns the current theme for the specified window or the last focused window.
         *
         * @param windowId Optional. The window for which we want the theme.
         */
        getCurrent(windowId?: number): Promise<Manifest.ThemeType>;

        /**
         * Make complete updates to the theme. Resolves when the update has completed.
         *
         * @param windowId Optional. The id of the window to update. No id updates all windows.
         * @param details The properties of the theme to update.
         */
        update(windowId: number | undefined, details: Manifest.ThemeType): Promise<void>;

        /**
         * Make complete updates to the theme. Resolves when the update has completed.
         *
         * @param details The properties of the theme to update.
         */
        update(details: Manifest.ThemeType): Promise<void>;

        /**
         * Removes the updates made to the theme.
         *
         * @param windowId Optional. The id of the window to reset. No id resets all windows.
         */
        reset(windowId?: number): Promise<void>;

        /**
         * Fired when a new theme has been applied
         *
         * @param updateInfo Details of the theme update
         */
        onUpdated: Events.Event<(updateInfo: ThemeUpdateInfo) => void>;
    }
}
