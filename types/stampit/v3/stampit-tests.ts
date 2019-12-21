import stampit = require('stampit');

const a = stampit().init(function(options) {
    const a = options.args[0];
    this.getA = () => {
        return a;
    };
});
a(); // Object -- so far so good.
a().getA(); // "a"

const b = stampit().init(function() {
    const a = 'b';
    this.getB = () => {
        return a;
    };
});

const c = stampit.compose(a, b);
const foo = c(); // we won't throw this one away...
foo.getA(); // "a"
foo.getB(); // "b"

// Here's a mixin with public methods, and some refs:
const membership = stampit({
    methods: {
        members: {},
        add(member: any) {
            this.members[member.name] = member;
            return this;
        },
        getMember(name: any) {
            return this.members[name];
        }
    },
    refs: {
        members: {}
    }
});

// Let's set some defaults:
const defaults = stampit().refs({
    name: 'The Saloon',
    specials: 'Whisky, Gin, Tequila'
});

// Classical inheritance has nothing on this. No parent/child coupling. No deep inheritance hierarchies.
// Just good, clean code reusability.
const bar = stampit.compose(defaults, membership);
// Note that you can override refs on instantiation:
const myBar = bar({ name: 'Moe\'s' });
// Silly, but proves that everything is as it should be.
myBar.add({ name: 'Homer' }).open().getMember('Homer');

const myStamp = stampit().methods({
    foo() {
        return 'foo';
    },
    methodOverride() {
        return false;
    }
}).methods({
    bar() {
        return 'bar';
    },
    methodOverride() {
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

myStamp.init(function() {
    const secret = 'foo';

    this.getSecret = () => {
        return secret;
    };
}).init(function() {
    this.a = true;
}).init(function() {
    this.b = true;
}, function() {
    this.c = true;
});

let obj = myStamp.create();
obj.getSecret && obj.a && obj.b && obj.c; // true

const newStamp = stampit({ refs: { defaultNum: 1 } }).compose(myStamp);

const obj1 = stampit().methods({
    a() {
        return 'a';
    }
}, {
    b() {
        return 'b';
    }
}).create();

const obj2 = stampit().refs({
    a: 'a'
}, {
    b: 'b'
}).create();

obj = defaults.compose(newStamp, membership).create();

// The old constructor / class thing...
const Constructor = function Constructor() {
    this.thing = 'initialized';
};
Constructor.prototype.foo = function foo() {
    return 'foo';
};

// A new stamp to compose with...
const newskool = stampit().methods({
    bar: function bar() {
        return 'bar';
    }
    // your methods here...
}).init(function() {
    this.baz = 'baz';
});

// Now you can compose those old constructors just like you could
// with any other stamp...
const myThing = stampit.compose(newskool);

const t = myThing();

t.thing; // 'initialized',

t.foo(); // 'foo',

t.bar(); // 'bar'

interface SomeStampInstance {
    a: string;
    b: string;
}

// Test import of stamp type
interface SomeStamp extends stampit.Stamp {
    (params: { a: number; b: boolean}): SomeStampInstance;
}

const SomeStamp = stampit()
    .init(function(params: { a: number; b: boolean}) {
        this.a = '' + a;
        this.b = '' + b;
    }) as SomeStamp;

SomeStamp({ a: 1, b: false }); // $ExpectType SomeStampInstance
SomeStamp({ a: 1, b: false }).a; // $ExpectType string
