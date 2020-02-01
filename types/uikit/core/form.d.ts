import { UIkitElement } from "../utils";

type UIkitFormOptions = {
    target?: string | boolean;
}

type FormCustom = (element: UIkitElement, options?: UIkitFormOptions) => void;