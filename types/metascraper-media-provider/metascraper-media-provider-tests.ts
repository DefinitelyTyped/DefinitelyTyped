import metascraper from "metascraper";
import metascraperMediaProvider = require("metascraper-media-provider");

const html = "example";
const url = "https://example.org";

const getProxy: metascraperMediaProvider.GetProxyFunction = data => {
    return data.url;
};

const onError: metascraperMediaProvider.OnErrorFunction = (url, error) => {
    url; // $ExpectType string
    error; // $ExpectType Error
};

const options: metascraperMediaProvider.Options = {
    cacheDir: "/tmp/cache",
    getProxy,
    onError,
    timeout: 10000,
    userAgent: "MyUserAgent 1.0",
};

metascraper([metascraperMediaProvider()])({ html, url }).then(data => {
    data;
});

metascraper([metascraperMediaProvider(options)])({ html, url }).then(data => {
    data;
});
