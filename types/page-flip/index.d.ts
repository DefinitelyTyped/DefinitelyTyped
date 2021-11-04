// Type definitions for page-flip 2.0
// Project: https://nodlik.github.io/StPageFlip/
// Definitions by: Thibault-Pierre Gouin <https://github.com/lethyb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PageRect, Point, Rect, RectPoints, Segment } from "./dist/BasicTypes";
import { HTMLPageCollection } from "./dist/Collection/HTMLPageCollection";
import { ImagePageCollection } from "./dist/Collection/ImagePageCollection";
import { NumberArray, PageCollection } from "./dist/Collection/PageCollection";
import { DataType, EventCallback, EventObject, WidgetEvent } from "./dist/Event/EventObject";
import { Flip, FlipCorner, FlipDirection, FlippingState } from "./dist/Flip/Flip";
import { FlipCalculation } from "./dist/Flip/FlipCalculation";
import { Helper } from "./dist/Helper";
import { HTMLPage } from "./dist/Page/HTMLPage";
import { ImagePage } from "./dist/Page/ImagePage";
import { Page, PageDensity, PageOrientation, PageState } from "./dist/Page/Page";
import { PageFlip } from "./dist/PageFlip";
import { CanvasRender } from "./dist/Render/CanvasRender";
import { HTMLRender } from "./dist/Render/HTMLRender";
import { FrameAction, Orientation, Render, Shadow } from "./dist/Render/Render";
import { FlipSetting, Settings, SizeType } from "./dist/Settings";
import { CanvasUI } from "./dist/UI/CanvasUI";
import { HTMLUI } from "./dist/UI/HTMLUI";
import { SwipeData, UI } from "./dist/UI/UI";

export as namespace St;

export {
  // Enumerations
  FlipCorner,
  FlipDirection,
  FlippingState,
  Orientation,
  PageDensity,
  PageOrientation,
  SizeType,
  // Classes
  CanvasRender,
  CanvasUI,
  EventObject,
  Flip,
  FlipCalculation,
  HTMLPage,
  HTMLPageCollection,
  HTMLRender,
  HTMLUI,
  Helper,
  ImagePage,
  ImagePageCollection,
  Page,
  PageCollection,
  PageFlip,
  Render,
  Settings,
  UI,
  // Interfaces
  FlipSetting,
  PageState,
  WidgetEvent,
  // Type aliases
  DataType,
  EventCallback,
  FrameAction,
  NumberArray,
  PageRect,
  Point,
  Rect,
  RectPoints,
  Segment,
  Shadow,
  SwipeData
};
