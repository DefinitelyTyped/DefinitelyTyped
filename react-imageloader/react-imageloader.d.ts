// Type definitions for react-imageloader 2.1.0
// Project: https://github.com/hzdg/react-imageloader
// Definitions by: Stephen Jelfs <https://github.com/stephenjelfs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare module "react-imageloader" {
  interface ImageLoaderProps extends __React.Props<ImageLoader> {
      /** An optional class name for the wrapper component. */
      className?: string;

      /** An optional object containing props for the underlying img component. */
      imgProps?: any;

      /** An optional handler for the error event. */
      onError?: (event: any) => void;

      /** An optional handler for the load event. */
      onLoad?: (event: any) => void;

      /** An optional function that returns a React element to be shown while the image loads. */
      preloader?: (params: any) => __React.ReactElement<any>;

      /** The URL of the image to be loaded. */
      src: string;

      /** An optional object containing styles for the wrapper component. */
      style?: __React.CSSProperties;

      /** A function that takes a props argument and returns a React element to be used as the wrapper component. Defaults to React.DOM.span. */
      wrapper?: (props: any) => __React.ReactElement<any>;
  }

  class ImageLoader extends __React.Component<ImageLoaderProps, {}> {}

  export = ImageLoader;
}
