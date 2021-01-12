function test_events() {

    var object = Backbone.Events;
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

class PubSub implements Backbone.Events {
    on: Backbone.Events_On<PubSub>;
    off: Backbone.Events_Off<PubSub>;
    trigger: Backbone.Events_Trigger<PubSub>;
    bind: Backbone.Events_On<PubSub>;
    unbind: Backbone.Events_Off<PubSub>;

    once: Backbone.Events_On<PubSub>;
    listenTo: Backbone.Events_Listen<PubSub>;
    listenToOnce: Backbone.Events_Listen<PubSub>;
    stopListening: Backbone.Events_Stop<PubSub>;
}

Object.assign(PubSub.prototype, Backbone.Events);

function test_events_shorthands() {
    let channel1 = new PubSub();
    let channel2 = new PubSub();
    let onChange = () => alert('whatever');

    channel1.on("alert", (eventName: string) => alert("Triggered " + eventName));
    channel1.trigger("alert", "an event");

    channel1.once('invalid', () => { }, this);
    channel1.once('invalid', () => { });
    channel1.once({invalid: () => { }, success: () => { }}, this);
    channel1.once({invalid: () => { }, success: () => { }});

    channel1.off("change", onChange);
    channel1.off("change");
    channel1.off(null, onChange);
    channel1.off(null, null, this);
    channel1.off();

    channel2.listenTo(channel1, 'invalid', () => { });
    channel2.listenTo(channel1, {invalid: () => { }, success: () => { }});
    channel2.listenToOnce(channel1, 'invalid', () => { });
    channel2.listenToOnce(channel1, {invalid: () => { }, success: () => { }});

    channel2.stopListening(channel1, 'invalid', () => { });
    channel2.stopListening(channel1, 'invalid');
    channel2.stopListening(channel1);
}

class SettingDefaults extends Backbone.Model {

    // 'defaults' could be set in one of the following ways:

    defaults() {
        return {
            name: "Joe"
        }
    }

    // will be invoked when the view is first created, before any instantiation logic is run
    preinitialize() {
        this.defaults = {
            name: "Joe"
        } as any;

    }

    constructor(attributes?: any, options?: any) {
        super(attributes, options); // error TS17009: 'super' must be called before accessing 'this' in the constructor of a derived class.
        this.defaults = <any>{
            name: "Joe"
        }
        // super has to come last
    }

    // or set it like this
    initialize() {
        this.defaults = <any>{
            name: "Joe"
        }

    }

    // same patterns could be used for setting 'Router.routes' and 'View.events'
}

class FullyTyped extends Backbone.Model<{iLikeBacon: boolean, iLikeToast: boolean}> {
    public getILikeBacon(): boolean {
        return this.get('iLikeBacon')
    }

    public setILikeBacon(value: boolean) {
        return this.set('iLikeBacon', value);
    }

    public setAll(values: {iLikeBacon: boolean, iLikeToast?: boolean}) {
        return this.set(values);
    }

    public setValue(key:keyof {iLikeBacon: boolean, iLikeToast: boolean}, value: any) {
        return this.set(key, value);
    }
}

class FullyTypedDefault extends Backbone.Model {
    public getILikeBacon(): boolean {
        return this.get('iLikeBacon')
    }

    public setILikeBacon(value: boolean) {
        return this.set('iLikeBacon', value);
    }

    public setAll(values: {iLikeBacon: boolean, iLikeToast?: boolean}) {
        return this.set(values);
    }

    public setValue(key: string, value: any) {
        return this.set(key, value);
    }
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

    let strings: string[]
    let value: any;
    let values: any[];
    let bool: boolean;

    // underscore methods
    strings = note.keys();
    values  = note.values();
    values  = note.pairs();
    values  = note.invert();
    value   = note.pick("foo");
    value   = note.pick("foo", "bar");
    value   = note.pick((value: any, key: any, object: any) => true);
    value   = note.omit("foo");
    value   = note.omit("foo", "bar");
    value   = note.omit((value: any, key: any, object: any) => true);
    value   = note.chain().pick().omit().value();
    bool    = note.isEmpty();
}

class Employee extends Backbone.Model {
    reports: EmployeeCollection;

    constructor(attributes?: any, options?: any) {
        super(options);
        this.reports = new EmployeeCollection();
        this.reports.url = '../api/employees/' + this.id + '/reports';
        // Test that collection url property can be set as a function returning a string.
        this.reports.url = () => { return ""; };
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
    published: boolean;
}

class Library extends Backbone.Collection<Book> {
    // This model definition is here only to test type compatibility of the model, but it
    // is not necessary in working code as it is automatically inferred through generics.
    model: typeof Book;

    constructor(models?: Book[] | Object[], options?: any) {
        super(models, options);

        // Test comparator allowed types.
        this.comparator = "title";
        this.comparator = (model: Book) => { return 1; };
        this.comparator = (model: Book) => { return "Title"; };
        this.comparator = (model1: Book, model2: Book) => { return 1; };
    }
}

class Books extends Backbone.Collection<Book> { }

class ArbitraryCollection extends Backbone.Collection { }

function test_collection() {

    var books = new Books();
    books.set([{title: "Title 0", author: "Johan" }]);
    books.reset();

    var book1: Book = new Book({ title: "Title 1", author: "Mike" });
    books.add(book1);

    // Test adding sort option to add.
    books.add(new Book(), { sort: true });

    // Objects can be added to collection by casting to model type.
    // Compiler will check if object properties are valid for the cast.
    // This gives better type checking than declaring an `any` overload.
    books.add(<Book>{ title: "Title 2", author: "Mikey" });

    var model: Book = book1.collection.first();
    if (model !== book1) {
        throw new Error("Error");
    }

    books.each(book =>
        book.get("title"));

    var titles = books.map(book =>
        book.get("title"));

    var publishedBooks = books.filter(book =>
        book.get("published") === true);

    var alphabetical = books.sortBy((book: Book): number => null);

    var copy = books.clone();

    let one: Book;
    let models: Book[];
    let bool: boolean;
    let numDict: _.Dictionary<number>;
    let modelDict: _.Dictionary<Book>;
    let modelsDict: _.Dictionary<Book[]>;
    let num: number;

    models = books.slice();
    models = books.slice(1);
    models = books.slice(1, 3);

    let it1: Iterator<Book>;
    it1 = books.values();
    it1 = books[Symbol.iterator]();
    let it2: Iterator<any>;
    it2 = books.keys();
    let it3: Iterator<[any, Book]>;
    it3 = books.entries();

    // underscore methods
    bool       = books.all((value: Book, index: number, list: Book[]) => true);
    bool       = books.any((value: Book, index: number, list: Book[]) => true);
    bool       = books.chain().any((value: Book, index: number, list: Book[]) => true).value();
    models     = books.collect((value: Book, index: number, list: Book[]) => value);
    bool       = books.contains(book1);
    numDict    = books.countBy((value: Book, index: number, list: Book[]) => true);
    numDict    = books.countBy("foo");
    one        = books.detect((value: Book, index: number, list: Book[]) => true);
    models     = books.difference([book1]);
    models     = books.drop();
    models     = books.each((value: Book, index: number, list: Book[]) => true);
    bool       = books.every((value: Book, index: number, list: Book[]) => true);
    models     = books.filter((value: Book, index: number, list: Book[]) => true);
    one        = books.find((value: Book, index: number, list: Book[]) => true);
    num        = books.findIndex((value: Book, index: number, list: Book[]) => true);
    num        = books.findLastIndex((value: Book, index: number, list: Book[]) => true);
    one        = books.first();
    models     = books.first(3);
    models     = books.foldl((prev: Book[], curr: Book, index: number, list: Book[]) => prev, []);
    models     = books.foldr((prev: Book[], curr: Book, index: number, list: Book[]) => prev, []);
    models     = books.forEach((value: Book, index: number, list: Book[]) => true);
    modelsDict = books.groupBy((value: Book, index: number, list: Book[]) => true);
    modelsDict = books.groupBy("foo");
    one        = books.head();
    models     = books.head(3);
    bool       = books.include(book1);
    bool       = books.includes(book1);
    modelDict  = books.indexBy((value: Book, index: number, list: Book[]) => true);
    modelDict  = books.indexBy("foo");
    num        = books.indexOf(book1, true);
    one        = books.initial();
    models     = books.initial(3);
    models     = books.inject((prev: Book[], curr: Book, index: number, list: Book[]) => prev, []);
    one        = books.invoke("at", 3);
    bool       = books.isEmpty();
    one        = books.last();
    models     = books.last(3);
    num        = books.lastIndexOf(book1, 3);
    models     = books.map((value: Book, index: number, list: Book[]) => value);
    one        = books.max((value: Book, index: number, list: Book[]) => value);
    one        = books.min((value: Book, index: number, list: Book[]) => value);
    [models]   = books.partition((value: Book, index: number, list: Book[]) => true);
    models     = books.reduce((prev: Book[], curr: Book, index: number, list: Book[]) => prev, []);
    models     = books.reduceRight((prev: Book[], curr: Book, index: number, list: Book[]) => prev, []);
    models     = books.reject((value: Book, index: number, list: Book[]) => true);
    models     = books.rest(3);
    one        = books.sample();
    models     = books.sample(3);
    models     = books.select((value: Book, index: number, list: Book[]) => true);
    models     = books.shuffle();
    num        = books.size();
    bool       = books.some((value: Book, index: number, list: Book[]) => true);
    models     = books.sortBy((value: Book, index: number, list: Book[]) => value);
    models     = books.sortBy("foo");
    models     = books.tail(3);
    one        = books.take();
    models     = books.take(3);
    models     = books.toArray();
    models     = books.without(book1, book1);
}

//////////

Backbone.history.start();
Backbone.History.started;
Backbone.history.loadUrl();
Backbone.history.loadUrl('12345');

namespace v1Changes {
    namespace events {
        function test_once() {
            var model = new Employee;
            model.once('invalid', () => { }, this);
            model.once('invalid', () => { });
            model.once({invalid: () => { }, success: () => { }}, this);
            model.once({invalid: () => { }, success: () => { }});
        }

        function test_listenTo() {
            var model = new Employee;
            var view = new Backbone.View<Employee>();
            view.listenTo(model, 'invalid', () => { });
            view.listenTo(model, {invalid: () => { }, success: () => { }});
        }

        function test_listenToOnce() {
            var model = new Employee;
            var view = new Backbone.View<Employee>();
            view.listenToOnce(model, 'invalid', () => { });
            view.listenToOnce(model, {invalid: () => { }, success: () => { }});
        }

        function test_stopListening() {
            var model = new Employee;
            var view = new Backbone.View<Employee>();
            view.stopListening(model, 'invalid', () => { });
            view.stopListening(model, 'invalid');
            view.stopListening(model);
        }
    }

    namespace ModelAndCollection {
        function test_url() {
            Employee.prototype.url = () => '/employees';
            EmployeeCollection.prototype.url = () => '/employees';
        }

        function test_model_create_with_collection() {
            var collection = new Books();
            var employee = new Book({}, {collection, parse: true})
            employee.collection
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

    namespace Model {
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

    namespace Collection {
        function test_fetch() {
            var collection = new EmployeeCollection;
            collection.fetch({
                reset: true,
                remove: false
            });
        }

        function test_create() {
            var collection = new EmployeeCollection;
            var model = new Employee;

            collection.create(model, {
                validate: false
            });
        }

        function test_set() {
            var collection = new EmployeeCollection();
            var model = new Employee();
            collection.set([model], { add: false, remove: true, merge: false });
        }
    }

    namespace Router {
        function test_navigate() {
            var router = new Backbone.Router;

            router.navigate('/employees', { trigger: true });
            router.navigate('/employees', true);
        }
    }

    namespace Sync {
        // Test for Backbone.sync override.
        Backbone.sync('create', new Employee());
        Backbone.sync('read', new EmployeeCollection());
    }
}

interface BookViewOptions extends Backbone.ViewOptions<Book> {
    featured: boolean;
}

class BookView extends Backbone.View<Book> {
    featured: boolean;
    constructor(options: BookViewOptions) {
        super(options);
        this.featured = !!options.featured;
    }
}

interface ModellessViewOptions extends Backbone.ViewOptions {
    color?: string;
}

class ModellessView extends Backbone.View {
    color: string;
    constructor(options: ModellessViewOptions) {
        super(options);
        this.color = options.color;
    }
}
