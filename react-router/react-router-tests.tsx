import * as React from "react"
import * as ReactDOM from "react-dom"
import {renderToString} from "react-dom/server";

import { applyRouterMiddleware, browserHistory, hashHistory, match, createMemoryHistory, withRouter, routerShape, Router, Route, IndexRoute, InjectedRouter, Link, RouterOnContext, RouterContext, LinkProps} from "react-router";

const NavLink = (props: LinkProps) => (
	<Link {...props} activeClassName="active" />
)

interface MasterContext {
	router: RouterOnContext;
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
			<Link to="/">Dashboard</Link> <NavLink to="/users">Users</NavLink>
			<p>{this.props.children}</p>
		</div>
	}

}

interface DashboardProps {
	router: InjectedRouter
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

ReactDOM.render((
	<Router
		history={history}
		routes={routes}
		render={applyRouterMiddleware({
			renderRouteComponent: child => child
		})}
	>
	</Router>
), document.body);
