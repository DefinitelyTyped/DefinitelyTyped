type IdObj = {
    readonly [Key: string]: string;
} & {
    readonly __esModule: false;
};

/**
 * An identity object using ES6 proxies. Useful for mocking webpack imports. For instance, you can
 * tell Jest to mock this object as imported
 * [CSS modules](https://github.com/css-modules/css-modules); then all your `className` lookups on
 * the imported `styles` object will be returned as-is.
 */
declare const idObj: IdObj;

export = idObj;
