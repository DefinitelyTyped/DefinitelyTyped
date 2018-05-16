import Document, { Head, Main, NextScript, NextDocumentContext } from 'next/document';
import * as React from "react";

const results = (
    <Document any="property" should="work" here>
        <Head some="more" properties>
            <meta name="description" content="Head can have children, too!" />
        </Head>
        <Main />
        <NextScript />
    </Document>
);

const Wrapper: React.SFC = ({ children }) => <React.Fragment>{children}</React.Fragment>;

export default class MyDocument extends Document {
    static async getInitialProps({ renderPage }: NextDocumentContext) {
        // Without callback
        const page = renderPage();
        // With callback
        const differentPage = renderPage(App => props => <Wrapper><App {...props} /></Wrapper>);
        const style = {};
        return { ...page, style };
    }

    render() {
        return (
            <html>
                <Head>
                    <title>My page</title>
                    <style id='cxs-style' dangerouslySetInnerHTML={{ __html: this.props.style }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
