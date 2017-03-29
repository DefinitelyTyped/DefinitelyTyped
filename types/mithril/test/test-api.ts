// Typescript adaptation of mithril's test suite.
// Not intended to be run; only to compile & check types.

import * as m from 'mithril'
import * as stream from 'mithril/stream'

const FRAME_BUDGET = 100

{
	let vnode = m("div")
	console.assert(vnode.tag === "div")
	console.assert(typeof m.version === "string")
	console.assert(m.version.indexOf(".") > -1)
}

{
	const vnode = m.trust("<br>")
}

{
	const vnode = m.fragment({key: 123}, [m("div")])
	console.assert((vnode.children as m.Vnode<any,any>[]).length === 1)
	console.assert(vnode.children![0].tag === 'div')
}

{
	const handler = m.withAttr("value", (value) => {})
	handler({currentTarget: {value: 10}})
}

{
	const params = m.parseQueryString("?a=1&b=2")
	const query = m.buildQueryString({a: 1, b: 2})
}

{
	const root = window.document.createElement("div")
	m.render(root, m("div"))
	console.assert(root.childNodes.length === 1)
}

{
	const root = window.document.createElement("div")
	m.mount(root, {view: function() {return m("div")}})
	console.assert(root.childNodes.length === 1)
	console.assert(root.firstChild!.nodeName === "DIV")
}

{
	const root = window.document.createElement("div")
	m.route(root, "/a", {
		"/a": {view: function() {return m("div")}}
	})

	setTimeout(function() {
		console.assert(root.childNodes.length === 1)
		console.assert(root.firstChild!.nodeName === "DIV")
	}, FRAME_BUDGET)
}

{
	const root = window.document.createElement("div")
	m.route.prefix("#")
	m.route(root, "/a", {
		"/a": {view: function() {return m("div")}}
	})

	setTimeout(function() {
		console.assert(root.childNodes.length === 1)
		console.assert(root.firstChild!.nodeName === "DIV")
	}, FRAME_BUDGET)
}

{
	const root = window.document.createElement("div")
	m.route(root, "/a", {
		"/a": {view: function() {return m("div")}}
	})

	setTimeout(function() {
		console.assert(m.route.get() === "/a")
	}, FRAME_BUDGET)
}

{
	const root = window.document.createElement("div")
	m.route(root, "/a", {
		"/:id": {view: function() {return m("div")}}
	})

	setTimeout(function() {
		m.route.set("/b")
		setTimeout(function() {
			console.assert(m.route.get() === "/b")
		}, FRAME_BUDGET)
	}, FRAME_BUDGET)
}

{
	let count = 0
	const root = window.document.createElement("div")
	m.mount(root, {view: function() {count++}})
	setTimeout(function() {
		m.redraw()
		console.assert(count === 2)
	}, FRAME_BUDGET)
}

//
// Additional tests by andraaspar
//

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/hyperscript.html#components
////////////////////////////////////////////////////////////////////////////////

;(function() {

	// define a component
	let Greeter: m.Comp<{}, {}> = {
		view: function(vnode) {
			return m("div", vnode.attrs, ["Hello ", vnode.children])
		}
	}

	// consume it
	m(Greeter, { style: "color:red;" }, "world")

})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/hyperscript.html#keys
////////////////////////////////////////////////////////////////////////////////

;(function() {

	let users = [
		{ id: 1, name: "John" },
		{ id: 2, name: "Mary" },
	]

	function userInputs(users: { id: number, name: string }[]) {
		return users.map(function(u) {
			return m("input", { key: u.id }, u.name)
		})
	}

	m.render(document.body, userInputs(users))

})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/components.html#state
////////////////////////////////////////////////////////////////////////////////

;(function() {
	let ComponentWithInitialState: m.Comp<{}, {data: string}> = {
		data: "Initial content",
		view: function(vnode) {
			return m("div", vnode.state.data)
		}
	}

	m(ComponentWithInitialState)
})

;(function() {
	let ComponentWithDynamicState: m.Comp<{text: string}, {data?: string}> = {
		oninit: function(vnode) {
			vnode.state.data = vnode.attrs.text
		},
		view: function(vnode) {
			return m("div", vnode.state.data)
		}
	}

	m(ComponentWithDynamicState, { text: "Hello" })
})

;(function() {
	let ComponentUsingThis: m.Comp<{text: string}, {data?: string}> = {
		oninit: function(vnode) {
			this.data = vnode.attrs.text
		},
		view: function(vnode) {
			return m("div", this.data)
		}
	}

	m(ComponentUsingThis, { text: "Hello" })
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/lifecycle-methods.html
////////////////////////////////////////////////////////////////////////////////

;(function() {
	let Fader: m.Comp<{}, {}> = {
		onbeforeremove: function(vnode) {
			vnode.dom.classList.add("fade-out")
			return new Promise(function(resolve) {
				setTimeout(resolve, 1000)
			})
		},
		view: function() {
			return m("div", "Bye")
		},
	}
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/route.html#wrapping-a-layout-component
////////////////////////////////////////////////////////////////////////////////

;(function() {

	let Home = {
		view: function() {
			return "Welcome"
		}
	}

	let state = {
		term: "",
		search: function() {
			// save the state for this route
			// this is equivalent to `history.replaceState({term: state.term}, null, location.href)`
			m.route.set(m.route.get(), null, { replace: true, state: { term: state.term } })

			// navigate away
			location.href = "https://google.com/?q=" + state.term
		}
	}

	let Form: m.Comp<{term: string}, {}> = {
		oninit: function(vnode) {
			state.term = vnode.attrs.term || "" // populated from the `history.state` property if the user presses the back button
		},
		view: function() {
			return m("form", [
				m("input[placeholder='Search']", { oninput: m.withAttr("value", function(v) { state.term = v }), value: state.term }),
				m("button", { onclick: state.search }, "Search")
			])
		}
	}

	let Layout: m.Comp<{}, {}> = {
		view: function(vnode) {
			return m(".layout", vnode.children)
		}
	}

	// example 1
	m.route(document.body, "/", {
		"/": {
			view: function() {
				return m(Layout, m(Home))
			},
		},
		"/form": {
			view: function() {
				return m(Layout, m(Form))
			},
		}
	})

	// example 2
	m.route(document.body, "/", {
		"/": {
			render: function() {
				return m(Layout, m(Home))
			},
		},
		"/form": {
			render: function() {
				return m(Layout, m(Form))
			},
		}
	})

	// functionally equivalent to example 1
	let Anon1 = {
		view: function() {
			return m(Layout, m(Home))
		},
	}
	let Anon2 = {
		view: function() {
			return m(Layout, m(Form))
		},
	}

	m.route(document.body, "/", {
		"/": {
			render: function() {
				return m(Anon1)
			}
		},
		"/form": {
			render: function() {
				return m(Anon2)
			}
		},
	})
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/route.html#preloading-data
////////////////////////////////////////////////////////////////////////////////

;(function() {
	let state = {
		users: <any[]>[],
		loadUsers: function() {
			return m.request<any>("/api/v1/users").then(function(users) {
				state.users = users
			})
		}
	}

	m.route(document.body, "/user/list", {
		"/user/list": {
			onmatch: state.loadUsers,
			render: function() {
				return state.users.map(function(user) {
					return m("div", user.id)
				})
			}
		},
	})
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/request.html#monitoring-progress
////////////////////////////////////////////////////////////////////////////////

;(function() {
	let progress = 0

	m.mount(document.body, {
		view: function() {
			return [
				m("input[type=file]", { onchange: upload }),
				progress + "% completed"
			]
		}
	})

	function upload(e: Event) {
		let file = (<FileList>(<HTMLInputElement>e.target).files)[0]

		let data = new FormData()
		data.append("myfile", file)

		m.request({
			method: "POST",
			url: "/api/v1/upload",
			data: data,
			config: function(xhr) {
				xhr.addEventListener("progress", function(e) {
					progress = e.loaded / e.total

					m.redraw() // tell Mithril that data changed and a re-render is needed
				})
			}
		})
	}
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/request.html#casting-response-to-a-type
////////////////////////////////////////////////////////////////////////////////

;(function() {

	// Start rewrite to TypeScript
	class User {
		name: string;
		constructor(data: any) {
			this.name = data.firstName + " " + data.lastName
		}
	}
	// End rewrite to TypeScript

	// function User(data) {
	// 	this.name = data.firstName + " " + data.lastName
	// }

	m.request<User[]>({
		method: "GET",
		url: "/api/v1/users",
		type: User
	})
	.then(function(users) {
		console.log(users[0].name) // logs a name
	})
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/request.html#non-json-responses
////////////////////////////////////////////////////////////////////////////////

;(function() {
	m.request<string>({
		method: "GET",
		url: "/files/icon.svg",
		deserialize: function(value) { return value }
	})
	.then(function(svg) {
		m.render(document.body, m.trust(svg))
	})
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/jsonp.html
////////////////////////////////////////////////////////////////////////////////

;(function() {
	m.jsonp({
		url: "/api/v1/users/:id",
		data: { id: 1 },
		callbackKey: "callback",
	})
	.then(function(result) {
		console.log(result)
	})
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/fragment.html
////////////////////////////////////////////////////////////////////////////////

;(function() {
	let groupVisible = true
	let log = function() {
		console.log("group is now visible")
	}

	m("ul", [
		m("li", "child 1"),
		m("li", "child 2"),
		groupVisible ? m.fragment({ oninit: log }, [
			// a fragment containing two elements
			m("li", "child 3"),
			m("li", "child 4"),
		]) : null
	])
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/stream.html#computed-properties
////////////////////////////////////////////////////////////////////////////////

;(function() {
	let firstName = stream("John")
	let lastName = stream("Doe")
	let fullName = stream.merge([firstName, lastName]).map(function(values) {
		return values.join(" ")
	})

	console.log(fullName()) // logs "John Doe"

	firstName("Mary")

	console.log(fullName()) // logs "Mary Doe"
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/stream.html#chaining-streams
////////////////////////////////////////////////////////////////////////////////

;(function() {
	let halted = stream(1).map(function(value) {
		return stream.HALT
	})

	halted.map(function() {
		// never runs
	})
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/stream.html#combining-streams
////////////////////////////////////////////////////////////////////////////////

;(function() {
	let a = stream(5)
	let b = stream(7)

	let added = stream.combine(function(a: stream.Stream<number>, b: stream.Stream<number>) {
		return a() + b()
	}, [a, b])

	console.log(added()) // logs 12
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/stream.html#ended-state
////////////////////////////////////////////////////////////////////////////////

;(function() {
	let value = stream<number>()
	let doubled = value.map(function(value) { return value * 2 })

	value.end(true) // set to ended state

	value(5)

	console.log(doubled())
})

////////////////////////////////////////////////////////////////////////////////
// https://github.com/lhorie/mithril.js/blob/master/examples/animation/mosaic.html
////////////////////////////////////////////////////////////////////////////////

// Excerpt

;(function() {

	let root = (<Element>document.getElementById("root"))

	let empty: any[] = []
	let full: any[] = []
	for (let i = 0; i < 100; i++) full.push(i)

	let cells: any[]

	function view() {
		return m(".container", cells.map(function(i) {
			return m(".slice", {
				style: {backgroundPosition: (i % 10 * 11) + "% " + (Math.floor(i / 10) * 11) + "%"},
				onbeforeremove: exit
			})
		}))
	}

	function exit(vnode: m.VnodeDOM<any, any>) {
		vnode.dom.classList.add("exit")
		return new Promise(function(resolve) {
			setTimeout(resolve, 1000)
		})
	}

	function run() {
		cells = cells === full ? empty : full

		m.render(root, [view()])

		setTimeout(run, 2000)
	}

	run()

})

////////////////////////////////////////////////////////////////////////////////
// https://github.com/lhorie/mithril.js/blob/master/examples/editor/index.html
////////////////////////////////////////////////////////////////////////////////

// Excerpt

;(function() {

	// Start extra declarations
	let marked = (v: string) => v
	// End extra declarations

	//model
	let state = {
		text: "# Markdown Editor\n\nType on the left panel and see the result on the right panel",
		update: function(value: string) {
			state.text = value
		}
	}

	//view
	let Editor = {
		view: function() {
			return [
				m("textarea.input", {
					oninput: m.withAttr("value", state.update),
					value: state.text
				}),
				m(".preview", m.trust(marked(state.text))),
			]
		}
	}

	m.mount(<Element>document.getElementById("editor"), Editor)

})

////////////////////////////////////////////////////////////////////////////////
// https://github.com/lhorie/mithril.js/blob/master/examples/todomvc/todomvc.js
////////////////////////////////////////////////////////////////////////////////

;(function() {

	//model
	let state = {
		dispatch: function(action: string, args?: any) {
			(<any>state)[action].apply(state, args || [])
			requestAnimationFrame(function() {
				localStorage["todos-mithril"] = JSON.stringify(state.todos)
			})
		},

		todos: JSON.parse(localStorage["todos-mithril"] || "[]"),
		editing: <any>null,
		filter: "",
		remaining: 0,
		todosByStatus: <any>[],
		showing: <string><any>undefined,

		createTodo: function(title: string) {
			state.todos.push({title: title.trim(), completed: false})
		},
		setStatuses: function(completed: boolean) {
			for (let i = 0; i < state.todos.length; i++) state.todos[i].completed = completed
		},
		setStatus: function(todo: any, completed: boolean) {
			todo.completed = completed
		},
		destroy: function(todo: any) {
			let index = state.todos.indexOf(todo)
			if (index > -1) state.todos.splice(index, 1)
		},
		clear: function() {
			for (let i = 0; i < state.todos.length; i++) {
				if (state.todos[i].completed) state.destroy(state.todos[i--])
			}
		},

		edit: function(todo: any) {
			state.editing = todo
		},
		update: function(title: string) {
			if (state.editing != null) {
				state.editing.title = title.trim()
				if (state.editing.title === "") state.destroy(state.editing)
				state.editing = null
			}
		},
		reset: function() {
			state.editing = null
		},

		computed: function(vnode: m.Vnode<any, any>) {
			state.showing = vnode.attrs.status || ""
			state.remaining = state.todos.filter(function(todo: any) {return !todo.completed}).length
			state.todosByStatus = state.todos.filter(function(todo: any) {
				switch (state.showing) {
					case "": return true
					case "active": return !todo.completed
					case "completed": return todo.completed
				}
			})
		}
	}

	//view
	let Todos: m.Comp<{}, {
		add(e: Event): void
		toggleAll(): void
		toggle(todo: any): void
		focus(vnode: m.VnodeDOM<any, any>, todo: any): void
		save(e: KeyboardEvent): void
	}> = {
		add: function(e: KeyboardEvent) {
			if (e.keyCode === 13) {
				state.dispatch("createTodo", [(<HTMLInputElement>e.target).value]);
				(<HTMLInputElement>e.target).value = ""
			}
		},
		toggleAll: function() {
			state.dispatch("setStatuses", [(<HTMLInputElement>document.getElementById("toggle-all")).checked])
		},
		toggle: function(todo: any) {
			state.dispatch("setStatus", [todo, !todo.completed])
		},
		focus: function(vnode: m.VnodeDOM<any, any>, todo: any) {
			if (todo === state.editing && vnode.dom !== document.activeElement) {
				(<HTMLInputElement>vnode.dom).value = todo.title
				(<HTMLInputElement>vnode.dom).focus()
				(<HTMLInputElement>vnode.dom).selectionStart = (<HTMLInputElement>vnode.dom).selectionEnd = todo.title.length
			}
		},
		save: function(e: KeyboardEvent) {
			if (e.keyCode === 13 || e.type === "blur") state.dispatch("update", [(<HTMLInputElement>e.target).value])
			else if (e.keyCode === 27) state.dispatch("reset")
		},
		oninit: state.computed,
		onbeforeupdate: state.computed,
		view: function(vnode) {
			let ui = vnode.state
			return [
				m("header.header", [
					m("h1", "todos"),
					m("input#new-todo[placeholder='What needs to be done?'][autofocus]", {onkeypress: ui.add}),
				]),
				m("section#main", {style: {display: state.todos.length > 0 ? "" : "none"}}, [
					m("input#toggle-all[type='checkbox']", {checked: state.remaining === 0, onclick: ui.toggleAll}),
					m("label[for='toggle-all']", {onclick: ui.toggleAll}, "Mark all as complete"),
					m("ul#todo-list", [
						state.todosByStatus.map(function(todo: any) {
							return m("li", {class: (todo.completed ? "completed" : "") + " " + (todo === state.editing ? "editing" : "")}, [
								m(".view", [
									m("input.toggle[type='checkbox']", {checked: todo.completed, onclick: function() {ui.toggle(todo)}}),
									m("label", {ondblclick: function() {state.dispatch("edit", [todo])}}, todo.title),
									m("button.destroy", {onclick: function() {state.dispatch("destroy", [todo])}}),
								]),
								m("input.edit", {onupdate: function(vnode: m.VnodeDOM<any, any>) {ui.focus(vnode, todo)}, onkeypress: ui.save, onblur: ui.save})
							])
						}),
					]),
				]),
				state.todos.length ? m("footer#footer", [
					m("span#todo-count", [
						m("strong", state.remaining),
						state.remaining === 1 ? " item left" : " items left",
					]),
					m("ul#filters", [
						m("li", m("a[href='/']", {oncreate: m.route.link, class: state.showing === "" ? "selected" : ""}, "All")),
						m("li", m("a[href='/active']", {oncreate: m.route.link, class: state.showing === "active" ? "selected" : ""}, "Active")),
						m("li", m("a[href='/completed']", {oncreate: m.route.link, class: state.showing === "completed" ? "selected" : ""}, "Completed")),
					]),
					m("button#clear-completed", {onclick: function() {state.dispatch("clear")}}, "Clear completed"),
				]) : null,
			]
		}
	}

	m.route(document.getElementById("todoapp")!, "/", {
		"/": Todos,
		"/:status": Todos,
	})

})
