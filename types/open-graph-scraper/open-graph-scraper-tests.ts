import openGraphScraper = require("open-graph-scraper");

const options: openGraphScraper.Options = {
    encoding: null,
    url: "http://ogp.me/",
    timeout: 200,
};

openGraphScraper(options, (error, results, response) => {
    error; // $ExpectType boolean
    results; // $ExpectType SuccessResult | ErrorResult
    response; // $ExpectType PassThrough
});

openGraphScraper(options).then(data => {
    if (!data.error) {
        const { error, result, response } = data;
        error; // $ExpectType false
        result; // $ExpectType OpenGraphProperties & { ogImage?: OpenGraphImage | OpenGraphImage[] | undefined; success: true; }
        response; // $ExpectType PassThrough
        result.ogUrl; // $ExpectType string | undefined
        result.modifiedTime; // $ExpectType string | undefined
        result.customValue; // $ExpectType string | undefined
    } else {
        const { error, result } = data;
        error; // $ExpectType true
        result; // $ExpectType { error: string; errorDetails: Error; success: false; }
        result.errorDetails; // $ExpectType Error
    }
});
