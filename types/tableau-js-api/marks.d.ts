export class Mark {
    constructor(pairs: Pair[]);
    // properties
    getPairs(): Pair[];
}

export class Pair {
    constructor(fieldName: string, value: string | number | boolean | Date);
    // fields
    fieldName: string;
    value: string | number | boolean | Date;
    formattedValue: string;
}
