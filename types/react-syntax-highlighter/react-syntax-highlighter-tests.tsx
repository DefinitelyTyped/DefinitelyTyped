import * as React from "react";
import SyntaxHighlighter, { Light as LightHighlighter, SyntaxHighlighterProps, createElementProps } from "react-syntax-highlighter";
import PrismSyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import PrismLightHighlighter from "react-syntax-highlighter/dist/cjs/prism-light";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { coldarkCold, coldarkDark, oneLight, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import createElement from "react-syntax-highlighter/dist/esm/create-element";

const codeString = `class CPP {
    private year: number;
    public constructor(private version: string) {
        this.year = Number(version.match(/.+\d+$/));
    }
    public version(): string {
        return this.version;
    }
}
`;

function hljsHighlighter(): JSX.Element {
    SyntaxHighlighter.supportedLanguages; // $ExpectType string[]

    return (
        <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
        </SyntaxHighlighter>
    );
}

function hljsLightHighlighter(): JSX.Element {
    LightHighlighter.registerLanguage("javascript", javascript);

    return (
        <LightHighlighter language="javascript" style={docco}>
            {codeString}
        </LightHighlighter>
    );
}

function prismHighlighter(): JSX.Element {
    PrismSyntaxHighlighter.supportedLanguages; // $ExpectType string[]
    return (
        <PrismSyntaxHighlighter language="javascript" style={oneDark}>
            {codeString}
        </PrismSyntaxHighlighter>
    );
}

function primsLightHighlighter(): JSX.Element {
    PrismLightHighlighter.registerLanguage("jsx", jsx);

    return (
        <PrismLightHighlighter language="jsx" style={oneLight}>
            {codeString}
        </PrismLightHighlighter>
    );
}

function codeTagProps() {
    const codeTagProps: SyntaxHighlighterProps["codeTagProps"] = {
        className: "some-classname",
        style: {
            opacity: 0
        },
        onMouseOver: (event: React.MouseEvent<HTMLElement>) => "foo"
    };

    return (
        <PrismLightHighlighter codeTagProps={codeTagProps}>
            {codeString}
        </PrismLightHighlighter>
    );
}

function linePropsObject() {
    const lineProps: SyntaxHighlighterProps["lineProps"] = {
        className: "some-classname",
        style: {
            opacity: 0
        },
        onMouseOver: (event: React.MouseEvent<HTMLElement>) => "foo"
    };

    return (
        <PrismLightHighlighter lineProps={lineProps}>
            {codeString}
        </PrismLightHighlighter>
    );
}

function lineTagPropsFunction() {
    const lineProps: lineTagPropsFunction = (lineNumber: number) => ({
        className: "some-classname",
        style: {
            opacity: 0
        },
        onMouseOver: (event: React.MouseEvent<HTMLElement>) => lineNumber * 5
    });

    return (
        <PrismLightHighlighter lineProps={lineProps}>
            {codeString}
        </PrismLightHighlighter>
    );
}

const TestComponent: React.FC = () => <div>Hello world</div>;

// Test `language`
<PrismLightHighlighter language="cpp">{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter language={{}}>{codeString}</PrismLightHighlighter>;

// Test `style`
<PrismLightHighlighter style={coldarkCold}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter style={coldarkDark}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter style={docco}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter style={oneDark}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter style={oneLight}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter style={{ keyword: { color: "red" } }}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter style={{ color: "red" }}>{codeString}</PrismLightHighlighter>;

// Test `children`
<PrismLightHighlighter>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter>{[codeString, "hello world"]}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter><div>Hello world</div></PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter />;

// Test `customStyle`
<PrismLightHighlighter customStyle={{ color: "red" }}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter customStyle={{ keyword: { color: "red" } }}>{codeString}</PrismLightHighlighter>;

// Test `codeTagProps`
<PrismLightHighlighter codeTagProps={{ className: "some-classname" }}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter codeTagProps={{ style: "color:red;" }}>{codeString}</PrismLightHighlighter>;

// Test `startingLineNumber`
<PrismLightHighlighter startingLineNumber={1}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter startingLineNumber="1">{codeString}</PrismLightHighlighter>;

// Test `lineNumberContainerStyle`
<PrismLightHighlighter lineNumberContainerStyle={{ color: "red" }}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter lineNumberContainerStyle={{ keyword: { color: "red" } }}>{codeString}</PrismLightHighlighter>;

// Test `lineNumberStyle`
<PrismLightHighlighter lineNumberStyle={{ color: "red" }}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter
    lineNumberStyle={lineNo => {
        const temp = lineNo; // $ExpectType number
        return { color: lineNo % 2 === 0 ? "red" : "blue" };
    }}
>
    {codeString}
</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter lineNumberStyle={{ keyword: { color: "red" } }}>{codeString}</PrismLightHighlighter>;

// Test `lineProps`
<PrismLightHighlighter lineProps={{ className: "some-classname" }}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter lineProps={{ style: "color:red;" }}>{codeString}</PrismLightHighlighter>;

// Test `renderer`
<PrismLightHighlighter
    renderer={props => {
        let temp;
        temp = props.rows; // $ExpectType rendererNode[]
        temp = props.stylesheet; // $ExpectType { [key: string]: CSSProperties; }
        temp = props.useInlineStyles; // $ExpectType boolean
        temp = props.rows[0].type; // $ExpectType "text" | "element"
        return <code>hello world</code>;
    }}
>
    {codeString}
</PrismLightHighlighter>;
<PrismLightHighlighter renderer={_ => "hello world"}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter renderer={_ => 123456}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter renderer={_ => <TestComponent />}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter renderer={_ => ({})}>{codeString}</PrismLightHighlighter>;

// Test `PreTag`
<PrismLightHighlighter PreTag="div">{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter PreTag={TestComponent}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter PreTag={123}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter PreTag="mycomponent">{codeString}</PrismLightHighlighter>;

// Test `CodeTag`
<PrismLightHighlighter CodeTag="div">{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter CodeTag={TestComponent}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter CodeTag={123}>{codeString}</PrismLightHighlighter>;
// @ts-expect-error
<PrismLightHighlighter CodeTag="mycomponent">{codeString}</PrismLightHighlighter>;

// Test `createElement`
const correctCreateElementProps: createElementProps = {
    node: {
        type: "element",
        tagName: "span",
        properties: { className: ["some-class"] },
        children: [
            { type: "text", value: "Hello" },
            { type: "text", value: 123 },
        ],
    },
    stylesheet: { keyword: { color: "red" } },
    style: { color: "red" },
    useInlineStyles: true,
    key: "some-key",
};
createElement(correctCreateElementProps);
createElement({
    ...correctCreateElementProps,
    node: {
        ...correctCreateElementProps.node,
        tagName: TestComponent
    }
});
createElement({ ...correctCreateElementProps, style: undefined });
// @ts-expect-error
createElement({ ...correctCreateElementProps, node: { tagName: "span" } });
createElement({
    ...correctCreateElementProps,
    node: {
        ...correctCreateElementProps.node,
        // @ts-expect-error
        properties: { className: "some-class" },
    }
});
createElement({
    ...correctCreateElementProps,
    node: {
        ...correctCreateElementProps.node,
        // @ts-expect-error
        tagName: "mycomponent",
    }
});
// @ts-expect-error
createElement({ ...correctCreateElementProps, stylesheet: undefined });
// @ts-expect-error
createElement({ ...correctCreateElementProps, stylesheet: "" });
// @ts-expect-error
createElement({ ...correctCreateElementProps, style: "color:red;" });
// @ts-expect-error
createElement({ ...correctCreateElementProps, useInlineStyles: undefined });
// @ts-expect-error
createElement({ ...correctCreateElementProps, key: undefined });

// Default renderer function, test both `renderer` and `createElement`
<PrismSyntaxHighlighter
    renderer={({ rows, stylesheet, useInlineStyles }) => (rows.map((node, i) =>
        createElement({
            node,
            stylesheet,
            useInlineStyles,
            key: `code-segement${i}`
        })
    ))}
>
    {codeString}
</PrismSyntaxHighlighter>;
