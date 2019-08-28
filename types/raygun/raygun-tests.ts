import raygun = require('raygun');

const client = new raygun.Client(); // $ExpectType Client
client.init({apiKey: '1'}); // $ExpectType Client

client.init(); // $ExpectError
client.init({}); // $ExpectError
client.init({apiKey: 123}); // $ExpectError
//
// $ExpectType Client
client.setUser({
    identifier: '123'
});
// $ExpectType Client
client.setUser({
    identifier: '123',
    email: '123',
    fullName: '123',
    firstName: '123',
    uuid: '123'
});

client.setUser(); // $ExpectError
client.setUser({}); // $ExpectError
client.setUser({identifier: 1}); // $ExpectError

client.user = (req) => 1; // $ExpectError
client.user = (req) => ({}); // $ExpectError
client.user = (req) => ({identifier: 1}); // $ExpectError

client.setVersion('123'); // $ExpectType Client

client.setVersion(); // $ExpectError
client.setVersion({}); // $ExpectError

client.onBeforeSend(payload => payload); // $ExpectType Client
// $ExpectType Client
client.onBeforeSend(payload => {
    payload.details;

    return payload;
});

client.onBeforeSend(); // $ExpectError

client.groupingKey('123'); // $ExpectType Client
client.groupingKey(payload => payload.details.client.name); // $ExpectType Client

client.groupingKey(); // $ExpectError
client.groupingKey({}); // $ExpectError

client.offline(); // $ExpectType Client

client.online(); // $ExpectType Client

client.send(new Error()); // $ExpectType RaygunPayload
client.send({foo: 'bar'}); // $ExpectType RaygunPayload
client.send('error message'); // $ExpectType RaygunPayload
client.send(new Error(), {foo: 'bar'}); // $ExpectType RaygunPayload
client.send(new Error(), {}, undefined, undefined, ['1', '2']); // $ExpectType RaygunPayload

client.send(); // $ExpectError
client.send(null); // $ExpectError
client.send(undefined); // $ExpectError
