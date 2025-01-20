import metascraper from "metascraper";
import metascraperAddress = require("metascraper-address");

const html = "example";
const url = "https://example.org";

metascraper([metascraperAddress()])({ html, url }).then(data => {
    data;
});
