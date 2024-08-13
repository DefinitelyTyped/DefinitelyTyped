
import { BoxClipRectangle, ElementClipRectangle } from "./clipRectangle";


export declare const Origin: {
  VIEWPORT: 'viewport';
  DOCUMENT: 'document';
};

export declare class CaptureScreenshotParameters {
  #map: Map<string, any>;

  origin(origin: 'viewport' | 'document'): CaptureScreenshotParameters;

  imageFormat(type: string, quality?: number): CaptureScreenshotParameters;

  clipRectangle(clipRectangle: BoxClipRectangle | ElementClipRectangle): CaptureScreenshotParameters;

  asMap(): Map<string, any>;
}
