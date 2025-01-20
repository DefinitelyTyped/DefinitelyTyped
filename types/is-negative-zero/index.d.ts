declare function isNegativeZero<T>(value: T): T extends number ? boolean : false;

export = isNegativeZero;
