import { gtag, initDataLayer, install } from "ga-gtag";

initDataLayer();
gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
});
install("G-##########");
install("G-##########", { send_page_view: false });
gtag("event", "login", { method: "Google" });
