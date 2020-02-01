import { UIkitElement } from "../utils";

type UIkitVideoOptions = {
    autoplay?: boolean | string;
    automute?: boolean;
}

type Video = (element: UIkitElement, options?: UIkitVideoOptions) => void;