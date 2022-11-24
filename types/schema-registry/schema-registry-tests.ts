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
// @ts-expect-error
registryClient.request();
// @ts-expect-error
registryClient.request({});
// @ts-expect-error
registryClient.request('a');
// @ts-expect-error
registryClient.request({}, 'a');
// @ts-expect-error
registryClient.request({}, {});

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.isAlive();

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.registerSubjectVersion("string", {});
// @ts-expect-error
registryClient.registerSubjectVersion();
// @ts-expect-error
registryClient.registerSubjectVersion("string");

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getVersionsForSubject("string");
// @ts-expect-error
registryClient.getVersionsForSubject();
// @ts-expect-error
registryClient.getVersionsForSubject({});

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getConfig();

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.setConfig({});
// @ts-expect-error
registryClient.setConfig();
// @ts-expect-error
registryClient.setConfig("string");

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.setSubjectConfig("string", {});
// @ts-expect-error
registryClient.setSubjectConfig();
// @ts-expect-error
registryClient.setSubjectConfig("string");

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getSubjectConfig("string");
// @ts-expect-error
registryClient.getSubjectConfig();
// @ts-expect-error
registryClient.getSubjectConfig({});

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getSchemaById(2);
// @ts-expect-error
registryClient.getSchemaById();
// @ts-expect-error
registryClient.getSchemaById('a');
// @ts-expect-error
registryClient.getSchemaById({});

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getSubjects();

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getSubjectSchemaForVersion("string", 2);
// @ts-expect-error
registryClient.getSubjectSchemaForVersion("string", {});
// @ts-expect-error
registryClient.getSubjectSchemaForVersion("string");
// @ts-expect-error
registryClient.getSubjectSchemaForVersion({});

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.getLatestSubjectSchema("string");
// @ts-expect-error
registryClient.getLatestSubjectSchema({});
// @ts-expect-error
registryClient.getLatestSubjectSchema(2);
// @ts-expect-error
registryClient.getLatestSubjectSchema();

// $ExpectType Promise<AvroSchemaResponseInterface> || RegistryRequest
registryClient.checkSubjectRegistration("string", {});
// @ts-expect-error
registryClient.checkSubjectRegistration("string");
// @ts-expect-error
registryClient.checkSubjectRegistration(2);
// @ts-expect-error
registryClient.checkSubjectRegistration();
