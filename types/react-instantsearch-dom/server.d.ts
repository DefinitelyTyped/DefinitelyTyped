import * as React from 'react';
import { InstantSearchProps } from 'react-instantsearch-core';

export function findResultsState(
    App: React.ComponentType<Pick<InstantSearchProps, 'widgetsCollector'> & Record<string, any>>,
    props: Pick<InstantSearchProps, 'searchClient' | 'indexName'> & Record<string, any>,
): Promise<InstantSearchProps['resultsState']>;
