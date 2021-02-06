// Type definitions for node-browser-history 1.0
// Project: https://github.com/MyOutDeskLLC/node-browser-history
// Definitions by: Arindam Dawn <https://github.com/arindamdawn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface BrowserHistory {
    browser: string;
    title: string;
    url: string;
    utc_time: number;
}

export function getAllHistory(historyTimeLength?: number): Promise<BrowserHistory[]>;
export function getFirefoxHistory(historyTimeLength?: number): Promise<BrowserHistory[]>;
export function getSeaMonkeyHistory(historyTimeLength?: number): Promise<BrowserHistory[]>;
export function getChromeHistory(historyTimeLength?: number): Promise<BrowserHistory[]>;
export function getOperaHistory(historyTimeLength?: number): Promise<BrowserHistory[]>;
export function getTorchHistory(historyTimeLength?: number): Promise<BrowserHistory[]>;
export function getSafariHistory(historyTimeLength?: number): Promise<BrowserHistory[]>;
export function getMaxthonHistory(historyTimeLength?: number): Promise<BrowserHistory[]>;
export function getVivaldiHistory(historyTimeLength?: number): Promise<BrowserHistory[]>;
export function getIEHistory(historyTimeLength?: number): Promise<BrowserHistory[]>;
