import Pipeline from "./Pipeline.js";

interface Run {
    end?: boolean;
    resume?: boolean;
}

export default function run(pipeline: Pipeline, opts?: Run): Promise<any>;
export {};
