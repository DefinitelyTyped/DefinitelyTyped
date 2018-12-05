import Router, { withRouter, WithRouterProps } from "next-server/router";
import * as React from "react";
import * as qs from "querystring";

Router.readyCallbacks.push(() => {
    console.log("I'll get called when the router initializes.");
});
Router.ready(() => {
    console.log(
        "I'll get called immediately if the router initializes, or when it eventually does.",
    );
});

// Access readonly properties of the router.

Object.keys(Router.components).forEach(key => {
    const c = Router.components[key];
    c.err.isAnAny;

    return <c.Component />;
});

function split(routeLike: string) {
    routeLike.split("/").forEach(part => {
        console.log("path part: ", part);
    });
}

if (Router.asPath) {
    split(Router.asPath);
    split(Router.asPath);
}

split(Router.pathname);

const query = `?${qs.stringify(Router.query)}`;

// Assign some callback methods.
Router.events.on('routeChangeStart', (url: string) => console.log("Route is starting to change.", url));
Router.events.on('beforeHistoryChange', (as: string) => console.log("History hasn't changed yet.", as));
Router.events.on('routeChangeComplete', (url: string) => console.log("Route change is complete.", url));
Router.events.on('routeChangeError', (err: any, url: string) => console.log("Route change errored.", err, url));

// Call methods on the router itself.
Router.reload("/route").then(() => console.log("route was reloaded"));
Router.back();
Router.beforePopState(({ url }) => !!url);

Router.push("/route").then((success: boolean) =>
    console.log("route push success: ", success),
);
Router.push("/route", "/asRoute").then((success: boolean) =>
    console.log("route push success: ", success),
);
Router.push("/route", "/asRoute", { shallow: false }).then((success: boolean) =>
    console.log("route push success: ", success),
);

Router.replace("/route").then((success: boolean) =>
    console.log("route replace success: ", success),
);
Router.replace("/route", "/asRoute").then((success: boolean) =>
    console.log("route replace success: ", success),
);
Router.replace("/route", "/asRoute", {
    shallow: false,
}).then((success: boolean) => console.log("route replace success: ", success));

Router.prefetch("/route").then(Component => {
    const element = <Component />;
});

interface TestComponentProps extends WithRouterProps {
    testValue: string;
}

class TestComponent extends React.Component<TestComponentProps> {
    state = { ready: false };

    constructor(props: TestComponentProps) {
        super(props);
        if (props.router) {
            props.router.ready(() => {
                this.setState({ ready: true });
            });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.ready ? 'Ready' : 'Not Ready'}</h1>
                <h2>Route: {this.props.router ? this.props.router.route : ""}</h2>
                <p>Another prop: {this.props.testValue}</p>
            </div>
        );
    }
}

withRouter(TestComponent);

interface TestComponent2Props extends WithRouterProps {
    testValue: string;
}

class TestComponent2 extends React.Component<TestComponent2Props> {
    state = { ready: false };

    constructor(props: TestComponent2Props) {
        super(props);
        if (props.router) {
            props.router.ready(() => {
                this.setState({ ready: true });
            });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.ready ? 'Ready' : 'Not Ready'}</h1>
                <h2>Route: {this.props.router ? this.props.router.route : ""}</h2>
                <p>Another prop: {this.props.testValue}</p>
            </div>
        );
    }
}

const TestComponent2WithRouter = withRouter(TestComponent2);
const res = <TestComponent2WithRouter testValue="" />;

interface TestSFCQuery {
    test?: string;
}

interface TestSFCProps extends WithRouterProps<TestSFCQuery> {
    testProp: string;
}

const TestSFC: React.SFC<TestSFCProps> = ({ router }) => {
    return <div>{router && router.query && router.query.test}</div>;
};
const TestSFCComponent = withRouter(TestSFC);

const res2 = <TestSFCComponent testProp="asdf"/>;

const TestSFC2 = withRouter<TestSFCProps>(({ router }) => {
    return <div>{router && router.query && router.query.test}</div>;
});

const res3 = <TestSFC2 testProp="asdf" />;

const TestSFC3 = withRouter(({ router }) => {
    return <div>{router && router.query && router.query.test}</div>;
});

const res4 = <TestSFC3 />;
