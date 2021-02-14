// Type definitions for convert-units 2.3
// Project: https://github.com/ben-ng/convert-units#readme
// Definitions by: vladkampov <https://github.com/vladkampov>
//                 ben-ng <https://github.com/ben-ng>
//                 Toby Bell <https://github.com/tobybell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare namespace convert {
    export type uDistance = "mm" | "cm" | "m" | "km" | "in" | "ft-us" | "ft" | "mi"; // Distance
    export type uArea = "mm2" | "cm2" | "m2" | "ha" | "km2" | "in2" | "ft2" | "ac" | "mi2"; // Area
    export type uMass = "mcg" | "mg" | "g" | "kg" | "oz" | "lb" | "mt" | "t"; // Mass
    export type uVolume = "mm3" | "cm3" | "ml" | "l" | "kl" | "m3" | "km3" | "tsp" | "Tbs" | "in3" | "fl-oz" | "cup" | "pnt" | "qt" | "gal" | "ft3" | "yd3"; // Volume
    export type uVolumeFlowRate =
    | "mm3/s"
    | "cm3/s"
    | "ml/s"
    | "cl/s"
    | "dl/s"
    | "l/s"
    | "l/min"
    | "l/h"
    | "kl/s"
    | "kl/min"
    | "kl/h"
    | "m3/s"
    | "m3/min"
    | "m3/h"
    | "km3/s"
    | "tsp/s"
    | "Tbs/s"
    | "in3/s"
    | "in3/min"
    | "in3/h"
    | "fl-oz/s"
    | "fl-oz/min"
    | "fl-oz/h"
    | "cup/s"
    | "pnt/s"
    | "pnt/min"
    | "pnt/h"
    | "qt/s"
    | "gal/s"
    | "gal/min"
    | "gal/h"
    | "ft3/s"
    | "ft3/min"
    | "ft3/h"
    | "yd3/s"
    | "yd3/min"
    | "yd3/h"; // Volume Flow Rate
    export type uTemperature = "C" | "F" | "K" | "R"; // Temperature
    export type uTime = "ns" | "mu" | "ms" | "s" | "min" | "h" | "d" | "week" | "month" | "year"; // Time
    export type uFrequency = "Hz" | "mHz" | "kHz" | "MHz" | "GHz" | "THz" | "rpm" | "deg/s" | "rad/s"; // Frequency
    export type uSpeed = "m/s" | "km/h" | "m/h" | "knot" | "ft/s"; // Speed
    export type uPace = "s/m" | "min/km" | "s/ft" | "min/km"; // Pace
    export type uPressure = "Pa" | "hPa" | "kPa" | "MPa" | "bar" | "torr" | "psi" | "ksi"; // Pressure
    export type uDitgital = "b" | "Kb" | "Mb" | "Gb" | "Tb" | "B" | "KB" | "MB" | "GB" | "TB"; // Digital
    export type uIlluminance = "lx" | "ft-cd"; // Illumunance
    export type uPartsPer = "ppm" | "ppb" | "ppt" | "ppq"; // Parts-Per
    export type uVoltage = "V" | "mV" | "kV"; // Voltage
    export type uCurrent = "A" | "mA" | "kA"; // Current
    export type uPower = "W" | "mW" | "kW" | "MW" | "GW";
    export type uApparentPower = "VA" | "mVA" | "kVA" | "MVA" | "GVA"; // Apparent Power
    export type uReactivePower = "VAR" | "mVAR" | "kVAR" | "MVAR" | "GVAR"; // Reactive Power
    export type uEnergy = "Wh" | "mWh" | "kWh" | "MWh" | "GWh" | "J" | "kJ"; // Energy
    export type uReactiveEnergy = "VARh" | "mVARh" | "kVARh" | "MVARh" | "GVARH"; // Reactive Energy
    export type uAngle = "deg" | "rad" | "grad" | "arcmin" | "arcsec"; // Angle
    
    export type unit = uDistance
    | uArea
    | uMass
    | uVolume
    | uVolumeFlowRate
    | uTemperature
    | uTime
    | uFrequency
    | uSpeed
    | uPace
    | uPressure
    | uDitgital
    | uIlluminance
    | uPartsPer
    | uVoltage
    | uCurrent
    | uPower
    | uApparentPower
    | uReactivePower
    | uEnergy
    | uReactiveEnergy
    | uAngle;
    
    export type measure = "length"
    | "area"
    | "mass"
    | "volume"
    | "volumeFlowRate"
    | "temperature"
    | "time"
    | "frequency"
    | "speed"
    | "pace"
    | "pressure"
    | "ditgital"
    | "illuminance"
    | "partsPer"
    | "voltage"
    | "current"
    | "power"
    | "apparentPower"
    | "reactivePower"
    | "energy"
    | "reactiveEnergy"
    | "angle";
    
    export type system = "metric"
    | "imperial"
    | "bits"
    | "bytes";
    
    export class Convert {
        constructor(numerator: number, denominator: number);
        from(from: unit): this;
        to(to: unit): number;
        toBest(options?: { exclude?: unit[], cutOffNumber?: number }): { val: number, unit: string, singular: string, plural: string };
        getUnit<T extends unit>(abbr: T): { abbr: T, measure: measure, system: system, unit: { name: { singular: string, plural: string }, to_anchor: number } };
        describe<T extends unit>(abbr: T): { abbr: T, measure: measure, system: system, singular: string, plural: string };
        list(measure?: measure): Array<{ abbr: unit, measure: measure, system: system, singular: string, plural: string }>;
        private throwUnsupportedUnitError(what: string): void;
        possibilities(measure?: measure): unit[];
        measures(): measure[];
    }
    
    function convert(value?: number): Convert;
}

export = convert;