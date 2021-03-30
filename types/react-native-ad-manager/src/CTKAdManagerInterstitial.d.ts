import { AdFailedToLoadEvent, InterstialEventType, Targeting } from '../helper-types';

declare function setAdUnitID(adUnitID: string): void;
declare function setTestDevices(testDevices: string[]): void;
declare function setTargeting(targetingObjects: Targeting): void;
declare function requestAd(): Promise<void>;
declare function showAd(): Promise<void>;
declare function isReady(callback: (isLoaded: boolean) => void): void;
declare function addEventListener(
    type: InterstialEventType,
    handler: (event: AdFailedToLoadEvent | null) => void,
): { remove: () => void };
declare function removeEventListener(type: string, handler: (event: AdFailedToLoadEvent | null) => void): void;
declare function removeAllListeners(): void;
declare const simulatorId: string;

export {
    setAdUnitID,
    setTestDevices,
    setTargeting,
    requestAd,
    showAd,
    isReady,
    addEventListener,
    removeEventListener,
    removeAllListeners,
    simulatorId,
};
