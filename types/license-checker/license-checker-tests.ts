// From README.md:

import * as checker from 'license-checker';

checker.init({
    start: '/path/to/start/looking'
}, (err: Error, json: checker.ModuleInfos): void => {
    if (err) {
        // Handle error
    } else {
        // The sorted json data
    }
});
