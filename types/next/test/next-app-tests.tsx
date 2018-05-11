import * as React from "react";
import App, { Container } from "next/app";

interface NextComponentProps {
    example: string;
}

class TestApp extends App<NextComponentProps> {
    static async getInitialProps({ Component, router, ctx }: any) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}
