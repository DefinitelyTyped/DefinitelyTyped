(async () => {
    const userAgentData = window.navigator.userAgentData;

    // $ExpectType string
    const platform = userAgentData.platform;
    // @ts-expect-error
    userAgentData.mobile = true;

    const isChromium = navigator.userAgentData.brands.some(
        (data) => data.brand == "Chromium",
    );
    const isMobile = userAgentData.mobile;
    const isMacOS = userAgentData.platform === "macOS";

    const highEntropyValues = await userAgentData.getHighEntropyValues([
        "architecture",
    ]);
    // $ExpectType string
    const architecture = highEntropyValues.architecture;

    // $ExpectType boolean
    const lowEntropyMobile = userAgentData.toJSON().mobile;
})();
