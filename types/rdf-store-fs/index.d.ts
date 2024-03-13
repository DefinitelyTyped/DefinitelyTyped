import FlatMultiFileStore = require("./FlatMultiFileStore");
import MultiFileStore = require("./MultiFileStore");

declare const Export: {
    FlatMultiFileStore: typeof FlatMultiFileStore;
    MultiFileStore: typeof MultiFileStore;
};

export = Export;
