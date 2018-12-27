import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import PrismSyntaxHighlighter from "react-syntax-highlighter/prism";
import PrismLightHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import { docco } from "react-syntax-highlighter/dist/styles/hljs";
import { atomDark } from "react-syntax-highlighter/dist/styles/prism";

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

    const codeTagProps = {
        className: 'some-classname',
        style: {
            opacity: 0,
        },
        onMouseOver: (event: React.MouseEvent<HTMLElement>) => "foo",
    }

    return (
        <PrismLightHighlighter
            codeTagProps={codeTagProps} />
    )
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
    
    const lineProps = {
        otherProp: 'otherProp',
        className: 'some-classname',
        style: {
            opacity: 0,
        },
        onMouseOver: (event: React.MouseEvent<HTMLElement>) => "foo"
    }

    return (
        <PrismLightHighlighter
            lineProps={lineProps} />
    )
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
    
    const lineProps = (lineNumber: number) => ({
        otherProp: 'otherProp',
        className: 'some-classname',
        style: {
            opacity: 0,
        },
        onMouseOver: (event: React.MouseEvent<HTMLElement>) => lineNumber * 5
    })

    return (
        <PrismLightHighlighter
            lineProps={lineProps} />
    )
}

