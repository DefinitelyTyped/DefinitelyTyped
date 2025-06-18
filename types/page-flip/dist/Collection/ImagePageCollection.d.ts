import { PageFlip } from "../PageFlip";
import { Render } from "../Render/Render";
import { PageCollection } from "./PageCollection";
/**
 * Сlass representing a collection of pages as images on the canvas
 */
export class ImagePageCollection extends PageCollection {
    private readonly imagesHref;
    constructor(app: PageFlip, render: Render, imagesHref: string[]);
    load(): void;
}
