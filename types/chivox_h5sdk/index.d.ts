import type { ChivoxCoreTypeEnum } from "./enum";

export type ChivoxCoreType = `${ChivoxCoreTypeEnum}`;
export type ChivoxPreset = import("./preset").ChivoxPreset;
export type ChivoxPresetCnPredRaw = import("./preset").ChivoxPresetCnPredRaw;
export type ChivoxOptions = import("./options").ChivoxOptions;
export type ChivoxInternalRequest = import("./result").ChivoxInternalRequest;
export type ChivoxRecordOptions = import("./options").ChivoxRecordOptions;
export type ChivoxRecorderOptions = import("./options").ChivoxRecorderOptions;
