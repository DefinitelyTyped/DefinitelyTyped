declare module "chivox_h5sdk/types" {
    type ChivoxCoreType = `${ChivoxCoreTypeEnum}`;
    type ChivoxPreset = import("./preset").ChivoxPreset;
    type ChivoxPresetCnPredRaw = import("./preset").ChivoxPresetCnPredRaw;
    type ChivoxOptions = import("./options").ChivoxOptions;
    type ChivoxInternalRequest = import("./result").ChivoxInternalRequest;
    type ChivoxRecordOptions = import("./options").ChivoxRecordOptions;
    type ChivoxRecorderOptions = import("./options").ChivoxRecorderOptions;
}
