import { Disposable, Package } from '../index';

/** Handles loading and activating available themes. */
export interface ThemeManager {
    // Event Subscription
    /**
     *  Invoke callback when style sheet changes associated with updating the
     *  list of active themes have completed.
     */
    onDidChangeActiveThemes(callback: () => void): Disposable;

    // Accessing Loaded Themes
    /** Returns an Array of strings of all the loaded theme names. */
    getLoadedThemeNames(): string[] | undefined;

    /** Returns an Array of all the loaded themes. */
    getLoadedThemes(): Package[] | undefined;

    // Managing Enabled Themes
    /** Returns an Array of strings all the active theme names. */
    getActiveThemeNames(): string[] | undefined;

    /** Returns an Array of all the active themes. */
    getActiveThemes(): Package[] | undefined;

    // Managing Enabled Themes
    /** Get the enabled theme names from the config. */
    getEnabledThemeNames(): string[];
}
