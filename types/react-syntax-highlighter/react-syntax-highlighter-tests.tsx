import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import PrismSyntaxHighlighter from "react-syntax-highlighter/prism";
import PrismLightHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import { docco } from "react-syntax-highlighter/styles/hljs";
import { atomDark } from "react-syntax-highlighter/styles/prism";

function hljsHighlighter(): JSX.Element {
    const codeString: string = `class CPP {
    private year: number;
    public constructor(private version: string) {
        this.year = Number(version.match(/.+\d+$/));
    }
    public version(): string {
        return this.version;
    }
}
`;
    return (
        <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
        </SyntaxHighlighter>
    );
}

function prismHighlighter(): JSX.Element {
    const codeString: string = `class CPP {
    private year: number;
    public constructor(private version: string) {
        this.year = Number(version.match(/.+\d+$/));
    }
    public version(): string {
        return this.version;
    }
}
`;
    return (
        <PrismSyntaxHighlighter language="javascript" style={atomDark}>
            {codeString}
        </PrismSyntaxHighlighter>
    );
}

function primsLightHighlighter(): JSX.Element {
    const codeString: string = `class CPP {
    private year: number;
    public constructor(private version: string) {
        this.year = Number(version.match(/.+\d+$/));
    }
    public version(): string {
        return this.version;
    }
}
`;
    registerLanguage('jsx', jsx);

    return (
        <PrismLightHighlighter language="jsx" style={atomDark}>
            {codeString}
        </PrismLightHighlighter>
    )
}
