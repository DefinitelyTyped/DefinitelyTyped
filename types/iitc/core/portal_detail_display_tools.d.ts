import { IITC } from "./iitctypes";

export {};

declare global {
    /**
     * returns displayable text+link about portal range
     */
    function getRangeText(d: IITC.PortalDataDetail): string[];

    /**
     * given portal details, returns html code to display mod details.
     */
    function getModDetails(d: IITC.PortalDataDetail): string;

    function getEnergyText(d: IITC.PortalDataDetail): string[];

    /**
     * octant=slot: 0=E, 1=NE, 2=N, 3=NW, 4=W, 5=SW, 6=S, SE=7
     * resos in the display should be ordered like this:
     *   N    NE         Since the view is displayed in rows, they
     *   NW    E          need to be ordered like this: N NE NW E W SE SW S
     *   W    SE         i.e. 2 1 3 0 4 7 5 6
     *   SW    S
     * note: as of 2014-05-23 update, this is not true for portals with empty slots!
     */
    function getResonatorDetails(d: IITC.PortalDataDetail): string;

    /**
     * helper function that renders the HTML for a given resonator. Does
     * not work with raw details-hash. Needs digested infos instead:
     * slot: which slot this resonator occupies. Starts with 0 (east) and
     * rotates clockwise. So, last one is 7 (southeast).
     */
    function renderResonatorDetails(slot: number, level: number, nrg: string, nick: string): string[];

    /**
     * calculate AP gain from destroying portal and then capturing it by deploying resonators
     */
    function getAttackApGainText(d: IITC.PortalDataDetail, fieldCount: number, linkCount: number): string[];

    function getHackDetailsText(d: IITC.PortalDataDetail): string[];

    function getMitigationText(d: IITC.PortalDataDetail, linkCount: number): string[];
}
