// Type definitions for vara 1.1
// Project: https://github.com/akzhy/vara#readme
// Definitions by: Richard Haddad <https://github.com/Chnapy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Comments are from the documentation: http://vara.akzhy.com/documentation/
 */

/**
 * The options given below will be applicable to every text created,
 * however they will not override the options set above.
 * They will work as secondary options.
 */
interface TextProperties {
    /**
     * Size of the text
     */
    fontSize?: number;
    /**
     * Width / Thickness of the stroke
     */
    strokeWidth?: number;
    /**
     * Color of the text
     */
    color?: string;
    /**
     * Duration of the animation in milliseconds
     */
    duration?: number;
    /**
     * Text align, accepted values are left,center,right
     */
    textAlign?: 'left' | 'center' | 'right';
    /**
     * Whether to animate the text automatically
     */
    autoAnimation?: boolean;
    /**
     * Whether the animation should be in a queue
     */
    queued?: boolean;
    /**
     * Space between each character
     */
    letterSpacing?: number;
}

interface TextStep extends TextProperties {
    /**
     * Text to be shown
     */
    text: string;
    /**
     * String or integer, for if animations are called manually or when using the get() method.
     * Default is the index of the object.
     */
    id?: string | number;
    /**
     * x coordinate of the text
     */
    x?: number;
    /**
     * y coordinate of the text
     */
    y?: number;
    /**
     * Whether the x or y coordinate should be from its calculated position,
     * ie the position if x or y coordinates were not applied
     */
    fromCurrentPosition?: {
        x?: boolean;
        y?: boolean;
    };
    /**
     * Delay before the animation starts in milliseconds
     */
    delay?: number;
}

interface TextElements {
    /**
     * Array of svg g elements, each representing a letter
     */
    characters: SVGGElement[];

    /**
     * Svg g wrapping the text block
     */
    container: SVGGElement;
}

declare class VaraType {
    constructor(queryDom: string,
        fontJSONSource: string,
        textStep: TextStep[],
        textGlobals?: TextProperties);

    /**
     * Is used to execute a function when the font is loaded and the elements are created.
     * ! Any other method should be called inside the function !
     *
     * @param onReady callback
     */
    ready(onReady: () => void): void;

    /**
     * If an id was given to the text during creation, it should be given as the argument.
     * Otherwise use the index of the text block.
     *
     * @param id text ID or index
     */
    get(id: string | number): TextElements | false;

    /**
     * Used to animate texts with autoAnimation:false
     * If an id was given to the text during creation, it should be given as the argument.
     * Otherwise use the index of the text block.
     *
     * @param id text ID or index
     * @param duration
     */
    draw(id: string | number, duration?: number): void;

    /**
     * Used to execute a function once animation ends, triggers every time a block of text is drawn.
     *
     * @param onEnd callback with the id of the drawn text, and an object containing the group DOM object,
     * this is the same object that is returned when calling the get() method.
     */
    animationEnd(onEnd: (id: string | number, group: TextElements) => void): void;

    /**
     * Is used to play the animation of every text block, obeying delay and queue.
     */
    playAll(): void;

    createNode(noneName: string, properties: { [k: string]: string; }): SVGElement;

    getSVGData(): void;

    preCreate(): void;

    createText(): void;

    animate(element: SVGElement, duration: number, delay: number, final: number): void;

    getSectionPathLength(id: string | number): number;

    analyseWidth(): {
        width: number;
        breakPoints: Array<Array<string | number>>;
    };

    setPosition(element: SVGGElement, obj: { x?: number; y?: number }, relative?: { x: boolean; y: boolean; }): void;
}

declare const Vara: typeof VaraType;

export = Vara;
export as namespace Vara;
