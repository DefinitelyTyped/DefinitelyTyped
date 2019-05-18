import { Contentable, Evalable, Evaluateable, ExecutionContextable, FocusHoverable, WaitForable } from "./able";
import { Frame } from "./FrameManager";

/**
 * internaly stored in `Frame._mainWorld` and `Frame._secondaryWorld`
 */
export interface DOMWorld extends Contentable, Evalable, Evaluateable, ExecutionContextable, FocusHoverable, WaitForable {
  /**
   * return parent Frame
   */
  frame: () => Frame;
}
