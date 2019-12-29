import { RegistryClient, RegistryRequest, LivingAvroSchema } from "schema-registry";

const config = {
    host: "host", port: 2,
};
const registryClient = new RegistryClient(config);
const livingAvroSchema = new LivingAvroSchema("subject", "version", {
    host: "host", port: 2,
});

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
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

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.isAlive();

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.registerSubjectVersion("string", {});
// $ExpectError
registryClient.registerSubjectVersion();
// $ExpectError
registryClient.registerSubjectVersion("string");

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getVersionsForSubject("string");
// $ExpectError
registryClient.getVersionsForSubject();
// $ExpectError
registryClient.getVersionsForSubject({});

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getConfig();

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.setConfig({});
// $ExpectError
registryClient.setConfig();
// $ExpectError
registryClient.setConfig("string");

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.setSubjectConfig("string", {});
// $ExpectError
registryClient.setSubjectConfig();
// $ExpectError
registryClient.setSubjectConfig("string");

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getSubjectConfig("string");
// $ExpectError
registryClient.getSubjectConfig();
// $ExpectError
registryClient.getSubjectConfig({});

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getSchemaById(2);
// $ExpectError
registryClient.getSchemaById();
// $ExpectError
registryClient.getSchemaById('a');
// $ExpectError
registryClient.getSchemaById({});

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getSubjects();

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getSubjectSchemaForVersion("string", 2);
// $ExpectError
registryClient.getSubjectSchemaForVersion("string", {});
// $ExpectError
registryClient.getSubjectSchemaForVersion("string");
// $ExpectError
registryClient.getSubjectSchemaForVersion({});

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getLatestSubjectSchema("string");
// $ExpectError
registryClient.getLatestSubjectSchema({});
// $ExpectError
registryClient.getLatestSubjectSchema(2);
// $ExpectError
registryClient.getLatestSubjectSchema();

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.checkSubjectRegistration("string", {});
// $ExpectError
registryClient.checkSubjectRegistration("string");
// $ExpectError
registryClient.checkSubjectRegistration(2);
// $ExpectError
registryClient.checkSubjectRegistration();
