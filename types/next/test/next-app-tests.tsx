import * as React from "react";
import App, { Container, NextAppContext, AppProps, AppComponentType } from "next/app";

interface NextComponentProps {
    example: string;
}

interface TypedQuery {
    id?: string;
}

class TestApp extends App {
    render() {
        const { Component, router, pageProps } = this.props;
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

class TestAppWithProps extends App<NextComponentProps> {
    static async getInitialProps({ Component, router, ctx }: NextAppContext) {
        const pageProps = Component.getInitialProps && (await Component.getInitialProps(ctx));
        return { pageProps, example: "foobar" };
    }

    render() {
        const { Component, router, pageProps, example } = this.props;
        return <Component {...pageProps} example={example} />;
    }
}

class TestAppWithTypedQuery extends App<{}, NextAppContext<TypedQuery>> {
    static async getInitialProps({ ctx }: NextAppContext<TypedQuery>) {
        const { id } = ctx.query;
        const processQuery = (id?: string) => id;
        processQuery(id);
    }
}

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
// tslint:disable-next-line no-unnecessary-generics
const withExample = <P extends {}>(App: AppComponentType<P & WithExampleProps>) =>
    class extends React.Component<P & AppProps & WithExampleHocProps> {
        test: string;

        static async getInitialProps(context: NextAppContext) {
            const pageProps = App.getInitialProps && (await App.getInitialProps(context));

            // tslint:disable-next-line prefer-object-spread
            return Object.assign({}, pageProps, { test: "test" });
        }

        constructor(props: P & AppProps & WithExampleHocProps) {
            super(props);
            this.test = props.test;
        }

        render() {
            return <App {...this.props} example={this.test} />;
        }
    };

// Basic stateless HOC. Similar to what withAuth would do.
// tslint:disable-next-line no-unnecessary-generics
const withBasic = <P extends {}, C extends {}>(App: AppComponentType<P, C>) =>
    class extends React.Component<P & AppProps> {
        static async getInitialProps(context: C) {
            const pageProps = App.getInitialProps && (await App.getInitialProps(context));

            // tslint:disable-next-line prefer-object-spread
            return Object.assign({}, pageProps);
        }

        render() {
            return <App {...this.props} />;
        }
    };

withExample(TestAppWithProps);

withBasic(TestAppWithTypedQuery);
