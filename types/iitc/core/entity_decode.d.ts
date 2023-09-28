import { IITC } from "./iitctypes";

export {};

declare global {
    /**
     * decode the on-network array entity format into an object format closer to that used before
     * makes much more sense as an object, means that existing code didn't need to change, and it's what the
     * stock intel site does internally too (the array format is only on the network)
     */
    class DecodeArray {
        portalSummary(data: any[]): IITC.PortalData | IITC.PortalDataCore | undefined;
        portalDetail(data: any[]): IITC.PortalDataDetail | undefined;
    }

    // private but exposed:
    // function parseMod(arr: null | any[]): IITC.Mod | null;
    // function parseResonator(arr: null | any[]): IITC.Resonator | null;
    // function parseArtifactBrief(arr: null | any[]): { fragment: any, target: any };
    // function parseArtifactDetail(arr: null | any[]): IITC.ArtifactDetail | null;

    var decodeArray: DecodeArray;
}
