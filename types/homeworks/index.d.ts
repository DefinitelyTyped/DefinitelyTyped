// Type definitions for homeworks 1.0
// Project: https://github.com/IGAWorksDev/homeworks/
// Definitions by: Kenneth Ceyer <https://github.com/KennethanCeyer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

/**
 * * [MAIN]
 * @ EVENT
 *
 */

declare interface HomeWorksEventObject {
    element: JQuery;
    value: string;
    checked?: boolean;
}

declare interface JQuery {
    bind(eventType: string, handler: (...parameters: any[]) => void): JQuery;
    knock(): JQuery;
}

/**
 * * [COMPONENT]
 * @ CHECKBOX
 *
 */
interface CheckboxOptions {
}

declare interface JQuery {
    checkbox(options?: CheckboxOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ CONVERTER
 *
 */

interface ConverterOptions {
}

declare interface JQuery {
    converter(options?: ConverterOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ DROPDOIWN
 *
 */

interface DropdownOptions {
}

declare interface JQuery {
    dropdown(options?: DropdownOptions): JQuery;
    addHandler(target: JQuery): JQuery;
}

/**
 * * [COMPONENT]
 * @ INPUT
 *
 */

interface InputOptions {
}

declare interface JQuery {
    input(options?: InputOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ MODAL
 *
 */

declare interface JQuery {
    modal(options?: any): JQuery;
    modal(method?: string, options?: any): JQuery;
}

/**
 * * [COMPONENT]
 * @ NOTIFICATION
 *
 */

declare function notification(title: string, content: string, url: string, status?: string): void;

/**
 * * [COMPONENT]
 * @ RIPPLE
 *
 */

interface RippleStartOptions {
    x: number;
    y: number;
}

declare interface JQuery {
    ripple(options?: any): JQuery;
    start(options?: RippleStartOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ SPINNER
 *
 */

interface SpinnerOptions {
    type?: any;
    empty?: any;
}

declare interface JQuery {
    spinner(options?: SpinnerOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ STEP
 *
 */

interface StepOptions {
    active?: number;
}

declare interface JQuery {
    step(method?: string): JQuery;
    step(options?: StepOptions): JQuery;
}

declare interface HomeWorksStepEventObject {
    header: JQuery[];
    index: number;
    length: number;
}

/**
 * * [COMPONENT]
 * @ TAB
 *
 */

interface TabOptions {
    active?: number;
}

declare interface JQuery {
    tab(method?: string): JQuery;
    tab(options?: TabOptions): JQuery;
}

declare interface HomeWorksTabEventObject {
    header: JQuery[];
    index: number;
    length: number;
}

/**
 * * [COMPONENT]
 * @ TOAST
 *
 */

declare function toast(message: any): void;

/**
 * * [COMPONENT]
 * @ TOGGLE
 *
 */

interface ToggleOptions {
    placeholder?: string;
}

declare interface JQuery {
    toggle(options: ToggleOptions): JQuery;
}

/**
 * * [COMPONENT]
 * @ UPLOAD
 *
 */

interface UploadOptions {
    url: string;
    type?: string;
    data?: any;
    dest?: string;
    isBtn?: boolean;
    beforeStart?: () => void;
    complete?: (data?: any) => void;
    success?: (data?: any, state?: any, xhr?: any) => void;
    error?: (xhr?: any, state?: any, error?: any) => void;
    extensions?: any;
}

declare interface JQuery {
    upload(options?: UploadOptions): JQuery;
}
