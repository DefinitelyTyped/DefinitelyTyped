/// <reference path="../react/react-global.d.ts" />
/// <reference path="react-router.d.ts" />
///
// From https://github.com/rackt/react-router/blob/master/docs/guides/overview.md

import Router = require('react-router');

var DefaultRoute = React.createFactory(Router.DefaultRoute);
var Link         = React.createFactory(Router.Link);
var Route        = React.createFactory(Router.Route);
var RouteHandler = React.createFactory(Router.RouteHandler);

var DOM = React.DOM;

class App extends React.Component<any, any> {
    DisplayName = 'App';
    render() {
        return DOM.div(
            {},
            DOM.header(
                {},
                DOM.ul(
                    {},
                    DOM.li({}, Link({to: 'app'}, 'Dashboard')),
                    DOM.li({}, Link({to: 'inbox'}, 'Inbox')),
                    DOM.li({}, Link({to: 'calendar'}, 'Calendar'))),
                'Logged in as Jane'),
            //
            // Or you can write RouteHandler({}), using the factory
            // created above
            //
            React.createElement(Router.RouteHandler, {}));
    }
}

class Inbox extends React.Component<any, any> {
    DisplayName = 'Inbox';
    render() {
        return DOM.div(
            {},
            React.createElement(Toolbar, {}),
            React.createElement(Messages, {}),
            RouteHandler({})
        );
    }
}

class Calendar extends React.Component<any, any> {
    DisplayName = 'Calendar';
    render = () => DOM.p ({}, 'Calendar');
}

class Dashboard extends React.Component<any, any> {
    DisplayName = 'Dashboard';
    render = () => DOM.p ({}, 'Dashboard');
}

class Toolbar extends React.Component<any, any> {
    DisplayName = 'Toolbar';
    render = () => DOM.p ({}, 'Toolbar');
}

class Messages extends React.Component<any, any> {
    static contextTypes: React.ValidationMap<Router.Context> = {
        router: React.PropTypes.func
    }

    DisplayName = 'Messages';
    render() { return DOM.p ({}, this.context.router.getCurrentParams().messageId); }
}

class InboxStats extends React.Component<any, any> {
    DisplayName = 'InboxStats';
    render = () => DOM.p ({}, 'InboxStats');
}

var routes = Route(
    { name: 'app', path: '/', handler: App },
    Route(
        { name: 'inbox', handler: Inbox },
        Route({ name: 'message', path: ':messageId', handler: Messages }),
        DefaultRoute({ handler: InboxStats })),
    Route({name: 'calendar', handler: Calendar }),
    DefaultRoute({ handler: Dashboard}));

Router.run(routes, function (Handler) {
    React.render(React.createElement(Handler, {}), document.body);
});
