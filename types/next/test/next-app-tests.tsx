import * as React from "react";
import App, { Container, AppComponentContext } from "next/app";
import { NextStatelessComponent } from "next";

interface NextComponentProps {
    example: string;
}

class TestApp extends App<NextComponentProps> {
    static async getInitialProps({ Component, router, ctx }: AppComponentContext) {
        let pageProps = {};
        // TODO: fix AppComponentContext to return NextComponentType instead of React.ComponentType
        const Page = Component as NextStatelessComponent;

        if (Page.getInitialProps) {
            pageProps = await Page.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, router, pageProps } = this.props;
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}
