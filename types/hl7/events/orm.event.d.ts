import { OBR, OBX, ORC, PID, PV1 } from "../segments";
import { Base } from "./base.event";

export interface ORM extends Base {
  PID: PID;
  PD1?: any;
  PV1?: PV1;
  PV2?: any;
  IN1?: any;
  IN2?: any;
  IN3?: any;
  GT1?: any;
  AL1?: any;
  ORC: ORC;
  OBR: OBR;
  OBX: OBX;
  CTD?: any;
  DG1?: any;
  FT1?: any;
  CTI?: any;
  BLG?: any;
  ZDS: any;
}
