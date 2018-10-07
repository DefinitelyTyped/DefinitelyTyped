// somehow It can't find @storybook/react module, thus I couldn't write tests with storiesOf.
// I tested with my local environment, though there always can be a mistake.
// import { storiesOf } from "@storybook/react";
import * as React from "react";
import { withDocs, withReadme, doc } from "storybook-readme";

// Also I don't know how to write test with this style. Please look index.d.ts for more details
// import Marked from "storybook-readme/components/Marked";

// possibly any .md files or strings
const docExample1 = `
## Markdown for component 1
A very simple component with markdown
`;

const docExample2 = `
## Markdown for component 2
A very simple component with markdown
`;

// withDocs Examples
withDocs(docExample1);
withDocs([docExample1, docExample2]);
withDocs(docExample1, () => <div>react component</div>);

const withDocsCustom = withDocs({
    FooterComponent: ({ children }) => <div>{children}</div>,
    PreviewComponent: ({ children }) => <div>{children}</div>
});
withDocsCustom(docExample1);

withDocs.addFooterDocs(docExample1);

// withReadme Examples
withReadme(docExample1);
withReadme([docExample1, docExample2]);
withReadme(docExample1, () => <div>react component</div>);

// doc Example
doc(docExample1);

// Marked Example
// <Marked md="docExample 1">
