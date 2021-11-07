export = FieldEvent;
declare function FieldEvent(...args: any[]): void;
declare class FieldEvent {
    constructor(...args: any[]);
    field: Field;
}
import Field = require('./Field.js');
