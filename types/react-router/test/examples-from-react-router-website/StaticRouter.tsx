import * as React from 'react';
import { StaticRouter, Route } from 'react-router-dom';

interface StaticContext {
    statusCode?: number;
}

interface RouteStatusProps {
    statusCode: number;
}

const RouteStatus: React.SFC<RouteStatusProps> = (props) => (
    <Route
        render={({ staticContext }) => {
            if (staticContext) {
                (staticContext as StaticContext).statusCode = props.statusCode;
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

const PrintContext: React.SFC<PrintContextProps> = (props) => (
    <p>
        Static context: {JSON.stringify(props.staticContext)}
    </p>
);

class StaticRouterExample extends React.Component {
    staticContext: StaticContext = {};

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

export default StaticRouterExample;
