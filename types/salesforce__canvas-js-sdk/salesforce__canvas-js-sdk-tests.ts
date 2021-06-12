import { canvas } from '@salesforce/canvas-js-sdk';

// =============================================================================
// Constants
// =============================================================================

const CLIENT: canvas.Client = {
    oauthToken: 'oauthToken',
    instanceId: 'instanceId',
    targetOrigin: 'targetOrigin',
};

const APPLICATION: canvas.Application = {
    applicationId: '06Px000000003ed',
    authType: canvas.ApplicationAuthType.SIGNED_REQUEST,
    canvasUrl: 'http://MyDomainName.my.salesforce.com:8080/canvas_app_path/canvas_app.jsp',
    developerName: 'my_java_app',
    isInstalledPersonalApp: false,
    name: 'My Java App',
    namespace: 'org_namespace',
    options: [],
    referenceId: '09HD00000000AUM',
    samlInitiationMethod: 'None',
    version: '1.0.0',
};

const USER: canvas.User = {
    accessibilityModeEnabled: false,
    currencyISOCode: 'USD',
    email: 'admin@6457617734813492.com',
    firstName: 'Sean',
    fullName: 'Sean Forbes',
    isDefaultNetwork: false,
    language: 'en_US',
    lastName: 'Forbes',
    locale: 'en_US',
    networkId: '0DBxx000000001r',
    profileId: '00ex0000000jzpt',
    profilePhotoUrl: '/profilephoto/005/F',
    profileThumbnailUrl: '/profilephoto/005/T',
    roleId: null,
    siteUrl: 'https://MyDomainName.my.site.com/',
    siteUrlPrefix: '/mySite',
    timeZone: 'America/Los_Angeles',
    userId: '005x0000001SyyEAAS',
    userName: 'admin@6457617734813492.com',
    userType: canvas.UserType.STANDARD,
};

const ENVIRONMENT: canvas.Environment = {
    parameters: {
        complex: {
            key1: 'value1',
            key2: 'value2',
        },
        integer: 10,
        simple: 'This is a simple string.',
        boolean: true,
    },
    dimensions: {
        clientHeight: '50px',
        clientWidth: '70px',
        height: '900px',
        width: '800px',
        maxHeight: '2000px',
        maxWidth: '1000px',
    },
    record: {
        attributes: {
            type: 'Account',
            url: '/services/data/v52.0/sobjects/Account/001xx000003DGWiAAO',
        },
        Id: '001xx000003DGWiAAO',
        Phone: '(555) 555-5555',
        Fax: '(555) 555-5555',
        BillingCity: 'Seattle',
    },
    displayLocation: canvas.EnvironmentDisplayLocation.CHATTER,
    locationUrl: 'http://www.salesforce.com/some/path/index.html',
    subLocation: null,
    uiTheme: 'Theme3',
    version: {
        api: '52.0',
        season: 'SUMMER',
    },
};

const ORGANIZATION: canvas.Organization = {
    currencyIsoCode: 'USD',
    multicurrencyEnabled: true,
    name: 'Edge Communications',
    namespacePrefix: 'org_namespace',
    organizationId: '00Dx00000001hxyEAA',
};

const LINKS: canvas.Links = {
    chatterFeedItemsUrl: '/services/data/v52.0/chatter/feed-items',
    chatterFeedsUrl: '/services/data/v52.0/chatter/feeds',
    chatterGroupsUrl: '/services/data/v52.0/chatter/groups',
    chatterUsersUrl: '/services/data/v52.0/chatter/users',
    enterpriseUrl: '/services/Soap/c/52.0/00Dx00000001hxy',
    loginUrl: 'http://MyDomainName.my.salesforce.com',
    metadataUrl: '/services/Soap/m/52.0/00Dx00000001hxy',
    partnerUrl: '/services/Soap/u/52.0/00Dx00000001hxy',
    queryUrl: '/services/data/v52.0/query/',
    recentItemsUrl: '/services/data/v52.0/recent/',
    restUrl: '/services/data/v52.0/',
    searchUrl: '/services/data/v52.0/search/',
    sobjectUrl: '/services/data/v52.0/sobjects/',
    userUrl: '/005x0000001SyyEAAS',
};

const CONTEXT: canvas.Context = {
    application: APPLICATION,
    user: USER,
    environment: ENVIRONMENT,
    organization: ORGANIZATION,
    links: LINKS,
};

// =============================================================================
// Sfdc.canvas
// =============================================================================

canvas(() => {}); // $ExpectType void

canvas.hasOwn({ a: 1 }, 'a'); // $ExpectType boolean
// => true
canvas.hasOwn({ a: 1 }, 'b'); // $ExpectType boolean
// => false

canvas.isUndefined(undefined); // $ExpectType boolean
// => true
canvas.isUndefined('a'); // $ExpectType boolean
// => false

canvas.isNil(undefined); // $ExpectType boolean
canvas.isNil(null); // $ExpectType boolean
canvas.isNil(''); // $ExpectType boolean
// => true
canvas.isNil('a'); // $ExpectType boolean
// => false

canvas.isNumber(123); // $ExpectType boolean
// => true
canvas.isNumber('a'); // $ExpectType boolean
// => false

canvas.isFunction(() => {}); // $ExpectType boolean
// => true
canvas.isFunction(''); // $ExpectType boolean
// => false

canvas.isArray([]); // $ExpectType boolean
// => true
canvas.isArray({}); // $ExpectType boolean
canvas.isArray(''); // $ExpectType boolean
// => false

canvas.isArguments([]); // $ExpectType boolean
// => true

canvas.isObject({}); // $ExpectType boolean
// => true
canvas.isObject([]); // $ExpectType boolean
// => false

canvas.isString(''); // $ExpectType boolean
// => true
canvas.isString(1); // $ExpectType boolean
// => false

canvas.appearsJson('{}'); // $ExpectType boolean
// => true
canvas.appearsJson(''); // $ExpectType boolean
// => false

canvas.nop(); // $ExpectType void

canvas.invoker(() => {}); // $ExpectType void

canvas.identity(1); // $ExpectType 1
canvas.identity('a'); // $ExpectType "a"
canvas.identity({}); // $ExpectType {}

// $ExpectType void
canvas.each(['1', '2', '3'], (item, index, arr) => {
    item; // $ExpectType string
    index; // $ExpectType number
    arr; // $ExpectType string[]
});

// $ExpectType void
canvas.each({ a: 1, b: 2, c: 3 }, (item, key, obj) => {
    item; // $ExpectType number
    key; // $ExpectType string
    obj; // $ExpectType Record<string, number>
});

canvas.each(1, (item, index, arr) => {}); // $ExpectError

canvas.startsWithHttp('http://foo', 'http://bar'); // $ExpectType string
// => 'http://foo'
canvas.startsWithHttp('foo', 'http://bar'); // $ExpectType string
// => 'http://bar'

// $ExpectError
canvas.startsWithHttp(1, 'http://bar');

// $ExpectType number[]
canvas.map(['1', '2', '3'], (item, index, arr) => {
    item; // $ExpectType string
    index; // $ExpectType number
    arr; // $ExpectType string[]
    return parseInt(item, 10);
});

// $ExpectType string[]
canvas.map({ a: 1, b: 2, c: 3 }, (item, index, obj) => {
    item; // $ExpectType number
    index; // $ExpectType string
    obj; // $ExpectType Record<string, number>
    return String(item);
});

canvas.map(1, (item, index, arr) => {}); // $ExpectError

canvas.values([1, 2, 3, 4]); // $ExpectType number[]
canvas.values({ a: 1, b: 2, c: 3 }); // $ExpectType number[]
canvas.values(1); // $ExpectError

canvas.slice([1, 2, 3, 4]); // $ExpectType number[]
canvas.slice([1, 2, 3, 4], 0); // $ExpectType number[]
canvas.slice([1, 2, 3, 4], 0, 1); // $ExpectType number[]
canvas.slice(0, 0, 0); // $ExpectError

canvas.toArray(undefined); // $ExpectType []
canvas.toArray(null); // $ExpectType []
canvas.toArray([1, 2, 3, 4]); // $ExpectType number[]
canvas.toArray({ a: 1, b: 2, c: 3 }); // $ExpectType number[]
canvas.toArray(1); // $ExpectError

canvas.size(undefined); // $ExpectType number
canvas.size(null); // $ExpectType number
canvas.size([1, 2, 3, 4]); // $ExpectType number
canvas.size({ a: 1, b: 2, c: 3 }); // $ExpectType number
canvas.size(1); // $ExpectError

canvas.indexOf([1, 2, 3, 4], 3); // $ExpectType number
canvas.indexOf([1, 2, 3, 4], 'a'); // $ExpectError

canvas.isEmpty(null); // $ExpectType boolean
canvas.isEmpty(''); // $ExpectType boolean
canvas.isEmpty(1); // $ExpectType boolean
canvas.isEmpty([]); // $ExpectType boolean
// => true
canvas.isEmpty('test'); // $ExpectType boolean
canvas.isEmpty(['a']); // $ExpectType boolean
// => false

canvas.remove([1, 2, 3, 4], 3); // $ExpectType number[]
canvas.remove([1, 2, 3, 4], 'a'); // $ExpectError

canvas.param([1, 2, 3, 4], true); // $ExpectType string
canvas.param([1, 2, 3, 4]); // $ExpectType string
canvas.param({ a: 1, b: 2, c: 3 }, true); // $ExpectType string
canvas.param({ a: 1, b: 2, c: 3 }); // $ExpectType string
canvas.param(1); // $ExpectError

canvas.objectify('a=1&b=2'); // $ExpectType Record<string, string>
canvas.objectify(1); // $ExpectError

canvas.stripUrl('http://foo'); // $ExpectType string
canvas.stripUrl(1); // $ExpectError

canvas.query('http://foo', 'a=1&b=2'); // $ExpectType string
// $ExpectError
canvas.query('http://foo', 1);
// $ExpectError
canvas.query(1, 'a=1&b=2');

canvas.extend({ a: 1 }, { b: 2 }); // $ExpectType { a: number; } & { b: number; }
canvas.extend({ a: 1 }, { b: 2 }, { c: 3 }); // $ExpectType { a: number; } & { b: number; } & { c: number; }
canvas.extend({ a: 1 }, 'a'); // $ExpectError
canvas.extend({ a: 1 }); // $ExpectError

canvas.endsWith('hello world', 'world'); // $ExpectType boolean
canvas.endsWith('hello world', 'foo'); // $ExpectType boolean
canvas.endsWith('hello world', 1); // $ExpectError

canvas.capitalize('hello world'); // $ExpectType string
canvas.capitalize(1); // $ExpectError

canvas.uncapitalize('hello world'); // $ExpectType string
canvas.uncapitalize(1); // $ExpectError

canvas.decode('abcedf'); // $ExpectType string
canvas.decode(1); // $ExpectError

canvas.escapeToUTF8('abcedf'); // $ExpectType string
canvas.escapeToUTF8(1); // $ExpectError

canvas.validEventName('abcedf', 'foo'); // $ExpectType number
canvas.validEventName('abcedf', ['foo']); // $ExpectType number
canvas.validEventName(1, 'foo'); // $ExpectError
canvas.validEventName('abcedf', 1); // $ExpectError

canvas.prototypeOf(1); // $ExpectType object | null

canvas.module('foo', { a: 1 }); // $ExpectType typeof canvas
canvas.module(1, { a: 1 }); // $ExpectError

canvas.document(); // $ExpectType Document

canvas.byId('foo'); // $ExpectType HTMLElement
canvas.byId(1); // $ExpectError

canvas.byClass('foo'); // $ExpectType HTMLElement
canvas.byClass(1); // $ExpectError

const el = document.createElement('div');
canvas.attr(el, 'foo'); // $ExpectType string
canvas.attr(el, 1); // $ExpectError
canvas.attr(1, 'foo'); // $ExpectError

canvas.onReady(() => {}); // $ExpectType void

// =============================================================================
// Sfdc.canvas.client
// =============================================================================

// $ExpectType void
canvas.client.ctx(response => {
    response; // $ExpectType Response<Context>
}, CLIENT);

// $ExpectType void
canvas.client.ajax('/foo', {
    client: CLIENT,
    success: (data: canvas.Response<unknown>) => {
        data; // $ExpectType Response<unknown>
    },
});

// $ExpectType void
canvas.client.ajax('/foo', {
    client: CLIENT,
    method: 'POST',
    async: true,
    contentType: 'text/html',
    headers: { foo: 'bar' },
    data: JSON.stringify({ hello: 'world' }),
    success: (data: canvas.Response<unknown>) => {
        data; // $ExpectType Response<unknown>
    },
});

canvas.client.token(); // $ExpectType string | null
canvas.client.token('foo'); // $ExpectType string | null
canvas.client.token(null); // $ExpectType string | null
canvas.client.token(123); // $ExpectError

canvas.client.version(); // $ExpectType Version

canvas.client.resize(CLIENT); // $ExpectType void
canvas.client.resize(CLIENT, { width: '5px', height: '5px' }); // $ExpectType void
canvas.client.resize(CLIENT, {}); // $ExpectError

canvas.client.size(); // $ExpectType Size

canvas.client.autogrow(CLIENT); // $ExpectType void
canvas.client.autogrow(CLIENT, true); // $ExpectType void
canvas.client.autogrow(CLIENT, false); // $ExpectType void
canvas.client.autogrow(CLIENT, true, 500); // $ExpectType void
canvas.client.autogrow(CLIENT, 500); // $ExpectError

// $ExpectType void
canvas.client.subscribe(CLIENT, {
    name: 'foo.bar',
    onData: (event: unknown) => {
        event; // $ExpectType unknown
    },
});

// $ExpectType void
canvas.client.subscribe(CLIENT, [
    {
        name: 'foo.bar',
        onData: (event: unknown) => {
            event; // $ExpectType unknown
        },
    },
]);

// $ExpectError
canvas.client.subscribe(CLIENT, {
    name: 'sfdc.streamingapi',
    params: {},
    onData: (event: unknown) => {
        event; // $ExpectType unknown
    },
    onComplete: (event: unknown) => {
        event; // $ExpectType unknown
    },
});

// $ExpectType void
canvas.client.subscribe(CLIENT, {
    name: 'sfdc.streamingapi',
    params: {
        topic: 'foo.bar',
    },
    onData: (event: unknown) => {
        event; // $ExpectType unknown
    },
    onComplete: (event: unknown) => {
        event; // $ExpectType unknown
    },
});

// $ExpectType void
canvas.client.subscribe(CLIENT, [
    {
        name: 'foo.bar',
        onData: (event: unknown) => {
            event; // $ExpectType unknown
        },
    },
    {
        name: 'sfdc.streamingapi',
        params: {
            topic: 'foo.bar',
        },
        onData: (event: unknown) => {
            event; // $ExpectType unknown
        },
        onComplete: (event: unknown) => {
            event; // $ExpectType unknown
        },
    },
]);

canvas.client.unsubscribe(CLIENT, 'foo.bar'); // $ExpectType void

// $ExpectType void
canvas.client.unsubscribe(CLIENT, {
    name: 'foo.bar',
});

// $ExpectType void
canvas.client.unsubscribe(CLIENT, {
    name: 'sfdc.streamingapi',
    params: {
        topic: 'foo.bar',
    },
});

// $ExpectError
canvas.client.unsubscribe(CLIENT, {
    name: 'sfdc.streamingapi',
    params: {},
});

// $ExpectType void
canvas.client.unsubscribe(CLIENT, [
    'foo.bar',
    {
        name: 'foo.bar',
    },
    {
        name: 'sfdc.streamingapi',
        params: {
            topic: 'foo.bar',
        },
    },
]);

// $ExpectType void
canvas.client.publish(CLIENT, {
    name: 'foo',
    payload: { hello: 'world' },
});

// $ExpectError
canvas.client.publish(CLIENT, {
    name: 'foo',
});

canvas.client.signedrequest(); // $ExpectType SignedRequest

// $ExpectType SignedRequest
canvas.client.signedrequest({
    context: CONTEXT,
    client: CLIENT,
    algorithm: 'HMACSHA256',
    userId: '005x0000001SyyEAAS',
    issuedAt: null,
});

// $ExpectType void
canvas.client.refreshSignedRequest(data => {
    data; // $ExpectType Response<string>
});

canvas.client.repost(); // $ExpectType void
canvas.client.repost(true); // $ExpectType void
canvas.client.repost(false); // $ExpectType void

// =============================================================================
// Sfdc.canvas.console
// =============================================================================

canvas.console.enable(); // $ExpectType void

canvas.console.disable(); // $ExpectType void

canvas.console.log('hello'); // $ExpectType void
canvas.console.log('hello', 'world'); // $ExpectType void
canvas.console.log(['hello', 'world']); // $ExpectType void
canvas.console.log({ hello: 'world' }); // $ExpectType void
canvas.console.log(12345); // $ExpectType void

canvas.console.error(new Error('hello')); // $ExpectType void
canvas.console.error('hello'); // $ExpectType void
canvas.console.error('hello', 'world'); // $ExpectType void
canvas.console.error(['hello', 'world']); // $ExpectType void
canvas.console.error({ hello: 'world' }); // $ExpectType void
canvas.console.error(12345); // $ExpectType void

// =============================================================================
// Sfdc.canvas.cookies
// =============================================================================

canvas.cookies.set('foo', 'bar'); // $ExpectType void
canvas.cookies.set('foo', 'bar', 300); // $ExpectType void
canvas.cookies.set('foo', 300); // $ExpectError

canvas.cookies.get('foo'); // $ExpectType string
canvas.cookies.get(1); // $ExpectError

canvas.cookies.remove('foo'); // $ExpectType void
canvas.cookies.remove(1); // $ExpectError

// =============================================================================
// Sfdc.canvas.oauth
// =============================================================================

canvas.oauth.init(); // $ExpectType void

// $ExpectType void
canvas.oauth.login({
    uri: canvas.oauth.loginUrl(),
    params: {
        response_type: 'token',
        client_id: 'foo',
        redirect_uri: encodeURIComponent('https://foo/callback.html'),
    },
});

canvas.oauth.logout(); // $ExpectType void

canvas.oauth.loggedin(); // $ExpectType boolean

canvas.oauth.loginUrl(); // $ExpectType string

canvas.oauth.token(); // $ExpectType string | null
canvas.oauth.token(null); // $ExpectType string | null
canvas.oauth.token('foo'); // $ExpectType string | null
canvas.oauth.token(1); // $ExpectError

canvas.oauth.instance(); // $ExpectType string | null
canvas.oauth.instance(null); // $ExpectType string | null
canvas.oauth.instance('foo'); // $ExpectType string | null
canvas.oauth.instance(1); // $ExpectError

canvas.oauth.client(); // $ExpectType Client

canvas.oauth.checkChildWindowStatus(); // $ExpectType void

canvas.oauth.childWindowUnloadNotification('foo'); // $ExpectType void

// =============================================================================
// Sfdc.canvas.xd
// =============================================================================

canvas.xd.post('foo', 'http://test'); // $ExpectType void
canvas.xd.post('foo', 'http://test', window); // $ExpectType void

// $ExpectError
canvas.xd.post({}, 'http://test', window);

canvas.xd.receive((data: unknown) => {}); // $ExpectType void
canvas.xd.receive((data: unknown) => {}, 'origin'); // $ExpectType void

canvas.xd.remove(); // $ExpectType void
