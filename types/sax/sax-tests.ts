import sax = require("sax");
import fs = require("fs");

(function xmlnsTests() {
    const opts: sax.SAXOptions = {
        lowercase: true,
        normalize: true,
        xmlns: true,
        position: true
    };

    const parser = sax.parser(/*strict=*/true, opts);

    parser.ENTITIES["foo"] = "bar";

    parser.onerror = (e: Error) => {};

    parser.ontext = (text: string) => {};

    parser.onopentag = (tag: sax.QualifiedTag) => {
        const prefix: string = tag.prefix;
        const local: string = tag.local;
        const uri: string = tag.uri;
        const name: string = tag.name;
        const isSelfClosing: boolean = tag.isSelfClosing;

        const attr: sax.QualifiedAttribute = tag.attributes["name"];
        if (attr) {
            const attrPrefix: string = attr.prefix;
            const attrLocal: string = attr.local;
            const attrUri: string = attr.uri;
            const attrName: string = attr.name;
            const attrValue: string = attr.value;
        }
    };

    parser.onattribute = (attr: { name: string; value: string; }) => {};

    parser.onend = () => {};

    parser.write("<xml>Hello, <who name=\"world\">world</who>!</xml>").close();

    const saxStream = sax.createStream(/*strict=*/true, opts);

    saxStream.on("error", (e: Error) => {
        this._parser.error = null;
        this._parser.resume();
    });

    fs.createReadStream("file.xml")
        .pipe(saxStream)
        .pipe(fs.createWriteStream("file-copy.xml"));
})();

(function noXmlnsTests() {
    const opts: sax.SAXOptions = {
        lowercase: true,
        normalize: true,
        xmlns: false,
        position: true
    };

    const parser = sax.parser(/*strict=*/true, opts);

    parser.onerror = (e: Error) => {};

    parser.ontext = (text: string) => {};

    parser.onopentag = (tag: sax.Tag) => {
        const name: string = tag.name;
        const isSelfClosing: boolean = tag.isSelfClosing;
        const attrValue: string = tag.attributes["name"];
    };

    parser.onattribute = (attr: { name: string; value: string; }) => {};

    parser.onend = () => {};

    parser.write("<xml>Hello, <who name=\"world\">world</who>!</xml>").close();
})();
