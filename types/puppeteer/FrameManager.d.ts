import { EventEmitter } from "events";
import { ExecutionContext } from "./ExecutionContext";
import { Contentable, Evalable, Evaluateable, FrameBase, ExecutionContextable } from "./able";
import { NavigationOptions, DirectNavigationOptions } from "./common";
import { Page } from "./Page";
import { Response } from "./NetworkManager";

export interface Frame extends Contentable, Evalable, Evaluateable, ExecutionContextable, FrameBase {
  /** childFrames */
  childFrames(): Frame[];
  /** Returns `true` if the frame has been detached, or `false` otherwise. */
  isDetached(): boolean;
  /** Returns frame's name attribute as specified in the tag. */
  name(): string;
  /** Returns parent frame, if any. Detached frames and main frames return null. */
  parentFrame(): Frame | null;
}
