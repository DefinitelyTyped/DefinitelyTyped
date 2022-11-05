import * as R from 'ramda';

() => {
    interface Book {
        id: string;
        title: string;
    }
    const list: Book[] = [
        { id: 'xyz', title: 'A' },
        { id: 'abc', title: 'B' },
    ];
    const a1 = R.indexBy(R.prop('id'), list);
    const a2 = R.indexBy(R.prop('id'))(list);
    const a3 = R.indexBy<{ id: string }>(R.prop('id'))(list);
    const a4 = R.indexBy(R.prop<'id', string>('id'))(list);
    const a5 = R.indexBy<{ id: string }>(R.prop<'id', string>('id'))(list);
    const a6 = R.indexBy(R.prop<'id', { id: string }>('id'))(list);
};

() => {
    type Id = 'xyz' | 'abc';
    interface Book {
        id: Id;
        title: string;
    }
    const list: Book[] = [
        { id: 'xyz', title: 'A' },
        { id: 'abc', title: 'B' },
    ];

    const a1 = R.indexBy(R.prop('id'), list);

    // prop should exist
    a1.abc = list[0];
    a1.xyz = list[0];
    const b1: Book = a1.abc;

    // test with @ts-expect-error can work only for TS >= 3.9

    // show not allow other keys
    // // @ts-expect-error
    // a1.ABC = list[0];

    // Typescript 3.3 incorrectly gives `a2: {}`, 3.4 gives an error instead.
    // const a2 = R.indexBy(R.prop("id"))(list);
    const a3 = R.indexBy<Book, Id | undefined>(R.prop('id'))(list);

    // prop should be not required (can be undefined)
    // // @ts-expect-error
    // const b3: Book = a3.abc;

    const a4 = R.indexBy<Book, Id>(R.prop<'id', Id | undefined>('id'))(list);

    // prop should be not required (can be undefined)
    // // @ts-expect-error
    // const b4: Book = a4.abc;

    const a5 = R.indexBy<Book, Id>(R.prop<'id', Id>('id'))(list);
};
