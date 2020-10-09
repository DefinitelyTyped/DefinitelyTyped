import type {
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    PreloadedEntryPoint,
    GetEntryPointComponentFromEntryPoint,
    GetEntryPointParamsFromEntryPointRepresentation,
} from './EntryPointTypes';

export function loadEntryPoint<TEntryPoint>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
    entryPointParams: GetEntryPointParamsFromEntryPointRepresentation<TEntryPoint>,
): PreloadedEntryPoint<GetEntryPointComponentFromEntryPoint<TEntryPoint>>;
