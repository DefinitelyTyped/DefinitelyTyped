export default class SpriteSymbol {
    id: string;
    viewBox: string;
    content: string;

    constructor(cfg: { id: string; viewBox: string; content: string });

    stringify: () => string;
    toString: () => string;
    destroy: () => void;
}
