import { PID, PV1 } from "../segments";
import { Base } from "./base.event";

export interface ADT extends Base {
  EVN: any;
  PID: PID;
  PV1: PV1;
}
