import type {
    EntryPoint,
    EntryPointComponent,
    EnvironmentProviderOptions,
    IEnvironmentProvider,
    PreloadedEntryPoint,
} from './EntryPointTypes';

export function loadEntryPoint<TEntryPointComponent extends EntryPointComponent<any>, TEntryPointParams = {}>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: EntryPoint<TEntryPointParams, TEntryPointComponent>,
    entryPointParams: TEntryPointParams,
): PreloadedEntryPoint<TEntryPointComponent>;
