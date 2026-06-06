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
