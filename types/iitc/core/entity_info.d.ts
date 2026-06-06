import { IITC } from "./iitctypes";

declare global {
    /**
     * given the entity detail data, returns the team the entity belongs to. Uses TEAM_* enum values.
     */
    function getTeam(details: IITC.PortalData): 0 | 1 | 2;
    function teamStringToId(teamStr: string): 0 | 1 | 2;
}
