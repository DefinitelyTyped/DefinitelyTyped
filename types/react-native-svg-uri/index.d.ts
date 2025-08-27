import * as React from "react";
import { ImageURISource } from "react-native";

export interface SvgUriProps {
    /**
     * The width of the rendered svg
     */
    width?: number | string | undefined;

    /**
     * The height of the rendered svg
     */
    height?: number | string | undefined;

    /**
     * Source path for the .svg file
     * Expects a require('path') to the file or object with uri.
     * e.g. source={require('my-path')}
     * e.g. source={{ur: 'my-path'}}
     */
    source?: ImageURISource | undefined;

    /**
     * Direct svg code to render. Similar to inline svg
     */
    svgXmlData?: string | undefined;

    /**
     * Fill color for the svg object
     */
    fill?: string | undefined;
}

export default class SvgUri extends React.Component<SvgUriProps> {}
