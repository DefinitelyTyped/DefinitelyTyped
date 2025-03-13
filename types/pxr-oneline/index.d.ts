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
            socialVendorsReady: string;
        };
        cons: {
            OneTime: string;
        };
        subscribe(topic: string, fn: NoParamFunction): void;
        subscribe(topic: EventObject["topic"]["socialVendorsReady"], fn: (data: SocialVendorConsents) => void): void;
        broadcast(oneTime: boolean, topic: string, data?: any): void;
    }

    interface SocialVendorConsents {
        vendors: {
            tiktok: boolean;
            twitter: boolean;
            youtube: boolean;
            instagram: boolean;
            facebook: boolean;
            google_maps: boolean;
            spotify: boolean;
        };
    }

    type NoParamFunction = () => void;
    type ParamFunction = (arg: any) => void;
}
declare const OneLine: OneLine.OneLine;
export = OneLine;
