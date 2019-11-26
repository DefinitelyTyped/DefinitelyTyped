import * as accept from 'accept';

accept.charsets("iso-8859-5, unicode-1-1;q=0.8"); // charset === "iso-8859-5"
accept.charset("iso-8859-5, unicode-1-1;q=0.8", ["unicode-1-1"]); // charset === "unicode-1-1"

accept.encoding("gzip, deflate, sdch"); // encoding === "gzip"
accept.encoding("gzip, deflate, sdch", ["deflate", "identity"]);

const encodings = accept.encodings("compress;q=0.5, gzip;q=1.0"); // encodings === ["gzip", "compress", "identity"]
encodings.lastIndexOf('');

accept.language("en;q=0.7, en-GB;q=0.8");
accept.language("en;q=0.7, en-GB;q=0.8", ["en-gb"]); // language === "en-GB"
const languages = accept.languages("da, en;q=0.7, en-GB;q=0.8"); // languages === ["da", "en-GB", "en"]
languages.lastIndexOf('');

accept.mediaType("text/plain, application/json;q=0.5, text/html, */*;q=0.1");
accept.mediaType("text/plain, application/json;q=0.5, text/html, */*;q=0.1", ["application/json", "text/html"]);
const mediaTypes = accept.mediaTypes("text/plain, application/json;q=0.5, text/html, */*;q=0.1");
// mediaTypes === ["text/plain", "text/html", "application/json", "*/*"]
mediaTypes.lastIndexOf('');
const headers = {
    accept: 'text/plain, application/json;q=0.5, text/html, */*;q=0.1',
    'accept-language': 'da, en;q=0.7, en-GB;q=0.8'
};

const all = accept.parseAll(headers);
all.charsets.length;
all.encodings.length;
all.languages.length;
all.mediaTypes.length;
