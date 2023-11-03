declare function isPosixBracket<T>(str: T): T extends string ? boolean : false;

export = isPosixBracket;
