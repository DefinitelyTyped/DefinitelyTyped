export type GestureType = "onetap" | "twotap" | "threetap" | "drag" | "longpress" | "twodrag" | "pinch";

export interface GestureEventDetail {
    type: GestureType;
    clientX: number;
    clientY: number;
    magnitudeX?: number;
    magnitudeY?: number;
}

export default class GestureHandler {
    constructor();
    attach(target: EventTarget): void;
    detach(): void;
}
