import type { ComponentProps, ReactElement } from 'react';
import type {
    EntryPoint,
    EntryPointComponent,
    EnvironmentProviderOptions,
    IEnvironmentProvider,
} from './EntryPointTypes';

type EntryPointContainerProps<
    TEntryPointParams,
    TPreloadedQueries,
    TPreloadedEntryPoints,
    TRuntimeProps,
    TExtraProps
> = Readonly<{
    entryPoint: EntryPoint<
        TEntryPointParams,
        EntryPointComponent<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>
    >;
    entryPointParams: TEntryPointParams;
    environmentProvider?: IEnvironmentProvider<EnvironmentProviderOptions>;
    props: TRuntimeProps;
}>;

export function LazyLoadEntryPointContainer_DEPRECATED<
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
    TEntryPointParams,
    TPreloadedQueries,
    TPreloadedEntryPoints,
    TRuntimeProps,
    TExtraProps
>): ReactElement<
    ComponentProps<EntryPointComponent<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>>
>;
