export as namespace system;

/**
 * System events dispatched by {@link framework.CastReceiverContext}.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.EventType
 */
export const EventType: {
    readonly ALLOW_GROUP_CHANGE: "allowgroupchange";
    /**
     * Fired when there is a system error.
     */
    readonly ERROR: "error";
    /**
     * Fired when system starts to create feedback report.
     */
    readonly FEEDBACK_STARTED: "feedbackstarted";
    readonly GROUP_CAPABILITIES: "groupcapabilities";
    readonly MAX_VIDEO_RESOLUTION_CHANGED: "maxvideoresolutionchanged";
    readonly PROXIMITY_CHANGED: "proximitychanged";
    /**
     * Fired when the system is ready.
     */
    readonly READY: "ready";
    /**
     * Fired when a new sender has connected.
     */
    readonly SENDER_CONNECTED: "senderconnected";
    /**
     * Fired when a sender has disconnected.
     */
    readonly SENDER_DISCONNECTED: "senderdisconnected";
    /**
     * Fired when the application is terminated
     */
    readonly SHUTDOWN: "shutdown";
    /**
     * Fired when the standby state of the TV has changed.
     * This event is related to the visibility chnaged event, as if the TV is in standby
     * the visibility will be false, the visibility is more granular
     * (as it also detects that the TV has selected a different channel)
     * but it is not reliably detected in all TVs,
     * standby can be used in those cases as most TVs implement it.
     */
    readonly STANDBY_CHANGED: "standbychanged";
    /**
     * Fired when the system volume has changed.
     */
    readonly SYSTEM_VOLUME_CHANGED: "systemvolumechanged";
    /**
     * Fired when the visibility of the application has changed
     * (for example after a HDMI Input change or when the TV is turned
     * off/on and the cast device is externally powered).
     * Note that this API has the same effect as the webkitvisibilitychange event raised
     * by your document, we provided it as {@link framework.CastReceiverContext}
     * API for convenience and to avoid a dependency on a webkit-prefixed event.
     */
    readonly VISIBILITY_CHANGED: "visibilitychanged";
};
/**
 * System events dispatched by {@link framework.CastReceiverContext}.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.EventType
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * Represents the current system state.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.SystemState
 */
export const SystemState: {
    /**
     * The application has not been requested to start yet.
     */
    readonly NOT_STARTED: "notstarted";
    /**
     * Application is ready to send and receive messages and it is in foreground.
     */
    readonly READY: "ready";
    /**
     * Application is starting.
     */
    readonly STARTING: "starting";
    /**
     * Application is starting but it is in background.
     */
    readonly STARTING_IN_BACKGROUND: "startinginbackground";
    /**
     * Application is stopping.
     */
    readonly STOPPING: "stopping";
    /**
     * Application is stopping but it is in background.
     */
    readonly STOPPING_IN_BACKGROUND: "stoppinginbackground";
};
/**
 * Represents the current system state.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.SystemState
 */
export type SystemState = (typeof SystemState)[keyof typeof SystemState];

/**
 * Types of custom messages.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.MessageType
 */
export const MessageType: {
    /**
     * Messages are free-form strings. The application is responsible for encoding/decoding the information transmitted.
     */
    readonly STRING: "string";
    /**
     * Messages are JSON-encoded. The underlying transport will use a JSON encoded string.
     */
    readonly JSON: "json";
};
/**
 * Types of custom messages.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.MessageType
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * Represents the current standby state reported by the platform. It may be UNKNOWN
 * if the cast platform was unable to determine the state yet.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.StandbyState
 */
export const StandbyState: {
    readonly NOT_STANDBY: "notstandby";
    readonly STANDBY: "standby";
    readonly UNKNOWN: "unknown";
};
/**
 * Represents the current standby state reported by the platform. It may be UNKNOWN
 * if the cast platform was unable to determine the state yet.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.StandbyState
 */
export type StandbyState = (typeof StandbyState)[keyof typeof StandbyState];

/**
 * Represents the disconnect reason.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.DisconnectReason
 */
export const DisconnectReason: {
    /**
     * There was a protocol error.
     */
    readonly ERROR: "error";
    /**
     * Connection close was actively requested by the sender application (usually
     * triggered by the user).
     */
    readonly REQUESTED_BY_SENDER: "requested_by_sender";
    /**
     * It is unknown if the sender requested to disconnect gracefully calling close
     * (most likely it didn't, but the close message could have been lost). This
     * normally happens when there is a network timeout or if the sender application
     *  crashes or if the sender OS closes the socket.
     */
    readonly UNKNOWN: "unknown";
    /**
     * The receiver application stopped itself.
     */
    readonly APPLICATION_STOP: "application_stop";
    /**
     * The platform closed the application while senders were still connected.
     */
    readonly ABRUPT_SHUTDOWN: "abrupt_shutdown";
    /**
     * The application closed when no senders were connected.
     */
    readonly NO_SENDERS: "no_senders";
    /**
     * The underlying SSL socket was closed by the sender without a graceful
     * virtual connection close.
     */
    readonly TRANSPORT_CLOSED: "transport_closed";
    /**
     * The underlying SSL socket was aborted by the peer.
     */
    readonly TRANSPORT_ABORTED: "transport_aborted";
    /**
     * The underlying SSL socket was closed because of heartbeat failure.
     */
    readonly TRANSPORT_TOO_LONG_INACTIVE: "transport_too_long_inactive";
    /**
     * The connection was gracefully closed by the Cast receiver.
     */
    readonly CLOSED_BY_SELF: "closed_by_self";
};
/**
 * Represents the disconnect reason.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.DisconnectReason
 */
export type DisconnectReason = (typeof DisconnectReason)[keyof typeof DisconnectReason];

/**
 * Represent where the receiver was launched from.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.LaunchedFrom
 */
export const LaunchedFrom: {
    /**
     * App was launched by Cast V2 request.
     */
    readonly CAST: "CAST";
    /**
     * App was launched by assistant request (e.g. voice command).
     */
    readonly CLOUD: "CLOUD";
    /**
     * App was launched by DIAL request.
     */
    readonly DIAL: "DIAL";
    /**
     * The launch owner could not be determined.
     */
    readonly UNKNOWN: "UNKNOWN";
};
/**
 * Represent where the receiver was launched from.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.LaunchedFrom
 */
export type LaunchedFrom = (typeof LaunchedFrom)[keyof typeof LaunchedFrom];

/**
 * Device capabilities.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.DeviceCapabilities
 */
export const DeviceCapabilities: {
    readonly APP_FOREGROUND: "app_foreground";
    /**
     * Audio Assistant support. For example, Google Home and Google Home Mini.
     */
    readonly AUDIO_ASSISTANT: "audio_assistant";
    /**
     * Bluetooth support.
     */
    readonly BLUETOOTH_SUPPORTED: "bluetooth_supported";
    /**
     * Whether this device is running on an audio-only platform. Some APIs may
     * not be fully supported on such platforms.
     */
    readonly CAST_LITE_ONLY: "cast_lite_only";
    /**
     * Display output support. For example, Chromecast and Cast TVs have display
     * support, Chromecast Audio and Google Home have not.
     */
    readonly DISPLAY_SUPPORTED: "display_supported";
    /**
     * Whether this device supports an input mechanism, such as an unlocking DPAD.
     */
    readonly DPAD_INPUT_SUPPORTED: "dpad_input_supported";
    /**
     * Hi-res audio (up to 24-bit / 96KHz) support.
     */
    readonly HI_RES_AUDIO_SUPPORTED: "hi_res_audio_supported";
    /**
     * Flag to know if CBCS scheme (SAMPLE-AES) is supported.
     */
    readonly IS_CBCS_SUPPORTED: "is_cbcs_supported";
    /**
     * Flag to know if the cast device is registered in cast developer console
     */
    readonly IS_DEVICE_REGISTERED: "is_device_registered";
    readonly IS_DOLBY_ATMOS_SUPPORTED: "is_dolby_atmos_supported";
    /**
     * Dolby Vision support of the current setup (that is, Chromecast and the TV it is connected to).
     */
    readonly IS_DV_SUPPORTED: "is_dv_supported";
    /**
     * If the device is a virtual device and represents a group target rather than standalone.
     */
    readonly IS_GROUP: "is_group";
    /**
     * HDR video support of the current setup (that is, Chromecast and the TV it is connected to).
     */
    readonly IS_HDR_SUPPORTED: "is_hdr_supported";
    readonly REMOTE_CONTROL_OVERLAY_SUPPORTED: "remote_control_overlay_supported";
    readonly SLEEP_TIMER_OVERLAY_SUPPORTED: "sleep_timer_overlay_supported";
    /**
     * Touch input support, that is, the devices have a touchable display. For
     * example, Google Nest Hub and Google Nest Hub Max.
     */
    readonly TOUCH_INPUT_SUPPORTED: "touch_input_supported";
};
/**
 * Device capabilities.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.DeviceCapabilities
 */
export type DeviceCapabilities = (typeof DeviceCapabilities)[keyof typeof DeviceCapabilities];

/**
 * Describes the object returned by {@link framework.CastReceiverContext#getDeviceCapabilities}.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.DeviceCapabilitiesObj
 */
export interface DeviceCapabilitiesObj {
    audio_assistant?: boolean | undefined;
    bluetooth_supported?: boolean | undefined;
    display_supported?: boolean | undefined;
    hi_res_audio_supported?: boolean | undefined;
    is_dv_supported?: boolean | undefined;
    is_hdr_supported?: boolean | undefined;
    cast_lite_only?: boolean | undefined;
    dpad_input_supported?: boolean | undefined;
    touch_input_supported?: boolean | undefined;
    is_group?: boolean | undefined;
    remote_control_overlay_supported?: boolean | undefined;
    sleep_timer_overlay_supported?: boolean | undefined;
    app_foreground?: boolean | undefined;
    is_device_registered?: boolean | undefined;
    is_cbcs_supported?: boolean | undefined;
    is_dolby_atmos_supported?: boolean | undefined;
}

/**
 * Constants for the valid keys in {@link DeviceInformationObj}.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.DeviceInformation
 */
export const DeviceInformation: {
    readonly MODEL_NAME: "model-name";
    readonly BRAND_NAME: "brand-name";
    readonly OS_NAME: "os-name";
    readonly OS_VERSION: "os-version";
    readonly ENVIRONMENT: "environment";
    readonly DEVICE_ID: "device-id";
    readonly METADATA_FROM_FIRMWARE: "metadata-from-firmware";
};
/**
 * Constants for the valid keys in {@link DeviceInformationObj}.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.DeviceInformation
 */
export type DeviceInformation = (typeof DeviceInformation)[keyof typeof DeviceInformation];

/**
 * Describes the object returned by {@link framework.CastReceiverContext#getDeviceInformation}.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.DeviceInformationObj
 */
export interface DeviceInformationObj {
    "model-name": string;
    "brand-name": string;
    "os-name": string;
    "os-version": string;
    environment: string;
    "device-id": string;
    "metadata-from-firmware": boolean;
}

/**
 * Represents the current visibility state reported by the platform.
 * It may be UNKNOWN if the cast platform was unable to determine the state yet.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.VisibilityState
 */
export const VisibilityState: {
    readonly NOT_VISIBLE: "notvisible";
    readonly UNKNOWN: "unknown";
    readonly VISIBLE: "visible";
};
/**
 * Represents the current visibility state reported by the platform.
 * It may be UNKNOWN if the cast platform was unable to determine the state yet.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system#.VisibilityState
 */
export type VisibilityState = (typeof VisibilityState)[keyof typeof VisibilityState];

/**
 * Event dispatched by {@link framework.CastReceiverContext} when the visibility
 * of the application changes (HDMI input change; TV is turned off).
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.VisibilityChangedEvent
 */
export class VisibilityChangedEvent extends Event {
    constructor(isVisible: boolean);

    /**
     * Whether the Cast device is the active input or not.
     */
    isVisible: boolean;
}

/**
 * Represents the system volume data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.SystemVolumeData
 */
export class SystemVolumeData {
    constructor();

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
 * Event dispatched by {@link framework.CastReceiverContext} when the system volume changes.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.SystemVolumeChangedEvent
 */
export class SystemVolumeChangedEvent extends Event {
    constructor(volume: SystemVolumeData);

    /**
     *  The system volume data
     */
    data: SystemVolumeData;
}
/**
 * Event dispatched by {@link framework.CastReceiverContext} when the TV enters/leaves the standby state.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.StandbyChangedEvent
 */
export class StandbyChangedEvent extends Event {
    constructor(isStandby: boolean);

    /**
     * Whether the TV is in standby. It will be false if the actual state is unknown.
     * It is important to note that this event will be raised when the platform
     * raises a standby change event from unknown to known or vice versa so the
     * application should always verify the isStandby property. To know if the
     * actual status is unknown, the application can call the getStandbyState
     * method.
     */
    isStandby: boolean;
}
/**
 * Event dispatched by {@link framework.CastReceiverContext} when the application is shutdown.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.ShutdownEvent
 */
export class ShutdownEvent extends Event {}

/**
 * Event dispatched by {@link framework.CastReceiverContext} when a sender is disconnected.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.SenderDisconnectedEvent
 */
export class SenderDisconnectedEvent extends Event {
    constructor(senderId: string, userAgent: string, reason: DisconnectReason);
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
    reason: DisconnectReason;
}

/**
 * Event dispatched by {@link framework.CastReceiverContext} when a sender is connected.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.SenderConnectedEvent
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
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.Sender
 */
export interface Sender {
    /**
     * The sender Id.
     */
    id: string;

    /**
     * Indicate the sender supports large messages (>64KB)
     */
    largeMessageSupported?: boolean | undefined;

    /**
     * The userAgent of the sender.
     */
    userAgent: string;
}

/**
 * Event dispatched by {@link framework.CastReceiverContext} when the system is ready.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.ReadyEvent
 */
export class ReadyEvent extends Event {
    constructor(applicationData: ApplicationData);

    /**
     * The application data
     */
    data: ApplicationData;
}

/**
 * Event dispatched by {@link framework.CastReceiverContext} when the system
 * needs to update the restriction on maximum video resolution.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.MaxVideoResolutionChangedEvent
 */
export class MaxVideoResolutionChangedEvent extends Event {
    constructor(height: number);

    /**
     * Maximum video resolution requested by the system. The value of 0 means there is no restriction.
     */
    height: number;
}
/**
 * Event dispatched by {@link framework.CastReceiverContext} when the system
 * starts to create feedback report.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.FeedbackStartedEvent
 */
export class FeedbackStartedEvent extends Event {}

/**
 * Event dispatched by {@link framework.CastReceiverContext} which contains system information.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.Event
 */
export class Event {
    constructor(type: EventType, data?: any);
    /**
     * Event Type.
     */
    type: EventType;
    /**
     * @deprecated
     * Event data (deprecated)
     */
    data?: any;
}

/**
 * A custom message received from a sender. To listen for custom events use the {@link framework.addCustomMessageListener} method.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.Message
 */
export class Message {
    constructor(type: "message", senderId: string, data?: any);
    /**
     * string
     * The message type. It is always "message".
     */
    type: "message";
    /**
     * string
     * The sender ID.
     */
    senderId: string;
    /**
     * any type
     * The message payload.
     * Value must not be null.
     */
    data: Exclude<any, null>;
}

/**
 * Represents the data of the launched application.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.system.ApplicationData
 */
export class ApplicationData {
    constructor();

    /**
     * The application image that is set in Cast Developer Console.
     */
    iconUrl: string;

    /**
     * The application Id.
     */
    id: string;

    /**
     * Indicate where the app was launched from.
     */
    launchedFrom: LaunchedFrom;

    /**
     * The id of the sender that launched the application.
     */
    launchingSenderId: string;

    /**
     * The application name.
     */
    name: string;

    /**
     * The namespaces used by the application.
     */
    namespaces: string[];

    /**
     * The session Id.
     */
    sessionId: number;
}
