/// <reference path="q.module.d.ts" />
/// <reference path="../jasmine/jasmine.d.ts" />

import q = module("q");

describe("q", function () {
    it("should return", function (done) {
        q({ myValue: true }).then(function (obj) {
            
            if (obj.myValue) done();
            else done("didn't work =(");
        },
        (err) => done(err));
    });

    it("should process all", function (done: (err?) => void) {
        q.all([q(1), q(2), q(3)]).then(function (arr: number[]) {
            var sum = arr.reduce(function (memo, cur) {
                return memo + cur;
            }, 0);

            if (sum === 6) done();
            else done({ actual: sum });
        },
        (err) => done(err));
    });
});