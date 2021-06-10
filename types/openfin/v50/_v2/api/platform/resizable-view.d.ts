/// <reference types="resize-observer-browser" />
import { Fin, View } from "../../main";
import { ViewCreationOptions } from "../view/view";
export interface ViewState extends ViewCreationOptions {
    url: string;
}
export declare class ResizableView {
    private fin;
    options: any;
    ofView: View;
    resizeObserver: ResizeObserver;
    container: GoldenLayout.Container;
    constructor(fin: Fin, options: ViewState);
    renderIntoComponent(opts: {
        componentState?: {
            url: string;
        };
        container: any;
    }): Promise<void>;
    createOrAttachView(): Promise<void>;
}
