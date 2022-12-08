declare namespace CKEDITOR {
    interface CKEditorStatic {
        env: env
    }

    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_env.html */
    class env {
        air: boolean
        chrome: boolean
        cssClass: string
        edge: boolean
        gecko: boolean
        hc: boolean
        hidpi: boolean
        iOS: boolean
        ie: boolean
        isCompatible: boolean
        mac: boolean
        needsBrFiller: boolean
        needsNbspFiller: boolean
        quirks: boolean
        safari: boolean
        version: number
        webkit: boolean

        private constructor()


        secure(): boolean
    }
}
