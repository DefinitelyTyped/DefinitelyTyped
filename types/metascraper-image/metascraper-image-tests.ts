import metascraper from "metascraper";
import metascraperImage = require("metascraper-image");

const html = "example";
const url = "https://example.org";

metascraper([metascraperImage()])({ html, url }).then(data => {
    data;
});
