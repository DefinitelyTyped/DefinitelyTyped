import * as React from "react";
import * as md from "react-markings";

function Example() {
    return (
        <pre>
            <code>...</code>
        </pre>
    );
}

export function ReadMe() {
    return md`
    # react-markings

    > Markdown in components, components in markdown

    - Allows you to write markdown using [commonmark.js](https://github.com/commonmark/commonmark.js)
    - Renders markdown as React elements using [commonmark-react-renderer](https://github.com/rexxars/commonmark-react-renderer)
    - Embed React components inside your markdown (in any paragraph position) like this:

    ${<Example />}
  `;
}

const customMd = md.customize({
    renderers: {
        // customize heading with class
        Heading: (props) => React.createElement("h" + props.level, { className: "fancy-heading" }, props.children),
    },
});

export function CustomHeading() {
    return customMd`
    # Fancy Heading
  `;
}
