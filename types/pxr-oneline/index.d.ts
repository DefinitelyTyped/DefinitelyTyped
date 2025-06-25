declare namespace OneLine {
    interface OneLine {
        event: EventObject;
        adUnitRequest(arrFoAdIds?: string[], allowReload?: boolean): void;
        preBidAdUnit(prebidBids: PrebidBids, gtag: string, isDebug: boolean): any;
        requestVideoPlayerAds(onBiddingComplete: () => void): void;
        showCmp(): void;
        loadScript(src: string, priority: "async" | "defer" | "instant" | "async"): void;
        buildVideoUrl(
            bidder: BidderConfig[],
            placementID: string,
            customParams: VideoCustomParameters,
            videoTitle?: string,
        ): string;
        /**
         * Wrapper method to request all ad units with reload capability
         */
        requestAllAdUnitsWithReload(): void;
        /**
         * Wrapper method to request all ad units without reload capability
         */
        requestAllAdUnits(): void;
        /**
         * Wrapper method to request specific ad units with reload capability
         * @param adUnitIds - Array of ad unit IDs to request
         */
        requestSpecificAdUnitsWithReload(adUnitIds: string[]): void;
        /**
         * Wrapper method to request specific ad units without reload capability
         * @param adUnitIds - Array of ad unit IDs to request
         */
        requestSpecificAdUnits(adUnitIds: string[]): void;
    }
    interface VideoCustomParameters {
        [key: string]: number | string | undefined;
    }

    interface VideoParameters {
        cust_params: VideoCustomParameters;
        iu: string;
        output: string;
    }

    interface BidderParams {
        placementId: string;
    }

    interface BidderConfig {
        bidder: string;
        params: BidderParams;
    }

    interface PrebidBids {
        [key: string]: {
            bidder: string;
            params: {
                placementId: string;
            };
        };
    }

    interface EventObject {
        o: { [key: string]: (NoParamFunction[] | "ONE-TIME-DONE") | (ParamFunction[] | "ONE-TIME-DONE") };
        topic: {
            tcfReady: string;
            documentReady: string;
            isEmpty: string;
            isNotEmpty: string;
            ageGateReady: string;
        };
        cons: {
            OneTime: string;
        };
        subscribe(topic: string, fn: NoParamFunction): void;
        subscribeSocialConsents(fn: (data: SocialConsents) => void): void;
    }

    interface SocialConsents {
        vendors: {
            tiktok: boolean;
            twitter: boolean;
            youtube: boolean;
            instagram: boolean;
            facebook: boolean;
            google_maps: boolean;
            spotify: boolean;
            jwplayer: boolean;
            dailymotion: boolean;
            omny: boolean;
            vimeo: boolean;
            liveblog: boolean;
            art19: boolean;
            roninmedia: boolean;
        };
    }

    type NoParamFunction = () => void;
    type ParamFunction = (arg: any) => void;
}
declare const OneLine: OneLine.OneLine;
export = OneLine;
