import { IframeView } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

/**
 * The internal `<iframe>` view that hosts the minimap content.
 */
export default class MinimapIframeView extends IframeView {
    /**
     * Creates an instance of the internal minimap iframe.
     */
    constructor(
        locale: Locale,
        options: {
            domRootClone: HTMLElement;
            pageStyles: Array<string | { href: string }>;
            scaleRatio: number;
            useSimplePreview?: boolean;
            extraClasses?: string;
        },
    );

    /**
     * The CSS `top` used to scroll the minimap.
     */
    get top(): number;
    protected set top(value: number);

    /**
     * The CSS `height` of the iframe.
     */
    get height(): number;
    protected set height(value: number);

    render(): Promise<void>;

    /**
     * Sets the new height of the iframe.
     */
    setHeight(newHeight: number): void;

    /**
     * Sets the top offset of the iframe to move it around vertically.
     */
    setTopOffset(newOffset: number): void;
}
