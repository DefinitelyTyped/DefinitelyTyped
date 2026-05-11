import { Entity } from "../index.js";
import Context from "./Context.js";

export default OutgoingContext;

declare class OutgoingContext<TEntity extends Entity> extends Context<TEntity> {}
