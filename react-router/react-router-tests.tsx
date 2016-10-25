
/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./history.d.ts" />
/// <reference path="./react-router.d.ts" />


import * as React from "react"
import * as ReactDOM from "react-dom"
import {renderToString} from "react-dom/server";

import { browserHistory, hashHistory, createMemoryHistory, match, withRouter, Router, RouterContext, Route, IndexRoute, Link} from "react-router"
import { routerShape, locationShape } from "react-router/lib/PropTypes"

interface MasterContext {
	router: ReactRouter.RouterOnContext;
}

class Master extends React.Component<React.Props<{}>, {}> {

	static contextTypes: React.ValidationMap<any> = {
		router: routerShape
	};
	context: MasterContext;

	navigate() {
		var router = this.context.router;
		router.push("/users");
		router.push({
			pathname: "/users/12",
			query: { modal: true },
			state: { fromDashboard: true }
		});
	}

	render() {
		return <div>
			<h1>Master</h1>
			<Link to="/">Dashboard</Link> <Link to="/users">Users</Link>
			<p>{this.props.children}</p>
		</div>
	}

}

interface DashboardProps {
	router: ReactRouter.InjectedRouter
};

class Dashboard extends React.Component<DashboardProps, {}> {

	navigate() {
		var router = this.props.router;
		router.push("/users");
		router.push({
			pathname: "/users/12",
			query: { modal: true },
			state: { fromDashboard: true }
		});
	}

	render() {
		return <div>
			This is a dashboard
		</div>
	}

}

const DashboardWithRouter = withRouter(Dashboard)

class NotFound extends React.Component<{}, {}> {

	render() {
		return <div>
			This path does not exists
		</div>
	}

}


class Users extends React.Component<{}, {}> {

	render() {
		return <div>
			This is a user list
		</div>
	}

}


ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Master}>
			<IndexRoute component={DashboardWithRouter} />
			<Route path="users" component={Users}/>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>
), document.body)


const history = createMemoryHistory("baseurl");
const routes = (
	<Route path="/" component={Master}>
		<IndexRoute component={DashboardWithRouter} />
		<Route path="users" component={Users}/>
	</Route>
);

match({history, routes, location: "baseurl"}, (error, redirectLocation, renderProps) => {
	renderToString(<RouterContext {...renderProps} />);
});
