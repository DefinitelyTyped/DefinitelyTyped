// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Element {
        /**
         *   Attaches the element to the parent specified. A
         *   way of setting the container for the element.
         *   Accepts either a string ID, DOM node, or
         *   p5.Element. If no arguments given, parent node is
         *   returned. For more ways to position the canvas,
         *   see the  positioning the canvas wiki page. All
         *   above examples except for the first one require
         *   the inclusion of the p5.dom library in your
         *   index.html. See the using a library section for
         *   information on how to include this library.
         *   @param parent the ID, DOM node, or p5.Element of
         *   desired parent element
         *   @chainable
         */
        parent(parent: string | Element | object): Element;

        /**
         *   Attaches the element to the parent specified. A
         *   way of setting the container for the element.
         *   Accepts either a string ID, DOM node, or
         *   p5.Element. If no arguments given, parent node is
         *   returned. For more ways to position the canvas,
         *   see the  positioning the canvas wiki page. All
         *   above examples except for the first one require
         *   the inclusion of the p5.dom library in your
         *   index.html. See the using a library section for
         *   information on how to include this library.
         */
        parent(): Element;

        /**
         *   Sets the ID of the element. If no ID argument is
         *   passed in, it instead returns the current ID of
         *   the element. Note that only one element can have a
         *   particular id in a page. The .class() function can
         *   be used to identify multiple elements with the
         *   same class name.
         *   @param id ID of the element
         *   @chainable
         */
        id(id: string): Element;

        /**
         *   Sets the ID of the element. If no ID argument is
         *   passed in, it instead returns the current ID of
         *   the element. Note that only one element can have a
         *   particular id in a page. The .class() function can
         *   be used to identify multiple elements with the
         *   same class name.
         *   @return the id of the element
         */
        id(): string;

        /**
         *   Adds given class to the element. If no class
         *   argument is passed in, it instead returns a string
         *   containing the current class(es) of the element.
         *   @param class class to add
         *   @chainable
         */
        class(theClass: string): Element;

        /**
         *   Adds given class to the element. If no class
         *   argument is passed in, it instead returns a string
         *   containing the current class(es) of the element.
         *   @return the class of the element
         */
        class(): string;

        /**
         *   The .mousePressed() function is called once after
         *   every time a mouse button is pressed over the
         *   element. Some mobile browsers may also trigger
         *   this event on a touch screen, if the user performs
         *   a quick tap. This can be used to attach element
         *   specific event listeners.
         *   @param fxn function to be fired when mouse is
         *   pressed over the element. if false is passed
         *   instead, the previously firing function will no
         *   longer fire.
         *   @chainable
         */
        mousePressed(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .doubleClicked() function is called once after
         *   every time a mouse button is pressed twice over
         *   the element. This can be used to attach element
         *   and action specific event listeners.
         *   @param fxn function to be fired when mouse is
         *   double clicked over the element. if false is
         *   passed instead, the previously firing function
         *   will no longer fire.
         */
        doubleClicked(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .mouseWheel() function is called once after
         *   every time a mouse wheel is scrolled over the
         *   element. This can be used to attach element
         *   specific event listeners.  The function accepts a
         *   callback function as argument which will be
         *   executed when the wheel event is triggered on the
         *   element, the callback function is passed one
         *   argument event. The event.deltaY property returns
         *   negative values if the mouse wheel is rotated up
         *   or away from the user and positive in the other
         *   direction. The event.deltaX does the same as
         *   event.deltaY except it reads the horizontal wheel
         *   scroll of the mouse wheel.
         *
         *
         *   On OS X with "natural" scrolling enabled, the
         *   event.deltaY values are reversed.
         *   @param fxn function to be fired when mouse is
         *   scrolled over the element. if false is passed
         *   instead, the previously firing function will no
         *   longer fire.
         *   @chainable
         */
        mouseWheel(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .mouseReleased() function is called once after
         *   every time a mouse button is released over the
         *   element. Some mobile browsers may also trigger
         *   this event on a touch screen, if the user performs
         *   a quick tap. This can be used to attach element
         *   specific event listeners.
         *   @param fxn function to be fired when mouse is
         *   released over the element. if false is passed
         *   instead, the previously firing function will no
         *   longer fire.
         *   @chainable
         */
        mouseReleased(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .mouseClicked() function is called once after
         *   a mouse button is pressed and released over the
         *   element. Some mobile browsers may also trigger
         *   this event on a touch screen, if the user performs
         *   a quick tap. This can be used to attach element
         *   specific event listeners.
         *   @param fxn function to be fired when mouse is
         *   clicked over the element. if false is passed
         *   instead, the previously firing function will no
         *   longer fire.
         *   @chainable
         */
        mouseClicked(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .mouseMoved() function is called once every
         *   time a mouse moves over the element. This can be
         *   used to attach an element specific event listener.
         *   @param fxn function to be fired when a mouse moves
         *   over the element. if false is passed instead, the
         *   previously firing function will no longer fire.
         *   @chainable
         */
        mouseMoved(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .mouseOver() function is called once after
         *   every time a mouse moves onto the element. This
         *   can be used to attach an element specific event
         *   listener.
         *   @param fxn function to be fired when a mouse moves
         *   onto the element. if false is passed instead, the
         *   previously firing function will no longer fire.
         *   @chainable
         */
        mouseOver(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .mouseOut() function is called once after
         *   every time a mouse moves off the element. This can
         *   be used to attach an element specific event
         *   listener.
         *   @param fxn function to be fired when a mouse moves
         *   off of an element. if false is passed instead, the
         *   previously firing function will no longer fire.
         *   @chainable
         */
        mouseOut(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .touchStarted() function is called once after
         *   every time a touch is registered. This can be used
         *   to attach element specific event listeners.
         *   @param fxn function to be fired when a touch
         *   starts over the element. if false is passed
         *   instead, the previously firing function will no
         *   longer fire.
         *   @chainable
         */
        touchStarted(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .touchMoved() function is called once after
         *   every time a touch move is registered. This can be
         *   used to attach element specific event listeners.
         *   @param fxn function to be fired when a touch moves
         *   over the element. if false is passed instead, the
         *   previously firing function will no longer fire.
         *   @chainable
         */
        touchMoved(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .touchEnded() function is called once after
         *   every time a touch is registered. This can be used
         *   to attach element specific event listeners.
         *   @param fxn function to be fired when a touch ends
         *   over the element. if false is passed instead, the
         *   previously firing function will no longer fire.
         *   @chainable
         */
        touchEnded(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .dragOver() function is called once after
         *   every time a file is dragged over the element.
         *   This can be used to attach an element specific
         *   event listener.
         *   @param fxn function to be fired when a file is
         *   dragged over the element. if false is passed
         *   instead, the previously firing function will no
         *   longer fire.
         *   @chainable
         */
        dragOver(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   The .dragLeave() function is called once after
         *   every time a dragged file leaves the element area.
         *   This can be used to attach an element specific
         *   event listener.
         *   @param fxn function to be fired when a file is
         *   dragged off the element. if false is passed
         *   instead, the previously firing function will no
         *   longer fire.
         *   @chainable
         */
        dragLeave(fxn: ((...args: any[]) => any) | boolean): Element;

        /**
         *   Underlying HTML element. All normal HTML methods
         *   can be called on this.
         */
        elt: any;
    }
}
