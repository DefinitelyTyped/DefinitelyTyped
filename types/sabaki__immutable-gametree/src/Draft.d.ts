import { NodeObject, Primitive, Property } from "../index";

interface AppendNodeOption {
    disableMerging?: boolean;
}

type Direction = "left" | "right" | "main";

declare class Draft<ID extends Primitive = number> {
    root: NodeObject<ID>;

    get(id: ID): NodeObject<ID> | null;

    appendNode(parentId: ID, data: NodeObject<ID>["data"], options?: AppendNodeOption): ID | null;

    UNSAFE_appendNodeWithId(parentId: ID, id: ID, data: NodeObject<ID>["data"], options?: AppendNodeOption): boolean;

    removeNode(id: ID): boolean;

    shiftNode(id: ID, direction: Direction): number | null;

    makeRoot(id: ID): boolean;

    addToProperty(id: ID, property: Property, value: string): boolean;

    removeFromProperty(id: ID, property: Property, value: string): boolean;

    updateProperty(id: ID, property: Property, values: readonly string[]): boolean;

    removeProperty(id: ID, property: Property): boolean;
}

export = Draft;
