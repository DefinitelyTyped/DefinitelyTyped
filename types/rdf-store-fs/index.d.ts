// Type definitions for rdf-store-fs 1.1
// Project: https://github.com/rdf-ext/rdf-store-fs
// Definitions by: tpluscode <https://github.com/tpluscode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import FlatMultiFileStore = require('./FlatMultiFileStore');
import MultiFileStore = require('./MultiFileStore');

declare const Export: {
    FlatMultiFileStore: typeof FlatMultiFileStore,
    MultiFileStore: typeof MultiFileStore
};

export = Export;
