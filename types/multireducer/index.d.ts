export interface MetaObject {
    [key: string]: string;
}

export interface ActionObject {
    meta: MetaObject;
    [rest: string]: any;
}

export function bindActionCreators(actions: any, dispatch: any, reducerKey: string): any;
export function wrapDispatch(dispatch: any, reducerKey: string): any;
export function wrapAction(action: any, reducerKey: string): ActionObject;

export default function multireducer(
    reducers: { [key: string]: any },
    reducerKey?: string,
): (state: any, action: any) => any;
