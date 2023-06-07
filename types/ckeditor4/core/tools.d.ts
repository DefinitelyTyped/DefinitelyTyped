declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly tools: {
            readonly array: tools.array;
            readonly color: tools.colorConstructor;
            readonly object: tools._object;
            readonly promise: PromiseConstructor;
            readonly style: {
                readonly parse: tools.style.parse;
                readonly border: tools.style.borderConstructor;
            };
        } & tools;
    }
    interface tools {
        addFunction(fn: () => unknown, scope?: unknown): number;

        arrayCompare(arrayA: unknown[], arrayB: unknown[]): boolean;

        clone(source: { [key: string]: unknown }): {
            [key: string]: unknown;
        };

        copy(source: { [key: string]: unknown }): {
            [key: string]: unknown;
        };

        createClass(definition: {
            $?: (...args: any[]) => unknown;
            base?: abstract new (...args: any[]) => any;
            privates?: { [name: string]: (...args: any[]) => unknown };
            proto?: { [name: string]: (...args: any[]) => unknown };
            statics?: { [name: string]: (...args: any[]) => unknown };
        }): (...args: any[]) => unknown;

        cssStyleToDomStyle(cssName: string): string;

        cssVendorPrefix(property: string, value: string, asString?: boolean): { [cssClass: string]: string | number };

        defer(fn: () => void): void;

        enableHtml5Elements(doc: Document | DocumentFragment, withAppend?: boolean): void;

        escapeCss(selector: string): string;

        eventsBuffer(
            minInterval: number,
            output: () => void,
            scopeObj: unknown,
        ): { input: () => void; reset: () => void };

        extend(
            target: { [key: string]: unknown },
            source: { [key: string]: unknown },
            overwrite: boolean,
            properties: { [key: string]: unknown },
        ): { [key: string]: unknown };

        fixDomain(): boolean;

        genKey(subKey: string): string;

        getCookie(name: string): string;

        getCsrfToken(): string;

        getIndex<T>(array: T[], compareFunction: (element: T) => boolean): number;

        getMouseButton(evt: dom.event<Event | EventTarget>): boolean;

        getNextId(): string;

        getNextNumber(): number;

        getUniqueId(): string;

        htmlDecode(text: string): string;

        htmlDecodeAttr(text: string): string;

        htmlEncode(text: string): string;

        htmlEncodeAttr(text: string): string;

        indexOf<T>(array: T[], value: T | ((el: T) => boolean)): number;

        isArray(object: unknown): object is unknown[];

        isEmpty(object: { [key: string]: unknown }): boolean;

        keystrokeToArray(lang: { [key: string]: unknown }, keystroke: number): { display: string[]; aria: string[] };

        keystrokeToString(lang: { [key: string]: unknown }, keystroke: number): { display: string; aria: string };

        ltrim(str: string): string;

        normalizeCssText(styleText: string, nativeNormalize: boolean): string;

        normalizeHex(styleText: string): string;

        objectCompare(left: { [key: string]: unknown }, right: { [key: string]: unknown }, onlyLef?: boolean): boolean;

        objectKeys(obj: { [key: string]: unknown }): string[];

        override<T extends (...args: any[]) => any>(
            originalFunction: T,
            functionBuilder: (originalFunction: T) => T,
        ): T;

        parseCssText(styleText: string, normalize?: boolean, nativeNormalize?: boolean): { [key: string]: unknown };

        prototypedCopy(source: { [key: string]: unknown }): {
            [key: string]: unknown;
        };

        removeFunction(ref: number): void;

        repeat(str: string, times: number): string;

        rtrim(str: string): string;

        search<T>(array: T[], value: T | ((element: T) => boolean)): T;

        setCookie(name: string, value: string): void;

        setTimeout(
            func: (...args: unknown[]) => void,
            milliseconds?: number,
            scope?: { [key: string]: unknown },
            args?: unknown,
            ownerWindow?: Window,
        ): number;

        transformPlainTextToHtml(text: string, etnerMode: number): string;

        trim(str: string): string;

        tryThese(...fn: Array<(...args: unknown[]) => unknown>): unknown;

        writeCssText(styles: { [key: string]: unknown }, sort?: boolean): string;
    }

    namespace tools {
        interface array {
            every<T>(
                array: T[],
                fn: (value: T, index: number, array: T[]) => boolean,
                thisArg?: { [key: string]: unknown },
            ): boolean;

            filter<T>(
                array: T[],
                fn: (value: T, index: number, array: T[]) => boolean,
                thisArg?: { [key: string]: unknown },
            ): T[];

            forEach<T>(
                array: T[],
                fn: (value: T, index: number, array: T[]) => void,
                thisArg?: { [key: string]: unknown },
            ): void;

            isArray(object: unknown): boolean;

            map<T, K>(array: T[], fn: (value: T) => K, thisArg?: { [key: string]: unknown }): K[];

            reduce<T, K>(
                array: T[],
                fn: (accumulator: K, a: T, index: number, array: T[]) => K,
                initial: K,
                thisArg?: { [key: string]: unknown },
            ): K;
        }

        interface colorConstructor {
            new (): color;
            namedColors: { [colorName: string]: string };
        }

        interface color {
            getHex(): string;

            getHexWithAlpha(): string;

            getHsl(): string;

            getHsla(): string;

            getInitialValue(): string;

            getRgb(): string;

            getRgba(): string;
        }

        interface _object {
            findKey(obj: { [key: string]: unknown }, value: unknown): string;

            merge(obj1: { [key: string]: unknown }, obj2: { [key: string]: unknown }): { [key: string]: unknown };
        }

        namespace style {
            interface parse {
                background(value: string): {
                    color: string;
                    unprocessed: string;
                };

                border(value: string): {
                    width: string;
                    style: string;
                    color: string;
                };

                margin(value: string): {
                    top: number;
                    right: number;
                    bottom: number;
                    left: number;
                };
            }

            interface borderConstructor {
                new (props: { color: string; style: string; width: string }): border;

                fromCssRule(value: string): border;

                splitCssValues(
                    styles: borderShorthand,
                    fallback?: {
                        color?: string;
                        style?: string;
                        width?: string;
                    },
                ): borderStyle;
            }

            interface borderShorthand {
                'border-color'?: string;
                'border-style'?: string;
                'border-width'?: string;
            }

            interface borderStyle {
                'border-top': border;
                'border-right': border;
                'border-bottom': border;
                'border-left': border;
            }

            interface border {
                color: string;
                style: string;
                width: string;
            }
        }
    }
}
