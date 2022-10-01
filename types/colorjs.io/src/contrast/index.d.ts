export type Algorithms = keyof typeof import('.') extends `contrast${infer Alg}` ? Alg : never;

export { default as contrastWCAG21 } from './WCAG21';
export { default as contrastAPCA } from './APCA';
export { default as contrastMichelson } from './Michelson';
export { default as contrastWeber } from './Weber';
export { default as contrastLstar } from './Lstar';
