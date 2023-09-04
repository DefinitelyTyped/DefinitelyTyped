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
            readonly buffers: {
                readonly event: {
                    new(
                        minInterval: number,
                        output: (...args: any[]) => void,
                        contextObj?: object,
                    ): tools.buffers.event;
                };
                readonly throttle: {
                    new(
                        minInterval: number,
                        output: (...args: any[]) => void,
                        contextObj?: object,
                    ): tools.buffers.throttle;
                };
            };
        } & tools;
    }
    interface tools {
        addFunction(fn: () => unknown, scope?: unknown): number;

        arrayCompare(arrayA: unknown[], arrayB: unknown[]): boolean;

        bind(func: (...args: any[]) => void, obj: object, args: unknown[]): (...args: any[]) => void;

        buildStyleHtml(css: string | string[]): string;

        buildTableMap(
            table: dom.element,
            startRow?: number,
            startCell?: number,
            endRow?: number,
            endCell?: number,
        ): void;

        callFunction(ref: number, params?: unknown[]): unknown;

        capitalize(str: string, keepCase?: boolean): string;

        /**
         * @version 4.4.0
         */
        checkIfAnyArrayItemMatches(arr: unknown[], regexp: RegExp): boolean;

        /**
         * @version 4.4.0
         */
        checkIfAnyObjectPropertyMatches(obj: object, regexp: RegExp): boolean;

        clone(source: { [key: string]: unknown }): {
            [key: string]: unknown;
        };

        /**
         * @version 4.1.0
         */
        convertArrayToObject(arr: unknown[], fillwith?: unknown): object;

        /**
         * @version 4.8.0
         */
        convertBytesToBase64(bytesArray: number[]): string;

        /**
         * @version 4.8.0
         */
        convertHexStringToBytes(hexString: string): number[];

        convertRgbToHex(styleText: string): string;

        convertToPx(cssLength: string): number | string;

        /**
         * @version 4.1.0
         */
        copy(source: { [key: string]: unknown }): {
            [key: string]: unknown;
        };

        createClass(definition: {
            $?: (...args: any[]) => unknown;
            base?: abstract new(...args: any[]) => any;
            privates?: { [name: string]: (...args: any[]) => unknown };
            proto?: { [name: string]: (...args: any[]) => unknown };
            statics?: { [name: string]: (...args: any[]) => unknown };
        }): (...args: any[]) => unknown;

        cssStyleToDomStyle(cssName: string): string;

        cssVendorPrefix(property: string, value: string, asString?: boolean): { [cssClass: string]: string | number };

        debounce(func: () => unknown, milliseconds?: number): () => unknown;

        defer(fn: () => unknown): () => void;

        /**
         * @version 4.3.0
         */
        enableHtml5Elements(doc: Document | DocumentFragment, withAppend?: boolean): void;

        /**
         * @version 4.5.10
         */
        escapeCss(selector: string): string;

        /**
         * @version 4.2.1
         */
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

        /**
         * @version 4.1.2
         */
        fixDomain(): boolean;

        genKey(subKey: string): string;

        /**
         * @version 4.10.0
         */
        getAbsoluteRectPosition(window: dom.window, rect: dom.rect): dom.rect;

        /**
         * @version 4.5.6
         */
        getCookie(name: string): string;

        /**
         * @version 4.5.6
         */
        getCsrfToken(): string;

        /**
         * @version 4.5.0
         */
        getIndex<T>(array: T[], compareFunction: (element: T) => boolean): number;

        /**
         * @version 4.7.3
         */
        getMouseButton(evt: dom.event<Event | EventTarget>): boolean;

        getNextId(): string;

        getNextNumber(): number;

        /**
         * @version 4.15.0
         */
        getStyledSpans(property: string, source: dom.element): dom.element[];

        getUniqueId(): string;

        htmlDecode(text: string): string;

        htmlDecodeAttr(text: string): string;

        htmlEncode(text: string): string;

        htmlEncodeAttr(text: string): string;

        indexOf<T>(array: T[], value: T | ((el: T) => boolean)): number;

        isArray(object: unknown): object is unknown[];

        isEmpty(object: { [key: string]: unknown }): boolean;

        /**
         * @version 4.8.0
         */
        keystrokeToArray(lang: { [key: string]: unknown }, keystroke: number): { display: string[]; aria: string[] };

        /**
         * @version 4.8.0
         */
        keystrokeToString(lang: { [key: string]: unknown }, keystroke: number): { display: string; aria: string };

        ltrim(str: string): string;

        normalizeCssText(styleText: string, nativeNormalize: boolean): string;

        /**
         * @deprecated 4.16.0
         */
        normalizeHex(styleText: string): string;

        /**
         * @version 4.13.0
         */
        normalizeMouseButton(button: number, reverse?: boolean): number;

        /**
         * @version 4.1.0
         */
        objectCompare(left: { [key: string]: unknown }, right: { [key: string]: unknown }, onlyLef?: boolean): boolean;

        /**
         * @deprecated 4.12.0
         */
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

        /**
         * @version 4.5.6
         * @param name
         * @param value
         */
        setCookie(name: string, value: string): void;

        setTimeout(
            func: (...args: unknown[]) => void,
            milliseconds?: number,
            scope?: { [key: string]: unknown },
            args?: unknown,
            ownerWindow?: Window,
        ): number;

        /**
         * @version 4.10.0
         */
        throttle(minInterval: number, output: () => void, contextObject?: unknown): tools.buffers.throttle;

        /**
         * @version 4.5.0
         */
        transformPlainTextToHtml(text: string, enterMode: number): string;

        trim(str: string): string;

        tryThese(...fn: Array<(...args: unknown[]) => unknown>): unknown;

        /**
         * @version 4.1.0
         */
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
            new(): color;
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
                new(props: { color: string; style: string; width: string }): border;

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
                "border-color"?: string;
                "border-style"?: string;
                "border-width"?: string;
            }

            interface borderStyle {
                "border-top": border;
                "border-right": border;
                "border-bottom": border;
                "border-left": border;
            }

            interface border {
                color: string;
                style: string;
                width: string;
            }
        }

        namespace buffers {
            interface event {
                input(): void;
                reset(): void;
            }

            interface throttle extends event {
                input(...args: any[]): void;
            }
        }
    }
}
