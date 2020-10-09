import type { ComponentProps, ReactElement } from 'react';
import type { EntryPointComponent, PreloadedEntryPoint } from './EntryPointTypes';

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
}>): ReactElement<ComponentProps<TEntryPointComponent>>;
