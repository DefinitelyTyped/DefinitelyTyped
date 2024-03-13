import metascraper from "metascraper";
import metascraperAuthor = require("metascraper-author");

const html = "example";
const url = "https://example.org";

metascraper([metascraperAuthor()])({ html, url }).then(data => {
    data;
});
