import type {
    EntryPoint,
    EntryPointComponent,
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    PreloadedEntryPoint,
} from './EntryPointTypes';

type UseLoadEntryPointHookType<
    TEntryPointParams extends {},
    TPreloadedQueries extends {},
    TPreloadedEntryPoints extends {},
    TRuntimeProps extends {},
    TExtraProps,
    TEntryPointComponent extends EntryPointComponent<any>
> = [PreloadedEntryPoint<TEntryPointComponent> | null | undefined, (params: TEntryPointParams) => void, () => void];

export function useEntryPointLoader<
    TEntryPointParams extends {},
    TPreloadedQueries extends {},
    TPreloadedEntryPoints extends {},
    TRuntimeProps extends {},
    TExtraProps,
    TEntryPointComponent extends EntryPointComponent<any>,
    TEntryPoint extends EntryPoint<TEntryPointParams, TEntryPointComponent>
>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
): UseLoadEntryPointHookType<
    TEntryPointParams,
    TPreloadedQueries,
    TPreloadedEntryPoints,
    TRuntimeProps,
    TExtraProps,
    TEntryPointComponent
>;
