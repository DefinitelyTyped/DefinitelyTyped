import { DatasetCore } from "rdf-js";
import ValidationReport = require("rdf-validate-shacl/src/validation-report");

export interface ValidationError extends Error {
    report: ValidationReport;
    shapesGraph: DatasetCore;
    dataGraph: DatasetCore;
}
