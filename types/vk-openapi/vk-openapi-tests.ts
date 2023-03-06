// ----------------------------------------------------------------------------
// init

// @ts-expect-error
VK.init();

// @ts-expect-error
VK.init({});

// @ts-expect-error
VK.init({ apiId: '123' });

VK.init({ apiId: 123 });

VK.init({
    apiId: 123,
    // @ts-expect-error
    onlyWidgets: '123',
});

VK.init({ apiId: 123, onlyWidgets: true });

VK.init({
    apiId: 123,
    onlyWidgets: true,
    // @ts-expect-error
    status: '',
});

VK.init({ apiId: 123, onlyWidgets: true, status: false });

// ----------------------------------------------------------------------------
// Auth

// @ts-expect-error
VK.Auth();

// @ts-expect-error
VK.Auth.login();

// @ts-expect-error
VK.Auth.login(() => {});

VK.Auth.login(status => {
    // $ExpectType LoginStatus
    status;
    // $ExpectType "connected" | "not_authorized" | "unknown"
    status.status;
    // $ExpectType Session
    status.session;
    // $ExpectType number
    status.session.expire;
    // $ExpectType number
    status.session.mid;
    // $ExpectType string
    status.session.secret;
    // $ExpectType string
    status.session.sid;
    // $ExpectType string
    status.session.sig;
    // $ExpectType string
    status.session.user.id;
    // $ExpectType string
    status.session.user.href;
    // $ExpectType string
    status.session.user.domain;
    // $ExpectType string
    status.session.user.first_name;
    // $ExpectType string
    status.session.user.last_name;
    // $ExpectType string
    status.session.user.nickname;
}, 100);

// @ts-expect-error
VK.Auth.logout();

VK.Auth.logout(() => {});

VK.Auth.logout(
    () => {},
    // @ts-expect-error
    100,
);

VK.Auth.logout(status => {
    // $ExpectType EmptyLoginStatus
    status;
    // $ExpectType null
    status.session;
    // $ExpectType "unknown"
    status.status;
    // $ExpectType undefined
    status.settings;
});

// @ts-expect-error
VK.Auth.revokeGrants();

VK.Auth.revokeGrants(() => {});

VK.Auth.revokeGrants(
    () => {},
    // @ts-expect-error
    100,
);

VK.Auth.revokeGrants(status => {
    // $ExpectType EmptyLoginStatus
    status;
    // $ExpectType null
    status.session;
    // $ExpectType "unknown"
    status.status;
    // $ExpectType undefined
    status.settings;
});

// @ts-expect-error
VK.Auth.getLoginStatus();

VK.Auth.getLoginStatus(() => {});

VK.Auth.getLoginStatus(
    () => {},
    // @ts-expect-error
    100,
);

VK.Auth.getLoginStatus(status => {
    // $ExpectType LoginStatus
    status;
});

// @ts-expect-error
VK.Auth.getSession();

VK.Auth.getSession(() => {});

VK.Auth.getSession(
    () => {},
    // @ts-expect-error
    100,
);

VK.Auth.getSession(session => {
    // $ExpectType Session
    session;
    // $ExpectType number
    session.expire;
    // $ExpectType number
    session.mid;
    // $ExpectType string
    session.secret;
    // $ExpectType string
    session.sid;
    // $ExpectType string
    session.sig;
    // $ExpectType string
    session.user.id;
    // $ExpectType string
    session.user.href;
    // $ExpectType string
    session.user.domain;
    // $ExpectType string
    session.user.first_name;
    // $ExpectType string
    session.user.last_name;
    // $ExpectType string
    session.user.nickname;
});

// ----------------------------------------------------------------------------
// Api

// @ts-expect-error
VK.Api();

// @ts-expect-error
VK.Api.call();

// @ts-expect-error
VK.Api.call('method');

// @ts-expect-error
VK.Api.call('method', {});

VK.Api.call(
    'method',
    // @ts-expect-error
    {},

    (data: any) => {},
);

VK.Api.call('method', { v: '5' }, (data: any) => {});

// ----------------------------------------------------------------------------
// Widgets

// @ts-expect-error
VK.Widgets();

// ----------------------------------------------------------------------------
// Widgets.ContactUs

// @ts-expect-error
VK.Widgets.ContactUs();

// @ts-expect-error
VK.Widgets.ContactUs('test');

// @ts-expect-error
VK.Widgets.ContactUs('test', undefined);

VK.Widgets.ContactUs('test', undefined, 10);

VK.Widgets.ContactUs('test', {}, 10);

VK.Widgets.ContactUs(
    'test',
    // @ts-expect-error
    { height: 100 },
    10,
);

VK.Widgets.ContactUs(
    'test',
    // @ts-expect-error
    { text: 123 },
    10,
);

VK.Widgets.ContactUs(
    'test',
    {
        height: 22,
        text: 'text',
    },
    10,
);

// ----------------------------------------------------------------------------
// Widgets.Comments

// @ts-expect-error
VK.Widgets.Comments();

// @ts-expect-error
VK.Widgets.Comments(123);

// @ts-expect-error
VK.Widgets.Comments(null);

// @ts-expect-error
VK.Widgets.Comments(() => 'test');

// @ts-expect-error
VK.Widgets.Comments({});

VK.Widgets.Comments('test');

VK.Widgets.Comments('test', undefined);

VK.Widgets.Comments(
    'test',
    undefined,
    // @ts-expect-error
    10,
);

VK.Widgets.Comments(
    'test',
    {},
    // @ts-expect-error
    10,
);

VK.Widgets.Comments(
    'test',
    // @ts-expect-error
    { width: '111', height: '222', limit: 'no', attach: 111, autoPublish: 3, norealtime: 'zzz', pageUrl: () => void 0 },
);

VK.Widgets.Comments(
    'test',
    // @ts-expect-error
    { width: null, height: {}, limit: () => 1, attach: {}, autoPublish: 'zzz', norealtime: 200, pageUrl: 1234 },
);

VK.Widgets.Comments('test', {
    width: 100,
    height: 10,
    limit: 4,
    attach: 'test',
    autoPublish: 0,
    norealtime: 1,
    pageUrl: '/page',
});

// ----------------------------------------------------------------------------
// Widgets.Post

// @ts-expect-error
VK.Widgets.Post();

// @ts-expect-error
VK.Widgets.Post(null);

// @ts-expect-error
VK.Widgets.Post(false);

// @ts-expect-error
VK.Widgets.Post(true);

// @ts-expect-error
VK.Widgets.Post(123);

// @ts-expect-error
VK.Widgets.Post('test');

// @ts-expect-error
VK.Widgets.Post({});

// @ts-expect-error
VK.Widgets.Post(() => '111');

// @ts-expect-error
VK.Widgets.Post('test', 100);

// @ts-expect-error
VK.Widgets.Post('test', '100');

// @ts-expect-error
VK.Widgets.Post('test', true);

// @ts-expect-error
VK.Widgets.Post('test', false);

VK.Widgets.Post('test', 100, 20, 'hash');

VK.Widgets.Post(
    'test',
    100,
    20,
    'hash',
    // @ts-expect-error
    { width: 'test' },
);

VK.Widgets.Post(
    'test',
    100,
    20,
    'hash',
    // @ts-expect-error
    { width: true },
);

VK.Widgets.Post(
    'test',
    100,
    20,
    'hash',
    // @ts-expect-error
    { width: false },
);

VK.Widgets.Post(
    'test',
    100,
    20,
    'hash',
    // @ts-expect-error
    { width: {} },
);

VK.Widgets.Post(
    'test',
    100,
    20,
    'hash',
    // @ts-expect-error
    { width: () => 100 },
);

VK.Widgets.Post('test', 100, 20, 'hash', { width: 100 });

// ----------------------------------------------------------------------------
// Widgets.Group

// @ts-expect-error
VK.Widgets.Group();

// @ts-expect-error
VK.Widgets.Group('test');

// @ts-expect-error
VK.Widgets.Group('test', undefined);

// @ts-expect-error
VK.Widgets.Group('test', undefined, '100');

// @ts-expect-error
VK.Widgets.Group('test', undefined, {});

VK.Widgets.Group('test', undefined, 100);

VK.Widgets.Group(
    'test',
    // @ts-expect-error
    { width: 'test', no_cover: 'false', wide: 'wat', color1: 111, color2: 222, color3: 333, mode: 1, height: 333 },
    100,
);

VK.Widgets.Group(
    'test',
    {
        width: 100,
        no_cover: 1,
        wide: 0,
        color1: 'dc143f',
        color2: '2196f3',
        color3: 'ff639f',
        mode: 4,
        height: 100,
    },
    100,
);

// ----------------------------------------------------------------------------
// Widgets.Like

// @ts-expect-error
VK.Widgets.Like();

// @ts-expect-error
VK.Widgets.Like(null);

// @ts-expect-error
VK.Widgets.Like(true);

// @ts-expect-error
VK.Widgets.Like(false);

// @ts-expect-error
VK.Widgets.Like(111);

VK.Widgets.Like('test');

VK.Widgets.Like('test', {});

VK.Widgets.Like(
    'test',
    // @ts-expect-error
    { height: 100, verb: 3, pageTitle: 123, pageUrl: true, pageImage: null },
);

VK.Widgets.Like(
    'test',
    // @ts-expect-error
    { height: '30', verb: 'test', pageTitle: false, pageUrl: {}, pageImage: () => void 0 },
);

VK.Widgets.Like('test', {
    height: 20,
    verb: 1,
    pageTitle: 'hk4',
    pageUrl: '/dt',
    pageImage: 'path/to/some/image.png',
});

// ----------------------------------------------------------------------------
// Widgets.Recommended

// @ts-expect-error
VK.Widgets.Recommended();

// @ts-expect-error
VK.Widgets.Recommended(123);

// @ts-expect-error
VK.Widgets.Recommended(null);

// @ts-expect-error
VK.Widgets.Recommended(undefined);

// @ts-expect-error
VK.Widgets.Recommended({});

VK.Widgets.Recommended('element');

VK.Widgets.Recommended(
    'element',
    // @ts-expect-error
    { limit: 'test', max: 'no', period: 'never' },
);

VK.Widgets.Recommended(
    'element',
    // @ts-expect-error
    { limit: false, max: true, period: 10 },
);

VK.Widgets.Recommended('element', {
    limit: 5,
    max: 10,
    period: 'day',
});

// @ts-expect-error
VK.Widgets.Recommended('element', {}, false);

// @ts-expect-error
VK.Widgets.Recommended('element', {}, '');

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 123);

// @ts-expect-error
VK.Widgets.Recommended('element', {}, null);

VK.Widgets.Recommended('element', {}, 0);

VK.Widgets.Recommended('element', {}, 1);

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 0, 'wat');

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 0, 1);

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 0, true);

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 0, {});

VK.Widgets.Recommended('element', {}, 0, 'likes');

VK.Widgets.Recommended('element', {}, 0, 'friend_likes');

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 0, 'likes', '/dev/null');

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 0, 'likes', 100);

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 0, 'likes', true);

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 0, 'likes', {});

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 0, 'likes', {});

// @ts-expect-error
VK.Widgets.Recommended('element', {}, 0, 'likes', null);

VK.Widgets.Recommended('element', {}, 0, 'likes', 'blank');

VK.Widgets.Recommended('element', {}, 0, 'likes', 'parent');

VK.Widgets.Recommended('element', {}, 0, 'likes', 'top');

// ----------------------------------------------------------------------------
// Widgets.Poll

// @ts-expect-error
VK.Widgets.Poll();

// @ts-expect-error
VK.Widgets.Poll('test');

// @ts-expect-error
VK.Widgets.Poll(123);

// @ts-expect-error
VK.Widgets.Poll(false);

// @ts-expect-error
VK.Widgets.Poll({});

// @ts-expect-error
VK.Widgets.Poll(null);

VK.Widgets.Poll(
    'blackHole',
    {},
    // @ts-expect-error
    100,
);

VK.Widgets.Poll(
    'darling',
    {},
    // @ts-expect-error
    {},
);

VK.Widgets.Poll(
    'blackHole',
    {},
    // @ts-expect-error
    false,
);

VK.Widgets.Poll('wiredLife', {}, 'poll');

VK.Widgets.Poll(
    'wiredLife',
    // @ts-expect-error
    { pageUrl: 123, width: '123' },
    'poll',
);

VK.Widgets.Poll(
    'wiredLife',
    // @ts-expect-error
    { pageUrl: false, width: () => 123 },
    'poll',
);

VK.Widgets.Poll(
    'wiredLife',
    // @ts-expect-error
    { pageUrl: false, width: null },
    'poll',
);

VK.Widgets.Poll(
    'wiredLife',
    {
        pageUrl: '/harmony',
        width: 100,
    },
    'poll',
);

// ----------------------------------------------------------------------------
// Widgets.Auth

// @ts-expect-error
VK.Widgets.Auth();

// @ts-expect-error
VK.Widgets.Auth(123);

// @ts-expect-error
VK.Widgets.Auth(null);

// @ts-expect-error
VK.Widgets.Auth(true);

VK.Widgets.Auth('auth');

VK.Widgets.Auth(
    'auth',
    // @ts-expect-error
    { authUrl: 123, onAuth: () => void 0, width: 'some' },
);

VK.Widgets.Auth('auth', {
    authUrl: '/mya/nee',
    width: 100,
});

VK.Widgets.Auth('auth', {
    onAuth: authData => {
        // $ExpectType AuthUserData
        authData;
        // $ExpectType number
        authData.uid;
        // $ExpectType string
        authData.first_name;
        // $ExpectType string
        authData.last_name;
        // $ExpectType string
        authData.photo;
        // $ExpectType string
        authData.photo_rec;
        // $ExpectType string
        authData.hash;
    },
    width: 100,
});

// ----------------------------------------------------------------------------
// Widgets.Subscribe

// @ts-expect-error
VK.Widgets.Subscribe();

// @ts-expect-error
VK.Widgets.Subscribe(null);

// @ts-expect-error
VK.Widgets.Subscribe(false);

// @ts-expect-error
VK.Widgets.Subscribe(123);

// @ts-expect-error
VK.Widgets.Subscribe('subber');

// @ts-expect-error
VK.Widgets.Subscribe('element', 123);

// @ts-expect-error
VK.Widgets.Subscribe('element', false);

// @ts-expect-error
VK.Widgets.Subscribe('element', 'zsh');

VK.Widgets.Subscribe(
    'element',
    {},
    // @ts-expect-error
    null,
);

VK.Widgets.Subscribe(
    'element',
    {},
    // @ts-expect-error
    'user',
);

VK.Widgets.Subscribe(
    'element',
    {},
    // @ts-expect-error
    false,
);

VK.Widgets.Subscribe(
    'element',
    {},
    // @ts-expect-error
    () => 123,
);

VK.Widgets.Subscribe('element', {}, 123);

VK.Widgets.Subscribe(
    'element',
    // @ts-expect-error
    { mode: 3, soft: 'test' },
    123,
);

VK.Widgets.Subscribe(
    'element',
    // @ts-expect-error
    { mode: null, soft: {} },
    123,
);

VK.Widgets.Subscribe(
    'element',
    // @ts-expect-error
    { mode: () => 1, soft: false },
    123,
);

VK.Widgets.Subscribe(
    'element',
    {
        mode: 0,
        soft: 1,
    },
    123,
);

// ----------------------------------------------------------------------------
// Widgets.CommunityMessages

// @ts-expect-error
VK.Widgets.CommunityMessages();

// @ts-expect-error
VK.Widgets.CommunityMessages(null);

// @ts-expect-error
VK.Widgets.CommunityMessages(1);

// @ts-expect-error
VK.Widgets.CommunityMessages(false);

// @ts-expect-error
VK.Widgets.CommunityMessages(true);

// @ts-expect-error
VK.Widgets.CommunityMessages({});

// @ts-expect-error
VK.Widgets.CommunityMessages('test');

VK.Widgets.CommunityMessages(
    'test',
    // @ts-expect-error
    {},
);

VK.Widgets.CommunityMessages(
    'test',
    // @ts-expect-error
    null,
);

VK.Widgets.CommunityMessages(
    'test',
    // @ts-expect-error
    true,
);

VK.Widgets.CommunityMessages(
    'test',
    // @ts-expect-error
    false,
);

VK.Widgets.CommunityMessages(
    'test',
    // @ts-expect-error
    'zxc',
);

VK.Widgets.CommunityMessages('test', 123);

VK.Widgets.CommunityMessages('test', 123, {});

VK.Widgets.CommunityMessages('test', 123, {
    onCanNotWrite: reason => {
        // $ExpectType: 'offline' | 'no_access' | 'disabled_messages' | 'cant_write'
        reason;
    },
    welcomeScreen: 0,
    expandTimeout: 100,
    widgetPosition: '',
    buttonType: '',
    tooltipButtonText: '',
});

VK.Widgets.CommunityMessages('test', 123, {
    expanded: 1,
    disableButtonTooltip: 1,
    disableNewMessagesSound: 1,
    disableExpandChatSound: 1,
    disableTitleChange: 1,
});

VK.Widgets.CommunityMessages(
    'test',
    123,
    // prettier-ignore
    // @ts-expect-error
    { expanded: 0, disableButtonTooltip: 0, disableNewMessagesSound: 0, disableExpandChatSound: 0, disableTitleChange: 0 },
);

// ----------------------------------------------------------------------------
// Widgets.Playlist

// @ts-expect-error
VK.Widgets.Playlist();

// @ts-expect-error
VK.Widgets.Playlist('element');

// @ts-expect-error
VK.Widgets.Playlist('element', 1);

// @ts-expect-error
VK.Widgets.Playlist('element', 1, 10);

VK.Widgets.Playlist(
    // @ts-expect-error
    null,
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    // @ts-expect-error
    true,
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    // @ts-expect-error
    false,
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    // @ts-expect-error
    123,
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    // @ts-expect-error
    {},
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    // @ts-expect-error
    () => void 0,
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // @ts-expect-error
    null,
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // @ts-expect-error
    true,
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // @ts-expect-error
    false,
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // @ts-expect-error
    'true',
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // @ts-expect-error
    () => void 0,
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // @ts-expect-error
    {},
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // @ts-expect-error
    null,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // @ts-expect-error
    true,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // @ts-expect-error
    false,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // @ts-expect-error
    {},
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // @ts-expect-error
    '',
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // @ts-expect-error
    () => 123,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // @ts-expect-error
    null,
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // @ts-expect-error
    true,
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // @ts-expect-error
    false,
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // @ts-expect-error
    123,
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // @ts-expect-error
    {},
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // @ts-expect-error
    () => '',
);

VK.Widgets.Playlist('element', 1, 10, 'hash');

VK.Widgets.Playlist('element', 1, 10, 'hash', {});

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // @ts-expect-error
    { width: null },
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // @ts-expect-error
    { width: true },
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // @ts-expect-error
    { width: false },
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // @ts-expect-error
    { width: '123' },
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // @ts-expect-error
    { width: {} },
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // @ts-expect-error
    { width: () => 213 },
);

VK.Widgets.Playlist('element', 1, 10, 'hash', { width: 100 });

// ----------------------------------------------------------------------------
// Widgets.AllowMessagesFromCommunity

// @ts-expect-error
VK.Widgets.AllowMessagesFromCommunity();

// @ts-expect-error
VK.Widgets.AllowMessagesFromCommunity('element');

// @ts-expect-error
VK.Widgets.AllowMessagesFromCommunity('element', {});

VK.Widgets.AllowMessagesFromCommunity('element', null, 1);

VK.Widgets.AllowMessagesFromCommunity('element', undefined, 1);

VK.Widgets.AllowMessagesFromCommunity('element', {}, 1);

VK.Widgets.AllowMessagesFromCommunity(
    // @ts-expect-error
    null,
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    // @ts-expect-error
    true,
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    // @ts-expect-error
    false,
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    // @ts-expect-error
    123,
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    // @ts-expect-error
    {},
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    // @ts-expect-error
    () => '',
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    '',
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    true,
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    false,
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    1,
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    () => {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // @ts-expect-error
    null,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // @ts-expect-error
    true,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // @ts-expect-error
    false,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // @ts-expect-error
    '',
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // @ts-expect-error
    {},
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // @ts-expect-error
    () => 123,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    { height: null },
    100,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    { height: true },
    100,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    { height: false },
    100,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    { height: 100 },
    100,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    { height: {} },
    100,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // @ts-expect-error
    { height: {} },
    100,
);

VK.Widgets.AllowMessagesFromCommunity('element', { height: 22 }, 100);

VK.Widgets.AllowMessagesFromCommunity('element', { height: 24 }, 100);

VK.Widgets.AllowMessagesFromCommunity('element', { height: 30 }, 100);

// ----------------------------------------------------------------------------
// Widgets.App

// @ts-expect-error
VK.Widgets.App();

// @ts-expect-error
VK.Widgets.App('element');

VK.Widgets.App('element', 100);

VK.Widgets.App(
    // @ts-expect-error
    null,
    100,
);

VK.Widgets.App(
    // @ts-expect-error
    true,
    100,
);

VK.Widgets.App(
    // @ts-expect-error
    false,
    100,
);

VK.Widgets.App(
    // @ts-expect-error
    123,
    100,
);

VK.Widgets.App(
    // @ts-expect-error
    {},
    100,
);

VK.Widgets.App(
    // @ts-expect-error
    () => '',
    100,
);

VK.Widgets.App(
    'element',
    // @ts-expect-error
    null,
);

VK.Widgets.App(
    'element',
    // @ts-expect-error
    true,
);

VK.Widgets.App(
    'element',
    // @ts-expect-error
    false,
);

VK.Widgets.App(
    'element',
    // @ts-expect-error
    '',
);

VK.Widgets.App(
    'element',
    // @ts-expect-error
    {},
);

VK.Widgets.App(
    'element',
    // @ts-expect-error
    () => 123,
);

VK.Widgets.App('element', 100, {});

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { height: null },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { height: true },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { height: false },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { height: '' },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { height: {} },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { height: () => 123 },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { mode: null },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { mode: true },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { mode: false },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { mode: {} },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { mode: '' },
);

VK.Widgets.App(
    'element',
    100,
    // @ts-expect-error
    { mode: () => 1 },
);

VK.Widgets.App('element', 100, { mode: 1 });

VK.Widgets.App('element', 100, { mode: 2 });

VK.Widgets.App('element', 100, { mode: 3 });

VK.Widgets.App('element', 100, { height: 100, mode: 1 });

VK.Widgets.App('element', 100, { height: 100, mode: 2 });

VK.Widgets.App('element', 100, { height: 100, mode: 3 });

// ----------------------------------------------------------------------------
// Widgets.Article

// @ts-expect-error
VK.Widgets.Article();

// @ts-expect-error
VK.Widgets.Article('element');

VK.Widgets.Article('element', 'article');

VK.Widgets.Article(
    // @ts-expect-error
    null,
    'article',
);

VK.Widgets.Article(
    // @ts-expect-error
    true,
    'article',
);

VK.Widgets.Article(
    // @ts-expect-error
    false,
    'article',
);

VK.Widgets.Article(
    // @ts-expect-error
    100,
    'article',
);

VK.Widgets.Article(
    // @ts-expect-error
    {},
    'article',
);

VK.Widgets.Article(
    // @ts-expect-error
    () => '',
    'article',
);

VK.Widgets.Article(
    'element',
    // @ts-expect-error
    null,
);

VK.Widgets.Article(
    'element',
    // @ts-expect-error
    true,
);

VK.Widgets.Article(
    'element',
    // @ts-expect-error
    false,
);

VK.Widgets.Article(
    'element',
    // @ts-expect-error
    100,
);

VK.Widgets.Article(
    'element',
    // @ts-expect-error
    {},
);

VK.Widgets.Article(
    'element',
    // @ts-expect-error
    () => '',
);

// ----------------------------------------------------------------------------
// Widgets.Bookmarks

// @ts-expect-error
VK.Widgets.Bookmarks();

VK.Widgets.Bookmarks('element');

VK.Widgets.Bookmarks(
    // @ts-expect-error
    null,
);

VK.Widgets.Bookmarks(
    // @ts-expect-error
    true,
);

VK.Widgets.Bookmarks(
    // @ts-expect-error
    false,
);

VK.Widgets.Bookmarks(
    // @ts-expect-error
    100,
);

VK.Widgets.Bookmarks(
    // @ts-expect-error
    {},
);

VK.Widgets.Bookmarks(
    // @ts-expect-error
    () => '',
);

VK.Widgets.Bookmarks('element', {});

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { height: 100 },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { height: null },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { height: false },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { height: true },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { height: '' },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { height: {} },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { height: () => 18 },
);

VK.Widgets.Bookmarks('element', { height: 18 });

VK.Widgets.Bookmarks('element', { height: 20 });

VK.Widgets.Bookmarks('element', { height: 22 });

VK.Widgets.Bookmarks('element', { height: 24 });

VK.Widgets.Bookmarks('element', { height: 30 });

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { url: null },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { url: true },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { url: false },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { url: 100 },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { url: {} },
);

VK.Widgets.Bookmarks(
    'element',
    // @ts-expect-error
    { url: () => '' },
);

VK.Widgets.Bookmarks('element', { url: '/doggo' });

// ----------------------------------------------------------------------------
// Widgets.Podcast

// @ts-expect-error
VK.Widgets.Podcast();

// @ts-expect-error
VK.Widgets.Podcast('element');

// @ts-expect-error
VK.Widgets.Podcast('element', 'episode');

VK.Widgets.Podcast('element', 'episode', 'hash');

VK.Widgets.Podcast(
    // @ts-expect-error
    null,
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    // @ts-expect-error
    true,
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    // @ts-expect-error
    false,
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    // @ts-expect-error
    100,
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    // @ts-expect-error
    {},
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    // @ts-expect-error
    () => '',
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // @ts-expect-error
    null,
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // @ts-expect-error
    true,
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // @ts-expect-error
    false,
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // @ts-expect-error
    100,
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // @ts-expect-error
    {},
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // @ts-expect-error
    () => '',
    'hash',
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // @ts-expect-error
    null,
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // @ts-expect-error
    true,
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // @ts-expect-error
    false,
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // @ts-expect-error
    100,
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // @ts-expect-error
    {},
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // @ts-expect-error
    () => '',
);

// ----------------------------------------------------------------------------
// Observer

// @ts-expect-error
VK.Observer();

// @ts-expect-error
VK.Observer.subscribe();

// @ts-expect-error
VK.Observer.unsubscribe();

// @ts-expect-error
VK.Observer.unsubscribe();

// @ts-expect-error
VK.Observer.subscribe('event.not.found');

// @ts-expect-error
VK.Observer.subscribe('event.not.found', () => void 0);

// @ts-expect-error
VK.Observer.unsubscribe('404');

// @ts-expect-error
VK.Observer.subscribe('auth.login', data => {
    data;
});

// @ts-expect-error
VK.Observer.subscribe('auth.logout', data => {
    data;
});

// @ts-expect-error
VK.Observer.subscribe('auth.statusChange', data => {
    data;
});

// @ts-expect-error
VK.Observer.subscribe('auth.sessionChange', data => {
    data;
});

VK.Observer.subscribe('widgets.comments.new_comment', (num, lc, date, sign) => {
    // $ExpectType number
    num;
    // $ExpectType string
    lc;
    // $ExpectType string
    date;
    // $ExpectType string
    sign;
});

VK.Observer.subscribe('widgets.comments.delete_comment', (num, lc, date, sign) => {
    // $ExpectType number
    num;
    // $ExpectType string
    lc;
    // $ExpectType string
    date;
    // $ExpectType string
    sign;
});

// @ts-expect-error
VK.Observer.subscribe('widgets.groups.joined', data => {
    data;
});

// @ts-expect-error
VK.Observer.subscribe('widgets.groups.leaved', data => {
    data;
});

VK.Observer.subscribe('widgets.like.liked', likes => {
    // $ExpectType number
    likes;
});
VK.Observer.subscribe('widgets.like.unliked', likes => {
    // $ExpectType number
    likes;
});
VK.Observer.subscribe('widgets.like.shared', shares => {
    // $ExpectType number
    shares;
});
VK.Observer.subscribe('widgets.like.unshared', shares => {
    // $ExpectType number
    shares;
});

// @ts-expect-error
VK.Observer.subscribe('widgets.subscribed', data => {
    data;
});

// @ts-expect-error
VK.Observer.subscribe('widgets.unsubscribed', data => {
    data;
});

VK.Observer.subscribe('widgets.allowMessagesFromCommunity.allowed', data => {
    // $ExpectType number
    data;
});

VK.Observer.subscribe('widgets.allowMessagesFromCommunity.denied', data => {
    // $ExpectType number
    data;
});

VK.Observer.unsubscribe('auth.login');
VK.Observer.unsubscribe('auth.logout');
VK.Observer.unsubscribe('auth.statusChange');
VK.Observer.unsubscribe('auth.sessionChange');
VK.Observer.unsubscribe('widgets.comments.new_comment');
VK.Observer.unsubscribe('widgets.comments.delete_comment');
VK.Observer.unsubscribe('widgets.groups.joined');
VK.Observer.unsubscribe('widgets.groups.leaved');
VK.Observer.unsubscribe('widgets.like.liked');
VK.Observer.unsubscribe('widgets.like.unliked');
VK.Observer.unsubscribe('widgets.like.shared');
VK.Observer.unsubscribe('widgets.like.unshared');
VK.Observer.unsubscribe('widgets.subscribed');
VK.Observer.unsubscribe('widgets.unsubscribed');
VK.Observer.unsubscribe('widgets.allowMessagesFromCommunity.allowed');
VK.Observer.unsubscribe('widgets.allowMessagesFromCommunity.denied');

declare function handler(): void;
VK.Observer.unsubscribe('auth.login', handler);
VK.Observer.unsubscribe('auth.logout', handler);
VK.Observer.unsubscribe('auth.statusChange', handler);
VK.Observer.unsubscribe('auth.sessionChange', handler);
VK.Observer.unsubscribe('widgets.comments.new_comment', handler);
VK.Observer.unsubscribe('widgets.comments.delete_comment', handler);
VK.Observer.unsubscribe('widgets.groups.joined', handler);
VK.Observer.unsubscribe('widgets.groups.leaved', handler);
VK.Observer.unsubscribe('widgets.like.liked', handler);
VK.Observer.unsubscribe('widgets.like.unliked', handler);
VK.Observer.unsubscribe('widgets.like.shared', handler);
VK.Observer.unsubscribe('widgets.like.unshared', handler);
VK.Observer.unsubscribe('widgets.subscribed', handler);
VK.Observer.unsubscribe('widgets.unsubscribed', handler);
VK.Observer.unsubscribe('widgets.allowMessagesFromCommunity.allowed', handler);
VK.Observer.unsubscribe('widgets.allowMessagesFromCommunity.denied', handler);

// ----------------------------------------------------------------------------
// Retargeting

// @ts-expect-error
VK.Retargeting();

// ----------------------------------------------------------------------------
// Retargeting.Init

// @ts-expect-error
VK.Retargeting.Init();

// @ts-expect-error
VK.Retargeting.Init(null);

// @ts-expect-error
VK.Retargeting.Init(123);

// @ts-expect-error
VK.Retargeting.Init(true);

// @ts-expect-error
VK.Retargeting.Init(false);

// @ts-expect-error
VK.Retargeting.Init({});

VK.Retargeting.Init('some code');

// ----------------------------------------------------------------------------
// Retargeting.Hit

VK.Retargeting.Hit();

// @ts-expect-error
VK.Retargeting.Hit(null);

// @ts-expect-error
VK.Retargeting.Hit(123);

// @ts-expect-error
VK.Retargeting.Hit(false);

// @ts-expect-error
VK.Retargeting.Hit(true);

// @ts-expect-error
VK.Retargeting.Hit('test');

// @ts-expect-error
VK.Retargeting.Hit({});

// @ts-expect-error
VK.Retargeting.Hit(() => void 0);

// ----------------------------------------------------------------------------
// Retargeting.Event

// @ts-expect-error
VK.Retargeting.Event();

// @ts-expect-error
VK.Retargeting.Event(null);

// @ts-expect-error
VK.Retargeting.Event(true);

// @ts-expect-error
VK.Retargeting.Event(false);

// @ts-expect-error
VK.Retargeting.Event(123);

// @ts-expect-error
VK.Retargeting.Event({});

// @ts-expect-error
VK.Retargeting.Event(() => 'test');

VK.Retargeting.Event('test');

// ----------------------------------------------------------------------------
// Retargeting.Add

// @ts-expect-error
VK.Retargeting.Add();

// @ts-expect-error
VK.Retargeting.Add(null);

// @ts-expect-error
VK.Retargeting.Add(true);

// @ts-expect-error
VK.Retargeting.Add(false);

// @ts-expect-error
VK.Retargeting.Add('test');

// @ts-expect-error
VK.Retargeting.Add({});

// @ts-expect-error
VK.Retargeting.Add(() => 123);

VK.Retargeting.Add(123);

// ----------------------------------------------------------------------------
// Retargeting.ProductEvent

// @ts-expect-error
VK.Retargeting.ProductEvent();

// @ts-expect-error
VK.Retargeting.ProductEvent(null);

// @ts-expect-error
VK.Retargeting.ProductEvent(true);

// @ts-expect-error
VK.Retargeting.ProductEvent(false);

// @ts-expect-error
VK.Retargeting.ProductEvent('test');

// @ts-expect-error
VK.Retargeting.ProductEvent({});

// @ts-expect-error
VK.Retargeting.ProductEvent(() => 123);

// @ts-expect-error
VK.Retargeting.ProductEvent(123);

VK.Retargeting.ProductEvent(
    123,
    // @ts-expect-error
    null,
);

VK.Retargeting.ProductEvent(
    123,
    // @ts-expect-error
    true,
);

VK.Retargeting.ProductEvent(
    123,
    // @ts-expect-error
    false,
);

VK.Retargeting.ProductEvent(
    123,
    // @ts-expect-error
    () => 'test',
);

VK.Retargeting.ProductEvent(
    123,
    // @ts-expect-error
    'event_not_found',
);

VK.Retargeting.ProductEvent(123, 'view_home');
VK.Retargeting.ProductEvent(123, 'view_category');
VK.Retargeting.ProductEvent(123, 'view_product');
VK.Retargeting.ProductEvent(123, 'view_search');
VK.Retargeting.ProductEvent(123, 'view_other');
VK.Retargeting.ProductEvent(123, 'add_to_wishlist');
VK.Retargeting.ProductEvent(123, 'add_to_cart');
VK.Retargeting.ProductEvent(123, 'remove_from_wishlist');
VK.Retargeting.ProductEvent(123, 'remove_from_cart');
VK.Retargeting.ProductEvent(123, 'init_checkout');
VK.Retargeting.ProductEvent(123, 'add_payment_info');
VK.Retargeting.ProductEvent(123, 'purchase');

const product: vk.OpenAPI.Retargeting.Product = {
    // @ts-expect-error
    id: null,
    // @ts-expect-error
    group_id: null,
    // @ts-expect-error
    recommended_ids: null,
    // @ts-expect-error
    price: null,
    // @ts-expect-error
    price_old: null,
    // @ts-expect-error
    price_from: null,
};

const product2: vk.OpenAPI.Retargeting.Product = {
    // @ts-expect-error
    id: 1,
    // @ts-expect-error
    group_id: 10,
    // @ts-expect-error
    recommended_ids: 100,
    // @ts-expect-error
    price: '1000',
    // @ts-expect-error
    price_old: '10000',
    // @ts-expect-error
    price_from: true,
};

// @ts-expect-error
const product3: vk.OpenAPI.Retargeting.Product = {};

const product4: vk.OpenAPI.Retargeting.Product = {
    id: 'product',
    group_id: '1',
    recommended_ids: '10,11,12',
    price: 120,
    price_old: 140,
    price_from: 0,
};

const product5: vk.OpenAPI.Retargeting.Product = {
    id: 'product',
    group_id: '1',
    recommended_ids: '10,11,12',
    price: 120,
    price_old: 140,
    price_from: 1,
};

const params: vk.OpenAPI.Retargeting.ProductEventParams = {
    // @ts-expect-error
    products: null,
    // @ts-expect-error
    products_recommended_ids: null,
    // @ts-expect-error
    category_ids: null,
    // @ts-expect-error
    business_value: null,
    // @ts-expect-error
    currency_code: null,
    // @ts-expect-error
    total_price: null,
    // @ts-expect-error
    search_string: null,
};

const params2: vk.OpenAPI.Retargeting.ProductEventParams = {
    // @ts-expect-error
    products: {},
    // @ts-expect-error
    products_recommended_ids: 123,
    // @ts-expect-error
    category_ids: 100,
    // @ts-expect-error
    business_value: '100',
    // @ts-expect-error
    currency_code: 007,
    // @ts-expect-error
    total_price: '666',
    // @ts-expect-error
    search_string: 777,
};

const params3: vk.OpenAPI.Retargeting.ProductEventParams = {
    products: [product4, product5],
    products_recommended_ids: '1,2,3',
    category_ids: '10,66,97',
    business_value: 500,
    currency_code: 'JPY',
    total_price: 1500,
    search_string: 'aqua',
};

const params4: vk.OpenAPI.Retargeting.ProductEventParams = {};

VK.Retargeting.ProductEvent(123, 'purchase', params3);

VK.Retargeting.ProductEvent(123, 'purchase', params4);

// ----------------------------------------------------------------------------
// Goal

// @ts-expect-error
VK.Goal();

// @ts-expect-error
VK.Goal(null);

// @ts-expect-error
VK.Goal(true);

// @ts-expect-error
VK.Goal(false);

// @ts-expect-error
VK.Goal(123);

// @ts-expect-error
VK.Goal(() => 'test');

// @ts-expect-error
VK.Goal('goal_not_found');

VK.Goal('add_to_cart');
VK.Goal('add_to_wishlist');
VK.Goal('customize_product');
VK.Goal('initiate_checkout');
VK.Goal('add_payment_info');
VK.Goal('purchase');
VK.Goal('contact');
VK.Goal('lead');
VK.Goal('schedule');
VK.Goal('complete_registration');
VK.Goal('submit_application');
VK.Goal('start_trial');
VK.Goal('subscribe');
VK.Goal('page_view');
VK.Goal('view_content');
VK.Goal('search');
VK.Goal('find_location');
VK.Goal('donate');
VK.Goal('conversion');

VK.Goal('donate', {});

VK.Goal(
    'donate',
    // @ts-expect-error
    { someAnotherValue: 123 },
);

VK.Goal(
    'donate',
    // @ts-expect-error
    { value: null },
);

VK.Goal(
    'donate',
    // @ts-expect-error
    { value: true },
);

VK.Goal(
    'donate',
    // @ts-expect-error
    { value: false },
);

VK.Goal(
    'donate',
    // @ts-expect-error
    { value: 'test' },
);

VK.Goal(
    'donate',
    // @ts-expect-error
    { value: () => 123 },
);

VK.Goal('donate', { value: 123 });
