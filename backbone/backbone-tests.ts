/// <reference path="backbone.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

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

module v1Changes {
    module events {
        function test_once() {
            var model = new Employee;
            model.once('invalid', () => { }, this);
            model.once('invalid', () => { });
        }

        function test_listenTo() {
            var model = new Employee;
            var view = new Backbone.View;
            view.listenTo(model, 'invalid', () => { });
        }

        function test_listenToOnce() {
            var model = new Employee;
            var view = new Backbone.View;
            view.listenToOnce(model, 'invalid', () => { });
        }

        function test_stopListening() {
            var model = new Employee;
            var view = new Backbone.View;
            view.stopListening(model, 'invalid', () => { });
            view.stopListening(model, 'invalid');
            view.stopListening(model);
        }
    }

    module modelandcollection {
        function test_url() {
            Employee.prototype.url = () => '/employees';
            EmployeeCollection.prototype.url = () => '/employees';
        }

        function test_parse() {
            var model = new Employee();
            model.parse('{}', {});
            var collection = new EmployeeCollection;
            collection.parse('{}', {});
        }

        function test_toJSON() {
            var model = new Employee();
            model.toJSON({});
            var collection = new EmployeeCollection;
            collection.toJSON({});
        }

        function test_sync() {
            var model = new Employee();
            model.sync();
            var collection = new EmployeeCollection;
            collection.sync();
        }
    }

    module model {
        function test_validationError() {
            var model = new Employee;
            if (model.validationError) {
                console.log('has validation errors');
            }
        }

        function test_fetch() {
            var model = new Employee({ id: 1 });
            model.fetch({
                success: () => { },
                error: () => { }
            });
        }

        function test_set() {
            var model = new Employee;
            model.set({ name: 'JoeDoe', age: 21 }, { validate: false });
            model.set('name', 'JoeDoes', { validate: false });
        }

        function test_destroy() {
            var model = new Employee;
            model.destroy({
                wait: true,
                success: (m?, response?, options?) => { },
                error: (m?, jqxhr?: JQueryXHR, options?) => { }
            });

            model.destroy({
                success: (m?, response?, options?) => { },
                error: (m?, jqxhr?: JQueryXHR) => { }
            });

            model.destroy({
                success: () => { },
                error: (m?, jqxhr?: JQueryXHR) => { }
            });
        }

        function test_save() {
            var model = new Employee;

            model.save({
                    name: 'Joe Doe',
                    age: 21
                },
                {
                    wait: true,
                    validate: false,
                    success: (m?, response?, options?) => { },
                    error: (m?, jqxhr?: JQueryXHR, options?) => { }
                });

            model.save({
                    name: 'Joe Doe',
                    age: 21
                },
                {
                    success: () => { },
                    error: (m?, jqxhr?: JQueryXHR) => { }
                });
        }

        function test_validate() {
            var model = new Employee;

            model.validate({ name: 'JoeDoe', age: 21 }, { validateAge: false })
        }
    }

    module collection {
        function test_fetch() {
            var collection = new EmployeeCollection;
            collection.fetch({ reset: true });
        }

        function test_create() {
            var collection = new EmployeeCollection;
            var model = new Employee;

            collection.create(model, {
                validate: false
            });
        }
    }

    module router {
        function test_navigate() {
            var router = new Backbone.Router;

            router.navigate('/employees', { trigger: true });
            router.navigate('/employees', true);
        }
    }
}