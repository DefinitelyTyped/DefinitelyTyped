
import * as xmldom from 'xmldom';

var doc = new xmldom.DOMParser().parseFromString(
  '<xml xmlns="a" xmlns:c="./lite">\n'+
  '\t<child>test</child>\n'+
  '\t<child></child>\n'+
  '\t<child/>\n'+
  '</xml>'
  ,'text/xml');
doc.documentElement.setAttribute('x','y');
doc.documentElement.setAttributeNS('./lite','c:x','y2');
var nsAttr = doc.documentElement.getAttributeNS('./lite','x');
console.info(nsAttr);
console.info(doc);

function callback(w: any) {

}

//errorHandler is supported
new xmldom.DOMParser({
  /**
   * locator is always need for error position info
   */
  locator:{},
  /**
   * you can override the errorHandler for xml parser
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  errorHandler:{warning:function(w: any){console.warn(w)},error:callback,fatalError:callback}
  //only callback model
  //errorHandler:function(level,msg){console.log(level,msg)}
});


// XMLSerializer provides serializeToString method
new xmldom.XMLSerializer().serializeToString(doc) == "string";
new xmldom.XMLSerializer().serializeToString(doc.documentElement) == "string";
