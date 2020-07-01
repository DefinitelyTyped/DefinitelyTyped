// Type definitions for Uniform.js
// Project: https://github.com/pixelmatrix/uniform
// Definitions by: flyfishMT <https://github.com/flyfishMT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface UniformCoreOptions {
    activeClass?: string;
    autoHide?: boolean;
    buttonClass?: string;
    checkboxClass?: string;
    checkedClass?: string;
    disabledClass?: string;
    eventNamespace?: string;
    fileButtonClass?: string;
    fileButtonHtml?: string;
    fileClass?: string;
    fileDefaultHtml?: string;
    filenameClass?: string;
    focusClass?: string;
    hoverClass?: string;
    idPrefix?: string;
    inputAddTypeAsClass?: boolean;
    inputClass?: string;
    radioClass?: string;
    resetDefaultHtml?: string;
    resetSelector?: any;
    selectAutoWidth?: boolean;
    selectClass?: string;
    selectMultiClass?: string;
    submitDefaultHtml?: string;
    textareaClass?: string;
    useID?: boolean;
    wrapperClass?: string;
}

interface UniformOptions extends UniformCoreOptions {
    [option: string]: any;
}

interface Uniform {
    (options?: UniformOptions): JQuery;
    update(elemOrSelector?: any): void;
    restore(elemOrSelector?: any): void;
    elements: JQuery[];
    defaults: UniformOptions;
}
interface JQueryStatic {
    uniform: Uniform;
}

interface JQuery {
    uniform: Uniform;
}
