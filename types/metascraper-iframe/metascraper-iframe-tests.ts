import metascraper from "metascraper";
import metascraperIframe = require("metascraper-iframe");

const html = "example";
const url = "https://example.org";

metascraper([metascraperIframe()])({ html, url }).then(data => {
    data;
});
