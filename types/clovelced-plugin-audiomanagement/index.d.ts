export enum AudioMode {
    SILENT = 0,
    VIBRATE,
    NORMAL,
}

export enum VolumeType {
    RING = 0,
    MUSIC,
    NOTIFICATION,
    SYSTEM,
}

/**
 * Sets the `AudioManagement.AudioMode` for the device.
 *
 * @param mode the device can be set to: Silent, Normal, Vibrate
 * @param onSuccess a callback when setting succeeds.
 * @param onError a callback when setting fails.
 * @returns void
 */
export function setAudioMode(mode: AudioMode, onSuccess: () => void, onError: (error: any) => void): void;

/**
 * Gets the current `AudioManagement.AudioMode` of the device.
 *
 * @param onSuccess a callback when succeeds with an object with `label` and `audioMode` properties.
 * @param onError a callback when getting fails.
 * @returns void
 */
export function getAudioMode(
    onSuccess: (results: { audioMode: AudioMode; label: string }) => void,
    onError: (error: any) => void,
): void;

/**
 * Sets the specified `AudioManagement.VolumeType` for the device with the value from `volume`.
 *
 * @param type the `AudioManagement.VolumeType` to set
 * @param volume the volume value
 * @param onSuccess a callback when setting succeeds.
 * @param onError a callback when setting fails.
 * @returns void
 */
export function setVolume(type: VolumeType, volume: number, onSuccess: () => void, onError: (error: any) => void): void;

/**
 * Gets the specified `AudioManagement.VolumeType`'s `volume`.
 *
 * @param type the `AudioManagement.VolumeType` to get
 * @param onSuccess a callback when getting succeeds with an object with numeric `volume` property.
 * @param onError a callback when getting fails.
 * @returns void
 */
export function getVolume(
    type: VolumeType,
    onSuccess: (results: { volume: number }) => void,
    onError: (error: any) => void,
): void;

/**
 * Gets the specified `AudioManagement.VolumeType`'s maximum `volume` that the device is currently set to.
 *
 * @param type the `AudioManagement.VolumeType` to get
 * @param onSuccess a callback when getting succeeds with an object with numeric `maxVolume` property.
 * @param onError a callback when getting fails.
 * @returns void
 */
export function getMaxVolume(
    type: VolumeType,
    onSuccess: (results: { maxVolume: number }) => void,
    onError: (error: any) => void,
): void;
