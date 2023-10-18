/// <reference types="jquery" />

interface JQueryLeanModalOption {
    top?: number | undefined;
    overlay?: number | undefined;
    closeButton?: String | undefined;
}

interface JQueryStatic {
    leanModal(): JQuery;
    leanModal(val: JQueryLeanModalOption): JQuery;
}

interface JQuery {
    leanModal(): JQuery;
    leanModal(val: JQueryLeanModalOption): JQuery;
}
