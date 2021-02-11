type TypeParser<TOid = number, TReturn = any> = (oid: TOid) => TReturn;
type TypeFormat = 'text' | 'binary';

declare class TypeOverrides {
    constructor(types?: any);
    setTypeParser(oid: number, format: TypeFormat, fn: TypeParser): void;
    setTypeParser(oid: number, fn: TypeParser): void;
    getTypeParser(oid: number, format?: TypeFormat): TypeParser;
}

export default TypeOverrides;
