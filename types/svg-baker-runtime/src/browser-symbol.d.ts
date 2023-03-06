import SpriteSymbol from './symbol';

export default class BrowserSpriteSymbol extends SpriteSymbol {
    static createFromExistingNode(node: Element): BrowserSpriteSymbol;

    isMounted: boolean;

    mount: (target: Element | string) => Element;
    render: () => Element;
    unmount: () => void;

    /**
     * override
     */
    destroy: () => void;
}
