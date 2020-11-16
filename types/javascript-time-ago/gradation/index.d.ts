export type Unit = 'now' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';

export interface Gradation {
    unit?: Unit;
    factor?: number;
    granularity?: number;
    threshold?: number;
    threshold_for_now?: number;
    threshold_for_second?: number;
    threshold_for_minute?: number;
    threshold_for_hour?: number;
    threshold_for_day?: number;
    threshold_for_week?: number;
    threshold_for_month?: number;
    threshold_for_year?: number;
}

export { default as canonical } from './canonical';
export { default as convenient } from './convenient';
export { minute, hour, day, month, year, getStep, getDate } from './helpers';
