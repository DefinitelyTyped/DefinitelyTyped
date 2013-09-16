declare module L {
    export class Canvas {
        /**
          * Instantiates a Canvas tile layer object given an options object (optionally).
          */
        constructor(options?: TileLayerOptions);
    
        /**
          * You need to define this method after creating the instance to draw tiles;
          * canvas is the actual canvas tile on which you can draw, tilePoint represents
          * the tile numbers, and zoom is the current zoom.
          */
        drawTile(canvas: HTMLCanvasElement, tilePoint: Point, zoom: number): Canvas;
    
        /**
          * Calling redraw will cause the drawTile method to be called for all tiles.
          * May be used for updating dynamic content drawn on the Canvas
          */
        redraw(): Canvas;
    
    }
} 
 
 
