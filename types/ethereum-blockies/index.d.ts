export interface BlockieOptions {
    /** seed used to generate icon data, default: random */
    seed?: string;
    /** to manually specify the icon color, default: random */
    color?: string;
    /** choose a different background color, default: random */
    bgcolor?: string;
    /** width/height of the icon in blocks, default: 8 */
    size?: number;
    /** width/height of each block in pixels, default: 4 */
    scale?: number;
    /**
     * each pixel has a 13% chance of being of a third color, default: random.
     *
     * Set to -1 to disable it.
     *
     * These "spots" create structures that look like eyes, mouths and noses.
     */
    spotcolor?: number;
}

export function create(options?: BlockieOptions): HTMLCanvasElement;
