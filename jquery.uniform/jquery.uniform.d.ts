// Type definitions for Uniform.js
// Project: https://github.com/pixelmatrix/uniform
// Definitions by: flyfishMT <https://github.com/flyfishMT/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface UniformOptions {
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
