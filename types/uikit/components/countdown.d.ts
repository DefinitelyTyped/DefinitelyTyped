import { UIkitElement } from "../utils";

type UIkitCountdownOptions = {
    date?: string | boolean;
}

interface UIkitCountdownElement {
    start(): void;
    stop(): void;
}

export type Countdown = (element: UIkitElement, options?: UIkitCountdownOptions) => UIkitCountdownElement;