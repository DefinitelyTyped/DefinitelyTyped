import { Moddle, BPMNModdle, Definitions, Process } from 'bpmn-moddle';

const moddle: Moddle = {} as any;

const element1 = moddle.create('bpmn:UserTask'); // Expect type User Task
element1.$type = 'bpmn:UserTask'; // Expect to check against type correctly

const bpmnModdle: BPMNModdle = {} as any;

bpmnModdle.fromXML('');

const definition: Definitions = {} as any;

// Expect type of process or undefined
const maybeProcess = definition.rootElements.find(i => i.$type === 'bpmn:Process');

// Expect process to have additional typings to base element1
const process = maybeProcess as Process;
