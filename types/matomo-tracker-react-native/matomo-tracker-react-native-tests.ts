import MatomoTracker, { useMatomo } from "matomo-tracker-react-native";
import React = require("react");

const instance = new MatomoTracker({
    urlBase: "",
    siteId: 1,
});

// $ExpectType Promise<Response>
instance.trackAction({ name: "" });
// $ExpectType Promise<Response>
instance.trackAppStart({});
// $ExpectType Promise<Response>
instance.trackDownload({ download: "" });
// $ExpectType Promise<Response>
instance.trackEvent({ category: "", action: "" });
// $ExpectType Promise<Response>
instance.trackLink({ link: "" });
// $ExpectType Promise<Response>
instance.trackScreenView({ name: "" });
// $ExpectType Promise<Response>
instance.trackSiteSearch({ keyword: "" });

// $ExpectType Promise<Response> | undefined
useMatomo().trackAction({ name: "" });
// $ExpectType Promise<Response> | undefined
useMatomo().trackAppStart({});
// $ExpectType Promise<Response> | undefined
useMatomo().trackDownload({ download: "" });
// $ExpectType Promise<Response> | undefined
useMatomo().trackEvent({ category: "", action: "" });
// $ExpectType Promise<Response> | undefined
useMatomo().trackLink({ link: "" });
// $ExpectType Promise<Response> | undefined
useMatomo().trackScreenView({ name: "" });
// $ExpectType Promise<Response> | undefined
useMatomo().trackSiteSearch({ keyword: "" });
// $ExpectType Promise<Response> | undefined
useMatomo().trackSiteSearch({
    keyword: "",
    category: "",
    count: 0,
    userInfo: {
        uid: "123",
        lang: "en-US",
        dimension1: "something",
        dimension2: "else",
    },
});
