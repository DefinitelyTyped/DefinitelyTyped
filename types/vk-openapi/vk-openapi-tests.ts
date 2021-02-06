// ----------------------------------------------------------------------------
// init

// $ExpectError
VK.init();

// $ExpectError
VK.init({});

// $ExpectError
VK.init({ apiId: '123' });

VK.init({ apiId: 123 });

VK.init({
    apiId: 123,
    onlyWidgets: '123', // $ExpectError
});

VK.init({ apiId: 123, onlyWidgets: true });

VK.init({
    apiId: 123,
    onlyWidgets: true,
    status: '', // $ExpectError
});

VK.init({ apiId: 123, onlyWidgets: true, status: false });

// ----------------------------------------------------------------------------
// Auth

// $ExpectError
VK.Auth();

// $ExpectError
VK.Auth.login();

// $ExpectError
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

// $ExpectError
VK.Auth.logout();

VK.Auth.logout(() => {});

VK.Auth.logout(
    () => {},
    // $ExpectError
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

// $ExpectError
VK.Auth.revokeGrants();

VK.Auth.revokeGrants(() => {});

VK.Auth.revokeGrants(
    () => {},
    // $ExpectError
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

// $ExpectError
VK.Auth.getLoginStatus();

VK.Auth.getLoginStatus(() => {});

VK.Auth.getLoginStatus(
    () => {},
    // $ExpectError
    100,
);

VK.Auth.getLoginStatus(status => {
    // $ExpectType LoginStatus
    status;
});

// $ExpectError
VK.Auth.getSession();

VK.Auth.getSession(() => {});

VK.Auth.getSession(
    () => {},
    // $ExpectError
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

// $ExpectError
VK.Api();

// $ExpectError
VK.Api.call();

// $ExpectError
VK.Api.call('method');

// $ExpectError
VK.Api.call('method', {});

VK.Api.call(
    'method',
    {}, // $ExpectError

    (data: any) => {},
);

VK.Api.call('method', { v: '5' }, (data: any) => {});

// ----------------------------------------------------------------------------
// Widgets

// $ExpectError
VK.Widgets();

// ----------------------------------------------------------------------------
// Widgets.ContactUs

// $ExpectError
VK.Widgets.ContactUs();

// $ExpectError
VK.Widgets.ContactUs('test');

// $ExpectError
VK.Widgets.ContactUs('test', undefined);

VK.Widgets.ContactUs('test', undefined, 10);

VK.Widgets.ContactUs('test', {}, 10);

VK.Widgets.ContactUs(
    'test',
    // $ExpectError
    { height: 100 },
    10,
);

VK.Widgets.ContactUs(
    'test',
    // $ExpectError
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

// $ExpectError
VK.Widgets.Comments();

// $ExpectError
VK.Widgets.Comments(123);

// $ExpectError
VK.Widgets.Comments(null);

// $ExpectError
VK.Widgets.Comments(() => 'test');

// $ExpectError
VK.Widgets.Comments({});

VK.Widgets.Comments('test');

VK.Widgets.Comments('test', undefined);

VK.Widgets.Comments(
    'test',
    undefined,
    10, // $ExpectError
);

VK.Widgets.Comments(
    'test',
    {},
    10, // $ExpectError
);

VK.Widgets.Comments(
    'test',
    // $ExpectError
    { width: '111', height: '222', limit: 'no', attach: 111, autoPublish: 3, norealtime: 'zzz', pageUrl: () => void 0 },
);

VK.Widgets.Comments(
    'test',
    // $ExpectError
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

// $ExpectError
VK.Widgets.Post();

// $ExpectError
VK.Widgets.Post(null);

// $ExpectError
VK.Widgets.Post(false);

// $ExpectError
VK.Widgets.Post(true);

// $ExpectError
VK.Widgets.Post(123);

// $ExpectError
VK.Widgets.Post('test');

// $ExpectError
VK.Widgets.Post({});

// $ExpectError
VK.Widgets.Post(() => '111');

// $ExpectError
VK.Widgets.Post('test', 100);

// $ExpectError
VK.Widgets.Post('test', '100');

// $ExpectError
VK.Widgets.Post('test', true);

// $ExpectError
VK.Widgets.Post('test', false);

VK.Widgets.Post('test', 100, 20, 'hash');

VK.Widgets.Post(
    'test',
    100,
    20,
    'hash',
    // $ExpectError
    { width: 'test' },
);

VK.Widgets.Post(
    'test',
    100,
    20,
    'hash',
    // $ExpectError
    { width: true },
);

VK.Widgets.Post(
    'test',
    100,
    20,
    'hash',
    // $ExpectError
    { width: false },
);

VK.Widgets.Post(
    'test',
    100,
    20,
    'hash',
    // $ExpectError
    { width: {} },
);

VK.Widgets.Post(
    'test',
    100,
    20,
    'hash',
    // $ExpectError
    { width: () => 100 },
);

VK.Widgets.Post('test', 100, 20, 'hash', { width: 100 });

// ----------------------------------------------------------------------------
// Widgets.Group

// $ExpectError
VK.Widgets.Group();

// $ExpectError
VK.Widgets.Group('test');

// $ExpectError
VK.Widgets.Group('test', undefined);

// $ExpectError
VK.Widgets.Group('test', undefined, '100');

// $ExpectError
VK.Widgets.Group('test', undefined, {});

VK.Widgets.Group('test', undefined, 100);

VK.Widgets.Group(
    'test',
    // $ExpectError
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

// $ExpectError
VK.Widgets.Like();

// $ExpectError
VK.Widgets.Like(null);

// $ExpectError
VK.Widgets.Like(true);

// $ExpectError
VK.Widgets.Like(false);

// $ExpectError
VK.Widgets.Like(111);

VK.Widgets.Like('test');

VK.Widgets.Like('test', {});

VK.Widgets.Like(
    'test',
    // $ExpectError
    { height: 100, verb: 3, pageTitle: 123, pageUrl: true, pageImage: null },
);

VK.Widgets.Like(
    'test',
    // $ExpectError
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

// $ExpectError
VK.Widgets.Recommended();

// $ExpectError
VK.Widgets.Recommended(123);

// $ExpectError
VK.Widgets.Recommended(null);

// $ExpectError
VK.Widgets.Recommended(undefined);

// $ExpectError
VK.Widgets.Recommended({});

VK.Widgets.Recommended('element');

VK.Widgets.Recommended(
    'element',
    // $ExpectError
    { limit: 'test', max: 'no', period: 'never' },
);

VK.Widgets.Recommended(
    'element',
    // $ExpectError
    { limit: false, max: true, period: 10 },
);

VK.Widgets.Recommended('element', {
    limit: 5,
    max: 10,
    period: 'day',
});

// $ExpectError
VK.Widgets.Recommended('element', {}, false);

// $ExpectError
VK.Widgets.Recommended('element', {}, '');

// $ExpectError
VK.Widgets.Recommended('element', {}, 123);

// $ExpectError
VK.Widgets.Recommended('element', {}, null);

VK.Widgets.Recommended('element', {}, 0);

VK.Widgets.Recommended('element', {}, 1);

// $ExpectError
VK.Widgets.Recommended('element', {}, 0, 'wat');

// $ExpectError
VK.Widgets.Recommended('element', {}, 0, 1);

// $ExpectError
VK.Widgets.Recommended('element', {}, 0, true);

// $ExpectError
VK.Widgets.Recommended('element', {}, 0, {});

VK.Widgets.Recommended('element', {}, 0, 'likes');

VK.Widgets.Recommended('element', {}, 0, 'friend_likes');

// $ExpectError
VK.Widgets.Recommended('element', {}, 0, 'likes', '/dev/null');

// $ExpectError
VK.Widgets.Recommended('element', {}, 0, 'likes', 100);

// $ExpectError
VK.Widgets.Recommended('element', {}, 0, 'likes', true);

// $ExpectError
VK.Widgets.Recommended('element', {}, 0, 'likes', {});

// $ExpectError
VK.Widgets.Recommended('element', {}, 0, 'likes', {});

// $ExpectError
VK.Widgets.Recommended('element', {}, 0, 'likes', null);

VK.Widgets.Recommended('element', {}, 0, 'likes', 'blank');

VK.Widgets.Recommended('element', {}, 0, 'likes', 'parent');

VK.Widgets.Recommended('element', {}, 0, 'likes', 'top');

// ----------------------------------------------------------------------------
// Widgets.Poll

// $ExpectError
VK.Widgets.Poll();

// $ExpectError
VK.Widgets.Poll('test');

// $ExpectError
VK.Widgets.Poll(123);

// $ExpectError
VK.Widgets.Poll(false);

// $ExpectError
VK.Widgets.Poll({});

// $ExpectError
VK.Widgets.Poll(null);

VK.Widgets.Poll(
    'blackHole',
    {},
    100, // $ExpectError
);

VK.Widgets.Poll(
    'darling',
    {},
    {}, // $ExpectError
);

VK.Widgets.Poll(
    'blackHole',
    {},
    false, // $ExpectError
);

VK.Widgets.Poll('wiredLife', {}, 'poll');

VK.Widgets.Poll(
    'wiredLife',
    // $ExpectError
    { pageUrl: 123, width: '123' },
    'poll',
);

VK.Widgets.Poll(
    'wiredLife',
    // $ExpectError
    { pageUrl: false, width: () => 123 },
    'poll',
);

VK.Widgets.Poll(
    'wiredLife',
    // $ExpectError
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

// $ExpectError
VK.Widgets.Auth();

// $ExpectError
VK.Widgets.Auth(123);

// $ExpectError
VK.Widgets.Auth(null);

// $ExpectError
VK.Widgets.Auth(true);

VK.Widgets.Auth('auth');

VK.Widgets.Auth(
    'auth',
    // $ExpectError
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

// $ExpectError
VK.Widgets.Subscribe();

// $ExpectError
VK.Widgets.Subscribe(null);

// $ExpectError
VK.Widgets.Subscribe(false);

// $ExpectError
VK.Widgets.Subscribe(123);

// $ExpectError
VK.Widgets.Subscribe('subber');

// $ExpectError
VK.Widgets.Subscribe('element', 123);

// $ExpectError
VK.Widgets.Subscribe('element', false);

// $ExpectError
VK.Widgets.Subscribe('element', 'zsh');

VK.Widgets.Subscribe(
    'element',
    {},
    null, // $ExpectError
);

VK.Widgets.Subscribe(
    'element',
    {},
    'user', // $ExpectError
);

VK.Widgets.Subscribe(
    'element',
    {},
    false, // $ExpectError
);

VK.Widgets.Subscribe(
    'element',
    {},
    () => 123, // $ExpectError
);

VK.Widgets.Subscribe('element', {}, 123);

VK.Widgets.Subscribe(
    'element',
    // $ExpectError
    { mode: 3, soft: 'test' },
    123,
);

VK.Widgets.Subscribe(
    'element',
    // $ExpectError
    { mode: null, soft: {} },
    123,
);

VK.Widgets.Subscribe(
    'element',
    // $ExpectError
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

// $ExpectError
VK.Widgets.CommunityMessages();

// $ExpectError
VK.Widgets.CommunityMessages(null);

// $ExpectError
VK.Widgets.CommunityMessages(1);

// $ExpectError
VK.Widgets.CommunityMessages(false);

// $ExpectError
VK.Widgets.CommunityMessages(true);

// $ExpectError
VK.Widgets.CommunityMessages({});

// $ExpectError
VK.Widgets.CommunityMessages('test');

VK.Widgets.CommunityMessages(
    'test',
    // $ExpectError
    {},
);

VK.Widgets.CommunityMessages(
    'test',
    // $ExpectError
    null,
);

VK.Widgets.CommunityMessages(
    'test',
    // $ExpectError
    true,
);

VK.Widgets.CommunityMessages(
    'test',
    // $ExpectError
    false,
);

VK.Widgets.CommunityMessages(
    'test',
    // $ExpectError
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
    // $ExpectError
    { expanded: 0, disableButtonTooltip: 0, disableNewMessagesSound: 0, disableExpandChatSound: 0, disableTitleChange: 0 },
);

// ----------------------------------------------------------------------------
// Widgets.Playlist

// $ExpectError
VK.Widgets.Playlist();

// $ExpectError
VK.Widgets.Playlist('element');

// $ExpectError
VK.Widgets.Playlist('element', 1);

// $ExpectError
VK.Widgets.Playlist('element', 1, 10);

VK.Widgets.Playlist(
    // $ExpectError
    null,
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    // $ExpectError
    true,
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    // $ExpectError
    false,
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    // $ExpectError
    123,
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    // $ExpectError
    {},
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    // $ExpectError
    () => void 0,
    1,
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // $ExpectError
    null,
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // $ExpectError
    true,
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // $ExpectError
    false,
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // $ExpectError
    'true',
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // $ExpectError
    () => void 0,
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    // $ExpectError
    {},
    10,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // $ExpectError
    null,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // $ExpectError
    true,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // $ExpectError
    false,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // $ExpectError
    {},
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // $ExpectError
    '',
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    // $ExpectError
    () => 123,
    'hash',
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // $ExpectError
    null,
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // $ExpectError
    true,
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // $ExpectError
    false,
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // $ExpectError
    123,
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // $ExpectError
    {},
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    // $ExpectError
    () => '',
);

VK.Widgets.Playlist('element', 1, 10, 'hash');

VK.Widgets.Playlist('element', 1, 10, 'hash', {});

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // $ExpectError
    { width: null },
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // $ExpectError
    { width: true },
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // $ExpectError
    { width: false },
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // $ExpectError
    { width: '123' },
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // $ExpectError
    { width: {} },
);

VK.Widgets.Playlist(
    'element',
    1,
    10,
    'hash',
    // $ExpectError
    { width: () => 213 },
);

VK.Widgets.Playlist('element', 1, 10, 'hash', { width: 100 });

// ----------------------------------------------------------------------------
// Widgets.AllowMessagesFromCommunity

// $ExpectError
VK.Widgets.AllowMessagesFromCommunity();

// $ExpectError
VK.Widgets.AllowMessagesFromCommunity('element');

// $ExpectError
VK.Widgets.AllowMessagesFromCommunity('element', {});

VK.Widgets.AllowMessagesFromCommunity('element', null, 1);

VK.Widgets.AllowMessagesFromCommunity('element', undefined, 1);

VK.Widgets.AllowMessagesFromCommunity('element', {}, 1);

VK.Widgets.AllowMessagesFromCommunity(
    // $ExpectError
    null,
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    // $ExpectError
    true,
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    // $ExpectError
    false,
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    // $ExpectError
    123,
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    // $ExpectError
    {},
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    // $ExpectError
    () => '',
    {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    '',
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    true,
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    false,
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    1,
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    () => {},
    1,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // $ExpectError
    null,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // $ExpectError
    true,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // $ExpectError
    false,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // $ExpectError
    '',
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // $ExpectError
    {},
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    {},
    // $ExpectError
    () => 123,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    { height: null },
    100,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    { height: true },
    100,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    { height: false },
    100,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    { height: 100 },
    100,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    { height: {} },
    100,
);

VK.Widgets.AllowMessagesFromCommunity(
    'element',
    // $ExpectError
    { height: {} },
    100,
);

VK.Widgets.AllowMessagesFromCommunity('element', { height: 22 }, 100);

VK.Widgets.AllowMessagesFromCommunity('element', { height: 24 }, 100);

VK.Widgets.AllowMessagesFromCommunity('element', { height: 30 }, 100);

// ----------------------------------------------------------------------------
// Widgets.App

// $ExpectError
VK.Widgets.App();

// $ExpectError
VK.Widgets.App('element');

VK.Widgets.App('element', 100);

VK.Widgets.App(
    // $ExpectError
    null,
    100,
);

VK.Widgets.App(
    // $ExpectError
    true,
    100,
);

VK.Widgets.App(
    // $ExpectError
    false,
    100,
);

VK.Widgets.App(
    // $ExpectError
    123,
    100,
);

VK.Widgets.App(
    // $ExpectError
    {},
    100,
);

VK.Widgets.App(
    // $ExpectError
    () => '',
    100,
);

VK.Widgets.App(
    'element',
    // $ExpectError
    null,
);

VK.Widgets.App(
    'element',
    // $ExpectError
    true,
);

VK.Widgets.App(
    'element',
    // $ExpectError
    false,
);

VK.Widgets.App(
    'element',
    // $ExpectError
    '',
);

VK.Widgets.App(
    'element',
    // $ExpectError
    {},
);

VK.Widgets.App(
    'element',
    // $ExpectError
    () => 123,
);

VK.Widgets.App('element', 100, {});

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { height: null },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { height: true },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { height: false },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { height: '' },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { height: {} },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { height: () => 123 },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { mode: null },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { mode: true },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { mode: false },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { mode: {} },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
    { mode: '' },
);

VK.Widgets.App(
    'element',
    100,
    // $ExpectError
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

// $ExpectError
VK.Widgets.Article();

// $ExpectError
VK.Widgets.Article('element');

VK.Widgets.Article('element', 'article');

VK.Widgets.Article(
    // $ExpectError
    null,
    'article',
);

VK.Widgets.Article(
    // $ExpectError
    true,
    'article',
);

VK.Widgets.Article(
    // $ExpectError
    false,
    'article',
);

VK.Widgets.Article(
    // $ExpectError
    100,
    'article',
);

VK.Widgets.Article(
    // $ExpectError
    {},
    'article',
);

VK.Widgets.Article(
    // $ExpectError
    () => '',
    'article',
);

VK.Widgets.Article(
    'element',
    // $ExpectError
    null,
);

VK.Widgets.Article(
    'element',
    // $ExpectError
    true,
);

VK.Widgets.Article(
    'element',
    // $ExpectError
    false,
);

VK.Widgets.Article(
    'element',
    // $ExpectError
    100,
);

VK.Widgets.Article(
    'element',
    // $ExpectError
    {},
);

VK.Widgets.Article(
    'element',
    // $ExpectError
    () => '',
);

// ----------------------------------------------------------------------------
// Widgets.Bookmarks

// $ExpectError
VK.Widgets.Bookmarks();

VK.Widgets.Bookmarks('element');

VK.Widgets.Bookmarks(
    // $ExpectError
    null,
);

VK.Widgets.Bookmarks(
    // $ExpectError
    true,
);

VK.Widgets.Bookmarks(
    // $ExpectError
    false,
);

VK.Widgets.Bookmarks(
    // $ExpectError
    100,
);

VK.Widgets.Bookmarks(
    // $ExpectError
    {},
);

VK.Widgets.Bookmarks(
    // $ExpectError
    () => '',
);

VK.Widgets.Bookmarks('element', {});

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { height: 100 },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { height: null },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { height: false },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { height: true },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { height: '' },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { height: {} },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { height: () => 18 },
);

VK.Widgets.Bookmarks('element', { height: 18 });

VK.Widgets.Bookmarks('element', { height: 20 });

VK.Widgets.Bookmarks('element', { height: 22 });

VK.Widgets.Bookmarks('element', { height: 24 });

VK.Widgets.Bookmarks('element', { height: 30 });

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { url: null },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { url: true },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { url: false },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { url: 100 },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { url: {} },
);

VK.Widgets.Bookmarks(
    'element',
    // $ExpectError
    { url: () => '' },
);

VK.Widgets.Bookmarks('element', { url: '/doggo' });

// ----------------------------------------------------------------------------
// Widgets.Podcast

// $ExpectError
VK.Widgets.Podcast();

// $ExpectError
VK.Widgets.Podcast('element');

// $ExpectError
VK.Widgets.Podcast('element', 'episode');

VK.Widgets.Podcast('element', 'episode', 'hash');

VK.Widgets.Podcast(
    // $ExpectError
    null,
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    // $ExpectError
    true,
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    // $ExpectError
    false,
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    // $ExpectError
    100,
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    // $ExpectError
    {},
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    // $ExpectError
    () => '',
    'episode',
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // $ExpectError
    null,
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // $ExpectError
    true,
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // $ExpectError
    false,
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // $ExpectError
    100,
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // $ExpectError
    {},
    'hash',
);

VK.Widgets.Podcast(
    'element',
    // $ExpectError
    () => '',
    'hash',
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // $ExpectError
    null,
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // $ExpectError
    true,
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // $ExpectError
    false,
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // $ExpectError
    100,
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // $ExpectError
    {},
);

VK.Widgets.Podcast(
    'element',
    'episode',
    // $ExpectError
    () => '',
);

// ----------------------------------------------------------------------------
// Observer

// $ExpectError
VK.Observer();

// $ExpectError
VK.Observer.subscribe();

// $ExpectError
VK.Observer.unsubscribe();

// $ExpectError
VK.Observer.unsubscribe();

// $ExpectError
VK.Observer.subscribe('event.not.found');

// $ExpectError
VK.Observer.subscribe('event.not.found', () => void 0);

// $ExpectError
VK.Observer.unsubscribe('404');

// $ExpectError
VK.Observer.subscribe('auth.login', data => {
    data;
});

// $ExpectError
VK.Observer.subscribe('auth.logout', data => {
    data;
});

// $ExpectError
VK.Observer.subscribe('auth.statusChange', data => {
    data;
});

// $ExpectError
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

// $ExpectError
VK.Observer.subscribe('widgets.groups.joined', data => {
    data;
});

// $ExpectError
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

// $ExpectError
VK.Observer.subscribe('widgets.subscribed', data => {
    data;
});

// $ExpectError
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

// $ExpectError
VK.Retargeting();

// ----------------------------------------------------------------------------
// Retargeting.Init

// $ExpectError
VK.Retargeting.Init();

// $ExpectError
VK.Retargeting.Init(null);

// $ExpectError
VK.Retargeting.Init(123);

// $ExpectError
VK.Retargeting.Init(true);

// $ExpectError
VK.Retargeting.Init(false);

// $ExpectError
VK.Retargeting.Init({});

VK.Retargeting.Init('some code');

// ----------------------------------------------------------------------------
// Retargeting.Hit

VK.Retargeting.Hit();

// $ExpectError
VK.Retargeting.Hit(null);

// $ExpectError
VK.Retargeting.Hit(123);

// $ExpectError
VK.Retargeting.Hit(false);

// $ExpectError
VK.Retargeting.Hit(true);

// $ExpectError
VK.Retargeting.Hit('test');

// $ExpectError
VK.Retargeting.Hit({});

// $ExpectError
VK.Retargeting.Hit(() => void 0);

// ----------------------------------------------------------------------------
// Retargeting.Event

// $ExpectError
VK.Retargeting.Event();

// $ExpectError
VK.Retargeting.Event(null);

// $ExpectError
VK.Retargeting.Event(true);

// $ExpectError
VK.Retargeting.Event(false);

// $ExpectError
VK.Retargeting.Event(123);

// $ExpectError
VK.Retargeting.Event({});

// $ExpectError
VK.Retargeting.Event(() => 'test');

VK.Retargeting.Event('test');

// ----------------------------------------------------------------------------
// Retargeting.Add

// $ExpectError
VK.Retargeting.Add();

// $ExpectError
VK.Retargeting.Add(null);

// $ExpectError
VK.Retargeting.Add(true);

// $ExpectError
VK.Retargeting.Add(false);

// $ExpectError
VK.Retargeting.Add('test');

// $ExpectError
VK.Retargeting.Add({});

// $ExpectError
VK.Retargeting.Add(() => 123);

VK.Retargeting.Add(123);

// ----------------------------------------------------------------------------
// Retargeting.ProductEvent

// $ExpectError
VK.Retargeting.ProductEvent();

// $ExpectError
VK.Retargeting.ProductEvent(null);

// $ExpectError
VK.Retargeting.ProductEvent(true);

// $ExpectError
VK.Retargeting.ProductEvent(false);

// $ExpectError
VK.Retargeting.ProductEvent('test');

// $ExpectError
VK.Retargeting.ProductEvent({});

// $ExpectError
VK.Retargeting.ProductEvent(() => 123);

// $ExpectError
VK.Retargeting.ProductEvent(123);

VK.Retargeting.ProductEvent(
    123,
    null, // $ExpectError
);

VK.Retargeting.ProductEvent(
    123,
    true, // $ExpectError
);

VK.Retargeting.ProductEvent(
    123,
    false, // $ExpectError
);

VK.Retargeting.ProductEvent(
    123,
    () => 'test', // $ExpectError
);

VK.Retargeting.ProductEvent(
    123,
    'event_not_found', // $ExpectError
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
    // $ExpectError
    id: null,
    // $ExpectError
    group_id: null,
    // $ExpectError
    recommended_ids: null,
    // $ExpectError
    price: null,
    // $ExpectError
    price_old: null,
    // $ExpectError
    price_from: null,
};

const product2: vk.OpenAPI.Retargeting.Product = {
    // $ExpectError
    id: 1,
    // $ExpectError
    group_id: 10,
    // $ExpectError
    recommended_ids: 100,
    // $ExpectError
    price: '1000',
    // $ExpectError
    price_old: '10000',
    // $ExpectError
    price_from: true,
};

// $ExpectError
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
    // $ExpectError
    products: null,
    // $ExpectError
    products_recommended_ids: null,
    // $ExpectError
    category_ids: null,
    // $ExpectError
    business_value: null,
    // $ExpectError
    currency_code: null,
    // $ExpectError
    total_price: null,
    // $ExpectError
    search_string: null,
};

const params2: vk.OpenAPI.Retargeting.ProductEventParams = {
    // $ExpectError
    products: {},
    // $ExpectError
    products_recommended_ids: 123,
    // $ExpectError
    category_ids: 100,
    // $ExpectError
    business_value: '100',
    // $ExpectError
    currency_code: 007,
    // $ExpectError
    total_price: '666',
    // $ExpectError
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

// $ExpectError
VK.Goal();

// $ExpectError
VK.Goal(null);

// $ExpectError
VK.Goal(true);

// $ExpectError
VK.Goal(false);

// $ExpectError
VK.Goal(123);

// $ExpectError
VK.Goal(() => 'test');

// $ExpectError
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
    // $ExpectError
    { someAnotherValue: 123 },
);

VK.Goal(
    'donate',
    // $ExpectError
    { value: null },
);

VK.Goal(
    'donate',
    // $ExpectError
    { value: true },
);

VK.Goal(
    'donate',
    // $ExpectError
    { value: false },
);

VK.Goal(
    'donate',
    // $ExpectError
    { value: 'test' },
);

VK.Goal(
    'donate',
    // $ExpectError
    { value: () => 123 },
);

VK.Goal('donate', { value: 123 });
