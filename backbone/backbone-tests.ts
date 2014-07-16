/// <reference path="backbone.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

function test_events() {

    var object = new Backbone.Events();
    object.on("alert", (eventName: string) => alert("Triggered " + eventName));

    object.trigger("alert", "an event");

    var onChange = () => alert('whatever');
    var context: any;

    object.off("change", onChange);
    object.off("change");
    object.off(null, onChange);
    object.off(null, null, context);
    object.off();
}

class SettingDefaults extends Backbone.Model {

    // 'defaults' could be set in one of the following ways:

    defaults() {
        return {
            name: "Joe"
        }
    }

    constructor(attributes?: any, options?: any) {
        this.defaults = <any>{
            name: "Joe"
        }
        // super has to come last
        super(attributes, options);
    }

    // or set it like this
    initialize() {
        this.defaults = <any>{
            name: "Joe"
        }

    }

    // same patterns could be used for setting 'Router.routes' and 'View.events'
}

class Sidebar extends Backbone.Model {

    promptColor() {
        var cssColor = prompt("Please enter a CSS color:");
        this.set({ color: cssColor });
    }
}

class Note extends Backbone.Model {
    initialize() { }
    author() { }
    coordinates() { }
    allowedToEdit(account: any) {
        return true;
    }
}

class PrivateNote extends Note {
    allowedToEdit(account: any) {
        return account.owns(this);
    }

    set(attributes: any, options?: any): Backbone.Model {
        return Backbone.Model.prototype.set.call(this, attributes, options);
    }
}

function test_models() {

    var sidebar = new Sidebar();
    sidebar.on('change:color', (model: {}, color: string) => $('#sidebar').css({ background: color }));
    sidebar.set({ color: 'white' });
    sidebar.promptColor();

    //////////

    var note = new PrivateNote();

    note.get("title");

    note.set({ title: "March 20", content: "In his eyes she eclipses..." });

    note.set("title", "A Scandal in Bohemia");
}

class Employee extends Backbone.Model {
    reports: EmployeeCollection;

    constructor(attributes?: any, options?: any) {
        super(options);
        this.reports = new EmployeeCollection();
        this.reports.url = '../api/employees/' + this.id + '/reports';
    }

    more() {
        this.reports.reset();
    }
}

class EmployeeCollection extends Backbone.Collection<Employee> {
    findByName(key: any) { }
}

class Book extends Backbone.Model {
    title: string;
    author: string;
}

class Library extends Backbone.Collection<Book> {
    model = Book;
}

class Books extends Backbone.Collection<Book> { }

function test_collection() {

    var books = new Library();

    books.each(book => {
        book.get("title");
    });

    var titles = books.map(book => {
        return book.get("title");
    });

    var publishedBooks = books.filter(book => {
        return book.get("published") === true;
    });

    var alphabetical = books.sortBy((book: Book): number => {
        return null;
    });

    var model: Book = new Book({title: "Test", author: "Mike"});
    books.add(model);
    var model2: Book = model.collection.first();
    if (model !== model2) {
        throw new Error("Error");
    }

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
            var view = new Backbone.View<Employee>();
            view.listenTo(model, 'invalid', () => { });
        }

        function test_listenToOnce() {
            var model = new Employee;
            var view = new Backbone.View<Employee>();
            view.listenToOnce(model, 'invalid', () => { });
        }

        function test_stopListening() {
            var model = new Employee;
            var view = new Backbone.View<Employee>();
            view.stopListening(model, 'invalid', () => { });
            view.stopListening(model, 'invalid');
            view.stopListening(model);
        }
    }

    module ModelAndCollection {
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

    module Model {
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
                error: (m?, jqxhr?, options?) => { }
            });

            model.destroy({
                success: (m?, response?, options?) => { },
                error: (m?, jqxhr?) => { }
            });

            model.destroy({
                success: () => { },
                error: (m?, jqxhr?) => { }
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
                    error: (m?, jqxhr?, options?) => { }
                });

            model.save({
                    name: 'Joe Doe',
                    age: 21
                },
                {
                    success: () => { },
                    error: (m?, jqxhr?) => { }
                });
        }

        function test_validate() {
            var model = new Employee;

            model.validate({ name: 'JoeDoe', age: 21 }, { validateAge: false })
        }
    }

    module Collection {
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

    module Router {
        function test_navigate() {
            var router = new Backbone.Router;

            router.navigate('/employees', { trigger: true });
            router.navigate('/employees', true);
        }
    }
}

module EventsMembers {
	// ensures views can define events as properties
	// http://backbonejs.org/#View-delegateEvents "delegateEvents uses this.events as the source. Events are written in the format {"event selector": "callback"}"

	// ensures views can define events as objects
	class ViewWithPropertyEvents extends Backbone.View<any> {
		events = {
			"click .foo": function() {}
		}
		
		render() {
			this.delegateEvents();
			return this;
		}
	}

	// ensures views can define events as methods
	// http://backbonejs.org/#View-delegateEvents "the events property may also be defined as a function that returns an events hash"
	class ViewWithMethodEvents extends Backbone.View<any> {
		events() {
			return { };
		}
	}
}

// ensures sub class can override internal extension members
// if they are private, you cannot do that
module Overrides {
	class TestModel extends Backbone.Model {
		_validate(attrs: any, options: any): boolean { return true; }
	}
	
	class TestCollection extends Backbone.Collection<any> {
		_prepareModel(attrs?: any, options?: any): any {}
        _removeReference(model: any): void {}
        _onModelEvent(event: string, model: any, collection: Backbone.Collection<any>, options: any): void {}
	}
	
	class TestRouter extends Backbone.Router {
		_bindRoutes(): void {}
        _routeToRegExp(route: string): RegExp { return null; }
        _extractParameters(route: RegExp, fragment: string): string[] { return null; }
	}
	
	class TestHistory extends Backbone.History {
		_updateHash(location: Location, fragment: string, replace: boolean): void {}
	}
	
	class TestView extends Backbone.View<any> {
		_ensureElement(): void {}
	}
}

// ensure "extend" methods can be called
// although they are not recommended, they are valid code and should not be removed due to backward compatilibity
(function() {
	Backbone.Model.extend({});
	Backbone.Collection.extend({});
	Backbone.Router.extend({});
	Backbone.View.extend({});
})();

// ensures Backbone.$ exists
// http://backbonejs.org/#Utility-Backbone-$
(function() {
	var $el = Backbone.$("div");
}());


// ensures collection can instantiate models correctly
// http://backbonejs.org/#Collection-model
module CollectionModels {

	class M extends Backbone.Model { }

	// ensures it works on the class direction
	class C1 extends Backbone.Collection<M> {
		model: M;
	}
	
	// ensures it works on function with parameters
	class C2 extends Backbone.Collection<M> {
		model = (attributes: any, options: any) => {
			return new M(attributes, options);
		}
	}
}

// ensures collections can accept object hashes and not only models in various methods
module CollectionModelConstructors {

	class M extends Backbone.Model { }
	
	class Col extends Backbone.Collection<M> {
		model: M;
	}

	// ensures constructors accept object hashes as demonstrated in many places in the documentation:
	// http://backbonejs.org/#Collection-toJSON
	// http://backbonejs.org/#Collection-pluck
	// http://backbonejs.org/#Collection-where
	// Constructor with parameters is equivalent to new Collection().reset([]), and the documentation states
	// "you can pass raw attributes objects (and arrays) to add, create, and reset, and the attributes will be converted into a model of the proper type."
	
	new Col([{ id: 1 }, { id: 2 }]);
	
	// ensures "add" accepts object hashes
	new Col().add({ id: 1});
	new Col().add([{ id: 1 }, { id: 2 }]);
	
	//ensures "set" accepts object hashes
	new Col().set([{ id: 1 }, { id: 2 }]);

	//ensures "reset" accepts object hashes
	new Col().reset([{ id: 1 }, { id: 2 }]);
}

// ensures Collection.get accepts ids of any type, as the parameters depends on Model.id which can be anything defined by the user
// http://backbonejs.org/#Collection-get
// http://backbonejs.org/#Model-id
new Backbone.Collection().get(1);
new Backbone.Collection().get("foo");
new Backbone.Collection().get({ X: 1, Y: 2});
