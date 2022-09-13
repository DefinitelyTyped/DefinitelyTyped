export = IClauseWhere;
declare function IClauseWhere(): void;
declare class IClauseWhere {
    fieldName: string;
    existsOrNotExists: string;
    iQuery: IQuery;
    disableGetChildren: boolean;
    fieldType: string;
    hasClassField: boolean;
    caseMode: string;
    isSubSelect: boolean;
    isInJoinClause: any;
    ownerJoin: any;
    fieldStringIfTrue: any;
    valueIsColumnName: boolean;
    operator: string;
    value: string | Date | number;
    required: boolean;
    likeMode: string;
    private formatValue;
    private _getSqlFieldName;
    private _likeToSql;
    private _existsOrNotExistsToSql;
    private _defaultOperatorToSql;
    private canSplit_;
    private splitValueList_;
    private _requiredClauseToSql;
    private _subSelectClauseToSql;
    getValueIsNull(): boolean;
    getIsGenerable(): boolean;
    toSql(): string;
}
declare namespace IClauseWhere {
    export { IClauseJoin };
}
import IQuery = require('./IQuery.js');
type IClauseJoin = import('./IClauseJoin');
