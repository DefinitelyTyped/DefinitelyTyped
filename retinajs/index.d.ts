export = retinajs.retina;

export as namespace retinajs;

declare namespace retinajs {
  var hasWindow: boolean;

  var environment: number;

  var srcReplace: RegExp;

  var inlineReplace: RegExp;

  var selector: string;

  var processedAttr: string;

  var processedAttr: string;

  function arrayify(object: any): HTMLImageElement[];

  function chooseCap(cap: number | string): number;

  function forceOriginalDimensions(image: HTMLImageElement): HTMLImageElement;

  function setSourceIfAvailable(
    image: HTMLImageElement,
    retinaURL: string
  ): void;

  function dynamicSwapImage(image: HTMLImageElement, src: string): void;

  function manualSwapImage(image: HTMLImageElement, hdsrc: string): void;

  function getImages(images: HTMLImageElement[] | null): HTMLImageElement[];

  function cleanBgImg(img: HTMLImageElement): HTMLImageElement;

  function retina(): void;

  function retina(images: any): void;
}
