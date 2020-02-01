import { UIkitElement } from "../utils";

type UIkitLightboxOptions = {
    animation?: string;
    autoplay?: number;
    'autoplay-interval'?: number;	
    'pause-on-hover'?: boolean;	
    'video-autoplay'?: boolean;
    index?: string;
    toggle?: string;
}

interface UIkitLightboxElement {
    show(index: number): void;
    hide(): void;
}

export type Lightbox = (element: UIkitElement, options?: UIkitLightboxOptions) => UIkitLightboxElement;