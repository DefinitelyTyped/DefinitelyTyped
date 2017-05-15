import * as React from "react";
import { Helmet, HelmetData } from "react-helmet";

const Application = () =>
    <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Helmet>
            <title>My Title</title>
            <meta name="description" content="Helmet application" />
        </Helmet>

        <div>
            <Helmet>
                <title>Nested Title</title>
                <meta name="description" content="Nested component" />
            </Helmet>
        </div>
    </div>;

const helmet: HelmetData = Helmet.renderStatic();

const html = `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            <title>${helmet.title.toString()}</title>
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="content">
                // React stuff here
            </div>
        </body>
    </html>
`;

function HTML() {
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
        <html {...htmlAttrs}>
            <head>
                <title>{helmet.title.toComponent()}</title>
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
            </head>
            <body {...bodyAttrs}>
                <div id="content">
                </div>
            </body>
        </html>
    );
}

<Helmet
    encodeSpecialCharacters={true}
    titleTemplate="MySite.com - %s"

    defaultTitle="My Default Title"

    onChangeClientState={(newState: any) => console.log(newState)}
>
    <html lang="en" />

    <body className="root" />

    <title itemProp="name" lang="en">My Title</title>

    <base target="_blank" href="http://mysite.com/" />

    <meta name="description" content="Helmet application" />
    <meta property="og:type" content="article" />

    <link rel="canonical" href="http://mysite.com/example" />
    <link rel="apple-touch-icon" href="http://mysite.com/img/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="http://mysite.com/img/apple-touch-icon-72x72.png" />

    <script src="http://include.com/pathtojs.js" type="text/javascript" />

    <script type="application/ld+json">{`
        {
            "@context": "http://schema.org"
        }
    `}</script>

    <noscript>{`
        <link rel="stylesheet" type="text/css" href="foo.css" />
    `}</noscript>

    <style type="text/css">{`
        body {
            background-color: blue;
        }
        p {
            font-size: 12px;
        }
    `}</style>
</Helmet>
