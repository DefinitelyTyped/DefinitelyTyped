import {
    EntryPoint,
    EntryPointComponent,
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    PreloadedEntryPoint,
} from './EntryPointTypes';

export function prepareEntryPoint<
    TEntryPointParams extends {},
    TPreloadedQueries extends {},
    TPreloadedEntryPoints extends {},
    TRuntimeProps extends {},
    TExtraProps,
    TEntryPointComponent extends EntryPointComponent<
        // tslint:disable-next-line no-unnecessary-generics
        TPreloadedQueries,
        // tslint:disable-next-line no-unnecessary-generics
        TPreloadedEntryPoints,
        // tslint:disable-next-line no-unnecessary-generics
        TRuntimeProps,
        // tslint:disable-next-line no-unnecessary-generics
        TExtraProps
    >,
    // tslint:disable-next-line no-unnecessary-generics
    TEntryPoint extends EntryPoint<TEntryPointParams, TEntryPointComponent>
>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    // tslint:disable-next-line no-unnecessary-generics
    entryPoint: TEntryPoint,
    entryPointParams: TEntryPointParams,
): PreloadedEntryPoint<TEntryPointComponent>;
