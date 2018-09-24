import * as React from "react";
import { NextStatelessComponent, NextContext, NextComponentType } from "next";
import { DefaultQuery } from "next/router";

interface NextComponentProps {
    example: string;
}

interface TypedQuery extends DefaultQuery {
    id?: string;
}

class ClassNext extends React.Component<NextComponentProps> {
    static async getInitialProps(ctx: NextContext) {
        const { example } = ctx.query;
        return { example: example as string };
    }

    render() {
        return <div>I'm a class component! {this.props.example}</div>;
    }
}

class ClassNextWithTypedQuery extends React.Component {
    static async getInitialProps(ctx: NextContext<TypedQuery>) {
        const { id } = ctx.query;
        const processQuery = (id?: string) => id;
        processQuery(id);
    }
}

const StatelessNext: NextStatelessComponent<NextComponentProps> = ({ example }) => (
    <div>I'm a stateless component! {example}</div>
);

StatelessNext.getInitialProps = async ({ query }: NextContext) => {
    const { example } = query;
    return { example: example as string };
};

interface WithExampleProps {
    example: string;
}

interface WithExampleHocProps {
    test: string;
}

interface TestProps {
    ownProp: boolean;
}

// Stateful HOC that adds props to wrapped component. Similar to what withRedux does.
// tslint:disable-next-line use-default-type-parameter
const withExample = <P extends {}>(Page: NextComponentType<P & WithExampleProps, P>) =>
    class extends React.Component<P & WithExampleHocProps> {
        test: string;

        static async getInitialProps(ctx: NextContext) {
            const pageProps = Page.getInitialProps && (await Page.getInitialProps(ctx));

            // tslint:disable-next-line prefer-object-spread
            return Object.assign({}, pageProps, { test: "test" });
        }

        constructor(props: P & WithExampleHocProps) {
            super(props);
            this.test = props.test;
        }

        render() {
            return <Page {...this.props} example={this.test} />;
        }
    };

// Basic stateless HOC. Similar to what withAuth would do.
// tslint:disable-next-line no-unnecessary-generics
const withBasic = <P extends {}>(Page: NextComponentType<P>) =>
    class extends React.Component<P> {
        static async getInitialProps(ctx: NextContext) {
            const pageProps = Page.getInitialProps && (await Page.getInitialProps(ctx));

            // tslint:disable-next-line prefer-object-spread
            const props = Object.assign({}, pageProps);

            if (ctx.query.example === "bar") {
                // Redirect
            }

            return props;
        }

        render() {
            return <Page {...this.props} />;
        }
    };

class NextWithExample extends React.Component<TestProps & WithExampleProps> {
    static async getInitialProps(ctx: NextContext<TypedQuery>) {
        const { id } = ctx.query;
        const processQuery = (id?: string) => id;
        processQuery(id);
        return { ownProp: true };
    }

    render() {
        const { ownProp, example } = this.props;
        return (
            <div>
                I'm wrapped in a HOC that gives me an example prop! {example} {ownProp}
            </div>
        );
    }
}

// P template is inferred as <TestProps>.
withExample(NextWithExample);

// P template inferred as <NextComponentProps>.
withBasic(ClassNext);

// P template inferred as <TestProps & WithExampleProps>
withBasic(withExample(NextWithExample));
