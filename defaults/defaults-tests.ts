/// <reference path="defaults.d.ts" />

import defaults = require('defaults');

defaults({}, {user: 'developer', locale: 'fr-FR'});
defaults(undefined, 'hello world');
