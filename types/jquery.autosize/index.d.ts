/// <reference types="jquery" />
declare namespace autosize {
    interface AutosizeStatic {
        (el: Element): void;
        (el: NodeList): void;
        (el: JQuery): void;
    }
}

declare var autosize: autosize.AutosizeStatic;
