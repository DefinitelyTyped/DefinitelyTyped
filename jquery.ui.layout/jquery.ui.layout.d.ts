// Type definitions for jQueryUI 1.9
// Project: http://layout.jquery-dev.net/
// Definitions by: Steve Fenton <https://github.com/Steve-Fenton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="../jqueryui/jqueryui.d.ts"/>

interface JQueryLayoutOptions {
    north: any;
    east: any;
    south: any;
    west: any;
}

interface JQueryLayout {
    panes: any;
    options: JQueryLayoutOptions;
    state: any;

    toggle(pane: any): any;
    open(pane: any): any;
    close(pane: any): any;
    show(pane: any, openPane?: boolean): any;
    hide(pane: any): any;
    sizePane(pane: any, sizeInPixels: number): any;
    resizeContent(pane: any): any;
    resizeAll(): any;

    addToggleBtn(selector: string, pane: any)
    addCloseBtn(selector: string, pane: any)
    addOpenBtn(selector: string, pane: any)
    addPinBtn(selector: string, pane: any)
    allowOverflow(elemOrPane: any)
    resetOverflow(elemOrPane: any)
}

interface JQuery {
    layout(options?: JQueryLayoutOptions): JQueryLayout;
}
