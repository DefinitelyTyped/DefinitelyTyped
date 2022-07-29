import Owner, { Factory, FactoryManager, RegisterOptions } from '@ember/owner';

// Just a class we can construct in the Factory and FactoryManager tests
declare class ConstructThis {
    hasProps: boolean;
}

// And a POJO, since `Factory(Manager)` don't have to deal in actual classes
const Creatable = {
    hasProps: true,
};

// ----- RegisterOptions ----- //
declare let regOptionsA: RegisterOptions;
regOptionsA.instantiate; // $ExpectType boolean | undefined
regOptionsA.singleton; // $ExpectType boolean | undefined

// ----- Factory ----- //
// This gives us coverage for the cases where you are *casting*.
declare let aFactory: Factory<ConstructThis, typeof ConstructThis>;
aFactory.class; // $ExpectType typeof ConstructThis
new aFactory.class(); // $ExpectType ConstructThis
aFactory.create();
aFactory.create({});
aFactory.create({
    hasProps: true,
});
aFactory.create({
    hasProps: false,
});

// These should be rejected by way of EPC
aFactory.create({ unrelatedNonsense: 'yep yep yep' }); // $ExpectError
aFactory.create({ hasProps: true, unrelatedNonsense: 'yep yep yep' }); // $ExpectError

// But this should be legal.
const goodPojo = { hasProps: true, unrelatedNonsense: 'also true' };
aFactory.create(goodPojo);

// while this should be rejected for *type error* reasons, not EPC
const badPojo = { hasProps: 'huzzah', unrelatedNonsense: 'also true' };
aFactory.create(badPojo); // $ExpectError

// ----- FactoryManager ----- //
declare let aFactoryManager: FactoryManager<ConstructThis, typeof ConstructThis>;
aFactoryManager.class; // $ExpectType Factory<ConstructThis, typeof ConstructThis>
aFactoryManager.create({}); // $ExpectType ConstructThis
aFactoryManager.create({ hasProps: true }); // $ExpectType ConstructThis
aFactoryManager.create({ hasProps: false }); // $ExpectType ConstructThis
aFactoryManager.create({ otherStuff: 'nope' }); // $ExpectError
aFactoryManager.create({ hasProps: true, otherStuff: 'nope' }); // $ExpectError
aFactoryManager.create(goodPojo); // $ExpectType ConstructThis
aFactoryManager.create(badPojo); // $ExpectError

// This one is last so it can reuse the bits from above!
// ----- Owner ----- //
declare let owner: Owner;

owner.lookup(); // $ExpectError
owner.lookup('type:name'); // $ExpectType unknown
owner.lookup('non-namespace-string'); // $ExpectError

owner.register('type:name', aFactory); // $ExpectType void
owner.register('type:name', aFactory, {}); // $ExpectType void
owner.register('type:name', aFactory, { instantiate: true }); // $ExpectType void
owner.register('type:name', aFactory, { instantiate: false }); // $ExpectType void
owner.register('type:name', aFactory, { singleton: true }); // $ExpectType void
owner.register('type:name', aFactory, { singleton: false }); // $ExpectType void
owner.register('type:name', aFactory, { instantiate: true, singleton: true }); // $ExpectType void
owner.register('type:name', aFactory, { instantiate: true, singleton: false }); // $ExpectType void
owner.register('type:name', aFactory, { instantiate: false, singleton: true }); // $ExpectType void
owner.register('type:name', aFactory, { instantiate: false, singleton: false }); // $ExpectType void
owner.register('non-namespace-string', aFactory); // $ExpectError

owner.factoryFor('type:name'); // $ExpectType FactoryManager<unknown, object> | undefined
owner.factoryFor('type:name')?.class; // $ExpectType Factory<unknown, object> | undefined
owner.factoryFor('type:name')?.create(); // $ExpectType unknown
owner.factoryFor('type:name')?.create({}); // $ExpectType unknown
owner.factoryFor('type:name')?.create({ anythingGoes: true }); // $ExpectType unknown
owner.factoryFor('non-namespace-string'); // $ExpectError
