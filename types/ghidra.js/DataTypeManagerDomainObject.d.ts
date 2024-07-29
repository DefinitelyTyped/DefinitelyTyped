import { DataTypeManager } from "./DataTypeManager";
import { DomainObject } from "./DomainObject";

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/data/DataTypeManagerDomainObject.html
interface DataTypeManagerDomainObject extends DomainObject {
    getDataTypeManager(): DataTypeManager;
}