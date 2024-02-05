import Stats from "../libs/stats.module.js";

export class GPUStatsPanel extends Stats.Panel {
    context: WebGLRenderingContext | WebGL2RenderingContext;
    extension: unknown;
    maxTime: number;
    activeQueries: number;
    startQuery: () => void;
    endQuery: () => void;

    constructor(context: WebGLRenderingContext | WebGL2RenderingContext, name?: string);
}
