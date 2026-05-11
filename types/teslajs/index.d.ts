export interface Vehicle {
    id: string;
    vehicleID: number;
    [key: string]: string | number | boolean | null;
}
export interface Credentials {
    username: string;
    password: string;
    mfaPassCode?: string | undefined;
    mfaDeviceName?: string | undefined;
}
export interface TokenResponse {
    response: object;
    body: object;
    authToken: string;
    refreshToken: string;
}
export type nodeBack = (error: Error, data: any) => any;
export interface optionsType {
    authToken: string;
    vehicleID: string;
    carIndex?: number | undefined;
}
export interface Result {
    reason: string;
    result: boolean;
}

export const streamingPortal: string;
export const portal: string;
export const API_LOG_ALWAYS: number;
export const API_ERR_LEVEL: number;
export const API_CALL_LEVEL: number;
export const API_RETURN_LEVEL: number;
export const API_BODY_LEVEL: number;
export const API_REQUEST_LEVEL: number;
export const API_RESPONSE_LEVEL: number;
export const API_LOG_ALL: number;
export const CHARGE_STORAGE: number;
export const CHARGE_DAILY: number;
export const CHARGE_STANDARD: number;
export const CHARGE_RANGE: number;
export const SUNROOF_VENT: string;
export const SUNROOF_CLOSED: string;
export const MIN_TEMP: number;
export const MAX_TEMP: number;
export const FRUNK: string;
export const TRUNK: string;
export const streamingColumns: string[];

export function setLogLevel(level: number): void;
export function getLogLevel(): number;
export function setPortalBaseURI(uri: string): void;
export function getPortalBaseURI(): string;
export function setStreamingBaseURI(uri: string): void;
export function getStreamingBaseURI(): string;
export function getModel(vehicle: Vehicle): string;
export function vinDecode(vehicle: Vehicle): object;
export function getPaintColor(vehicle: Vehicle): string;
export function getVin(vehicle: Vehicle): string;
export function getShortVin(vehicle: Vehicle): string;
export function login(credentials: Credentials, callback: nodeBack): void;
export function loginAsync(credentials: Credentials): Promise<TokenResponse>;
export function refreshToken(refresh_token: string, callback: nodeBack): void;
export function refreshTokenAsync(refresh_token: string): Promise<TokenResponse>;
export function logout(authToken: string, callback: nodeBack): void;
export function logoutAsync(authToken: string): Promise<void>;
export function vehicle(options: optionsType, callback: nodeBack): Vehicle;
export function vehicleAsync(options: optionsType): Promise<Vehicle>;
export function vehicles(options: optionsType, callback: nodeBack): void;
export function vehiclesAsync(
    options: optionsType,
): Promise<Array<{ [key: string]: string | number | boolean | null }>>;
export function get_command(options: optionsType, command: string, callback: nodeBack): void;
export function get_commandAsync(options: optionsType, command: string): Promise<any>;
export function post_command(options: optionsType, command: string, body: object, callback: nodeBack): void;
export function post_commandAsync(options: optionsType, command: string, body: object): Promise<any>;
export function vehicleData(options: optionsType, callback: nodeBack): void;
export function vehicleDataAsync(options: optionsType): Promise<object>;
export function vehicleConfig(options: optionsType, callback: nodeBack): void;
export function vehicleConfigAsync(options: optionsType): Promise<object>;
export function vehicleState(options: optionsType, callback: nodeBack): void;
export function vehicleStateAsync(options: optionsType): Promise<object>;
export function climateState(options: optionsType, callback: nodeBack): void;
export function climateStateAsync(options: optionsType): Promise<object>;
export function nearbyChargers(options: optionsType, callback: nodeBack): void;
export function nearbyChargersAsync(options: optionsType): Promise<object>;
export function driveState(options: optionsType, callback: nodeBack): void;
export function driveStateAsync(options: optionsType): Promise<object>;
export function chargeState(options: optionsType, callback: nodeBack): void;
export function chargeStateAsync(options: optionsType): Promise<object>;
export function guiSettings(options: optionsType, callback: nodeBack): void;
export function guiSettingsAsync(options: optionsType): Promise<object>;
export function mobileEnabled(options: optionsType, callback: nodeBack): void;
export function mobileEnabledAsync(options: optionsType): Promise<{ response: boolean }>;
export function honkHorn(options: optionsType, callback: nodeBack): void;
export function honkHornAsync(options: optionsType): Promise<Result>;
export function flashLights(options: optionsType, callback: nodeBack): void;
export function flashLightsAsync(options: optionsType): Promise<Result>;
export function startCharge(options: optionsType, callback: nodeBack): void;
export function startChargeAsync(options: optionsType): Promise<Result>;
export function stopCharge(options: optionsType, callback: nodeBack): void;
export function stopChargeAsync(options: optionsType): Promise<Result>;
export function openChargePort(options: optionsType, callback: nodeBack): void;
export function openChargePortAsync(options: optionsType): Promise<Result>;
export function closeChargePort(options: optionsType, callback: nodeBack): void;
export function closeChargePortAsync(options: optionsType): Promise<Result>;
export function scheduleSoftwareUpdate(options: optionsType, offset: number, callback: any): any;
export function scheduleSoftwareUpdateAsync(options: optionsType): Promise<Result>;
export function cancelSoftwareUpdate(options: optionsType, callback: any): any;
export function cancelSoftwareUpdateAsync(options: optionsType): Promise<Result>;
export function navigationRequest(
    options: optionsType,
    subject: string,
    text: string,
    locale: string,
    callback: any,
): any;
export function navigationRequestAsync(
    options: optionsType,
    subject: string,
    text: string,
    locale: string,
): Promise<Result>;
export function mediaTogglePlayback(options: optionsType, callback: any): any;
export function mediaTogglePlaybackAsync(options: optionsType): Promise<Result>;
export function mediaPlayNext(options: optionsType, callback: any): any;
export function mediaPlayNextAsync(options: optionsType): Promise<Result>;
export function mediaPlayPrevious(options: optionsType, callback: any): any;
export function mediaPlayPreviousAsync(options: optionsType): Promise<Result>;
export function mediaPlayNextFavorite(options: optionsType, callback: any): any;
export function mediaPlayNextFavoriteAsync(options: optionsType): Promise<Result>;
export function mediaPlayPreviousFavorite(options: optionsType, callback: any): any;
export function mediaPlayPreviousFavoriteAsync(options: optionsType): Promise<Result>;
export function mediaVolumeUp(options: optionsType, callback: any): any;
export function mediaVolumeUpAsync(options: optionsType): Promise<Result>;
export function mediaVolumeDown(options: optionsType, callback: any): any;
export function mediaVolumeDownAsync(options: optionsType): Promise<Result>;
export function speedLimitActivate(options: optionsType, pin: number, callback: any): any;
export function speedLimitActivateAsync(options: optionsType, pin: number): Promise<Result>;
export function speedLimitDeactivate(options: optionsType, pin: number, callback: any): any;
export function speedLimitDeactivateAsync(options: optionsType, pin: number): Promise<Result>;
export function speedLimitClearPin(options: optionsType, pin: number, callback: any): any;
export function speedLimitClearPinAsync(options: optionsType, pin: number): Promise<Result>;
export function speedLimitSetLimit(options: optionsType, limit: number, callback: any): any;
export function speedLimitSetLimitAsync(options: optionsType, limit: number): Promise<Result>;
export function setSentryMode(options: optionsType, onoff: boolean, callback: any): any;
export function setSentryModeAsync(options: optionsType, onoff: boolean): Promise<Result>;
export function seatHeater(options: optionsType, heater: number, level: number, callback: any): any;
export function seatHeaterAsync(options: optionsType, heater: number, level: number): Promise<Result>;
export function steeringHeater(options: optionsType, level: number, callback: any): any;
export function steeringHeaterAsync(options: optionsType, level: number): Promise<Result>;
export function maxDefrost(options: optionsType, onoff: boolean, callback: any): any;
export function maxDefrostAsync(options: optionsType, onoff: boolean): Promise<Result>;
export function windowControl(options: optionsType, command: string, callback: any): any;
export function windowControlAsync(options: optionsType, command: string): Promise<Result>;
export function setChargeLimit(options: optionsType, amt: any, callback: nodeBack): void;
export function setChargeLimitAsync(options: optionsType, amt: any): Promise<Result>;
export function chargeStandard(options: optionsType, callback: nodeBack): void;
export function chargeStandardAsync(options: optionsType): Promise<Result>;
export function chargeMaxRange(options: optionsType, callback: nodeBack): void;
export function chargeMaxRangeAsync(options: optionsType): Promise<Result>;
export function doorLock(options: optionsType, callback: nodeBack): void;
export function doorLockAsync(options: optionsType): Promise<Result>;
export function doorUnlock(options: optionsType, callback: nodeBack): void;
export function doorUnlockAsync(options: optionsType): Promise<Result>;
export function climateStart(options: optionsType, callback: nodeBack): void;
export function climateStartAsync(options: optionsType): Promise<Result>;
export function climateStop(options: optionsType, callback: nodeBack): void;
export function climateStopAsync(options: optionsType): Promise<Result>;
export function sunRoofControl(options: optionsType, state: string, callback: nodeBack): void;
export function sunRoofControlAsync(options: optionsType, state: string): Promise<Result>;
export function sunRoofMove(options: optionsType, percent: any, callback: nodeBack): void;
export function sunRoofMoveAsync(options: optionsType, percent: any): Promise<Result>;
export function setTemps(options: optionsType, driver: number, pass: number, callback: nodeBack): void;
export function setTempsAsync(options: optionsType, driver: number, pass: number): Promise<Result>;
export function remoteStart(options: optionsType, password: string, callback: nodeBack): void;
export function remoteStartAsync(options: optionsType, password: string): Promise<Result>;
export function openTrunk(options: optionsType, which: string, callback: nodeBack): void;
export function openTrunkAsync(options: optionsType, which: string): Promise<Result>;
export function wakeUp(options: optionsType, callback: nodeBack): void;
export function wakeUpAsync(options: optionsType): Promise<object>;
export function setValetMode(options: optionsType, onoff: boolean, pin: any, callback: nodeBack): void;
export function setValetModeAsync(options: optionsType, onoff: boolean, pin: any): Promise<Result>;
export function resetValetPin(options: optionsType, callback: nodeBack): void;
export function resetValetPinAsync(options: optionsType): Promise<Result>;
export function calendar(options: optionsType, entry: any, callback: nodeBack): void;
export function calendarAsync(options: optionsType, entry: any): Promise<Result>;
export function makeCalendarEntry(
    eventName: string,
    location: string,
    startTime: number,
    endTime: number,
    accountName: string,
    phoneName: string,
): object;
export function homelink(options: optionsType, lat: number, long: number, token: string, callback: nodeBack): void;
export function homelinkAsync(options: optionsType, lat: number, long: number, token: string): Promise<Result>;
export function products(options: optionsType, callback: nodeBack): void;
export function productsAsync(options: optionsType): Promise<object[]>;
export function solarStatus(options: optionsType, callback: nodeBack): void;
export function solarStatusAsync(options: optionsType): Promise<object>;
export function startStreaming(options: any, callback: nodeBack, onDataCb: nodeBack): any;
