import Client from "fhir-kit-client";
import { Headers } from "request";
import { OpPatch } from "json-patch";

import fhir4 from "fhir/r4";
import fhir = fhir4;

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

function isPatient(resource: fhir.Resource): resource is fhir.Patient {
    return resource.resourceType === 'Patient';
}

export class OperationOutcomeError extends Error {
    readonly outcome: fhir.OperationOutcome;

    constructor(outcome: fhir.OperationOutcome) {
        super(outcome.issue && outcome.issue.length > 1 && outcome.issue[0].diagnostics || "Unknown Operation result error");
        this.outcome = outcome;
    }
}

function rejectOnOperationOutcome<ResultType extends fhir.Resource>(promise: fhir.OperationOutcome | ResultType | Promise<fhir.OperationOutcome | ResultType>): Promise<ResultType> {
    if (promise instanceof Promise) {
        return promise.then(result => {
            if ('issue' in result) {
                throw new OperationOutcomeError(result);
            } else {
                return result;
            }
        });
    } else if ('issue' in promise) {
        throw new OperationOutcomeError(promise);
    } else {
        return Promise.resolve(promise);
    }
}

const url: string = client.baseUrl;
url.endsWith("foo");
const headers: Headers = client.customHeaders;
headers["foo"] = "bar";

client.create({
    resourceType: "Patient",
    body: {
        resourceType: "Patient",
        name: [{
            text: "Jim Bean"
        }]
    }
}).then(rejectOnOperationOutcome).then((p: fhir.Patient) => {
    if (p.name && p.name.length !== 0 && p.name[0].text) {
        console.log(p.name[0].text);
    }
});

client.update({
    resourceType: "Basic",
    id: "abc122312341",
    body: {
        resourceType: "Basic",
        code: {
            text: "Offer"
        },
        identifier: [
            {
                system: "https://foo",
                value: "1235"
            }
        ]
    }
}).then(rejectOnOperationOutcome).then((basic: fhir.Basic) => {
});

client.update({
    resourceType: "QuestionnaireResponse",
    id: "1235",
    body: {
        resourceType: "QuestionnaireResponse",
        status: "completed"
    }
}).then(rejectOnOperationOutcome)
.then((r: fhir.QuestionnaireResponse) => {
});

client.delete({
    resourceType: "Basic",
    id: "1235"
}).then((o: fhir.OperationOutcome) => {
    console.log(o.issue);
});

client.batch({
    body: {
        resourceType: "Bundle",
        type: "batch",
        total: 1234
    }
}).then(rejectOnOperationOutcome).then(r => {
    if (r.type === "batch-response") {
        console.log("unhuh!");
    } else {
        // should never happen
    }
});

client.read({
    resourceType: "Patient",
    id: "1234"
}).then(p => {
    if (isPatient(p)) {
        if (p.language === 'en') {
            console.log('patient english');
        }
    }
});

client.vread({
    resourceType: "Patient",
    id: "1234",
    version: "1"
}).then(p => {
    if (isPatient(p)) {
        if (p.language === 'en') {
            console.log('patient english');
        }
    }
});

client.transaction({
    body: {
        resourceType: "Bundle",
        type: "transaction"
    }
}).then(rejectOnOperationOutcome).then(r => {
    if (r.type === "transaction-response") {
        console.log("yup!");
    }
});

client.resolve({
    reference: "#1234",
    context: {
        resourceType: "Organization",
        contained: [ {
                resourceType: "Patient",
                id: "1235"
            }
        ]
    }
}).then((entity) => {
    switch (entity.resourceType) {
        case "Patient":
            const patient: fhir.Patient = entity as fhir.Patient;
            if (patient.name) {
                console.log(patient.name[0].text);
            }
            break;
    }
    if (entity.id !== undefined) {
        const id: string = entity.id;
        id.substring(1);
    }
});

client.capabilityStatement()
    .then(rejectOnOperationOutcome)
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
}).then(rejectOnOperationOutcome);

client.systemSearch({
    searchParams: {
        identifier: "12356"
    }
}).then(rejectOnOperationOutcome);

client.systemHistory()
    .then(rejectOnOperationOutcome)
    .then(history => {
        if (history) {
            const type: string = history.type;
            type.split('[');
        }
    });

client.history()
    .then(history => {
        if (history.resourceType) {
            history.resourceType.substring(1);
        }
    });

client.typeHistory({
    resourceType: "Hospital"
}).then(rejectOnOperationOutcome).then(history => {
    if (history.total !== undefined) {
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
        resourceType: "Bundle",
        type: "searchset"
    }
}).then(() => {
});

client.nextPage({
    bundle: {
        resourceType: "Bundle",
        type: "searchset"
    }
}).then(() => {
});
