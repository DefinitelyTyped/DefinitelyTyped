// Type definitions for analog-clock 1.0
// Project: https://github.com/matthewp/analog-clock#readme
// Definitions by: ihatecsv <https://github.com/ihatecsv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Clock class that handles the logic of the analog clock component
export class Clock {
    frag: DocumentFragment;
    clockNode: HTMLElement;
    hourNode: HTMLElement;
    minuteNode: HTMLElement;
    secondNode: HTMLElement;
    hour: number;
    minute: number;
    second: number;
    mounted: boolean;
    threshold: number;
    offset: number | null;
    time: number;
    rafId: number;

    // DOM update functions
    setHourNode(value: number): void;
    setMinuteNode(value: number): void;
    setSecondNode(value: number): void;
    setClockNode(value: string): void;
    setClockNodeMounted(): void;
    setClockNodeMode(dark: boolean): void;

    // State update functions
    setHour(value: number): void;
    setMinute(value: number): void;
    setSecond(value: number): void;
    setMounted(value: boolean): void;
    setOffset(value: number): void;
    setDark(value: boolean): void;

    // State logic
    updateTime(newTime: number): void;
    setTime(): void;
    setExplicitTime(time: number): void;
    getDegree(value: number, max: number): number;
    setMountedOnNextFrame(): void;

    // Start and stop the clock
    start(): void;
    stop(): void;

    // Event listeners
    onNewFrame(): void;

    // Lifecycle methods
    connect(): void;
    disconnect(): void;

    // Update method for applying changes to the clock
    update(data: {
        time?: number;
        offset?: number;
        dark?: boolean;
        stop?: boolean;
        start?: boolean;
    }): DocumentFragment;
}

// Custom HTMLElement for the analog clock
export class AnalogClock extends HTMLElement {
    private _time: number | undefined;
    private _offset: number | undefined;
    private _dark: boolean | undefined;

    constructor();
    connectedCallback(): void; // Lifecycle method called when the element is connected to the DOM
    disconnectedCallback(): void; // Lifecycle method called when the element is disconnected from the DOM
    attributeChangedCallback(attr: string, oldVal: string, newVal: string): void; // Called when an observed attribute changes

    // Getters and setters for time, offset, and dark mode properties
    time: number | undefined;
    offset: number | undefined;
    dark: boolean;

    // Public methods for stopping and starting the clock
    stop(): void;
    start(): void;
}

// Export default as the AnalogClock class
export default AnalogClock;
