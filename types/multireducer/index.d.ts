// Type definitions for multireducer v3.1.2
// Project: https://github.com/erikras/multireducer
// Definitions by: Anthony M. Lee <https://github.com/immigration9/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface MetaObject {
  [key: string]: string;
}

interface ActionObject {
  meta: MetaObject;
  [rest: string]: any;
}

type Reducer = { [key: string]: any }

export function bindActionCreators(actions: any, dispatch: any, reducerKey: string): any;
export function wrapDispatch(dispatch: any, reducerKey: string): any;
export function wrapAction(action: any, reducerKey: string): ActionObject;

export default function multireducer(reducers: Reducer): (state: any, action: any) => any;
export default function multireducer(reducers: Reducer, reducerKey: string): (state: any, action: any) => any;
