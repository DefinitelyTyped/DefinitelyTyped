if (window.tgadhub && window.tgadhub.Ads) {
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
}

if (tgadhub && tgadhub.Ads) {
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
}
