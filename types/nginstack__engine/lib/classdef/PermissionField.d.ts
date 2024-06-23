export = PermissionField;
declare function PermissionField(...args: any[]): void;
declare class PermissionField {
    constructor(...args: any[]);
    scope: PermissionFieldScope;
    readMode: string;
    useAsExtraFilter: boolean;
}
import PermissionFieldScope = require('./PermissionFieldScope.js');
