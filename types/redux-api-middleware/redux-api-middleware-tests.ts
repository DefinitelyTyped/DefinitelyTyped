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
    RSAAResultAction,
    createAction,
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
    getJSON(new Response()); // $ExpectType Promise<any>
    getJSON(); // $ExpectError
    getJSON(0); // $ExpectError
    getJSON(new Response()).then((value: any) => value); // $ExpectType Promise<any>
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

    class PromiseStateDrivenRSAACall implements RSAACall<State> {
        endpoint(state: State) {
            return Promise.resolve(state.path);
        }
        headers(state: State) {
            return Promise.resolve(state.headers);
        }
        options(state: State) {
            return Promise.resolve(state.options);
        }
        body(state: State) {
            return Promise.resolve(state.body);
        }
        bailout(state: State) {
            return Promise.resolve(state.bailout);
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
    const action: RSAAAction<any, string, number> = {
        [RSAA]: {
            endpoint: '/test/endpoint',
            method: 'GET',
            types: ['REQ_TYPE', 'SUCCESS_TYPE', 'FAILURE_TYPE'],
        },
    };

    store.dispatch(action);
    store.dispatch(action).then((action: RSAAResultAction<string, number>) => Promise.resolve());
    store.dispatch(action).then(() => Promise.resolve());
    store
        .dispatch(action)
        .then(action => (action.error ? Promise.reject() : Promise.resolve(action.payload)))
        .then((payload: string) => payload);
    store
        .dispatch(action)
        .then(action => (action.error ? Promise.reject() : Promise.resolve(action.meta)))
        .then((payload: number) => Promise.resolve());
    store
        .dispatch(action)
        .then(action => (action.error ? Promise.reject() : Promise.resolve(action.payload)))
        .then((payload: number) => Promise.resolve()); // $ExpectError
    store.dispatch(action).then((action: string) => Promise.resolve()); // $ExpectError
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
    const requestDescriptor3: RSAARequestTypeDescriptor<number, number, number> = {
        type: Symbol(),
        payload: (action: RSAAAction, state: number) => Promise.resolve(state),
        meta: (action: RSAAAction, state: number) => Promise.resolve(state),
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
    const successDescriptor3: RSAASuccessTypeDescriptor<number, number, number> = {
        type: Symbol(),
        payload: (action: RSAAAction, state: number, res: Response) => Promise.resolve(state),
        meta: (action: RSAAAction, state: number, res: Response) => Promise.resolve(state),
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
    const failureDescriptor3: RSAAFailureTypeDescriptor<number, number, number> = {
        type: Symbol(),
        payload: (action: RSAAAction, state: number, res: Response) => Promise.resolve(state),
        meta: (action: RSAAAction, state: number, res: Response) => Promise.resolve(state),
    };
}

{
    const requestActionSimple: RSAARequestAction = {
        type: '',
    };

    const requestActionWithPayload: RSAARequestAction<number> = {
        type: '',
        payload: 1,
    };

    const requestActionWithIncorrectPayload: RSAARequestAction<number> = {
        type: '',
        payload: '', // $ExpectError
    };

    const requestActionWithMeta: RSAARequestAction<never, number> = {
        type: '',
        meta: 1,
    };

    // $ExpectError
    const requestActionWithMissingPayload: RSAARequestAction<number> = {
        type: '',
    };

    const requestActionWithExtraneousMeta: RSAARequestAction<number> = {
        type: '',
        payload: 1,
        meta: 1, // $ExpectError
    };

    const requestActionWithError: RSAARequestAction<number> = {
        type: '',
        error: true,
        payload: new InvalidRSAA(['']),
    };

    const resultActionSimple: RSAAResultAction = {
        type: '',
    };

    const resultActionWithPayload: RSAAResultAction<number> = {
        type: '',
        payload: 1,
    };

    const resultActionWithIncorrectPayload: RSAAResultAction<number> = {
        type: '',
        payload: '', // $ExpectError
    };

    const resultActionWithMeta: RSAAResultAction<never, number> = {
        type: '',
        meta: 1,
    };

    // $ExpectError
    const resultActionWithMissingPayload: RSAAResultAction<number> = {
        type: '',
    };

    const resultActionWithExtraneousMeta: RSAAResultAction<number> = {
        type: '',
        payload: 1,
        meta: 1, // $ExpectError
    };

    const resultActionWithApiError: RSAAResultAction<number> = {
        type: '',
        error: true,
        payload: new ApiError(500, '', 1),
    };

    const resultActionWithInternalError: RSAAResultAction<number> = {
        type: '',
        error: true,
        payload: new InternalError(''),
    };

    const resultActionWithRequestError: RSAAResultAction<number> = {
        type: '',
        error: true,
        payload: new RequestError(''),
    };

    // $ExpectError
    const resultActionWithMissingErrorPayload: RSAAResultAction<number> = {
        type: '',
        error: true,
    };
}

{
    createAction(); // $ExpectError
    createAction({}); // $ExpectError
    // $ExpectType RSAAAction<any, any, any>
    createAction<any, any, any>({
        endpoint: '/test/endpoint',
        method: 'GET',
        types: ['REQ_TYPE', 'SUCCESS_TYPE', 'FAILURE_TYPE'],
    });
}
