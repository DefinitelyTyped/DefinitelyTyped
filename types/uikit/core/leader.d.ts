import { UIkitElement } from "../utils";

type UIkitLeaderOptions = {
    fill?: string;
    media?: number | string;
}

type Leader = (element: UIkitElement, options?: UIkitLeaderOptions) => void;