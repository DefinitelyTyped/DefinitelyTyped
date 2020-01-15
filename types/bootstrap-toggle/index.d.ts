// Type definitions for bootstrap-toggle 2.2
// Project: https://github.com/minhur/bootstrap-toggle, http://www.bootstraptoggle.com
// Definitions by: Mitchell Grice <https://github.com/gricey432>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
