declare function StartTest(testScript: (t: Siesta.Test) => void): void;

declare var startTest: typeof StartTest;

declare var describe: typeof StartTest;

declare module Siesta {
    export class Harness {
    }

    export module Harness {
        export class Browser {
        }

        export module Browser {
            export class ExtJS {
            }

            export class ExtJSCore {
            }

            export class SenchaTouch {
            }
        }

        export class NodeJS {
        }
    }

    export class Test {
    }

    export module Test {
        export class Action {
        }

        export module Action {
            export module Role {
                export class HasTarget {
                }
            }

            export class Click {
            }

            export class Done {
            }

            export class DoubleClick {
            }

            export class DoubleTap {
            }

            export class Drag {
            }

            export class Eval {
            }

            export class LongPress {
            }

            export class MouseDown {
            }

            export class MouseUp {
            }

            export class MoveCursor {
            }

            export class MoveCursorTo {
            }

            export class RightClick {
            }

            export class Swipe {
            }

            export class Tap {
            }

            export class Type {
            }

            export class Wait {
            }
        }

        export class BDD {
        }

        export module BDD {
            export class Expectation {
            }
        }

        export class ExtJS {
        }

        export module ExtJS {
            export class Ajax {
            }

            export class Component {
            }

            export class DataView {
            }

            export class Element {
            }

            export class FormField {
            }

            export class Grid {
            }

            export class Observable {
            }

            export class Store {
            }
        }

        export module Simulate {
            export class Event {
            }

            export class Keyboard {
            }

            export module KeyCodes {
            }

            export class Mouse {
            }
        }

        export class ActionTarget {
        }

        export class Browser {
        }

        export class Date {
        }

        export class Element {
        }

        export class ExtJSCore {
        }

        export class Function {
        }

        export class jQuery {
        }

        export class More {
        }

        export class SenchaTouch {
        }

        export class TextSelection {
        }
    }
}