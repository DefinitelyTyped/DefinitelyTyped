/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxImage
 *
 * Encapsulates the URL, width and height of an image.
 *
 * Constructor: mxImage
 *
 * Constructs a new image.
 */
declare namespace mxgraph {
  export class mxImage {
    constructor(src: string, width: number, height: number);

    /**
     * Variable: src
     *
     * String that specifies the URL of the image.
     */
    src: string;

    /**
     * Variable: width
     *
     * Integer that specifies the width of the image.
     */
    width: number;

    /**
     * Variable: height
     *
     * Integer that specifies the height of the image.
     */
    height: number;
  }
}