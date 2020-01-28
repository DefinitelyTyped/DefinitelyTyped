/// <reference types="jquery" />
import { Identity } from '../../identity';
import { ViewState } from './resizable-view';
import { Bounds } from '../../shapes';
import { View } from '../../main';
export interface ViewComponent extends GoldenLayout.ContentItem {
    componentState: ViewState;
}
export declare const createComponent: (componentState: {
    name: string;
}) => {
    type: string;
    componentName: string;
    componentState: {
        name: string;
    };
};
export declare const debounce: <T extends (...args: any[]) => any>(callback: T, delay: number, resizing: boolean) => (...args: Parameters<T>) => void;
export declare const delay: (delay: number) => Promise<unknown>;
export declare const generateLayout: (componentState: any) => GoldenLayout.Config;
export declare const getSourceIdentity: (e: JQuery.DragEventBase<HTMLElement, Identity, HTMLElement, HTMLElement>) => {
    uuid: string;
    name: string;
};
export declare const getOutOfWindowDropBounds: (e: {
    screenY: number;
    screenX: number;
}, container: HTMLElement, dimensions: {
    width: any;
    height: any;
}) => Partial<Bounds>;
export declare const isSameApp: (e: JQuery.DragEventBase<HTMLElement, undefined, HTMLElement, HTMLElement>, currentWindow: Identity) => boolean;
export declare const isSameWindow: (e: JQuery.DragEventBase<HTMLElement, Identity, HTMLElement, HTMLElement>, currentWindow: Identity) => boolean;
export declare const mock: {
    on: () => void;
};
export declare const setViewBoundsByRect: (rect: Bounds | ClientRect | DOMRect, ofView: View) => Promise<void>;
