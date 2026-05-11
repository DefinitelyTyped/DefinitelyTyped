/// <reference types="jquery"/>

interface JQueryFormOptions extends JQueryAjaxSettings {
    beforeSerialize?: (($form: JQuery, options: JQueryFormOptions) => boolean) | undefined;
    beforeSubmit?: ((formData: any[], $form: JQuery, options: JQueryFormOptions) => boolean) | undefined;
    clearForm?: boolean | undefined;
    forceSync?: boolean | undefined;
    iframe?: boolean | undefined;
    iframeSrc?: string | undefined;
    iframeTarget?: any;
    replaceTarget?: boolean | undefined;
    resetForm?: boolean | undefined;
    semantic?: boolean | undefined;
    target?: any;
    uploadProgress?:
        | ((event: ProgressEvent, position: number, total: number, percentComplete: number) => void)
        | undefined;
}

interface JQueryForm {
    (callback?: Function): JQuery;
    (options?: JQueryFormOptions): JQuery;
}

interface JQueryFormWithDebug extends JQueryForm {
    debug: boolean;
}

interface JQueryStatic {
    fieldValue(element: Element, successful?: boolean): string;
}

interface JQuery {
    ajaxForm: JQueryForm;
    ajaxSubmit: JQueryFormWithDebug;
    formSerialize(): string;
    fieldSerialize(): string;
    fieldValue(successful?: boolean): string[];
    resetForm(): JQuery;
    clearForm(): JQuery;
    clearFields(): JQuery;
    ajaxFormUnbind: () => JQuery;
    formToArray: (semantic?: boolean, elements?: Element[]) => any[];
    enable: (enable?: boolean) => JQuery;
    selected: (select?: boolean) => JQuery;
}
