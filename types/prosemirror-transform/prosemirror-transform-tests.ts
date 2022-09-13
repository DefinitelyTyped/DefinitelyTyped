import * as transform from 'prosemirror-transform';

const stepmap = new transform.StepMap([]);

// Verify non-null assertion operator can be used.

const res1_1: transform.Step = transform.replaceStep({} as any, 0)!;
const res1_2: transform.Step = res1_1.map({} as any)!;
const res1_3: transform.Step = res1_1.merge({} as any)!;

const res2_1: number = transform.liftTarget({} as any)!;

const res3_1: any[] = transform.findWrapping({} as any, {} as any)!;

const res4_1: number = transform.joinPoint({} as any, 0)!;

const res5_1: number = transform.insertPoint({} as any, 0, {} as any)!;
