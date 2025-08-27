interface FPSMeterOptions {
    interval?: number | undefined; // Update interval in milliseconds.
    smoothing?: number | undefined; // Spike smoothing strength. 1 means no smoothing.
    show?: string | undefined; // Whether to show 'fps', or 'ms' = frame duration in milliseconds.
    toggleOn?: string | undefined; // Toggle between show 'fps' and 'ms' on this event.
    decimals?: number | undefined; // Number of decimals in FPS number. 1 = 59.9, 2 = 59.94, ...
    maxFps?: number | undefined; // Max expected FPS value.
    threshold?: number | undefined; // Minimal tick reporting interval in milliseconds.
    position?: string | undefined; // Meter position.
    zIndex?: number | undefined; // Meter Z index.
    left?: string | undefined; // Meter left offset.
    top?: string | undefined; // Meter top offset.
    right?: string | undefined; // Meter right offset.
    bottom?: string | undefined; // Meter bottom offset.
    margin?: string | undefined; // Meter margin. Helps with centering the counter when left: 50%;

    theme?: string | undefined; // Meter theme. Build in: 'dark', 'light', 'transparent', 'colorful'.
    heat?: number | undefined; // Allow themes to use coloring by FPS heat. 0 FPS = red, maxFps = green.

    graph?: number | undefined; // Whether to show history graph.
    history?: number | undefined; // How many history states to show in a graph.
}

declare class FPSMeter {
    constructor(anchor?: HTMLElement, options?: FPSMeterOptions);
    public options: FPSMeterOptions;
    public tick(): void;
    public tickStart(): void;
    public pause(): FPSMeter;
    public resume(): FPSMeter;
    public set(name: string, value: any): FPSMeter;
    public showDuration(): FPSMeter;
    public showFps(): FPSMeter;
    public toggle(): FPSMeter;
    public hide(): FPSMeter;
    public show(): FPSMeter;
    public destroy(): void;
}
