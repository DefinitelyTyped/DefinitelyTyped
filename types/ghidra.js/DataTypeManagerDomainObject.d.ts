import type { JavaClass } from './JavaClass';
import { DataTypeManager } from "./DataTypeManager";
import { DomainObject } from "./DomainObject";

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/data/DataTypeManagerDomainObject.html
export interface DataTypeManagerDomainObject extends JavaClass, DomainObject {
    getDataTypeManager(): DataTypeManager;
}
