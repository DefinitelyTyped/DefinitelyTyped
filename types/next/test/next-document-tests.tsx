import Document, {
    Enhancer,
    Head,
    Main,
    NextScript,
    NextDocumentContext,
    PageProps
} from "next/document";
import * as React from "react";

interface WithUrlProps {
    url: string;
}

class MyDocumentDefault extends Document {
    static async getInitialProps(ctx: NextDocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <html>
                <Head>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

class MyDoc extends Document<WithUrlProps> {
    static getInitialProps({ req, renderPage }: NextDocumentContext) {
        // without callback
        const _page = renderPage();

        // with callback
        const enhancer: Enhancer<PageProps, {}> = App => props => <App />;
        const { html, head, buildManifest } = renderPage(enhancer);

        const styles = [<style />];

        // Custom prop
        const url = req!.url;

        return { html, head, buildManifest, styles, url };
    }

    render() {
        const { pathname, query } = this.props.__NEXT_DATA__;

        return (
            <html>
                <Head nonce="nonce" any="property" should="work" here>
                    <title>My page</title>
                    {this.props.styles}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <p>{this.props.url}</p>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

const renderPage: NextDocumentContext["renderPage"] = enhancer => ({
    buildManifest: {},
    chunks: { names: [], filenames: [] },
    html: "",
    head: [<React.Fragment />],
    errorHtml: ""
});

interface PageInitialProps extends PageProps {
    foo: string;
    bar: number;
}

interface ProcessedInitialProps {
    fooLength: number;
    bar: boolean;
}

const enhancerExplicit: Enhancer<PageProps, {}> = App => props => <App />;
const enhancerInferred = (App: React.ComponentType<ProcessedInitialProps>) => ({
    foo,
    bar
}: PageInitialProps) => <App fooLength={foo.length} bar={!!bar} />;
const explicitEnhancerRenderResponse = renderPage(enhancerExplicit);
const inferredEnhancerRenderResponse = renderPage(enhancerInferred);
const defaultedTypesRenderResponse = renderPage(App => props => <App url={props.url} />);
const defaultedTypesExtendedRenderResponse = renderPage(App => props => (
    <App foo="bar" url={props.url} />
));
const explicitTypesRenderResponseOne = renderPage<PageProps, {}>(App => props => <App />);
const explicitTypesRenderResponseTwo = renderPage<PageInitialProps, ProcessedInitialProps>(
    App => ({ foo, bar }) => <App fooLength={foo.length} bar={!!bar} />
);
