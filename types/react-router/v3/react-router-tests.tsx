import * as React from "react";
import { Component, ValidationMap } from "react";
import * as ReactDOM from "react-dom";
import { renderToString } from "react-dom/server";

import {
	applyRouterMiddleware,
	browserHistory,
	hashHistory,
	match,
	createMemoryHistory,
	useRouterHistory,
	withRouter,
	routerShape,
	Router,
	Route,
	IndexRoute,
	InjectedRouter,
	Link,
	RouterContext,
	LinkProps,
	RedirectFunction,
	RouteComponentProps,
	WithRouterProps
} from "react-router";
import { createHistory, History } from "history";

const routerHistory = useRouterHistory(createHistory)({ basename: "/test" });

interface CustomHistory {
	test(): void;
}

type CombinedHistory = History & CustomHistory;

function createCustomHistory(history: History): CombinedHistory {
	return Object.assign(history, { test() { } }); // tslint:disable-line prefer-object-spread
}
const customHistory = createCustomHistory(browserHistory);

const NavLink = (props: LinkProps) => (
	<Link {...props} activeClassName="active" />
);

interface MasterContext {
	router: InjectedRouter;
}

class Master extends Component {
	static contextTypes: ValidationMap<any> = {
		router: routerShape
	};

	context: MasterContext;

	navigate() {
		const router = this.context.router;
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
		</div>;
	}
}

class Dashboard extends React.Component<WithRouterProps> {
	static staticMethodToBeHoisted(): void { }

	navigate() {
		const router = this.props.router;
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
		</div>;
	}
}

const DashboardWithRouter = withRouter(Dashboard);

DashboardWithRouter.staticMethodToBeHoisted();

class NotFound extends React.Component {
	render() {
		return <div>
			This path does not exists
		</div>;
	}
}

interface UserListProps {
	users: string;
}

class UserList extends React.Component<UserListProps & WithRouterProps> {
	render() {
		const { location, params, router, routes } = this.props;
		return <div>
			<ul>
				<li>{this.props.users}</li>
			</ul>
		</div>;
	}
}

const UserListWithRouter = withRouter(UserList);

type UsersProps = RouteComponentProps<{}, {}>;

class Users extends React.Component<UsersProps> {
	render() {
		const { location, params, route, routes, router, routeParams } = this.props;
		return <div>
			This is a user list
			<UserListWithRouter users="Suzanne, Fred" />
		</div>;
	}
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Master}>
			<IndexRoute component={DashboardWithRouter} />
			<Route path="users" component={Users} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
), document.body);

ReactDOM.render((
	<Router history={routerHistory}>
		<Route path="/" component={Master} />
	</Router>
), document.body);

ReactDOM.render((
	<Router history={customHistory}>
		<Route path="/" component={Master} />
	</Router>
), document.body);

const history = createMemoryHistory({ current: "baseurl" });
const routes = (
	<Route path="/" component={Master}>
		<IndexRoute component={DashboardWithRouter} />
		<Route path="users" component={Users} />
	</Route>
);

match({ routes, location: "baseurl" }, (error, redirectLocation, renderProps) => {
	renderToString(<RouterContext {...renderProps} />);
});

match({ history, routes }, (error, redirectLocation, renderProps) => {
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
