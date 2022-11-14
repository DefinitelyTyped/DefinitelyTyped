/* tslint:disable:space-before-function-paren only-arrow-functions prefer-const no-unnecessary-class */

// #region OO globals
function SubClass() {}

function ParentClass() {}

function UsefulMixin() {}

let deeplyNestedObject = {
    foo: {
        bar: {
            baz: 1,
        },
    },
    fooBar: 2,
};

let deeplyNestedObject2 = {
    foo: {
        bar: {
            baz: 1,
        },
    },
    bar: ['foo', 'bar'],
    baz: { clone: () => 'baz' },
    fooBar: new HTMLAnchorElement(),
    fooBaz: () => 'fooBaz',
};

let objectWithMultipleValueTypes = {
    foo: 1,
    bar: 'baz',
    baz: false,
};

let sampleArray = [1, undefined, 3, 4];

let anotherSampleArray = [5, '6', ['7']];

OO.initClass(ParentClass); // $ExpectType void

OO.inheritClass(SubClass, ParentClass); // $ExpectType void

OO.mixinClass(UsefulMixin, SubClass); // $ExpectType void

OO.isSubclass(SubClass, ParentClass); // $ExpectType boolean

{
    OO.getProp(deeplyNestedObject, 'foo', 'bar', 'baz'); // $ExpectType number

    OO.getProp(deeplyNestedObject, 'foo', 'bar', 'baz', 'notExist'); // $ExpectType undefined

    OO.getProp(deeplyNestedObject, 'fooBar', 'toString'); // $ExpectType (radix?: number | undefined) => string

    OO.getProp(deeplyNestedObject, 'notExist', 'notExist'); // $ExpectType undefined
}

OO.setProp(deeplyNestedObject, 'foo', 'bar', 2); // $ExpectType void

OO.deleteProp(deeplyNestedObject, 'foo', 'bar', 'notExist'); // $ExpectType void

OO.cloneObject(deeplyNestedObject); // $ExpectType { foo: { bar: { baz: number; }; }; fooBar: number; }

OO.getObjectValues(objectWithMultipleValueTypes); // $ExpectType (string | number | boolean)[]

{
    // $ExpectType number | null
    OO.binarySearch(
        sampleArray,
        item => {
            item; // $ExpectType number | undefined
            return 1;
        },
        false,
    );

    // $ExpectType number | null
    OO.binarySearch(sampleArray, item => {
        item; // $ExpectType number | undefined
        return 1;
    });
}

{
    OO.compare(deeplyNestedObject, objectWithMultipleValueTypes); // $ExpectType boolean

    OO.compare(deeplyNestedObject, undefined); // $ExpectType boolean

    OO.compare(deeplyNestedObject, null); // $ExpectType boolean

    OO.compare(deeplyNestedObject, objectWithMultipleValueTypes); // $ExpectType boolean

    OO.compare(undefined, objectWithMultipleValueTypes); // $ExpectType boolean

    OO.compare(null, objectWithMultipleValueTypes); // $ExpectType boolean
}

{
    OO.copy(deeplyNestedObject); // $ExpectType { foo: { bar: { baz: number; }; }; fooBar: number; }

    // $ExpectType unknown
    OO.copy(deeplyNestedObject, leaf => {
        leaf; // $ExpectType number
    });

    // $ExpectType unknown
    OO.copy(
        deeplyNestedObject2,
        leaf => {
            leaf; // $ExpectType string | number | HTMLAnchorElement | (() => string) | { clone: () => string; }
        },
        node => {
            // tslint:disable-next-line:max-line-length
            // $ExpectType string | number | string[] | HTMLAnchorElement | (() => string) | { baz: number; } | { bar: { baz: number; }; } | { clone: () => string; } | { foo: { bar: { baz: number; }; }; bar: string[]; baz: { clone: () => string; }; fooBar: HTMLAnchorElement; fooBaz: () => string; }
            node;
        },
    );

    // $ExpectType unknown
    OO.copy(1, undefined, node => {
        node; // $ExpectType number
    });

    // $ExpectType unknown
    OO.copy(
        sampleArray,
        leaf => {
            leaf; // $ExpectType number | undefined
        },
        node => {
            node; // $ExpectType number | (number | undefined)[] | undefined
        },
    );
}

OO.getHash(deeplyNestedObject); // $ExpectType string

OO.getHash.keySortReplacer; // $ExpectType (key: string, val: any) => any

OO.unique(sampleArray); // $ExpectType (number | undefined)[]

{
    // $ExpectType (string | number | string[] | undefined)[]
    OO.simpleArrayUnion(sampleArray, anotherSampleArray);

    // @ts-expect-error
    OO.simpleArrayUnion(1, anotherSampleArray);

    // @ts-expect-error
    OO.simpleArrayUnion(sampleArray, 2);
}

// $ExpectType number[]
OO.simpleArrayIntersection(sampleArray, anotherSampleArray);

// $ExpectType (number | undefined)[]
OO.simpleArrayDifference(sampleArray, anotherSampleArray);

// $ExpectType boolean
OO.isPlainObject(deeplyNestedObject);

// #endregion

// #region EventEmitter
let eventEmitter = new OO.EventEmitter();

{
    // $ExpectType EventEmitter
    eventEmitter.on('event', function (arg1) {
        this; // $ExpectType null
        arg1; // $ExpectType any
    });

    // $ExpectType EventEmitter
    eventEmitter.on('event', 'handler', [], {
        handler: () => 1,
    });

    // @ts-expect-error
    eventEmitter.on('event', 'handler', [], {
        handler: 1,
    });

    // $ExpectType EventEmitter
    eventEmitter.on(
        'event',
        function (arg1, arg2, arg3) {
            this; // $ExpectType null
            arg1; // $ExpectType any
            arg2; // $ExpectType any
            arg3; // $ExpectType any
        },
        ['foo', 1],
    );

    // $ExpectType EventEmitter
    eventEmitter.on(
        'event',
        function (arg1, arg2, arg3) {
            this; // $ExpectType {}
            arg1; // $ExpectType any
            arg2; // $ExpectType any
            arg3; // $ExpectType any
        },
        ['foo', 1],
        {},
    );
}

// $ExpectType EventEmitter
eventEmitter.once('event', function (arg1) {
    this; // $ExpectType null
    arg1; // $ExpectType any
});

{
    // $ExpectType EventEmitter
    eventEmitter.off('event');

    // $ExpectType EventEmitter
    eventEmitter.off(
        'event',
        function (arg1) {
            arg1; // $ExpectType any
        },
        {},
    );
}

// $ExpectType boolean
eventEmitter.emit('event', 1, 2, 3);

// $ExpectType boolean
eventEmitter.emitThrow('event', 1, 2, 3);

{
    // $ExpectType EventEmitter
    eventEmitter.connect(
        {
            a: () => 1,
        },
        {
            event() {
                this; // $ExpectType { a: () => 1; }
            },
            event2: [
                function () {
                    this; // $ExpectType { a: () => 1; }
                },
                1,
                2,
                3,
            ],
            event3: 'a',
            event4: ['a', 1, 2, 3],
        },
    );

    // $ExpectType EventEmitter
    eventEmitter.connect(
        {
            a: () => 1,
        },
        {
            // @ts-expect-error
            event3: 'b',
            // @ts-expect-error
            event4: ['b', 1, 2, 3],
        },
    );
}

// $ExpectType EventEmitter
eventEmitter.disconnect(
    {
        a: () => 1,
    },
    {
        event() {},
        event2: [function () {}, 1, 2, 3],
        event3: 'a',
        event4: ['a', 1, 2, 3],
    },
);
// #endregion

// #region EmitterList
let emitterList = new OO.EmitterList();

{
    // $ExpectType EmitterList
    emitterList.addItems(eventEmitter);

    // $ExpectType EmitterList
    emitterList.addItems(eventEmitter, 1);

    // $ExpectType EmitterList
    emitterList.addItems([eventEmitter]);

    // $ExpectType EmitterList
    emitterList.addItems([eventEmitter], 1);
}

// $ExpectType void
emitterList.aggregate({
    click: 'groupClick',
    labelChange: null,
});

// $ExpectType EmitterList
emitterList.clearItems();

// $ExpectType number
emitterList.getItemCount();

// $ExpectType number
emitterList.getItemIndex(eventEmitter);

// $ExpectType EventEmitter[]
emitterList.getItems();

// $ExpectType boolean
emitterList.isEmpty();

{
    // $ExpectType EmitterList
    emitterList.removeItems(eventEmitter);

    // $ExpectType EmitterList
    emitterList.removeItems([eventEmitter]);
}
// #endregion

// #region Factory
let factory = new OO.Factory();

// $ExpectType RegistryConstructor
OO.Factory.super;

class FactoryClass {
    static key = 'FactoryClass';
}

class FactoryClass2 {
    static static = {
        name: 'FactoryClass2',
    };
}

{
    // @ts-expect-error
    factory.register(SubClass);

    // $ExpectType void
    factory.register(FactoryClass);

    // $ExpectType void
    factory.register(FactoryClass2);

    // $ExpectType void
    factory.register(SubClass, 'SubClass');
}

{
    // $ExpectType void
    factory.unregister('SubClass');

    // $ExpectType void
    factory.unregister(SubClass);
}

{
    // $ExpectType unknown
    factory.create('SubClass');

    // $ExpectType unknown
    factory.create('SubClass', 1, 2, 3);
}
// #endregion

// #region Registry
let registry = new OO.Registry();

{
    // $ExpectType void
    registry.register('foo', 1);

    // $ExpectType void
    registry.register(['foo'], 1);
}

{
    // $ExpectType void
    registry.unregister('foo');

    // $ExpectType void
    registry.unregister(['foo']);
}

// $ExpectType unknown
registry.lookup('foo');

// #endregion

// #region SortedEmitterList
OO.SortedEmitterList.super; // $ExpectType EmitterListConstructor

let sortedEmitterList = new OO.SortedEmitterList((a, b) => {
    a; // $ExpectType EventEmitter
    b; // $ExpectType EventEmitter
    return 1;
});

// $ExpectType void
sortedEmitterList.onItemSortChange(eventEmitter);

// $ExpectType void
sortedEmitterList.setSortingCallback((a, b) => {
    a; // $ExpectType EventEmitter
    b; // $ExpectType EventEmitter
    return 1;
});

{
    // $ExpectType SortedEmitterList
    sortedEmitterList.addItems(eventEmitter);

    // $ExpectType SortedEmitterList
    sortedEmitterList.addItems([eventEmitter]);
}

// $ExpectType number
sortedEmitterList.findInsertionIndex(eventEmitter);
// #endregion
