// Type definitions for react-imgix 9.0
// Project: https://github.com/imgix/react-imgix
// Definitions by: Michael Haglund <https://github.com/hagmic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

type ImgixParamType = string | number | boolean;

interface AdjustmentParams {
  bri?: ImgixParamType;
  con?: ImgixParamType;
  exp?: ImgixParamType;
  gam?: ImgixParamType;
  high?: ImgixParamType;
  hue?: ImgixParamType;
  invert?: ImgixParamType;
  sat?: ImgixParamType;
  shad?: ImgixParamType;
  sharp?: ImgixParamType;
  usm?: ImgixParamType;
  usmrad?: ImgixParamType;
  vib?: ImgixParamType;
}

interface AutomaticParams   {
  auto?: ImgixParamType;
}

interface BlendingParams {
  'blend-align'?: ImgixParamType;
  'blend-alpha'?: ImgixParamType;
  'blend-crop'?: ImgixParamType;
  'blend-fit'?: ImgixParamType;
  'blend-mode'?: ImgixParamType;
  'blend-pad'?: ImgixParamType;
  'blend-size'?: ImgixParamType;
  'blend-x'?: ImgixParamType;
  'blend-y'?: ImgixParamType;
  'blend'?: ImgixParamType;
}

interface BorderAndPaddingParams {
  'border-radius-inner'?: ImgixParamType;
  'border-radius'?: ImgixParamType;
  border?: ImgixParamType;
  pad?: ImgixParamType;
}

interface ColorPaletteParams {
  colors?: ImgixParamType;
  palette?: ImgixParamType;
  prefix?: ImgixParamType;
}

interface FaceDetectionParams {
  faceindex?: ImgixParamType;
  facepad?: ImgixParamType;
  faces?: ImgixParamType;
}

interface FillParams {
  bg?: ImgixParamType;
  'fill-color'?: ImgixParamType;
  fill?: ImgixParamType;
}

interface FocalPointCropParams {
  'fp-debug'?: ImgixParamType;
  'fp-x'?: ImgixParamType;
  'fp-y'?: ImgixParamType;
  'fp-z'?: ImgixParamType;
}

interface FormatParams {
  ch?: ImgixParamType;
  chromasub?: ImgixParamType;
  colorquant?: ImgixParamType;
  cs?: ImgixParamType;
  dl?: ImgixParamType;
  dpi?: ImgixParamType;
  fm?: ImgixParamType;
  lossless?: ImgixParamType;
  q?: ImgixParamType;
}

interface MaskImageParams {
  'corner-radius'?: ImgixParamType;
  mask?: ImgixParamType;
}

interface NoiseReductionParams {
  nr?: ImgixParamType;
  nrs?: ImgixParamType;
}

interface PDFParams {
  page?: ImgixParamType;
}

interface PixelDensityParams {
  dpr?: ImgixParamType;
}

interface RotationParams {
  flip?: ImgixParamType;
  orient?: ImgixParamType;
  rot?: ImgixParamType;
}

interface SizeParams {
  ar?: ImgixParamType;
  crop?: ImgixParamType;
  fit?: ImgixParamType;
  h?: ImgixParamType;
  'max-h'?: ImgixParamType;
  'max-w'?: ImgixParamType;
  'min-h'?: ImgixParamType;
  'min-w'?: ImgixParamType;
  rect?: ImgixParamType;
  w?: ImgixParamType;
}

interface StylizeParams {
  blur?: ImgixParamType;
  'duotone-alpha'?: ImgixParamType;
  duotone?: ImgixParamType;
  htn?: ImgixParamType;
  monochrome?: ImgixParamType;
  px?: ImgixParamType;
  sepia?: ImgixParamType;
}

interface TextParams {
  'txt-align'?: ImgixParamType;
  'txt-clip'?: ImgixParamType;
  'txt-color'?: ImgixParamType;
  'txt-fit'?: ImgixParamType;
  'txt-font'?: ImgixParamType;
  'txt-lig'?: ImgixParamType;
  'txt-line-color'?: ImgixParamType;
  'txt-line'?: ImgixParamType;
  'txt-pad'?: ImgixParamType;
  'txt-shad'?: ImgixParamType;
  'txt-size'?: ImgixParamType;
  'txt-width'?: ImgixParamType;
  txt?: ImgixParamType;
}

interface TrimParams {
  'trim-color'?: ImgixParamType;
  'trim-md'?: ImgixParamType;
  'trim-sd'?: ImgixParamType;
  'trim-tol'?: ImgixParamType;
  trim?: ImgixParamType;
}

interface TypesettingEndpointParams {
  'txt-lead'?: ImgixParamType;
  'txt-track'?: ImgixParamType;
  '~text'?: ImgixParamType;
}

interface WatermarkParams {
  'mark-align'?: ImgixParamType;
  'mark-alpha'?: ImgixParamType;
  'mark-base'?: ImgixParamType;
  'mark-fit'?: ImgixParamType;
  'mark-h'?: ImgixParamType;
  'mark-pad'?: ImgixParamType;
  'mark-scale'?: ImgixParamType;
  'mark-w'?: ImgixParamType;
  'mark-x'?: ImgixParamType;
  'mark-y'?: ImgixParamType;
  mark?: ImgixParamType;
}

type ImigixParams =
  & AdjustmentParams
  & AutomaticParams
  & BlendingParams
  & BorderAndPaddingParams
  & ColorPaletteParams
  & FaceDetectionParams
  & FillParams
  & FocalPointCropParams
  & FormatParams
  & MaskImageParams
  & NoiseReductionParams
  & PDFParams
  & PixelDensityParams
  & RotationParams
  & SizeParams
  & StylizeParams
  & TextParams
  & TrimParams
  & TypesettingEndpointParams
  & WatermarkParams
;

interface AttributeConfig {
  src?: string;
  srcSet?: string;
  sizes?: string;
}

type ImgixHTMLAttributes = React.ImgHTMLAttributes<HTMLImageElement> | React.SourceHTMLAttributes<HTMLSourceElement> | Record<string, string>;

interface CommonProps {
  className?: string;
  onMounted?: (ref?: React.RefObject<HTMLPictureElement | HTMLImageElement | HTMLSourceElement>) => void;
  htmlAttributes?: ImgixHTMLAttributes;
}

export interface SharedImigixAndSourceProps extends CommonProps {
  src: string;
  disableQualityByDPR?: boolean;
  disableSrcSet?: boolean;
  disableLibraryParam?: boolean;
  imgixParams?: ImigixParams;
  sizes?: string;
  width?: number;
  height?: number;
  attributeConfig?: AttributeConfig;
}

export class Picture extends React.Component<React.PropsWithChildren<CommonProps>> {}
export class Source extends React.Component<SharedImigixAndSourceProps> {}
export function buildURL(src: string, imgixParams?: ImigixParams, options?: SharedImigixAndSourceProps): string;

type Warnings = 'fallbackImage' | 'sizesAttribute' | 'invalidARFormat';

export namespace PublicConfigAPI {
  function disableWarning(name: Warnings): void;
  function enableWarning(name: Warnings): void;
}

interface BackgroundProps {
  src: string;
  imgixParams?: ImigixParams;
  className?: string;
  disableLibraryParam?: boolean;
  htmlAttributes?: ImgixHTMLAttributes;
}

export const Background: React.FunctionComponent<React.PropsWithChildren<BackgroundProps>>;

declare class Imgix extends React.Component<SharedImigixAndSourceProps> {}
export default Imgix;
