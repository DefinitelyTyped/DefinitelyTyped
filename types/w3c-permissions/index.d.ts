// Type definitions for non-npm package W3C Permissions API 1.0
// Project: https://www.w3.org/TR/permissions/
// Definitions by: Julien Bérubé <https://github.com/jberube>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// https://www.w3.org/TR/permissions/#permissions-interface
declare class Permissions {
    query(permissionDesc: PermissionDescriptor): Promise<PermissionStatus>;
}

// https://www.w3.org/TR/permissions/#status-of-a-permission
type PermissionState = "granted" | "denied" | "prompt";

// https://www.w3.org/TR/permissions/#permission-registry
type PermissionName =
    "geolocation" |
    "notifications" |
    "push" |
    "midi" |
    "camera" |
    "microphone" |
    "speaker" |
    "device-info" |
    "background-sync" |
    "bluetooth" |
    "persistent-storage" |
    "ambient-light-sensor" |
    "accelerometer" |
    "gyroscope" |
    "magnetometer" |
    "clipboard";

// https://www.w3.org/TR/permissions/#status-of-a-permission
declare class PermissionStatus extends EventTarget {
    readonly state: PermissionState;
    onchange(): (this: this, ev: Event) => any;
}

// https://www.w3.org/TR/permissions/#permission-descriptor
interface PermissionDescriptor {
    name: string;
}

// https://www.w3.org/TR/permissions/#geolocation
type GeolocationPermissionDescriptor = PermissionDescriptor;

// https://www.w3.org/TR/permissions/#notifications
type NotificationsPermissionDescriptor = PermissionDescriptor;

// https://www.w3.org/TR/permissions/#push
interface PushPermissionDescriptor extends PermissionDescriptor {
    userVisibleOnly?: boolean;
}

// https://www.w3.org/TR/permissions/#midi
interface MidiPermissionDescriptor extends PermissionDescriptor {
    sysex: boolean;
}

// https://www.w3.org/TR/permissions/#media-devices
interface DevicePermissionDescriptor extends PermissionDescriptor {
    deviceId: string;
}

// https://www.w3.org/TR/permissions/#background-sync
type BackgroundSyncPermissionDescriptor = PermissionDescriptor;

// https://www.w3.org/TR/permissions/#ambient-light-sensor
type AmbientLightSensorPermissionDescriptor = PermissionDescriptor;

// https://www.w3.org/TR/permissions/#accelerometer
type AccelerometerPermissionDescriptor = PermissionDescriptor;

// https://www.w3.org/TR/permissions/#gyroscope
type GyroscopePermissionDescriptor = PermissionDescriptor;

// https://www.w3.org/TR/permissions/#magnetometer
type MagnetometerPermissionDescriptor = PermissionDescriptor;

// https://www.w3.org/TR/permissions/#clipboard
type ClipboardPermissionDescriptor = PermissionDescriptor;

// https://www.w3.org/TR/permissions/#navigator-and-workernavigator-extension
interface Navigator {
    readonly permissions: Permissions;
}

// https://www.w3.org/TR/permissions/#navigator-and-workernavigator-extension
interface WorkerNavigator {
    readonly permissions: Permissions;
}
