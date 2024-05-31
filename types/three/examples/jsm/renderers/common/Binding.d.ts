declare class Binding {
    name: string;
    visibility: number;
    constructor(name?: string);
    setVisibility(visibility: number): void;
    clone(): Binding & this;
}
export default Binding;
