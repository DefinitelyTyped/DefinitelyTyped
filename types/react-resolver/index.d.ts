import { ComponentType, Factory, FunctionComponent } from "react";

export interface Resolver {
    resolve<P>(
        factory: Factory<P>,
    ): Promise<{
        data: any;
        Resolved: FunctionComponent<P>;
    }>;

    render(factory: Factory<any>, root: Node | null): void;
}

export const Resolver: Resolver;

export type ResolveFn<Props, V> = (props: Props) => Promise<V>;

/** Use this for gaining access to a context as a prop without the boilerplate of setting `contextTypes`. */
export function context<K extends string>(
    prop: K,
): <OwnProps>(
    component: ComponentType<OwnProps>,
) => FunctionComponent<OwnProps & Record<K, any>>;

/**
 * Use `@client(LoaderComponent)` (or `client(LoaderComponent)(YourComponent)`)
 * for when you want to skip server-side rendering of part of your view and
 * perform it only on the client.
 */
export function client(
    loadingComponent: ComponentType<any>,
): <OwnProps>(
    component: ComponentType<OwnProps>,
) => FunctionComponent<OwnProps>;

export function resolve<
    OwnProps,
    K extends string,
    V,
    MoreProps = { [x: string]: any },
>(
    prop: K,
    resolveFn: ResolveFn<OwnProps & MoreProps, V>,
): (
    component: ComponentType<OwnProps & { [C in K]: V }>,
) => FunctionComponent<OwnProps & MoreProps>;

export function resolve<
    OwnProps,
    ResolvableProps = { [x: string]: any },
    MoreProps = { [x: string]: any },
>(
    resolversMap: {
        [K in keyof ResolvableProps]: ResolveFn<
            OwnProps & MoreProps,
            ResolvableProps[K]
        >;
    },
): (
    component: ComponentType<
        OwnProps & { [K in keyof ResolvableProps]?: ResolvableProps[K] }
    >,
) => FunctionComponent<OwnProps & MoreProps>;
