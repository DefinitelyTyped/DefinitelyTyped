import { UIkitElement } from "../utils";

type UIkitToggleOptions = {
    target?: string;
    mode?: string;
    cls?: string;
    media?: number | string;
    animation?: string;
    duration?: number;
    queued?: boolean;
}

type UIkitToggleElement = {
    toggle(): void;
}

type Toggle = (element: UIkitElement, options?: UIkitToggleOptions) => UIkitToggleElement;