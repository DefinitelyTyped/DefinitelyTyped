import * as React from "react";
import SyntaxHighlighter, { Light as LightHighlighter, SyntaxHighlighterProps, createElementProps } from "react-syntax-highlighter";
import PrismSyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import PrismLightHighlighter from "react-syntax-highlighter/dist/cjs/prism-light";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
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
        <PrismSyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
        </PrismSyntaxHighlighter>
    );
}

function primsLightHighlighter(): JSX.Element {
    PrismLightHighlighter.registerLanguage("jsx", jsx);

    return (
        <PrismLightHighlighter language="jsx" style={atomDark}>
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
<PrismLightHighlighter language={{}}>{codeString}</PrismLightHighlighter>; // $ExpectError

// Test `style`
<PrismLightHighlighter style={docco}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter style={{ keyword: { color: "red" } }}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter style={{ color: "red" }}>{codeString}</PrismLightHighlighter>; // $ExpectError

// Test `children`
<PrismLightHighlighter>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter>{[codeString, "hello world"]}</PrismLightHighlighter>;
<PrismLightHighlighter><div>Hello world</div></PrismLightHighlighter>; // $ExpectError
<PrismLightHighlighter />; // $ExpectError

// Test `customStyle`
<PrismLightHighlighter customStyle={{ color: "red" }}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter customStyle={{ keyword: { color: "red" } }}>{codeString}</PrismLightHighlighter>; // $ExpectError

// Test `codeTagProps`
<PrismLightHighlighter codeTagProps={{ className: "some-classname" }}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter codeTagProps={{ style: "color:red;" }}>{codeString}</PrismLightHighlighter>; // $ExpectError

// Test `startingLineNumber`
<PrismLightHighlighter startingLineNumber={1}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter startingLineNumber="1">{codeString}</PrismLightHighlighter>; // $ExpectError

// Test `lineNumberContainerStyle`
<PrismLightHighlighter lineNumberContainerStyle={{ color: "red" }}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter lineNumberContainerStyle={{ keyword: { color: "red" } }}>{codeString}</PrismLightHighlighter>; // $ExpectError

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
<PrismLightHighlighter lineNumberStyle={{ keyword: { color: "red" } }}>{codeString}</PrismLightHighlighter>; // $ExpectError

// Test `lineProps`
<PrismLightHighlighter lineProps={{ className: "some-classname" }}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter lineProps={{ style: "color:red;" }}>{codeString}</PrismLightHighlighter>; // $ExpectError

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
<PrismLightHighlighter renderer={_ => ({})}>{codeString}</PrismLightHighlighter>; // $ExpectError

// Test `PreTag`
<PrismLightHighlighter PreTag="div">{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter PreTag={TestComponent}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter PreTag={123}>{codeString}</PrismLightHighlighter>; // $ExpectError
<PrismLightHighlighter PreTag="mycomponent">{codeString}</PrismLightHighlighter>; // $ExpectError

// Test `CodeTag`
<PrismLightHighlighter CodeTag="div">{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter CodeTag={TestComponent}>{codeString}</PrismLightHighlighter>;
<PrismLightHighlighter CodeTag={123}>{codeString}</PrismLightHighlighter>; // $ExpectError
<PrismLightHighlighter CodeTag="mycomponent">{codeString}</PrismLightHighlighter>; // $ExpectError

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
createElement({ ...correctCreateElementProps, node: { tagName: "span" } }); // $ExpectError
createElement({
    ...correctCreateElementProps,
    node: {
        ...correctCreateElementProps.node,
        properties: { className: "some-class" }, // $ExpectError
    }
});
createElement({
    ...correctCreateElementProps,
    node: {
        ...correctCreateElementProps.node,
        tagName: "mycomponent", // $ExpectError
    }
});
createElement({ ...correctCreateElementProps, stylesheet: undefined }); // $ExpectError
createElement({ ...correctCreateElementProps, stylesheet: "" }); // $ExpectError
createElement({ ...correctCreateElementProps, style: "color:red;" }); // $ExpectError
createElement({ ...correctCreateElementProps, useInlineStyles: undefined }); // $ExpectError
createElement({ ...correctCreateElementProps, key: undefined }); // $ExpectError

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
