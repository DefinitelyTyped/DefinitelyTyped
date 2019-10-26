if (window.getVPAIDAd) {
    const ad = window.getVPAIDAd();
    ad.subscribe(() => {
        /* Record impression */
    }, 'AdImpression');
    ad.subscribe((url, id, playerHandles) => {
        /* Handle click */
    }, 'AdClickThru');
    ad.startAd();
}
