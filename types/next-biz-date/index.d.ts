import { Moment } from "moment";
/**
 * Returns the next applicable business day for a given candidate day.
 * If candidateDate is a business day then it returns the same provided candidateDate.
 * @param candidateDate Date to evaluate first for being bizdate (moment or string on yyyy-mm-dd format)
 * @param holidaysArray Array of holidays (strings on yyyy-mm-dd format)
 * @param direction FORWARD or BACKWARDS
 */
export function FindBizDate(candidateDate: Moment, holidaysArray: string[], direction?: Direction): Moment;

/***
 * Calculates next applicable business day out of counting bizdates starting from a provided base date up to a provided countTarget by skipping holidays and weekends.
 * @param baseDate date to start counting. Also conceptualized as day 0.
 * @param holidaysArray Array of holidays to consider.
 * @param [countTarget] Number of biz dates count.
 * @param [direction] FORWARD or BACKWARDS to count to the future or to the past respectively.
 */
export function FindNextBizDate(
    baseDate: string,
    holidaysArray: string[],
    countTarget?: number,
    direction?: Direction,
): Moment;

/**
 * count to the future or to the past respectively
 */
export type Direction = "FORWARD" | "BACKWARDS";
