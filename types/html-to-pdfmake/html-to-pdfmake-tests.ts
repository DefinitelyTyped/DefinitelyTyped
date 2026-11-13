import htmlToPdfmake from "html-to-pdfmake";
import { JSDOM } from "jsdom";
import { Content, TDocumentDefinitions } from "pdfmake/interfaces";

const html = `
<div>
  <h1>My title</h1>
  <p>
    This is a sentence with a <strong>bold word</strong>, <em>one in italic</em>,
    and <u>one with underline</u>. And finally <a href="https://www.somewhere.com">a link</a>.
  </p>
</div>
`;

export const validExample: Content = htmlToPdfmake(html, {
    defaultStyles: {
        b: { bold: true },
        strong: { bold: true },
        u: { decoration: "underline" },
        s: { decoration: "lineThrough" },
        em: { italics: true },
        i: { italics: true },
        h1: { fontSize: 24, bold: true /*marginBottom: 5*/ }, // marginBottom and marginLeft don't work at the moment but that seems to be an error in the pdfmake type
        h2: { fontSize: 22, bold: true /*marginBottom: 5*/ },
        h3: { fontSize: 20, bold: true /*marginBottom: 5*/ },
        h4: { fontSize: 18, bold: true /*marginBottom: 5*/ },
        h5: { fontSize: 16, bold: true /*marginBottom: 5*/ },
        h6: { fontSize: 14, bold: true /*marginBottom: 5*/ },
        a: { color: "blue", decoration: "underline" },
        strike: { decoration: "lineThrough" },
        p: { margin: [0, 5, 0, 10] },
        ul: {
            /*marginBottom: 5*/
        },
        li: {
            /*marginLeft: 5*/
        },
        table: {
            /*marginBottom: 5*/
        },
        th: { bold: true, fillColor: "#EEEEEE" },
    },
    removeExtraBlanks: true,
    collapseMargins: true,
    showHidden: true,
    removeTagClasses: true,
    ignoreStyles: ["font-family"],
    fontSizes: [1, 2, 3, 4, 5, 6, 7],
    replaceText: (text: string) => text.replace(/-/g, "\\u2011"),
    tableAutoSize: true,
});

// $ExpectType Content
htmlToPdfmake(html);

// `window` accepts any object with a DOMParser: the browser window, jsdom, ...
htmlToPdfmake(html, { window });
htmlToPdfmake(html, { window: new JSDOM("").window });
htmlToPdfmake(html, { window: { DOMParser } });
// @ts-expect-error
htmlToPdfmake(html, { window: {} });

// @ts-expect-error the option is spelled showHidden
htmlToPdfmake(html, { showhidden: true });

// imagesByReference returns { content, images }
const withImages = htmlToPdfmake(html, { imagesByReference: true });
withImages; // $ExpectType ResultWithImages
const docDefinition: TDocumentDefinitions = { content: withImages.content, images: withImages.images };
// @ts-expect-error
const notContent: Content = htmlToPdfmake(html, { imagesByReference: true });
// $ExpectType Content
htmlToPdfmake(html, { imagesByReference: false });

declare const byReference: boolean;
// $ExpectType Content | ResultWithImages
htmlToPdfmake(html, { imagesByReference: byReference });

htmlToPdfmake(html, {
    customTag: ({ element, parents, ret }) => {
        element; // $ExpectType HTMLElement
        parents; // $ExpectType HTMLElement[]
        if (element.nodeName === "CUSTOM-TAG") {
            ret.text = "Custom content";
            ret.style = ["custom-style"];
        }
        return ret;
    },
});
