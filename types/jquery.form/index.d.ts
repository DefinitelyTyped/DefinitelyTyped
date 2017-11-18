// Type definitions for jQuery.form.js 3.26
// Project: http://malsup.com/jquery/form/
// Definitions by: François Guillot <http://fguillot.developpez.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


/// <reference types="jquery"/>

interface JQueryFormOptions extends JQueryAjaxSettings {
    beforeSerialize?: ($form: JQuery, options: JQueryFormOptions) => boolean;
    beforeSubmit?: (formData: any[], $form: JQuery, options: JQueryFormOptions) => boolean;
    clearForm?: boolean;
    forceSync?: boolean;
    iframe?: boolean;
    iframeSrc?: string;
    iframeTarget?: any;
    replaceTarget?: boolean;
    resetForm?: boolean;
    semantic?: boolean;
    target?: any;
    uploadProgress?: (event: ProgressEvent, position: number, total: number, percentComplete: number) => void;
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
