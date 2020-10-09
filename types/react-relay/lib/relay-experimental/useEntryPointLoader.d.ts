import type {
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    PreloadedEntryPoint,
    GetEntryPointComponentFromEntryPoint,
} from './EntryPointTypes';
import type { InternalEntryPointRepresentation } from './EntryPointTypes';

type UseEntryPointLoaderHookType<TEntryPoint> = [
    PreloadedEntryPoint<GetEntryPointComponentFromEntryPoint<TEntryPoint>> | null | undefined,
    (
        entryPointParams: TEntryPoint extends InternalEntryPointRepresentation<infer P, any, any, any, any> ? P : never,
    ) => void,
    () => void,
];

export function useEntryPointLoader<TEntryPoint>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
): UseEntryPointLoaderHookType<TEntryPoint>;
