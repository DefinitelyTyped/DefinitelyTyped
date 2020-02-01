import { UIkitElement } from "../utils";

type UIkitSortableOptions = {
    group?: string;
    animation?: number;
    threshold?: number;
    'cls-item'?: string;
    'cls-placeholder'?: string;
    'cls-drag'?: string;
    'cls-drag-state'?: string;
    'cls-base'?: string;
    'cls-no-drag'?: string;	
    'cls-empty'?: string;
    'cls-custom': string;
    handle?: string;
}

export type Sortable = (element: UIkitElement, options?: UIkitSortableOptions) => void;