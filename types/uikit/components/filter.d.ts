import { UIkitElement } from "../utils";

type UIkitFilterOptions = {
    target?: string;
    selActive?: string | boolean;
}

export type Filter = (element: UIkitElement, options?: UIkitFilterOptions) => void;