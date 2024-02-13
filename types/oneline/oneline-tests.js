"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ndmOne = {
    event: {
        o: {},
        topic: {
            tcfReady: 'tcfReady',
            documentReady: 'documentReady',
            isEmpty: 'isEmpty',
            isNotEmpty: 'isNotEmpty',
            ageGateReady: 'ageGateReady',
        },
        cons: {
            OneTime: 'OneTime',
        },
        subscribe: function (topic, fn) { },
        broadcast: function (oneTime, topic, data) { },
    },
    adUnitRequest: function (arrFoAdIds, allowReload) {
        // Mock implementation for testing
        console.assert(!arrFoAdIds && !allowReload, 'adUnitRequest - should load all ad units when called without arguments');
        console.assert(arrFoAdIds && arrFoAdIds.length === 2 && arrFoAdIds.indexOf('ndm-1') !== -1 && arrFoAdIds.indexOf('ndm-2') && !allowReload, 'adUnitRequest - should load specified ad units when called with an array of ad IDs');
        console.assert(arrFoAdIds && arrFoAdIds.length === 1 && arrFoAdIds.indexOf('push-up-all') !== -1 && allowReload, 'adUnitRequest - should allow reload when specified in the arguments');
    },
    buildVideoUrl: function (bidder, placementID) { },
};
// Test cases
ndmOne.adUnitRequest();
ndmOne.adUnitRequest(['ndm-1', 'ndm-2']);
ndmOne.adUnitRequest(['push-up-all'], true);
