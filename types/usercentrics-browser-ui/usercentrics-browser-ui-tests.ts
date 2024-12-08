async function getConsentSettingsFromUsercentrics() {
    if (!("_ucCmp" in window)) {
        return;
    }

    const isInitialized = await window._ucCmp.isInitialized();
    if (!isInitialized) {
        return;
    }

    const consentDetails = await window._ucCmp.getConsentDetails();
    const userCentricsServices = consentDetails.services;

    // $ExpectType boolean | undefined
    userCentricsServices["foo"].consent?.given;

    // $ExpectType boolean
    await window._ucCmp.isConsentRequired();
}
