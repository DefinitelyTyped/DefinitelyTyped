/// <reference types="react" />

declare module "react-imageloader" {
    interface ImageLoaderProps {
        children?: React.ReactNode;
        ref?: React.LegacyRef<ImageLoader> | undefined;
        /** An optional class name for the wrapper component. */
        className?: string | undefined;

        /** An optional object containing props for the underlying img component. */
        imgProps?: any;

        /** An optional handler for the error event. */
        onError?: ((event: any) => void) | undefined;

        /** An optional handler for the load event. */
        onLoad?: ((event: any) => void) | undefined;

        /** An optional function that returns a React element to be shown while the image loads. */
        preloader?: ((params: any) => React.ReactElement) | undefined;

        /** The URL of the image to be loaded. */
        src: string;

        /** An optional object containing styles for the wrapper component. */
        style?: React.CSSProperties | undefined;

        /** A function that takes a props argument and returns a React element to be used as the wrapper component. Defaults to React.DOM.span. */
        wrapper?: ((props: any) => React.ReactElement) | undefined;
    }

    class ImageLoader extends React.Component<ImageLoaderProps> {}

    export = ImageLoader;
}
