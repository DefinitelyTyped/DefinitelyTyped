const hasAcceptedStatistics: boolean = Cookiebot.consent.statistics; // $ExpectType boolean
const hasAcceptedPreferences: boolean = Cookiebot.consent.preferences; // $ExpectType boolean
const hasAcceptedMarketing: boolean = Cookiebot.consent.marketing; // $ExpectType boolean
const hasAcceptedNecessary: boolean = Cookiebot.consent.necessary; // $ExpectType boolean

const hasAcceptedStatisticsFromWindow: boolean = !!window.Cookiebot?.consent.statistics; // $ExpectType boolean
const hasAcceptedPreferencesFromWindow: boolean = !!window.Cookiebot?.consent.preferences; // $ExpectType boolean
const hasAcceptedMarketingFromWindow: boolean = !!window.Cookiebot?.consent.marketing; // $ExpectType boolean
const hasAcceptedNecessaryFromWindow: boolean = !!window.Cookiebot?.consent.necessary; // $ExpectType boolean

Cookiebot.show();
Cookiebot.hide();
Cookiebot.renew();
Cookiebot.getScript("", true, () => {});
Cookiebot.runScripts();
Cookiebot.withdraw();
Cookiebot.submitCustomConsent(true, true, true);

window.Cookiebot?.show();
window.Cookiebot?.hide();
window.Cookiebot?.renew();
window.Cookiebot?.getScript("", true, () => {});
window.Cookiebot?.runScripts();
window.Cookiebot?.withdraw();
window.Cookiebot?.submitCustomConsent(true, true, true);

window.addEventListener("CookiebotOnAccept", (event) => {
    event; // $ExpectType Event
});

window.addEventListener("CookiebotOnLoad", (event) => {
    event; // $ExpectType Event
});

window.addEventListener("CookiebotOnAccept", (event) => {
    event; // $ExpectType Event
});

window.addEventListener("CookiebotOnDecline", (event) => {
    event; // $ExpectType Event
});

window.addEventListener("CookiebotOnDialogInit", (event) => {
    event; // $ExpectType Event
});

window.addEventListener("CookiebotOnDialogDisplay", (event) => {
    event; // $ExpectType Event
});

window.addEventListener("CookiebotOnTagsExecuted", (event) => {
    event; // $ExpectType Event
});
