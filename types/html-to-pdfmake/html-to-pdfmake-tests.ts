import { Content } from "pdfmake/interfaces";
import htmlToPdfmake from "html-to-pdfmake";

export const validExample: Content = htmlToPdfmake(
    `
<div>
  <h1>My title</h1>
  <p>
    This is a sentence with a <strong>bold word</strong>, <em>one in italic</em>,
    and <u>one with underline</u>. And finally <a href="https://www.somewhere.com">a link</a>.
  </p>
</div>
`,
    {
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
        fontSizes: [1, 2, 3, 4, 5, 6, 7],
        replaceText: (text: string) => text.replace(/-/g, "\\u2011"),
        tableAutoSize: true,
    },
);
