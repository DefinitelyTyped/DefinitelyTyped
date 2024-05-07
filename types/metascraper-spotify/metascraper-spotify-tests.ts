import metascraper from "metascraper";
import metascraperSpotify = require("metascraper-spotify");

const html = "example";
const url = "https://example.org";

metascraper([metascraperSpotify()])({ html, url }).then(data => {
    data;
});
