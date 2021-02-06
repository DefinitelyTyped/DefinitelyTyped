import Markdown, { compiler } from 'markdown-to-jsx';
import * as React from 'react';
import { render } from 'react-dom';

render(<Markdown># Hello world!</Markdown>, document.body);

<Markdown options={{ forceBlock: true }}>Hello there old chap!</Markdown>;
compiler('Hello there old chap!', { forceBlock: true });

<Markdown options={{ forceInline: true }}># You got it babe!</Markdown>;

const MyParagraph: React.SFC = ({ children, ...props }) => <div {...props}>{children}</div>;

interface MySquareImageProps {
    src: string;
    alt?: string;
    size?: number;
}

const MySquareImage = (props: MySquareImageProps) => {
    let width: string | undefined;
    let height: string | undefined;
    if (props.size) {
        width = `${props.size}px`;
        height = `${props.size}px`;
    }
    return <img alt={props.alt} src={props.src} width={width} height={height} />;
};

interface MyStatelessRoundImageProps {
    src: string;
    alt?: string;
    size?: number;
}

class MyStatelessRoundImage extends React.Component<MyStatelessRoundImageProps> {
    render() {
        let width: string | undefined;
        let height: string | undefined;
        if (this.props.size) {
            width = `${this.props.size}px`;
            height = `${this.props.size}px`;
        }
        return <img alt={this.props.alt} src={this.props.src} width={width} height={height} />;
    }
}

interface MyRoundImageProps {
    src: string;
    alt?: string;
    size?: number;
}

interface MyRoundImageState {
    loading: boolean;
}

class MyRoundImage extends React.Component<MyRoundImageProps, MyRoundImageState> {
    constructor(props: MyRoundImageProps) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    render() {
        let width: string | undefined;
        let height: string | undefined;
        if (this.props.size) {
            width = `${this.props.size}px`;
            height = `${this.props.size}px`;
        }
        return <img alt={this.props.alt} src={this.props.src} width={width} height={height} />;
    }
}

render(
    <Markdown
        options={{
            overrides: {
                h1: {
                    component: MyParagraph,
                    props: {
                        className: 'foo',
                    },
                },
                h2: {
                    component: 'div',
                },
                h3: {
                    component: 'span',
                    props: {
                        className: 'foo',
                    },
                },
                p: MyParagraph,
                h4: 'h3',
                MyParagraph,
                MySquareImage: {
                    component: MySquareImage,
                    props: {
                        size: 240,
                    },
                },
                MyRoundImage: {
                    component: MyRoundImage,
                    props: {
                        size: 240,
                    },
                },
                MyStatelessRoundImage: {
                    component: MyStatelessRoundImage,
                    props: {
                        size: 240,
                    },
                },
            },
        }}
    >
        # Hello world!
    </Markdown>,
    document.body,
);

render(
    <Markdown
        children="# Hello world"
        options={{
            createElement: <P extends {}>(
                type: React.SFC<P> | React.ComponentClass<P> | string,
                props?: (React.Attributes & P) | null,
                ...children: React.ReactNode[]
            ) => <div className="parent">{React.createElement(type, props, children)}</div>,
        }}
    />,
    document.body,
);

<Markdown options={{ slugify: str => str }}># 中文</Markdown>;

// supports passing extra properties to the underlying element
<Markdown className="markdown-body">{`
# Header 1
## Header 2
`}</Markdown>;

<Markdown
    options={{
        namedCodesToUnicode: {
            le: '\u2264',
            ge: '\u2265',
        },
    }}
>
    This text is &le; than this text.
</Markdown>;

<Markdown options={{ disableParsingRawHTML: true }}>
    {"This text has <span>html</span> in it but it won't be rendered"}
</Markdown>;
