import { CommandLineRouter, Route, Router, Switch, withRouter } from "@giusto/ink-router";
import * as React from "react";

const HomeView = () => {
    return <></>;
};

const test1 = () => {
    return (
        <Router>
            <Route exact path="/" component={HomeView} />
            <Route path="/settings" component={HomeView} />
        </Router>
    );
};

const test2 = () => {
    return (
        <CommandLineRouter>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/settings" component={HomeView} />
            </Switch>
        </CommandLineRouter>
    );
};

const test3 = () => {
    return (
        <CommandLineRouter>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/settings" component={HomeView} />
                <Route path="/" component={HomeView} />
            </Switch>
        </CommandLineRouter>
    );
};

withRouter(HomeView);
