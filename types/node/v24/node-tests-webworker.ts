// Currently, all of the DOM-specific tests target APIs that are also available in WebWorkers.
// If this changes, and it's necessary to create a WebWorker-specific test script, then the import should be updated here.
import "./test/events-dom";
import "./test/globals-dom";
import "./test/perf_hooks-dom";
