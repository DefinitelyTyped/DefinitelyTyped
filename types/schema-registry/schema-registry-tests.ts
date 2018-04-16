import { RegistryClient, RegistryRequest } from "schema-registry";

const registryClient = new RegistryClient({
    host: "host",
    port: 2,
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
registryClient.getSchemaById(2);
// $ExpectError
registryClient.getSchemaById();
// $ExpectError
registryClient.getSchemaById('a');
// $ExpectError
registryClient.getSchemaById({});
