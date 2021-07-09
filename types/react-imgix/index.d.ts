// Type definitions for react-imgix 9.0
// Project: https://github.com/imgix/react-imgix
// Definitions by: Michael Haglund <https://github.com/hagmic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

type ImgixParamType = string | number | boolean;

interface AdjustmentParams {
  bri?: ImgixParamType | undefined;
  con?: ImgixParamType | undefined;
  exp?: ImgixParamType | undefined;
  gam?: ImgixParamType | undefined;
  high?: ImgixParamType | undefined;
  hue?: ImgixParamType | undefined;
  invert?: ImgixParamType | undefined;
  sat?: ImgixParamType | undefined;
  shad?: ImgixParamType | undefined;
  sharp?: ImgixParamType | undefined;
  usm?: ImgixParamType | undefined;
  usmrad?: ImgixParamType | undefined;
  vib?: ImgixParamType | undefined;
}

interface AutomaticParams   {
  auto?: ImgixParamType | undefined;
}

interface BlendingParams {
  'blend-align'?: ImgixParamType | undefined;
  'blend-alpha'?: ImgixParamType | undefined;
  'blend-crop'?: ImgixParamType | undefined;
  'blend-fit'?: ImgixParamType | undefined;
  'blend-mode'?: ImgixParamType | undefined;
  'blend-pad'?: ImgixParamType | undefined;
  'blend-size'?: ImgixParamType | undefined;
  'blend-x'?: ImgixParamType | undefined;
  'blend-y'?: ImgixParamType | undefined;
  'blend'?: ImgixParamType | undefined;
}

interface BorderAndPaddingParams {
  'border-radius-inner'?: ImgixParamType | undefined;
  'border-radius'?: ImgixParamType | undefined;
  border?: ImgixParamType | undefined;
  pad?: ImgixParamType | undefined;
}

interface ColorPaletteParams {
  colors?: ImgixParamType | undefined;
  palette?: ImgixParamType | undefined;
  prefix?: ImgixParamType | undefined;
}

interface FaceDetectionParams {
  faceindex?: ImgixParamType | undefined;
  facepad?: ImgixParamType | undefined;
  faces?: ImgixParamType | undefined;
}

interface FillParams {
  bg?: ImgixParamType | undefined;
  'fill-color'?: ImgixParamType | undefined;
  fill?: ImgixParamType | undefined;
}

interface FocalPointCropParams {
  'fp-debug'?: ImgixParamType | undefined;
  'fp-x'?: ImgixParamType | undefined;
  'fp-y'?: ImgixParamType | undefined;
  'fp-z'?: ImgixParamType | undefined;
}

interface FormatParams {
  ch?: ImgixParamType | undefined;
  chromasub?: ImgixParamType | undefined;
  colorquant?: ImgixParamType | undefined;
  cs?: ImgixParamType | undefined;
  dl?: ImgixParamType | undefined;
  dpi?: ImgixParamType | undefined;
  fm?: ImgixParamType | undefined;
  lossless?: ImgixParamType | undefined;
  q?: ImgixParamType | undefined;
}

interface MaskImageParams {
  'corner-radius'?: ImgixParamType | undefined;
  mask?: ImgixParamType | undefined;
}

interface NoiseReductionParams {
  nr?: ImgixParamType | undefined;
  nrs?: ImgixParamType | undefined;
}

interface PDFParams {
  page?: ImgixParamType | undefined;
}

interface PixelDensityParams {
  dpr?: ImgixParamType | undefined;
}

interface RotationParams {
  flip?: ImgixParamType | undefined;
  orient?: ImgixParamType | undefined;
  rot?: ImgixParamType | undefined;
}

interface SizeParams {
  ar?: ImgixParamType | undefined;
  crop?: ImgixParamType | undefined;
  fit?: ImgixParamType | undefined;
  h?: ImgixParamType | undefined;
  'max-h'?: ImgixParamType | undefined;
  'max-w'?: ImgixParamType | undefined;
  'min-h'?: ImgixParamType | undefined;
  'min-w'?: ImgixParamType | undefined;
  rect?: ImgixParamType | undefined;
  w?: ImgixParamType | undefined;
}

interface StylizeParams {
  blur?: ImgixParamType | undefined;
  'duotone-alpha'?: ImgixParamType | undefined;
  duotone?: ImgixParamType | undefined;
  htn?: ImgixParamType | undefined;
  monochrome?: ImgixParamType | undefined;
  px?: ImgixParamType | undefined;
  sepia?: ImgixParamType | undefined;
}

interface TextParams {
  'txt-align'?: ImgixParamType | undefined;
  'txt-clip'?: ImgixParamType | undefined;
  'txt-color'?: ImgixParamType | undefined;
  'txt-fit'?: ImgixParamType | undefined;
  'txt-font'?: ImgixParamType | undefined;
  'txt-lig'?: ImgixParamType | undefined;
  'txt-line-color'?: ImgixParamType | undefined;
  'txt-line'?: ImgixParamType | undefined;
  'txt-pad'?: ImgixParamType | undefined;
  'txt-shad'?: ImgixParamType | undefined;
  'txt-size'?: ImgixParamType | undefined;
  'txt-width'?: ImgixParamType | undefined;
  txt?: ImgixParamType | undefined;
}

interface TrimParams {
  'trim-color'?: ImgixParamType | undefined;
  'trim-md'?: ImgixParamType | undefined;
  'trim-sd'?: ImgixParamType | undefined;
  'trim-tol'?: ImgixParamType | undefined;
  trim?: ImgixParamType | undefined;
}

interface TypesettingEndpointParams {
  'txt-lead'?: ImgixParamType | undefined;
  'txt-track'?: ImgixParamType | undefined;
  '~text'?: ImgixParamType | undefined;
}

interface WatermarkParams {
  'mark-align'?: ImgixParamType | undefined;
  'mark-alpha'?: ImgixParamType | undefined;
  'mark-base'?: ImgixParamType | undefined;
  'mark-fit'?: ImgixParamType | undefined;
  'mark-h'?: ImgixParamType | undefined;
  'mark-pad'?: ImgixParamType | undefined;
  'mark-scale'?: ImgixParamType | undefined;
  'mark-w'?: ImgixParamType | undefined;
  'mark-x'?: ImgixParamType | undefined;
  'mark-y'?: ImgixParamType | undefined;
  mark?: ImgixParamType | undefined;
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
  src?: string | undefined;
  srcSet?: string | undefined;
  sizes?: string | undefined;
}

type ImgixHTMLAttributes = React.ImgHTMLAttributes<HTMLImageElement> | React.SourceHTMLAttributes<HTMLSourceElement> | Record<string, string>;

interface CommonProps {
  className?: string | undefined;
  onMounted?: ((ref?: React.RefObject<HTMLPictureElement | HTMLImageElement | HTMLSourceElement>) => void) | undefined;
  htmlAttributes?: ImgixHTMLAttributes | undefined;
}

export interface SharedImigixAndSourceProps extends CommonProps {
  src: string;
  disableQualityByDPR?: boolean | undefined;
  disableSrcSet?: boolean | undefined;
  disableLibraryParam?: boolean | undefined;
  imgixParams?: ImigixParams | undefined;
  sizes?: string | undefined;
  width?: number | undefined;
  height?: number | undefined;
  attributeConfig?: AttributeConfig | undefined;
}

export class Picture extends React.Component<React.PropsWithChildren<CommonProps>> {}
export class Source extends React.Component<SharedImigixAndSourceProps> {}
export function buildURL(src: string, imgixParams?: ImigixParams, options?: SharedImigixAndSourceProps): string;

type Warnings = 'fallbackImage' | 'sizesAttribute' | 'invalidARFormat';

export namespace PublicConfigAPI {
  function disableWarning(name: Warnings): void;
  function enableWarning(name: Warnings): void;
}

export interface BackgroundProps {
  src: string;
  imgixParams?: ImigixParams | undefined;
  className?: string | undefined;
  disableLibraryParam?: boolean | undefined;
  htmlAttributes?: ImgixHTMLAttributes | undefined;
}

export const Background: React.FunctionComponent<React.PropsWithChildren<BackgroundProps>>;

declare class Imgix extends React.Component<SharedImigixAndSourceProps> {}
export default Imgix;
