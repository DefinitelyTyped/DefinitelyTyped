// Type definitions for react-clock 3.0
// Project: https://github.com/wojtekmaj/react-clock
// Definitions by: Enmanuel Veras <https://github.com/everas7>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default function Clock(props: ClockProps): JSX.Element;

export interface ClockProps {
    /**
     * Class name(s) that will be added along with "react-clock" to the main React-Clock <time> element.
     */
    className?: string | string[];
    /**
     * Hour hand length, in %.
     * Default: 50
     */
    hourHandLength?: number;
    /**
     * The length of the part of an hour hand on the opposite side the hand is pointing to, in %.
     * Default: 10
     */
    hourHandOppositeLength?: number;
    /**
     * Hour hand width, in pixels.
     * Default: 4
     */
    hourHandWidth?: number;
    /**
     * Hour marks length, in %.
     * Default: 10
     */
    hourMarksLength?: number;
    /**
     * Hour marks width, in pixels.
     * Default: 3
     */
    hourMarksWidth?: number;
    /**
     * Minute hand length, in %.
     * Default: 70
     */
    minuteHandLength?: number;
    /**
     * The length of the part of a minute hand on the opposite side the hand is pointing to, in %.
     * Default: 10
     */
    minuteHandOppositeLength?: number;
    /**
     * Minute hand width, in pixels.
     * Default: 2
     */
    minuteHandWidth?: number;
    /**
     * Minute marks length, in %.
     * Default: 6
     */
    minuteMarksLength?: number;
    /**
     * Minute marks width, in pixels.
     * Default: 1
     */
    minuteMarksWidth?: number;
    /**
     * Whether hour marks shall be rendered.
     * Default: true
     */
    renderHourMarks?: boolean;
    /**
     * Whether minute hand shall be rendered.
     * Default: true
     */
    renderMinuteHand?: boolean;
    /**
     * Whether minute marks shall be rendered.
     * Default: true
     */
    renderMinuteMarks?: boolean;
    /**
     * Whether numbers shall be rendered.
     * Default: false
     */
    renderNumbers?: boolean;
    /**
     * Whether second hand shall be rendered.
     * Default: true
     */
    renderSecondHand?: boolean;
    /**
     * Second hand length, in %.
     * Default: 90
     */
    secondHandLength?: number;
    /**
     * The length of the part of a second hand on the opposite side the hand is pointing to, in %.
     * Default: 10
     */
    secondHandOppositeLength?: number;
    /**
     * Second hand width, in pixels.
     * Default: 1
     */
    secondHandWidth?: number;
    /**
     * Clock size, in pixels.
     * Default: 150
     */
    size?: number;
    /**
     * Clock value. Must be provided.
     */
    value: Date;
}
