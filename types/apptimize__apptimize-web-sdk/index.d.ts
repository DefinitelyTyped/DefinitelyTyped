interface Dictionary<T> {
    [key: string]: T;
}

// Named export this interface for use in setup method parameter
export interface ConfigAttributes {
    log_level?:
        | "LOG_LEVEL_VERBOSE"
        | "LOG_LEVEL_DEBUG"
        | "LOG_LEVEL_INFO"
        | "LOG_LEVEL_WARN"
        | "LOG_LEVEL_ERROR"
        | "LOG_LEVEL_NONE"
        | undefined;
    result_post_delay_ms?: number | undefined;
}

// Named export this interface for use in callback methods
export interface VariantInfo {
    getAnonymousUserId(): string;
    getCurrentPhase(): number;
    getCycle(): number;
    getExperimentId(): number;
    getExperimentName(): string;
    getExperimentType(): number;
    getExperimentTypeName(): string;
    getParticipationPhase(): number;
    getUserHasParticipated(): boolean;
    getUserId(): string;
    getVariantId(): number;
    getVariantName(): string;
}

type simpleData = string | number | boolean;
type callback = () => void;
type variantInfoCallback = (variantInfo: VariantInfo) => void;
type unenrollmentCallback = (variantInfo: VariantInfo, unenrollmentReason: string) => void;

interface Apptimize {
    flushTracking(): void;
    getApptimizeAnonUserId(): string;
    getApptimizeSDKPlatform(): string;
    getApptimizeSDKVersion(): string;
    getBool(name: string, defaultValue: boolean): boolean;
    getBoolArray(name: string, defaultValue: boolean[]): boolean[];
    getBoolDictionary(name: string, defaultValue: Dictionary<boolean>): Dictionary<boolean>;
    getCustomAttributes(): Dictionary<simpleData>;
    getCustomerUserId(): string;
    getDouble(name: string, defaultValue: number): number;
    getDoubleArray(name: string, defaultValue: number[]): number[];
    getDoubleDictionary(name: string, defaultValue: Dictionary<number>): Dictionary<number>;
    getInt(name: string, defaultValue: number): number;
    getIntArray(name: string, defaultValue: number[]): number[];
    getIntDictionary(name: string, defaultValue: Dictionary<number>): Dictionary<number>;
    getString(name: string, defaultValue: string): string;
    getStringArray(name: string, defaultValue: string[]): string[];
    getStringDictionary(name: string, defaultValue: Dictionary<string>): Dictionary<string>;
    getVariantInfo(): VariantInfo[];
    isFeatureFlagEnabled(name: string): boolean;
    runCodeBlock(codeBlockVariableName: string, callback: Dictionary<callback>): void;
    setAppName(name: string): void;
    setAppVersion(version: string): void;
    setCustomAttributes(attributes: Dictionary<simpleData>): void;
    setCustomerUserId(id: string): void;
    setOnApptimizeInitializedCallback(callback: callback): void;
    setOnEnrolledInExperimentCallback(callback: variantInfoCallback): void;
    setOnMetadataUpdatedCallback(callback: callback): void;
    setOnParticipatedInExperimentCallback(callback: variantInfoCallback): void;
    setOnUnenrolledInExperimentCallback(callback: unenrollmentCallback): void;
    setPilotTargetingId(id: string): void;
    setup(appKey: string, configAttributes?: ConfigAttributes): void;
    track(eventName: string): void;
    trackValue(eventName: string, value: number): void;
    updateApptimizeMetadataOnce(): void;
}

declare const apptimize: Apptimize;
export default apptimize;
