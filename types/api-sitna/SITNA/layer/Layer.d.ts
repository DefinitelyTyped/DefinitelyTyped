import { SitnaMap } from '../Map';

export interface LayerOptions {
    id?: string;
    format?: string;
    hideTree?: boolean;
    isBase?: boolean;
    isDefault?: boolean;
    overviewMapLayer?: LayerOptions | string;
    stealth?: boolean;
    thumbnail?: string;
    title?: string;
    type?: string;
    url?: string;
}

export interface LayerTree {
    children?: LayerTree[];
    legend?: string;
    name?: string;
    title?: string;
    uid?: string;
}

export class Layer {
    id: string;
    map?: SitnaMap;
    type: string;
    url: string;

    constructor(options?: LayerOptions);

    setVisibility(visible: boolean): this;
    getVisibility(): boolean;
    getOpacity(): number;
    setOpacity(opacity: number, silent?: boolean): Promise<void>;
}

export default Layer;