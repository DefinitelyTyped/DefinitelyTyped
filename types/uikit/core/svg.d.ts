import { UIkitElement } from "../utils";

type UIkitSvgOptions = {
    src?: string;
    'stroke-animation'?: boolean;
}

type Svg = (element: UIkitElement, options?: UIkitSvgOptions) => {
    svg: Promise<any>;
};