import metascraper from "metascraper";
import metascraperShopping = require("@samirrayani/metascraper-shopping");

const html = "example";
const url = "https://example.org";

metascraper([metascraperShopping()])({ html, url });
