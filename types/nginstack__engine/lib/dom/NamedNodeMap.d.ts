export = NamedNodeMap;
declare function NamedNodeMap(): void;
declare class NamedNodeMap {
    readonly length: number;
    item(index: number): Attr;
    getNamedItem(qualifiedName: string): Attr;
    setNamedItem(attr: Attr): Attr;
    removeNamedItem(qualifiedName: string): Attr;
}
declare namespace NamedNodeMap {
    export { Attr };
}
type Attr = import('./Attr');
