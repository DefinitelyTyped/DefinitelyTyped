////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/hyperscript.html#components
////////////////////////////////////////////////////////////////////////////////

;(function() {

	// define a component
	var Greeter: Mithril.Component<any, any> = {
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

	var users = [
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
	var ComponentWithInitialState: Mithril.Component<{data: string}, {}> = {
		data: "Initial content",
		view: function(vnode) {
			return m("div", vnode.state.data)
		}
	}

	m(ComponentWithInitialState)
})

;(function() {
	var ComponentWithDynamicState: Mithril.Component<{data: string}, {text: string}> = {
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
	var ComponentUsingThis: Mithril.Component<{data: string}, {text: string}> = {
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
	var Fader: Mithril.Component<any, any> = {
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
	
	var Home = {
		view: function() {
			return "Welcome"
		}
	}
	
	var state = {
		term: "",
		search: function() {
			// save the state for this route
			// this is equivalent to `history.replaceState({term: state.term}, null, location.href)`
			m.route.set(m.route.get(), null, { replace: true, state: { term: state.term } })

			// navigate away
			location.href = "https://google.com/?q=" + state.term
		}
	}
	
	var Form: Mithril.Component<{term: string}, {term: string}> = {
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
	
	var Layout: Mithril.Component<any, any> = {
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
	var Anon1 = {
		view: function() {
			return m(Layout, m(Home))
		},
	}
	var Anon2 = {
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
	var state = {
		users: <any[]>[],
		loadUsers: function() {
			return m.request("/api/v1/users").then(function(users) {
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
	var progress = 0

	m.mount(document.body, {
		view: function() {
			return [
				m("input[type=file]", { onchange: upload }),
				progress + "% completed"
			]
		}
	})

	function upload(e: Event) {
		var file = (<HTMLInputElement>e.target).files[0]

		var data = new FormData()
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

	m.request({
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
	m.request({
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
	var groupVisible = true
	var log = function() {
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
	var firstName = stream("John")
	var lastName = stream("Doe")
	var fullName = stream.merge([firstName, lastName]).map(function(values) {
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
	var halted = stream(1).map(function(value) {
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
	var a = stream(5)
	var b = stream(7)

	var added = stream.combine(function(a: Mithril.Stream<number>, b: Mithril.Stream<number>) {
		return a() + b()
	}, [a, b])

	console.log(added()) // logs 12
})

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/stream.html#ended-state
////////////////////////////////////////////////////////////////////////////////

;(function() {
	var value = stream<number>()
	var doubled = value.map(function(value) { return value * 2 })

	value.end(true) // set to ended state

	value(5)

	console.log(doubled())
})

////////////////////////////////////////////////////////////////////////////////
// https://github.com/lhorie/mithril.js/blob/master/examples/animation/mosaic.html
////////////////////////////////////////////////////////////////////////////////

// Excerpt

;(function() {

	var root = document.getElementById("root")

	var empty: any[] = []
	var full: any[] = []
	for (var i = 0; i < 100; i++) full.push(i)

	var cells: any[]

	function view() {
		return m(".container", cells.map(function(i) {
			return m(".slice", {
				style: {backgroundPosition: (i % 10 * 11) + "% " + (Math.floor(i / 10) * 11) + "%"},
				onbeforeremove: exit
			})
		}))
	}

	function exit(vnode: Mithril.Vnode<any, any>) {
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
	var marked = (v: string) => v
	// End extra declarations

	//model
	var state = {
		text: "# Markdown Editor\n\nType on the left panel and see the result on the right panel",
		update: function(value: string) {
			state.text = value
		}
	}

	//view
	var Editor = {
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

	m.mount(document.getElementById("editor"), Editor)

})

////////////////////////////////////////////////////////////////////////////////
// https://github.com/lhorie/mithril.js/blob/master/examples/todomvc/todomvc.js
////////////////////////////////////////////////////////////////////////////////

;(function() {

	//model
	var state = {
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
		showing: <string>undefined,

		createTodo: function(title: string) {
			state.todos.push({title: title.trim(), completed: false})
		},
		setStatuses: function(completed: boolean) {
			for (var i = 0; i < state.todos.length; i++) state.todos[i].completed = completed
		},
		setStatus: function(todo: any, completed: boolean) {
			todo.completed = completed
		},
		destroy: function(todo: any) {
			var index = state.todos.indexOf(todo)
			if (index > -1) state.todos.splice(index, 1)
		},
		clear: function() {
			for (var i = 0; i < state.todos.length; i++) {
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

		computed: function(vnode: Mithril.Vnode<any, any>) {
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
	var Todos: Mithril.Component<{
		add(e: Event): void
		toggleAll(): void
		toggle(todo: any): void
		focus(vnode: Mithril.Vnode<any, any>, todo: any): void
		save(e: KeyboardEvent): void
	}, {}> = {
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
		focus: function(vnode: Mithril.Vnode<any, any>, todo: any) {
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
			var ui = vnode.state
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
								m("input.edit", {onupdate: function(vnode: Mithril.Vnode<any, any>) {ui.focus(vnode, todo)}, onkeypress: ui.save, onblur: ui.save})
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

	m.route(document.getElementById("todoapp"), "/", {
		"/": Todos,
		"/:status": Todos,
	})

})
