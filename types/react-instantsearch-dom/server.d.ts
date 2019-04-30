import * as React from 'react';

/**
 * Creates a specialized root InstantSearch component. It accepts
 * an algolia client and a specification of the root Element.
 * @param defaultAlgoliaClient - a function that builds an Algolia client
 * @returns an InstantSearch root
 */
export function createInstantSearch(
  defaultAlgoliaClient?: (appId: string, apiKey: string, options: { _useRequestCache: boolean }) => object
): {
  InstantSearch: React.ComponentClass<any>;
  findResultsState(App: React.ComponentType<any>, props: any): Promise<any>
};
