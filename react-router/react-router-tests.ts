///<reference path="react-router.d.ts" />
"use strict";

import React = require('react');
import ReactAddons = require('react/addons');
import Router = require('react-router');

// Mixin
class NavigationTest<T extends Router.Navigation> {
    v: T;

    makePath() {
        var v1: string = this.v.makePath('to');
        var v2: string = this.v.makePath('to', {id: 1});
        var v3: string = this.v.makePath('to', {id: 1}, {type: 'json'});
    }
    makeHref() {
        var v1: string = this.v.makeHref('to');
        var v2: string = this.v.makeHref('to', {id: 1});
        var v3: string = this.v.makeHref('to', {id: 1}, {type: 'json'});
    }
    transitionTo() {
        var v1: void = this.v.transitionTo('to');
        var v2: void = this.v.transitionTo('to', {id: 1});
        var v3: void = this.v.transitionTo('to', {id: 1}, {type: 'json'});
    }
    replaceWith() {
        var v1: void = this.v.replaceWith('to');
        var v2: void = this.v.replaceWith('to', {id: 1});
        var v3: void = this.v.replaceWith('to', {id: 1}, {type: 'json'});
    }
    goBack() {
        var v1: void = this.v.goBack();
    }
}

class StateTest<T extends Router.State> {
    v: T;

    getPath() {
        var v1: string = this.v.getPath();
    }

    getRoutes() {
        var v1: Router.Route[] = this.v.getRoutes();
    }

    getPathname() {
        var v1: string = this.v.getPathname();
    }

    getParams() {
        var v1: {} = this.v.getParams();
    }

    getQuery() {
        var v1: {} = this.v.getQuery();
    }

    isActive() {
        var v1: boolean = this.v.isActive('to');
        var v2: boolean = this.v.isActive('to', {id: 1});
        var v3: boolean = this.v.isActive('to', {id: 1}, {type: 'json'});
    }
}


// Location
class LocationTest<T extends Router.Location> {
    v: T;

    push() {
        var v1: void = this.v.push('path/to/hoge');
    }

    replace() {
        var v1: void = this.v.replace('path/to/hoge');
    }

    pop() {
        var v1: void = this.v.pop();
    }

    getCurrentPath() {
        var v1: void = this.v.getCurrentPath();
    }
}
new LocationTest<Router.HashLocation>();
new LocationTest<Router.HistoryLocation>();
new LocationTest<Router.RefreshLocation>();

class LocationListenerTest<T extends Router.LocationListener> {
    v: T;

    addChangeListener() {
        var v1: void = this.v.addChangeListener(() => console.log(1));
    }

    removeChangeListener() {
        var v1: void = this.v.removeChangeListener(() => console.log(1));
    }
}
new LocationListenerTest<Router.HashLocation>();
new LocationListenerTest<Router.HistoryLocation>();


// Behavior
class ScrollBehaviorTest<T extends Router.ScrollBehaviorBase> {
    v: T;

    updateScrollPosition() {
        var v1: void = this.v.updateScrollPosition({x: 33, y: 102}, 'scrollTop');
    }
}
new ScrollBehaviorTest<Router.ImitateBrowserBehavior>();
new ScrollBehaviorTest<Router.ScrollToTopBehavior>();


// Component
class DefaultRouteTest {
    v: Router.DefaultRoute;

    props() {
        var name: string = this.v.props.name;
        var handler: React.ComponentClass<any> = this.v.props.handler;
    }

    createElement() {
        var Handler: React.ComponentClass<any>;
        React.createElement(Router.DefaultRoute, null);
        React.createElement(Router.DefaultRoute, {name: 'name', handler: Handler});

        ReactAddons.createElement(Router.DefaultRoute, null);
        ReactAddons.createElement(Router.DefaultRoute, {name: 'name', handler: Handler});
    }
}

class LinkTest {
    v: Router.Link;

    constructor() {
        new NavigationTest<Router.Link>();
        new StateTest<Router.Link>();
    }

    props() {
        var activeClassName: string = this.v.props.activeClassName;
        var to: string = this.v.props.to;
        var params: {} = this.v.props.params;
        var query: {} = this.v.props.query;
        var onClick: Function = this.v.props.onClick;
    }

    getHref() {
        var v1: string = this.v.getHref();
    }

    getClassName() {
        var v1: string = this.v.getClassName();
    }

    createElement() {
        React.createElement(Router.Link, null);
        React.createElement(Router.Link, {to: 'home'});
        React.createElement(Router.Link, {
            activeClassName: 'name',
            to: 'home',
            params: {},
            query: {},
            onClick: () => console.log(1)
        });

        ReactAddons.createElement(Router.Link, null);
        ReactAddons.createElement(Router.Link, {to: 'home'});
        ReactAddons.createElement(Router.Link, {
            activeClassName: 'name',
            to: 'home',
            params: {},
            query: {},
            onClick: () => console.log(1)
        });
    }
}

class NotFoundRouteTest {
    v: Router.NotFoundRoute;

    props() {
        var name: string = this.v.props.name;
        var handler: React.ComponentClass<any> = this.v.props.handler;
    }

    createElement() {
        var Handler: React.ComponentClass<any>;
        React.createElement(Router.NotFoundRoute, null);
        React.createElement(Router.NotFoundRoute, {handler: Handler});
        React.createElement(Router.NotFoundRoute, {handler: Handler, name: "home"});

        ReactAddons.createElement(Router.NotFoundRoute, null);
        ReactAddons.createElement(Router.NotFoundRoute, {handler: Handler});
        ReactAddons.createElement(Router.NotFoundRoute, {handler: Handler, name: "home"});
    }
}

class RedirectTest {
    v: Router.Redirect;

    props() {
        var path: string = this.v.props.path;
        var from: string = this.v.props.from;
        var to: string = this.v.props.to;
    }

    createElement() {
        React.createElement(Router.Redirect, null);
        React.createElement(Router.Redirect, {});
        React.createElement(Router.Redirect, {path: 'a', from: 'a', to: 'b'});

        ReactAddons.createElement(Router.Redirect, null);
        ReactAddons.createElement(Router.Redirect, {});
        ReactAddons.createElement(Router.Redirect, {path: 'a', from: 'a', to: 'b'});
    }
}

class RouteTest {
    v: Router.Route;

    props() {
        var name: string = this.v.props.name;
        var path: string = this.v.props.path;
        var handler: React.ComponentClass<any> = this.v.props.handler;
        var ignoreScrollBehavior: boolean = this.v.props.ignoreScrollBehavior;
    }

    createElement() {
        var Handler: React.ComponentClass<any>;
        React.createElement(Router.Route, null);
        React.createElement(Router.Route, {});
        React.createElement(Router.Route, {name: "home", path: "/", handler: Handler, ignoreScrollBehavior: true});

        ReactAddons.createElement(Router.Route, null);
        ReactAddons.createElement(Router.Route, {});
        ReactAddons.createElement(Router.Route, {name: "home", path: "/", handler: Handler, ignoreScrollBehavior: true});
    }
}

class RouteHandlerTest {
    v: Router.RouteHandler;

    createElement() {
        React.createElement(Router.RouteHandler, null);
        React.createElement(Router.RouteHandler, {});

        ReactAddons.createElement(Router.RouteHandler, null);
        ReactAddons.createElement(Router.RouteHandler, {});
    }
}


// History
class HistoryTest {
    v: Router.History;

    length() {
        var v1: number = this.v.length;
    }

    back() {
        var v1: void = this.v.back();
    }
}


// Router
class CreateTest {
    v: Router.Router;

    constructor() {
        // React.createElement() version
        this.v = Router.create({
            routes: React.createElement(Router.Route, null)
        });
        this.v = Router.create({
            routes: React.createElement(Router.Route, null),
            location: Router.HistoryLocation,
            scrollBehavior: Router.ImitateBrowserBehavior
        });

        // React.createFactory() version
        this.v = Router.create({
            routes: React.createFactory(Router.Route)()
        });
        this.v = Router.create({
            routes: React.createFactory(Router.Route)(),
            location: Router.HistoryLocation,
            scrollBehavior: Router.ImitateBrowserBehavior
        });
    }

    run() {
        this.v.run((Handler) => console.log(Handler));
        this.v.run((Handler, state) => console.log(Handler, state));
    }
}

class RunTest {
    constructor() {
        // React.createElement() version
        var v1: Router.Router = Router.run(React.createElement(Router.Route, null), (Handler) => {
            React.render(React.createElement(Handler, null), document.body);
        });
        var v2: Router.Router = Router.run(React.createElement(Router.Route, null), Router.HistoryLocation, (Handler, state) => {
            React.render(React.createElement(Handler, null), document.body);
        });
        var v3: Router.Router = Router.run(React.createElement(Router.Route, null), '/foo/bar', (Handler, state) => {
            React.render(React.createElement(Handler, null), document.body);
        });

        // React.createFactory() version
        var v4: Router.Router = Router.run(React.createFactory(Router.Route)(), (Handler) => {
            React.render(React.createElement(Handler, null), document.body);
        });
        var v5: Router.Router = Router.run(React.createFactory(Router.Route)(), Router.HistoryLocation, (Handler, state) => {
            React.render(React.createElement(Handler, null), document.body);
        });
        var v6: Router.Router = Router.run(React.createFactory(Router.Route)(), '/foo/bar', (Handler, state) => {
            React.render(React.createElement(Handler, null), document.body);
        });
    }
}


// Transition
class TransitionTest {
    constructor() {
        var v1: Router.TransitionStaticLifecycle = {
            willTransitionTo: (transition, params, query, callback) => {
                transition.abort();
                transition.redirect('to');
                transition.redirect('to', {id: 1});
                transition.redirect('to', {id: 1}, {type: 'json'});
                transition.retry();
            },
            willTransitionFrom: (transition, component, callback) => {}
        };
        var v2: Router.TransitionStaticLifecycle = {
            willTransitionTo: (transition, params, query) => {},
            willTransitionFrom: (transition, component) => {}
        };
        var v3: Router.TransitionStaticLifecycle = {
            willTransitionTo: (transition, params) => {},
            willTransitionFrom: (transition) => {}
        };
        var v4: Router.TransitionStaticLifecycle = {
            willTransitionTo: (transition) => {},
            willTransitionFrom: () => {}
        };
        var v5: Router.TransitionStaticLifecycle = {
            willTransitionTo: () => {}
        };
        var v6: Router.TransitionStaticLifecycle = {
            willTransitionFrom: () => {}
        };
    }
}


// Context
class ContextTest {
    v: Router.Context

    makePath() {
        var v1: string = this.v.makePath('home');
        var v2: string = this.v.makePath('home', {p1: 1});
        var v3: string = this.v.makePath('home', {p1: 1}, {q1: 1});
    }

    makeHref() {
        var v1: string = this.v.makeHref('home');
        var v2: string = this.v.makeHref('home', {p1: 1});
        var v3: string = this.v.makeHref('home', {p1: 1}, {q1: 1});
    }

    transitionTo() {
        var v1: void = this.v.transitionTo('home');
        var v2: void = this.v.transitionTo('home', {p1: 1});
        var v3: void = this.v.transitionTo('home', {p1: 1}, {q1: 1});
    }

    replaceWith() {
        var v1: void = this.v.replaceWith('home');
        var v2: void = this.v.replaceWith('home', {p1: 1});
        var v3: void = this.v.replaceWith('home', {p1: 1}, {q1: 1});
    }

    goBack() {
        var v: void = this.v.goBack();
    }

    getCurrentPath() {
        var v: string = this.v.getCurrentPath();
    }

    getCurrentRoutes() {
        var v: Router.Route[] = this.v.getCurrentRoutes();
    }

    getCurrentPathname() {
        var v: string = this.v.getCurrentPathname();
    }

    getCurrentParams() {
        var v: {} = this.v.getCurrentParams();
    }

    getCurrentQuery() {
        var v: {} = this.v.getCurrentQuery();
    }

    isActive() {
        var v1: boolean = this.v.isActive('home');
        var v2: boolean = this.v.isActive('home', {p1: 1});
        var v3: boolean = this.v.isActive('home', {p1: 1}, {q1: 1});
    }
}
