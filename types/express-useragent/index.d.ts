// Type definitions for express-useragent 1.0
// Project: https://www.npmjs.org/package/express-useragent
// Definitions by: Isman Usoh <https://github.com/isman-usoh>
//                 Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Request, Response, NextFunction } from 'express';

declare global {
    namespace Express {
        interface Request {
            useragent?: Details | undefined;
        }
    }
}

export interface Details {
    isMobile: boolean;
    isMobileNative: boolean;
    isTablet: boolean;
    isiPad: boolean;
    isiPod: boolean;
    isiPhone: boolean;
    isAndroid: boolean;
    isBlackberry: boolean;
    isOpera: boolean;
    isIE: boolean;
    isEdge: boolean;
    isIECompatibilityMode: boolean;
    isSafari: boolean;
    isFirefox: boolean;
    isWebkit: boolean;
    isChrome: boolean;
    isKonqueror: boolean;
    isOmniWeb: boolean;
    isSeaMonkey: boolean;
    isFlock: boolean;
    isAmaya: boolean;
    isEpiphany: boolean;
    isDesktop: boolean;
    isWindows: boolean;
    isWindowsPhone: boolean;
    isLinux: boolean;
    isLinux64: boolean;
    isMac: boolean;
    isChromeOS: boolean;
    isBada: boolean;
    isSamsung: boolean;
    isRaspberry: boolean;
    isBot: boolean;
    isCurl: boolean;
    isAndroidTablet: boolean;
    isWinJs: boolean;
    isKindleFire: boolean;
    isSilk: boolean;
    isCaptive: boolean;
    isSmartTV: boolean;
    silkAccelerated: boolean;
    browser: string;
    version: string;
    os: string;
    platform: string;
    geoIp: { [key: string]: any };
    source: string;
}

export const version: string;

export const DefaultAgent: Details;

export const Agent: Details;

export function getBrowser(string: string): string;

export function getBrowserVersion(string: string): string;

export function getOS(string: string): string;

export function getPlatform(string: string): string;

export function testCompatibilityMode(): void;

export function testSilk(): 'Silk' | false;

export function testKindleFire(): string | false;

export function testCaptiveNetwork(): 'CaptiveNetwork' | false;

export function reset(): Details;

export function testMobile(): void;

export function testTablet(): void;

export function testNginxGeoIP(): void;

export function testBot(): void;

export function testSmartTV(): void;

export function testAndroidTablet(): void;

export function testWebkit(): void;

export function parse(source: string): Details;

export class UserAgent {
    version: string;

    DefaultAgent: Details;

    Agent: Details;

    getBrowser(string: string): string;

    getBrowserVersion(string: string): string;

    getOS(string: string): string;

    getPlatform(string: string): string;

    testCompatibilityMode(): void;

    testSilk(): 'Silk' | false;

    testKindleFire(): string | false;

    testCaptiveNetwork(): 'CaptiveNetwork' | false;

    reset(): Details;

    testMobile(): void;

    testTablet(): void;

    testNginxGeoIP(): void;

    testBot(): void;

    testSmartTV(): void;

    testAndroidTablet(): void;

    testWebkit(): void;

    parse(source: string): Details;
}

export function express(): (req: Request, res: Response, next?: NextFunction) => void;
