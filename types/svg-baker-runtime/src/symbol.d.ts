export default class SpriteSymbol {
    public id: string;
    public viewBox: string;
    public content: string;

    constructor(cfg: { id: string; viewBox: string; content: string });

    public stringify: () => string;
    public toString: () => string;
    public destroy: () => void;
}
