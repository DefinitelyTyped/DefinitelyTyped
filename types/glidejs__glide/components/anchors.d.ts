export interface Anchors {
    readonly items: HTMLElement[];

    /**
     * Setups a initial state of anchors component.
     */
    mount(): void;

    /**
     * Binds events to anchors inside a track.
     */
    bind(): void;

    /**
     * Unbinds events attached to anchors inside a track.
     */
    unbind(): void;

    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     */
    click(event: Event): void;

    /**
     * Detaches anchors click event inside glide.
     */
    detach(): Anchors;

    /**
     * Attaches anchors click events inside glide.
     */
    attach(): Anchors;
}
