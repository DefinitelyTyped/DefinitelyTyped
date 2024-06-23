import metascraper from "metascraper";
import metascraperLogo = require("metascraper-logo");

const html = "example";
const url = "https://example.org";

metascraper([metascraperLogo()])({ html, url }).then(data => {
    data;
});
