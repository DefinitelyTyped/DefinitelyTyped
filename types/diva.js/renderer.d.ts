import DocumentLayout from './document-layout';
import {
  Dimensions,
  Offset,
  RendererConfig,
  SourceProvider,
  ViewportPosition,
} from './interfaces';

export default class Renderer {
  layout: DocumentLayout | null;

  constructor(options: RendererConfig, hooks: object);
  static getCompatibilityErrors(): string | null;
  load(
    config: object,
    viewportPosition: ViewportPosition,
    sourceResolver: SourceProvider,
  ): void;
  adjust(): void;
  goto(
    pageIndex: number,
    verticalOffset: number,
    horizontalOffset: number,
  ): void;
  transitionViewportPosition(options: object): void;
  isPageVisible(pageIndex: number): boolean;
  getRenderedPages(): any;
  destroy(): void;
}
