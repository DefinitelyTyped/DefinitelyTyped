/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxPanningManager
 *
 * Implements a handler for panning.
 */
declare namespace mxgraph {
  export class mxPanningManager {
    constructor(graph: mxGraph);
    private thread: (handler: TimerHandler, timeout?: number, ...arguments: any[]) => number;
    private active: boolean;
    private tdx: number;
    private tdy: number;
    private t0x: number;
    private t0y: number;
    private dx: number;
    private dy: number;
    private scrollbars: boolean;
    private scrollLeft: number;
    private scrollTop: number;

    private mouseListener: {
      mouseDown: (sender: any, me: mxMouseEvent) => void;
      mouseMove: (sender: any, me: mxMouseEvent) => void;
      mouseUp: (sender: any, me: mxMouseEvent) => void;
    };

    private mouseUpListener: () => void;

    private isActive(): boolean;

    private getDx(): number;

    private getDy(): number;

    private start(): void;

    private panTo(x: number, y: number, w: number, h: number): void;

    private stop(): void;

    /**
     * Variable: damper
     * 
     * Damper value for the panning. Default is 1/6.
     */
    damper: number;

    /**
     * Variable: delay
     * 
     * Delay in milliseconds for the panning. Default is 10.
     */
    delay: number;

    /**
     * Variable: handleMouseOut
     * 
     * Specifies if mouse events outside of the component should be handled. Default is true. 
     */
    handleMouseOut: boolean;

    /**
     * Variable: border
     * 
     * Border to handle automatic panning inside the component. Default is 0 (disabled).
     */
    border: number;
  }
}