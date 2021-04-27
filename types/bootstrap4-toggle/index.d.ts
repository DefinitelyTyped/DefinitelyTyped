// Type definitions for bootstrap4-toggle 3.6
// Project: https://github.com/gitbrent/bootstrap4-toggle, https://gitbrent.github.io/bootstrap4-toggle/
// Definitions by: Mitchell Grice <https://github.com/gricey432>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="jquery"/>

interface BootstrapToggleOptions {
    on?: string;
    off?: string;
    size?: string;
    onstyle?: string;
    offstyle?: string;
    style?: string;
    width?: number | string | null;
    height?: number | string | null;
}

interface JQuery {
    bootstrapToggle(options?: BootstrapToggleOptions): JQuery;
    bootstrapToggle(command: "destroy" | "on" | "off" | "toggle" | "enable" | "disable"): JQuery;
}
