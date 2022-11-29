import Api, { CaOptions, Certificate, der2, Store } from "./";

declare module 'win-ca/api';

export default Api;
export { der2, Certificate, Store, CaOptions };

