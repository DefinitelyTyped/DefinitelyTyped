import * as parser from 'xml2json';

let xml = '<foo attr="value">bar</foo>';

// xml to json
const jsonString: string = parser.toJson(xml);

// json to xml
xml = parser.toXml(jsonString);

// xml to json in object mode and JsonOptions
const jsonObject: { [key: string]: unknown } = parser.toJson(xml, {
    object: true,
    reversible: false,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false,
});

const a = parser.toJson(xml, { object: true }) as { [key: string]: string };
const b = parser.toJson(xml, { object: true }) as { [key: string]: number };

// json to xml with XmlOptions
xml = parser.toXml(jsonObject, {
    sanitize: true,
});

// Test `alternateTextNode`.
parser.toJson(xml, { alternateTextNode: true });
parser.toJson(xml, { alternateTextNode: 'value' });
