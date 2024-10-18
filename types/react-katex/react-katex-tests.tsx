import "katex/dist/katex.min.css";
import * as React from "react";
import { BlockMath, InlineMath } from "react-katex";

// The examples were retrieved verbatim from the `react-katex` documentation:
// https://www.npmjs.com/package/react-katex

function testInlineMath(): void {
    // Display math in the middle of the text.
    <InlineMath math="\\int_0^\\infty x^2 dx" />;
    <InlineMath>\int_0^\infty x^2 dx</InlineMath>;
}

function testBlockMath(): void {
    // Display math in a separated block, with larger font and symbols.
    <BlockMath math="\\int_0^\\infty x^2 dx" />;
    <BlockMath>\int_0^\infty x^2 dx</BlockMath>;
}

function testErrorHandlingDefaultErrorMessage(): void {
    // By default the error rendering is handled by KaTeX. You can optionally
    // pass errorColor (defaults to #cc0000) as a prop:
    <BlockMath math={"\\int_0^\\infty x^2 dx \\inta"} errorColor={"#cc0000"} />;
}

function testErrorHandlingCustomErrorMessage(): void {
    // It's possible to handle parse errors using the prop renderError. This prop
    // must be a function that receives the error object and returns what should
    // be rendered when parsing fails:
    <BlockMath
        math="\\int_{"
        renderError={error => {
            return <b>Fail: {error.name}</b>;
        }}
    />;
}

testInlineMath();
testBlockMath();
testErrorHandlingDefaultErrorMessage();
testErrorHandlingCustomErrorMessage();
