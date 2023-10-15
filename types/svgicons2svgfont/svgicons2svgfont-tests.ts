import { Metadata, MetadataProvider } from "svgicons2svgfont";
import SVGIcons2SVGFontStream = require("svgicons2svgfont");
import defaultMetadataProvider = require("svgicons2svgfont/src/metadata");

// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream();
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({});
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ fontName: "testfont" });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ fontName: "testfont", fontId: "testId" });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ fontStyle: "italic" });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ fontWeight: "normal" });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ fixedWidth: true });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ centerHorizontally: true });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ centerVertically: true });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ normalize: true });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ fontHeight: 100 });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ round: 10e13 });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ descent: 10 });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ ascent: 10 });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({ metadata: "test metadata" });
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({
    log: (message: string) => console.log(message),
});
// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({
    metadataProvider: defaultMetadataProvider({
        prependUnicode: false,
        log: (message: string) => console.log(message),
    }),
});

const customProvider: MetadataProvider = () => (file: string, cb: (err: any, metadata?: Metadata) => void) => {
    if (!file) {
        cb(new Error("wrong path"));
        return;
    }
    cb(null, {
        name: file,
        path: file,
        renamed: false,
        unicode: [],
    });
};

// $ExpectType SVGIcons2SVGFontStream
new SVGIcons2SVGFontStream({
    metadataProvider: customProvider,
});
