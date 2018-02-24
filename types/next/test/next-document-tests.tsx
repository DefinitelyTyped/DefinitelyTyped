import Document, * as document from "next/document";
import * as React from "react";

const results = (
    <Document any="property" should="work" here>
        <document.Head some="more" properties>
            <meta name="description" content="Head can have children, too!" />
        </document.Head>
        <document.Main />
        <document.NextScript />
    </Document>
);
