/* =================== USAGE ===================
    import * as textVersion from "textversionjs";
 =============================================== */

declare function textversionjs(html: string, styleConfig?: textversionjs.styleConfig): string;

declare namespace textversionjs {
    type linkProcess = (href: string, linkText: string) => string;

    type imgProcess = (src: string, alt: string) => string;

    interface styleConfig {
        linkProcess?: linkProcess | undefined;
        imgProcess?: imgProcess | undefined;
        headingStyle?: "underline" | "linebreak" | "hashify" | undefined;
        listStyle?: "indentation" | "linebreak" | undefined;
        uIndentionChar?: string | undefined;
        oIndentionChar?: string | undefined;
        listIndentionTabs?: number | undefined;
        keepNbsps?: boolean | undefined;
    }
}

export = textversionjs;
