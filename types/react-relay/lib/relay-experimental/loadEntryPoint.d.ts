import type {
    EntryPointComponent,
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    InternalEntryPointRepresentation,
    PreloadedEntryPoint,
} from './EntryPointTypes';

export function loadEntryPoint<TEntryPoint>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
    entryPointParams: TEntryPoint extends InternalEntryPointRepresentation<infer P, _, _, _, _> ? P : never,
): PreloadedEntryPoint<
    TEntryPoint extends InternalEntryPointRepresentation<
        infer TEntryPointParams,
        infer TPreloadedQueries,
        infer TPreloadedEntryPoints,
        infer TRuntimeProps,
        infer TExtraProps
    >
        ? EntryPointComponent<TPreloadedQueries, TPreloadedEntryPoints, TRuntimeProps, TExtraProps>
        : never
>;
