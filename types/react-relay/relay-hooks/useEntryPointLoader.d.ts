import { DisposeFn } from 'relay-runtime';
import { EnvironmentProviderOptions, IEnvironmentProvider, PreloadedEntryPoint } from './EntryPointTypes';
import { GetEntryPointComponentFromEntryPoint, GetEntryPointParamsFromEntryPoint } from './helpers';

export type UseEntryPointLoaderHookType<TEntryPoint> = [
    PreloadedEntryPoint<GetEntryPointComponentFromEntryPoint<TEntryPoint>> | null | undefined,
    (entryPointParams: GetEntryPointParamsFromEntryPoint<TEntryPoint>) => void,
    DisposeFn,
];

export function useEntryPointLoader<TEntryPoint>(
    environmentProvider: IEnvironmentProvider<EnvironmentProviderOptions>,
    entryPoint: TEntryPoint,
    // Have opted to not include the TEST_ONLY__initialEntryPointData object here—as is FB internal
): UseEntryPointLoaderHookType<TEntryPoint>;
