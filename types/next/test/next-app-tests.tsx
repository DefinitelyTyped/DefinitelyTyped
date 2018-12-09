import * as React from "react";
import App, { Container, NextAppContext, AppProps, AppComponentType } from "next/app";
import { DefaultQuery } from "next/router";

interface TestAppProps {
    pageProps: any;
}

interface TypedQuery extends DefaultQuery {
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

class TestAppWithProps extends App<TestAppProps & WithExampleProps> {
    static async getInitialProps({ Component, router, ctx }: NextAppContext) {
        const pageProps = Component.getInitialProps && (await Component.getInitialProps(ctx));
        return { pageProps };
    }

    render() {
        const { Component, router, pageProps, example } = this.props;
        return <Component {...pageProps} example={example} />;
    }
}

class TestAppWithTypedQuery extends App {
    static async getInitialProps({ ctx }: NextAppContext<TypedQuery>) {
        const { id } = ctx.query;
        const processQuery = (id?: string) => id;
        processQuery(id);
        return { pageProps: id };
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
// tslint:disable-next-line no-unnecessary-generics, use-default-type-parameter
const withExample = <P extends {}>(App: AppComponentType<P & WithExampleProps, P>) =>
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
const withBasic = <P extends {}, C extends {}>(App: AppComponentType<P, P, C>) =>
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
