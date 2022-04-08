

function test_blocks_methods() {
    var extended: Object;
    blocks.extend(extended, new Object());

    blocks.each([3, 1, 4], function(value, index, collection) {
        // value is the current item (3, 1 and 4)
        // index is the current index (0, 1 and 2)
        // collection points to the array passed to the function - [3, 1, 4]
    });

    blocks.eachRight([3, 1, 4], function(value, index, collection) {
        // value is the current item (4, 1 and 3)
        // index is the current index (2, 1 and 0)
        // collection points to the array passed to the function - [3, 1, 4]
    });

    blocks.isArray([1, 2, 3]);
    // -> true

    function calculate() {
        blocks.isArray(arguments);
        // -> false
    }

    function max(collection: any, callback: any) {
        callback = callback || blocks.noop;
    }

    blocks.type('a string');
    // -> string

    blocks.type(314);
    // -> number

    blocks.type([]);
    // -> array

    blocks.type({});
    // -> object

    blocks.type(blocks.noop);
    // -> function

    blocks.type(new RegExp(''));
    // -> regexp

    blocks.type(undefined);
    // -> undefined

    blocks.type(null);
    // -> null
    
    blocks.is([], 'array');
    // -> true

    blocks.is(function() { }, 'object');
    // -> false

    blocks.has({
        price: undefined
    }, 'price');
    // -> true

    blocks.has({
        price: 314
    }, 'ratio');
    // -> false

    blocks.unwrap(blocks.observable(314));
    // -> 314

    blocks.unwrap(blocks([3, 1, 4]));
    // -> [3, 1, 4]

    blocks.unwrap('a string or any other value will not be changed');
    // -> 'a string or any other value will not be changed'

    blocks.toArray(3);
    // -> [3]

    blocks.toArray([3, 1, 4]);
    // -> [3, 1, 4]

    blocks.toUnit(230);
    // -> 230px

    blocks.toUnit(230, '%');
    // -> 230%

    blocks.toUnit('60px', '%');
    // -> 60%
 
    var array = [3, 1, 4];
    var cloned = blocks.clone(array);
    // -> [3, 1, 4]
    var areEqual = array == cloned;
    // -> false

    blocks.isElement(document.body);
    // -> true

    blocks.isElement({});
    // -> false

    blocks.isBoolean(true);
    // -> true

    blocks.isBoolean(new Boolean(false));
    // -> true

    blocks.isBoolean(1);
    // -> false

    blocks.isPlainObject({ property: true });
    // -> true

    blocks.isPlainObject(new Object());
    // -> true

    var car = new Object();

    blocks.isPlainObject(car);
    // -> false

    var alert = blocks.bind(() => {
        alert(this);
    }, 'Hello bind method!');

    alert();
    // -> alerts 'Hello bind method'

    var alertAll = blocks.bind((firstName: string, lastName: string) => {
        alert('My name is ' + firstName + ' ' + lastName);
    }, null, 'John', 'Doe');

    alertAll();
    // -> alerts 'My name is John Doe'
    
    blocks.equals([3, 4], [3, 4]);
    // -> true

    blocks.equals({ value: 7 }, { value: 7, result: 1 });
    // -> false

    blocks.query({
        message: 'Hello World!'
    });

    blocks.query({
        items: ['John', 'Alf', 'Mega'],
        alertIndex: (e: any) => {
            alert('Clicked an item with index:' + blocks.context(e.target).$index);
        }
    });

    blocks.query({
        items: [1, 2, 3],
        alertValue: (e: any) => {
            alert('Clicked the value: ' + blocks.dataItem(e.target));
        }
    });

    blocks.isObservable(blocks.observable(3));
    // -> true

    blocks.isObservable(3);
    // -> false

    blocks.unwrapObservable(blocks.observable(304));
    // -> 304

    blocks.unwrapObservable(305);
    // -> 305
}

function test_observable_array() {
    // creates an observable array with [1, 2, 3] as values
    var items = blocks.observable([1, 2, 3]);

    // removes the previous values and fills the observable array with [5, 6, 7] values
    items.reset([5, 6, 7])

    // results in observable array with [1, 2, 3, 4] values
    items.add(4);

    // results in observable array with [1, 2, 3, 4, 5, 6] values
    items.addMany([4, 5, 6]);

    var items = blocks.observable([4, 2, 3, 1]);

    // results in observable array with [1, 2, 3, 4] values
    items.swap(0, 3);

    var items = blocks.observable([1, 4, 2, 3, 5]);

    // results in observable array with [1, 2, 3, 4, 5] values
    items.move(1, 4);
}

function test_Property() {
    var App = blocks.Application();

    var User = App.Model({
        username: App.Property({
            defaultValue: 'John Doe'
        })
    });
}

function test_Model() {
    var App = blocks.Application();

    var User = App.Model({
        firstName: App.Property({
            required: true,
            validateOnChange: true
        }),

        lastName: App.Property({
            required: true,
            validateOnChange: true
        }),

        fullName: App.Property({
            value: function() {
                return this.firstName() + ' ' + this.lastName();
            }
        })
    });

    App.View('Profile', {
        user: User({
            firstName: 'John',
            lastName: 'Doe'
        })
    });
}

function test_Collection() {
    var App = blocks.Application();

    var User = App.Model({
        firstName: App.Property({
            required: true,
            validateOnChange: true
        }),

        lastName: App.Property({
            required: true,
            validateOnChange: true
        }),

        fullName: App.Property({
            value: function() {
                return this.firstName() + ' ' + this.lastName();
            }
        })
    });

    var Users = App.Collection(User, {
        count: App.Property({
            value: () => {
                return this().length;
            }
        })
    });

    App.View('Profiles', {
        users: Users([{
            firstName: 'John',
            lastName: 'Doe'
        }, {
                firstName: 'Johna',
                lastName: 'Doa'
            }])
    });
}

function test_View() {
    var App = blocks.Application();

    App.View('Clicker', {
        handleClick: () => {
            alert('Clicky! Click!');
        }
    });


    App.View('Statistics', {
        init: () => {
            this.loadRemoteData();
        },

        loadRemoteData: () => {
            // ...stuff...
        }
    });

    App.View('ContactUs', {
        options: {
            route: 'contactus'
        },

        routed: () => {
            alert('Navigated to ContactUs page!')
        }
    });

    App.View('ContactUs', {
        options: {
            route: 'contactus'
        }
    });

    App.View('Navigation', {
        navigateToContactUs: () => {
            this.route('contactus')
        }
    });
}
