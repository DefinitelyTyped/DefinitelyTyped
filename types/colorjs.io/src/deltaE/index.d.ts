export type Methods = keyof typeof import('.') extends `deltaE${infer Method}` ? Method : string;

export { default as deltaE76 } from './deltaE76';
export { default as deltaECMC } from './deltaECMC';
export { default as deltaE2000 } from './deltaE2000';
export { default as deltaEJz } from './deltaEJz';
export { default as deltaEITP } from './deltaEITP';
export { default as deltaEOK } from './deltaEOK';
