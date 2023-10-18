/// <reference types="jquery"/>

interface FilestyleOptions {
    buttonText?: string | undefined;
    iconName?: string | undefined;
    buttonName?: string | undefined;
    size?: string | undefined;
    input?: boolean | undefined;
    badge?: boolean | undefined;
    icon?: boolean | undefined;
    buttonBefore?: boolean | undefined;
    disabled?: boolean | undefined;
    placeholder?: string | undefined;
}

interface JQuery {
    filestyle(options?: FilestyleOptions): JQuery;

    filestyle(method: "clear" | "destroy" | "htmlIcon" | "htmlInput" | "pushNameFiles"): JQuery;

    filestyle(method: "disabled" | "buttonBefore" | "icon" | "input", value: boolean): JQuery;

    filestyle(method: "size" | "placeholder" | "buttonText" | "buttonName" | "iconName", value: string): JQuery;
}
