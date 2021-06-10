import { UrlParser } from 'url-params-parser';

// $ExpectType UrlParserResult
const urlParser = UrlParser(
    'https://address.com/employees/show/1234/developer/reports/asc',
    '/employees/show/:id/:title/reports/:order',
);

urlParser.host; // $ExpectType string
urlParser.hostname; // $ExpectType string
urlParser.namedParams; // $ExpectType { [key: string]: string; }
urlParser.namedParamsKeys; // $ExpectType string[]
urlParser.namedParamsValues; // $ExpectType string[]
urlParser.pathNames; // $ExpectType string[]
urlParser.pathname; // $ExpectType string
urlParser.port; // $ExpectType string
urlParser.protocol; // $ExpectType string
urlParser.queryParams; // $ExpectType { [key: string]: string; }
urlParser.queryParamsKeys; // $ExpectType string[]
urlParser.queryParamsValues; // $ExpectType string[]
