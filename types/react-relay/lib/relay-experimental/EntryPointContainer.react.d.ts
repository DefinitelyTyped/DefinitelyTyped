import { ReactElement } from 'react';
import { EntryPointComponent, PreloadedEntryPoint } from './EntryPointTypes';

type GetComponentFromPreloadedEntryPoint<T> = T extends PreloadedEntryPoint<infer C> ? C : never;
type GetRuntimePropsFromComponent<T> = T extends EntryPointComponent<any, any, infer R, any> ? R : never;

export function EntryPointContainer<TPreloadedEntryPoint extends PreloadedEntryPoint<any>>({
    entryPointReference,
    props,
}: Readonly<{
    entryPointReference: TPreloadedEntryPoint;
    props: GetRuntimePropsFromComponent<GetComponentFromPreloadedEntryPoint<TPreloadedEntryPoint>>;
}>): ReactElement;

export {};
