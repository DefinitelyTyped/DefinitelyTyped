import { Mongo } from 'meteor/mongo';
import { Helper, Data, Full } from 'meteor/dburles:collection-helpers';

interface Author {
    _id?: string;
    firstName: string;
    lastName: string;
    // function properties are automatically detected as helpers; no need to specify
    fullName: () => string;
    books: () => Mongo.Cursor<Book>;
}

interface Book {
    _id?: string;
    authorId: string;
    name: string;
    author: () => Author | undefined;
    // use Helper<T> to declare non-function helpers
    foo: Helper<string>;
}

const Books = new Mongo.Collection<Book>('books');
const Authors = new Mongo.Collection<Author>('authors');

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
// $ExpectError
Books.helpers({
    author() {
        return Authors.findOne(this.authorId);
    },
});

Authors.helpers({
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
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
    increment?: () => void;
    zero?: Helper<number>;
}

const optionalHelpers = new Mongo.Collection<OptionalHelpers>('optionalHelpers');
// optional helpers still have to be provided when calling helpers
// $ExpectError
optionalHelpers.helpers({});
// $ExpectError
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
// $ExpectError
foundOptionalHelpers1.increment();

// you can do this, but it's kinda ugly imo
const foundOptionalHelpers1Full: Full<OptionalHelpers> = optionalHelpers.findOne(optionalHelper1)!;
// $ExpectType void
foundOptionalHelpers1Full.increment();

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
    factorial?: (arg: number) => number;
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
