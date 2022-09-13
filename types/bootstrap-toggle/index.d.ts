// Type definitions for bootstrap-toggle 2.2
// Project: https://github.com/minhur/bootstrap-toggle, http://www.bootstraptoggle.com
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
