import { Page, PageDensity, PageOrientation } from './Page';
import { Render } from '../Render/Render';
/**
 * Class representing a book page as a HTML Element
 */
export class HTMLPage extends Page {
    private readonly element;
    private copiedElement;
    private temporaryCopy;
    private isLoad;
    constructor(render: Render, element: HTMLElement, density: PageDensity);
    newTemporaryCopy(): Page;
    getTemporaryCopy(): Page;
    hideTemporaryCopy(): void;
    draw(tempDensity?: PageDensity): void;
    private drawHard;
    private drawSoft;
    simpleDraw(orient: PageOrientation): void;
    getElement(): HTMLElement;
    load(): void;
    setOrientation(orientation: PageOrientation): void;
    setDrawingDensity(density: PageDensity): void;
}
