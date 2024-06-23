import metascraper from "metascraper";
import metascraperDescription = require("metascraper-description");

const html = "example";
const url = "https://example.org";

const options: metascraperDescription.Options = {
    truncateLength: 150,
};

metascraper([metascraperDescription()])({ html, url }).then(data => {
    data;
});

metascraper([metascraperDescription(options)])({ html, url }).then(data => {
    data;
});
