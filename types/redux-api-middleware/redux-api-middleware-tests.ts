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
    RSAACall
} from 'redux-api-middleware';

{
    // RSAA
    const passRSAA: RSAA = '@@redux-api-middleware/RSAA';
    const failRSAA: RSAA = '@@redux-api-middleware/RSAA-fail'; // $ExpectError
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

    interface Response { data: number; }
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
        endpoint(state: State) { return state.path; }
        headers(state: State) { return state.headers; }
        options(state: State) { return state.options; }
        body(state: State) { return state.body; }
        bailout(state: State) { return state.bailout; }
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
