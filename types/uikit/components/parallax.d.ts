import { UIkitElement } from "../utils";

type UIkitParallaxOptions = {
    easing?: number;
    target?: string;
    viewport?: number;
    media?: number | string;
}

export type Parallax = (element: UIkitElement, options?: UIkitParallaxOptions) => void;