import {
    Link,
    Location,
    LocationProvider,
    Redirect,
    RouteComponentProps,
    Router,
    useLocation,
    useMatch,
    useParams,
} from "@gatsbyjs/reach-router";
import * as React from "react";
import { render } from "react-dom";

interface DashParams {
    id: string;
}

interface UseParamsCheckParams {
    value: string;
}

const Home = (props: RouteComponentProps) => <div>Home</div>;

const Dash = (props: RouteComponentProps<DashParams>) => <div>Dash for item ${props.id}</div>;

const NotFound = (props: RouteComponentProps) => <div>Route not found</div>;

const UseMatchCheck = (props: RouteComponentProps) => {
    const match = useMatch("/params/:one");
    return <div>{match ? match.one : "NO PATH PARAM"}</div>;
};

const UseLocationCheck = (props: RouteComponentProps) => {
    const { pathname, search, state, hash, key } = useLocation();
    return (
        <div>
            Pathname: {pathname}
            Search: {search}
            State: {JSON.stringify(state)}
            Hash: {hash}
            key: {key}
        </div>
    );
};

const UseParamsCheck = (props: RouteComponentProps) => {
    const params = useParams<UseParamsCheckParams>();
    return <div>{params.value}</div>;
};

render(
    <Router className="my-class">
        <Router component="div">
            <Home path="/" />
        </Router>
        <Router component={Home}>
            <Home path="/" />
        </Router>
        <Home path="/" />
        <Dash path="/default/:id" />
        <UseMatchCheck path="/params/*" />
        <UseLocationCheck path="/another-path" />
        <UseParamsCheck path="/current/:value" />
        <NotFound default />

        <Link to="/somepath" rel="noopener noreferrer" target="_blank" />
        <Redirect to="/somepath" replace={false} state={{ from: "/" }} />

        <Location>
            {context => (
                <>
                    <div>hostname is {context.location.hostname}</div>
                </>
            )}
        </Location>
        <LocationProvider>
            {context => (
                <>
                    <div>hostname is {context.location.hostname}</div>
                </>
            )}
        </LocationProvider>
    </Router>,
    document.getElementById("app-root"),
);

const handleRef = (el: HTMLAnchorElement) => {
    el.focus();
};

render(<Link innerRef={handleRef} to="./foo"></Link>, document.getElementById("app-root"));
render(<Link ref={handleRef} to="./foo"></Link>, document.getElementById("app-root"));

const refObject: React.RefObject<HTMLAnchorElement | null> = { current: null };
render(<Link innerRef={refObject} to="./foo"></Link>, document.getElementById("app-root"));
render(<Link ref={refObject} to="./foo"></Link>, document.getElementById("app-root"));

const elem: React.JSX.Element = <Link<number> state={5} to="./foo">Click me!</Link>;
