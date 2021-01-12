import SearchApi, { INDEX_MODES } from 'js-worker-search';

let searchApi: SearchApi = new SearchApi();

// Try the constructor params
searchApi = new SearchApi({
    indexMode: INDEX_MODES.ALL_SUBSTRINGS,
});

searchApi = new SearchApi({
    indexMode: INDEX_MODES.EXACT_WORDS,
});

searchApi = new SearchApi({
    indexMode: INDEX_MODES.PREFIXES,
});

searchApi = new SearchApi({
    caseSensitive: true,
});

searchApi = new SearchApi({
    matchAnyToken: true,
});

searchApi = new SearchApi({
    tokenizePattern: /[a-z]/,
});

// Verify that indexDocument takes correct params
searchApi.indexDocument('uid', 'This is foo');

// And while we're at it, verify that searching returns a promise containing an array of strings

const promise: Promise<string[]> = searchApi.search('foo');
