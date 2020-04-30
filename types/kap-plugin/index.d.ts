// Type definitions for kap-plugin 1.0
// Project: https://github.com/wulkano/kap/blob/master/docs/plugins.md
// Definitions by: Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

import * as got from 'got';
import * as ElectronStore from 'electron-store';
import { JSONSchema7 } from 'json-schema';

export interface KapContext<T> {
    /**
     * The file format the user chose in the editor window
     */
    format: Format;

    /**
     * Prettified version of .format for use in notifications.
     * For example: GIF, MP4, WebM, APNG.
     */
    prettyFormat: string;

    /**
     * Default file name for the recording. For example: `Kapture 2017-05-30 at 1.03.49.gif`.
     */
    defaultFileName: string;

    /**
     * Convert the screen recording to the user chosen format and return a
     * Promise for the file path. If you want to overwrite the format that the
     * user selected, you can pass a fileType option. This can be useful if
     * you, for example, need to handle the GIF conversion yourself.
     */
    filePath(options?: { fileType: Format }): Promise<string>;

    /**
     * Get and set config for you plugin. It’s an instance of electron-store.
     */
    config: ElectronStore<T>;

    /**
     * Do a network request, like uploading. It’s a wrapper around `got`.
     */
    request: typeof got;

    /**
     * Copy text to the clipboard. If you for example copy a link to the
     * uploaded recording to the clipboard, don’t
     * forget to `.notify()` the user about it.
     */
    copyToClipboard(text: string): void;

    /**
     * Show a notification. Optionally pass in a function that is called with
     * the event when the notification is clicked.
     */
    notify(text: string, action?: () => void): void;

    /**
     * Update progress information in the Kap export window. Use this whenever
     * you have long-running jobs, like uploading. The percentage should
     * be a number between 0 and 1.
     */
    setProgress(text: string, percentage: number): void;

    /**
     * Open the plugin config file in the user’s editor.
     */
    openConfigFile(): void;

    /**
     * Indicate that the plugin operation canceled for some reason. This closes
     * the Kap export window. If the cancelation was not the result of a user
     * gesture, use .notify() to inform the user why it was canceled.
     */
    cancel(): void;

    /**
     * Returns a Promise that resolves when a deep link for this plugin is
     * opened. The link should be in the format `kap://plugins/{pluginName}/{rest}`,
     * where pluginName is the npm package name and rest is the string the
     * Promise will resolve with. This is useful for [OAuth flows](https://github.com/wulkano/kap/blob/master/docs/plugins.md#oauth).
     */
    waitForDeepLink(): Promise<string>;
}

export type Format = 'gif' | 'mp4' | 'webm' | 'apng';

// TS-3.4 compatible Omit<>:
export type ConfigSchema<TValue> = Pick<JSONSchema7, Exclude<keyof JSONSchema7, 'required' | 'default'>> & {
    required?: boolean;
    default?: TValue;
};

export interface KapShareService<T = unknown> {
    /**
     * The function that is run when the user clicks the menu item.
     */
    action(context: KapContext<T>): Promise<void>;

    /**
     * The title used in the export menu. For example: "Share to GIPHY". The
     * text should be in title case, for example, "Save to Disk",
     * not "Save to disk".
     */
    title: string;

    /**
     * The file formats you support.
     */
    formats: ReadonlyArray<Format>;

    /**
     * A description displayed at the top of the configuration window. You can
     * use this to explain the config options or link to API docs. Any links in
     * this description will be parsed into clickable links automatically.
     */
    configDescription: string;

    /**
     * Definition of the config the plugins needs. A JSON schema, with the
     * ability to mark properties as `required` individually.
     */
    config: { [K in keyof T]?: ConfigSchema<T[K]> };
}
