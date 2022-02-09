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
): UseEntryPointLoaderHookType<TEntryPoint>;
