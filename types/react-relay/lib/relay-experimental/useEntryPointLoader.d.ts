import type {
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    PreloadedEntryPoint,
    GetEntryPointComponentFromEntryPoint,
    GetEntryPointParamsFromEntryPointRepresentation,
} from './EntryPointTypes';

type UseEntryPointLoaderHookType<TEntryPoint> = [
    PreloadedEntryPoint<GetEntryPointComponentFromEntryPoint<TEntryPoint>> | null | undefined,
    (entryPointParams: GetEntryPointParamsFromEntryPointRepresentation<TEntryPoint>) => void,
    () => void,
];

export function useEntryPointLoader<TEntryPoint>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
): UseEntryPointLoaderHookType<TEntryPoint>;
