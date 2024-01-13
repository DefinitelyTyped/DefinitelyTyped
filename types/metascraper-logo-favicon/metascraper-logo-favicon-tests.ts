import metascraper from "metascraper";
import metascraperLogoFavicon = require("metascraper-logo-favicon");

const html = "example";
const url = "https://example.org";

const pickFn: metascraperLogoFavicon.PickFunction = (sizes, pickDefault) => {
    const appleTouchIcon = sizes.find(item => item.rel && item.rel.includes("apple"));
    return appleTouchIcon || pickDefault(sizes);
};

const options: metascraperLogoFavicon.Options = {
    pickFn,
    gotOpts: {
        timeout: 10000,
    },
};

metascraper([metascraperLogoFavicon()])({ html, url }).then(data => {
    data;
});

metascraper([metascraperLogoFavicon(options)])({ html, url }).then(data => {
    data;
});
