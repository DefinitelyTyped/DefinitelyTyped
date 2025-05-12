const renderParams: Turnstile.RenderParameters = {
    sitekey: "<YOUR_SITE_KEY>",
    action: "<YOUR_ACTION>",
    cData: "<YOUR_CUSTOMER_DATA>",
    callback: (token: string) => {},
    "expired-callback": () => {},
    "error-callback": (error: string) => {},
    theme: "auto",
    tabindex: 5,
};

const minimalRenderParams: Turnstile.RenderParameters = {
    sitekey: "<YOUR_SITE_KEY>",
};

const themeAuto: Turnstile.Theme = "auto";
const themeLight: Turnstile.Theme = "light";
const themeDark: Turnstile.Theme = "dark";

const widgetSizeNormal: Turnstile.WidgetSize = "normal";
const widgetSizeCompact: Turnstile.WidgetSize = "compact";
const widgetSizeFlexible: Turnstile.WidgetSize = "flexible";

const failureRetryModeNever: Turnstile.FailureRetryMode = "never";
const failureRetryModeAuto: Turnstile.FailureRetryMode = "auto";

const appearanceModeAlways: Turnstile.AppearanceMode = "always";
const appearanceModeExecute: Turnstile.AppearanceMode = "execute";
const appearanceModeInteractionOnly: Turnstile.AppearanceMode = "interaction-only";

const refreshExpiredNever: Turnstile.RefreshExpiredMode = "never";
const refreshExpiredManual: Turnstile.RefreshExpiredMode = "manual";
const refreshExpiredAuto: Turnstile.RefreshExpiredMode = "auto";

const refreshTimeoutNever: Turnstile.RefreshTimeoutMode = "never";
const refreshTimeoutManual: Turnstile.RefreshTimeoutMode = "manual";
const refreshTimeoutAuto: Turnstile.RefreshTimeoutMode = "auto";

const executionRender: Turnstile.ExecutionMode = "render";
const executionExecute: Turnstile.ExecutionMode = "execute";

// @ts-expect-error
turnstile.ready();
// $ExpectType void
turnstile.ready(() => {});

// $ExpectType string | null | undefined
turnstile.render("foo");
// $ExpectType string | null | undefined
turnstile.render("foo", renderParams);
// $ExpectType string | null | undefined
turnstile.render("foo", minimalRenderParams);
// $ExpectType string | null | undefined
turnstile.render(document.getElementById("foo") as HTMLElement, renderParams);
// @ts-expect-error
turnstile.render();
// @ts-expect-error
turnstile.render("foo", {});

// $ExpectType void
turnstile.execute("foo");
// $ExpectType void
turnstile.execute("foo", renderParams);
// $ExpectType void
turnstile.execute("foo", minimalRenderParams);
// $ExpectType void
turnstile.execute(document.getElementById("foo") as HTMLElement, renderParams);
// @ts-expect-error
turnstile.execute();
// @ts-expect-error
turnstile.execute("foo", {});

// getResponse takes a string or an HTML element and returns a string or undefined
// $ExpectType string | undefined
turnstile.getResponse("foo");
// $ExpectType string | undefined
turnstile.getResponse(document.getElementById("foo") as HTMLElement);

// reset takes a string or an HTML element
// $ExpectType void
turnstile.reset("foo");
// $ExpectType void
turnstile.reset(document.getElementById("foo") as HTMLElement);

// remove takes a string or an HTML element
// $ExpectType void
turnstile.remove("foo");
// $ExpectType void
turnstile.remove(document.getElementById("foo") as HTMLElement);

// isExpired takes a string or an HTML element
// $ExpectType boolean
turnstile.isExpired("foo");
// $ExpectType boolean
turnstile.isExpired(document.getElementById("foo") as HTMLElement);
