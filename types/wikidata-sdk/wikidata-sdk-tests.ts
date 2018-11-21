import {
    searchEntities,
    getEntities,
    WikidataProperty,
    UrlResultFormat,
    getManyEntities,
    getReverseClaims,
    sparqlQuery
} from "wikidata-sdk";

// ############################## //
// Search entities                //
// ############################## //

const search = "Ingmar Bergman";
const language = "fr"; // will default to 'en'
const limit = 10; // defaults to 20
let format: UrlResultFormat = "json"; // defaults to json

searchEntities(search, language, limit, format);

searchEntities({
    search: "Ingmar Bergman",
    format: "xml",
    language: "sv"
});

const uselang = "eo";
searchEntities(search, language, limit, format, uselang);

searchEntities({
    search: "Ingmar Bergman",
    language: "sv",
    uselang: "eo"
});

// ############################## //
// Get entities                   //
// ############################## //

const ids = "Q571"; // could also be several ids as an array: ['Q1', 'Q5', 'Q571']
const props: WikidataProperty[] = ["info", "claims"]; // returns all data if not specified
format = "xml"; // defaults to json
getEntities(ids, ["en", "fr", "de"], props, format);

getEntities({
    ids: ["Q1", "Q5", "Q571"],
    languages: ["en", "fr", "de"], // returns all languages if not specified
    props: ["info", "claims"], // returns all data if not specified
    format: "xml" // defaults to json
});

getManyEntities(["Q1", "Q2", "Q3", "Q123"]);

getManyEntities({
    ids: ["Q1", "Q2", "Q3", "Q123"],
    languages: ["en", "fr", "de"],
    props: ["info", "claims"],
    format: "json"
});

// ############################## //
// Get reverse claim              //
// ############################## //

getReverseClaims("P50", "Q7243");

getReverseClaims("P212", "978-0-465-06710-7");

getReverseClaims(["P50", "P110"], "Q281411");

getReverseClaims("P212", ["978-0-465-06710-7", "978-2-267-02700-6"]);

getReverseClaims("P50", "Q535", { limit: 10, keepProperties: true, caseInsensitive: true });

// ############################## //
// SPARQL query                   //
// ############################## //

const authorQid = "Q535";
const sparql = `
SELECT ?work ?date WHERE {
  ?work wdt:P50 wd:${authorQid} .
  OPTIONAL {
    ?work wdt:P577 ?date .
  }
}
`;
sparqlQuery(sparql);
