import metascraper = require("metascraper");

declare namespace getData {
    function isValidUrl(config: { url: string }): boolean;
}

declare function getData(): metascraper.Rules;

export = getData;
