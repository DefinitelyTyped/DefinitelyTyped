import { PID, PV1, ORC, OBR, OBX } from "../segments";
import { Base } from "./base.event";

export interface OMG extends Base {
  SFT?: any;
  PID: PID;
  PD1?: any;
  MK1?: any;
  PV1: PV1;
  PV2?: any;
  ORC: ORC;
  OBR: OBR;
  TQ1?: any;
  TQ2?: any;
  CTD?: any;
  OBX: OBX;
  FT1?: any;
  SPM?: any;
  DSC?: any;
}
