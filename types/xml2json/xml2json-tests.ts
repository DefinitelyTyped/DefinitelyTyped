import * as parser from 'xml2json';

let xml = "<foo attr=\"value\">bar</foo>";

// xml to json
const jsonString: string = parser.toJson(xml);

// json to xml
xml = parser.toXml(jsonString);

// xml to json in object mode and JsonOptions
const jsonObject: {} = parser.toJson(xml, {
    object: true,
    reversible: false,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false
});

// json to xml with XmlOptions
xml = parser.toXml(jsonObject, {
    sanitize: true
});
