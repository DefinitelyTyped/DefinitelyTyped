import * as OneLine from "pxr-oneline";

interface BidderParams {
    placementId: string;
}
interface VideoCustomParameters {
    [key: string]: number | string | undefined;
}

interface BidderConfig {
    bidder: string;
    params: BidderParams;
}

type NoParamFunction = () => void;
type ParamFunction = (arg: any) => void;

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

const ndOne: OneLine.OneLine = {
    event: {
        o: {},
        topic: {
            tcfReady: "tcfReady",
            documentReady: "documentReady",
            isEmpty: "isEmpty",
            isNotEmpty: "isNotEmpty",
            ageGateReady: "ageGateReady",
            socialVendorsReady: "socialVendorsReady",
        },
        cons: {
            OneTime: "OneTime",
        },

        subscribe: (topic: string, fn: NoParamFunction | ((data: SocialVendorConsents) => void)) => {
            // Mock implementation for subscribe
            console.log(`Subscribed to topic: ${topic}`);
        },

        broadcast: (oneTime: boolean, topic: string, data?: any) => {
            // Mock implementation for broadcast
            console.log(`Broadcasting to topic: ${topic} with data: ${data}`);
        },
    },
    adUnitRequest: (arrFoAdIds?: string[], allowReload?: boolean) => {
        // Mock implementation for adUnitRequest
        console.log(`Ad unit request with ids: ${arrFoAdIds}, allowReload: ${allowReload}`);
    },
    preBidAdUnit: (prebidBids: OneLine.PrebidBids, gtag: string, isDebug: boolean) => {
        // Mock implementation for preBidAdUnit
        console.log(`Pre-bid ad unit with bids: ${JSON.stringify(prebidBids)}, gtag: ${gtag}, isDebug: ${isDebug}`);
        return {}; // Replace with actual implementation or mocked response
    },
    requestVideoPlayerAds: (onBiddingComplete: () => void) => {
        // Mock implementation for requestVideoPlayerAds
        console.log("Requesting video player ads...");
        onBiddingComplete();
    },
    buildVideoUrl: (bidder: BidderConfig[], placementID: string, customParams: VideoCustomParameters): string => {
        // Example implementation that concatenates placementID with bidder info to form a URL
        // This is a mock implementation and should be replaced with your actual logic
        return `https://example.com/video?placement=${placementID}&bidder=${bidder.map(b => b.bidder).join(",")}`;
    },
    showCmp: () => {
        // Mock implementation for showCmp
        console.log("Showing CMP screen...");
        const currentDomain = window.location.origin;
        if (currentDomain) {
            console.log(`Redirecting to: ${currentDomain}/#cmpscreen`);
        } else {
            console.warn("NDM: Unable to show CMP");
        }
    },
    loadScript: (src: string, priority: "async" | "defer" | "instant" | "async"): void => {
        // Mock implementation for loadScript
        console.log(`Loading script from: ${src} with priority: ${priority}`);
    },
};

// Test cases
ndOne.adUnitRequest();
ndOne.adUnitRequest(["ndm-1", "ndm-2"]);
ndOne.adUnitRequest(["push-up-all"], true);
ndOne.buildVideoUrl([{ bidder: "testBidder", params: { placementId: "testPlacementId" } }], "testPlacementId", {});
ndOne.requestVideoPlayerAds(() => {
    console.log("Video player ads bidding complete");
});
