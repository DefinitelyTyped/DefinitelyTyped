import openGraphScraper = require('open-graph-scraper');

const options: openGraphScraper.Options = {
    encoding: null,
    url: 'http://ogp.me/',
    timeout: 200,
};

openGraphScraper(options, (error, results, response) => {
    error; // $expectType boolean
    results; // $expectType SuccessResult | ErrorResult
    response; // $expectType PassThrough
});

openGraphScraper(options).then(data => {
    if (!data.error) {
        const { error, result, response } = data;
        error; // $expectType false
        result; // $expectType SuccessResult
        response; // $expectType PassThrough
    } else {
        const { error, result } = data;
        error; // $expectType true
        result; // $expectType ErrorResult
    }
});
