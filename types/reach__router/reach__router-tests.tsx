import { Link, RouteComponentProps, Router } from "@reach/router";
import * as React from "react";
import { render } from "react-dom";

interface DashParams {
    id: string;
}

const Home = (props: RouteComponentProps) => <div>Home</div>;

const Dash = (props: RouteComponentProps<DashParams>) => (
    <div>Dash for item ${props.id}</div>
);

const NotFound = (props: RouteComponentProps) => <div>Route not found</div>;

render(
    <Router>
        <Home path="/" />
        <Dash path="/default/:id" />
        <NotFound default />

        <Link to="/somepath" rel="noopener noreferrer" target="_blank" />
    </Router>,
    document.getElementById("app-root"),
);
