import type { ReactElement } from 'react';
import type { EntryPointComponent, PreloadedEntryPoint } from './EntryPointTypes';

type GetComponentFromPreloadedEntryPoint<T> = T extends PreloadedEntryPoint<infer C> ? C : never;
type GetRuntimePropsFromComponent<T> = T extends EntryPointComponent<any, any, infer R, any> ? R : never;

export function EntryPointContainer<
    TPreloadedEntryPoint extends PreloadedEntryPoint<any>,
    TEntryPointComponent extends GetComponentFromPreloadedEntryPoint<TPreloadedEntryPoint>,
    TRuntimeProps extends GetRuntimePropsFromComponent<TEntryPointComponent>
>({
    entryPointReference,
    props,
}: Readonly<{
    entryPointReference: TPreloadedEntryPoint;
    props: TRuntimeProps;
}>): ReactElement;
