import { UIkitElement } from "../utils";

type UIkitIconOptions = {
    icon?: string;
    ratio?: number;
}

type Icon = (element: UIkitElement, options?: UIkitIconOptions) => {
    svg: Promise<any>;
};