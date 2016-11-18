// Type definitions for halogen
// Project: https://github.com/yuanyan/halogen
// Definitions by: Clément Devos <https://github.com/steller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "halogen" {
  import * as react from "react";

  type VerticalAlign = "baseline" | "length" | "sub" | "super" | "top" | "text-top" | "middle" | "bottom" | "text-bottom" | "initial" | "inherit";

  interface IHalogenCommonProps {
    loading?: boolean;
    color?: string;
    id?: string;
    className?: string;
    verticalAlign?: VerticalAlign;
  }

  interface ISizeLoaderProps extends IHalogenCommonProps {
    size?: string;
  }

  interface IMarginLoaderProps<T> extends IHalogenCommonProps {
    margin?: T;
    size?: T;
  }

  interface IRadiusLoaderProps extends IMarginLoaderProps<string> {
    height?: string;
    width?: string;
    radius?: string;
  }

  /**
   * React components
   */
  type PulseLoader = React.Component<IMarginLoaderProps<string>, {}>;
  export let PulseLoader: React.ComponentClass<IMarginLoaderProps<string>>;

  type RotateLoader = React.Component<IMarginLoaderProps<string>, {}>;
  export let RotateLoader: React.ComponentClass<IMarginLoaderProps<string>>;

  type BeatLoader = React.Component<IMarginLoaderProps<string>, {}>;
  export let BeatLoader: React.ComponentClass<IMarginLoaderProps<string>>;

  type RiseLoader = React.Component<IMarginLoaderProps<string>, {}>;
  export let RiseLoader: React.ComponentClass<IMarginLoaderProps<string>>;

  type SyncLoader = React.Component<IMarginLoaderProps<string>, {}>;
  export let SyncLoader: React.ComponentClass<IMarginLoaderProps<string>>;

  type GridLoader = React.Component<IMarginLoaderProps<string>, {}>;
  export let GridLoader: React.ComponentClass<IMarginLoaderProps<string>>;

  type ClipLoader = React.Component<ISizeLoaderProps, {}>;
  export let ClipLoader: React.ComponentClass<ISizeLoaderProps>;

  type SquareLoader = React.Component<ISizeLoaderProps, {}>;
  export let SquareLoader: React.ComponentClass<ISizeLoaderProps>;

  type DotLoader = React.Component<ISizeLoaderProps, {}>;
  export let DotLoader: React.ComponentClass<ISizeLoaderProps>;

  type PacmanLoader = React.Component<IMarginLoaderProps<number>, {}>;
  export let PacmanLoader: React.ComponentClass<IMarginLoaderProps<number>>;

  type MoonLoader = React.Component<ISizeLoaderProps, {}>;
  export let MoonLoader: React.ComponentClass<ISizeLoaderProps>;

  type RingLoader = React.Component<ISizeLoaderProps, {}>;
  export let RingLoader: React.ComponentClass<ISizeLoaderProps>;

  type BounceLoader = React.Component<ISizeLoaderProps, {}>;
  export let BounceLoader: React.ComponentClass<ISizeLoaderProps>;

  type SkewLoader = React.Component<ISizeLoaderProps, {}>;
  export let SkewLoader: React.ComponentClass<ISizeLoaderProps>;

  type FadeLoader = React.Component<IRadiusLoaderProps, {}>;
  export let FadeLoader: React.ComponentClass<IRadiusLoaderProps>;

  type ScaleLoader = React.Component<IRadiusLoaderProps, {}>;
  export let ScaleLoader: React.ComponentClass<IRadiusLoaderProps>;

}
