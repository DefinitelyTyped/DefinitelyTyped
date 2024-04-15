import { Consent, Country, Options, Service, ServiceDefinition, ServiceOptions, ServiceResponse } from "cookieconsent";

{
    const country: Country = {
        hasLaw: true,
        revokable: true,
        explicitAction: true,
    };
}

{
    const resp1: ServiceResponse = { code: "foo" };
    const resp2: ServiceResponse = new Error("foo");
}

{
    const serviceOptions1: ServiceOptions = {
        name: "foo",
    };

    const serviceOptions2: ServiceOptions = {
        name: "foo",
        interpolateUrl: {
            key: "value",
        },
    };

    const serviceOptions3: ServiceOptions = {
        name: "foo",
        interpolateUrl: {
            key: "value",
        },
        arg1: "bar",
        arg2: { buzz: "bazz" },
    };
}

{
    const service1: Service = { name: "foo" };
    const service2: Service = "foo";
    const options: ServiceOptions = { name: "foo" };
    const service3: Service = () => options;
}

{
    const ServiceDefinition1: ServiceDefinition = (options: ServiceOptions) => ({
        url: "foo",
        callback(done, resp) {
            return { code: "us" };
        },
    });

    const ServiceDefinition2: ServiceDefinition = (options: ServiceOptions) => ({
        url: "foo",
        headers: ["Accept: application/json"],
        callback(done, resp) {
            return { code: "us" };
        },
    });
}

{
    const options1: Options = {};

    const options2: Options = {
        content: {},
        elements: {},
        palette: {},
        law: {},
        location: {},
    };

    const options3: Options = {
        palette: {
            popup: {
                background: "red",
                text: "white",
                link: "blue",
            },
            button: {
                background: "red",
                border: "white",
                text: "blue",
            },
            highlight: {
                background: "red",
                border: "white",
                text: "blue",
            },
        },
    };
}

declare var mockConsent: Consent;

{
    mockConsent.initialise({});
    mockConsent.initialise({}, () => {});
    mockConsent.initialise(
        {},
        () => {},
        () => {},
    );

    mockConsent.getCountryCode(
        {},
        () => {},
        () => {},
    );
}
