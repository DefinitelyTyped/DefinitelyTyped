declare function StartTest(testScript: (t: Siesta.Test) => void): void;

declare var startTest: typeof StartTest;

declare var describe: typeof StartTest;

declare module Siesta {
    export class Harness {
    }

    export module Harness {
        export class Browser extends Harness {
        }

        export module Browser {
            export class ExtJS extends Browser implements ExtJSCore {
            }

            export class ExtJSCore {
            }

            export class SenchaTouch extends Browser implements ExtJSCore {
            }
        }

        export class NodeJS implements Harness {
        }
    }

    export class Test implements Test.BDD, Test.Date, Test.Function, Test.More {
    }

    export module Test {
        export class Action {
        }

        export module Action {
            export module Role {
                export class HasTarget {
                }
            }

            export class Click extends Action implements Role.HasTarget {
            }

            export class Done extends Action {
            }

            export class DoubleClick extends Action implements Role.HasTarget {
            }

            export class DoubleTap extends Action implements Role.HasTarget {
            }

            export class Drag extends Action {
            }

            export class Eval extends Action {
            }

            export class LongPress extends Action implements Role.HasTarget {
            }

            export class MouseDown extends Action implements Role.HasTarget {
            }

            export class MouseUp extends Action implements Role.HasTarget {
            }

            export class MoveCursor extends Action implements Role.HasTarget {
            }

            export class MoveCursorTo extends Action implements Role.HasTarget {
            }

            export class RightClick extends Action implements Role.HasTarget {
            }

            export class Swipe extends Action implements Role.HasTarget {
            }

            export class Tap extends Action implements Role.HasTarget {
            }

            export class Type extends Action implements Role.HasTarget {
            }

            export class Wait extends Action {
            }
        }

        export class BDD {
        }

        export module BDD {
            export class Expectation {
            }
        }

        export class ExtJS extends Browser implements ExtJS.Ajax, ExtJS.Component, ExtJS.DataView, ExtJS.Element, ExtJS.FormField, ExtJS.Grid, ExtJS.Observable, ExtJS.Store, ExtJSCore {
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

        export class Browser implements Simulate.Event, Simulate.Keyboard, Simulate.Mouse, TextSelection {
        }

        export class Date {
        }

        export class Element {
        }

        export class ExtJSCore {
        }

        export class Function {
        }

        export class jQuery extends Browser {
        }

        export class More {
        }

        export class SenchaTouch extends Browser implements ExtJS.Component, ExtJS.Element, ExtJS.FormField, ExtJS.Observable, ExtJS.Store, ExtJSCore {
        }

        export class TextSelection {
        }
    }
}