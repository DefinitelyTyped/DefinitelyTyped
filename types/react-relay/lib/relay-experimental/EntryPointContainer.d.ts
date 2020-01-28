/* tslint:disable:no-unnecessary-generics */

import { ElementType, ClassicElement } from 'react';

import { EntryPointComponent, PreloadedEntryPoint } from './EntryPointTypes';

export function EntryPointContainer<
    TPreloadedQueries extends {},
    TPreloadedNestedEntryPoints extends {},
    TRuntimeProps extends {},
    TExtraProps,
    TEntryPointComponent extends EntryPointComponent<
        TPreloadedQueries,
        TPreloadedNestedEntryPoints,
        TRuntimeProps,
        TExtraProps
    >
>({
    entryPointReference,
    props,
}: Readonly<{
    entryPointReference: PreloadedEntryPoint<TEntryPointComponent>;
    props: TRuntimeProps;
}>): ClassicElement<ElementType>;
