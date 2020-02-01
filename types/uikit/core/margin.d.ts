import { UIkitElement } from "../utils";

type UIkitMarginOptions = {
    margin?: string;
    'first-column'?: string;
}

type Margin = (element: UIkitElement, options?: UIkitMarginOptions) => void;