import { Inspector, InspectorLayoutEvent } from "./Inspector.js";
import { Tab, TabEventMap } from "./ui/Tab.js";

export interface ExtensionEventMap extends TabEventMap {}

export class Extension<TEventMap extends ExtensionEventMap = ExtensionEventMap> extends Tab<TEventMap> {
    readonly isExtension: boolean;

    constructor(name: string);

    init(inspector: Inspector): void;

    serialize(): object | null;
    deserialize(data: object): void;

    save(): void;

    dispose(): void;

    onOrientationChange(event?: InspectorLayoutEvent): void;
    onLayoutChange(event?: InspectorLayoutEvent): void;
}
