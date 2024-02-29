import MatomoTracker, { useMatomo } from "matomo-tracker-react-native";
import React = require("react");

const instance = new MatomoTracker({
    urlBase: "",
    siteId: 1,
});

instance.trackAction({ name: "" });
instance.trackAppStart({});
instance.trackDownload({ download: "" });
instance.trackEvent({ category: "", action: "" });
instance.trackLink({ link: "" });
instance.trackScreenView({ name: "" });
instance.trackSiteSearch({ keyword: "" });

useMatomo().trackAction({ name: "" });
useMatomo().trackAppStart({});
useMatomo().trackDownload({ download: "" });
useMatomo().trackEvent({ category: "", action: "" });
useMatomo().trackLink({ link: "" });
useMatomo().trackScreenView({ name: "" });
useMatomo().trackSiteSearch({ keyword: "" });
