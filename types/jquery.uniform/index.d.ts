/// <reference types="jquery" />

interface UniformCoreOptions {
    activeClass?: string | undefined;
    autoHide?: boolean | undefined;
    buttonClass?: string | undefined;
    checkboxClass?: string | undefined;
    checkedClass?: string | undefined;
    disabledClass?: string | undefined;
    eventNamespace?: string | undefined;
    fileButtonClass?: string | undefined;
    fileButtonHtml?: string | undefined;
    fileClass?: string | undefined;
    fileDefaultHtml?: string | undefined;
    filenameClass?: string | undefined;
    focusClass?: string | undefined;
    hoverClass?: string | undefined;
    idPrefix?: string | undefined;
    inputAddTypeAsClass?: boolean | undefined;
    inputClass?: string | undefined;
    radioClass?: string | undefined;
    resetDefaultHtml?: string | undefined;
    resetSelector?: any;
    selectAutoWidth?: boolean | undefined;
    selectClass?: string | undefined;
    selectMultiClass?: string | undefined;
    submitDefaultHtml?: string | undefined;
    textareaClass?: string | undefined;
    useID?: boolean | undefined;
    wrapperClass?: string | undefined;
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
