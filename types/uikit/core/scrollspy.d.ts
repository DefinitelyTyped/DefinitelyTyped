import { UIkitElement } from "../utils";

type UIkitScrollspyOptions = {
    cls?: string;
    hidden?: boolean;
    'offset-top'?: number;
    'offset-left'?: number;
    repeat?: boolean;
    delay?: number;
}

type UIkitScrollspyNavOptions = {
    cls?: string;
    closest?: string;
    scroll?: boolean;
    overflow?: boolean;
    offset?: number;
}

type Scrollspy = (element: UIkitElement, options?: UIkitScrollspyOptions) => void;
type ScrollspyNav = (element: UIkitElement, options?: UIkitScrollspyNavOptions) => void;