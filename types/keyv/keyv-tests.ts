import Keyv = require('keyv');

new Keyv({
    uri: 'redis://user:pass@localhost:6379',
    namespace: 'redis',
});
new Keyv({ uri: 'redis://user:pass@localhost:6379' });
new Keyv({ namespace: 'redis' });
new Keyv({ ttl: 123 });
new Keyv({ adapter: 'redis' });
new Keyv({ adapter: 'mongo' });
new Keyv({ adapter: 'mongodb' });
new Keyv({ adapter: 'sqlite' });
new Keyv({ adapter: 'postgres' });
new Keyv({ adapter: 'postgresql' });
new Keyv({ adapter: 'mysql' });
// @ts-expect-error
new Keyv({ adapter: 'foo' });
new Keyv<boolean>({
  serialize: (d) => {
    d.value; // $ExpectType boolean
    d.expires; // $ExpectType number | null
    return JSON.stringify(d);
  }
});
new Keyv<boolean>({ deserialize: JSON.parse });
// @ts-expect-error
new Keyv<boolean>({ deserialize: (d: string) => d });
new Keyv<boolean>({
  deserialize: (d) => {
    d; // $ExpectType string
    return {
      value: true,
      expires: new Date().getTime()
    };
  }
});

new Keyv<boolean>({ store: new Map() });

new Keyv('mongodb://user:pass@localhost:27017/dbname', { namespace: 'mongodb' });
new Keyv('redis://user:pass@localhost:6379');
new Keyv('sqlite://path/to/database.sqlite');
new Keyv('postgresql://user:pass@localhost:5432/dbname');
new Keyv('mysql://user:pass@localhost:3306/dbname');
new Keyv();

(async () => {
    const keyv = new Keyv<string>();

    keyv.on('error', err => console.log('Connection Error', err));

    await keyv.set('foo', 'expires in 1 second', 1000); // $ExpectType true
    await keyv.set('foo', 'never expires'); // $ExpectType true
    await keyv.get('foo'); // $ExpectType string | undefined
    await keyv.get('foo', { raw: false }); // $ExpectType string | undefined
    await keyv.get('foo', { raw: true }); // $ExpectType DeserializedData<string> | undefined
    await keyv.delete('foo'); // $ExpectType boolean
    await keyv.clear(); // $ExpectType void
})();

{
    // Base options accessible and typed correctly with TOpts unused
    const keyv = new Keyv<string>();
    keyv.opts.namespace; // $ExpectType string
    keyv.opts.deserialize; // $ExpectType (data: string) => DeserializedData<string> | undefined
    keyv.opts.serialize; // $ExpectType (data: DeserializedData<string>) => string
    keyv.opts.store; // $ExpectType Store<string>

    // Base options accessible and typed correctly with TOpts used
    const customOptsKeyv = new Keyv<string, { customProperty: string }>();
    customOptsKeyv.opts.namespace; // $ExpectType string
    customOptsKeyv.opts.deserialize; // $ExpectType (data: string) => DeserializedData<string> | undefined
    customOptsKeyv.opts.serialize; // $ExpectType (data: DeserializedData<string>) => string
    customOptsKeyv.opts.store; // $ExpectType Store<string>

    // TOpts typings are correct when used
    customOptsKeyv.opts.customProperty; // $ExpectType string
}
