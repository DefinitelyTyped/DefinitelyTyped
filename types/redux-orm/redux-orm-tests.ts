import {
    attr,
    createSelector as createOrmSelector,
    fk,
    IdKey,
    IdType,
    many,
    Model,
    ModelType,
    MutableQuerySet,
    ORM,
    OrmState,
    QuerySet,
    Ref
} from 'redux-orm';

interface CreateBookAction {
    type: 'CREATE_BOOK';
    payload: { coverArt?: string; title: string; publisher: number; authors?: string[] };
}

interface DeleteBookAction {
    type: 'DELETE_BOOK';
    payload: { title: string };
}

type RootAction = CreateBookAction | DeleteBookAction;

interface BookFields {
    title: string;
    coverArt: string;
    publisher: Publisher;
    authors: MutableQuerySet<Person>;
}

class Book extends Model<typeof Book, BookFields> {
    static modelName = 'Book' as const;
    static fields = {
        title: attr(),
        coverArt: attr({ getDefault: () => 'empty.png' }),
        publisher: fk('Publisher', 'books'),
        authors: many({ to: 'Person', relatedName: 'books', through: 'Authorship' })
    };
    static options = {
        idAttribute: 'title' as const
    };

    static reducer(action: RootAction, Book: ModelType<Book>) {
        switch (action.type) {
            case 'CREATE_BOOK':
                Book.create(action.payload);
                break;
            case 'DELETE_BOOK':
                Book.filter(book => book.title === action.payload.title).delete();
                break;
            default:
                break;
        }
    }
}

interface PersonFields {
    id: string;
    firstName: string;
    lastName: string;
    nationality?: string;
    books: MutableQuerySet<Book>;
}

class Person extends Model<typeof Person, PersonFields> {
    static modelName = 'Person' as const;
    static fields = {
        id: attr(),
        firstName: attr(),
        lastName: attr(),
        nationality: attr()
    };
}

interface AuthorshipFields {
    year?: number;
    book: Book;
    author: Person;
}

class Authorship extends Model<typeof Authorship, AuthorshipFields> {
    static modelName = 'Authorship' as const;
    static fields = {
        year: attr(),
        book: fk('Book'),
        author: fk('Person')
    };
}

interface PublisherFields {
    index: number;
    name: string;
    books?: QuerySet<Book>;
}

class Publisher extends Model<typeof Publisher, PublisherFields> {
    static modelName = 'Publisher' as const;
    static fields = {
        index: attr(),
        name: attr()
    };
    static options = {
        idAttribute: 'index' as const
    };
}

const schema = { Book, Authorship, Person, Publisher };

type Schema = typeof schema;

// create ORM instance and register { Book, Publisher, Person, Authorship } schema
const ormFixture = () => {
    interface RootState {
        db: OrmState<Schema>;
    }

    const orm = new ORM<Schema>({
        stateSelector: (state: RootState) => state.db,
    });
    orm.register(Book, Authorship, Person, Publisher);
    return orm;
};

// create ORM instance and acquire new session
const sessionFixture = () => {
    const orm = ormFixture();
    return orm.session(orm.getEmptyState());
};

// argOptionalityAtModelCreation - inferred optionality of ModelType.create argument properties
(() => {
    const { Book, Publisher } = sessionFixture();

    /**
     * 1.A. `number` Model identifiers are optional due to built-in incremental sequencing of numeric identifiers
     * @see {@link PublisherFields.index}
     */
    Publisher.create({ name: 'P1' });

    /**
     * 1.B. `string` identifiers are mandatory
     */
    // @ts-expect-error
    Book.create({ publisher: 1, coverArt: 'foo.bmp' });

    /**
     * 2. non-relational fields with corresponding descriptors that contain defined `getDefault` callback: (`attr({ getDefault: () => 'empty.png' })`)
     * @see {@link Book#fields.coverArt}
     */
    Book.create({ title: 'B2', publisher: 1 });

    /**
     * 3. both attribute and relational fields where corresponding ModelFields interface property has optional (`?`) modifier
     * @see {@link BookFields.authors}
     */
    Book.create({ title: 'B1', publisher: 1, coverArt: 'foo.bmp' });
})();

// argPropertyTypeRestrictionsOnCreate - ModelFields contribute to type constraints within ModelType.create arguments
(() => {
    const { Book, Publisher, Person } = sessionFixture();

    /** Keys of declared model fields interface contribute strict requirements regarding corresponding property types */
    Book.create({ title: 'B1', publisher: 1, coverArt: 'foo.png', authors: ['A1'] });

    /* Incompatible property types: */
    // @ts-expect-error
    Book.create({ title: 1, publisher: 1 });
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: 'P1' });
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: 1, coverArt: 4 });
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: 1, authors: {} });
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: 1, authors: () => null });

    /**
     * Properties associated to relational fields may be supplied with:
     *
     * - a primitive type matching id type of relation target
     * - Model/SessionBoundModel instance matching relation target
     *
     * In case of MutableQuerySets/many-to-many relationships, an array of union of above-mentioned types is accepted
     */
    const authorModel = Person.create({ id: 'A1', firstName: 'A1', lastName: 'A1' });
    const publisherModel = Publisher.create({ name: 'P1' });
    Book.create({ title: 'B1', publisher: publisherModel, authors: [authorModel] });
    Book.create({
        title: 'B1',
        publisher: publisherModel.index,
        authors: [authorModel, 'A1', authorModel, authorModel.ref.id]
    });

    /** Id types are verified to match relation target */
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: authorModel });
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: publisherModel.ref, authors: [publisherModel.ref, 'A1'] });
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: { index: 'P1 ' } });
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: { index: 0 }, authors: [authorModel, true] });
})();

// argPropertyTypeRestrictionsOnUpsert - ModelFields contribute to type constraints within ModelType.create arguments
(() => {
    const { Book, Publisher, Person } = sessionFixture();

    /** Upsert requires id to be provided */
    // @ts-expect-error
    Book.upsert({ publisher: 1 });

    // $ExpectType SessionBoundModel<Book, Pick<{ title: string; publisher: number; }, never>> || SessionBoundModel<Book, CustomInstanceProps<Book, { title: string; publisher: number; }>>
    Book.upsert({ title: 'B1', publisher: 1 });

    /* Incompatible property types: */
    // @ts-expect-error
    Book.upsert({ title: 4, publisher: 'P1' });
    // @ts-expect-error
    Book.upsert({ title: 'B1', publisher: 'P1' });
    // @ts-expect-error
    Book.upsert({ title: 'B1', publisher: 1, coverArt: 4 });
    // @ts-expect-error
    Book.upsert({ title: 'B1', publisher: 1, authors: {} });
    // @ts-expect-error
    Book.upsert({ title: 'B1', publisher: 1, authors: () => null });

    /**
     * Properties associated to relational fields may be supplied with:
     *
     * - a primitive type matching id type of relation target
     * - a Ref type derived from relation target
     * - Model/SessionBoundModel instance matching relation target
     * - a map containing {Idkey:IdType} entry, where IdKey/IdType are compatible with relation target id key:type signature
     *
     * In case of MutableQuerySets/many-to-many relationships, an array of union of above-mentioned types is accepted
     */
    const authorModel = Person.upsert({ id: 'A1', firstName: 'A1', lastName: 'A1' });
    const publisherModel = Publisher.upsert({ name: 'P1', index: 1 });
    Book.upsert({ title: 'B1', publisher: 1, authors: [authorModel] });
    Book.upsert({ title: 'B1', publisher: publisherModel, authors: [authorModel] });

    /** Id types are verified to match relation target */
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: authorModel });
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: publisherModel.ref, authors: [publisherModel.ref, 'A1'] });
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: { index: 'P1 ' } });
    // @ts-expect-error
    Book.create({ title: 'B1', publisher: { index: 0 }, authors: [authorModel, true] });
})();

// restriction of allowed ORM.register args
(() => {
    const incompleteSchema = { Book, Authorship, Person };
    const orm = new ORM<typeof incompleteSchema>();
    // @ts-expect-error
    orm.register(Book, Authorship, Person, Publisher);
})();

// inference of ORM branch state type
(() => {
    const emptyState = ormFixture().getEmptyState();

    const bookTableState = emptyState.Book; // $ExpectType TableState<typeof Book>
    const bookItemsById = emptyState.Book.itemsById; // $ExpectType { readonly [K: string]: Ref<Book>; }
    const authorshipMetaState = emptyState.Authorship.meta.maxId; // $ExpectType number
    const bookMetaState = emptyState.Book.meta.maxId; // $ExpectType number | null
})();

// sessionInstanceExtendedWithNarrowedModelClasses - indexing session instance using registered Model.modelName returns narrowed Model class
(() => {
    const { Book, Person, Publisher } = sessionFixture();

    // $ExpectType { Book: ModelType<Book>; Person: ModelType<Person>; Publisher: ModelType<Publisher>; }
    const sessionBoundModels = { Book, Person, Publisher };
    return { ...sessionBoundModels };
})();

// IdKey and IdType mapped types support for valid identifier configurations
(() => {
    type ExtractId<M extends Model> = [IdKey<M>, IdType<M>];

    type ImplicitDefault = ExtractId<Authorship>; // $ExpectType ["id", number] || ExtractId<Authorship> || ImplicitDefault
    type CustomKey = ExtractId<Publisher>; // $ExpectType ["index", number] || ExtractId<Publisher> || CustomKey
    type CustomType = ExtractId<Person>; // $ExpectType ["id", string] || ExtractId<Person> || CustomType
    type CustomKeyAndType = ExtractId<Book>; // $ExpectType ["title", string] || ExtractId<Book> || CustomKeyAndType
})();

// Model#create result retains custom properties supplied during call
(() => {
    const { Book } = sessionFixture();

    const basicBook = Book.create({ title: 'book', publisher: 1 });

    type basicBookKeys = Exclude<keyof typeof basicBook, keyof Model>; // $ExpectType "title" | "coverArt" | "publisher" | "authors" || keyof BookFields
    const basicBookTitle = basicBook.title; // $ExpectType string
    const authors = basicBook.authors; // $ExpectType MutableQuerySet<Person, {}>
    // @ts-expect-error
    const unknownPropertyError = basicBook.customProp;

    const customProp = { foo: 0, bar: true };

    const extendedBook = Book.create({
        title: 'extendedBook',
        publisher: 1,
        customProp
    });

    type customBookKeys = Exclude<keyof typeof extendedBook, keyof Model>; // $ExpectType "title" | "coverArt" | "publisher" | "authors" | "customProp" || keyof BookFields | "customProp"
    const extendedBookTitle = extendedBook.title; // $ExpectType string
    const instanceCustomProp = extendedBook.customProp; // $ExpectType { foo: number; bar: boolean; }
})();

// reducer API is intact
(() => {
    const orm = ormFixture();

    type StateType = OrmState<Schema>;

    return (state: StateType, action: CreateBookAction): StateType => {
        const session = orm.session(state);
        session.Book.create(action.payload);
        return session.state;
    };
})();

// QuerySet type is retained though query chain until terminated.
// Orders are optional, must conform to SortOrder type when present.
// QuerySet.orderBy overloads accept iteratees applicable to QuerySet's type only
// orderByArguments
(() => {
    const { Book } = sessionFixture();
    const booksQuerySet = Book.all();

    // $ExpectType readonly Ref<Book>[]
    booksQuerySet
        .orderBy('title')
        .orderBy(book => book.publisher, 'desc')
        .orderBy(book => book.title, false)
        .orderBy('publisher', 'asc')
        .orderBy('publisher', true)
        .toRefArray();

    // $ExpectType readonly Ref<Book>[]
    booksQuerySet
        .orderBy(['title'], ['asc'])
        .orderBy(['publisher', 'title'], [true, 'desc'])
        .orderBy([book => book.title], ['desc'])
        .orderBy(['title'])
        .orderBy([book => book.title, 'publisher'], ['desc', false])
        .toRefArray();

    // @ts-expect-error
    booksQuerySet.orderBy('notABookPropertyKey');
    // @ts-expect-error
    booksQuerySet.orderBy([book => book.notABookPropertyKey], false);
    // @ts-expect-error
    booksQuerySet.orderBy('title', 'inc');
    // @ts-expect-error
    booksQuerySet.orderBy('title', 4);
    // @ts-expect-error
    booksQuerySet.orderBy(['notABookPropertyKey']);
    // @ts-expect-error
    booksQuerySet.orderBy([book => book.notABookPropertyKey]);
    // @ts-expect-error
    booksQuerySet.orderBy(['title'], ['inc']);
    // @ts-expect-error
    booksQuerySet.orderBy(['title'], [4]);
})();

// selectors
(() => {
    // test fixture, use reselect.createSelector in production code
    const createSelector = <S, OS extends OrmState<any>, Result extends any>(
        param1Creator: (state: S) => OS,
        combiner: (param1: OS) => Result
    ): ((state: S) => Result) => state => combiner(param1Creator(state));

    const orm = ormFixture();

    const ormSelector = createOrmSelector(orm, session => session.Book.all().toRefArray()[0]);

    interface RootState {
        db: OrmState<Schema>;
    }

    const selector = createSelector<RootState, OrmState<Schema>, Ref<Book>>(
        ({ db }) => db,
        ormSelector
    );

    createSelector<RootState, OrmState<Schema>, Ref<Person>>(
        ({ db }) => db,
        // @ts-expect-error
        ormSelector
    );

    selector({ db: orm.getEmptyState() }); // $ExpectType Ref<Book>
})();

// advanced selectors
(() => {
    const orm = ormFixture();

    interface RootState {
        foo: number;
        bar: string;
        db: OrmState<Schema>;
    }

    type TestSelector = (state: RootState) => Ref<Book>;

    const selector0 = createOrmSelector(orm, s => s.db, session => session.Book.first()!.ref) as TestSelector;

    const selector1 = createOrmSelector(
        orm,
        s => s.db,
        s => s.bar,
        (session, title) => session.Book.get({ title })!.ref
    ) as TestSelector;

    const selector2 = createOrmSelector(
        orm,
        s => s.db,
        s => s.foo,
        s => s.bar,
        (session, id, title) => session.Book.get({ id, title })!.ref
    ) as TestSelector;

    const selector3 = createOrmSelector(
        orm,
        s => s.db,
        s => s.foo,
        s => s.bar,
        s => s.foo,
        (session, id, title, id2) => session.Book.get({ id, title, id2 })!.ref
    ) as TestSelector;

    const selector4 = createOrmSelector(
        orm,
        s => s.db,
        s => s.foo,
        s => s.bar,
        s => s.foo,
        s => s.bar,
        (session, id, title, id2, title2) => session.Book.get({ id, title, id2, title2 })!.ref
    ) as TestSelector;

    const selector5 = createOrmSelector(
        orm,
        s => s.db,
        s => s.foo,
        s => s.bar,
        s => s.foo,
        s => s.bar,
        s => s.foo,
        (session, ...args) => session.Book.get({ title: args[1] })!.ref
    ) as TestSelector;

    const selector6 = createOrmSelector(
        orm,
        s => s.db,
        s => s.foo,
        s => s.bar,
        s => s.foo,
        s => s.bar,
        s => s.foo,
        s => s.bar,
        (session, id, title) => session.Book.get({ title })!.ref
    ) as TestSelector;

    const invalidSelector = createOrmSelector(
        orm,
        s => s.db,
        s => s.foo,
        // @ts-expect-error
        (session, foo, missingArg) => foo
    ) as (state: RootState) => number;

    const invalidSelector2: TestSelector = createOrmSelector(
        orm,
        s => s.db,
        s => s.foo,
        // @ts-expect-error
        (session, foo) => session.Book.withId(foo)!.ref
    );

    const state = { db: orm.getEmptyState(), foo: 1, bar: 'foo' };

    selector0(state); // $ExpectType Ref<Book>
    selector1(state); // $ExpectType Ref<Book>
    selector2(state); // $ExpectType Ref<Book>
    selector3(state); // $ExpectType Ref<Book>
    selector4(state); // $ExpectType Ref<Book>
    selector5(state); // $ExpectType Ref<Book>
    selector6(state); // $ExpectType Ref<Book>
})();

// redux-orm-types#7
(() => {
    const { Book } = sessionFixture();

    Book.exists({ title: 'foo' });
    Book.all().exists();

    // @ts-expect-error
    Book.exists();
    // @ts-expect-error
    Book.exists('foo');
    // @ts-expect-error
    Book.all().exists({});
})();

// redux-orm-types#8
(() => {
    const { Book } = sessionFixture();

    Book.all().toModelArray();
    Book.all().toRefArray();
    // @ts-expect-error
    Book.toModelArray();
    // @ts-expect-error
    Book.toRefArray();
})();

// redux-orm-types#9
(() => {
    const { Book, Person, Publisher } = sessionFixture();

    const author = Person.create({ id: '1', firstName: 'foo', lastName: 'bar', nationality: 'pl' });
    const publisher = Publisher.create({ name: 'foo' });
    Book.create({ title: 'foo', publisher: 1 });
    Book.create({ title: 'foo', publisher: 1, coverArt: 'bar' });
    Book.create({ title: 'foo', publisher, coverArt: 'bar', authors: ['foo', author] });

    // @ts-expect-error
    Book.create({ title: 'foo', publisher: author });
    // @ts-expect-error
    Book.create({ title: 'foo', publisher: 'error' });
    // @ts-expect-error
    Book.create({ title: 'foo', publisher, coverArt: 'bar', authors: [3, author] });
})();

// redux-orm-types#18
(() => many({ to: 'Bar', relatedName: 'foos', through: 'FooBar', throughFields: ['foo', 'bar'] }))();
