
import { Evaluateable } from './able'
import { JSHandle } from './JSHandle'

/** The class represents a context for JavaScript execution. */
export interface ExecutionContext extends Evaluateable {
    queryObjects(prototypeHandle: JSHandle): JSHandle;
  }
    