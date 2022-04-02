import SpriteSymbol from './symbol';
import { SpriteConfig } from './sprite.config';

export default class Sprite {
    protected config: SpriteConfig;
    protected symbols: SpriteSymbol[];

    constructor(config?: SpriteConfig);

    /**
     * Add new symbol. If symbol with the same id exists it will be replaced.
     * @return `true` - symbol was added, `false` - replaced
     */
    public add(symbol: SpriteSymbol): boolean;

    /**
     * Remove symbol & destroy it
     * @return `true` - symbol was found & successfully destroyed, `false` - otherwise
     */
    public remove: (id: string) => boolean;
    public find: (id: string) => SpriteSymbol | null;
    public has: (id: string) => boolean;
    public stringify: () => string;
    public toString: () => string;
    public destroy: () => void;
}
