// Usage from the window object
if (window.tgadhub && window.tgadhub.Ads) {
    // Main flow
    const adsFromWindow = new window.tgadhub.Ads({ key: "key" });
    adsFromWindow.showBottomBanner({
        onNotFound: () => {},
        onOpen: () => {},
        onClose: () => {},
        onError: (error) => {},
    });
    adsFromWindow.showRewardedVideo({
        onNotFound: () => {},
        onOpen: () => {},
        onClose: () => {},
        onError: (error) => {},
        onReward: () => {},
    });
    adsFromWindow.destroy();

    // Different ways to construct
    new window.tgadhub.Ads({ key: "key", test: true });
    new window.tgadhub.Ads({ key: "key", test: "https://localhost:3000" });
    new window.tgadhub.Ads({ key: "key", test: { enabled: true } });
    new window.tgadhub.Ads({ key: "key", test: { enabled: true, stubs: true } });

    // Close ads
    adsFromWindow.closeRewardedVideo();
    adsFromWindow.closeBottomBanner();
    adsFromWindow.closeAll();
}

// Usage from the global scope
if (tgadhub && tgadhub.Ads) {
    // Main flow
    const adsFromGlobal = new tgadhub.Ads({ key: "key" });
    adsFromGlobal.showBottomBanner({
        onNotFound: () => {},
        onOpen: () => {},
        onClose: () => {},
        onError: (error) => {},
    });
    adsFromGlobal.showRewardedVideo({
        onNotFound: () => {},
        onOpen: () => {},
        onClose: () => {},
        onError: (error) => {},
        onReward: () => {},
    });
    adsFromGlobal.destroy();

    // Different ways to construct
    new tgadhub.Ads({ key: "key", test: true });
    new tgadhub.Ads({ key: "key", test: "https://localhost:3000" });
    new tgadhub.Ads({ key: "key", test: { enabled: true } });
    new tgadhub.Ads({ key: "key", test: { enabled: true, stubs: true } });

    // Close ads
    adsFromGlobal.closeRewardedVideo();
    adsFromGlobal.closeBottomBanner();
    adsFromGlobal.closeAll();
}
