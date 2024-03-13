import metascraper from "metascraper";
import metascraperAudio = require("metascraper-audio");

const html = "example";
const url = "https://example.org";

metascraper([metascraperAudio()])({ html, url }).then(data => {
    data;
});
