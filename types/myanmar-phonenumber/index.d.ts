/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace myanmarPhoneNumber;

/*~ If this module has methods, declare them as functions like so.
 */
export function normalizeInput(phoneNumber: string): string;
export function isValidMMPhoneNumber(phoneNumber: string): boolean;
export function getTelecomName(phoneNumber: string): Operator;
export function getPhoneNetworkType(phoneNumber: string): NetworkType;

/*~ You can declare types that are available via importing the module */
export type Operator = "Ooredoo" | "Telenor" | "MPT" | "MEC" | "MyTel" | "Unknown";
export type NetworkType = "GSM" | "WCDMA" | "CDMA 450 MHz" | "CDMA 800 MHz" | "Unknown";
