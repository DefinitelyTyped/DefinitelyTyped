export type Unit = "now" | "second" | "minute" | "hour" | "day" | "week" | "month" | "year";

export interface Gradation {
    unit?: Unit | undefined;
    factor?: number | undefined;
    granularity?: number | undefined;
    threshold?: number | undefined;
    threshold_for_now?: number | undefined;
    threshold_for_second?: number | undefined;
    threshold_for_minute?: number | undefined;
    threshold_for_hour?: number | undefined;
    threshold_for_day?: number | undefined;
    threshold_for_week?: number | undefined;
    threshold_for_month?: number | undefined;
    threshold_for_year?: number | undefined;
}

export { default as canonical } from "./canonical";
export { default as convenient } from "./convenient";
export { day, getDate, getStep, hour, minute, month, year } from "./helpers";
