import type { ReactElement } from 'react';
import type { PreloadedEntryPoint } from './EntryPointTypes';

export function EntryPointContainer<TEntryPointParams, TEntryPointComponent, TRuntimeProps>({
    entryPointReference,
    props,
}: Readonly<{
    entryPointReference: PreloadedEntryPoint<TEntryPointComponent>;
    props: TRuntimeProps;
}>): ReactElement;
