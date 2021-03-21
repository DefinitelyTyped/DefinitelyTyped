declare class NativeAdsManager {
    isValid: boolean;

    adUnitID: string;

    constructor(adUnitID: string, testDevices: string[]);

    static registerViewsForInteractionAsync(nativeAdViewTag: number, clickable: number[]): Promise<void>;

    toJSON(): string;
}

export = NativeAdsManager;
