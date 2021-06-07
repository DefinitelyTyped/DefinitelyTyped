// Type definitions for react-clock 3.0
// Project: https://github.com/wojtekmaj/react-clock
// Definitions by: Enmanuel Veras <https://github.com/everas7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function Clock(props: ClockProps): JSX.Element;
export type ClockValue = string | Date;
export interface ClockProps<T = ClockValue> {
    /**
     * Class name(s) that will be added along with "react-clock" to the main React-Clock <time> element.
     */
    className?: string | string[];
    /**
     * Hour hand length, in %.
     * @default 50
     */
    hourHandLength?: number;
    /**
     * The length of the part of an hour hand on the opposite side the hand is pointing to, in %.
     * @default 10
     */
    hourHandOppositeLength?: number;
    /**
     * Hour hand width, in pixels.
     * @default 4
     */
    hourHandWidth?: number;
    /**
     * Hour marks length, in %.
     * @default 10
     */
    hourMarksLength?: number;
    /**
     * Hour marks width, in pixels.
     * @default 3
     */
    hourMarksWidth?: number;
    /**
     * Minute hand length, in %.
     * @default 70
     */
    minuteHandLength?: number;
    /**
     * The length of the part of a minute hand on the opposite side the hand is pointing to, in %.
     * @default 10
     */
    minuteHandOppositeLength?: number;
    /**
     * Minute hand width, in pixels.
     * @default 2
     */
    minuteHandWidth?: number;
    /**
     * Minute marks length, in %.
     * @default 6
     */
    minuteMarksLength?: number;
    /**
     * Minute marks width, in pixels.
     * @default 1
     */
    minuteMarksWidth?: number;
    /**
     * Whether hour marks shall be rendered.
     * @default true
     */
    renderHourMarks?: boolean;
    /**
     * Whether minute hand shall be rendered.
     * @default true
     */
    renderMinuteHand?: boolean;
    /**
     * Whether minute marks shall be rendered.
     * @default true
     */
    renderMinuteMarks?: boolean;
    /**
     * Whether numbers shall be rendered.
     * @default false
     */
    renderNumbers?: boolean;
    /**
     * Whether second hand shall be rendered.
     * @default true
     */
    renderSecondHand?: boolean;
    /**
     * Second hand length, in %.
     * @default 90
     */
    secondHandLength?: number;
    /**
     * The length of the part of a second hand on the opposite side the hand is pointing to, in %.
     * @default 10
     */
    secondHandOppositeLength?: number;
    /**
     * Second hand width, in pixels.
     * @default 1
     */
    secondHandWidth?: number;
    /**
     * Clock size, in pixels.
     * @default 150
     */
    size?: number;
    /**
     * Clock value. Must be provided.
     */
    value: T;
}
