/// <reference types="resize-observer-browser" />
import { Fin, View } from "../../main";
import { Identity } from "../../shapes/Identity";
import { ViewCreationOptions } from "../view/view";
import { ViewComponent } from "./utils";
export interface ViewState extends ViewCreationOptions {
    url: string;
}
export declare class ResizableView {
    private fin;
    options: any;
    ofView: View;
    windowIdentity: Identity;
    resizeObserver: ResizeObserver;
    container: GoldenLayout.Container;
    constructor(fin: Fin, { container, componentState }: ViewComponent, viewObserver: ResizeObserver);
    renderIntoComponent(): Promise<void>;
    createOrAttachView(): Promise<void>;
}
