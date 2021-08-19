import { OccupationCodeVersionType } from "./enums";

export interface CommonPerson {
  lastUpdateTime?: string;
  firstName?: string;
  lastName: string;
  middleNames: string[] | null;
  prefix?: string;
  suffix?: string;
  occupationCode?: string;
  occupationCodeVersion?: OccupationCodeVersionType;
}
