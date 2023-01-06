export default class EPCISHeader extends Entity {
    /**
     * Set the epcisMasterData property
     * @param {EPCISMasterData} epcisMasterData
     * @return {EPCISHeader} - the epcisHeader instance
     */
    setEPCISMasterData(epcisMasterData: EPCISMasterData): EPCISHeader;
    epcisMasterData: EPCISMasterData;
    /**
     * Getter for the epcisMasterData property
     * @return {EPCISMasterData} - the epcisMasterData
     */
    getEPCISMasterData(): EPCISMasterData;
}
import Entity from "../Entity";
import EPCISMasterData from "./EPCISMasterData";
