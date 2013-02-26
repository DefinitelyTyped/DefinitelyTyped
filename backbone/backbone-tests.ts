/// <reference path="backbone.d.ts" />

declare var _, $;

function test_events() {

    var object = new Backbone.Events();
    object.on("alert", (msg) => alert("Triggered " + msg));

    object.trigger("alert", "an event");

    var onChange = () => alert('whatever');
    var context: any;

    object.off("change", onChange);
    object.off("change");
    object.off(null, onChange);
    object.off(null, null, context);
    object.off();
}

function test_models() {

    var Sidebar = Backbone.Model.extend({
        promptColor: function () {
            var cssColor = prompt("Please enter a CSS color:");
            this.set({ color: cssColor });
        }
    });

    var sidebar = new Sidebar();
    sidebar.on('change:color', (model, color) => $('#sidebar').css({ background: color }));
    sidebar.set({ color: 'white' });
    sidebar.promptColor();

    ////////

    var Note = Backbone.Model.extend({
        initialize: () => { },
        author: () => { },
        coordinates: () => { },
        allowedToEdit: (account) => {
            return true;
        }
    });

    var PrivateNote = Note.extend({

        allowedToEdit: function (account) {
            return account.owns(this);
        }

    });

    //////////

    var note = Backbone.Model.extend({
        set: function (attributes, options) {
            Backbone.Model.prototype.set.call(this, attributes, options);
        }
    });

    note.get("title")

    note.set({ title: "March 20", content: "In his eyes she eclipses..." });

    note.set("title", "A Scandal in Bohemia");
}

class Employee extends Backbone.Model {
    reports: EmployeeCollection;

    constructor (options? ) {
        super(options);
        this.reports = new EmployeeCollection();
        this.reports.url = '../api/employees/' + this.id + '/reports';
    }

    more() {
        this.reports.reset();
    }
}

class EmployeeCollection extends Backbone.Collection {
    url: string = "../api/employees";
    findByName(key) { }
}
function test_collection() {
    var Book: Backbone.Model;
    var Library = Backbone.Collection.extend({
        model: Book
    });

    var Books: Backbone.Collection;

    Books.each(function (book) {
    });

    var titles = Books.map(function (book) {
        return book.get("title");
    });

    var publishedBooks = Books.filter(function (book) {
        return book.get("published") === true;
    });

    var alphabetical = Books.sortBy(function (book) {
        return null;
    });
}

//////////

Backbone.history.start();