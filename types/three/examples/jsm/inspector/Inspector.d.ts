import { RendererInspector } from "./RendererInspector.js";
import { ParametersGroup } from "./tabs/Parameters.js";

declare class Inspector extends RendererInspector {
    createParameters(name: string): ParametersGroup;

    get domElement(): HTMLDivElement;
}

export { Inspector };
