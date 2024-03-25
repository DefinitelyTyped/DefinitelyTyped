import * as OneLine from "pxr-oneline";

interface BidderParams {
    placementId: string;
}

interface BidderConfig {
    bidder: string;
    params: BidderParams;
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
        },
        cons: {
            OneTime: "OneTime",
        },
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
    buildVideoUrl: (bidder: BidderConfig[], placementID: string) => {},
};

// Test cases
ndOne.adUnitRequest();
ndOne.adUnitRequest(["ndm-1", "ndm-2"]);
ndOne.adUnitRequest(["push-up-all"], true);
