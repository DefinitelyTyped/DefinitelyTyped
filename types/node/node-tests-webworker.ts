// Currently, all of the DOM-specific tests target APIs that are also available in WebWorkers.
// If this changes, and it's necessary to create a WebWorker-specific test script, then the import should be updated here.
import "./node-tests/events-dom";
import "./node-tests/globals-dom";
import "./node-tests/perf_hooks-dom";
