import * as React from "react";
import * as ReactDOM from "react-dom";
import { renderToString } from "react-dom/server";
import { Helmet, HelmetProvider, PopulatedContext } from "react-helmet-async";

const App1 = () => (
    <HelmetProvider>
        <div>
            <Helmet>
                <title>Hello World</title>
                <link rel="canonical" href="https://www.example.com/" />
            </Helmet>
            <h1>Hello World</h1>
        </div>
    </HelmetProvider>
);

ReactDOM.render(<App1 />, document.getElementById("root"));

const helmetContext = {};

const App2 = () => (
    <HelmetProvider context={helmetContext}>
        <div>
            <Helmet>
                <title>Hello World</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <h1>Hello World</h1>
        </div>
    </HelmetProvider>
);

const html = renderToString(<App2 />);
console.log(html);

const { helmet } = helmetContext as PopulatedContext;
console.log(helmet);
