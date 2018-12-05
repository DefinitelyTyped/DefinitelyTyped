import { EventType } from "./cast.framework.events";

export as namespace system
export type EventType =
    // Fired when the system is ready.
    | "READY"
    // Fired when the application is terminated
    | "SHUTDOWN"
    // Fired when a new sender has connected.
    | "SENDER_CONNECTED"
    // Fired when a sender has disconnected.
    | "SENDER_DISCONNECTED"
    // Fired when there is a system error.
    | "ERROR"
    // Fired when the system volume has changed.
    | "SYSTEM_VOLUME_CHANGED"
    // Fired when the visibility of the application has changed
    // (for example after a HDMI Input change or when the TV is turned
    // off/on and the cast device is externally powered).
    // Note that this API has the same effect as the webkitvisibilitychange event raised
    // by your document, we provided it as CastReceiverManager API for convenience and
    // to avoid a dependency on a webkit-prefixed event.
    | "VISIBILITY_CHANGED"
    // Fired when the standby state of the TV has changed.
    // This event is related to the visibility chnaged event, as if the TV is in standby
    // the visibility will be false, the visibility is more granular
    // (as it also detects that the TV has selected a different channel)
    // but it is not reliably detected in all TVs,
    // standby can be used in those cases as most TVs implement it.
    | "STANDBY_CHANGED"
    | "MAX_VIDEO_RESOLUTION_CHANGED"
    | "FEEDBACK_STARTED";

export type SystemState =
    | "NOT_STARTED"
    | "STARTING_IN_BACKGROUND"
    | "STARTING"
    | "READY"
    | "STOPPING_IN_BACKGROUND"
    | "STOPPING";

export type StandbyState = "STANDBY" | "NOT_STANDBY" | "UNKNOWN";

export type DisconnectReason = "REQUESTED_BY_SENDER" | "ERROR" | "UNKNOWN";

/**
 * Event dispatched by @see{@link CastReceiverManager} when the visibility of the application changes (HDMI input change; TV is turned off).
 */
export class VisibilityChangedEvent {
    constructor(isVisible: boolean);

    /**
     * Whether the Cast device is the active input or not.
     */
    isVisible: boolean;
}

/**
 * Represents the system volume data.
 */
export interface SystemVolumeData {
    /**
     * The level (from 0.0 to 1.0) of the system volume
     */
    level: number;

    /**
     * Whether the system volume is muted or not.
     */
    muted: boolean;
}
/**
 * Event dispatched by @see{CastReceiverManager} when the system volume changes.
 */
export class SystemVolumeChangedEvent extends Event {
    constructor(volume: SystemVolumeData);

    /**
     *  The system volume data
     */
    data: SystemVolumeData;
}
/**
 * Event dispatched by @see{@link CastReceiverManager} when the TV enters/leaves the standby state.
 */
export class StandbyChangedEvent {
    constructor(isStandby: boolean);

    isStandby: boolean;
}
/**
 * Whether the TV is in standby or not.
 */
export interface ShutdownEvent extends Event {
    [key: string]: any;
}

/**
 * Event dispatched by @see{@link CastReceiverManager} when a sender is disconnected.
 */
export class SenderDisconnectedEvent extends Event {
    constructor(senderId: string, userAgent: string);
    /**
     * The ID of the sender connected.
     */
    senderId: string;

    /**
     * The user agent of the sender.
     */
    userAgent: string;

    /**
     * The reason the sender was disconnected.
     */
    reason?: DisconnectReason;
}

/**
 * Event dispatched by @see{@link CastReceiverManager} when a sender is connected.
 */
export class SenderConnectedEvent extends Event {
    constructor(senderId: string, userAgent: string);
    /**
     * The ID of the sender connected.
     */
    senderId: string;

    /**
     * The user agent of the sender.
     */
    userAgent: string;
}

/**
 * Represents the data of a connected sender device.
 */
export interface Sender {
    /**
     * The sender Id.
     */
    id: string;

    /**
     * Indicate the sender supports large messages (>64KB)
     */
    largeMessageSupported?: boolean;

    /**
     * The userAgent of the sender.
     */
    userAgent?: string;
}

/**
 * Event dispatched by CastReceiverManager when the system is ready.
 */
export class ReadyEvent {
    constructor(applicationData: ApplicationData);

    /**
     * The application data
     */
    data: ApplicationData;
}

/**
 * Event dispatched by @see{@link CastReceiverManager} when the system needs to update the restriction on maximum video resolution.
 */
export class MaxVideoResolutionChangedEvent extends Event {
    constructor(height: number);

    /**
     * Maximum video resolution requested by the system. The value of 0 means there is no restriction.
     */
    height: number;
}
/** Event dispatched by @see{@link CastReceiverManager} when the systems starts to create feedback report. */
export interface FeedbackStartedEvent extends Event {
    [key: string]: any;
}
/** Event dispatched by @see{@link CastReceiverContext} which contains system information. */
export class Event {
    constructor(type: EventType, data?: any);
    type: EventType;
    data?: any;
}

/** Represents the data of the launched application. */
export interface ApplicationData {
    id(): string;
    launchingSenderId(): string;
    name(): string;
    namespaces(): string[];
    sessionId(): number;
}
