// Type definitions for dayjs-hijri 1.1
// Project: https://github.com/mashhadiebad/dayjs-hijri
// Definitions by: Yonko <https://github.com/YonkoSam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {
  PluginFunc,
  ConfigType,
  OpUnitType,
  QUnitType,
  UnitType,
  ManipulateType,
} from "dayjs";

declare const plugin: PluginFunc;
export default plugin;

declare module "dayjs" {
  interface Dayjs {
    calendar(type?: "gregory" | "hijri"): Dayjs;
    isHijri(): boolean;

    hyear(): number;
    hyear(year: number): Dayjs;
    hMonth(): number;
    hMonth(month: number): Dayjs;
    hDate(): number;
    hDate(date: number): Dayjs;

    startOf(unit: OpUnitType): Dayjs;
    endOf(unit: OpUnitType): Dayjs;
    add(value: number, unit?: ManipulateType): Dayjs;
    subtract(value: number, unit?: ManipulateType): Dayjs;
    set(unit: UnitType, value: number): Dayjs;
    format(template?: string): string;
    diff(
      date: ConfigType,
      unit?: QUnitType | OpUnitType,
      float?: boolean,
    ): number;
  }

  interface ConfigTypeParams {
    hijri?: boolean;
  }

  export function calendar(type: "gregory" | "hijri"): void;

  export function hijri(config: {
    year: number;
    month: number;
    date?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    hijri?: boolean;
  }): Dayjs;

  export function hijri(
    year: number,
    month: number,
    date?: number,
    hour?: number,
    minute?: number,
    second?: number,
    millisecond?: number,
  ): Dayjs;
}
