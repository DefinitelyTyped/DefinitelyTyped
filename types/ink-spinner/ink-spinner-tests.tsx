import React from 'react';
import Spinner from 'ink-spinner';
// NOTE: `import Spinner = require('ink-spinner');` will work as well.
// If importing using ES6 default import as above,
// `allowSyntheticDefaultImports` flag in compiler options needs to be set to `true`

const Demo = () => {
    return <Spinner type="line" />;
};
