import SpriteSymbol from './symbol';

export default class BrowserSpriteSymbol extends SpriteSymbol {
    public static createFromExistingNode(node: Element): BrowserSpriteSymbol;

    public isMounted: boolean;

    public mount: (target: Element | string) => Element;
    public render: () => Element;
    public unmount: () => void;

    /**
     * override
     */
    public destroy: () => void;
}
