import { RegistryClient, RegistryRequest, LivingAvroSchema } from "schema-registry";

const config = {
    host: "host", port: 2,
};
const registryClient = new RegistryClient(config);
const livingAvroSchema = new LivingAvroSchema("subject", "version", {
    host: "host", port: 2,
});

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.request({}, 2);
// $ExpectError
registryClient.request();
// $ExpectError
registryClient.request({});
// $ExpectError
registryClient.request('a');
// $ExpectError
registryClient.request({}, 'a');
// $ExpectError
registryClient.request({}, {});

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.isAlive();

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.registerSubjectVersion("string", {});
// $ExpectError
registryClient.registerSubjectVersion();
// $ExpectError
registryClient.registerSubjectVersion("string");

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.getVersionsForSubject("string");
// $ExpectError
registryClient.getVersionsForSubject();
// $ExpectError
registryClient.getVersionsForSubject({});

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.getConfig();

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.setConfig({});
// $ExpectError
registryClient.setConfig();
// $ExpectError
registryClient.setConfig("string");

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.setSubjectConfig("string", {});
// $ExpectError
registryClient.setSubjectConfig();
// $ExpectError
registryClient.setSubjectConfig("string");

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.getSubjectConfig("string");
// $ExpectError
registryClient.getSubjectConfig();
// $ExpectError
registryClient.getSubjectConfig({});

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.getSchemaById(2);
// $ExpectError
registryClient.getSchemaById();
// $ExpectError
registryClient.getSchemaById('a');
// $ExpectError
registryClient.getSchemaById({});

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.getSubjects();

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.getSubjectSchemaForVersion("string", 2);
// $ExpectError
registryClient.getSubjectSchemaForVersion("string", {});
// $ExpectError
registryClient.getSubjectSchemaForVersion("string");
// $ExpectError
registryClient.getSubjectSchemaForVersion({});

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.getLatestSubjectSchema("string");
// $ExpectError
registryClient.getLatestSubjectSchema({});
// $ExpectError
registryClient.getLatestSubjectSchema(2);
// $ExpectError
registryClient.getLatestSubjectSchema();

// $ExpectType Promise<AvroSchemaResponseInterface>
registryClient.checkSubjectRegistration("string", {});
// $ExpectError
registryClient.checkSubjectRegistration("string");
// $ExpectError
registryClient.checkSubjectRegistration(2);
// $ExpectError
registryClient.checkSubjectRegistration();
