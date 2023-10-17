import metascraper from "metascraper";
import metascraperUrl = require("metascraper-url");

const html = "example";
const url = "https://example.org";

metascraper([metascraperUrl()])({ html, url }).then(data => {
    data;
});
