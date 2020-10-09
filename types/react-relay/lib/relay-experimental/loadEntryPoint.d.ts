import type {
    EntryPoint,
    EntryPointComponent,
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    PreloadedEntryPoint,
} from './EntryPointTypes';

export function loadEntryPoint<
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
): PreloadedEntryPoint<TEntryPointComponent>;
