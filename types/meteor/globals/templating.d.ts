declare var Template: TemplateStatic & {
    [index: string]: any | Blaze.Template;
};

declare interface TemplateStatic<D = Record<string, any>, T = Blaze.TemplateInstance<D>>
    extends Blaze.TemplateStatic<D, T> {
    new (viewName?: string, renderFunction?: Function): Blaze.Template;
    body: Blaze.Template;
}

/**
 * A helper type to make the access to data and template instance member type safe.
 * @example
 * const TemplateTyped = Template as TemplateStaticTyped<
 *     { foo: string },
 *     'newTemplate',
 *     {
 *         state: ReactiveDict<{ bar: number }>;
 *         getFooBar(): string;
 *     }
 * >;
 * TemplateTyped.newTemplate.onCreated(function () { ...
 * @template D Data
 * @template N Template name
 * @template T Template interface with custom properties and methods that extends the template instance
 */
declare type TemplateStaticTyped<
    D extends Record<string, any>,
    N extends string,
    T extends Record<string, unknown>,
> = TemplateStatic<D, T & Blaze.TemplateInstance<D>> &
    {
        [key in N]: Blaze.Template<D, T & Blaze.TemplateInstance<D>>;
    };
