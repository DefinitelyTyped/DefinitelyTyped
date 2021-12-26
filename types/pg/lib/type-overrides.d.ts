import { CustomTypesConfig } from '..';

type TypeParser<TOid = number, TReturn = any> = (oid: TOid) => TReturn;
type TypeFormat = 'text' | 'binary';

export = TypeOverrides;
declare class TypeOverrides implements CustomTypesConfig {
    constructor(types?: CustomTypesConfig);
    setTypeParser(oid: number, format: TypeFormat, fn: TypeParser): void;
    setTypeParser(oid: number, fn: TypeParser): void;
    getTypeParser(oid: number, format?: TypeFormat): TypeParser;
}
