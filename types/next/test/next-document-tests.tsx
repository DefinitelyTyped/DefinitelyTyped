import Document, {
    DocumentProps,
    Enhancer,
    Html,
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
            <Html>
                <Head>
                    <style>{`body { margin: 0 } /* custom! */`}</style>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

class MyDoc extends Document<WithUrlProps> {
    static async getInitialProps(ctx: NextDocumentContext) {
        const { req, renderPage } = ctx;

        // without enhancer
        const _page = renderPage();

        // with component enhancer
        const enhancer: Enhancer<PageProps, {}> = Component => props => <Component />;
        const _enhancedPage = renderPage(enhancer);

        // with app and component enhancers
        const enhanceApp: Enhancer<PageProps, {}> = App => props => <App />;
        const enhanceComponent: Enhancer<PageProps, {}> = Component => props => <Component />;
        const { html, head } = renderPage({
            enhanceApp,
            enhanceComponent
        });

        const initialProps = await Document.getInitialProps(ctx);

        const styles = (
            <>
                {initialProps.styles}
                <style />
            </>
        );

        // Custom prop
        const url = req!.url;

        return { html, head, styles, url };
    }

    constructor(props: WithUrlProps & DocumentProps) {
        super(props);
        const { __NEXT_DATA__, url } = props;

        // Custom __NEXT_DATA__ attribute
        __NEXT_DATA__.url = url;
    }

    render() {
        const { pathname, query } = this.props.__NEXT_DATA__;
        const { head, styles } = this.props;

        return (
            <html>
                <Head nonce="nonce" any="property" should="work" here>
                    {head}
                    <title>My page</title>
                    {styles}
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
