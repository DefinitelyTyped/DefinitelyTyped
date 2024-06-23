import woothee = require("woothee");

const parseResult = woothee.parse(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7.2; en; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 11.52",
);

parseResult.category; // $ExpectType string
parseResult.name; // $ExpectType string
parseResult.version; // $ExpectType string
parseResult.os; // $ExpectType string
parseResult.vendor; // $ExpectType string
parseResult.os_version; // $ExpectType string

woothee.isCrawler("('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)'"); // $ExpectType boolean

woothee.VERSION; // $ExpectType string
