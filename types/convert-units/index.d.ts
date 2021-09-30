// Type definitions for convert-units 2.3
// Project: https://github.com/ben-ng/convert-units#readme
// Definitions by: vladkampov <https://github.com/vladkampov>
//                 ben-ng <https://github.com/ben-ng>
//                 Toby Bell <https://github.com/tobybell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare namespace convert {
    type Distance = "mm" | "cm" | "m" | "km" | "in" | "ft-us" | "ft" | "mi"; // Distance
    type Area = "mm2" | "cm2" | "m2" | "ha" | "km2" | "in2" | "ft2" | "ac" | "mi2"; // Area
    type Mass = "mcg" | "mg" | "g" | "kg" | "oz" | "lb" | "mt" | "t"; // Mass
    type Volume = "mm3" | "cm3" | "ml" | "l" | "kl" | "m3" | "km3" | "tsp" | "Tbs" | "in3" | "fl-oz" | "cup" | "pnt" | "qt" | "gal" | "ft3" | "yd3"; // Volume
    type VolumeFlowRate =
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
    type Temperature = "C" | "F" | "K" | "R"; // Temperature
    type Time = "ns" | "mu" | "ms" | "s" | "min" | "h" | "d" | "week" | "month" | "year"; // Time
    type Frequency = "Hz" | "mHz" | "kHz" | "MHz" | "GHz" | "THz" | "rpm" | "deg/s" | "rad/s"; // Frequency
    type Speed = "m/s" | "km/h" | "m/h" | "knot" | "ft/s"; // Speed
    type Pace = "s/m" | "min/km" | "s/ft" | "min/km"; // Pace
    type Pressure = "Pa" | "hPa" | "kPa" | "MPa" | "bar" | "torr" | "psi" | "ksi"; // Pressure
    type Ditgital = "b" | "Kb" | "Mb" | "Gb" | "Tb" | "B" | "KB" | "MB" | "GB" | "TB"; // Digital
    type Illuminance = "lx" | "ft-cd"; // Illumunance
    type PartsPer = "ppm" | "ppb" | "ppt" | "ppq"; // Parts-Per
    type Voltage = "V" | "mV" | "kV"; // Voltage
    type Current = "A" | "mA" | "kA"; // Current
    type Power = "W" | "mW" | "kW" | "MW" | "GW";
    type ApparentPower = "VA" | "mVA" | "kVA" | "MVA" | "GVA"; // Apparent Power
    type ReactivePower = "VAR" | "mVAR" | "kVAR" | "MVAR" | "GVAR"; // Reactive Power
    type Energy = "Wh" | "mWh" | "kWh" | "MWh" | "GWh" | "J" | "kJ"; // Energy
    type ReactiveEnergy = "VARh" | "mVARh" | "kVARh" | "MVARh" | "GVARH"; // Reactive Energy
    type Angle = "deg" | "rad" | "grad" | "arcmin" | "arcsec"; // Angle

    type Unit = Distance
        | Area
        | Mass
        | Volume
        | VolumeFlowRate
        | Temperature
        | Time
        | Frequency
        | Speed
        | Pace
        | Pressure
        | Ditgital
        | Illuminance
        | PartsPer
        | Voltage
        | Current
        | Power
        | ApparentPower
        | ReactivePower
        | Energy
        | ReactiveEnergy
        | Angle;

    type Measure = "length"
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

    type System = "metric"
        | "imperial"
        | "bits"
        | "bytes";

    class Convert {
        constructor(numerator: number, denominator: number);
        from(from: Unit): this;
        to(to: Unit): number;
        toBest(options?: { exclude?: Unit[] | undefined, cutOffNumber?: number | undefined }): { val: number, unit: string, singular: string, plural: string };
        getUnit<T extends Unit>(abbr: T): { abbr: T, measure: Measure, system: System, unit: { name: { singular: string, plural: string }, to_anchor: number } };
        describe<T extends Unit>(abbr: T): { abbr: T, measure: Measure, system: System, singular: string, plural: string };
        list(measure?: Measure): Array<{ abbr: Unit, measure: Measure, system: System, singular: string, plural: string }>;
        private throwUnsupportedUnitError(what: string): void;
        possibilities(measure?: Measure): Unit[];
        measures(): Measure[];
    }
}

declare function convert(value?: number): convert.Convert;

export as namespace convert;
export = convert;
