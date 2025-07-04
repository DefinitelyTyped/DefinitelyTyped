interface MyDoc extends DocType {
    id: number;
    name: string;
}

interface Another extends DocTypeChildTable {
    flag: boolean;
}

declare global {
    interface DocTypeMap {
        MyDoc: MyDoc;
        Another: Another;
    }
}

const id: number = locals.MyDoc["doc1"].id;

const name: string = locals.MyDoc["doc1"].name;

const flag: boolean = locals.Another["row1"].flag;

// @ts-expect-error
locals.Unknown["x"];

// @ts-expect-error
locals.MyDoc["doc1"].unknown;

export {};
