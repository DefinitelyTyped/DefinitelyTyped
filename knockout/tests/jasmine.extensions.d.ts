// Knockout specs depend on custom Jasmine matchers
// See https://github.com/knockout/knockout/blob/v3.4.0/spec/lib/jasmine.extensions.js
// FYI jasmine-jquery.d.ts (https://github.com/velesin/jasmine-jquery) also defines toContainHtml() and toContainText()

declare module jasmine {
  interface Matchers {
    toContainHtml(expected: string): boolean;
    toContainText(expected: string): boolean;
  }
}
