// V2 Api

// To use the V2 api you will need to declare a `rg4js` variable
// This is because `rg4js` name is configurable by users
declare var rg4js: RaygunV2;

rg4js("apiKey", "api-key");
rg4js("enableCrashReporting", true);
rg4js("enablePulse", true);
rg4js('setUser', {
    identifier: "username",
    firstName: "Robert",
    fullName: "Robert Raygun"
});

// V1 Api
var client: RaygunStatic = Raygun.noConflict();
var newClient: RaygunStatic = client.constructNewRaygun();

client.init('api-key');
client.init('api-key', { allowInsecureSubmissions: true, disablePulse: false });
client.init('api-key', { allowInsecureSubmissions: true, disablePulse: false }, { some: 'data' });

client.withCustomData({ some: 'data' });
client.withCustomData(function() {
    return { some: 'data' };
});

client.withTags(['tag1', 'tag2']);

client.attach().detach();

client.send(new Error('a error'));
client.send(new Error('a error'), { some: 'data' });
client.send(new Error('a error'), { some: 'data' }, ['tag1', 'tag2']);

try {
    throw new Error('oops');
}
catch (e) {
    client.send(e);
}

client.setUser('username');
client.setUser('username', true);
client.setUser('username', false, 'user@email.com', 'Robert Raygun');
client.setUser('username', false, 'user@email.com', 'Robert Raygun', 'Robert');
client.setUser('username', false, 'user@email.com', 'Robert Raygun', 'Robert', '8ae89fc9-1144-42d6-9629-bf085dab18d2');

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

client.groupingKey(payload => {
    return payload.Details.Error.Message;
});

client.onBeforeXHR(xhr => {
    console.log(xhr.response);
});

client.onAfterSend(xhr => {
    console.log(xhr.response);
});

client.endSession();

client.trackEvent('pageView', {
    path: '/url'
});

client.disableAutoBreadcrumbs();

client.enableAutoBreadcrumbs();

client.recordBreadcrumb("Breadcrumb Message", { custom: "data" });
