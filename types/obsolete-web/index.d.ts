// Type definitions for obsolete-web 0.5
// Project: https://github.elenet.me/fe/obsolete-webpack-plugin
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Obsolete {
    constructor(options?: Options);
    static defaultOptions: Readonly<Required<Options>>;
    /**
     * Test browser compatibility.
     */
    test(browsers: string[], done?: () => void): boolean;
}

interface Options {
    /**
     * The prompt html template injected to the bottom of body. The default value is:
     * ```html
     * <div>Your browser is not supported. <button id="obsoleteClose">&times;</button></div>
     * ```
     */
    template?: string;
    /**
     * If set 'afterbegin', the template will be injected into the start of body.
     * If set 'beforeend', the template will be injected into the end of body
     * @default 'afterbegin'
     */
    position?: 'afterbeing' | 'beforened';
    /**
     * If the current browser useragent doesn't match one of the target browsers, it's considered as unsupported.
     * Thus, the prompt will be shown.
     * @default false
     */
    promptOnNonTargetBrowser?: boolean;
    /**
     * If the current browser useragent is unknown, the prompt will be shown
     * @default true
     */
    promptOnUnknownBrowser?: boolean;
}

export as namespace Obsolete;

export = Obsolete;
