export default class EPCISHeader extends Entity {
    /**
     * Set the epcisMasterData property
     * @return the epcisHeader instance
     */
    setEPCISMasterData(epcisMasterData: EPCISMasterData): EPCISHeader;
    epcisMasterData: EPCISMasterData;
    /**
     * Getter for the epcisMasterData property
     * @return the epcisMasterData
     */
    getEPCISMasterData(): EPCISMasterData;
}
import Entity from "../Entity";
import EPCISMasterData from "./EPCISMasterData";
