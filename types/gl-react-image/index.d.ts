import * as React from "react";

export interface GLImageProps {
    center?: [number, number];
    resizeMode?: "cover" | "free" | "contain" | "stretch";
    source: any;
    zoom?: number;
}

export default class GLImage extends React.Component<GLImageProps> {}
