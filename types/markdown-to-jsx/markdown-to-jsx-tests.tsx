import Markdown, { compiler } from 'markdown-to-jsx';
import * as React from 'react';
import { render } from 'react-dom';

render(<Markdown># Hello world!</Markdown>, document.body);

<Markdown options={{ forceBlock: true }}>Hello there old chap!</Markdown>;
compiler('Hello there old chap!', { forceBlock: true });

<Markdown options={{ forceInline: true }}># You got it babe!</Markdown>;

const MyParagraph: React.FunctionComponent = ({ children, ...props }) => (
    <div {...props}>{children}</div>
);
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
                    component: 'div'
                },
                h3: {
                    component: 'span',
                    props: {
                        className: 'foo'
                    }
                },
                p: MyParagraph,
                h4: 'h3',
                MyParagraph
            },
        }}
    >
        # Hello world!
  </Markdown>,
    document.body
);

render(
    <Markdown
        children="# Hello world"
        options={{
            createElement: <P extends {}>(
                type: React.FunctionComponent<P> | React.ComponentClass<P> | string,
                // This typing is copied from React
                // tslint:disable-next-line:no-null-undefined-union
                props?: React.Attributes & P | null,
                // tslint:disable-next-line:no-null-undefined-union
                ...children: React.ReactNode[]) => (
                    <div className="parent">
                        {React.createElement(type, props, children)}
                    </div>
                )
        }}
    />,
    document.body
);

<Markdown options={{ slugify: str => str }}># 中文</Markdown>;
