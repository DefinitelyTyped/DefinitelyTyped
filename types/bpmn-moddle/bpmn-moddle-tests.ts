import * as BPMNModdle from "bpmn-moddle";

const moddle: BPMNModdle.Moddle = {} as any;

const element1 = moddle.create("bpmn:UserTask"); // Expect type User Task
element1.$type = "bpmn:UserTask"; // Expect to check against type correctly

const bpmnModdle: BPMNModdle.BPMNModdle = {} as any;

bpmnModdle.fromXML("", (err, definitions, parseContext) => {
    err; // type of error
    definitions; // type of definition
    parseContext; // type of any
});

const definition: BPMNModdle.Definitions = {} as any;

// Expect type of process or undefined
const maybeProcess = definition.rootElements.find(
    i => i.$type === "bpmn:Process"
);

// Expect process to have additional typings to base element1
const process = maybeProcess as BPMNModdle.Process;
