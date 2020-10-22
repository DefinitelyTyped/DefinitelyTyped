import * as React from "react";
import HelmetDefaultExport, { Helmet, HelmetData, HelmetsOpenedVisor } from "react-helmet-with-visor";

const Application = () =>
    <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <HelmetsOpenedVisor>
                {`<script data-react-helmet="true">
                        !function (f, b, e, v, n, t, s) {
                            if (f.fbq) return; n = f.fbq = function () {
                                n.callMethod ?
                                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                            };
                            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = \'2.0\';
                            n.queue = []; t = b.createElement(e); t.async = !0;
                            t.src = v; s = b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t, s)
                        }(window, document, \'script\',
                            \'https://connect.facebook.net/en_US/fbevents.js\');
                        fbq(\'init\', \'*************\');
                        fbq(\'track\', \'PageView\');
            </script><noscript data-react-helmet="true">
                    &lt;img height="1" width="1" style="display:none"
                            src="https://www.facebook.com/tr?id=************&amp;ev=PageView&amp;noscript=1"/&gt;
            </noscript>`}
            </HelmetsOpenedVisor>
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
            ${helmet.openedVisor.toString()}
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

    <HelmetsOpenedVisor>
        {`<script data-react-helmet="true">
                        !function (f, b, e, v, n, t, s) {
                            if (f.fbq) return; n = f.fbq = function () {
                                n.callMethod ?
                                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                            };
                            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = \'2.0\';
                            n.queue = []; t = b.createElement(e); t.async = !0;
                            t.src = v; s = b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t, s)
                        }(window, document, \'script\',
                            \'https://connect.facebook.net/en_US/fbevents.js\');
                        fbq(\'init\', \'*************\');
                        fbq(\'track\', \'PageView\');
            </script><noscript data-react-helmet="true">
                    &lt;img height="1" width="1" style="display:none"
                            src="https://www.facebook.com/tr?id=************&amp;ev=PageView&amp;noscript=1"/&gt;
            </noscript>`}
    </HelmetsOpenedVisor>

</Helmet>;

<HelmetDefaultExport>
    <html lang="en" />
</HelmetDefaultExport>;

// undefined value
<Helmet htmlAttributes={{ id: undefined }} />;
<Helmet bodyAttributes={{ id: undefined }} />;

// boolean value
<Helmet htmlAttributes={{ draggable: false }} />;
<Helmet bodyAttributes={{ draggable: false }} />;

// number value
<Helmet htmlAttributes={{ tabIndex: -1 }} />;
<Helmet bodyAttributes={{ tabIndex: -1 }} />;

// arbitrary data- attribute
<Helmet htmlAttributes={{ 'data-foo': 'bar' }} />;
<Helmet bodyAttributes={{ 'data-foo': 'bar' }} />;

// $ExpectError
<Helmet htmlAttributes={{ hidden: 42 }} />;
// $ExpectError
<Helmet bodyAttributes={{ hidden: 42 }} />;

// $ExpectError
<Helmet link={[ invalidProp: 'foo' ]} />;
// $ExpectError
<Helmet meta={[ invalidProp: 'foo' ]} />;
