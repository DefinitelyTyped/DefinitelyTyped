export as namespace pell;

export interface PellElement {
    content: HTMLDivElement;
}

export function init<T extends HTMLElement>(c: pellConfig<T>): T & PellElement;
export function exec(command: string, value?: string): void;

export interface pellConfig<T extends HTMLElement> {
    element: T;
    onChange: (html: string) => void;
    defaultParagraphSeparator?: string | undefined;
    styleWithCSS?: boolean | undefined;
    actions: pellAction[];
    classes?: pellClasses | undefined;
}

export interface pellClasses {
    actionbar?: string | undefined;
    button?: string | undefined;
    content?: string | undefined;
    selected?: string | undefined;
}

export type pellAction = pellBuiltinAction | pellActionConfig | pellCustomActionConfig;
export interface pellActionConfig {
    name: pellAction;
    icon?: string | undefined;
    title?: string | undefined;
    result: () => void;
}
export interface pellCustomActionConfig {
    name?: string | undefined;
    icon: string;
    title?: string | undefined;
    result: () => void;
}

export type pellBuiltinAction =
    | "bold"
    | "italic"
    | "underline"
    | "strikethrough"
    | "heading1"
    | "heading2"
    | "paragraph"
    | "quote"
    | "olist"
    | "ulist"
    | "code"
    | "line"
    | "link"
    | "image";
