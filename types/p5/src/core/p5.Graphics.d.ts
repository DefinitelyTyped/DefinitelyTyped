// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    // Work-around for p5.Graphics inheriting from both p5 and p5.Element
    class __Graphics__ extends Element {
        /**
         *   Resets certain values such as those modified by
         *   functions in the Transform category and in the
         *   Lights category that are not automatically reset
         *   with graphics buffer objects. Calling this in
         *   draw() will copy the behavior of the standard
         *   canvas.
         */
        reset(): void;

        /**
         *   Removes a Graphics object from the page and frees
         *   any resources associated with it.
         */
        remove(): void;
    }
    // Work-around for p5.Graphics inheriting from both p5 and p5.Element
    type Graphics = __Graphics__ & p5;
}
