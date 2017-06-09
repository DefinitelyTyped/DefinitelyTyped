import * as warning from "warning";

// this will pass without warning.
warning(true, 'Warning, read all about it');

// these will cause a warning.
warning(false, 'Some other warning');
warning(0, 'Some other warning');
warning('', 'Some other warning');

// handle extra variables.
warning(true, 'Warning, read all about it', 37, {}, 'hello');

