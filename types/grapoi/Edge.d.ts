import { DatasetCore, Quad, Term } from "@rdfjs/types";

export default class Edge {
    constructor(options: {
        dataset: DatasetCore;
        end: "subject" | "object";
        quad: Quad;
        start: "subject" | "object";
    });

    dataset: DatasetCore;
    end: "subject" | "object";
    quad: Quad;
    start: "subject" | "object";

    get term(): Term;
    get graph(): Term;
    get startTerm(): Term;
}
