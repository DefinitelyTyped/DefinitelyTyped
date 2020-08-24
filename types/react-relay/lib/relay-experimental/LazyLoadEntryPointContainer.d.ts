import { EntryPoint, EntryPointComponent, EnvironmentProviderOptions, IEnvironmentProvider } from './EntryPointTypes';

export type EntryPointContainerProps<
    TEntryPointParams,
    TPreloadedQueries,
    TPreloadedEntryPoints,
    TRuntimeProps,
    TExtraProps
> = Readonly<
    Readonly<{
        entryPoint: EntryPoint<
            TEntryPointParams,
            EntryPointComponent<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>
        >;
        entryPointParams: TEntryPointParams;
        environmentProvider?: IEnvironmentProvider<EnvironmentProviderOptions>;
        props: TRuntimeProps;
    }>
>;

export function LazyLoadEntryPointContainer<
    TEntryPointParams extends {},
    TPreloadedQueries extends {},
    TPreloadedEntryPoints extends {},
    TRuntimeProps extends {},
    TExtraProps
>({
    entryPoint,
    entryPointParams,
    props,
    environmentProvider,
}: EntryPointContainerProps<
    // tslint:disable-next-line no-unnecessary-generics
    TEntryPointParams,
    // tslint:disable-next-line no-unnecessary-generics
    TPreloadedQueries,
    // tslint:disable-next-line no-unnecessary-generics
    TPreloadedEntryPoints,
    // tslint:disable-next-line no-unnecessary-generics
    TRuntimeProps,
    // tslint:disable-next-line no-unnecessary-generics
    TExtraProps
>): JSX.Element;
