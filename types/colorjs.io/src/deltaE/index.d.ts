export type Methods = keyof typeof import('.') extends `deltaE${infer Method}` ? Method : never;

export { default as deltaE76 } from './deltaE76.js';
export { default as deltaECMC } from './deltaECMC.js';
export { default as deltaE2000 } from './deltaE2000.js';
export { default as deltaEJz } from './deltaEJz.js';
export { default as deltaEITP } from './deltaEITP.js';
export { default as deltaEOK } from './deltaEOK.js';
