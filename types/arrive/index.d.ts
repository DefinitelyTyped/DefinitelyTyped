// Type definitions for arrive 2.4
// Project: https://github.com/uzairfarooq/arrive
// Definitions by: Vijay Pemmaraju <https://github.com/vijaypemmaraju>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// required for declare global to work
export { };

interface Options {
    fireOnAttributesModification?: boolean;
    onceOnly?: boolean;
    existing?: boolean;
}

type ArriveSignature = (element: string, handlerOrOptions: ((this: Element, element: Element) => void) | Options, handler?: (this: Element, element: Element) => void) => void;
type UnbindArriveSignature = (elementOrHandler?: string | ((this: Element, element: Element) => void), handler?: (this: Element, element: Element) => void) => void;
type LeaveSignature = (element: string, handlerOrOptions: ((this: Element, element: Element) => void) | Options, handler?: (this: Element) => void) => void;
type UnbindLeaveSignature = (elementOrHandler?: string | ((this: Element, element: Element) => void), handler?: (this: Element, element: Element) => void) => void;

declare global {
    // tslint:disable-next-line no-unnecessary-class
    class Arrive {
        static unbindAllArrive: () => void;
        static unbindAllLeave: () => void;
    }

    interface Document {
        arrive: ArriveSignature;
        unbindArrive: UnbindArriveSignature;
        leave: LeaveSignature;
        unbindLeave: UnbindLeaveSignature;
    }

    interface JQuery {
        arrive: ArriveSignature;
        unbindArrive: UnbindArriveSignature;
        leave: LeaveSignature;
        unbindLeave: UnbindLeaveSignature;
    }

    interface Window {
        arrive: ArriveSignature;
        unbindArrive: UnbindArriveSignature;
        leave: LeaveSignature;
        unbindLeave: UnbindLeaveSignature;
    }

    interface NodeList {
        arrive: ArriveSignature;
        unbindArrive: UnbindArriveSignature;
        leave: LeaveSignature;
        unbindLeave: UnbindLeaveSignature;
    }

    interface Element {
        arrive: ArriveSignature;
        unbindArrive: UnbindArriveSignature;
        leave: LeaveSignature;
        unbindLeave: UnbindLeaveSignature;
    }

    interface HTMLCollectionBase {
        arrive: ArriveSignature;
        unbindArrive: UnbindArriveSignature;
        leave: LeaveSignature;
        unbindLeave: UnbindLeaveSignature;
    }
}
