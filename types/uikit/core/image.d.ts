import { UIkitElement } from "../utils";

type UIkitImageOptions = {
    dataSrc?: string;
    dataSrcset?: string | boolean;
    sizes?: string | boolean;
    width?: string | boolean;
    height?: string | boolean;
    offsetTop?: string;
    offsetLeft?: string | number;
    target?: string	| boolean;
}

type Img = (element: UIkitElement, options?: UIkitImageOptions) => void;