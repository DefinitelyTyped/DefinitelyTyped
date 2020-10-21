import { ErrorCallback } from './tizen';

export interface HumanActivityMonitorManager {
    // tslint:disable-next-line no-unnecessary-generics as parameter types are contravariant, and use of generics allows to infer type for callback parameter
    getHumanActivityData<T extends HumanActivityData>(type: HumanActivityType, successCallback: HumanActivityMonitorSuccessCallback<T>,
        errorCallback?: ErrorCallback): void;
    // tslint:disable-next-line no-unnecessary-generics
    start<T extends HumanActivityData>(type: HumanActivityType, changedCallback?: HumanActivityMonitorSuccessCallback<T>,
        errorCallback?: ErrorCallback, option?: HumanActivityMonitorOption): void;
    stop(type: HumanActivityType): void;
    // tslint:disable-next-line no-unnecessary-generics
    setAccumulativePedometerListener<T extends HumanActivityData>(changeCallback: HumanActivityMonitorSuccessCallback<T>): void;
    unsetAccumulativePedometerListener(): void;
    // tslint:disable-next-line no-unnecessary-generics
    addActivityRecognitionListener<T extends HumanActivityData>(type: ActivityRecognitionType, listener: HumanActivityMonitorSuccessCallback<T>,
        errorCallback?: ErrorCallback): number;
    removeActivityRecognitionListener(listenerId: number, errorCallback?: ErrorCallback): void;
    startRecorder(type: HumanActivityRecorderType, option?: HumanActivityRecorderOption): void;
    stopRecorder(type: HumanActivityRecorderType): void;
    readRecorderData(type: HumanActivityRecorderType, query: HumanActivityRecorderQuery | undefined,
        successCallback: HumanActivityReadRecorderSuccessCallback, errorCallback?: ErrorCallback): void;
    isGestureSupported(type: GestureType): boolean;
    addGestureRecognitionListener(type: GestureType, listener: GestureRecognitionCallback,
        errorCallback?: ErrorCallback, alwaysOn?: boolean): number;
    removeGestureRecognitionListener(watchId: number): void;
}

export interface HumanActivityData {
}

export interface HumanActivityPedometerData extends HumanActivityData {
    readonly stepStatus: PedometerStepStatus;
    readonly speed: number;
    readonly walkingFrequency: number;
    readonly cumulativeDistance: number;
    readonly cumulativeCalorie: number;
    readonly cumulativeTotalStepCount: number;
    readonly cumulativeWalkStepCount: number;
    readonly cumulativeRunStepCount: number;
    readonly stepCountDifferences: StepDifference[];
}

export interface HumanActivityAccumulativePedometerData extends HumanActivityData {
    readonly stepStatus: PedometerStepStatus;
    readonly speed: number;
    readonly walkingFrequency: number;
    readonly accumulativeDistance: number;
    readonly accumulativeCalorie: number;
    readonly accumulativeTotalStepCount: number;
    readonly accumulativeWalkStepCount: number;
    readonly accumulativeRunStepCount: number;
    readonly stepCountDifferences: StepDifference[];
}

export interface HumanActivityHRMData extends HumanActivityData {
    readonly heartRate: number;
    readonly rRInterval: number;
}

export interface HumanActivityGPSInfo {
    readonly latitude: number;
    readonly longitude: number;
    readonly altitude: number;
    readonly speed: number;
    readonly errorRange: number;
    readonly timestamp: number;
}

export interface HumanActivityGPSInfoArray extends HumanActivityData {
    readonly gpsInfo: HumanActivityGPSInfo[];
}

export interface HumanActivitySleepMonitorData extends HumanActivityData {
    readonly status: SleepStatus;
    readonly timestamp: number;
}

export interface HumanActivitySleepDetectorData extends HumanActivityData {
    readonly status: SleepStatus;
}

export interface HumanActivityRecognitionData extends HumanActivityData {
    readonly type: ActivityRecognitionType;
    readonly timestamp: number;
    readonly accuracy: ActivityAccuracy;
}

export interface HumanActivityRecorderData {
    readonly startTime: number;
    readonly endTime: number;
}

export interface HumanActivityRecorderPedometerData extends HumanActivityRecorderData {
    readonly distance: number;
    readonly calorie: number;
    readonly totalStepCount: number;
    readonly walkStepCount: number;
    readonly runStepCount: number;
}

export interface HumanActivityRecorderHRMData extends HumanActivityRecorderData {
    readonly heartRate: number;
}

export interface HumanActivityRecorderSleepMonitorData extends HumanActivityRecorderData {
    readonly status: SleepStatus;
}

export interface HumanActivityRecorderPressureData extends HumanActivityRecorderData {
    readonly max?: number;
    readonly min?: number;
    readonly average?: number;
}

export interface GestureData {
    readonly type: GestureType;
    readonly event: GestureEvent;
    readonly timestamp: number;
    readonly x?: number;
    readonly y?: number;
}

export interface StepDifference {
    readonly stepCountDifference: number;
    readonly timestamp: number;
}

export interface HumanActivityRecorderOption {
    interval?: number;
    retentionPeriod?: number;
}

export interface HumanActivityRecorderQuery {
    startTime?: number;
    endTime?: number;
    anchorTime?: number;
    interval?: number;
}
export interface HumanActivityMonitorOption {
    callbackInterval?: number;
    sampleInterval?: number;
}

export type HumanActivityType = "PEDOMETER" | "HRM" | "GPS" | "SLEEP_MONITOR" | "SLEEP_DETECTOR";

export type HumanActivityRecorderType = "PEDOMETER" | "HRM" | "SLEEP_MONITOR" | "PRESSURE";

export type PedometerStepStatus = "NOT_MOVING" | "WALKING" | "RUNNING" | "UNKNOWN";

export type ActivityRecognitionType = "STATIONARY" | "WALKING" | "RUNNING" | "IN_VEHICLE";

export type ActivityAccuracy = "LOW" | "MEDIUM" | "HIGH";

export type SleepStatus = "ASLEEP" | "AWAKE" | "UNKNOWN";

export type GestureType = "GESTURE_DOUBLE_TAP" | "GESTURE_MOVE_TO_EAR" | "GESTURE_NO_MOVE" | "GESTURE_PICK_UP" | "GESTURE_SHAKE" | "GESTURE_SNAP" | "GESTURE_TILT" | "GESTURE_TURN_FACE_DOWN" | "GESTURE_WRIST_UP";

export type GestureEvent = "GESTURE_EVENT_DETECTED" | "GESTURE_SHAKE_DETECTED" | "GESTURE_SHAKE_FINISHED" | "GESTURE_SNAP_X_NEGATIVE" | "GESTURE_SNAP_X_POSITIVE" | "GESTURE_SNAP_Y_NEGATIVE" | "GESTURE_SNAP_Y_POSITIVE" | "GESTURE_SNAP_Z_NEGATIVE" | "GESTURE_SNAP_Z_POSITIVE";

export interface HumanActivityMonitorSuccessCallback<T extends HumanActivityData> {
    (humanactivitydata?: T): void;
}

export interface HumanActivityReadRecorderSuccessCallback {
    (humanactivitydata: HumanActivityRecorderData[]): void;
}

export interface GestureRecognitionCallback {
    (data: GestureData): void;
}
