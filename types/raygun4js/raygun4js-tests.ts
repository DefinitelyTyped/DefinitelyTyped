// V2 Api
// Used in CommonJS-like environments

import rg4js, { RaygunStatic, RaygunPayload } from 'raygun4js';

rg4js("apiKey", "api-key");
rg4js("boot");
rg4js("enableCrashReporting", true);
rg4js("enablePulse", true);
rg4js('setUser', {
    identifier: "username",
    firstName: "Robert",
    fullName: "Robert Raygun"
});
rg4js('trackEvent', {
    type: 'customTiming',
    name: 'testDuration',
    duration: 100
});
rg4js('endSession');

try {
    throw new Error('oops');
} catch (e) {
    rg4js('send', e);
}

// V1 Api
// Used in non CommonJS enviroments
declare const Raygun: RaygunStatic;

const client: RaygunStatic = Raygun.noConflict();
const newClient: RaygunStatic = client.constructNewRaygun();

client.init('api-key');
client.init('api-key', { allowInsecureSubmissions: true, disablePulse: false, captureMissingRequests: true, clientIp: "test", automaticPerformanceCustomTimings: true });
client.init('api-key', { allowInsecureSubmissions: true, disablePulse: false }, { some: 'data' });

client.withCustomData({ some: 'data' });
client.withCustomData(() => {
    return { some: 'data' };
});

client.withTags(['tag1', 'tag2']);

client.attach().detach();

client.send(new Error('a error'));
client.send(new Error('a error'), { some: 'data' });
client.send(new Error('a error'), { some: 'data' }, ['tag1', 'tag2']);

try {
    throw new Error('oops');
} catch (e) {
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

client.onBeforeSend((payload: RaygunPayload) => {
    payload.OccurredOn = new Date();
    return payload;
});

client.groupingKey(payload => {
    return payload.Details.Error.Message;
});

client.onBeforeXHR(xhr => {
    console.log(xhr.response);
});

client.onAfterSend((xhr) => {
    console.log(xhr.response);
});

client.endSession();

client.trackEvent('pageView', {
    path: '/url'
});

client.disableAutoBreadcrumbs();

client.enableAutoBreadcrumbs();

client.recordBreadcrumb("Breadcrumb Message", { custom: "data" });

client.trackEvent('customTiming', {
    name: 'static-test-duration',
    duration: 200
});
