

import stampit = require('stampit');

var a = stampit().init((options) => {
    var a = options.args[0];
    this.getA = () => {
        return a;
    };
});
a(); // Object -- so far so good.
a().getA(); // "a"

var b = stampit().init(function () {
    var a = 'b';
    this.getB = function () {
        return a;
    };
});


var c = stampit.compose(a, b);
var foo = c(); // we won't throw this one away...
foo.getA(); // "a"
foo.getB(); // "b"

// Here's a mixin with public methods, and some refs:
var membership = stampit({
    methods: {
        members: {},
        add: function (member: any) {
            this.members[member.name] = member;
            return this;
        },
        getMember: function (name: any) {
            return this.members[name];
        }
    },
    refs: {
        members: {}
    }
});
// Let's set some defaults:
var defaults = stampit().refs({
    name: 'The Saloon',
    specials: 'Whisky, Gin, Tequila'
});

// Classical inheritance has nothing on this. No parent/child coupling. No deep inheritance hierarchies.
// Just good, clean code reusability.
var bar = stampit.compose(defaults, membership);
// Note that you can override refs on instantiation:
var myBar = bar({ name: 'Moe\'s' });
// Silly, but proves that everything is as it should be.
myBar.add({ name: 'Homer' }).open().getMember('Homer');


var myStamp = stampit().methods({
    foo: function () {
        return 'foo';
    },
    methodOverride: function () {
        return false;
    }
}).methods({
    bar: function () {
        return 'bar'
    },
    methodOverride: function () {
        return true;
    }
});

myStamp.props({
    foo: { bar: 'bar' },
    refsOverride: false
}).refs({
    bar: 'bar',
    refsOverride: true
});

myStamp.init(function () {
    var secret = 'foo';

    this.getSecret = function () {
        return secret;
    };
}).init(function () {
    this.a = true;
}).init(function () {
    this.b = true;
}, function () {
    this.c = true;
});

var obj = myStamp.create();
obj.getSecret && obj.a && obj.b && obj.c; // true

var newStamp = stampit({ refs: { defaultNum: 1 } }).compose(myStamp);


var obj1 = stampit().methods({
    a: function () {
        return 'a';
    }
}, {
        b: function () {
            return 'b';
        }
    }).create();

var obj2 = stampit().refs({
    a: 'a'
}, {
        b: 'b'
    }).create();

var obj = defaults.compose(newStamp, membership).create();


// The old constructor / class thing...
var Constructor = function Constructor() {
    this.thing = 'initialized';
};
Constructor.prototype.foo = function foo() {
    return 'foo';
};

// A new stamp to compose with...
var newskool = stampit().methods({
    bar: function bar() {
        return 'bar';
    }
    // your methods here...
}).init(function () {
    this.baz = 'baz';
});

// Now you can compose those old constructors just like you could
// with any other stamp...
var myThing = stampit.compose(newskool);

var t = myThing();

t.thing; // 'initialized',

t.foo(); // 'foo',

t.bar(); // 'bar'
