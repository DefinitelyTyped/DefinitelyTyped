// Type definitions for node-browser-history 1.0
// Project: https://github.com/MyOutDeskLLC/node-browser-history
// Definitions by: Arindam Dawn <https://github.com/arindamdawn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function getAllHistory(historyTimeLength?: number): Promise<any[]>;
export function getFirefoxHistory(historyTimeLength?: number): Promise<any[]>;
export function getSeaMonkeyHistory(historyTimeLength?: number): Promise<any[]>;
export function getChromeHistory(historyTimeLength?: number): Promise<any[]>;
export function getOperaHistory(historyTimeLength?: number): Promise<any[]>;
export function getTorchHistory(historyTimeLength?: number): Promise<any[]>;
export function getSafariHistory(historyTimeLength?: number): Promise<any[]>;
export function getMaxthonHistory(historyTimeLength?: number): Promise<any[]>;
export function getVivaldiHistory(historyTimeLength?: number): Promise<any[]>;
export function getIEHistory(historyTimeLength?: number): Promise<any[]>;
