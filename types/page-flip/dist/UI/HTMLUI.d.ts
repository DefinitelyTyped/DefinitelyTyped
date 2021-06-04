import { UI } from "./UI";
import { PageFlip } from "../PageFlip";
import { FlipSetting } from "../Settings";
/**
 * UI for HTML mode
 */
export class HTMLUI extends UI {
    constructor(inBlock: HTMLElement, app: PageFlip, setting: FlipSetting, items: NodeListOf<HTMLElement> | HTMLElement[]);
    /**
     * Update page list from HTMLElements
     */
    updateItems(items: NodeListOf<HTMLElement> | HTMLElement[]): void;
    update(): void;
}
