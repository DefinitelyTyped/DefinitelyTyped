// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Creates a screen reader accessible description for
         *   the canvas. The first parameter should be a string
         *   with a description of the canvas. The second
         *   parameter is optional. If specified, it determines
         *   how the description is displayed. describe(text,
         *   LABEL) displays the description to all users as a
         *   tombstone or exhibit label/caption in a div
         *   adjacent to the canvas. You can style it as you
         *   wish in your CSS.
         *
         *   describe(text, FALLBACK) makes the description
         *   accessible to screen-reader users only, in  a sub
         *   DOM inside the canvas element. If a second
         *   parameter is not specified, by default, the
         *   description will only be available to
         *   screen-reader users.
         *   @param text description of the canvas
         *   @param [display] either LABEL or FALLBACK
         */
        describe(text: string, display?: DESCRIBE_DISPLAY): void;

        /**
         *   This function creates a screen-reader accessible
         *   description for elements —shapes or groups of
         *   shapes that create meaning together— in the
         *   canvas. The first paramater should be the name of
         *   the element. The second parameter should be a
         *   string with a description of the element. The
         *   third parameter is optional. If specified, it
         *   determines how the element description is
         *   displayed. describeElement(name, text, LABEL)
         *   displays the element description to all users as a
         *   tombstone or exhibit label/caption in a div
         *   adjacent to the canvas. You can style it as you
         *   wish in your CSS.
         *
         *   describeElement(name, text, FALLBACK) makes the
         *   element description accessible to screen-reader
         *   users only, in  a sub DOM inside the canvas
         *   element. If a second parameter is not specified,
         *   by default, the element description will only be
         *   available to screen-reader users.
         *   @param name name of the element
         *   @param text description of the element
         *   @param [display] either LABEL or FALLBACK
         */
        describeElement(name: string, text: string, display?: DESCRIBE_DISPLAY): void;
    }
}
