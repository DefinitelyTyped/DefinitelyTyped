// Type definitions for convert-layout 0.5
// Project: https://github.com/ai/convert-layout#readme
// Definitions by: Mikhail Aksenov <https://github.com/xeningem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
declare var layouts: { [id: string]: layout };
declare var lang_layout: layout;

declare const convert_layout: {
    by: layout;
    de: layout;
    es: layout;
    he: layout;
    kk: layout;
    ru: layout;
    uk: layout;
};

declare module "convert-layout" {
    export = convert_layout;
}

declare module "convert-layout/by" {
    export = lang_layout;
}

declare module "convert-layout/de" {
    export = lang_layout;
}

declare module "convert-layout/es" {
    export = lang_layout;
}

declare module "convert-layout/he" {
    export = lang_layout;
}

declare module "convert-layout/kk" {
    export = lang_layout;
}

declare module "convert-layout/ru" {
    export = lang_layout;
}

declare module "convert-layout/uk" {
    export = lang_layout;
}

interface layout {
    toEn(s: string): string;
    fromEn(s: string): string;
}
