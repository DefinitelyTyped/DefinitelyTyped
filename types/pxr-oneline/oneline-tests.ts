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

const ndOne: OneLine.OneLine = {
    event: {
        o: {},
        topic: {
            tcfReady: "tcfReady",
            documentReady: "documentReady",
            isEmpty: "isEmpty",
            isNotEmpty: "isNotEmpty",
            ageGateReady: "ageGateReady",
        },
        cons: {
            OneTime: "OneTime",
        },

        subscribe: (topic: string, fn: NoParamFunction) => {},
        broadcast: (oneTime: boolean, topic: string, data?: any) => {},
    },
    adUnitRequest: (arrFoAdIds: string[], allowReload: boolean) => {
        // Mock implementation for testing
        console.assert(
            !arrFoAdIds && !allowReload,
            "adUnitRequest - should load all ad units when called without arguments",
        );

        console.assert(
            arrFoAdIds && arrFoAdIds.length === 1 && arrFoAdIds.indexOf("push-up-all") !== -1 && allowReload,
            "adUnitRequest - should allow reload when specified in the arguments",
        );
    },
    buildVideoUrl: (bidder: BidderConfig[], placementID: string, customParams: VideoCustomParameters): string => {
        // Example implementation that concatenates placementID with bidder info to form a URL
        // This is a mock implementation and should be replaced with your actual logic
        return `https://example.com/video?placement=${placementID}&bidder=${bidder.map(b => b.bidder).join(",")}`;
    },
};

// Test cases
ndOne.adUnitRequest();
ndOne.adUnitRequest(["ndm-1", "ndm-2"]);
ndOne.adUnitRequest(["push-up-all"], true);
ndOne.buildVideoUrl([{ bidder: "testBidder", params: { placementId: "testPlacementId" } }], "testPlacementId", {});
