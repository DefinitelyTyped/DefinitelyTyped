import * as R from 'ramda';

() => {
    interface Book {
        id: number;
        name: string;
        price: number;
    }

    const getBookPrice = (book: Book): number => book.price;

    // $ExpectType (a: Book, b: Book) => Ordering
    const comparatorBookPrice = R.ascend(getBookPrice);

    const book1 = { id: 1, name: 'Hello, Typescript', price: 42 };
    const book2 = { id: 2, name: 'Deep in Haskell', price: 96 };

    // $ExpectType Ordering
    comparatorBookPrice(book1, book2); // => LT
    // $ExpectType Ordering
    comparatorBookPrice(book2, book1); // => GT
    // $ExpectType Ordering
    comparatorBookPrice(book1, book1); // => EQ
};
