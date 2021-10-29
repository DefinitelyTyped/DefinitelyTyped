import * as React from 'react';
import { InstantSearchProps } from 'react-instantsearch-core';

export function findResultsState<TProps>(
    App: React.ComponentType<TProps & InstantSearchProps>,
    props: TProps & InstantSearchProps,
): Promise<InstantSearchProps['resultsState']>;
