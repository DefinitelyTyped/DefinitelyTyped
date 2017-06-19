import * as React from "react";
import { Switch, Route, RouteComponentProps, BrowserRouter, Link } from "react-router-dom";
import {
    ScrollIntoView,
    ConfigSwitch,
    withScroll,
    OnUpdate,
    whenActive,
    Status,
    wrapSwitch,
    RouteConfiguration,
    GetKeyFunction,
    OnUpdateCall
} from "rrc";

class RouteOne extends React.Component<RouteComponentProps<{}>> {
    render() {
        return <div>
            <ConfigSwitch location={this.props.location} routes={[
                {
                    path: "/one/one",
                    render: () => <ScrollIntoView alignToTop id="id">
                        <div>Main view</div>
                    </ScrollIntoView>
                },
                { path: "/one/two", render: () => <div>One two route</div> }
            ]} />
        </div>;
    }
}

class RouteTwo extends React.Component<RouteComponentProps<{}>> {
    private onUpdate: OnUpdateCall = (location) => { console.log("update"); };

    render() {
        return <div>
            Route 2
            <Link to={{ pathname: "/one" }}>Go to Route 1</Link>
            <OnUpdate call={this.onUpdate} />
        </div >;
    }
}

interface LayoutProps {
    title: string;
    subtitle?: string;
}

class Layout extends React.Component<LayoutProps> {
    render() {
        return <div>
            <div>{`Layout ${this.props.title}`}</div>
            <div>
                <span>Content</span>
                {this.props.children}
            </div>
        </div>;
    }
}

const WrappedLayout = wrapSwitch(Layout);

interface Params {
    page: number;
}

class RouteFour extends React.Component<RouteComponentProps<{}>> {
    private routes: RouteConfiguration[] = [
        { path: "/four/something/:page", component: RouteTwo }
    ];

    private getKey: GetKeyFunction<Params> = (match, route, location) => {
        return "my-key-" + match.url;
    }

    render() {
        return <div>
            <div>
                Route four
            </div>
            <div>
                <WrappedLayout
                    getKey={this.getKey}
                    routes={this.routes}
                    location={this.props.location}
                    title="wrapped layout title"
                />
            </div>
        </div>;
    }
}

interface MyContainerProps {
    className?: string;
    color: number;
}

class MyContainer extends React.Component<MyContainerProps> {
    render() {
        return <div className={this.props.className}>
            {this.props.children}
        </div>;
    }
}

const ExtendedContainer = whenActive<MyContainerProps>({ className: "active" })(MyContainer);

const RouteTwoWithScroll = withScroll(RouteTwo);

export const Routes =
    <BrowserRouter>
        <div>
            <div>My page</div>
            <Switch >
                <Route path="/one" component={RouteOne} />
                <Route path="/two" component={RouteTwoWithScroll} />
                <Route path="/four" component={RouteFour} />
                <Route strict path="/" render={() => <ExtendedContainer className="extended-container" color={3}>Route 3</ExtendedContainer>} />
            </Switch>
            <Status code="200" />
        </div>
    </BrowserRouter>;
