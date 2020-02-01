import { UIkitElement } from "../utils";

type UIkitHeightMatchOptions = {
    target?: string;
    row?: boolean;
}

type HeightMatch = (element: UIkitElement, options?: UIkitHeightMatchOptions) => void;