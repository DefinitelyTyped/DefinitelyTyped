import defaultBrowserId from "default-browser-id";

// $ExpectType Promise<string>
defaultBrowserId();

// @ts-expect-error
defaultBrowserId(1);

// @ts-expect-error
defaultBrowserId("1");
