/// <reference types="windows-script-host" />

let htmlfile = new ActiveXObject('htmlfile');
let htmldoc = htmlfile.createDocumentFromUrl('https://msdn.microsoft.com/en-us/library/aa741317(v=vs.85).aspx', 'null');
let length = htmldoc.all.length;
for (let i = 0; i < length; i++) {
    WScript.Echo((htmldoc.all.item(i) as MSHTML.IHTMLElement).tagName);
}
