import { Tab, TabEventMap } from "./ui/Tab.js";

export interface ExtensionEventMap extends TabEventMap {}

export class Extension<TEventMap extends ExtensionEventMap = ExtensionEventMap> extends Tab<TEventMap> {
    readonly isExtension: boolean;

    constructor(name: string);
}
