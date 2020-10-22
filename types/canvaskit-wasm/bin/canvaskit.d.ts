import { CanvasKitInitOptions, CanvasKit } from "../index";

declare function CanvasKitInit(opts: CanvasKitInitOptions): Promise<CanvasKit>;

export = CanvasKitInit;
