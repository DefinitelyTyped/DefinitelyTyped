import parseDataUrl = require('parse-data-url');

const url = 'data:text/html,%3Ch1%3EHello%2C%20DefinitelyTyped!%3C%2Fh1%3E';

// $ExpectType false | DataUrl
parseDataUrl(url);
