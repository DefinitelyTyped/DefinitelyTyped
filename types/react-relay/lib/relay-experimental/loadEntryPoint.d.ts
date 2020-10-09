import type {
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    InternalEntryPointRepresentation,
    PreloadedEntryPoint,
    GetEntryPointComponentFromEntryPoint,
} from './EntryPointTypes';

export function loadEntryPoint<TEntryPoint>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
    entryPointParams: TEntryPoint extends InternalEntryPointRepresentation<infer P, any, any, any, any> ? P : never,
): PreloadedEntryPoint<GetEntryPointComponentFromEntryPoint<TEntryPoint>>;
