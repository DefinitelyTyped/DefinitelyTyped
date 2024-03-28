interface AdEvents {
    onNotFound?: () => void;
    onOpen?: () => void;
    onReward?: () => void;
    onClose?: () => void;
    onError?: (error: Error) => void;
}

interface AdsParams {
    key: string;
    test?: boolean | string;
}

declare class Ads {
    constructor(params: AdsParams);
    showRewardedVideo(listeners?: AdEvents): Promise<boolean>;
    showBottomBanner(listeners?: AdEvents): Promise<boolean>;
    destroy(): void;
}

interface tgadhub {
    Ads?: typeof Ads;
}

declare global {
    interface Window {
        tgadhub?: tgadhub;
    }

    var tgadhub: tgadhub;
}

export { AdEvents, Ads, AdsParams };
