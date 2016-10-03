// Type definitions for Knockout specs
// Project: http://knockoutjs.com
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Igor Oleinikov <https://github.com/Igorbek/>, Clément Bourgeois <https://github.com/moonpyk/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Knockout specs depend on custom Jasmine matchers
// See https://github.com/knockout/knockout/blob/v3.4.0/spec/lib/jasmine.extensions.js
// FYI jasmine-jquery.d.ts (https://github.com/velesin/jasmine-jquery) also defines toContainHtml() and toContainText()

declare namespace jasmine {
  interface Matchers {
    toContainHtml(expected: string): boolean;
    toContainText(expected: string): boolean;
  }
}
