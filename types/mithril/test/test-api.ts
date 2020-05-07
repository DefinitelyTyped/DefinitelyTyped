// Typescript adaptation of mithril's test suite.
// Not intended to be run; only to compile & check types.

import * as m from 'mithril';
import * as Stream from 'mithril/stream';

const FRAME_BUDGET = 100;

{
	const vnode = m("div");
	console.assert(vnode.tag === "div");
}

{
	const vnode = m.trust("<br>");
}

{
	const vnode = m.fragment({key: 123}, [m("div")]);
	console.assert((vnode.children as Array<m.Vnode<any, any>>).length === 1);
	console.assert((vnode.children as Array<m.Vnode<any, any>>)[0].tag === 'div');
}

{
	const params = m.parseQueryString("?a=1&b=2");
	const query = m.buildQueryString({a: 1, b: 2});
}

{
	const {params, path} = m.parsePathname('/api/user/1');
	console.assert(params != null);
	console.assert(typeof path === 'string');

	const url = m.buildPathname('/api/user/:id', {id: 1});
	console.assert(url.endsWith('/1'));
}

{
	const root = window.document.createElement("div");
	m.render(root, m("div"));
	console.assert(root.childNodes.length === 1);
}

{
	const root = window.document.createElement("div");
	m.mount(root, { view: () => m("div") });
	console.assert(root.childNodes.length === 1);
	console.assert(root.firstChild!.nodeName === "DIV");
}

{
	const root = window.document.createElement("div");
	m.route(root, "/a", {
		"/a": { view: () => m("div") }
	});

	setTimeout(() => {
		console.assert(root.childNodes.length === 1);
		console.assert(root.firstChild!.nodeName === "DIV");
	}, FRAME_BUDGET);
}

{
	const root = window.document.createElement("div");
	m.route.prefix = "#";
	m.route(root, "/a", {
		"/a": { view: () => m("div") }
	});

	setTimeout(() => {
		console.assert(root.childNodes.length === 1);
		console.assert(root.firstChild!.nodeName === "DIV");
	}, FRAME_BUDGET);
}

{
	const root = window.document.createElement("div");
	m.route(root, "/a", {
		"/a": { view: () => m("div") }
	});

	setTimeout(() => {
		console.assert(m.route.get() === "/a");
	}, FRAME_BUDGET);
}

{
	const root = window.document.createElement("div");
	m.route(root, "/a", {
		"/:id": { view: () => m("div") }
	});

	setTimeout(() => {
		m.route.set("/b");
		setTimeout(() => {
			console.assert(m.route.get() === "/b");
		}, FRAME_BUDGET);
	}, FRAME_BUDGET);
}

{
	let count = 0;
	const root = window.document.createElement("div");
	m.mount(root, {view() { count++; }});
	setTimeout(() => {
		m.redraw();
		console.assert(count === 2);
	}, FRAME_BUDGET);
}

//
// Additional tests by andraaspar
//

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/hyperscript.html#components
////////////////////////////////////////////////////////////////////////////////

{
	// define a component
	const Greeter: m.Comp<{ style: string }> = {
		view(vnode) {
			return m("div", vnode.attrs, ["Hello ", vnode.children]);
		}
	};

	// consume it
	m(Greeter, { style: "color:red;" }, "world");
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/hyperscript.html#keys
////////////////////////////////////////////////////////////////////////////////

{
	const users = [
		{ id: 1, name: "John" },
		{ id: 2, name: "Mary" },
	];

	const userInputs = (users: Array<{ id: number, name: string }>) => {
		return users.map(u => {
			return m("input", { key: u.id }, u.name);
		});
	};

	m.render(document.body, userInputs(users));
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/components.html#state
////////////////////////////////////////////////////////////////////////////////

{
	const ComponentWithInitialState: m.Comp<{}, {data: string}> = {
		data: "Initial content",
		view(vnode) {
			return m("div", vnode.state.data);
		}
	};

	m(ComponentWithInitialState);
}

{
	const ComponentWithDynamicState: m.Comp<{text: string}, {data?: string}> = {
		oninit(vnode) {
			vnode.state.data = vnode.attrs.text;
		},
		view(vnode) {
			return m("div", vnode.state.data);
		}
	};

	m(ComponentWithDynamicState, { text: "Hello" });
}

{
	const ComponentUsingThis: m.Comp<{text: string}, {data?: string}> = {
		oninit(vnode) {
			this.data = vnode.attrs.text;
		},
		view(vnode) {
			return m("div", this.data);
		}
	};

	m(ComponentUsingThis, { text: "Hello" });
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/lifecycle-methods.html
////////////////////////////////////////////////////////////////////////////////

{
	const Fader: m.Comp = {
		onbeforeremove(vnode) {
			vnode.dom.classList.add("fade-out");
			return new Promise(resolve => {
				setTimeout(resolve, 1000);
			});
		},
		view() {
			return m("div", "Bye");
		},
	};
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/route.html#wrapping-a-layout-component
////////////////////////////////////////////////////////////////////////////////

{
	const Home = {
		view() {
			return "Welcome";
		}
	};

	const state = {
		term: "",
		search() {
			// save the state for this route
			// this is equivalent to `history.replaceState({term: state.term}, null, location.href)`
			m.route.set(m.route.get(), null, { replace: true, state: { term: state.term } });

			// navigate away
			location.href = "https://google.com/?q=" + state.term;
		}
	};

	const Form: m.Comp<{term: string}> = {
		oninit(vnode) {
			state.term = vnode.attrs.term || ""; // populated from the `history.state` property if the user presses the back button
		},
		view() {
			return m('form', [
                m("input[placeholder='Search']", {
                    oninput: (e: { currentTarget: HTMLInputElement }) => {
                        state.term = e.currentTarget.value;
                    },
                    value: state.term,
                }),
                m('button', { onclick: state.search }, 'Search'),
            ]);
		}
	};

	const Layout: m.Comp = {
		view(vnode) {
			return m(".layout", vnode.children);
		}
	};

	// example 1
	m.route(document.body, "/", {
		"/": {
			view() {
				return m(Layout, m(Home));
			},
		},
		"/form": {
			view() {
				return m(Layout, m(Form));
			},
		}
	});

	// example 2
	m.route(document.body, "/", {
		"/": {
			render() {
				return m(Layout, m(Home));
			},
		},
		"/form": {
			render() {
				return m(Layout, m(Form));
			},
		}
	});

	// functionally equivalent to example 1
	const Anon1 = {
		view() {
			return m(Layout, m(Home));
		},
	};
	const Anon2 = {
		view() {
			return m(Layout, m(Form));
		},
	};

	m.route(document.body, "/", {
		"/": {
			render() {
				return m(Anon1);
			}
		},
		"/form": {
			render() {
				return m(Anon2);
			}
		},
	});
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/route.html#preloading-data
////////////////////////////////////////////////////////////////////////////////

{
	const state = {
		users: [] as any[],
		loadUsers() {
			return m.request<any>("/api/v1/users").then(users => {
				state.users = users;
			});
		}
	};

	m.route(document.body, "/user/list", {
		"/user/list": {
			onmatch: state.loadUsers,
			render() {
				return state.users.map(user => m("div", user.id));
			}
		},
	});
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/request.html#monitoring-progress
////////////////////////////////////////////////////////////////////////////////

{
	let progress = 0;

	m.mount(document.body, {
		view() {
			return [
				m("input[type=file]", { onchange: upload }),
				progress + "% completed"
			];
		}
	});

	const upload = (e: Event) => {
		const file = ((e.target as HTMLInputElement).files as FileList)[0];
		const data = new FormData();
		data.append("myfile", file);
		m.request({
			method: "POST",
			url: "/api/v1/upload",
			body: data,
			config: xhr => {
				xhr.addEventListener("progress", e => {
					progress = e.loaded / e.total;
					m.redraw(); // tell Mithril that data changed and a re-render is needed
				});
			}
		});
	};
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/request.html#casting-response-to-a-type
////////////////////////////////////////////////////////////////////////////////

{
	// Start rewrite to TypeScript
	class User {
		name: string;
		constructor(data: any) {
			this.name = `${data.firstName} ${data.lastName}`;
		}
	}
	// End rewrite to TypeScript

	// function User(data) {
	// 	this.name = `${data.firstName} ${data.lastName}`
	// }

	m.request<User[]>({
		method: "GET",
		url: "/api/v1/users",
		type: User
	})
	.then(users => {
		console.log(users[0].name); // logs a name
	});
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/request.html#non-json-responses
////////////////////////////////////////////////////////////////////////////////

{
	m.request<string>({
		method: "GET",
		url: "/files/icon.svg",
		deserialize: value => value
	})
	.then(svg => {
		m.render(document.body, m.trust(svg));
	});
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/jsonp.html
////////////////////////////////////////////////////////////////////////////////

{
	m.jsonp({
		url: "/api/v1/users/:id",
		params: { id: 1 },
		callbackKey: "callback",
	})
	.then(result => {
		console.log(result);
	});
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/fragment.html
////////////////////////////////////////////////////////////////////////////////

{
	const groupVisible = true;
	const log = () => {
		console.log("group is now visible");
	};

	m("ul", [
		m("li", "child 1"),
		m("li", "child 2"),
		groupVisible ? m.fragment({ oninit: log }, [
			// a fragment containing two elements
			m("li", "child 3"),
			m("li", "child 4"),
		]) : null
	]);
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/stream.html#computed-properties
////////////////////////////////////////////////////////////////////////////////

{
	const firstName = Stream("John");
	const lastName = Stream("Doe");
	const fullName = Stream.merge([firstName, lastName]).map(values => {
		return values.join(" ");
	});

	console.log(fullName()); // logs "John Doe"

	firstName("Mary");

	console.log(fullName()); // logs "Mary Doe"
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/stream.html#chaining-streams
////////////////////////////////////////////////////////////////////////////////

{
	const skipped = Stream(1).map(value => {
		return Stream.SKIP;
	});

	skipped.map(() => {
		// never runs
	});
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/stream.html#combining-streams
////////////////////////////////////////////////////////////////////////////////

{
	const a = Stream(5);
	const b = Stream(7);

	const added = Stream.combine((a: Stream<number>, b: Stream<number>) => {
		return a() + b();
	}, [a, b]);

	console.log(added()); // logs 12
}

////////////////////////////////////////////////////////////////////////////////
// http://mithril.js.org/stream.html#ended-state
////////////////////////////////////////////////////////////////////////////////

{
	const value = Stream<number>();
	const doubled = value.map(value => value * 2);

	value.end(true); // set to ended state

	value(5);

	console.log(doubled());
}

////////////////////////////////////////////////////////////////////////////////
// https://github.com/lhorie/mithril.js/blob/master/examples/animation/mosaic.html
////////////////////////////////////////////////////////////////////////////////

// Excerpt

{
	const root = document.getElementById("root")!;
	const empty: any[] = [];
	const full: any[] = [];
	for (let i = 0; i < 100; i++) full.push(i);
	let cells: any[];

	const view = () => m(".container", cells.map(i =>
		m(".slice", {
			style: {backgroundPosition: `${i % 10 * 11}% ${Math.floor(i / 10) * 11}%`},
			onbeforeremove: exit
		})));

	const exit = (vnode: m.VnodeDOM<any, any>) => {
		vnode.dom.classList.add("exit");
		return new Promise(resolve => {
			setTimeout(resolve, 1000);
		});
	};

	const run = () => {
		cells = cells === full ? empty : full;

		m.render(root, [view()]);

		setTimeout(run, 2000);
	};

	run();
}

////////////////////////////////////////////////////////////////////////////////
// https://github.com/lhorie/mithril.js/blob/master/examples/editor/index.html
////////////////////////////////////////////////////////////////////////////////

// Excerpt

{
	// Start extra declarations
	const marked = (v: string) => v;
	// End extra declarations

	// model
	const state = {
		text: "# Markdown Editor\n\nType on the left panel and see the result on the right panel",
		update(value: string) {
			state.text = value;
		}
	};

	// view
	const Editor = {
		view() {
			return [
                m('textarea.input', {
                    oninput: (e: { currentTarget: HTMLTextAreaElement }) => {
                        state.update(e.currentTarget.value);
                    },
                    value: state.text,
                }),
                m('.preview', m.trust(marked(state.text))),
            ];
		}
	};

	m.mount(document.getElementById("editor")!, Editor);
}

////////////////////////////////////////////////////////////////////////////////
// https://github.com/lhorie/mithril.js/blob/master/examples/todomvc/todomvc.js
////////////////////////////////////////////////////////////////////////////////

{
	// model
	const state = {
		dispatch(action: string, args?: any) {
			(state as any)[action].apply(state, args || []);
			requestAnimationFrame(() => {
				localStorage["todos-mithril"] = JSON.stringify(state.todos);
			});
		},

		todos: JSON.parse(localStorage["todos-mithril"] || "[]"),
		editing: null as any,
		filter: "",
		remaining: 0,
		todosByStatus: [] as any[],
		showing: undefined as any,

		createTodo(title: string) {
			state.todos.push({title: title.trim(), completed: false});
		},
		setStatuses(completed: boolean) {
			for (const todo of state.todos)
				todo.completed = completed;
		},
		setStatus(todo: any, completed: boolean) {
			todo.completed = completed;
		},
		destroy(todo: any) {
			const index = state.todos.indexOf(todo);
			if (index > -1) state.todos.splice(index, 1);
		},
		clear() {
			for (let i = 0; i < state.todos.length; i++) {
				if (state.todos[i].completed) state.destroy(state.todos[i--]);
			}
		},

		edit(todo: any) {
			state.editing = todo;
		},
		update(title: string) {
			if (state.editing != null) {
				state.editing.title = title.trim();
				if (state.editing.title === "") state.destroy(state.editing);
				state.editing = null;
			}
		},
		reset() {
			state.editing = null;
		},

		computed(vnode: m.Vnode<any, any>) {
			state.showing = vnode.attrs.status || "";
			state.remaining = state.todos.filter((todo: any) => !todo.completed).length;
			state.todosByStatus = state.todos.filter((todo: any) => {
				switch (state.showing) {
					case "": return true;
					case "active": return !todo.completed;
					case "completed": return todo.completed;
				}
			});
		}
	};

	// view
	const Todos: m.Comp<{}, {
		add(e: Event): void
		toggleAll(): void
		toggle(todo: any): void
		focus(vnode: m.VnodeDOM<any, any>, todo: any): void
		save(e: KeyboardEvent): void
	}> = {
		add(e: KeyboardEvent) {
			if (e.keyCode === 13) {
				state.dispatch("createTodo", [(e.target as HTMLInputElement).value]);
				(e.target as HTMLInputElement).value = "";
			}
		},
		toggleAll() {
			state.dispatch("setStatuses", [(document.getElementById("toggle-all") as HTMLInputElement).checked]);
		},
		toggle(todo: any) {
			state.dispatch("setStatus", [todo, !todo.completed]);
		},
		focus(vnode: m.VnodeDOM<any, any>, todo: any) {
			if (todo === state.editing && vnode.dom !== document.activeElement) {
				const el = vnode.dom as HTMLInputElement;
				el.value = todo.title;
				el.focus();
				el.selectionStart = el.selectionEnd = todo.title.length;
			}
		},
		save(e: KeyboardEvent) {
			if (e.keyCode === 13 || e.type === "blur") state.dispatch("update", [(e.target as HTMLInputElement).value]);
			else if (e.keyCode === 27) state.dispatch("reset");
		},
		oninit: state.computed,
		onbeforeupdate: state.computed,
		view(vnode) {
			const ui = vnode.state;
			return [
				m("header.header", [
					m("h1", "todos"),
					m("input#new-todo[placeholder='What needs to be done?'][autofocus]", {onkeypress: ui.add}),
				]),
				m("section#main", {style: {display: state.todos.length > 0 ? "" : "none"}}, [
					m("input#toggle-all[type='checkbox']", {checked: state.remaining === 0, onclick: ui.toggleAll}),
					m("label[for='toggle-all']", {onclick: ui.toggleAll}, "Mark all as complete"),
					m("ul#todo-list", [
						state.todosByStatus.map((todo: any) => {
							return m("li", {class: `${todo.completed ? "completed" : ""} ${todo === state.editing ? "editing" : ""}`}, [
								m(".view", [
									m("input.toggle[type='checkbox']", { checked: todo.completed, onclick: () => { ui.toggle(todo); } }),
									m("label", { ondblclick: () => { state.dispatch("edit", [todo]); } }, todo.title),
									m("button.destroy", { onclick: () => { state.dispatch("destroy", [todo]); } }),
								]),
								m("input.edit", { onupdate(vnode: m.VnodeDOM<any, any>) { ui.focus(vnode, todo); }, onkeypress: ui.save, onblur: ui.save })
							]);
						}),
					]),
				]),
				state.todos.length ? m("footer#footer", [
					m("span#todo-count", [
						m("strong", state.remaining),
						state.remaining === 1 ? " item left" : " items left",
					]),
					m("ul#filters", [
						// m("li", m("a[href='/']", {oncreate: m.route.link, class: state.showing === "" ? "selected" : ""}, "All")),
						// m("li", m("a[href='/active']", {oncreate: m.route.link, class: state.showing === "active" ? "selected" : ""}, "Active")),
						// m("li", m("a[href='/completed']", {oncreate: m.route.link, class: state.showing === "completed" ? "selected" : ""}, "Completed")),
						m(m.route.Link, {href: "/"}, "All"),
						m(m.route.Link, {href: "/active"}, "Active"),
						m(m.route.Link, {href: "/completed"}, "Completed")
					]),
					m("button#clear-completed", { onclick: () => { state.dispatch("clear"); } }, "Clear completed"),
				]) : null,
			];
		}
	};

	m.route(document.getElementById("todoapp")!, "/", {
		"/": Todos,
		"/:status": Todos,
	});
}
