import { UIkitElement } from "../utils";

export type UIkitLightboxPanelOptions = {
    animation?: string;	
    autoplay?: boolean;
    'autoplay-interval'?: number;
    'pause-on-hover'?: boolean;	
    'video-autoplay'?: boolean;
    index?: number;
    velocity?: number;
    preload?: number;
    items?: Array<object>;
    template?: string;
    'delay-controls'?: number;
}

interface UIkitLightboxPanelElement {
    show(index: number): void;
    hide(): void;
    startAutoplay(): void;
    stopAutoplay(): void;
}

export interface LightboxPanel {
    (options: UIkitLightboxPanelOptions): UIkitLightboxPanelElement;
    (element: UIkitElement): UIkitLightboxPanelElement;
}