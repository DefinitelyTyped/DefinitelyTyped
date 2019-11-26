// Type definitions for react-instantsearch-native 5.3
// Project: https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react, https://community.algolia.com/react-instantsearch
// Definitions by: Gordon Burgett <https://github.com/gburgett>
//                 Justin Powell <https://github.com/jpowell>
//                 Haroen Viaene <https://github.com/haroenv>
//                 Samuel Vaillant <https://github.com/samouss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';

// Core
export { createConnector } from 'react-instantsearch-core';
export { HIGHLIGHT_TAGS } from 'react-instantsearch-core';
export { translatable } from 'react-instantsearch-core';

// Widget
export { Configure } from 'react-instantsearch-core';

// Connectors
export { connectAutoComplete } from 'react-instantsearch-core';
export { connectBreadcrumb } from 'react-instantsearch-core';
export { connectConfigure } from 'react-instantsearch-core';
export { connectCurrentRefinements } from 'react-instantsearch-core';
export { connectGeoSearch } from 'react-instantsearch-core';
export { connectHierarchicalMenu } from 'react-instantsearch-core';
export { connectHighlight } from 'react-instantsearch-core';
export { connectHits } from 'react-instantsearch-core';
export { connectHitsPerPage } from 'react-instantsearch-core';
export { connectInfiniteHits } from 'react-instantsearch-core';
export { connectMenu } from 'react-instantsearch-core';
export { connectNumericMenu } from 'react-instantsearch-core';
export { connectPagination } from 'react-instantsearch-core';
export { connectPoweredBy } from 'react-instantsearch-core';
export { connectRange } from 'react-instantsearch-core';
export { connectRefinementList } from 'react-instantsearch-core';
export { connectScrollTo } from 'react-instantsearch-core';
export { connectSearchBox } from 'react-instantsearch-core';
export { connectSortBy } from 'react-instantsearch-core';
export { connectStateResults } from 'react-instantsearch-core';
export { connectStats } from 'react-instantsearch-core';
export { connectToggleRefinement } from 'react-instantsearch-core';

// Native
interface InstantSearchBaseProps {
    indexName: string;
    createURL?: (...args: any[]) => any;
    searchState?: any;
    refresh?: boolean;
    onSearchStateChange?: (...args: any[]) => any;
    onSearchParameters?: (...args: any[]) => any;
    resultsState?: any;
    root?: {
        Root: string | ((...args: any[]) => any);
        props: any;
    };
}

export interface UsingSearchClientProps extends InstantSearchBaseProps {
    searchClient: any;
}

export interface UsingManualInfoProps extends InstantSearchBaseProps {
    apiKey: string;
    appId: string;
    algoliaClient?: any;
}

export type InstantSearchProps = UsingSearchClientProps | UsingManualInfoProps;
/**
 * <InstantSearch> is the root component of all React InstantSearch implementations. It provides all the connected components (aka widgets) a means to interact with the searchState.
 *
 * https://community.algolia.com/react-instantsearch/widgets/%3CInstantSearch%3E.html
 */
export class InstantSearch extends React.Component<InstantSearchProps> {}

export class Index extends React.Component<any> {}
