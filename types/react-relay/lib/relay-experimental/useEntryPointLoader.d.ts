import {
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    PreloadedEntryPoint,
    GetEntryPointComponentFromEntryPoint,
    GetEntryPointParamsFromEntryPoint,
} from './EntryPointTypes';

export type UseEntryPointLoaderHookType<TEntryPoint> = [
    PreloadedEntryPoint<GetEntryPointComponentFromEntryPoint<TEntryPoint>> | null | undefined,
    (entryPointParams: GetEntryPointParamsFromEntryPoint<TEntryPoint>) => void,
    () => void,
];

export function useEntryPointLoader<TEntryPoint>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
): UseEntryPointLoaderHookType<TEntryPoint>;
