import ApplicationInstance from "@ember/application/instance";
import EngineInstance from "@ember/engine/instance";
import Owner, {
    Factory,
    FactoryManager,
    FullName,
    getOwner,
    KnownForTypeResult,
    RegisterOptions,
    Resolver,
    setOwner,
} from "@ember/owner";

// Just a class we can construct in the Factory and FactoryManager tests
declare class ConstructThis {
    hasProps: boolean;
}

// ----- RegisterOptions ----- //
declare let regOptionsA: RegisterOptions;
regOptionsA.instantiate; // $ExpectType boolean | undefined
regOptionsA.singleton; // $ExpectType boolean | undefined

// ----- Factory ----- //
// This gives us coverage for the cases where you are *casting*.
declare let aFactory: Factory<ConstructThis>;

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
aFactory.create({ unrelatedNonsense: "yep yep yep" });
// @ts-expect-error
aFactory.create({ hasProps: true, unrelatedNonsense: "yep yep yep" });

// But this should be legal.
const goodPojo = { hasProps: true, unrelatedNonsense: "also true" };
aFactory.create(goodPojo);

// while this should be rejected for *type error* reasons, not EPC
const badPojo = { hasProps: "huzzah", unrelatedNonsense: "also true" };
// @ts-expect-error
aFactory.create(badPojo);

// ----- FactoryManager ----- //
declare let aFactoryManager: FactoryManager<ConstructThis>;
aFactoryManager.class; // $ExpectType Factory<ConstructThis>
aFactoryManager.create({}); // $ExpectType ConstructThis
aFactoryManager.create({ hasProps: true }); // $ExpectType ConstructThis
aFactoryManager.create({ hasProps: false }); // $ExpectType ConstructThis
// @ts-expect-error
aFactoryManager.create({ otherStuff: "nope" });
// @ts-expect-error
aFactoryManager.create({ hasProps: true, otherStuff: "nope" });
aFactoryManager.create(goodPojo); // $ExpectType ConstructThis
// @ts-expect-error
aFactoryManager.create(badPojo);

// ----- Resolver ----- //
declare let resolver: Resolver;
resolver.resolve("some-name");
const knownForFoo = resolver.knownForType?.("foo");
knownForFoo?.["foo:bar"]; // $ExpectType boolean | undefined
// @ts-expect-error
knownForFoo?.["blah"];

// This one is last so it can reuse the bits from above!
// ----- Owner ----- //
declare let owner: Owner;

// @ts-expect-error
owner.lookup();
owner.lookup("type:name"); // $ExpectType unknown
// @ts-expect-error
owner.lookup("non-namespace-string");
owner.lookup("namespace@type:name"); // $ExpectType unknown

owner.register("type:name", aFactory); // $ExpectType void
owner.register("type:name", aFactory, {}); // $ExpectType void
owner.register("type:name", aFactory, { instantiate: true }); // $ExpectType void
owner.register("type:name", aFactory, { instantiate: false }); // $ExpectType void
owner.register("type:name", aFactory, { singleton: true }); // $ExpectType void
owner.register("type:name", aFactory, { singleton: false }); // $ExpectType void
owner.register("type:name", aFactory, { instantiate: true, singleton: true }); // $ExpectType void
owner.register("type:name", aFactory, { instantiate: true, singleton: false }); // $ExpectType void
owner.register("type:name", aFactory, { instantiate: false, singleton: true }); // $ExpectType void
owner.register("type:name", aFactory, { instantiate: false, singleton: false }); // $ExpectType void
// @ts-expect-error
owner.register("non-namespace-string", aFactory);
owner.register("namespace@type:name", aFactory); // $ExpectType void

owner.factoryFor("type:name"); // $ExpectType FactoryManager<object> | undefined
owner.factoryFor("type:name")?.class; // $ExpectType Factory<object> | undefined
owner.factoryFor("type:name")?.create(); // $ExpectType object | undefined
owner.factoryFor("type:name")?.create({}); // $ExpectType object | undefined
owner.factoryFor("type:name")?.create({ anythingGoes: true }); // $ExpectType object | undefined
// @ts-expect-error
owner.factoryFor("non-namespace-string");
owner.factoryFor("namespace@type:name"); // $ExpectType FactoryManager<object> | undefined

// Arbitrary registration patterns work, as here.
declare module "@ember/owner" {
    interface DIRegistry {
        etc: {
            "my-type-test": ConstructThis;
        };
    }
}

owner.lookup("etc:my-type-test"); // $ExpectType ConstructThis

// Tests deal with the fact that string literals are a special case! `let`
// bindings will accordingly not "just work" as a result. The separate
// assignments both satisfy the linter and show why it matters.
let aName;
aName = "type:name";
// @ts-expect-error
owner.lookup(aName);

let aTypedName: FullName;
aTypedName = "type:name";
owner.lookup(aTypedName); // $ExpectType unknown

// Nor will callbacks work "out of the box". But they can work if they have the
// correct type.
declare const justStrings: string[];
// @ts-expect-error
justStrings.map(aString => owner.lookup(aString));
declare let typedStrings: FullName[];
typedStrings.map(aString => owner.lookup(aString));

// Also make sure it keeps working with const bindings
const aConstName = "type:name";
owner.lookup(aConstName); // $ExpectType unknown

// ----- Minimal further coverage for POJOs ----- //
// `Factory` and `FactoryManager` don't have to deal in actual classes. :sigh:
const Creatable = {
    hasProps: true,
};

const pojoFactory: Factory<typeof Creatable> = {
    create(initialValues?) {
        const instance = Creatable;
        if (initialValues) {
            if (initialValues.hasProps) {
                Object.defineProperty(instance, "hasProps", {
                    value: initialValues.hasProps,
                    enumerable: true,
                    writable: true,
                });
            }
        }
        return instance;
    },
};

pojoFactory.create(); // $ExpectType { hasProps: boolean; }

// ----- getOwner ----- //

// @ts-expect-error
getOwner();

// $ExpectType Owner | undefined
getOwner({});

// ----- setOwner ----- //

// @ts-expect-error
setOwner();

// @ts-expect-error
setOwner({});

declare let baseOwner: Owner;
setOwner({}, baseOwner); // $ExpectType void

declare let engine: EngineInstance;
setOwner({}, engine); // $ExpectType void

declare let application: ApplicationInstance;
setOwner({}, application); // $ExpectType void
