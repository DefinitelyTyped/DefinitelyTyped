import { Index, Document } from 'flexsearch';

import {
    INDEX_EN_DATA,
    INDEX_JA_DATA,
    INDEX_REPLACE_EN_DATA,
    DOCUMENT_DATA,
    DOCUMENT_REPLACE_DATA,
    TestDocument,
} from './data';

// 1. Index search

// 1.1 Sync operations

// 1.1.1 Build index
// Document:
// * https://github.com/nextapps-de/flexsearch#create-a-new-index
const indexForSyncTest = new Index('performance');

// 1.1.2 Add or append data
// Document:
// * https://github.com/nextapps-de/flexsearch#add-text-item-to-an-index
// * https://github.com/nextapps-de/flexsearch#append-contents
INDEX_EN_DATA.map((x, id) => indexForSyncTest.add(id, x));
INDEX_JA_DATA.map((x, id) => indexForSyncTest.append(id, x));

// 1.1.3 Search items
// Document:
// * https://github.com/nextapps-de/flexsearch#search-items
indexForSyncTest.search('no');
indexForSyncTest.search('no', 1);
indexForSyncTest.search('no', {
    limit: 1
});
indexForSyncTest.search({
    query: 'no',
    limit: 1
});

// 1.1.4 Contains index
// Document:
// * https://github.com/nextapps-de/flexsearch#check-existence-of-already-indexed-ids
indexForSyncTest.contain(0);
indexForSyncTest.contain(12);

// 1.1.5 Update and remove
// Document:
// * https://github.com/nextapps-de/flexsearch#update-item-from-an-index
indexForSyncTest.update(0, INDEX_REPLACE_EN_DATA);
indexForSyncTest.remove(1);

// 1.2 Async operations

// 1.2.1 Build index
// Document:
// * https://github.com/nextapps-de/flexsearch#create-a-new-index
const indexForAsyncTest = new Index({
    preset: 'memory',
    tokenize: 'forward',
    resolution: 5,
});

// 1.2.1 Add or append data
// Document:
// * https://github.com/nextapps-de/flexsearch#async
// * https://github.com/nextapps-de/flexsearch#append-contents
INDEX_EN_DATA.map((x, id) => indexForAsyncTest.addAsync(id, x));
INDEX_JA_DATA.map((x, id) => indexForAsyncTest.appendAsync(id, x));

// 1.2.2 Search items
// Document:
// * https://github.com/nextapps-de/flexsearch#async
indexForSyncTest.searchAsync('no');
indexForSyncTest.searchAsync('no', 1);
indexForSyncTest.searchAsync('no', {
    limit: 1
});
indexForSyncTest.searchAsync({
    query: 'no',
    limit: 1
});

// 1.2.3 Update and remove
// Document:
// * https://github.com/nextapps-de/flexsearch#update-item-from-an-index
indexForSyncTest.updateAsync(0, INDEX_REPLACE_EN_DATA);
indexForSyncTest.removeAsync(1);

// 2. Document Search

// 2.1 Sync Operation

// 2.1.1 Build index
// Document:
// * https://github.com/nextapps-de/flexsearch#the-document-descriptor
const documentForSyncTest = new Document(
    {
        document: {
            id: 'id',
            index: ['title', 'performer'],
        },
    },
    {} as unknown as TestDocument,
);

// 2.1.2 Add, update or remove data
// Document:
// * https://github.com/nextapps-de/flexsearch#addupdateremove-documents-tofrom-the-index
DOCUMENT_DATA.map((x, id) => documentForSyncTest.add(id, x));
documentForSyncTest.update(0, DOCUMENT_REPLACE_DATA);
documentForSyncTest.remove(0);

// 2.1.3 Search items
// Document:
// * https://github.com/nextapps-de/flexsearch#search-items
documentForSyncTest.search('no');
documentForSyncTest.search('no', 1);
documentForSyncTest.search('no', ['title']);
documentForSyncTest.search('no', { index: 'title' });

// 2.2 ASync Operation

// 2.2.1 Build index
// Document:
// * https://github.com/nextapps-de/flexsearch#the-document-descriptor
const documentForAsyncTest = new Document(
    {
        document: {
            id: 'id',
            index: ['title', 'performer'],
        },
    },
    {} as unknown as TestDocument,
);

// 2.2.2 Add, update or remove data
// Document:
// * https://github.com/nextapps-de/flexsearch#async
DOCUMENT_DATA.map((x, id) => documentForAsyncTest.addAsync(id, x));
documentForAsyncTest.updateAsync(0, DOCUMENT_REPLACE_DATA);
documentForAsyncTest.removeAsync(0);

// 2.2.3 Search items
// Document:
// * https://github.com/nextapps-de/flexsearch#async
documentForAsyncTest.searchAsync('no');
documentForAsyncTest.searchAsync('no', 1);
documentForAsyncTest.searchAsync('no', ['title']);
documentForAsyncTest.searchAsync('no', { index: 'title' });
