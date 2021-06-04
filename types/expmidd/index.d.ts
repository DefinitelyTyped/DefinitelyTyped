import runMiddleware from './Middleware/express';
import { IHTTP_METHODS, ICors } from './typescript/cors.definitions';
declare const expmidd: Function;
declare const cors: ICors;
export default runMiddleware;
export { expmidd, cors, IHTTP_METHODS };
