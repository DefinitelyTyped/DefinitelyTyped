import metascraper from "metascraper";
import metascraperYoutube = require("metascraper-youtube");

const html = "example";
const url = "https://example.org";

metascraper([metascraperYoutube()])({ html, url }).then(data => {
    data;
});
