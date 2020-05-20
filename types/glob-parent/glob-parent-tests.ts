import globParent = require('glob-parent');

// $ExpectType string
globParent('*.js');

globParent('*.js', {});
globParent('*.js', { flipBackslashes: false });

const options: globParent.Options = {
    flipBackslashes: false
};
