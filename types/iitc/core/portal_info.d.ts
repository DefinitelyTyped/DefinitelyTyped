import { IITC } from "./iitctypes";

export {};

declare global {
    /**
     * returns a float. Displayed portal level is always rounded down from that value.
     */
    function getPortalLevel(d: IITC.PortalDataDetail): number;

    function getTotalPortalEnergy(d: IITC.PortalDataDetail): number;

    /**
     * @deprecated use getTotalPortalEnergy (just renamed)
     */
    function getPortalEnergy(d: IITC.PortalDataDetail): number;

    function getCurrentPortalEnergy(d: IITC.PortalDataDetail): number;

    /**
     * formula by the great gals and guys at
     * @link http://decodeingress.me/2012/11/18/ingress-portal-levels-and-link-range/
     */
    function getPortalRange(d: IITC.PortalDataDetail): number;

    /** additional range boost calculation */
    function getLinkAmpRangeBoost(d: IITC.PortalDataDetail): number;

    function getAttackApGain(d: IITC.PortalDataDetail, fieldCount: number, linkCount: number): {
        friendlyAp: number;
        deployCount: number;
        upgradeCount: number;
        enemyAp: number;
        destroyAp: number;
        resoAp: number;
        captureAp: number;
    };

    /** This function will return the potential level a player can upgrade it to */
    function potentialPortalLevel(d: IITC.PortalDataDetail): number;

    function fixPortalImageUrl(url: string): string;

    function getPortalModsByType(d: IITC.PortalDataDetail, type: IITC.ModType): IITC.Mod[];

    function getPortalShieldMitigation(d: IITC.PortalDataDetail): number;
    function getPortalLinkDefenseBoost(d: IITC.PortalDataDetail): number;
    function getPortalLinksMitigation(linkCount: number): number;
    function getPortalMitigationDetails(d: IITC.PortalDataDetail, linkCount: number): {
        shields: number;
        links: number;
        linkDefenseBoost: number;
        excess: number;
    };
    function getMaxOutgoingLinks(d: IITC.PortalDataDetail): number;

    function getPortalHackDetails(d: IITC.PortalDataDetail): {
        cooldown: number;
        hacks: number;
        burnout: number;
    };

    /**
     * given a detailed portal structure, return summary portal data, as seen in the map tile data
     */
    function getPortalSummaryData(d: IITC.PortalDataDetail): {
        level: number;
        title: string;
        image: string;
        resCount: number;
        latE6: number;
        health: number;
        team: number;
        lngE6: number;
        type: "portal";
    };

    function getPortalAttackValues(d: IITC.PortalDataDetail): {
        hit_bonus: number;
        force_amplifier: number;
        attack_frequency: number;
    };
}
