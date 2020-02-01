import { UIkitElement } from "../utils";

type UIkitCoverOptions = {
    automute?: boolean;
    width?: number;
    height?: number;
}

type Cover = (element: UIkitElement, options?: UIkitCoverOptions) => void;