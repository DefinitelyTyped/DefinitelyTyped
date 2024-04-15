/// <reference types="jquery" />

declare namespace JQuerySuccinct {
    interface Options {
        size?: number | undefined;
        omission?: string | undefined;
        ignore?: boolean | undefined;
    }
}

interface JQuery {
    succinct(settings?: JQuerySuccinct.Options): JQuery;
}
