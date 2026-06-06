window.saturnSDK.run({
    integrationId: "test",
});

// Setting user without identifierHash
window.$saturn.setUser("uid", {
    email: "uid@email.com",
    name: "user",
});

// Setting user without identifierHash
window.$saturn.setUser("uid", {
    email: "uid@email.com",
    name: "user",
    identifierHash: "hash",
});

// Tracking
window.$saturn.trackEvent("event", { key: "value" });
window.$saturn.trackAttr("name", "value");

// Bubble Interaction Helpers
window.$saturn.open();
window.$saturn.close();
window.$saturn.toggle();
window.$saturn.hide();
window.$saturn.show();
window.$saturn.reset();
