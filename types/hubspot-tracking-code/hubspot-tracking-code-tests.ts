// @ts-expect-error -- the queue is undefined until the snippet runs
window._hsq.push(["trackPageView"]);

// The snippet documented by HubSpot creates the queue if the script has not loaded yet.
const queue: HubSpotTrackingCode.Hsq = (window._hsq = window._hsq || []);

// Without the bootstrap, the queue has to be guarded.
window._hsq?.push(["trackPageView"]);
_hsq?.push(["trackPageView"]);

const properties: HubSpotTrackingCode.IdentifyProperties = { email: "visitor@example.com" };
queue.push(["identify", properties]);
queue.push(["identify", { email: "visitor@example.com", firstname: "John", lastname: "Doe" }]);
queue.push(["identify", { email: "visitor@example.com", lifecyclestage: "lead", seats: 5 }]);

const eventName: HubSpotTrackingCode.CustomBehavioralEventName = "pe12345678_my_event";
const event: HubSpotTrackingCode.CustomBehavioralEvent = { name: eventName };
queue.push(["trackCustomBehavioralEvent", event]);
queue.push([
    "trackCustomBehavioralEvent",
    { name: "pe12345678_my_event", properties: { property_name: "property_value", count: 5, active: true } },
]);

// $ExpectType number
queue.push(["trackPageView"]);

declare const pathname: string;
queue.push(["setPath", pathname]);
queue.push(["setPath", "/about-us"], ["trackPageView"]);

const listener: HubSpotTrackingCode.PrivacyConsentListener = (consent) => {
    // $ExpectType boolean
    consent.allowed;
    // $ExpectType unknown
    consent.categories;
};
queue.push(["addPrivacyConsentListener", listener]);
queue.push(["addPrivacyConsentListener", (consent) => consent.allowed]);

queue.push(["revokeCookieConsent"]);

const options: HubSpotTrackingCode.DoNotTrackOptions = { track: true };
queue.push(["doNotTrack"]);
queue.push(["doNotTrack", options]);

// The queue is a plain array until the tracking code replaces it.
// $ExpectType number
queue.length;
window._hsq = [];

// @ts-expect-error -- trackEvent is a no-op in the shipped tracking code
queue.push(["trackEvent", { id: "legacy" }]);
// @ts-expect-error -- setPath takes a string
queue.push(["setPath", 404]);
// @ts-expect-error -- trackPageView takes no arguments
queue.push(["trackPageView", "/about-us"]);
// @ts-expect-error -- a trailing command must not relax the one before it
queue.push(["trackPageView", "/about-us"], ["setPath", "/about-us"]);
// @ts-expect-error -- setPath requires its path argument
queue.push(["setPath"], ["trackPageView"]);
// @ts-expect-error -- the event name must be prefixed with pe{HubID}_
queue.push(["trackCustomBehavioralEvent", { name: "my_event" }]);
// @ts-expect-error -- identify rejects arrays at runtime
queue.push(["identify", ["visitor@example.com"]]);
