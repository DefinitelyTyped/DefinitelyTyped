/**
 * Class represents application timer that stores custom current julian datetime, and time speed multiplier.
 * @class
 * @param {Object} [params]: - Clock parameters:
 * @param {number} [params.startDate=0.0] - Julian start date.
 * @param {number} [params.endDate=0.0] - Julian end date.
 * @param {number} [params.currentDate] - Julian current date. Default: current date.
 * @param {number} [params.multiplier=1.0] - Time speed multiolier.
 */
export class Clock {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(params: any);
    _id: number;
    /**
     * Clock name.
     * @public
     * @type {string}
     */
    public name: string;
    /**
     * Clock events.
     * @public
     * @type {Events}
     */
    public events: Events;
    /**
     * Start julian date clock loop.
     * @public
     * @type {number}
     */
    public startDate: number;
    /**
     * End julian date clock loop.
     * @public
     * @type {number}
     */
    public endDate: number;
    /**
     * Current julian datetime.
     * @public
     * @type {number}
     */
    public currentDate: number;
    /**
     * Timer speed multiplier.
     * @public
     * @type {number}
     */
    public multiplier: number;
    /**
     * Animation frame delta time.
     * @public
     * @readonly
     * @type {number}
     */
    public readonly deltaTicks: number;
    /**
     * Timer activity.
     * @public
     * @type {boolean}
     */
    public active: boolean;
    _intervalDelay: number;
    _intervalStart: number;
    _intervalCallback: any;
    clearInterval(): void;
    setInterval(delay: any, callback: any): void;
    /**
     * Sets current clock datetime.
     * @public
     * @param {Object} date - JavaScript Date object.
     */
    public setDate(date: any): void;
    /**
     * Returns current application date.
     * @public
     * @returns {Date} - Current date.
     */
    public getDate(): Date;
    reset(): void;
    _tick(dt: any): void;
    /**
     * @public
     * @param {Clock} clock - Clock instance to compare.
     * @returns {boolean} - Returns true if a clock is the same instance.
     */
    public equal(clock: Clock): boolean;
}
import { Events } from "./Events.js";
