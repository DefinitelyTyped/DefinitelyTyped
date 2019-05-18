import { EventEmitter } from "events";
import { ExecutionContext } from "./ExecutionContext";
import { Contentable, Evalable, Evaluateable, FrameBase, ExecutionContextable } from "./able";
import { NavigationOptions, DirectNavigationOptions } from "./common";
import { Page } from "./Page";
import { DOMWorld } from "./DOMWorld";
import { NetworkManager } from "./NetworkManager";

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
  
  export interface FrameManager extends EventEmitter {
    executionContextById(contextId: number): ExecutionContext;
    frame(frameId: number): Frame | null;
    frames(): Frame[];
    mainFrame(): Frame;
    page(): Page;
    waitForFrameNavigation(frame: Frame, options: NavigationOptions): Promise<Response>;
    navigateFrame(frame: Frame, url: string, options?: DirectNavigationOptions): Promise<Response>;
    networkManager(): NetworkManager;
  }
  
    