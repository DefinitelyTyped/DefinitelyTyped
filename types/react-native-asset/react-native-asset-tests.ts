import reactNativeAsset = require("react-native-asset");

// @ts-expect-error
reactNativeAsset();

// @ts-expect-error
reactNativeAsset({});

reactNativeAsset({
    // @ts-expect-error
    platforms: {},
});

reactNativeAsset({
    platforms: {
        // @ts-expect-error
        ios: {},
    },
});

reactNativeAsset({
    platforms: {
        // @ts-expect-error
        ios: {},
        // @ts-expect-error
        android: {},
    },
});

reactNativeAsset({
    platforms: {
        ios: {
            enabled: true,
            assets: [],
        },
        // @ts-expect-error
        android: {},
    },
});

reactNativeAsset({
    platforms: {
        // @ts-expect-error
        ios: {},
        android: {
            enabled: true,
            assets: [],
        },
    },
});

reactNativeAsset({
    platforms: {
        ios: {
            assets: [],
            enabled: true,
        },
        android: {
            assets: [],
            enabled: true,
        },
    },
});
