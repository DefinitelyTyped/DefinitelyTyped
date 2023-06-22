// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Set attributes for the WebGL Drawing context. This
         *   is a way of adjusting how the WebGL renderer works
         *   to fine-tune the display and performance. Note
         *   that this will reinitialize the drawing context if
         *   called after the WebGL canvas is made.
         *
         *   If an object is passed as the parameter, all
         *   attributes not declared in the object will be set
         *   to defaults.
         *
         *   The available attributes are:
         *
         *   alpha - indicates if the canvas contains an alpha
         *   buffer default is true
         *
         *   depth - indicates whether the drawing buffer has a
         *   depth buffer of at least 16 bits - default is true
         *
         *   stencil - indicates whether the drawing buffer has
         *   a stencil buffer of at least 8 bits
         *
         *   antialias - indicates whether or not to perform
         *   anti-aliasing default is false (true in Safari)
         *
         *   premultipliedAlpha - indicates that the page
         *   compositor will assume the drawing buffer contains
         *   colors with pre-multiplied alpha default is true
         *
         *   preserveDrawingBuffer - if true the buffers will
         *   not be cleared and and will preserve their values
         *   until cleared or overwritten by author (note that
         *   p5 clears automatically on draw loop) default is
         *   true
         *
         *   perPixelLighting - if true, per-pixel lighting
         *   will be used in the lighting shader otherwise
         *   per-vertex lighting is used. default is true.
         *   @param key Name of attribute
         *   @param value New value of named attribute
         */
        setAttributes(key: string, value: boolean): void;

        /**
         *   Set attributes for the WebGL Drawing context. This
         *   is a way of adjusting how the WebGL renderer works
         *   to fine-tune the display and performance. Note
         *   that this will reinitialize the drawing context if
         *   called after the WebGL canvas is made.
         *
         *   If an object is passed as the parameter, all
         *   attributes not declared in the object will be set
         *   to defaults.
         *
         *   The available attributes are:
         *
         *   alpha - indicates if the canvas contains an alpha
         *   buffer default is true
         *
         *   depth - indicates whether the drawing buffer has a
         *   depth buffer of at least 16 bits - default is true
         *
         *   stencil - indicates whether the drawing buffer has
         *   a stencil buffer of at least 8 bits
         *
         *   antialias - indicates whether or not to perform
         *   anti-aliasing default is false (true in Safari)
         *
         *   premultipliedAlpha - indicates that the page
         *   compositor will assume the drawing buffer contains
         *   colors with pre-multiplied alpha default is true
         *
         *   preserveDrawingBuffer - if true the buffers will
         *   not be cleared and and will preserve their values
         *   until cleared or overwritten by author (note that
         *   p5 clears automatically on draw loop) default is
         *   true
         *
         *   perPixelLighting - if true, per-pixel lighting
         *   will be used in the lighting shader otherwise
         *   per-vertex lighting is used. default is true.
         *   @param obj object with key-value pairs
         */
        setAttributes(obj: object): void;
    }
}
