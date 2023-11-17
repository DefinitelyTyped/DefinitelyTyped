export interface LogBoxStatic {
    /**
     * Silence any logs that match the given strings or regexes.
     */
    ignoreLogs(patterns: Array<string | RegExp>): void;

    /**
     * Toggle error and warning notifications
     * Note: this only disables notifications, uncaught errors will still open a full screen LogBox.
     * @param ignore whether to ignore logs or not
     */
    ignoreAllLogs(ignore?: boolean): void;

    install(): void;
    uninstall(): void;
}

export const LogBox: LogBoxStatic;
export type LogBox = LogBoxStatic;
