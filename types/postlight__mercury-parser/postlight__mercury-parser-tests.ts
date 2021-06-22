import * as Mercury from '@postlight/mercury-parser';

const url = "https://en.wikipedia.org/wiki/Thunder_(mascot)";

// Example 1 from readme
Mercury.parse(url).then(result => console.log(result));

// Example 2 from readme
Mercury.parse(url, { contentType: 'markdown' }).then(result => console.log(result));

// Example 3 from readme
Mercury.parse(url, {
    headers: {
        Cookie: 'name=value; name2=value2; name3=value3',
        'User-Agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    },
}).then(result => console.log(result));

// Example 4 from readme
Mercury.parse(url, {
    html:
        '<html><body><article><h1>Thunder (mascot)</h1><p>Thunder is the stage name for the horse who is the official live animal mascot for the Denver Broncos</p></article></body></html>',
}).then(result => console.log(result));
