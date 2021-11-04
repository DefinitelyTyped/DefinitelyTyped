// Type definitions for bootstrap4-toggle 3.6
// Project: https://github.com/gitbrent/bootstrap4-toggle, https://gitbrent.github.io/bootstrap4-toggle/
// Definitions by: Mitchell Grice <https://github.com/gricey432>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="jquery"/>

interface BootstrapToggleOptions {
    on?: string | undefined;
    off?: string | undefined;
    size?: string | undefined;
    onstyle?: string | undefined;
    offstyle?: string | undefined;
    style?: string | undefined;
    width?: number | string | null | undefined;
    height?: number | string | null | undefined;
}

interface JQuery {
    bootstrapToggle(options?: BootstrapToggleOptions): JQuery;
    bootstrapToggle(command: "destroy" | "on" | "off" | "toggle" | "enable" | "disable"): JQuery;
}
