import View from "./view";
import Element from "./element";
import DowncastWriter from "./downcastwriter";

export function disablePlaceholder(view: View, element: Element): void;
export function enablePlaceholder(options?: {
    view: View;
    element: Element;
    text: string;
    isDirectHost?: boolean | undefined;
    keepOnFocus?: boolean | undefined;
}): void;
export function hidePlaceholder(writer: DowncastWriter, element: Element): boolean;
export function needsPlaceholder(element: Element, keepOnFocus: boolean): boolean;
export function showPlaceholder(writer: DowncastWriter, element: Element): boolean;
