import { NamedNode } from "@rdfjs/types";
import { shacl } from "barnard59-validate-shacl";
import { ValidationError } from "barnard59-validate-shacl/lib/errors";
import { Duplex, Readable } from "stream";

const shape: Readable = <any> {};
const shViolation: NamedNode = <any> {};

async function test() {
    // shape only
    let step: Duplex = await shacl(shape);

    // minimal options
    step = await shacl({
        shape,
    });

    // full options
    step = await shacl({
        shape,
        maxErrors: 0,
        onViolation({ context, data, report }): boolean {
            const arg = context.variables.get("arg");

            if (data.size === 0) {
                return false;
            }

            if (!report.conforms) {
                return report.results.some(r => shViolation.equals(r.severity));
            }

            return false;
        },
    });
}

const validationError: ValidationError = <any> {};
const error: Error = validationError;
// $ExpectType ValidationReport<Factory<Quad, Quad, DatasetCore<Quad, Quad>>>
const report = validationError.report;
// $ExpectType DatasetCore<Quad, Quad>
const dataGraph = validationError.dataGraph;
// $ExpectType DatasetCore<Quad, Quad>
const shapesGraph = validationError.shapesGraph;
