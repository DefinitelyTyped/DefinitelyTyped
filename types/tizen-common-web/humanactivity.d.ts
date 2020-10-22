import { ErrorCallback } from './tizen';

export interface HumanActivityMonitorManager {
    // tslint:disable-next-line no-unnecessary-generics as parameter types are contravariant, and use of generics allows to infer type for callback parameter
    getHumanActivityData<T extends HumanActivityData>(type: HumanActivityType, successCallback: HumanActivityMonitorSuccessCallback<T>,
        errorCallback?: ErrorCallback | null): void;
    // tslint:disable-next-line no-unnecessary-generics
    start<T extends HumanActivityData>(type: HumanActivityType, changedCallback?: HumanActivityMonitorSuccessCallback<T> | null,
        errorCallback?: ErrorCallback | null, option?: HumanActivityMonitorOption | null): void;
    stop(type: HumanActivityType): void;
    // tslint:disable-next-line no-unnecessary-generics
    setAccumulativePedometerListener<T extends HumanActivityData>(changeCallback: HumanActivityMonitorSuccessCallback<T>): void;
    unsetAccumulativePedometerListener(): void;
    // tslint:disable-next-line no-unnecessary-generics
    addActivityRecognitionListener<T extends HumanActivityData>(type: ActivityRecognitionType, listener: HumanActivityMonitorSuccessCallback<T>,
        errorCallback?: ErrorCallback | null): number;
    removeActivityRecognitionListener(listenerId: number, errorCallback?: ErrorCallback | null): void;
    startRecorder(type: HumanActivityRecorderType, option?: HumanActivityRecorderOption): void;
    stopRecorder(type: HumanActivityRecorderType): void;
    readRecorderData(type: HumanActivityRecorderType, query: HumanActivityRecorderQuery | null,
        successCallback: HumanActivityReadRecorderSuccessCallback, errorCallback?: ErrorCallback | null): void;
    isGestureSupported(type: GestureType): boolean;
    addGestureRecognitionListener(type: GestureType, listener: GestureRecognitionCallback,
        errorCallback?: ErrorCallback | null, alwaysOn?: boolean | null): number;
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

export enum HumanActivityType {
    PEDOMETER = "PEDOMETER",
    HRM = "HRM",
    GPS = "GPS",
    SLEEP_MONITOR = "SLEEP_MONITOR",
    SLEEP_DETECTOR = "SLEEP_DETECTOR"
}

export enum HumanActivityRecorderType {
    PEDOMETER = "PEDOMETER",
    HRM = "HRM",
    SLEEP_MONITOR = "SLEEP_MONITOR",
    PRESSURE = "PRESSURE"
}

export enum PedometerStepStatus {
    NOT_MOVING = "NOT_MOVING",
    WALKING = "WALKING",
    RUNNING = "RUNNING",
    UNKNOWN = "UNKNOWN"
}

export enum ActivityRecognitionType {
    STATIONARY = "STATIONARY",
    WALKING = "WALKING",
    RUNNING = "RUNNING",
    IN_VEHICLE = "IN_VEHICLE"
}

export enum ActivityAccuracy {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}

export enum SleepStatus {
    ASLEEP = "ASLEEP",
    AWAKE = "AWAKE",
    UNKNOWN = "UNKNOWN"
}

export enum GestureType {
    GESTURE_DOUBLE_TAP = "GESTURE_DOUBLE_TAP",
    GESTURE_MOVE_TO_EAR = "GESTURE_MOVE_TO_EAR",
    GESTURE_NO_MOVE = "GESTURE_NO_MOVE",
    GESTURE_PICK_UP = "GESTURE_PICK_UP",
    GESTURE_SHAKE = "GESTURE_SHAKE",
    GESTURE_SNAP = "GESTURE_SNAP",
    GESTURE_TILT = "GESTURE_TILT",
    GESTURE_TURN_FACE_DOWN = "GESTURE_TURN_FACE_DOWN",
    GESTURE_WRIST_UP = "GESTURE_WRIST_UP"
}

export enum GestureEvent {
    GESTURE_EVENT_DETECTED = "GESTURE_EVENT_DETECTED",
    GESTURE_SHAKE_DETECTED = "GESTURE_SHAKE_DETECTED",
    GESTURE_SHAKE_FINISHED = "GESTURE_SHAKE_FINISHED",
    GESTURE_SNAP_X_NEGATIVE = "GESTURE_SNAP_X_NEGATIVE",
    GESTURE_SNAP_X_POSITIVE = "GESTURE_SNAP_X_POSITIVE",
    GESTURE_SNAP_Y_NEGATIVE = "GESTURE_SNAP_Y_NEGATIVE",
    GESTURE_SNAP_Y_POSITIVE = "GESTURE_SNAP_Y_POSITIVE",
    GESTURE_SNAP_Z_NEGATIVE = "GESTURE_SNAP_Z_NEGATIVE",
    GESTURE_SNAP_Z_POSITIVE = "GESTURE_SNAP_Z_POSITIVE"
}

export interface HumanActivityMonitorSuccessCallback<T extends HumanActivityData> {
    (humanactivitydata?: T): void;
}

export interface HumanActivityReadRecorderSuccessCallback {
    (humanactivitydata: HumanActivityRecorderData[]): void;
}

export interface GestureRecognitionCallback {
    (data: GestureData): void;
}
