/// <reference path="raygun4js.d.ts"/>

var client: raygun.RaygunStatic = Raygun.noConflict();

var newClient: raygun.RaygunStatic = client.constructNewRaygun();

client.init('api-key');
client.init('api-key', { allowInsecureSubmissions: true });
client.init('api-key', { allowInsecureSubmissions: true }, { some: 'data' });

client.withCustomData({ some: 'data' });

client.withTags(['tag1', 'tag2']);

client.attach().detach();

client.send(new Error('a error'));
client.send(new Error('a error'), ['tag1', 'tag2']);

try {
    throw new Error('oops');
}
catch (e) {
    client.send(e);
}

client.setUser('username');
client.setUser('username', true);
client.setUser('username', false, 'user@email.com', 'Robbie Robot');
client.setUser('username', false, 'user@email.com', 'Robbie Robot', 'Robbie');
client.setUser('username', false, 'user@email.com', 'Robbie Robot', 'Robbie', '8ae89fc9-1144-42d6-9629-bf085dab18d2');

client.resetAnonymousUser();

client.setVersion('1.2.3.4');

client.saveIfOffline(true);

client.filterSensitiveData(['field1', 'field2']);

client.setFilterScope('all');

client.whitelistCrossOriginDomains(['domain1', 'domain2']);

client.onBeforeSend(payload=> {
    payload.OccurredOn = new Date();
    return payload;
});