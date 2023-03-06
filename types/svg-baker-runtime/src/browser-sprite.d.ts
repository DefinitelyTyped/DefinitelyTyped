import Sprite from './sprite';
import BrowserSpriteSymbol from './browser-symbol';

import { SpriteConfig } from './sprite.config';
import { BrowserSpriteConfig } from './browser-sprite.config';

export default class BrowserSprite extends Sprite {
    constructor(cfg?: SpriteConfig & BrowserSpriteConfig);

    /**
     * override
     */
    protected config: SpriteConfig & BrowserSpriteConfig;
    node: Element | null;
    isMounted: boolean;

    /**
     * override
     * Add new symbol. If symbol with the same id exists it will be replaced.
     * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
     * @fires Events#SYMBOL_MOUNT
     * @return `true` - symbol was added, `false` - replaced
     */
    add(symbol: BrowserSpriteSymbol): boolean;

    /**
     * Attach to existing DOM node
     * @return attached DOM Element. null if node to attach not found.
     */
    attach(target: string | Element): Element | null;

    /**
     * @fires Events#MOUNT
     * @return rendered sprite node. null if mount node not found.
     */
    mount(target?: string, prepend?: boolean): Element | null;

    render(): Element;

    /**
     * Detach sprite from the DOM
     */
    unmount(): void;

    /**
     * Update URLs in sprite and usage elements
     * @return `true` - URLs was updated, `false` - sprite is not mounted
     */
    updateUrls(oldUrl: string, newUrl: string): boolean;
}
