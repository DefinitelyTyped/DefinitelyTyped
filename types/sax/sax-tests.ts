import sax = require("sax");
import fs = require("fs");

(function xmlnsTests() {
    let opts: sax.SAXOptions = {
        lowercase: true,
        normalize: true,
        xmlns: true,
        position: true
    };

    let parser = sax.parser(/*strict=*/true, opts);

    parser.ENTITIES["foo"] = "bar";

    parser.onerror = (e: Error) => {};

    parser.ontext = (text: string) => {};

    parser.onopentag = (tag: sax.QualifiedTag) => {
        let prefix: string = tag.prefix;
        let local: string = tag.local;
        let uri: string = tag.uri;
        let name: string = tag.name;
        let isSelfClosing: boolean = tag.isSelfClosing;

        let attr: sax.QualifiedAttribute = tag.attributes["name"];
        if (attr) {
            let attrPrefix: string = attr.prefix;
            let attrLocal: string = attr.local;
            let attrUri: string = attr.uri;
            let attrName: string = attr.name;
            let attrValue: string = attr.value;
        }
    };

    parser.onattribute = (attr: { name: string; value: string; }) => {};

    parser.onend = () => {};

    parser.write("<xml>Hello, <who name=\"world\">world</who>!</xml>").close();

    let saxStream = sax.createStream(/*strict=*/true, opts);

    saxStream.on("error", (e: Error) => {
        this._parser.error = null;
        this._parser.resume();
    });

    fs.createReadStream("file.xml")
        .pipe(saxStream)
        .pipe(fs.createWriteStream("file-copy.xml"));
})();

(function noXmlnsTests() {
    let opts: sax.SAXOptions = {
        lowercase: true,
        normalize: true,
        xmlns: false,
        position: true
    };

    let parser = sax.parser(/*strict=*/true, opts);

    parser.onerror = (e: Error) => {};

    parser.ontext = (text: string) => {};

    parser.onopentag = (tag: sax.Tag) => {
        let name: string = tag.name;
        let isSelfClosing: boolean = tag.isSelfClosing;
        let attrValue: string = tag.attributes["name"];
    };

    parser.onattribute = (attr: { name: string; value: string; }) => {};

    parser.onend = () => {};

    parser.write("<xml>Hello, <who name=\"world\">world</who>!</xml>").close();
})();
