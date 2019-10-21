import * as JXON from 'jxon';
import { DOMParser } from 'xmldom';

// test data
const defaultConfig = {
    valueKey: 'keyValue',
    attrPrefix: '_',
    parseValues: true
};
const xmlString = "<root></root>";
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'application/xml');

// tests
JXON.config(defaultConfig);

JXON.stringToJs('xmlString');

JXON.jsToString(defaultConfig);
JXON.jsToString(defaultConfig, '1', 'true', defaultConfig);
JXON.stringify(defaultConfig);
JXON.stringify(defaultConfig, '1', 'true', defaultConfig);

JXON.stringToXml('');

JXON.xmlToJs(xmlDoc, 1, true, true);
JXON.build(xmlDoc, 1, true, true);

JXON.jsToXml({}, '', '', {});
JXON.unbuild({}, '', '', {});

JXON.xmlToString(xmlDoc);

JXON.each({}, (arg) => arg, '');
