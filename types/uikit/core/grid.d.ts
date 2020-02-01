import { UIkitElement } from "../utils";

type UIkitGridOptions = {
    margin?: string;
    'first-column'?: string;
    masonry?: boolean;
    parallax?: number;
}

type Grid = (element: UIkitElement, options?: UIkitGridOptions) => void;