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

    saxStream.on("text", text => {
        // $ExpectType string
        text;
    });

    saxStream.on("doctype", doctype => {
        // $ExpectType string
        doctype;
    });

    saxStream.on("processinginstruction", node => {
        // $ExpectType { name: string; body: string; }
        node;
    });

    saxStream.on("opentag", tag => {
        // $ExpectType Tag | QualifiedTag
        tag;
    });

    saxStream.on("closetag", tagName => {
        // $ExpectType string
        tagName;
    });

    saxStream.on("attribute", attr => {
        // $ExpectType { name: string; value: string; }
        attr;
    });

    saxStream.on("comment", comment => {
        // $ExpectType string
        comment;
    });

    saxStream.on("cdata", cdata => {
        // $ExpectType string
        cdata;
    });

    saxStream.on("opennamespace", ns => {
        // $ExpectType { prefix: string; uri: string; }
        ns;
    });

    saxStream.on("closenamespace", ns => {
        // $ExpectType { prefix: string; uri: string; }
        ns;
    });

    saxStream.on("script", script => {
        // $ExpectType string
        script;
    });

    saxStream.on("error", error => {
        // $ExpectType Error
        error;

        this._parser.error = null;
        this._parser.resume();
    });

    saxStream.on("pipe", src => {
        // $ExpectType Readable
        src;
    });

    saxStream.on("unpipe", src => {
        // $ExpectType Readable
        src;
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
