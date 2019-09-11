import { createStore, Store } from 'redux';
import {
    RSAA,
    isRSAA,
    validateRSAA,
    isValidRSAA,
    InvalidRSAA,
    InternalError,
    RequestError,
    ApiError,
    getJSON,
    createMiddleware,
    apiMiddleware,
    RSAAAction,
    RSAACall,
    RSAARequestTypeDescriptor,
    RSAASuccessTypeDescriptor,
    RSAAFailureTypeDescriptor,
    RSAARequestAction,
    RSAASuccessAction,
    RSAAFailureAction,
} from 'redux-api-middleware';

{
    // RSAA
    const passRSAA: typeof RSAA = '@@redux-api-middleware/RSAA';
    const failRSAA: typeof RSAA = '@@redux-api-middleware/RSAA-fail'; // $ExpectError
}

{
    // isRSAA
    isRSAA({}); // $ExpectType boolean
    isRSAA(); // $ExpectError
}

{
    // validateRSAA
    validateRSAA({}); // $ExpectType string[]
    validateRSAA(); // $ExpectError
}

{
    // isValidRSAA
    isValidRSAA({}); // $ExpectType boolean
    isValidRSAA(); // $ExpectError
}

{
    // InvalidRSAA
    new InvalidRSAA([]); // $ExpectType InvalidRSAA
    new InvalidRSAA([]).message; // $ExpectType "Invalid RSAA"
    new InvalidRSAA([]).name; // $ExpectType "InvalidRSAA"
    new InvalidRSAA([]).validationErrors; // $ExpectType string[]
    new InvalidRSAA(['']);
    new InvalidRSAA(); // $ExpectError
    new InvalidRSAA([0]); // $ExpectError
}

{
    // InternalError
    new InternalError(''); // $ExpectType InternalError
    new InternalError('').name; // $ExpectType "InternalError"
    new InternalError(); // $ExpectError
    new InternalError(0); // $ExpectError
}

{
    // RequestError
    new RequestError(''); // $ExpectType RequestError
    new RequestError('').name; // $ExpectType "RequestError"
    new RequestError(); // $ExpectError
    new RequestError(0); // $ExpectError
}

{
    // ApiError
    new ApiError(200, 'OK', {}); // $ExpectType ApiError<{}>
    new ApiError(200, 'OK', {}).name; // $ExpectType "ApiError"
    new ApiError(200, 'OK', {}).status; // $ExpectType number
    new ApiError(200, 'OK', {}).statusText; // $ExpectType string
    new ApiError(200, 'OK', {}).response; // $ExpectType {}
    new ApiError(); // $ExpectError

    interface Response {
        data: number;
    }
    new ApiError<Response>(200, 'OK', { data: 0 }); // $ExpectType ApiError<Response>
    new ApiError<Response>(200, 'OK', { data: 0 }).name; // $ExpectType "ApiError"
    new ApiError<Response>(200, 'OK', { data: 0 }).status; // $ExpectType number
    new ApiError<Response>(200, 'OK', { data: 0 }).statusText; // $ExpectType string
    new ApiError<Response>(200, 'OK', { data: 0 }).response; // $ExpectType Response
    new ApiError<Response>(200, 'OK', {}); // $ExpectError
}

{
    // getJSON
    getJSON(new Response()); // $ExpectType Promise<any> | Promise<void>
    getJSON(); // $ExpectError
    getJSON(0); // $ExpectError
}

{
    // createMiddleware
    createMiddleware(); // $ExpectType Middleware<{}, any, Dispatch<AnyAction>>
    createMiddleware({}); // $ExpectType Middleware<{}, any, Dispatch<AnyAction>>
    createMiddleware({ fetch }); // $ExpectType Middleware<{}, any, Dispatch<AnyAction>>
    createMiddleware({ ok: res => res.ok }); // $ExpectType Middleware<{}, any, Dispatch<AnyAction>>
    createMiddleware({ fetch, ok: res => res.ok }); // $ExpectType Middleware<{}, any, Dispatch<AnyAction>>
}

{
    // apiMiddleware
    // $ExpectType (next: Dispatch<AnyAction>) => (action: any) => any
    apiMiddleware({ getState: () => undefined, dispatch: (action: any) => action });
    apiMiddleware(); // $ExpectError
}

{
    interface State {
        path: string;
        headers: HeadersInit;
        options: RequestInit;
        bailout: boolean;
        body: null;
    }

    class StateDrivenRSAACall implements RSAACall<State> {
        endpoint(state: State) {
            return state.path;
        }
        headers(state: State) {
            return state.headers;
        }
        options(state: State) {
            return state.options;
        }
        body(state: State) {
            return state.body;
        }
        bailout(state: State) {
            return state.bailout;
        }
        method: 'GET';
        types: ['REQ_TYPE', 'SUCCESS_TYPE', 'FAILURE_TYPE'];
    }

    class NonStateDrivenRSAACall implements RSAACall<State> {
        endpoint: '/test/endpoint';
        method: 'GET';
        headers: { 'Content-Type': 'application/json' };
        options: { redirect: 'follow' };
        bailout: true;
        types: ['REQ_TYPE', 'SUCCESS_TYPE', 'FAILURE_TYPE'];
    }
}

{
    const store: Store = createStore(() => undefined);
    const action: RSAAAction = {
        [RSAA]: {
            endpoint: '/test/endpoint',
            method: 'GET',
            types: ['REQ_TYPE', 'SUCCESS_TYPE', 'FAILURE_TYPE'],
        },
    };
    store.dispatch(action);
}

{
    const requestDescriptor0: RSAARequestTypeDescriptor<number, number, number> = {
        type: '',
        payload: 0,
        meta: 0,
    };
    const requestDescriptor1: RSAARequestTypeDescriptor<number, number, number> = {
        type: Symbol(),
        payload: (action: RSAAAction, state: number) => state,
        meta: (action: RSAAAction, state: number) => state,
    };
    const requestDescriptor2: RSAARequestTypeDescriptor<number, number, number> = {
        type: 0, // $ExpectError
        payload: '', // $ExpectError
        meta: (action: RSAAAction, state: number) => '', // $ExpectError
    };

    const successDescriptor0: RSAASuccessTypeDescriptor<number, number, number> = {
        type: '',
        payload: 0,
        meta: 0,
    };
    const successDescriptor1: RSAASuccessTypeDescriptor<number, number, number> = {
        type: Symbol(),
        payload: (action: RSAAAction, state: number, res: Response) => state,
        meta: (action: RSAAAction, state: number, res: Response) => state,
    };
    const successDescriptor2: RSAASuccessTypeDescriptor<number, number, number> = {
        type: 0, // $ExpectError
        payload: '', // $ExpectError
        meta: (action: RSAAAction, state: number) => '', // $ExpectError
    };

    const failureDescriptor0: RSAAFailureTypeDescriptor<number, number, number> = {
        type: '',
        payload: 0,
        meta: 0,
    };
    const failureDescriptor1: RSAAFailureTypeDescriptor<number, number, number> = {
        type: Symbol(),
        payload: (action: RSAAAction, state: number, res: Response) => state,
        meta: (action: RSAAAction, state: number, res: Response) => state,
    };
    const failureDescriptor2: RSAAFailureTypeDescriptor<number, number, number> = {
        type: 0, // $ExpectError
        payload: '', // $ExpectError
        meta: (action: RSAAAction, state: number) => '', // $ExpectError
    };
}

{
    const requestAction0: RSAARequestAction<number, number> = {
        type: ''
    };

    const successAction0: RSAASuccessAction<number, number> = {
        type: '',
        payload: 6
    };

    const failureAction0: RSAAFailureAction<number, number> = {
        type: '',
        payload: new ApiError(500, '', 1),
        error: true
    };
}
