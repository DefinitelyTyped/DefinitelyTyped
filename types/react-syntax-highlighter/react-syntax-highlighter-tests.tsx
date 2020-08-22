import * as React from "react";
import SyntaxHighlighter, { Light as LightHighlighter, SyntaxHighlighterProps } from "react-syntax-highlighter";
import PrismSyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import PrismLightHighlighter from "react-syntax-highlighter/dist/cjs/prism-light";
import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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

function hljsLightHighlighter(): JSX.Element {
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
    LightHighlighter.registerLanguage("javascript", javascript);

    return (
        <LightHighlighter language="javascript" style={docco}>
            {codeString}
        </LightHighlighter>
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
    PrismLightHighlighter.registerLanguage("jsx", jsx);

    return (
        <PrismLightHighlighter language="jsx" style={atomDark}>
            {codeString}
        </PrismLightHighlighter>
    );
}

function codeTagProps() {
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

    const codeTagProps: SyntaxHighlighterProps["codeTagProps"] = {
        className: "some-classname",
        style: {
            opacity: 0
        },
        onMouseOver: (event: React.MouseEvent<HTMLElement>) => "foo"
    };

    return <PrismLightHighlighter codeTagProps={codeTagProps} />;
}

function linePropsObject() {
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

    const lineProps: SyntaxHighlighterProps["lineProps"] = {
        className: "some-classname",
        style: {
            opacity: 0
        },
        onMouseOver: (event: React.MouseEvent<HTMLElement>) => "foo"
    };

    return <PrismLightHighlighter lineProps={lineProps} />;
}

function lineTagPropsFunction() {
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

    const lineProps: lineTagPropsFunction = (lineNumber: number) => ({
        className: "some-classname",
        style: {
            opacity: 0
        },
        onMouseOver: (event: React.MouseEvent<HTMLElement>) => lineNumber * 5
    });

    return <PrismLightHighlighter lineProps={lineProps} />;
}
