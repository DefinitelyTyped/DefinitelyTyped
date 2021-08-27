import { Render } from '../Render/Render';
import { PageCollection } from './PageCollection';
import { PageFlip } from '../PageFlip';
/**
 * Сlass representing a collection of pages as images on the canvas
 */
export class ImagePageCollection extends PageCollection {
    private readonly imagesHref;
    constructor(app: PageFlip, render: Render, imagesHref: string[]);
    load(): void;
}
