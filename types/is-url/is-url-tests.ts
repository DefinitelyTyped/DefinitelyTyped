
import isUrl = require('is-url');

var isValid0: boolean = isUrl('https://github.com/segmentio/is-url');
var isValid1: boolean = isUrl('hogepiyo');
var isValid2: boolean = isUrl('');
var isValid3: boolean = isUrl(undefined);
