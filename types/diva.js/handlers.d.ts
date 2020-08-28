import { Offset } from './interfaces';
import ViewerCore from './viewer-core';

export interface ViewHandler {
  _viewerCore: ViewerCore;
  onDoubleClick(event: Event, coords: Offset): void;
  onViewWillLoad(): void;
  onViewDidLoad(): void;
  onViewDidUpdate(renderedPages: number[], targetPage: number | null): void;
}

export class DocumentHandler implements ViewHandler {
  _viewerCore: ViewerCore;
  constructor(viewerCore: ViewerCore);
  onDoubleClick(event: Event, coords: Offset): void;
  onPinch(
    event: Event,
    coords: Offset,
    startDistance: number,
    endDistance: number,
  ): void;
  onViewWillLoad(): void;
  onViewDidLoad(): void;
  onViewDidUpdate(renderedPages: number[], targetPage: number | null): void;
}

export class GridHandler implements ViewHandler {
  _viewerCore: ViewerCore;
  constructor(viewerCore: ViewerCore);
  onDoubleClick(event: Event, coords: Offset): void;
  onPinch(): void;
  onViewWillLoad(): void;
  onViewDidLoad(): void;
  onViewDidUpdate(renderedPages: number[], targetPage: number | null): void;
}
