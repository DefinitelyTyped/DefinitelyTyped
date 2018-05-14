import Document, { DocumentProps, Enhancer, Head, Main, NextScript, NextDocumentContext, PageProps } from 'next/document';
import * as React from "react";

const basicResults = (
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

class MyDoc extends Document {
    static async getInitialProps({ renderPage }: NextDocumentContext) {
        const enhancer: Enhancer<PageProps, {}> = (App) => (props) => (<App />);
        const { html, head, errorHtml, chunks, buildManifest } = renderPage(enhancer);

        const now = Date.now();

        return { html, head, errorHtml, chunks, buildManifest, now };
    }

    render() {
        return (
            <html>
                <Head>
                    <title>My page</title>
                    rendered at {this.props.now}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {this.props.children}
                </body>
            </html>
        );
    }
}

const extendedResults = (
    <MyDoc any="property" should="work" here>
        <Head some="more" properties>
            <meta name="description" content="Head can have children, too!" />
        </Head>
        <h1>Hey there</h1>
    </MyDoc>
);

const renderPage: NextDocumentContext['renderPage'] = (enhancer) => ({
    buildManifest: {},
    chunks: { names: [], filenames: [] },
    html: '',
    head: [<React.Fragment />],
    errorHtml: '',
});

interface PageInitialProps extends PageProps {
    foo: string;
    bar: number;
}

interface ProcessedInitialProps {
    fooLength: number;
    bar: boolean;
}

const enhancerExplicit: Enhancer<PageProps, {}> = (App) => (props) => (<App />);
const enhancerInferred = (App: React.ComponentType<ProcessedInitialProps>) => ({ foo, bar }: PageInitialProps) => (<App fooLength={foo.length} bar={!!bar} />);
const explicitEnhancerRenderResponse = renderPage(enhancerExplicit);
const inferredEnhancerRenderResponse = renderPage(enhancerInferred);
const defaultedTypesRenderResponse = renderPage((App) => (props) => (<App url={props.url} />));
const defaultedTypesExtendedRenderResponse = renderPage((App) => (props) => (<App foo="bar" url={props.url} />));
const explicitTypesRenderResponseOne = renderPage<PageProps, {}>((App) => (props) => (<App />));
const explicitTypesRenderResponseTwo = renderPage<PageInitialProps, ProcessedInitialProps>((App) => ({ foo, bar }) => (<App fooLength={foo.length} bar={!!bar} />));
