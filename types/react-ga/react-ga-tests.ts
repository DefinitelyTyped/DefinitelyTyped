import * as ga from "react-ga";

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

describe("Testing react-ga initialize object", () => {
    it("Able to initialize react-ga object", () => {
        ga.initialize("UA-65432-1");
    });
    it("Able to initailize react-ga object", () => {
        const options: ga.InitializeOptions = {
            debug: true,
        };

        ga.initialize("UA-65432-1", options);
    });
});

describe("Testing react-ga pageview calls", () => {
    it("Able to make pageview calls", () => {
        ga.initialize("UA-65432-1");
        ga.pageview("http://telshin.com");
    });
});

describe("Testing react-ga modal calls", () => {
    it("Able to make modal calls", () => {
        ga.initialize("UA-65432-1");

        ga.modalview("Test modal");
    });
});

describe("Testing react-ga event calls", () => {
    it("Able to make event calls", () => {
        ga.initialize("UA-65432-1");

        const options: ga.EventArgs = {
            category: "Test",
            action: "CI",
            label: "Running Jasmine tests for react-ga typscript library",
            value: 4,
            nonInteraction: true,
        };

        ga.event(options);
    });
});

describe("Testing react-ga set calls", () => {
    it("Able to make set calls", () => {
        ga.initialize("UA-65432-1");

        const fieldObject: ga.FieldsObject = {
            page: '/users'
        };

        ga.set(fieldObject);
    });
});

describe("Testing react-ga v2.1.2", () => {
    it("Able to make ga calls", () => {
        ga.ga();
    });
    it("Able to make send calls", () => {
        let fieldObject: ga.FieldsObject = {
            page: '/users'
        };

        ga.send(fieldObject);
    });
    it("Able to make timing calls", () => {
        ga.timing({
            category: 'string',
            variable: 'string',
            value: 1,
            label: 'string'
        });
    });
    it("Able to make exception calls", () => {
        let fieldObject: ga.FieldsObject = {
            page: '/users'
        };
        ga.exception(fieldObject);
    });
    it("Able to make plugin object calls", () => {
        const execute = ga.plugin.execute;
        const require = ga.plugin.require;
        const payload = {};

        execute('name', 'action', payload);
        execute('name', 'action', 'type', payload);
        require('name', {});
    });
    it("Able to make outboundLink calls", () => {
        ga.outboundLink({label: 'string'}, () => {});
    });
});
