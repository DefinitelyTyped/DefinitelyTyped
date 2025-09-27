import {
    BrowsingContextInfo,
    NavigationInfo,
    UserPromptClosed,
    UserPromptOpened,
} from "selenium-webdriver/bidi/browsingContextTypes";

// $ExpectType BrowsingContextInfo
const child = new BrowsingContextInfo("child-id", "https://example.com/child", [], null);
// $ExpectType BrowsingContextInfo
const parent = new BrowsingContextInfo("parent-id", "https://example.com", [child], null);

// $ExpectType string
parent.id;
// $ExpectType string
parent.url;
// $ExpectType BrowsingContextInfo[]
parent.children;
// $ExpectType BrowsingContextInfo | null
parent.parentBrowsingContext;

// $ExpectType BrowsingContextInfo | null
child.parentBrowsingContext;

// $ExpectType NavigationInfo
const navigation = new NavigationInfo("context1", "nav1", 123456789, "https://example.com");
// $ExpectType string
navigation.browsingContextId;
// $ExpectType string
navigation.navigationId;
// $ExpectType number
navigation.timestamp;
// $ExpectType string
navigation.url;

// $ExpectType UserPromptOpened
const promptOpened = new UserPromptOpened("context1", "alert", "Hello World");
// $ExpectType string
promptOpened.browsingContextId;
// $ExpectType string
promptOpened.type;
// $ExpectType string
promptOpened.message;

// $ExpectType UserPromptClosed
const promptClosed = new UserPromptClosed("context1", true, "user input");

// $ExpectType string
promptClosed.browsingContextId;
// $ExpectType boolean
promptClosed.accepted;
// $ExpectType string | undefined
promptClosed.userText;

// @ts-expect-error
new BrowsingContextInfo();
// @ts-expect-error
new NavigationInfo();
// @ts-expect-error
new UserPromptOpened();
// @ts-expect-error
new UserPromptClosed();
