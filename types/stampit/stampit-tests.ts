/** Import 'stampit' module */
import stampit from 'stampit';

/** Import 'stampit' as ... module */
// import * as Stamp from 'stampit';

/** selective import from module */
// import {
//   compose,
//   composers,
//   conf,
//   configuration,
//   deepConf,
//   deepConfiguration,
//   deepProperties,
//   deepProps,
//   deepStatics,
//   init,
//   initializers,
//   methods,
//   properties,
//   propertyDescriptors,
//   props,
//   staticDeepProperties,
//   staticProperties,
//   staticPropertyDescriptors,
//   version,
// } from 'stampit';

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

// Here's a mixin with public methods, and some props:
const membership = stampit({
    methods: {
        members: {
            itCanBe: "anything",
        },
        myMembers: {},
        dbConnString: "pgs://data.local",
        MY_LIMIT: 100,
        myRegExp: /foobar/g,
        add(member: any) {
            this.members[member.name] = member;
            return this;
        },
        getMember(name: any) {
            return this.members[name];
        }
    },
    props: {
        members: {}
    }
});

// Let's set some defaults:
const defaults = stampit().props({
    name: 'The Saloon',
    specials: 'Whisky, Gin, Tequila'
});

// Classical inheritance has nothing on this. No parent/child coupling. No deep inheritance hierarchies.
// Just good, clean code reusability.
const bar = stampit.compose(defaults, membership);
// Note that you can override props on instantiation:
const myBar = bar({ name: 'Moe\'s' });
// Silly, but proves that everything is as it should be.
myBar.add({ name: 'Homer' }).open().getMember('Homer');

const myStamp = stampit().methods({
    foo() {
        return 'foo';
    },
    methodOverride() {
        return false;
    },
    myMembers: {},
    dbConnString: "pgs://data.local",
    MY_LIMIT: 100,
    myRegExp: /foobar/g,
}).methods({
    bar() {
        return 'bar';
    },
    methodOverride() {
        return true;
    },
    myMembers: {},
    dbConnString: "pgs://data.local",
    MY_LIMIT: 100,
    myRegExp: /foobar/g,
});

myStamp.deepProps({
    foo: { bar: 'bar' },
    refsOverride: false
}).props({
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

const newStamp = stampit({ props: { defaultNum: 1 } }).compose(myStamp);

const obj1 = stampit().methods({
    a() {
        return 'a';
    },
    myMembers: {},
    dbConnString: "pgs://data.local",
    MY_LIMIT: 100,
    myRegExp: /foobar/g,
}, {
    b() {
        return 'b';
    },
    myMembers: {},
    dbConnString: "pgs://data.local",
    MY_LIMIT: 100,
    myRegExp: /foobar/g,
}).create();

const obj2 = stampit().props({
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
    },
    myMembers: {},
    dbConnString: "pgs://data.local",
    MY_LIMIT: 100,
    myRegExp: /foobar/g,
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
interface SomeStamp extends stampit.Stamp<SomeStampInstance> {
    (params: { a: number; b: boolean}): SomeStampInstance;
}

const SomeStamp = stampit<SomeStamp>()
    .init(function(params: { a: number; b: boolean}) {
        this.a = '' + a; // this SomeStampInstance
        this.b = '' + b;
    });

SomeStamp({ a: 1, b: false }); // $ExpectType SomeStampInstance
SomeStamp({ a: 1, b: false }).a; // $ExpectType string

const d: stampit.ExtendedDescriptor<{}> = {
  methods: {},
  properties: {},
  deepProperties: {},
  propertyDescriptors: {},
  initializers: [],
  staticProperties: {},
  staticDeepProperties: {},
  staticPropertyDescriptors: {},
  composers: [],
  configuration: {},
  deepConfiguration: {},
  name: '',
  // shorthands
  props: {},
  deepProps: {},
  init: [],
  statics: {},
  deepStatics: {},
  conf: {},
  deepConf: {},
};

// The `.compose()` method
const compose = stampit.compose; // $ExpectType typeof stampit

const stampUntyped = compose(); // $ExpectType Stamp<any>
stampUntyped(); // $ExpectType any
// const stampAny = compose<any>(); // $ExpectType Stamp<any>
// stampAny(); // $ExpectType any
const stampBigint = compose<bigint>(); // $ExpectType never
const stampBoolean = compose<boolean>(); // $ExpectType never
const stampNull = compose<null>(); // $ExpectType never
const stampNumber = compose<number>(); // $ExpectType never
const stampString = compose<string>(); // $ExpectType never
const stampSymbol = compose<symbol>(); // $ExpectType never
const stampUndefined = compose<undefined>(); // $ExpectType never
const stampUnknown = compose<unknown>(); // $ExpectType Stamp<unknown>
stampUnknown(); // $ExpectType unknown
const stampNever = compose<never>(); // $ExpectType never

// Declare interface of objects created by stamps
interface Object0 {
  action: () => void;
  value: number;
}

interface Object1 {
  reaction: () => void;
  property: number;
}

const stampObject0 = compose<Object0>(); // $ExpectType Stamp<Object0>
stampObject0(); // $ExpectType Object0

const stampObject1 = compose<Object1>(); // $ExpectType Stamp<Object1>
stampObject1(); // $ExpectType Object1

// Define a typed ExtendedDescriptor and benefit its properly typed `this` in `methods`
const descriptor0: stampit.ExtendedDescriptor<Object0> = {
  methods: {
    logLocalThis() {
        this; // $ExpectType Object0
    },
    myMembers: {},
    dbConnString: "pgs://data.local",
    MY_LIMIT: 100,
    myRegExp: /foobar/g,
  },
  properties: {},
  deepProperties: {},
  propertyDescriptors: {},
  staticProperties: {},
  staticDeepProperties: {},
  staticPropertyDescriptors: {},
  initializers: [
    function(options, context) {
      this; // $ExpectType Object0
      return context.instance;
    }
  ],
  composers: [
    (parameters) => {
      return parameters.stamp;
    }
  ],
  configuration: {},
  deepConfiguration: {}
};

const stampDescriptor0 = compose<typeof descriptor0>(descriptor0); // $ExpectType Stamp<Object0>
stampDescriptor0(); // $ExpectType Object0

// check typed stamps... with untyped descriptor (`this` isn't typed in `methods`)
// inline type assertion is still possible though
const stampUntypedDescriptor0 = compose<Object0>(/* <stampit.ExtendedDescriptor<Object0>> */ {
  methods: {
    logLocalThis() {
        this; // $ExpectType any
    },
    myMembers: {},
    dbConnString: "pgs://data.local",
    MY_LIMIT: 100,
    myRegExp: /foobar/g,
  },
} /* as stampit.ExtendedDescriptor<Object0> */);
stampUntypedDescriptor0; // $ExpectType Stamp<Object0>
stampUntypedDescriptor0(); // $ExpectType Object0

// Check a stamp's `.compose()` method
const stamp1 = stampObject0.compose<Object1>(); // $ExpectType Stamp<Object1>
stamp1(); // $ExpectType Object1

// Define an extended stamp.
// The type of created object cannot be changed afterward
// Lazy interface composition can be done using the `&` intersection operator
interface ExtendedStamp extends stampit.Stamp<Object0 & Object1> {
  decompose: () => unknown;
}

// Invoke `.compose()` method with the type of the extended stamp
const extendedStamp0 = compose<ExtendedStamp>(); // $ExpectType ExtendedStamp
extendedStamp0(); // $ExpectType Object0 & Object1
