import cheerio = require("cheerio");
import cheerioTableParser = require("cheerio-tableparser");

const $ = cheerio.load("<table><tr><td>1</td></tr></table>");
cheerioTableParser($);

const table1: string[][] = $("table").parsetable();
const table2: string[][] = $("table").parsetable(true, true, true);
