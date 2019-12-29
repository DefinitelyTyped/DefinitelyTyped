// Type definitions for jss v0.6
// Project: https://github.com/Box9/jss
// Definitions by: Valentin Robert <https://github.com/Ptival>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Properties {
    [name: string]: string;
}

interface Selectors {
    [selector: string]: Properties;
}

interface JSS {
    /**
     * Retrieve all rules added via JSS, organized by selectors
     */
    get(): Selectors;

    /**
     * Retrieve rules added via JSS for a given selector
     * @param s CSS selector
     */
    get(s: string): Properties;

    /**
     * Retrieve all rules specified for a given selector (not necessarily added via JSS)
     * @param s CSS selector
     */
    getAll(s: string): Properties;

    /**
     * Remove all rules added via JSS
     */
    remove(): void;

    /**
     * Remove all rules added via JSS for the given selector
     */
    remove(s: string): void;

    /**
     * Add or extend an existing rule
     * @param s CSS selector
     * @param p CSS properties
     */
    set(s: string, p: Properties): void;
}

declare var jss: JSS;
