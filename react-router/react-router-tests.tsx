
/// <reference path="../react/react.d.ts" />
/// <reference path="../react/react-dom.d.ts" />
/// <reference path="./history.d.ts" />
/// <reference path="./react-router.d.ts" />


import * as React from "react"
import * as ReactDOM from "react-dom"

import { browserHistory, hashHistory, Router, Route, IndexRoute, Link } from "react-router"

class Master extends React.Component<React.Props<{}>, {}> {

	render() {
		return <div>
			<h1>Master</h1>
			<Link to="/">Dashboard</Link> <Link to="/users">Users</Link>
			<p>{this.props.children}</p>
		</div>
	}

}


class Dashboard extends React.Component<{}, {}> {

	render() {
		return <div>
			This is a dashboard
		</div>
	}

}

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
			<IndexRoute component={Dashboard} />
			<Route path="users" component={Users}/>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>
), document.body)
