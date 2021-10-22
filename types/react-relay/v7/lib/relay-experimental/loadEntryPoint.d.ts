import { EnvironmentProviderOptions, IEnvironmentProvider, PreloadedEntryPoint } from './EntryPointTypes';
import { GetEntryPointComponentFromEntryPoint, GetEntryPointParamsFromEntryPoint } from './helpers';

export function loadEntryPoint<TEntryPoint>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
    entryPointParams: GetEntryPointParamsFromEntryPoint<TEntryPoint>,
): PreloadedEntryPoint<GetEntryPointComponentFromEntryPoint<TEntryPoint>>;
