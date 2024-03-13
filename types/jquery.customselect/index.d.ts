/// <reference types="jquery" />

interface JQueryCustomSelectOption {
    customClass?: string | undefined;
    mapClass?: boolean | undefined;
    mapStyle?: boolean | undefined;
}

interface JQuery {
    customSelect(val: JQueryCustomSelectOption): JQuery;
}
