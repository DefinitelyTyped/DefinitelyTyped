/// <reference types="ejs"/>

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(value: T): T;

// $ExpectType PromiseConstructorLike | undefined
ejs.promiseImpl;

// $ExpectType () => void
ejs.clearCache;

// $ExpectType Cache
ejs.cache;

// $ExpectType string | undefined
ejs.delimiter;

expectType<{
    (template: string, opts: ejs.Options & { async: true; client?: false }): ejs.AsyncTemplateFunction;
    (template: string, opts: ejs.Options & { async: true; client: true }): ejs.AsyncClientFunction;
    (template: string, opts?: ejs.Options & { async?: false; client?: false }): ejs.TemplateFunction;
    (template: string, opts?: ejs.Options & { async?: false; client: true }): ejs.ClientFunction;
    (template: string, opts?: ejs.Options): ejs.AsyncTemplateFunction | ejs.TemplateFunction;
}>(ejs.compile);

expectType<{
    (template: string, data?: ejs.Data, opts?: ejs.Options & { async: false }): string;
    (template: string, data: ejs.Data, opts: ejs.Options & { async: true }): Promise<string>;
    (template: string, data: ejs.Data, opts: ejs.Options & { async?: undefined }): string;
    (template: string, data?: ejs.Data, opts?: ejs.Options): string | Promise<string>;
}>(ejs.render);

expectType<{
    <T>(path: string, cb: ejs.RenderFileCallback<T>): T;
    <T>(path: string, data: ejs.Data, cb: ejs.RenderFileCallback<T>): T;
    <T>(path: string, data: ejs.Data, opts: ejs.Options, cb: ejs.RenderFileCallback<T>): T;
    (path: string, data?: ejs.Data, opts?: ejs.Options): Promise<string>;
}>(ejs.renderFile);

// https://github.com/mde/ejs#options
const renderOptions: ejs.Options = {
    beautify: true,
    filename: './index.ejs',
};
