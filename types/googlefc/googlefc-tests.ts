// To guarantee functionality, this must go before the FC tag on the page.
googlefc.controlledMessagingFunction = message => {
    const today = new Date();
    // If it is in between 0 and 12 o’clock, show the message. Otherwise, do not.
    if (today.getHours() < 12) {
        message.proceed(true);
    } else {
        message.proceed(false);
    }
};

// Queue the callback on the callbackQueue.
googlefc.callbackQueue.push({
    AD_BLOCK_DATA_READY: () => {
        if (googlefc.getAdBlockerStatus() === googlefc.AdBlockerStatusEnum.NO_AD_BLOCKER) {
            // Handle a non-ad blocking user.
        }
    },
});

// Signals that the default DNS link will be overridden.
googlefc.ccpa.overrideDnsLink = true;

googlefc.callbackQueue.push({ CONSENT_DATA_READY: () => googlefc.showRevocationMessage() });
googlefc.callbackQueue.push({ CONSENT_API_READY: () => {} });

// Queue the callback on the callbackQueue.
googlefc.callbackQueue.push({
    AD_BLOCK_DATA_READY: () => {
        switch (googlefc.getAdBlockerStatus()) {
            case googlefc.AdBlockerStatusEnum.EXTENSION_LEVEL_AD_BLOCKER:
            case googlefc.AdBlockerStatusEnum.NETWORK_LEVEL_AD_BLOCKER:
                // Insert handling for cases where the user is blocking ads.
                break;
            case googlefc.AdBlockerStatusEnum.NO_AD_BLOCKER:
                // Insert handling for cases where the user is not blocking ads.
                break;
            case googlefc.AdBlockerStatusEnum.UNKNOWN:
                // Insert handling for unknown cases.
                break;
        }
    },
});

// Queue the callback on the callbackQueue.
googlefc.callbackQueue.push({
    AD_BLOCK_DATA_READY: () => {
        switch (googlefc.getAllowAdsStatus()) {
            case googlefc.AllowAdsStatusEnum.ADS_NOT_ALLOWED:
                // Insert handling for cases where the user has not allowed ads.
                // The user may have never been an ad blocker.
                break;
            case googlefc.AllowAdsStatusEnum.ADS_ALLOWED:
                // Insert handling for cases where the user saw the ad blocking
                // message and allowed ads on the site.
                break;
            case googlefc.AllowAdsStatusEnum.UNKNOWN:
                // Insert handling for unknown cases.
                break;
        }
    },
});

// Queue the callback on the callbackQueue.
googlefc.callbackQueue.push({
    INITIAL_CCPA_DATA_READY: () => {
        switch (googlefc.ccpa.getInitialCcpaStatus()) {
            case googlefc.ccpa.InitialCcpaStatusEnum.CCPA_DOES_NOT_APPLY:
                // Insert handling for cases where the user is not CCPA eligible.
                break;
            case googlefc.ccpa.InitialCcpaStatusEnum.NOT_OPTED_OUT:
                // Insert handling for cases where the user is CCPA eligible and has
                // not opted out.
                break;
            case googlefc.ccpa.InitialCcpaStatusEnum.OPTED_OUT:
                // Insert handling for cases where the user is CCPA eligible and has
                // opted out.
                break;
        }
    },
});

googlefc.ccpa.openConfirmationDialog(userOptedOut => {
    if (userOptedOut) {
        // TODO: Hide custom CCPA Do Not Sell link here.
    }
});

// Queue the callback on the callbackQueue.
googlefc.callbackQueue.push({
    CONSENT_DATA_READY: () => {},
});

// Register the callback for the initial CCPA data.
googlefc.callbackQueue.push({
    INITIAL_CCPA_DATA_READY: () => {
        if (googlefc.ccpa.getInitialCcpaStatus() === googlefc.ccpa.InitialCcpaStatusEnum.NOT_OPTED_OUT) {
        }
    },
});
