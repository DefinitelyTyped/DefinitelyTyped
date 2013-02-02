// Type definitions for jQuery.form.js 3.26.0-2013.01.28
// Project: http://malsup.com/jquery/form/
// Definitions by: François Guillot <http://fguillot.developpez.com/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../jquery/jquery.d.ts"/>

interface JQueryFormOptions extends JQueryAjaxSettings {
    beforeSerialize?: ($form: JQuery, options: JQueryFormOptions) => bool;
    beforeSubmit?: (formData: any[], $form: JQuery, options: JQueryFormOptions) => bool;
    clearForm?: bool;
    forceSync?: bool;
    iframe?: bool;
    iframeSrc?: string;
    iframeTarget?: any;
    replaceTarget?: bool;
    resetForm?: bool;
    semantic?: bool;
    target?: any;
    uploadProgress?: (event: ProgressEvent, position: number, total: number, percentComplete: number) => void;
}

interface JQueryForm {
    (callback?: Function): JQuery;
    (options?: JQueryFormOptions): JQuery;
}

interface JQueryFormWithDebug extends JQueryForm {
    debug: bool;
}

interface JQueryStatic {
    fieldValue(element: Element, successful?: bool): string;
}

interface JQuery {
    ajaxForm: JQueryForm;
    ajaxSubmit: JQueryFormWithDebug;
    formSerialize(): string;
    fieldSerialize(): string;
    fieldValue(successful?: bool): string[];
    resetForm(): JQuery;
    clearForm(): JQuery;
    clearFields(): JQuery;
    ajaxFormUnbind: () => JQuery;
    formToArray: (semantic?: bool, elements?: Element[]) => any[];
    enable: (enable?: bool) => JQuery;
    selected: (select?: bool) => JQuery;
}