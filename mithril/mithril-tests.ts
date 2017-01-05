
// This is the todolist example from http://lhorie.github.io/mithril/getting-started.html

var todo = {

    //the Todo class has two properties
    Todo: function(data: any) {
        this.description = m.prop(data.description);
        this.done = m.prop(false);
    },

    //the TodoList class is a list of Todo's
    TodoList: Array,

    //the controller uses three model-level entities, of which one is a custom defined class:
    //`Todo` is the central class in this application
    //`list` is merely a generic array, with standard array methods
    //`description` is a temporary storage box that holds a string
    //
    //the `add` method simply adds a new todo to the list
    controller: function() {
        this.list = new todo.TodoList();
        this.description = m.prop("");

        this.add = function() {
            if (this.description()) {
                this.list.push(new (<any>todo.Todo)({description: this.description()}));
                this.description("");
            }
        }.bind(this);
    },

    //here's the view
    view: function(ctrl: any) {
        return m("html", [
            m("body", [
                m("input", {onchange: m.withAttr("value", ctrl.description), value: ctrl.description()} as any /* TODO remove `as any` */),
                m("button", {onclick: ctrl.add} as any /* TODO remove `as any` */, "Add"),
                m("table", [
                    ctrl.list.map(function(task: any) {
                        return m("tr", [
                            m("td", [
                                m("input[type=checkbox]", {onclick: m.withAttr("checked", task.done), checked: task.done()} as any /* TODO remove `as any` */)
                            ]),
                            m("td", {style: {textDecoration: task.done() ? "line-through" : "none"}} as any /* TODO remove `as any` */, task.description()),
                        ])
                    })
                ])
            ])
        ]);
    },
};

//initialize the application
m.mount(document, todo);
