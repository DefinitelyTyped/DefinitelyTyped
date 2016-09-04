/// <reference path="karma-jasmine.d.ts" />

fdescribe("A suite", () => {
    fit("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });
});
