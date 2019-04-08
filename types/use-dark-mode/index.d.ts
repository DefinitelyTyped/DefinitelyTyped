// Type definitions for use-dark-mode 2.3
// Project: https://github.com/donavon/use-dark-mode#readme
// Definitions by: Joel Spadin <https://github.com/ChaosinaCan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

interface DarkMode {
    /**
     * The current state of dark mode.
     */
    value: boolean;
    /**
     * A function that allows you to set dark mode to `true`.
     */
    enable(): void;
    /**
     * A function that allows you to set dark mode to `false`.
     */
    disable(): void;
    /**
     * A function that allows you to toggle dark mode.
     */
    toggle(): void;
}

interface DarkModeConfig {
    /**
     * The class to apply. Default = `dark-mode`.
     */
    classNameDark: string;
    /**
     * The class to apply. Default = `light-mode`.
     */
    classNameLight: string;
    /**
     * The element to apply the class name. Default = `document.body`.
     */
    element: Element;
    /**
     * A function that will be called when the dark mode value changes and
     * it is safe to access the DOM (i.e. it is called from within a
     * `useEffect`). If you specify `onChange` then `classNameDark`,
     * `classNameLight`, and `element` are ignored (i.e. no classes are
     * automatically placed on the DOM). You have full control!
     */
    onChange: (value: boolean) => void;
    /**
     * A string that will be used by the `storageProvider` to persist the
     * dark mode value. If you specify a value of `null`, nothing will not
     * be persisted. Default = `darkMode`.
     */
    storageKey: string | null;
    /**
     * A storage provider. Default = `localStorage`. You will generally
     * never need to change this value.
     */
    storageProvider: Storage;
}

/**
 * A custom React Hook to help you implement a "dark mode" component for
 * your application. The user setting persists to `localStorage` by default.
 *
 * `useDarkMode` works in one of two ways:
 * 1. By toggling a CSS class on whatever element you specify (defaults to
 *    `document.body`). You then setup your CSS to display different views
 *    based on the presence of the selector.
 * 2. If you don't use global classes, you can specify an `onChange` handler
 *    and take care of the implementation of switching to dark mode
 *    yourself.
 *
 * @param initialState Specifies whether it should be in dark mode by defualt.
 * @param darkModeConfig Optional configuration.
 */
declare function useDarkMode(initialState: boolean, darkModeConfig?: Partial<DarkModeConfig>): DarkMode;

export default useDarkMode;
