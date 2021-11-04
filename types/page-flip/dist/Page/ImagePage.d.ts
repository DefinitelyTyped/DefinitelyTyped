import { Page, PageDensity, PageOrientation } from './Page';
import { Render } from '../Render/Render';
/**
 * Class representing a book page as an image on Canvas
 */
export class ImagePage extends Page {
    private readonly image;
    private isLoad;
    private loadingAngle;
    constructor(render: Render, href: string, density: PageDensity);
    draw(tempDensity?: PageDensity): void;
    simpleDraw(orient: PageOrientation): void;
    private drawLoader;
    load(): void;
    newTemporaryCopy(): Page;
    getTemporaryCopy(): Page;
    hideTemporaryCopy(): void;
}
