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
// @ts-expect-error
aFactory.create({ unrelatedNonsense: 'yep yep yep' });
// @ts-expect-error
aFactory.create({ hasProps: true, unrelatedNonsense: 'yep yep yep' });

// But this should be legal.
const goodPojo = { hasProps: true, unrelatedNonsense: 'also true' };
aFactory.create(goodPojo);

// while this should be rejected for *type error* reasons, not EPC
const badPojo = { hasProps: 'huzzah', unrelatedNonsense: 'also true' };
// @ts-expect-error
aFactory.create(badPojo);

// ----- FactoryManager ----- //
declare let aFactoryManager: FactoryManager<ConstructThis, typeof ConstructThis>;
aFactoryManager.class; // $ExpectType Factory<ConstructThis, typeof ConstructThis>
aFactoryManager.create({}); // $ExpectType ConstructThis
aFactoryManager.create({ hasProps: true }); // $ExpectType ConstructThis
aFactoryManager.create({ hasProps: false }); // $ExpectType ConstructThis
// @ts-expect-error
aFactoryManager.create({ otherStuff: 'nope' });
// @ts-expect-error
aFactoryManager.create({ hasProps: true, otherStuff: 'nope' });
aFactoryManager.create(goodPojo); // $ExpectType ConstructThis
// @ts-expect-error
aFactoryManager.create(badPojo);

// This one is last so it can reuse the bits from above!
// ----- Owner ----- //
declare let owner: Owner;

// @ts-expect-error
owner.lookup();
owner.lookup('type:name'); // $ExpectType unknown
// @ts-expect-error
owner.lookup('non-namespace-string');

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
// @ts-expect-error
owner.register('non-namespace-string', aFactory);

owner.factoryFor('type:name'); // $ExpectType FactoryManager<unknown, object> | undefined
owner.factoryFor('type:name')?.class; // $ExpectType Factory<unknown, object> | undefined
owner.factoryFor('type:name')?.create(); // $ExpectType unknown
owner.factoryFor('type:name')?.create({}); // $ExpectType unknown
owner.factoryFor('type:name')?.create({ anythingGoes: true }); // $ExpectType unknown
// @ts-expect-error
owner.factoryFor('non-namespace-string');
