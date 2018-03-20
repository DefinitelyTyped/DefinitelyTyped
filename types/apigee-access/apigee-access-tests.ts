import apigee from "apigee-access";

//Sample code from
// https://www.npmjs.com/package/apigee-access

var request: any = null;

// Variables
var val1 = apigee.getVariable(request, 'TestVariable');

apigee.setIntVariable(request, 'TestVariable', '123');
apigee.setIntVariable(request, 'TestVariable2', 42);

apigee.deleteVariable(request, 'TestVariable');

// Mode
console.log('The deployment mode is ' + apigee.getMode());

// Cache
var cache = apigee.getCache('cache');
var customCache = apigee.getCache('MyCustomCache',
    { resource: 'MyCustomrResource' });
cache.put('key2', 'Hello, World!', 120);
cache.put('key4', 'Hello, World!', function (err: any) {
});

cache.get('key', function (err: any, data: any) {
});

cache.remove('key');

// Secure Vault
var orgVault = apigee.getVault('vault1', 'organization');
orgVault.get('key1', function (err: any, secretValue: any) {
});

// Quota Service
var quota = apigee.getQuota();
quota.apply({ identifier: 'Foo', allow: 10, timeUnit: 'hour' },
    function (err: any, result: any) {
        console.log('Quota applied: %j', result);
    });

quota.apply({
    identifier: 'Foo',
    timeUnit: 'hour',
    allow: 100
}, quotaResult);

quota.apply({
    identifier: 'Bar',
    timeUnit: 'minute',
    interval: 5,
    allow: 500
}, quotaResult);

quota.apply({
    identifier: 'Foo',
    timeUnit: 'hour',
    allow: 100,
    weight: 10
}, quotaResult);

function quotaResult(err: any, r: any) {
    if (err) { console.error('Quota failed'); }
}