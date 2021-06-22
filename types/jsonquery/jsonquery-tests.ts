import jsonquery = require('jsonquery');

interface TestData {
    name: string;
    number: string;
    val: number;
    favorites: number[];
    awesome: boolean;
    nullify: null;
    tree: {
        a: number;
        b: number;
    };
}

const testDataInstance: TestData = {
    name: "Name 1",
    number: "Number 1",
    val: 10,
    favorites: [10, 20],
    awesome: true,
    nullify: null,
    tree: {
        a: 1,
        b: 2,
    }
};

// $ExpectType ReadWriteStream
jsonquery<TestData>({ number: 'Number 7' });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ number: 'Number 7', val: 70 });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ $or:  [ { number: 'Number 7' }, { val: 50 } ] });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ $and:  [ { number: 'Number 7' }, { val: 70 } ] });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ $or:  [ { $and: [ { number: 'Number 7' }, { val: 70 } ] }, { val: 50 } ] });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $in: [ 70, 50 ] } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $or: [ { $in: [ 70, 50 ] }, { $in: [ 60, 20 ] } ] } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $gt: 900 } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $lt: 900 } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $or: [ { $lt: 20 }, { $gt: 950 } ] } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $and: [ { $gt: 970 }, { $gt: 950 } ] } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $ne: 900 } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $lte: 900 } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $gte: 900 } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ favorites: { $all: [50, 60] } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ tree: { $elemMatch: { a: 1, b: 2 } } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ 'tree.a': 1 });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ 'tree.a': { $in: [1, 5] } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ number: /er 7$/ });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ number: { $in: [ /er 7$/, /er 5$/ ] } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ favorites: { $all: [/^50$/, /^60$/] } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ tree: { $elemMatch: { a: /^1$/, b: 2 } } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $nin: [ 70, 50 ] } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ val: { $mod: [ 7, 1 ] } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ favorites: { $size: 2 } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ $and: [ { tree: { $exists: true } }, { missing: { $exists: false } } ] });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ $not: { number: 'Number 7', val: 70 } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ number: { $not: { $nin: ['Number 7'] } } });

// $ExpectType ReadWriteStream
jsonquery<TestData>({ foo: { $all: ['bar'] } });

// $ExpectType boolean
jsonquery.match<TestData>(testDataInstance, { val: 7 });

// $ExpectType boolean
jsonquery.match<TestData>(testDataInstance, { 'tree.a': { $in: [1, 5] } });
