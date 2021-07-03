type ViewProps = import('react-native').ViewProps;

export type InterstialEventType = 'adLoaded' | 'adFailedToLoad' | 'adOpened' | 'adClosed' | 'adLeftApplication';

export interface BannerProps extends ViewProps {
    /**
     * DFP iOS library banner size constants
     * (https://developers.google.com/admob/ios/banner)
     * banner (320x50, Standard Banner for Phones and Tablets)
     * largeBanner (320x100, Large Banner for Phones and Tablets)
     * mediumRectangle (300x250, IAB Medium Rectangle for Phones and Tablets)
     * fullBanner (468x60, IAB Full-Size Banner for Tablets)
     * leaderboard (728x90, IAB Leaderboard for Tablets)
     * smartBannerPortrait (Screen width x 32|50|90, Smart Banner for Phones and Tablets)
     * smartBannerLandscape (Screen width x 32|50|90, Smart Banner for Phones and Tablets)
     *
     * banner is default
     */
    adSize?:
        | 'banner'
        | 'largeBanner'
        | 'mediumRectangle'
        | 'fullBanner'
        | 'leaderboard'
        | 'smartBannerPortrait'
        | 'smartBannerLandscape';

    /**
     * Optional array specifying all valid sizes that are appropriate for this slot.
     */
    validAdSizes?: string[];

    /**
     * DFP ad unit ID
     */
    adUnitID?: string;

    /**
     * Array of test devices. Use Banner.simulatorId for the simulator
     */
    testDevices?: string[];
    /**
     * The ad manager targeting
     */
    targeting?: Targeting;
    onSizeChange?: (event: { type: string; width: number; height: number }) => void;
    onAppEvent?: (event: { name: string; info: string }) => void;
    onAdLoaded?: (event: AdLoadedEvent) => void;
    onAdFailedToLoad?: (error: any) => void;
    onAdOpened?: () => void;
    onAdLeftApplication?: () => void;
    onAdClosed?: () => void;
}

export interface AdLoadedEvent {
    type: string;
    gadSize: string;
}

export interface AdFailedToLoadEvent {
    error: {
        message: string;
    };
}

export type Targeting = Partial<{
    /**
     * Arbitrary object of custom targeting information.
     */
    customTargeting: object;

    /**
     * Array of exclusion labels.
     */
    categoryExclusions: string[];

    /**
     * Array of keyword strings.
     */
    keywords: string[];

    /**
     * Applications that monetize content matching a webpage's content may pass
     * a content URL for keyword targeting.
     */
    contentURL: string;

    /**
     * You can set a publisher provided identifier (PPID) for use in frequency
     * capping, audience segmentation and targeting, sequential ad rotation, and
     * other audience-based ad delivery controls across devices.
     */
    publisherProvidedID: string;

    /**
     * The user’s current location may be used to deliver more relevant ads.
     */
    location: {
        latitude: number;
        longitude: number;
        accuracy: number;
    };
    correlator: string;
}>;

export {};
