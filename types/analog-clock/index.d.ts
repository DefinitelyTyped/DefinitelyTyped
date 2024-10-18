// Custom HTMLElement for the analog clock
export class AnalogClock extends HTMLElement {
    static observedAttributes: string[];

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
