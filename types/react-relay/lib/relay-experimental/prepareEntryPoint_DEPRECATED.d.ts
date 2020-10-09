import type {
    EntryPoint,
    EntryPointComponent,
    EnvironmentProviderOptions,
    IEnvironmentProvider,
} from './EntryPointTypes';

export function prepareEntryPoint_DEPRECATED<
    TEntryPointParams extends {},
    TPreloadedQueries extends {},
    TPreloadedEntryPoints extends {},
    TRuntimeProps extends {},
    TExtraProps,
    TEntryPointComponent extends EntryPointComponent<
        TPreloadedQueries,
        TPreloadedEntryPoints,
        TRuntimeProps,
        TExtraProps
    >,
    TEntryPoint extends EntryPoint<TEntryPointParams, TEntryPointComponent>
>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
    entryPointParams: TEntryPointParams,
): void;
