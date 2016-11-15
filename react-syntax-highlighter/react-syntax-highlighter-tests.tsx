import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

function highlighter(): JSX.Element {
  const codeString: string =
`class CPP {
    private year: number;
    public constructor(private version: string) {
        this.year = Number(version.match(/.+\d+$/));
    }
    public version(): string {
        return this.version;
    }
}
`;
  return <SyntaxHighlighter language='javascript' style={docco}>{codeString}</SyntaxHighlighter>;
}