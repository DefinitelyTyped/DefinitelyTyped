import { type BPMNModdle, BpmnModdle, type Definitions, type Moddle, type Process } from "bpmn-moddle";

const moddle: Moddle = new BpmnModdle();

const element1 = moddle.create("bpmn:UserTask"); // Expect type User Task
element1.$type = "bpmn:UserTask"; // Expect to check against type correctly

const bpmnModdle: BPMNModdle = new BpmnModdle();

bpmnModdle.fromXML("");

const definition: Definitions = bpmnModdle.create("bpmn:Definitions");

// Expect type of process or undefined
const maybeProcess = definition.rootElements.find(i => i.$type === "bpmn:Process");

// Expect process to have additional typings to base element1
const process = maybeProcess as Process;
