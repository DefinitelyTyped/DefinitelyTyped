// Type definitions for bcswipe 2.0
// Project: https://github.com/briggySmalls/bcSwipe
// Definitions by: Christophe Coevoet <https://github.com/stof>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />

interface JQuery<TElement = HTMLElement> {
    bcSwipe(settings?: { threshold?: number }): this;
}
