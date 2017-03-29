import * as parser from 'xml2json';

var xml = "<foo attr=\"value\">bar</foo>";

// xml to json
var jsonString: string = parser.toJson(xml);

// json to xml
var xml: string = parser.toXml(jsonString);

// xml to json in object mode and JsonOptions
var jsonObject: {} = parser.toJson(xml, {
    object: true,
    reversible: false,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false
});

// json to xml with XmlOptions
var xml: string = parser.toXml(jsonObject, {
    sanitize: true
});
