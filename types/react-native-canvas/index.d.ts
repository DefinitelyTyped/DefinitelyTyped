// Type definitions for react-native-canvas 0.1
// Project: https://github.com/iddan/react-native-canvas#readme
// Definitions by: hmajid2301 <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface CanvasProps {
    style: StyleProp<ViewStyle>;
    baseUrl: string;
    originWhitelist: string[];
}

export default class Canvas extends React.Component<CanvasProps> {}
export class Image extends React.Component {}
export class ImageData extends React.Component {}
export class Path2D extends React.Component {}
