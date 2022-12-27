import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { StaticContext, StaticRouterContext } from 'react-router';

interface RouteStatusProps {
    children?: React.ReactNode;
    statusCode: number;
}

const RouteStatus: React.FC<RouteStatusProps> = (props) => (
    <Route
        render={({ staticContext }: {staticContext?: StaticContext | undefined}) => {
            if (staticContext) {
                staticContext.statusCode = props.statusCode;
            }

            return (
                <div>
                    {props.children}
                </div>
            );
        }}
    />
);

interface PrintContextProps {
    staticContext: StaticContext;
}

const PrintContext: React.FC<PrintContextProps> = (props) => (
    <p>
        Static context: {JSON.stringify(props.staticContext)}
    </p>
);

class StaticRouterExample extends React.Component {
    staticContext: StaticRouterContext = {};

    render() {
        return (
            <StaticRouter location="/foo" context={this.staticContext}>
                <div>
                    <RouteStatus statusCode={404}>
                        <p>Route with statusCode 404</p>
                        <PrintContext staticContext={this.staticContext} />
                    </RouteStatus>
                </div>
            </StaticRouter>
        );
    }
}

const app = express();

app.get('*', (req, res) => {
    const staticContext: StaticRouterContext = {};

    const html = renderToString(
        <StaticRouter location={req.url} context={staticContext}>
            (includes the RouteStatus component below e.g. for 404 errors)
        </StaticRouter>
    );

    res.status(staticContext.statusCode || 200).send(html);
});

export default StaticRouterExample;
