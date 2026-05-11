import type { ChivoxCoreTypeEnum } from "./enum";

export type ChivoxCoreType = `${ChivoxCoreTypeEnum}`;
export type ChivoxPreset<T extends `${ChivoxCoreTypeEnum}`> = import("./preset").ChivoxPreset<T>;
export type ChivoxPresetCnPredRaw = import("./preset").ChivoxPresetCnPredRaw;
export type ChivoxPresetEnPredScore = import("./preset").ChivoxPresetEnPredScore;

export type ChivoxSignature = import("./options").ChivoxSignature;
export type ChivoxOptions = import("./options").ChivoxOptions;
export type ChivoxRecordOptions<T extends `${ChivoxCoreTypeEnum}`> = import("./options").ChivoxRecordOptions<T>;
export type ChivoxRecorderOptions = import("./options").ChivoxRecorderOptions;

export type BaseChivoxInternalWordDetail = import("./result").BaseChivoxInternalWordDetail;
export type ChivoxCnPredRawInternalWordDetail = import("./result").ChivoxCnPredRawInternalWordDetail;
export type ChivoxEnPredScoreInternalWordDetail = import("./result").ChivoxEnPredScoreInternalWordDetail;
export type ChivoxInternalRequest<T extends `${ChivoxCoreTypeEnum}`> = import("./result").ChivoxInternalRequest<T>;
export type ChivoxEnPredScoreInternalRequest = import("./result").ChivoxEnPredScoreInternalRequest;
export type ChivoxFinishRequest<T extends `${ChivoxCoreTypeEnum}`> = import("./result").ChivoxFinishRequest<T>;
export type ChivoxCnPredRawFinishWord = import("./result").ChivoxCnPredRawFinishWord;
export type ChivoxCnPredRawFinishRequest = import("./result").ChivoxCnPredRawFinishRequest;
export type ChivoxEnPredScoreFinishWord = import("./result").ChivoxEnPredScoreFinishWord;
export type ChivoxEnPredScoreFinishRequest = import("./result").ChivoxEnPredScoreFinishRequest;
