
import * as xmltojson from 'xmltojson';

//Set options
var options: xmltojson.Options = {
    mergeCDATA: true,
    grokAttr: true,
    grokText: true,
    normalize: true,
    xmlns: true,
    namespaceKey: '_ns',
    textKey: '_text',
    valueKey: '_value',
    attrKey: '_attr',
    cdataKey: '_cdata',
    attrsAsObject: true,
    stripAttrPrefix: true,
    stripElemPrefix: true,
    childrenAsArray: true
}

//Validate parseString(xmlString, opt)
var xmlString: string = '<xml><a>It Works!</a></xml>';
var parsedXmlString: Object = xmltojson.parseString(xmlString, options);

console.log(JSON.stringify(parsedXmlString));

//Validate stringToXml(xmlString) and parseXml(oXMLParent, opt)
var oXMLParent: Document = xmltojson.stringToXml(xmlString);

console.log(oXMLParent.getElementsByName('a').item(0).textContent);

var parsedXmlString2: Object = xmltojson.parseXml(oXMLParent, options);

console.log(JSON.stringify(parsedXmlString2));
