import { Mongo } from 'meteor/mongo';
import {
    Helper,
    OptionalHelper,
    Data,
    Full,
    Helpers,
    AllowPartial,
} from 'meteor/dburles:collection-helpers';

interface Author {
    _id?: string | undefined;
    firstName: string;
    lastName: string;
    // function properties are automatically detected as helpers; no need to specify
    fullName: () => string;
    books: () => Mongo.Cursor<Book>;
}

interface Book {
    _id?: string | undefined;
    authorId: string;
    name: string;
    author: () => Author | undefined;
    // use Helper<T> to declare non-function helpers
    foo: Helper<string>;
}

const Books = new Mongo.Collection<Book>('books');
const Authors = new Mongo.Collection<Author>('authors');

// $ExpectType Collection<Book, Book>
Books;

// when inserting items, only data properties are required
const author1 = Authors.insert({
    firstName: 'Charles',
    lastName: 'Darwin',
});

const author2 = Authors.insert({
    firstName: 'Carl',
    lastName: 'Sagan',
});

const book1 = Books.insert({
    authorId: author1,
    name: 'On the Origin of Species',
});

const book2 = Books.insert({
    authorId: author2,
    name: 'Contact',
});

// when providing helpers, no data properties but all helpers are required
// all helpers must be provided at once; this is the only way to typecheck that none are forgotten
// $ExpectType void
Books.helpers({
    author() {
        return Authors.findOne(this.authorId);
    },
    foo: 'bar',
});
// @ts-expect-error
Books.helpers({
    author() {
        return Authors.findOne(this.authorId);
    },
});

// you can override this behavior if you explicitly request to
// (don't do this unless you intend to provide all the helpers sooner or later!)
// $ExpectType void
Authors.helpers<AllowPartial>({
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
});
// $ExpectType void
Authors.helpers<AllowPartial>({
    books() {
        return Books.find({ authorId: this._id });
    },
});

const book = Books.findOne(book1)!;
const author: Author | undefined = book.author();

// can modify resulting Book and update Books with it, even though it has helpers attached
book.name = 'Renamed Book';
// $ExpectType number
Books.update(book._id!, book);

// with mandatory helpers, new objects can be declared directly as Data<T>
const bookData: Data<Book> = {
    authorId: 'Author',
    name: 'Name',
};

// this interface has its helpers declared as optional; this makes instantiating the interface easier,
// but means you need to specify Full<T> to say an object has had its helpers attached
interface OptionalHelpers {
    _id: string;
    value: number;
    increment?: (() => void) | undefined;
    zero?: Helper<number> | undefined;
}

const optionalHelpers = new Mongo.Collection<OptionalHelpers>('optionalHelpers');
// optional helpers still have to be provided when calling helpers
// @ts-expect-error
optionalHelpers.helpers({});
// @ts-expect-error
optionalHelpers.helpers({
    increment() {
        this.value++;
    },
});
// $ExpectType void
optionalHelpers.helpers({
    increment() {
        this.value++;
    },
    zero: 0,
});

const optionalHelper1 = optionalHelpers.insert({ value: 2 });
// Helpers are still guaranteed on the results of findOne, even though helpers were declared optional
// $ExpectType void
optionalHelpers.findOne(optionalHelper1)!.increment();
// same goes for find
// $ExpectType void
optionalHelpers.find(optionalHelper1).fetch()[0].increment();

const foundOptionalHelpers1: OptionalHelpers = optionalHelpers.findOne(optionalHelper1)!;
// however, variables of the interface type will be missing their helpers unless declared as Full<T>
// @ts-expect-error
foundOptionalHelpers1.increment();

// you can do this, but it's kinda ugly imo
const foundOptionalHelpers1Full: Full<OptionalHelpers> = optionalHelpers.findOne(optionalHelper1)!;
// $ExpectType void
foundOptionalHelpers1Full.increment();

// the benefit of this declaration style is that you can pass around instances without ever putting them in a collection:
const takesOptionalHelpers = (arg: OptionalHelpers) => {
    return arg.value;
};
const literalOptHelp: OptionalHelpers = {
    _id: "id",
    value: 4,
};
// $ExpectType number
takesOptionalHelpers(literalOptHelp);
// $ExpectType number
takesOptionalHelpers({
    _id: "another id",
    value: 13
});
// this might be a better choice if your interface is a general data type that you just happen to put in collections sometimes,
// rather than a collection schema you work with retrieved instances of often

// helpers can call themselves recursively
interface RecursiveHelpers {
    _id: string;
    value: number;
    factorial: (arg: number) => number;
}

const recursiveHelpers = new Mongo.Collection<RecursiveHelpers>('recursiveHelpers');
recursiveHelpers.helpers({
    factorial(x) {
        if (x <= 1) return 1;
        return this.factorial(x - 1);
    },
});

const rh1 = recursiveHelpers.insert({ value: 3 });
// $ExpectType number
recursiveHelpers.findOne(rh1)!.factorial(4);

// even when optional!
interface RecursiveOptionalHelpers {
    _id: string;
    value: number;
    factorial?: ((arg: number) => number) | undefined;
}

const recursiveOptionalHelpers = new Mongo.Collection<RecursiveHelpers>('recursiveHelpers');
recursiveHelpers.helpers({
    factorial(x) {
        if (x <= 1) return 1;
        return this.factorial(x - 1);
    },
});

const roh1 = recursiveOptionalHelpers.insert({ value: 3 });
// $ExpectType number
recursiveHelpers.findOne(rh1)!.factorial(4);

// regression test:
// { ...OptionalId<Data<T>>, _id: T['id'] } should be assignable to Data<T>
// (tested here with upsert)

interface MandatoryId {
    _id: string;
    value: number;
}
const mandatoryIds = new Mongo.Collection<MandatoryId>('mandatoryIds');
mandatoryIds.helpers({});
const withoutId: Mongo.OptionalId<MandatoryId> = {
    value: 3,
};

// $ExpectType number | undefined
mandatoryIds.upsert('new ID', { ...withoutId, _id: 'new ID' }).numberAffected;

// regression test:
// union properties on interfaces:
// - are helpers if all their members are helpers
// - aren't helpers if none of their members are helpers
// - may or may not be helpers if only some of their members are helpers
//   (consider this undefined behavior; I don't think there's *any* correct behavior
//   for this situation, so I'm just letting it work out however it does without intervention)
// unions of Helper<T> and unmarked methods don't work; if you legitimately need this functionality,
// tell me and I'll fix it; use Helper<T | YourMethodType> as a workaround until then
//
// null does not count as a helper type
// however, Helper<null> and Helper<T | null> should work more or less correctly
interface ComplicatedMembers {
    _id?: string | undefined;
    nullable: number | null;
    alwaysNull: null;
    helperNull: Helper<null>;
    helperNumber: Helper<number>;
    helperNullableFalse: Helper<false | null>;
    optionalHelperString?: Helper<string> | undefined;
    // tslint:disable-next-line void-return
    helperVoidableNumber: Helper<number | void>;
    methodUnion: (() => boolean) | ((arg: number) => boolean);
    helperUnion: Helper<string> | Helper<number>;
    nonHelperUnion: number | string;
    helperMethodOrString: Helper<(() => string) | string>;
}
const complicatedMembers = new Mongo.Collection<ComplicatedMembers>('complicatedMembers');

// every member recognized as a helper is required when providing helpers
// $ExpectType void
complicatedMembers.helpers({
    methodUnion: () => true,
    helperUnion: 3,
    helperNumber: 5,
    helperNullableFalse: null,
    helperNull: null,
    helperVoidableNumber: undefined,
    optionalHelperString: 'foo',
    helperMethodOrString: () => "method",
});

// @ts-expect-error
complicatedMembers.helpers({
    helperUnion: 3,
    helperNumber: 5,
    helperNullableFalse: null,
    helperNull: null,
    helperVoidableNumber: undefined,
    optionalHelperString: 'foo',
    helperMethodOrString: () => "method",
});

// @ts-expect-error
complicatedMembers.helpers({
    methodUnion: () => true,
    helperNumber: 5,
    helperNullableFalse: null,
    helperNull: null,
    helperVoidableNumber: undefined,
    optionalHelperString: 'foo',
    helperMethodOrString: () => "method",
});

// @ts-expect-error
complicatedMembers.helpers({
    methodUnion: () => true,
    helperUnion: 3,
    helperNullableFalse: null,
    helperNull: null,
    helperVoidableNumber: undefined,
    optionalHelperString: 'foo',
    helperMethodOrString: () => "method",
});

// @ts-expect-error
complicatedMembers.helpers({
    methodUnion: () => true,
    helperUnion: 3,
    helperNumber: 5,
    helperNull: null,
    helperVoidableNumber: undefined,
    optionalHelperString: 'foo',
    helperMethodOrString: () => "method",
});

// @ts-expect-error
complicatedMembers.helpers({
    methodUnion: () => true,
    helperUnion: 3,
    helperNumber: 5,
    helperNullableFalse: null,
    helperNull: null,
    helperVoidableNumber: undefined,
    helperMethodOrString: () => "method",
});

// @ts-expect-error
complicatedMembers.helpers({
    methodUnion: () => true,
    helperUnion: 3,
    helperNumber: 5,
    helperNullableFalse: null,
    helperVoidableNumber: undefined,
    optionalHelperString: 'foo',
    helperMethodOrString: () => "method",
});

// @ts-expect-error
complicatedMembers.helpers({
    methodUnion: () => true,
    helperUnion: 3,
    helperNumber: 5,
    helperNullableFalse: null,
    helperNull: null,
    optionalHelperString: 'foo',
    helperMethodOrString: () => "method",
});

// @ts-expect-error
complicatedMembers.helpers({
    methodUnion: () => true,
    helperUnion: 3,
    helperNumber: 5,
    helperNullableFalse: null,
    helperVoidableNumber: undefined,
    helperNull: null,
    optionalHelperString: 'foo',
});

const complicatedMembersId = complicatedMembers.insert({
    nullable: 2,
    alwaysNull: null,
    nonHelperUnion: 'test',
});

const complicatedMembersInstance = complicatedMembers.findOne(complicatedMembersId)!;
// $ExpectType number
complicatedMembersInstance.helperNumber + 1;
// $ExpectType string
complicatedMembersInstance.optionalHelperString.slice();
// $ExpectType boolean
complicatedMembersInstance.methodUnion(3);
const strOrNum: string | number = complicatedMembersInstance.helperUnion;
const falseOrNull: false | null = complicatedMembersInstance.helperNullableFalse;
const helperNullAccess: null = complicatedMembersInstance.helperNull;

// Limitation: null/undefined helpers, and helpers whose types are unions with null or undefined, can't be properly
// read off a raw ComplicatedMembers
const asComplicatedMembers: ComplicatedMembers = complicatedMembersInstance;

// const falseOrNull2 : false | null = asComplicatedMembers.helperNullableFalse;

// you can work with these by:
// - accepting Helper<null> rather than null
const falseOrNull2: false | Helper<null> = asComplicatedMembers.helperNullableFalse;

// - using a "voidable" rather than a nullable
// tslint:disable-next-line void-return
const numberOrVoid: number | void = asComplicatedMembers.helperVoidableNumber;

// - or, the recommended solution: using OptionalHelper<T>
// OptionalHelper<T> defines a helper which can be left undefined when providing a collection's helpers
// that property can be required or optional on the interface; either way, it'll be optional on Helpers<T> and
// on Full<T>
// and it even works on methods
interface ActuallyOptionalHelpers {
    _id?: string | undefined;
    value: number;
    getValue: OptionalHelper<() => number>;
    incrementValue?: OptionalHelper<() => void> | undefined;
    optionalHelperValue: OptionalHelper<number>;
    optionalHelperName?: OptionalHelper<string> | undefined;
}
const actuallyOptionalHelpers = new Mongo.Collection<ActuallyOptionalHelpers>('actuallyOptionalHelpers');

// every one of those helpers is totally optional - we can even provide an empty object!
// $ExpectType void
actuallyOptionalHelpers.helpers({});
// $ExpectType void
actuallyOptionalHelpers.helpers({
    getValue() {
        return this.value;
    },
});
// $ExpectType void
actuallyOptionalHelpers.helpers({
    incrementValue() {
        this.value++;
    },
});
// $ExpectType void
actuallyOptionalHelpers.helpers({
    optionalHelperValue: 3,
});
// $ExpectType void
actuallyOptionalHelpers.helpers({
    optionalHelperName: 'foo',
});
// $ExpectType void
actuallyOptionalHelpers.helpers({
    getValue() {
        return this.value;
    },
    incrementValue() {
        this.value++;
    },
    optionalHelperValue: 3,
    optionalHelperName: 'foo',
});

// as usual, only non-helper properties are required when inserting an item
const aohId = actuallyOptionalHelpers.insert({
    value: 7,
});

const aohInstance = actuallyOptionalHelpers.findOne(aohId)!;

// since they don't have to be provided, users of an item with optional helpers aren't promised those helpers will be present
let aohName: string | undefined = aohInstance.optionalHelperName;
const aohValue: number | undefined = aohInstance.optionalHelperValue;
// @ts-expect-error
aohInstance.getValue();

// asserting their existence works
// $ExpectType number
aohInstance.getValue!();
// as does control-flow analysis
if (aohInstance.getValue) {
    // $ExpectType number
    aohInstance.getValue();
}

// can still put retrieved items back into the container
actuallyOptionalHelpers.insert(aohInstance);

// unlike with Helper<T | null>, these work directly from the original interface type
const asAoh: ActuallyOptionalHelpers = aohInstance;

aohName = asAoh.optionalHelperName;
// $ExpectType number
asAoh.getValue!();
