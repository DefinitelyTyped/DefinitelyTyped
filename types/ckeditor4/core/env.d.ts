declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly env: env;
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_env.html */
    interface env {
        air: boolean;
        chrome: boolean;
        cssClass: string;
        edge: boolean;
        gecko: boolean;
        hc: boolean;
        hidpi: boolean;
        iOS: boolean;
        ie: boolean;
        isCompatible: boolean;
        mac: boolean;
        needsBrFiller: boolean;
        needsNbspFiller: boolean;
        quirks: boolean;
        safari: boolean;
        version: number;
        webkit: boolean;

        secure(): boolean;
    }
}
