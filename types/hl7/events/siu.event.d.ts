import { PID, PV1, OBX, ORC, OBR, AIS, AIL } from '../segments';
import { Base } from './base.event';

export interface SIU extends Base {
    PID: PID;
    PD1?: any;
    PV1: PV1;
    PV2?: any;
    OBX: OBX;
    DG1?: any;
    RGS?: any;
    AIS?: AIS;
    AIG?: any; // TODO documentation needed !
    AIL?: AIL;
    AIP?: any; // TODO documentation needed !
    ORC: ORC;
    OBR: OBR;
    TQ1?: any;
    TQ2?: any;
    CTD?: any;
    FT1?: any;
    SPM?: any;
    DSC?: any;
}
