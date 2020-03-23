// Type definitions for pell 1.0
// Project: https://jaredreich.com/pell
// Definitions by: Gabriel Soicher <https://github.com/Lunrtick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace pell;

export interface PellElement {
    content: HTMLDivElement;
}

export function init<T extends HTMLElement>(c: pellConfig<T>): T & PellElement;
export function exec(command: string, value?: string): void;

export interface pellConfig<T extends HTMLElement> {
    element: T;
    onChange: (html: string) => void;
    defaultParagraphSeparator?: string;
    styleWithCSS?: boolean;
    actions: pellAction[];
    classes?: pellClasses;
}

export interface pellClasses {
    actionbar?: string;
    button?: string;
    content?: string;
    selected?: string;
}

export type pellAction = pellBuiltinAction | pellActionConfig | pellCustomActionConfig;
export interface pellActionConfig {
    name: pellAction;
    icon?: string;
    title?: string;
    result: () => void;
}
export interface pellCustomActionConfig {
    name?: string;
    icon: string;
    title?: string;
    result: () => void;
}

export type pellBuiltinAction =
    | 'bold'
    | 'italic'
    | 'underline'
    | 'strikethrough'
    | 'heading1'
    | 'heading2'
    | 'paragraph'
    | 'quote'
    | 'olist'
    | 'ulist'
    | 'code'
    | 'line'
    | 'link'
    | 'image';
