function CommandTests() {
    // initalize command with an execute method
    var cmd1 = ko.command(() => {
        return "Hello cmd1";
    });

    // initialize command and add done and fail callbacks
    var cmd2 = ko.command(() => {
        return "Hello cmd2";
    })
        .done((data: any) => {
        alert("success");
    })
        .fail((response) => {
        // dummy
        return false;
    })
        .fail((response, status, message) => {
        // fail has response, error and text
        alert(status + message);
    });

    // initialize command with options (action only)
    var cmd3 = ko.command({
        action: () => { return "Hello cmd3"; }
    });

    // initialize command with options (action only)
    var cmd4 = ko.command({
        action: () => { return "Hello cmd4"; }
    });

    // initialize command with action with typed argument
    var cmd5 = ko.command((message: string) => { return message; });

    // test execute the command
    cmd1();

    // test properties of the commmand
    var isRunning = cmd1.isRunning();
    var failed = cmd1.failed();
    var completed = cmd1.completed();
    var canExecute = cmd1.canExecute();

}

function EditableTests() {

    // test ko.editable initializers
    var edit1 = ko.editable<boolean>(); // no intializer

    var edit2 = ko.editable<string>("test"); // with typed initializer

    var edit3 = ko.editable<any>({ test: true }); // with anything

    var edit4 = ko.editable<string|number>(1); // with union types
    var edit5 = ko.editable<string|number>("test");

    ko.editable.makeEditable(this);

    // test getting the value
    var value = edit1();

    // test editable
    var isEditing = edit1.isEditing();

    // test editableArray functions:
    edit1.beginEdit();
    edit1.endEdit();
    edit1.cancelEdit();
    edit1.rollback();
}

function EditableArrayTests() {

    // test ko.editable intializers
    var edit1 = ko.editableArray<boolean>(); // no init value

    var edit2 = ko.editableArray<number>([1, 2, 3]); // init value

    var edit3 = ko.editableArray<any>(["a", 1, false, {}]); // mixed

    var edit4 = ko.editableArray<number|string>(["a", 1]); // constrained

    // test getting the array value
    var value = edit1();

    // test properties
    var isEditing = edit1.isEditing();

    // test functions:
    edit1.beginEdit();
    edit1.endEdit();
    edit1.cancelEdit();
    edit1.rollback();

}

function SortableTests() {

    // sorting is added via an extender, there are no .d.ts
    // types for this at present
    var sort1 = ko.observableArray([1, 2, 3]).extend({ sortable: true });

    // extended sort definition with key+descending
    var sort2 = ko.observableArray([
        { id: 3, name: "alice" },
        { id: 2, name: "james" },
        { id: 1, name: "bob" },
    ]).extend({
        sortable: {
            key: 'id',
            descending: false
        }
    });

    sort2.setSourceKey("id");
    sort2.sortDescending(true);
    sort2.setSourceKey("name");
    sort2.sortDescending(false);
}