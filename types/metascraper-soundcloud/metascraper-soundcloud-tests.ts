import metascraper from "metascraper";
import metascraperSoundcloud = require("metascraper-soundcloud");

const html = "example";
const url = "https://example.org";

metascraper([metascraperSoundcloud()])({ html, url }).then(data => {
    data;
});
