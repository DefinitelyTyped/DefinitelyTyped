import Client from "fhir-kit-client";
import { Headers } from "request";
import { OpPatch } from "json-patch";

const client: Client = new Client({
    baseUrl: "http://foo",
    customHeaders: {
        FOO: "bar"
    }
});

client.baseUrl = "foo";
client.bearerToken = "foo";
client.customHeaders = {
    BASH: {
        BANG: "Bing"
    }
};

const url: string = client.baseUrl;
url.endsWith("foo");
const headers: Headers = client.customHeaders;
headers["foo"] = "bar";

client.create({
    resourceType: "Patient",
    body: {
        name: "foo"
    }
}).then(() => {
});

client.update({
    resourceType: "Basic",
    id: "abc122312341",
    body: {
        code: {
            text: "Offer"
        },
        identifier: [
            {
                url: "https://foo",
                value: "1235"
            }
        ]
    }
}).then((basic: fhir.Basic) => {
});

client.delete({
    resourceType: "Basic",
    id: "1235"
}).then(() => {
});

client.batch({
    body: {
        type: "batch",
        total: 1234
    }
});

client.transaction({
    body: {
        type: "transaction"
    }
});

client.resolve({
    reference: "Basic/1234",
    context: {
        abcd: 123
    }
}).then(entity => {
    if (entity.id !== undefined) {
        const id: string = entity.id;
        id.substring(1);
    }
});

client.capabilityStatement()
    .then((cs: fhir.CapabilityStatement) => {
        if (cs.software) {
            const software: fhir.CapabilityStatementSoftware = cs.software;
            const name: string = software.name;
            name.concat('');
        }
    });

client.smartAuthMetadata()
    .then((s => {
        if (s && s.authorizeUrl) {
            s.authorizeUrl.substring(1);
        }
    }));

const JSONPatch: OpPatch[] = [
    {
        op: "add",
        path: "name",
        value: "12356"
    }
];
client.patch({
    resourceType: "Patient",
    id: "12354",
    JSONPatch
}).then(results => {
    if (results && results.id) {
        return results.id.substring(1);
    }
});

client.search({
    resourceType: "Doctor",
}).then(doctor => {
    const value: string = doctor.id || "";
    value.substring(1);
});

client.compartmentSearch({
    resourceType: "Doctor",
    compartment: {
        resourceType: "Patient",
        id: "12345"
    }
}).then(() => {
});

client.resourceSearch({
    resourceType: "Doctor",
    searchParams: {
        foo: "bar"
    }
});

client.systemSearch({
    searchParams: {
        identifier: "12356"
    }
});

client.systemHistory()
    .then(history => {
        if (history) {
            const type: string = history.type;
            type.split('[');
        }
    });

client.history()
    .then(history => {
        if (history && history.resourceType) {
            history.resourceType.substring(1);
        }
    });

client.typeHistory({
    resourceType: "Hospital"
}).then(history => {
    if (history && history.total !== undefined) {
        const total: number = history.total + 1;
        console.log(`${total}`);
    }
});

client.resourceHistory({
    resourceType: "Medication",
    id: "123"
}).then(() => {
});

client.prevPage({
    bundle: {
        type: "searchset"
    }
}).then(() => {
});

client.nextPage({
    bundle: {
        type: "searchset"
    }
}).then(() => {
});
