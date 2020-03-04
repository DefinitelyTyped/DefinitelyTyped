import { storiesOf, addDecorator } from "@storybook/react";
import React, { Fragment } from "react";
import { withDocs, withReadme, doc, addReadme, configureReadme, addFooter, addHeader } from "storybook-readme";
import Marked from "storybook-readme/components/Marked";
import { addReadme as addHtmlReadme } from "storybook-readme/html";
import registerWithPanelTitle from "storybook-readme/registerWithPanelTitle";

// Possibly any .md files or strings
const DocExample1 = `
## Eaxmple Markdown 1 for component
A very simple component with markdown
`;

const DocExample2 = `
## Example Markdown 2 for component
A very simple component with markdown
`;

// Here are the examples for a type compatibility. Please look https://github.com/tuchk4/storybook-readme for actual usages

// Tests for v5
registerWithPanelTitle("Custom Name Here");
addDecorator(addReadme);
addDecorator(addHtmlReadme);
storiesOf('addParameter Example', module)
  .addParameters({
    readme: {
      content: DocExample1,
      sidebar: DocExample2,
    },
  })
  .add('addParameter', () => <div>add Parameter</div>);

configureReadme({
  header: 'Header text here',
  footer: 'Footer text here',
  StoryPreview: ({ children }) => <div>{children}</div>,
  DocPreview: ({ children }) => <div>{children}</div>,
  HeaderPreview: ({ children }) => <div>{children}</div>,
  FooterPreview: ({ children }) => <div>{children}</div>,
});

addFooter("Add Footer here");
addHeader("Add Header here");

// !~~~~~ Belows are for backwardCompatibility with v4 ~~~~~!
// withReadme usages. Both Decorator/HOC style
storiesOf("withReadme Example", module)
  .addDecorator(withReadme(DocExample1))
  .addDecorator(withReadme([DocExample1, DocExample2]))
  .add(
    "StoryName Here",
    withReadme(DocExample1, () => <div>your react component</div>)
  )
  .add(
    "StoryName Here",
    withReadme([DocExample1, DocExample2], () => (
      <div>your react component</div>
    ))
  );

// withDocs usages.
const withDocsCustom = withDocs({
  PreviewComponent: ({ children }) => <div>{children}</div>,
  FooterComponent: ({ children }) => <div>{children}</div>
});

withDocs.addFooterDocs(DocExample1);

storiesOf("withDocs Example", module)
  .addDecorator(withDocs(DocExample1))
  .addDecorator(withDocs([DocExample1, DocExample2]))
  .addDecorator(withDocsCustom(DocExample1))
  .addDecorator(withDocsCustom([DocExample1, DocExample2]))
  .add(
    "StoryName Here",
    withDocs(DocExample1, () => <div>your react component</div>)
  )
  .add(
    "StoryName Here",
    withDocs([DocExample1, DocExample2], () => <div>your react component</div>)
  );

// doc usage.
storiesOf("Doc", module).add("StoryName Here", doc(DocExample1));

// Marked usage.
storiesOf("Custom Layout", module).add("StoryName Here", () => {
  return (
    <Fragment>
      <div>
        <div>your react component</div>
      </div>
      <Marked md={"### INTRO "} />
      <div>
        <div>your react component</div>
      </div>
      <Marked md={DocExample1} />
      <div>
        <div>your react component</div>
      </div>
      <Marked md={"### OUTRO "} />
    </Fragment>
  );
});
