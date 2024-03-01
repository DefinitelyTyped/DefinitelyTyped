import * as OneLine from "pxr-oneline";
const ndmOne: OneLine.OneLine = {
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
        subscribe: (topic, fn) => {},
        broadcast: (oneTime, topic, data) => {},
    },
    adUnitRequest: (arrFoAdIds, allowReload) => {
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
    buildVideoUrl: (bidder, placementID) => {},
    adUnitInfiniteRequest: (bidder) => {},
};

// Test cases
ndmOne.adUnitRequest();
ndmOne.adUnitRequest(["ndm-1", "ndm-2"]);
ndmOne.adUnitRequest(["push-up-all"], true);
