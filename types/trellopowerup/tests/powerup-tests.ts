import * as Trello from "trellopowerup";

declare const powerUp: Trello.PowerUp.PowerUp;
declare const plugin: Trello.PowerUp.Plugin;
declare const iframe: Trello.PowerUp.IFrame;
declare const t: Trello.PowerUp.CallbackHandler;
declare const board: Trello.Board;
declare const card: Trello.Card;
declare const member: Trello.Member;

// Test PowerUp main interface
// $ExpectType string
powerUp.version;

// $ExpectType PromiseConstructor
powerUp.Promise;

// $ExpectType Cache
powerUp.CallbackCache;

// $ExpectType Util
powerUp.util;

// Test PowerUp methods
// $ExpectType PostMessageIO
powerUp.PostMessageIO({
    bufferSize: 100,
    handlers: {},
    hostHandlers: t,
    local: window,
    noisy: false,
    Promise: Promise,
    remote: window,
    secret: "test",
    targetOrigin: "*",
});

// $ExpectType IFrame
powerUp.iframe();

// $ExpectType IFrame
powerUp.iframe({
    context: "test",
    secret: "secret",
    helpfulStacks: true,
});

// $ExpectType Plugin
powerUp.initialize({});

// $ExpectType Plugin
powerUp.initialize({
    "card-badges": (t) => Promise.resolve([]),
}, {
    appKey: "test-key",
    appName: "Test App",
});

// $ExpectType ApiError
powerUp.restApiError();

// $ExpectType ApiError
powerUp.restApiError("Custom error message");

// Test error cases
// @ts-expect-error - version should be string, not number
powerUp.version = 123;

powerUp.initialize({
    // @ts-expect-error - invalid capability handler
    "invalid-capability": () => {},
});

// Test CapabilityHandlers
const capabilityHandlers: Trello.PowerUp.CapabilityHandlers = {
    "attachment-sections": (t, options) => {
        // $ExpectType CallbackHandler
        t;
        // $ExpectType Attachment[]
        options.entries;
        const output: Promise<(Trello.PowerUp.AttachmentSection | Trello.PowerUp.LazyAttachmentSection)[]> = Promise
            .resolve([]);
        output; // $ExpectType Promise<(AttachmentSection | LazyAttachmentSection)[]>
        return output;
    },
    "board-buttons": (t) => {
        const output: Promise<(Trello.PowerUp.BoardButtonUrl | Trello.PowerUp.BoardButtonCallback)[]> = Promise.resolve(
            [],
        );
        output; // $ExpectType Promise<(BoardButtonUrl | BoardButtonCallback)[]>
        return output;
    },
    "card-badges": (t) => {
        const output: Promise<(Trello.PowerUp.CardBadgeDynamic | Trello.PowerUp.CardBadge)[]> = Promise.resolve(
            [],
        );
        output; // $ExpectType Promise<(CardBadgeDynamic | CardBadge)[]>
        return output;
    },
    "card-buttons": (t) => {
        const output: Promise<Trello.PowerUp.CardButton[]> = Promise.resolve([]);
        output; // $ExpectType Promise<CardButton[]>
        return output;
    },
    "list-actions": (t) => {
        const output: Promise<Trello.PowerUp.ListAction[]> = Promise.resolve([]);
        output; // $ExpectType Promise<ListAction[]>
        return output;
    },
    "on-enable": (t) => {
        const output: Promise<void> = Promise.resolve();
        output; // $ExpectType Promise<void>
        return output;
    },
};

// Test AttachmentSection
const attachmentSection: Trello.PowerUp.AttachmentSection = {
    claimed: true,
    icon: "icon-url",
    title: "Test Section",
    content: {
        type: "iframe",
        url: "https://example.com",
        height: 200,
    },
};

// $ExpectType boolean
attachmentSection.claimed;

// $ExpectType string
attachmentSection.title;

// Test LazyAttachmentSection
const lazyAttachmentSection: Trello.PowerUp.LazyAttachmentSection = {
    claimed: false,
    icon: "icon-url",
    id: "section-id",
    title: () => "Dynamic Title",
    content: {
        type: "iframe",
        url: "https://example.com",
    },
};

// $ExpectType string
lazyAttachmentSection.title();

// Test BoardButton variants
const boardButtonCallback: Trello.PowerUp.BoardButtonCallback = {
    icon: {
        dark: "dark-icon",
        light: "light-icon",
    },
    text: "Button Text",
    callback: (t) => Promise.resolve(),
    condition: "admin",
};

const boardButtonUrl: Trello.PowerUp.BoardButtonUrl = {
    icon: {
        dark: "dark-icon",
        light: "light-icon",
    },
    text: "Button Text",
    url: "https://example.com",
    target: "_blank",
};

// Test CardBadge
const cardBadge: Trello.PowerUp.CardBadge = {
    text: "Badge",
    icon: "icon-url",
    color: "red",
    refresh: 30,
};

// $ExpectType string | undefined
cardBadge.text;

// $ExpectType ColorName | undefined
cardBadge.color;

// Test CardBadgeDynamic
const cardBadgeDynamic: Trello.PowerUp.CardBadgeDynamic = {
    dynamic: () => ({
        text: "Dynamic Badge",
        color: "blue",
    }),
};

// $ExpectType CardBadge
cardBadgeDynamic.dynamic();

// Test CardButton
const cardButton: Trello.PowerUp.CardButton = {
    icon: "icon-url",
    text: "Button",
    callback: (t) => Promise.resolve(),
    condition: "edit",
    url: "https://example.com",
};

// Test ListAction
const listAction: Trello.PowerUp.ListAction = {
    text: "Action",
    callback: (t) => Promise.resolve(),
};

// Test ListSorter
const listSorter: Trello.PowerUp.ListSorter = {
    text: "Sort by Name",
    callback: (t, options) => {
        // $ExpectType Card[]
        options.cards;
        const output: Trello.PowerUp.ListSorterOutput = {
            sortedIds: ["id1", "id2"],
        };
        output; // $ExpectType ListSorterOutput
        return Promise.resolve(output);
    },
};

// Test Plugin interface
// $ExpectType PluginOptions
plugin.options;

// $ExpectType Promise<PostMessageIO>
plugin.connect();

// $ExpectType Promise<PostMessageIO>
plugin.initApi();

// $ExpectType Promise<unknown>
plugin.request("test-command");

// $ExpectType Promise<PostMessageIO>
plugin.init();

// Test IFrame interface
// $ExpectType PostMessageIO | null
iframe.io;

// $ExpectType IFrameOptions
iframe.options;

// $ExpectType void
iframe.init();

// $ExpectType void
iframe.connect();

// $ExpectType Promise<unknown>
iframe.request("command", {});

// $ExpectType Api
iframe.getRestApi();

// Test HostHandlers.CallbackHandler
// $ExpectType Context
t.getContext();

// $ExpectType boolean
t.isMemberSignedIn();

// $ExpectType boolean
t.memberCanWriteToModel("board");

// $ExpectType unknown
t.arg("test");

// $ExpectType string
t.arg<string>("test", "default");

// $ExpectType string
t.signUrl("https://example.com");

// $ExpectType Promise<void>
t.navigate({ url: "https://example.com" });

// $ExpectType Promise<void>
t.showCard("card-id");

// $ExpectType Promise<void>
t.alert({ message: "Test alert" });

// $ExpectType Promise<void>
t.alert({
    message: "Test alert",
    duration: 5000,
    display: "success",
});

// Test popup methods
// $ExpectType Promise<void>
t.popup({
    title: "Test Popup",
    items: [
        {
            text: "Item 1",
            callback: (t, opts) => Promise.resolve(),
        },
    ],
});

// $ExpectType Promise<void>
t.popup({
    title: "Date Popup",
    type: "date",
    callback: (t: Trello.PowerUp.CallbackHandler, opts: Trello.PowerUp.PopupCallbackOptions & { date: string }) => {
        // $ExpectType string
        opts.date;
        return Promise.resolve();
    },
});

// $ExpectType Promise<void>
t.popup({
    title: "Confirm",
    type: "confirm",
    message: "Are you sure?",
    confirmText: "Yes",
    onConfirm: (t, opts) => Promise.resolve(),
});

// Test data storage methods
// $ExpectType Promise<unknown>
t.get("board", "private", "key");

// $ExpectType Promise<string>
t.get<string>("card", "shared", "key", "default");

// $ExpectType Promise<void>
t.set("board", "private", "key", "value");

// $ExpectType Promise<void>
t.set("card", "shared", { key1: "value1", key2: "value2" });

// $ExpectType Promise<void>
t.remove("board", "private", "key");

// $ExpectType Promise<void>
t.remove("card", "shared", ["key1", "key2"]);

// Test model getters
// $ExpectType Promise<Board>
t.board("all");

// $ExpectType Promise<Board>
t.board("id", "name", "url");

// $ExpectType Promise<Card>
t.card("all");

// $ExpectType Promise<Card>
t.card("id", "name", "desc");

// $ExpectType Promise<Card[]>
t.cards("all");

// $ExpectType Promise<List[]>
t.lists("all");

// $ExpectType Promise<Member>
t.member("all");

// $ExpectType Promise<Organization>
t.organization("all");

// Test theming methods
// $ExpectType string
t.getColorToken("primary.background", "#ffffff");

// $ExpectType string
t.getComputedColorToken("primary.text");

// $ExpectType () => void
t.subscribeToThemeChanges((theme) => {
    // $ExpectType { [key: string]: string; }
    theme;
});

// Test error cases for HostHandlers
// @ts-expect-error - invalid model type
t.memberCanWriteToModel("invalid");

// @ts-expect-error - invalid visibility
t.get("board", "invalid-visibility", "key");

// @ts-expect-error - invalid display type
t.alert({ message: "test", display: "invalid" });

// @ts-expect-error - missing required popup properties
t.popup({});

t.popup({
    title: "Test",
    // @ts-expect-error - invalid popup type
    type: "invalid",
});

// Test ButtonDisplayCondition
const validConditions: Trello.PowerUp.ButtonDisplayCondition[] = [
    "admin",
    "always",
    "edit",
    "readonly",
    "signedIn",
    "signedOut",
];

// @ts-expect-error - invalid condition
const invalidCondition: Trello.PowerUp.ButtonDisplayCondition = "invalid";

// Test AuthParams and AuthMethods
const authParams: Trello.PowerUp.AuthParams = {
    expiration: "1hour",
    scope: "read",
    returnUrl: "https://example.com",
};

// Test PostMessageIO options
const postMessageIOOptions: Trello.PowerUp.PostMessageIOOptions = {
    bufferSize: 100,
    handlers: capabilityHandlers,
    hostHandlers: t,
    local: window,
    noisy: false,
    Promise: Promise,
    remote: window,
    secret: "secret",
    strict: true,
    targetOrigin: "*",
    Sentry: {
        configureScope: (callback) => {
            callback({
                setTags: (name, value) => {},
                setUser: (value) => {},
            });
        },
    },
};

// Test PluginOptions
const pluginOptions: Trello.PowerUp.PluginOptions = {
    appKey: "test-key",
    appName: "Test App",
    appAuthor: "Test Author",
    apiOrigin: "https://api.trello.com",
    authOrigin: "https://trello.com",
    localizer: {
        resourceDictionary: { "key": "value" },
        localize: (key, args) => "localized",
    },
    Sentry: {
        configureScope: (callback) => {},
    },
};

// Test error cases for main interfaces
const invalidHandlers: Trello.PowerUp.CapabilityHandlers = {
    // @ts-expect-error - invalid capability in handlers
    "invalid-capability": () => {},
};

const wrongReturnType: Trello.PowerUp.CapabilityHandlers = {
    // @ts-expect-error - wrong return type for card-badges
    "card-badges": () => Promise.resolve("invalid"),
};

// @ts-expect-error - missing required properties in AttachmentSection
const invalidAttachmentSection: Trello.PowerUp.AttachmentSection = {
    claimed: true,
    icon: "icon",
    // missing title and content
};

const invalidCardButton: Trello.PowerUp.CardButton = {
    icon: "icon",
    text: "text",
    // @ts-expect-error - wrong callback signature
    callback: () => "invalid", // should return Promise<void>
};
