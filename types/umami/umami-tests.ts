umami("custom_event");

umami.trackEvent("custom_event", "custom_type");
umami.trackEvent("custom_event", "custom_type", "https://example.com/");
umami.trackEvent("custom_event", "custom_type", "https://example.com/", "94db1cb1-74f4-4a40-ad6c-962362670409");

umami.trackView("https://example.com/");
umami.trackView("https://example.com/", "https://example.com/test/");
umami.trackView("https://example.com/", "https://example.com/test/", "94db1cb1-74f4-4a40-ad6c-962362670409");
