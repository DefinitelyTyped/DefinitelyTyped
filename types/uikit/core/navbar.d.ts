import { UIkitElement } from "../utils";

type UIkitNavbarOptions = {
    align?: string;	
    mode?: string;
    'delay-show'?: number;	
    'delay-hide'?: number;	
    boundary?: string;	
    'boundary-align'?: boolean;
    offset?: number;
    dropbar?: boolean;
    'dropbar-mode'?: string;
    duration?: number;
}

type Navbar = (element: UIkitElement, options?: UIkitNavbarOptions) => void;