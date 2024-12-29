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

    /*
      Adding serviceConsents example data from the docs and one with id of type number
      Note: Different pages in the Usercentrics docs disagree on the type, so both are allowed:
      https://usercentrics.com/docs/web/implementation/ui/interfaces/#basetcfuserdecision (number)
      https://usercentrics.com/docs/web/features/api/control-functionality/#updatecategoriesconsents (string)
     */
    const serviceConsents = [
        { id: "HkocEodjb7", consent: true },
        { id: "S1_9Vsuj-Q", consent: false },
        { id: 12345567, consent: false },
    ];

    await window._ucCmp.updateServicesConsents(serviceConsents);
}
