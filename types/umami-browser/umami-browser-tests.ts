umami.track();

umami.track({ website: "" });
umami.track({ website: "", hostname: "" });
umami.track({ website: "", language: "" });
umami.track({ website: "", referrer: "" });
umami.track({ website: "", screen: "" });
umami.track({ website: "", title: "" });
umami.track({ website: "", url: "" });

umami.track(properties => {
    return { ...properties, url: "", title: "" };
});

umami.track("custom_event");

umami.track("custom_event", { name: "newsletter", id: 123 });
