import { expect, settings, fail, count, incomplete, thrownAt } from "code";

expect(10).to.be.above(5);
expect("abc").to.be.a.string();
expect([1, 2]).to.be.an.array();
expect(20).to.be.at.least(20);
expect("abc").to.have.length(3);
expect("abc").to.be.a.string().and.contain(["a", "b"]);
expect(6).to.be.in.range(5, 6);

expect(10).to.not.be.above(20);
expect([1, 2, 3]).to.shallow.include(3);
expect([1, 1, 2]).to.only.include([1, 2]);
expect([1, 2]).to.once.include([1, 2]);
expect([1, 2, 3]).to.part.include([1, 4]);

expect(10, "Age").to.be.above(5);

const func = function() { return arguments; }; // tslint:disable-line only-arrow-functions
expect(func()).to.be.arguments();

expect([1, 2]).to.be.an.array();

expect(true).to.be.a.boolean();

expect(new Date()).to.be.a.date();

const err = new Error("Oops an error occured.");
expect(err).to.be.an.error();
expect(err).to.be.an.error(Error);
expect(err).to.be.an.error("Oops an error occured.");
expect(err).to.be.an.error(Error, /occured/);

expect(func).to.be.a.function();

expect(123).to.be.a.number();

expect(/abc/).to.be.a.regexp();

expect("abc").to.be.a.string();

expect({ a: "1" }).to.be.an.object();

expect(true).to.be.true();

expect(false).to.be.false();

expect(null).to.be.null();

expect(undefined).to.be.undefined();

expect("abc").to.include("ab");
expect("abc").to.only.include("abc");
expect("aaa").to.only.include("a");
expect("abc").to.once.include("b");
expect("abc").to.include(["a", "c"]);
expect("abc").to.part.include(["a", "d"]);

expect([1, 2, 3]).to.include(1);
expect([{ a: 1 }]).to.include({ a: 1 });
expect([1, 2, 3]).to.include([1, 2]);
expect([{ a: 1 }]).to.include([{ a: 1 }]);
expect([1, 1, 2]).to.only.include([1, 2]);
expect([1, 2]).to.once.include([1, 2]);
expect([1, 2, 3]).to.part.include([1, 4]);
expect([[1], [2]]).to.include([[1]]);

interface TestType {
    a: number;
    b?: number;
    c?: number;
    d?: number;
}

interface TestType2 {
    a: number[];
    b?: number[];
    c: number[];
}

expect({ a: 1, b: 2, c: 3 }).to.include("a");
expect({ a: 1, b: 2, c: 3 }).to.include(["a", "c"]);
expect({ a: 1, b: 2, c: 3 }).to.only.include(["a", "b", "c"]);
expect<TestType>({ a: 1, b: 2, c: 3 }).to.include({ a: 1 });
expect<any>({ a: 1, b: 2, c: 3 }).to.include({ a: 1 });
expect<TestType>({ a: 1, b: 2, c: 3 }).to.include({ a: 1, c: 3 });
expect<TestType>({ a: 1, b: 2, c: 3 }).to.part.include({ a: 1, d: 4 });
expect<any>({ a: 1, b: 2, c: 3 }).to.part.include({ a: 1, d: 4 });
expect({ a: 1, b: 2, c: 3 }).to.only.include({ a: 1, b: 2, c: 3 });
expect<TestType2>({ a: [1], b: [2], c: [3] }).to.include({ a: [1], c: [3] });
expect<any>({ a: [1], b: [2], c: [3] }).to.include({ a: [1], c: [3] });

expect("https://example.org/secure").to.startWith("https://");

expect("http://example.org/relative").to.endWith("/relative");

expect(4).to.exist();
expect(null).to.not.exist();

expect("abc").to.be.empty();

expect("abcd").to.have.length(4);

expect(5).to.equal(5);
expect({ a: 1 }).to.equal({ a: 1 });
expect([1, 2, 3]).to.equal([1, 2, 3]);

expect(Object.create(null)).to.equal({}, { prototype: false });

expect(5).to.shallow.equal(5);
expect({ a: 1 }).to.shallow.equal({ a: 1 });

expect(10).to.be.above(5);

expect(10).to.be.at.least(10);

expect(10).to.be.below(20);

expect(10).to.be.at.most(10);

expect(10).to.be.within(10, 20);
expect(20).to.be.within(10, 20);

expect(15).to.be.between(10, 20);

expect(10).to.be.about(9, 1);

expect(new Date()).to.be.an.instanceof(Date);

expect("a5").to.match(/\w\d/);
expect(["abc", "def"]).to.match(/^[\w\d,]*$/);
expect(1).to.match(/^\d$/);

expect("x").to.satisfy(value => value === "x");

class CustomError extends Error {
    call: (message: string) => Error;
}

const throws = () => {
    throw new CustomError("Oh no!");
};

expect(throws).to.throw(CustomError, "Oh no!");

fail("This should not occur");

expect(count()).to.be.a.number();

expect(incomplete() as null).to.be.null().and.not.be.an.array();

const error = thrownAt(new Error("oops"));
expect(error).to.not.be.undefined();
expect(error.column).to.exist();

const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
settings.truncateMessages = false;
expect<number[]>(foo).to.equal([]);

const bar = Object.create(null);
settings.comparePrototypes = false;
expect(bar).to.equal({});

const rejection = Promise.reject(new Error('Oh no!'));
/* await */ expect(rejection).to.reject('Oh no!');
/* await */  expect(rejection).rejects('Oh no!');

const typedRejection = Promise.reject(new CustomError('Oh no!'));
/* await */  expect(typedRejection).to.reject(CustomError, 'Oh no!');
/* await */  expect(typedRejection).rejects(CustomError, 'Oh no!');
