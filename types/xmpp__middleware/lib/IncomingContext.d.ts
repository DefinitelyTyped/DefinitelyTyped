import { Entity } from "../index.js";
import Context from "./Context.js";

export default IncomingContext;

declare class IncomingContext<TEntity extends Entity> extends Context<TEntity> {}
