import { UIkitElement } from "../utils";

type UIkitUploadOptions = {
    url?: string;
    multiple?: boolean;
    name?: string;
    params?: object;
    allow?: string | boolean;
    mime?: string | boolean;
    concurrent?: number;
    type?: string;
    method?: string;
    'msg-invalid-mime'?: string;
    'msg-invalid-name'?: string;
    'cls-dragover'?: string;
    abort?: Function;
    'before-all'?: Function;
    'before-send'?: Function;
    complete?: Function;
    'complete-all'?: Function;
    error?: Function;
    load?: Function;
    'load-end'?: Function;
    'load-start'?: Function;
    progress?: Function;
    fail?: Function;
}

export type Upload = (element: UIkitElement, options?: UIkitUploadOptions) => void;