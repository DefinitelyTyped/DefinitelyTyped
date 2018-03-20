// Type definitions for raspi-board 5.0
// Project: https://github.com/nebrius/raspi-board
// Definitions by: Bryan Hughes <https://github.com/nebrius>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export const VERSION_1_MODEL_A = "rpi1_a";
export const VERSION_1_MODEL_B_REV_1 = "rpi1_b1";
export const VERSION_1_MODEL_B_REV_2 = "rpi1_b2";
export const VERSION_1_MODEL_B_PLUS = "rpi1_bplus";
export const VERSION_1_MODEL_A_PLUS = "rpi1_aplus";
export const VERSION_1_MODEL_ZERO = "rpi1_zero";
export const VERSION_1_MODEL_ZERO_W = "rpi1_zerow";
export const VERSION_2_MODEL_B = "rpi2_b";
export const VERSION_3_MODEL_B = "rpi3_b";
export const VERSION_UNKNOWN = "unknown";
export interface PinInfo {
    pins: string[];
    peripherals: string[];
    gpio: number;
}
export function getBoardRevision(): string;
export function getPins(): {
    [wiringpi: number]: PinInfo;
};
export function getPinNumber(alias: string | number): number | null;
export function getGpioNumber(alias: string | number): number | null;
