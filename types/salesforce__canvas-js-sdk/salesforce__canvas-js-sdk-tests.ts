// =============================================================================
// Constants
// =============================================================================

const CLIENT: Sfdc.canvas.Client = {
    oauthToken: 'oauthToken',
    instanceId: 'instanceId',
    targetOrigin: 'targetOrigin',
};

const APPLICATION: Sfdc.canvas.Application = {
    applicationId: '06Px000000003ed',
    authType: Sfdc.canvas.ApplicationAuthType.SIGNED_REQUEST,
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

const USER: Sfdc.canvas.User = {
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
    userType: Sfdc.canvas.UserType.STANDARD,
};

const ENVIRONMENT: Sfdc.canvas.Environment = {
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
    displayLocation: Sfdc.canvas.EnvironmentDisplayLocation.CHATTER,
    locationUrl: 'http://www.salesforce.com/some/path/index.html',
    subLocation: null,
    uiTheme: 'Theme3',
    version: {
        api: '52.0',
        season: 'SUMMER',
    },
};

const ORGANIZATION: Sfdc.canvas.Organization = {
    currencyIsoCode: 'USD',
    multicurrencyEnabled: true,
    name: 'Edge Communications',
    namespacePrefix: 'org_namespace',
    organizationId: '00Dx00000001hxyEAA',
};

const LINKS: Sfdc.canvas.Links = {
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

const CONTEXT: Sfdc.canvas.Context = {
    application: APPLICATION,
    user: USER,
    environment: ENVIRONMENT,
    organization: ORGANIZATION,
    links: LINKS,
};

// =============================================================================
// Sfdc.canvas
// =============================================================================

Sfdc.canvas(() => {}); // $ExpectType void

Sfdc.canvas.hasOwn({ a: 1 }, 'a'); // $ExpectType boolean
Sfdc.canvas.hasOwn({ a: 1 }, 'b'); // $ExpectType boolean

Sfdc.canvas.isUndefined(undefined); // $ExpectType boolean
Sfdc.canvas.isUndefined('a'); // $ExpectType boolean

Sfdc.canvas.isNil(undefined); // $ExpectType boolean
Sfdc.canvas.isNil(null); // $ExpectType boolean
Sfdc.canvas.isNil(''); // $ExpectType boolean
Sfdc.canvas.isNil('a'); // $ExpectType boolean

Sfdc.canvas.isNumber(123); // $ExpectType boolean
Sfdc.canvas.isNumber('a'); // $ExpectType boolean

Sfdc.canvas.isFunction(() => {}); // $ExpectType boolean
Sfdc.canvas.isFunction(''); // $ExpectType boolean

Sfdc.canvas.isArray([]); // $ExpectType boolean
Sfdc.canvas.isArray({}); // $ExpectType boolean
Sfdc.canvas.isArray(''); // $ExpectType boolean

Sfdc.canvas.isArguments([]); // $ExpectType boolean

Sfdc.canvas.isObject({}); // $ExpectType boolean
Sfdc.canvas.isObject([]); // $ExpectType boolean

Sfdc.canvas.isString(''); // $ExpectType boolean
Sfdc.canvas.isString(1); // $ExpectType boolean

Sfdc.canvas.appearsJson('{}'); // $ExpectType boolean
Sfdc.canvas.appearsJson(''); // $ExpectType boolean

Sfdc.canvas.nop(); // $ExpectType void

Sfdc.canvas.invoker(() => {}); // $ExpectType void

Sfdc.canvas.identity(1); // $ExpectType 1
Sfdc.canvas.identity('a'); // $ExpectType "a"
Sfdc.canvas.identity({}); // $ExpectType {}

// $ExpectType void
Sfdc.canvas.each(['1', '2', '3'], (item, index, arr) => {
    item; // $ExpectType string
    index; // $ExpectType number
    arr; // $ExpectType string[]
});

// $ExpectType void
Sfdc.canvas.each({ a: 1, b: 2, c: 3 }, (item, key, obj) => {
    item; // $ExpectType number
    key; // $ExpectType string
    obj; // $ExpectType Record<string, number>
});

// @ts-expect-error
Sfdc.canvas.each(1, (item, index, arr) => {});

Sfdc.canvas.startsWithHttp('http://foo', 'http://bar'); // $ExpectType string
Sfdc.canvas.startsWithHttp('foo', 'http://bar'); // $ExpectType string

// @ts-expect-error
Sfdc.canvas.startsWithHttp(1, 'http://bar');

// $ExpectType number[]
Sfdc.canvas.map(['1', '2', '3'], (item, index, arr) => {
    item; // $ExpectType string
    index; // $ExpectType number
    arr; // $ExpectType string[]
    return parseInt(item, 10);
});

// $ExpectType string[]
Sfdc.canvas.map({ a: 1, b: 2, c: 3 }, (item, index, obj) => {
    item; // $ExpectType number
    index; // $ExpectType string
    obj; // $ExpectType Record<string, number>
    return String(item);
});

// @ts-expect-error
Sfdc.canvas.map(1, (item, index, arr) => {});

Sfdc.canvas.values([1, 2, 3, 4]); // $ExpectType number[]
Sfdc.canvas.values({ a: 1, b: 2, c: 3 }); // $ExpectType number[]
// @ts-expect-error
Sfdc.canvas.values(1);

Sfdc.canvas.slice([1, 2, 3, 4]); // $ExpectType number[]
Sfdc.canvas.slice([1, 2, 3, 4], 0); // $ExpectType number[]
Sfdc.canvas.slice([1, 2, 3, 4], 0, 1); // $ExpectType number[]
// @ts-expect-error
Sfdc.canvas.slice(0, 0, 0);

Sfdc.canvas.toArray(undefined); // $ExpectType []
Sfdc.canvas.toArray(null); // $ExpectType []
Sfdc.canvas.toArray([1, 2, 3, 4]); // $ExpectType number[]
Sfdc.canvas.toArray({ a: 1, b: 2, c: 3 }); // $ExpectType number[]
// @ts-expect-error
Sfdc.canvas.toArray(1);

Sfdc.canvas.size(undefined); // $ExpectType number
Sfdc.canvas.size(null); // $ExpectType number
Sfdc.canvas.size([1, 2, 3, 4]); // $ExpectType number
Sfdc.canvas.size({ a: 1, b: 2, c: 3 }); // $ExpectType number
// @ts-expect-error
Sfdc.canvas.size(1);

Sfdc.canvas.indexOf([1, 2, 3, 4], 3); // $ExpectType number
// @ts-expect-error
Sfdc.canvas.indexOf([1, 2, 3, 4], 'a');

Sfdc.canvas.isEmpty(null); // $ExpectType boolean
Sfdc.canvas.isEmpty(''); // $ExpectType boolean
Sfdc.canvas.isEmpty(1); // $ExpectType boolean
Sfdc.canvas.isEmpty([]); // $ExpectType boolean
Sfdc.canvas.isEmpty('test'); // $ExpectType boolean
Sfdc.canvas.isEmpty(['a']); // $ExpectType boolean

Sfdc.canvas.remove([1, 2, 3, 4], 3); // $ExpectType number[]
// @ts-expect-error
Sfdc.canvas.remove([1, 2, 3, 4], 'a');

Sfdc.canvas.param([1, 2, 3, 4], true); // $ExpectType string
Sfdc.canvas.param([1, 2, 3, 4]); // $ExpectType string
Sfdc.canvas.param({ a: 1, b: 2, c: 3 }, true); // $ExpectType string
Sfdc.canvas.param({ a: 1, b: 2, c: 3 }); // $ExpectType string
// @ts-expect-error
Sfdc.canvas.param(1);

Sfdc.canvas.objectify('a=1&b=2'); // $ExpectType Record<string, string>
// @ts-expect-error
Sfdc.canvas.objectify(1);

Sfdc.canvas.stripUrl('http://foo'); // $ExpectType string
// @ts-expect-error
Sfdc.canvas.stripUrl(1);

Sfdc.canvas.query('http://foo', 'a=1&b=2'); // $ExpectType string
// @ts-expect-error
Sfdc.canvas.query('http://foo', 1);
// @ts-expect-error
Sfdc.canvas.query(1, 'a=1&b=2');

Sfdc.canvas.extend({ a: 1 }, { b: 2 }); // $ExpectType { a: number; } & { b: number; }
Sfdc.canvas.extend({ a: 1 }, { b: 2 }, { c: 3 }); // $ExpectType { a: number; } & { b: number; } & { c: number; }
// @ts-expect-error
Sfdc.canvas.extend({ a: 1 }, 'a');
// @ts-expect-error
Sfdc.canvas.extend({ a: 1 });

Sfdc.canvas.endsWith('hello world', 'world'); // $ExpectType boolean
Sfdc.canvas.endsWith('hello world', 'foo'); // $ExpectType boolean
// @ts-expect-error
Sfdc.canvas.endsWith('hello world', 1);

Sfdc.canvas.capitalize('hello world'); // $ExpectType string
// @ts-expect-error
Sfdc.canvas.capitalize(1);

Sfdc.canvas.uncapitalize('hello world'); // $ExpectType string
// @ts-expect-error
Sfdc.canvas.uncapitalize(1);

Sfdc.canvas.decode('abcedf'); // $ExpectType string
// @ts-expect-error
Sfdc.canvas.decode(1);

Sfdc.canvas.escapeToUTF8('abcedf'); // $ExpectType string
// @ts-expect-error
Sfdc.canvas.escapeToUTF8(1);

Sfdc.canvas.validEventName('abcedf', 'foo'); // $ExpectType number
Sfdc.canvas.validEventName('abcedf', ['foo']); // $ExpectType number
// @ts-expect-error
Sfdc.canvas.validEventName(1, 'foo');
// @ts-expect-error
Sfdc.canvas.validEventName('abcedf', 1);

Sfdc.canvas.prototypeOf(1); // $ExpectType object | null

Sfdc.canvas.module('foo', { a: 1 }); // $ExpectType typeof canvas
// @ts-expect-error
Sfdc.canvas.module(1, { a: 1 });

Sfdc.canvas.document(); // $ExpectType Document

Sfdc.canvas.byId('foo'); // $ExpectType HTMLElement
// @ts-expect-error
Sfdc.canvas.byId(1);

Sfdc.canvas.byClass('foo'); // $ExpectType HTMLElement
// @ts-expect-error
Sfdc.canvas.byClass(1);

const el = document.createElement('div');
Sfdc.canvas.attr(el, 'foo'); // $ExpectType string
// @ts-expect-error
Sfdc.canvas.attr(el, 1);
// @ts-expect-error
Sfdc.canvas.attr(1, 'foo');

Sfdc.canvas.onReady(() => {}); // $ExpectType void

// =============================================================================
// Sfdc.Sfdc.canvas.client
// =============================================================================

// $ExpectType void
Sfdc.canvas.client.ctx(response => {
    response; // $ExpectType Response<string | Context>
}, CLIENT);

// $ExpectType void
Sfdc.canvas.client.ajax('/foo', {
    client: CLIENT,
    success: (data: Sfdc.canvas.Response<unknown>) => {
        data; // $ExpectType Response<unknown>
    },
});

// $ExpectType void
Sfdc.canvas.client.ajax('/foo', {
    client: CLIENT,
    method: 'POST',
    async: true,
    contentType: 'text/html',
    headers: { foo: 'bar' },
    data: JSON.stringify({ hello: 'world' }),
    success: (data: Sfdc.canvas.Response<unknown>) => {
        data; // $ExpectType Response<unknown>
    },
});

Sfdc.canvas.client.token(); // $ExpectType string | null
Sfdc.canvas.client.token('foo'); // $ExpectType string | null
Sfdc.canvas.client.token(null); // $ExpectType string | null
// @ts-expect-error
Sfdc.canvas.client.token(123);

Sfdc.canvas.client.version(); // $ExpectType Version

Sfdc.canvas.client.resize(CLIENT); // $ExpectType void
Sfdc.canvas.client.resize(CLIENT, { width: '5px', height: '5px' }); // $ExpectType void
// @ts-expect-error
Sfdc.canvas.client.resize(CLIENT, {});

Sfdc.canvas.client.size(); // $ExpectType Size

Sfdc.canvas.client.autogrow(CLIENT); // $ExpectType void
Sfdc.canvas.client.autogrow(CLIENT, true); // $ExpectType void
Sfdc.canvas.client.autogrow(CLIENT, false); // $ExpectType void
Sfdc.canvas.client.autogrow(CLIENT, true, 500); // $ExpectType void
// @ts-expect-error
Sfdc.canvas.client.autogrow(CLIENT, 500);

// $ExpectType void
Sfdc.canvas.client.subscribe(CLIENT, {
    name: 'foo.bar',
    onData: (event: unknown) => {
        event; // $ExpectType unknown
    },
});

// $ExpectType void
Sfdc.canvas.client.subscribe(CLIENT, [
    {
        name: 'foo.bar',
        onData: (event: unknown) => {
            event; // $ExpectType unknown
        },
    },
]);

// @ts-expect-error
Sfdc.canvas.client.subscribe(CLIENT, {
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
Sfdc.canvas.client.subscribe(CLIENT, {
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
Sfdc.canvas.client.subscribe(CLIENT, [
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

Sfdc.canvas.client.unsubscribe(CLIENT, 'foo.bar'); // $ExpectType void

// $ExpectType void
Sfdc.canvas.client.unsubscribe(CLIENT, {
    name: 'foo.bar',
});

// $ExpectType void
Sfdc.canvas.client.unsubscribe(CLIENT, {
    name: 'sfdc.streamingapi',
    params: {
        topic: 'foo.bar',
    },
});

// @ts-expect-error
Sfdc.canvas.client.unsubscribe(CLIENT, {
    name: 'sfdc.streamingapi',
    params: {},
});

// $ExpectType void
Sfdc.canvas.client.unsubscribe(CLIENT, [
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
Sfdc.canvas.client.publish(CLIENT, {
    name: 'foo',
    payload: { hello: 'world' },
});

// @ts-expect-error
Sfdc.canvas.client.publish(CLIENT, {
    name: 'foo',
});

Sfdc.canvas.client.signedrequest(); // $ExpectType SignedRequest

// $ExpectType SignedRequest
Sfdc.canvas.client.signedrequest({
    context: CONTEXT,
    client: CLIENT,
    algorithm: 'HMACSHA256',
    userId: '005x0000001SyyEAAS',
    issuedAt: null,
});

// $ExpectType void
Sfdc.canvas.client.refreshSignedRequest(data => {
    data; // $ExpectType Response<{ response: string; }>
});

Sfdc.canvas.client.repost(); // $ExpectType void
Sfdc.canvas.client.repost(true); // $ExpectType void
Sfdc.canvas.client.repost(false); // $ExpectType void

// =============================================================================
// Sfdc.Sfdc.canvas.console
// =============================================================================

Sfdc.canvas.console.enable(); // $ExpectType void

Sfdc.canvas.console.disable(); // $ExpectType void

Sfdc.canvas.console.log('hello'); // $ExpectType void
Sfdc.canvas.console.log('hello', 'world'); // $ExpectType void
Sfdc.canvas.console.log(['hello', 'world']); // $ExpectType void
Sfdc.canvas.console.log({ hello: 'world' }); // $ExpectType void
Sfdc.canvas.console.log(12345); // $ExpectType void

Sfdc.canvas.console.error(new Error('hello')); // $ExpectType void
Sfdc.canvas.console.error('hello'); // $ExpectType void
Sfdc.canvas.console.error('hello', 'world'); // $ExpectType void
Sfdc.canvas.console.error(['hello', 'world']); // $ExpectType void
Sfdc.canvas.console.error({ hello: 'world' }); // $ExpectType void
Sfdc.canvas.console.error(12345); // $ExpectType void

// =============================================================================
// Sfdc.Sfdc.canvas.cookies
// =============================================================================

Sfdc.canvas.cookies.set('foo', 'bar'); // $ExpectType void
Sfdc.canvas.cookies.set('foo', 'bar', 300); // $ExpectType void
// @ts-expect-error
Sfdc.canvas.cookies.set('foo', 300);

Sfdc.canvas.cookies.get('foo'); // $ExpectType string
// @ts-expect-error
Sfdc.canvas.cookies.get(1);

Sfdc.canvas.cookies.remove('foo'); // $ExpectType void
// @ts-expect-error
Sfdc.canvas.cookies.remove(1);

// =============================================================================
// Sfdc.Sfdc.canvas.oauth
// =============================================================================

Sfdc.canvas.oauth.init(); // $ExpectType void

// $ExpectType void
Sfdc.canvas.oauth.login({
    uri: Sfdc.canvas.oauth.loginUrl(),
    params: {
        response_type: 'token',
        client_id: 'foo',
        redirect_uri: encodeURIComponent('https://foo/callback.html'),
    },
});

// $ExpectType void
Sfdc.canvas.oauth.login({
    uri: Sfdc.canvas.oauth.loginUrl(),
    params: {
        response_type: 'token',
        client_id: 'foo',
        redirect_uri: encodeURIComponent('https://foo/callback.html'),
        scope: 'foo bar',
    },
});

Sfdc.canvas.oauth.logout(); // $ExpectType void

Sfdc.canvas.oauth.loggedin(); // $ExpectType boolean

Sfdc.canvas.oauth.loginUrl(); // $ExpectType string

Sfdc.canvas.oauth.token(); // $ExpectType string | null
Sfdc.canvas.oauth.token(null); // $ExpectType string | null
Sfdc.canvas.oauth.token('foo'); // $ExpectType string | null
// @ts-expect-error
Sfdc.canvas.oauth.token(1);

Sfdc.canvas.oauth.instance(); // $ExpectType string | null
Sfdc.canvas.oauth.instance(null); // $ExpectType string | null
Sfdc.canvas.oauth.instance('foo'); // $ExpectType string | null
// @ts-expect-error
Sfdc.canvas.oauth.instance(1);

Sfdc.canvas.oauth.client(); // $ExpectType Client

Sfdc.canvas.oauth.checkChildWindowStatus(); // $ExpectType void

Sfdc.canvas.oauth.childWindowUnloadNotification('foo'); // $ExpectType void

// =============================================================================
// Sfdc.Sfdc.canvas.xd
// =============================================================================

Sfdc.canvas.xd.post('foo', 'http://test'); // $ExpectType void
Sfdc.canvas.xd.post('foo', 'http://test', window); // $ExpectType void

// @ts-expect-error
Sfdc.canvas.xd.post({}, 'http://test', window);

Sfdc.canvas.xd.receive((data: unknown) => {}); // $ExpectType void
Sfdc.canvas.xd.receive((data: unknown) => {}, 'origin'); // $ExpectType void

Sfdc.canvas.xd.remove(); // $ExpectType void
