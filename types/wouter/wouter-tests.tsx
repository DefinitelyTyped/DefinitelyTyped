import * as React from "react";
import * as express from "express";
import { renderToString } from "react-dom/server";
import {
    Router,
    Route,
    Link,
    Switch,
    Redirect,
    useRouter,
    useRoute,
    Path,
    Params
} from "wouter";
import useLocation from "wouter/use-location";
import staticLocationHook = require("wouter/static-location");

const Inbox = () => <h1>Inbox</h1>;
const BaseTest = () => (
    <div className="app">
        <Link href="/users/alex">
            <a className="link">Profile</a>
        </Link>
        <Link to="/about">
            <a className="link">About Us</a>
        </Link>
        <Link href="/inbox" onClick={() => console.log("navigated to /inbox")}>
            <a className="link">Inbox</a>
        </Link>

        <Router>
            <Switch>
                <Route path="/about">About Us</Route>
                <Route path="/users/:name">
                    {params => <div>Hello, {params && params.name}!</div>}
                </Route>
                <Route path="/inbox" component={Inbox} />
            </Switch>
        </Router>
    </div>
);

<Redirect to="/users" />;

const UseRouterTest = () => {
    const { hook, matcher } = useRouter();
    const [path, push] = hook();
    const [match, params] = matcher("/users/:name", path);

    if (!match) return null;

    return (
        <div>
            <div>Your name is {params && params.name}</div>
            <div onClick={() => push("/orders")}>Orders</div>
        </div>
    );
};

const UseRouteTest = () => {
    const [match, params] = useRoute("/users/:name");

    if (!match) return null;

    return <div>Welcome, {params && params.name}!</div>;
};

const useLocationTest = () => {
    const [location, setLocation] = useLocation();

    return (
        <div>
            <div>Current location: {location}</div>
            <div onClick={() => setLocation("/home")}>Home</div>
        </div>
    );
};

/* staticLocationHook Test */
const app = express();
app.get("*", (req, res) => {
    const html = renderToString(
        <Router hook={staticLocationHook(req.path)}>
            <Route path="/a">A</Route>
            <Route path="/b">B</Route>
        </Router>
    );

    res.status(200).send(html);
});

/* customMatcher Test */
const customMatcher = (pattern: string, path: Path): [boolean, Params] => {
    const reversed = path
        .replace(/^\//, "")
        .split("")
        .reverse()
        .join("");

    return [pattern.replace(/^\//, "") === reversed, {}];
};

const customMatcherTest = () => (
    <Router matcher={customMatcher}>
        <Route path="/a">A</Route>
    </Router>
);
