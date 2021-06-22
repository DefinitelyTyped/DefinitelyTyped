import Credstash = require('nodecredstash');

const credstash = Credstash({
    awsOpts: { region: 'us-east-1' },
    dynamoOpts: { accessKeyId: 'foo' },
    kmsKey: 'bar',
    kmsOpts: { accessKeyId: 'baz' },
    table: 'something'
});

credstash.decryptStash({ key: 'foo' }).then((result) => {
    return {
        id: result.KeyId,
        text: result.Plaintext
    };
});

credstash.deleteSecret({ name: 'foo', version: 1 }).then((result) => {
    if (result.Attributes) return result.Attributes['blah'];
    if (result.ConsumedCapacity) return result.ConsumedCapacity.TableName;
    if (result.ItemCollectionMetrics) return result.ItemCollectionMetrics.ItemCollectionKey;
});

credstash.deleteSecrets({ name: 'foo' }).then((results) => {
    const result = results[0];
    if (result.Attributes) return result.Attributes['blah'].toUpperCase();
    if (result.ConsumedCapacity) return result.ConsumedCapacity.TableName;
    if (result.ItemCollectionMetrics) return result.ItemCollectionMetrics.ItemCollectionKey;
});

credstash.getAllSecrets({ version: 1 }).then((result) => {
    return result['foo'].toUpperCase();
});

credstash.getAllVersions({ name: 'foo', context: { bar: 'baz' }, limit: 1 }).then((result) => {
    return result[0].secret.toUpperCase() + result[0].version.toUpperCase();
});

credstash.getHighestVersion({ name: 'foo' }).then((result) => {
    return result['foo'].S;
});

credstash.getSecret({ name: 'foo', version: 1, context: { bar: 'baz' } }).then((result) => {
    return result.toUpperCase();
});

credstash.incrementVersion({ name: 'foo' }).then((result) => {
    return result.toUpperCase();
});

credstash.listSecrets().then((result) => {
    return result.map((str) => str.toUpperCase());
});

credstash.putSecret({ name: 'foo', secret: 'bar', context: { baz: 'qux' }, digest: 'quux', version: 1 }).then((result) => {
    if (result.Attributes) return result.Attributes['foo'];
    if (result.ConsumedCapacity) return result.ConsumedCapacity.TableName;
    if (result.ItemCollectionMetrics) return result.ItemCollectionMetrics.ItemCollectionKey;
});
