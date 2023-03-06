import * as React from 'react';
import { InstantSearchProps } from 'react-instantsearch-core';

export function findResultsState<
  TProps extends Pick<InstantSearchProps, 'widgetsCollector' | 'searchClient' | 'indexName'>
>(App: React.ComponentType<TProps>, props: TProps): Promise<InstantSearchProps['resultsState']>;
