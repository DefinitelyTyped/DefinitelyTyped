import validate = require('schema-utils');

validate('path/to/file.json', {loader: 'options'}, 'Demo loader');
validate({type: 'object'}, {loader: 'options'}, 'Demo loader');
