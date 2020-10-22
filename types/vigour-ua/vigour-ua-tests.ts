import ua = require('vigour-ua');

const userAgent =
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.80 Safari/537.3';

const someObject = {
    randomField: true,
};

ua(userAgent, someObject);
ua(userAgent);
