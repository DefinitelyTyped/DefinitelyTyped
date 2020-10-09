import {
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    PreloadedEntryPoint,
    GetEntryPointComponentFromEntryPoint,
    GetEntryPointParamsFromEntryPoint,
} from './EntryPointTypes';

export function loadEntryPoint<TEntryPoint>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
    entryPointParams: GetEntryPointParamsFromEntryPoint<TEntryPoint>,
): PreloadedEntryPoint<GetEntryPointComponentFromEntryPoint<TEntryPoint>>;
