/// <reference path="react-ga.d.ts" />
/// <reference path="../jasmine/jasmine.d.ts" />

describe("Testing react-ga initialize object", () => {
    it("Able to initialize react-ga object", () => {
        let ga = __reactGA;
        ga.initialize("UA-65432-1");
    });
    it("Able to initailize react-ga object", () => {
        let ga = __reactGA;

        let options: __reactGA.InitializeOptions = {
            debug: true,
        }

        ga.initialize("UA-65432-1", options);
    });
});

describe("Testing react-ga pageview calls", () => {
    it("Able to make pageview calls", () => {
        let ga = __reactGA;
        ga.initialize("UA-65432-1");

        ga.pageview("http://telshin.com");
    });
});

describe("Testing react-ga modal calls", () => {
    it("Able to make modal calls", () => {
        let ga = __reactGA;
        ga.initialize("UA-65432-1");

        ga.modalview("Test modal");
    });
});

describe("Testing react-ga event calls", () => {
    it("Able to make event calls", () => {
        let ga = __reactGA;
        ga.initialize("UA-65432-1");

        let options: __reactGA.EventArgs = {
            category: "Test",
            action: "CI",
            label: "Running Jasmine tests for react-ga typscript library",
            value: 4,
            nonInteraction: true,
        }

        ga.event(options);
    });
});

describe("Testing react-ga set calls", () => {
    it("Able to make set calls", () => {
        let ga = __reactGA;
        ga.initialize("UA-65432-1");

        let fieldObject: __reactGA.FieldsObject = {
            page: '/users'
        };

        ga.set(fieldObject);
    });
});
