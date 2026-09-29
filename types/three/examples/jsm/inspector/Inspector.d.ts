import { ColorGrading } from "./extensions/color-grading/ColorGrading.js";
import { TSLGraphEditor } from "./extensions/tsl-graph/TSLGraphEditor.js";
import { RendererInspector, RendererInspectorEventMap } from "./RendererInspector.js";
import { ParametersGroup } from "./tabs/Parameters.js";
import { Tab } from "./ui/Tab.js";

export interface InspectorLayoutEvent {
    position: "bottom" | "right";
    isVertical: boolean;
}

export interface InspectorEventMap extends RendererInspectorEventMap {
    resize: {};
    orientationchange: InspectorLayoutEvent;
    layoutchange: InspectorLayoutEvent;
}

export interface InspectorOptions {
    nonce?: string | null | undefined;
}

declare class Inspector extends RendererInspector<InspectorEventMap> {
    constructor(options?: InspectorOptions);

    nonce: string | null;

    createParameters(name: string): ParametersGroup;

    get domElement(): HTMLDivElement;

    onExtension(name: "Color Grading", callback: (extension: ColorGrading) => void): this;
    onExtension(name: "TSL Graph", callback: (extension: TSLGraphEditor) => void): this;

    hide(): void;
    show(): void;

    setVisible(value: boolean): this;
    getVisible(): boolean;

    getSize(): { width: number; height: number };

    isVertical(): boolean;

    setHorizontalAlign(value: "left" | "right"): this;
    setVerticalAlign(value: "top" | "bottom"): this;

    setActiveTab(tab: Tab): this;
    addTab(tab: Tab): this;
    removeTab(tab: Tab): this;

    setActiveExtension(name: "Color Grading" | "TSL Graph", value: boolean): this;
}

export { Inspector };
