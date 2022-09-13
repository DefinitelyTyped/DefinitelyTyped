// Type definitions for wiring-pi 2.2.0
// Project: https://github.com/eugeneware/wiring-pi
// Definitions by: Ivo Stratev <https://github.com/NoHomey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'wiring-pi' {
    // Setup
    export function wiringPiSetup(): number;
    export function wiringPiSetupGpio(): number;
    export function wiringPiSetupPhys(): number;
    export function wiringPiSetupSys(): number;
    export function setup(mode: string): number;
    // Core functions
    export function pinModeAlt(pin: number, mode: number): void;
    export function pinMode(pin: number, mode: number): void;
    export function pullUpDnControl(pin: number, pud: number): void;
    export function digitalRead(pin: number): number;
    export function digitalWrite(pin: number, state: number): void;
    export function pwmWrite(pin: number, value: number): void;
    export function analogRead(pin: number): number;
    export function analogWrite(pin: number, value: number): void;
    export function pulseIn(pin: number, state: number): number;
    export function delay(ms: number): void;
    export function delayMicroseconds(us: number): void;
    export function millis(): number;
    export function micros(): number;
    // Interrupts
    export function wiringPiISR(pin: number, edgeType: number, callback: (delta: number) => void): void;
    export function wiringPiISRCancel(pin: number): void;
    export const INT_EDGE_FALLING: number;
    export const INT_EDGE_RISING: number;
    export const INT_EDGE_BOTH: number;
    export const INT_EDGE_SETUP: number;
    // Raspberry Pi hardware specific functions
    export function piBoardRev(): number;

    export interface PiBoardId {
        model: number;
        rev: number;
        mem: number;
        maker: number;
        overvolted: number;
    }

    export function piBoardId(): PiBoardId;
    export function wpiPinToGpio(pin: number): number;
    export function physPinToGpio(pin: number): number;
    export function setPadDrive(group: number, value: number): void;
    export function getAlt(pin: number): number;
    export function digitalWriteByte(byte: number): void;
    export function pwmSetMode(mode: number): void;
    export function pwmSetRange(range: number): void;
    export function pwmSetClock(divisor: number): void;
    export function pwmToneWrite(pin: number, frequency: number): void;
    export function gpioClockSet(pin: number, frequency: number): void;
    // Constants
    // WPI_MODEs
    export const WPI_MODE_PINS: number;
    export const WPI_MODE_PHYS: number;
    export const WPI_MODE_GPIO: number;
    export const WPI_MODE_GPIO_SYS: number;
    export const WPI_MODE_PIFACE: number;
    export const WPI_MODE_UNINITIALISED: number;
    // pinMode
    export const INPUT: number;
    export const OUTPUT: number;
    export const PWM_OUTPUT: number;
    export const GPIO_CLOCK: number;
    export const SOFT_PWM_OUTPUT: number;
    export const SOFT_TONE_OUTPUT: number;
    // pullUpDnControl
    export const PUD_OFF: number;
    export const PUD_DOWN: number;
    export const PUD_UP: number;
    // digitalRead/Write
    export const HIGH: number;
    export const LOW: number;
    // pwmSetMode
    export const PWM_MODE_BAL: number;
    export const PWM_MODE_MS: number;
    // PiBoardId.model
    export const PI_MODEL_UNKNOWN: number;
    export const PI_MODEL_A: number;
    export const PI_MODEL_B: number;
    export const PI_MODEL_BP: number;
    export const PI_MODEL_CM: number;
    export const PI_MODEL_AP: number;
    export const PI_MODEL_2: number;
    // PiBoardId.rev
    export const PI_VERSION_UNKNOWN: number;
    export const PI_VERSION_1: number;
    export const PI_VERSION_1_1: number;
    export const PI_VERSION_1_2: number;
    export const PI_VERSION_2: number;
    // PiBoardId,marker
    export const PI_MAKER_UNKNOWN: number;
    export const PI_MAKER_EGOMAN: number;
    export const PI_MAKER_SONY: number;
    export const PI_MAKER_QISDA: number;
    export const PI_MAKER_MBEST: number;
    // arrays
    export const PI_MODEL_NAMES: string[];
    export const PI_REVISION_NAMES: string[];
    export const PI_MAKER_NAMES: string[];
    // pinModeAlt
    export const FSEL_INPT: number;
    export const FSEL_OUTP: number;
    export const FSEL_ALT0: number;
    export const FSEL_ALT1: number;
    export const FSEL_ALT2: number;
    export const FSEL_ALT3: number;
    export const FSEL_ALT4: number;
    export const FSEL_ALT5: number;
    // I2C
    export function wiringPiI2CSetup(devId: number): number;
    export function wiringPiI2CSetupInterface(device: string, devId: number): number;
    export function wiringPiI2CClose(fd: number): void;
    export function wiringPiI2CRead(fd: number): number;
    export function wiringPiI2CReadReg8(fd: number, reg: number): number;
    export function wiringPiI2CReadReg16(fd: number, reg: number): number;
    export function wiringPiI2CWrite(fd: number, data: number): number;
    export function wiringPiI2CWriteReg8(fd: number, reg: number, data: number): number;
    export function wiringPiI2CWriteReg16(fd: number, reg: number, data: number): number;
    // SPI
    export function wiringPiSPIGetFd(channel: number): number;
    export function wiringPiSPIDataRW(channel: number, data: Buffer): number;
    export function wiringPiSPISetup(channel: number, speed: number): number;
    export function wiringPiSPISetupMode(channel: number, speed: number, mode: number): number;
    export function wiringPiSPIClose(fd: number): void;
    // Serial
    export function serialOpen(device: string, baudrate: number): number;
    export function serialClose(fd: number): void;
    export function serialFlush(fd: number): void;
    export function serialPutChar(fd: number, character: number): void;
    export function serialPuts(fd: number, data: string): void;
    export function serialPrintf(fd: number, data: string): void;
    export function serialDataAvail(fd: number): number;
    export function serialGetchar(fd: number): number;
    // Shift
    export function shiftIn(dPin: number, cPin: number, order: number): number;
    export function shiftOut(dPin: number, cPin: number, order: number, value: number): void;
    export const LSBFIRST: number;
    export const MSBFIRST: number;
    // Soft PWM
    export function softPwmCreate(pin: number, value: number, range: number): number;
    export function softPwmWrite(pin: number, value: number): void;
    export function softPwmStop(pin: number): void;
    // Soft Servo
    export function softServoWrite(pin: number, value: number): void;
    export function softServoSetup(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;
    // Soft Tone
    export function softToneCreate(pin: number): number;
    export function softToneWrite(pin: number, frequency: number): void;
    export function softToneStop(pin: number): void;
    // Extentions
    // dac7678
    export function dac7678Setup(pinBase: number, i2cAddress: number, vrefMode: number): number;
    export const DAC7678_VREF_MODE_STATIC_ON: number;
    export const DAC7678_VREF_MODE_STATIC_OFF: number;
    export const DAC7678_VREF_MODE_FLEXIBLE_ON: number;
    export const DAC7678_VREF_MODE_FLEXIBLE_ALWAYS_ON: number;
    export const DAC7678_VREF_MODE_FLEXIBLE_ALWAYS_OFF: number;
    // drcSerial
    export function drcSerialSetup(pinBase: number, numPins: number, device: string, baudrate: number): number;
    // max31855
    export function max31855Setup(pinBase: number, spiChannel: number): number;
    // max5322
    export function max5322Setup(pinBase: number, spiChannel: number): number;
    // mcp23008
    export function mcp23008Setup(pinBase: number, i2cAddress: number): number;
    // mpc23016
    export function mpc23016Setup(pinBase: number, i2cAddress: number): number;
    // mpc23017
    export function mpc23017Setup(pinBase: number, i2cAddress: number): number;
    // mcp23s08
    export function mcp23s08Setup(pinBase: number, spiChannel: number, devId: number): number;
    // mcp23s17
    export function mcp23s17Setup(pinBase: number, spiChannel: number, devId: number): number;
    // mcp3002
    export function mcp3002Setup(pinBase: number, spiChannel: number): number;
    // mcp3004/8
    export function mcp3004Setup(pinBase: number, spiChannel: number): number;
    // mcp3422
    export function mcp3422Setup(pinBase: number, i2cAddress: number, sampleRate: number, gain: number): number;
    export const MCP3422_SR_3_75: number;
    export const MCP3422_SR_15: number;
    export const MCP3422_SR_60: number;
    export const MCP3422_SR_240: number;
    export const MCP3422_GAIN_1: number;
    export const MCP3422_GAIN_2: number;
    export const MCP3422_GAIN_4: number;
    export const MCP3422_GAIN_8: number;
    // mcp4802
    export function mcp4802Setup(pinBase: number, spiChannel: number): number;
    // pca9685
    export function pca9685Setuo(pinBase: number, i2cAddress: number, frequency: number): number;
    // pcf8574
    export function pcf8574Setup(pinBase: number, i2cAddress: number): number;
    // pcf8591
    export function pcf8591Setup(pinBase: number, i2cAddress: number): number;
    // sn3218
    export function sn3218Setup(pinBase: number): number;
    // sr595
    export function sr595Setup(pinBase: number, numPins: number, dataPin: number, clockPin: number, latchPin: number): number;
    // DevLib
    // ds1302
    export function ds1302setup(clockPin: number, dataPin: number, csPin: number): void;
    export function ds1302rtcRead(reg: number): number;
    export function ds1302rtcWrite(reg: number, data: number): void;
    export function ds1302ramRead(address: number): number;
    export function ds1302ramWrite(address: number, data: number): void;
    export function ds1302clockRead(): number[];
    export function ds1302clockWrite(clcokData: number[]): void;
    export function ds1302trickleCharge(diodes: number, resistors: number): void;
    // GertBoard
    export function gertboardAnalogSetup(pinBase: number): number;
    // LCD
    export function lcdInit(rows: number, cols: number, bits: number, rs: number, strb: number, d0: number, d1: number, d2: number, d3: number, d4: number, d5: number, d6: number, d7: number): number;
    export function lcdHome(fd: number): void;
    export function lcdClear(fd: number): void;
    export function lcdDisplay(fd: number, state: number): void;
    export function lcdCursor(fd: number, state: number): void;
    export function lcdCursorBlink(fd: number, state: number): void;
    export function lcdSendCommand(fd: number, command: number): void;
    export function lcdPosition(fd: number, x: number, y: number): void;
    export function lcdCharDef(fd: number, index: number, data: number[]): void;
    export function lcdPutchar(fd: number, data: number): void;
    export function lcdPuts(fd: number, data: string): void;
    export function lcdPrintf(fd: number, data: string): void;
    export const MAX_LCDS: number;
    // LCD 128x64
    export function lcd128x64setup(): number;
    export function lcd128x64setOrigin(x: number, y: number): void;
    export function lcd128x64setOrientation(orientation: number): void;
    export function lcd128x64orientCoordinates(): number[];
    export function lcd128x64getScreenSize(): number[];
    export function lcd128x64point(x: number, y: number, color: number): void;
    export function lcd128x64line(x0: number, y0: number, x1: number, y1: number, color: number): void;
    export function lcd128x64lineTo(x: number, y: number, color:  number): void;
    export function lcd128x64rectangle(x1: number, y1: number, x2: number, y2: number, color: number, filled: number): void;
    export function lcd128x64circle(x: number, y: number, r: number, color: number, filled: number): void;
    export function lcd128x64ellipse(cx: number, cy: number, xRadius: number, yRadius: number, color: number, filled: number): void;
    export function lcd128x64putchar(x: number, y: number, c: number, bgColor: number, fgColor: number): void;
    export function lcd128x64puts(x: number, y: number, data: string, bgColor: number, fgColor: number): void;
    export function lcd128x64update(): void;
    export function lcd128x64clear(color: number): void;
    // cd128x64clear
    export function maxDetectRead(pin: number): number[];
    export function readRHT03(pin: number): number[];
    // piFace
    export function piFaceSetup(pinBase: number): number;
    // piGlow
    export function piGlowSetup(clear: number): void;
    export function piGlow1(leg: number, ring: number, intensity: number): void;
    export function piGlowLeg(leg: number, intensity: number): void;
    export function piGlowRing(ring: number, intensity: number): void;
    export const PIGLOW_RED: number;
    export const PIGLOW_YELLOW: number;
    export const PIGLOW_ORANGE: number;
    export const PIGLOW_GREEN: number;
    export const PIGLOW_BLUE: number;
    export const PIGLOW_WHITE: number;

    // pinNes
    export function setupNesJoystick(dPin: number, cPin: number, lPin: number): number;
    export function readNesJoystick(joystick: number): number;
    export const MAX_NES_JOYSTICKS: number;
    export const NES_RIGHT: number;
    export const NES_LEFT: number;
    export const NES_DOWN: number;
    export const NES_UP: number;
    export const NES_START: number;
    export const NES_SELECT: number;
    export const NES_A: number;
    export const NES_B: number;
    // tcs34725
    export function tcs34725Setup(i2cAddress: number, integrationTime: number, gain: number): number;

    export interface tcs34725RGBC {
        r: number;
        g: number;
        b: number;
        c: number;
    }

    export function tcs34725ReadRGBC(id: number): tcs34725RGBC;

    export interface tcs34725HSV {
        h: number;
        s: number;
        v: number;
    }

    export function tcs34725ReadHSV(id: number): tcs34725HSV;
    export function tcs34725GetCorrelatedColorTemperature(r: number, g: number, b: number): void;
    export function tcs34725GetIlluminance(r: number, g: number, b: number): void;
    export function tcs34725SetInterrupt(id: number, aien: number): void;
    export function tcs34725ClearInterrupt(id: number): void;
    export function tcs34725SetInterruptLimits(id: number, low: number, high: number): void;
    export function tcs34725Enable(id: number): void;
    export function tcs34725Disable(id: number): void;
    export const TCS34725_ATIME_2_4MS: number;
    export const TCS34725_ATIME_24MS: number;
    export const TCS34725_ATIME_50MS: number;
    export const TCS34725_ATIME_101MS: number;
    export const TCS34725_ATIME_154MS: number;
    export const TCS34725_ATIME_700MS: number;
    export const TCS34725_GAIN_1: number;
    export const TCS34725_GAIN_4: number;
    export const TCS34725_GAIN_16: number;
    export const TCS34725_GAIN_60: number;
    export const TCS34725_MAX_TCS34725: number;
    export const VERSION: string;
}
