/// <reference types="jquery"/>

interface XEditableOptions {
    ajaxOptions?: any;
    anim?: string | undefined;
    autotext?: string | undefined;
    defaultValue?: any;
    disabled?: boolean | undefined;
    display?: any;
    emptyclass?: string | undefined;
    emptytext?: string | undefined;
    error?: any;
    highlight?: any;
    mode?: string | undefined;
    name?: string | undefined;
    onblur?: string | undefined;
    params?: any;
    pk?: any;
    placement?: string | undefined;
    savenochange?: boolean | undefined;
    selector?: string | undefined;
    send?: string | undefined;
    showbuttons?: any;
    success?: any;
    toggle?: string | undefined;
    type?: string | undefined;
    unsavedclass?: string | undefined;
    url?: any;
    validate?: any;
    value?: any;
}

interface XEditableSubmitOptions {
    url?: any;
    data?: any;
    ajaxOptions?: any;
    error(obj: any): void;
    success(obj: any, config: any): void;
}

interface XEditable {
    options: XEditableOptions;
    activate(): void;
    destroy(): void;
    disable(): void;
    enable(): void;
    getValue(isSingle: boolean): any;
    hide(): void;
    option(key: any, value: any): void;
    setValue(value: any, convertStr: boolean): void;
    show(closeAll: boolean): void;
    submit(options: XEditableSubmitOptions): void;
    toggle(closeAll: boolean): void;
    toggleDisabled(): void;
    validate(): void;
}

interface JQuery {
    /**
     * Initializes editable with the specified options
     * @param options an object with options specific to the editable instance
     */
    editable(options?: any): XEditable;
    /**
     * Initializes editable calling the specific method with is parameters
     * @param method the method to call
     * @param params the parameters expected by the method
     */
    editable(method: string, params?: any): XEditable;
}
