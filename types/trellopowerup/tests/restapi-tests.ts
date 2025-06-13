import * as Trello from "trellopowerup";

// Test ApiOptions interface
const apiOptions: Trello.PowerUp.ApiOptions = {};
// $ExpectType string | undefined
apiOptions.appKey;
// $ExpectType string | undefined
apiOptions.appName;
// $ExpectType string | undefined
apiOptions.appAuthor;
// $ExpectType string | undefined
apiOptions.apiOrigin;
// $ExpectType string | undefined
apiOptions.authOrigin;
// $ExpectType Storage | undefined
apiOptions.localStorage;
// $ExpectType string | undefined
apiOptions.tokenStorageKey;

// Test ApiOptions with all properties
const fullApiOptions: Trello.PowerUp.ApiOptions = {
    appKey: "test-key",
    appName: "Test App",
    appAuthor: "Test Author",
    apiOrigin: "https://api.example.com",
    authOrigin: "https://auth.example.com",
    localStorage: window.localStorage,
    tokenStorageKey: "auth-token",
};

// Test Api interface
declare const api: Trello.PowerUp.Api;

// $ExpectType string | undefined
api.appKey;
// $ExpectType string | undefined
api.appName;
// $ExpectType string | undefined
api.appAuthor;
// $ExpectType string | undefined
api.apiOrigin;
// $ExpectType string | undefined
api.authOrigin;
// $ExpectType Storage | undefined
api.localStorage;
// $ExpectType string | undefined
api.tokenStorageKey;

// $ExpectType void
api.init();
// $ExpectType string
api.apiBase();
// $ExpectType string
api.authBase();

// Test ApiError interface
const apiError: Trello.PowerUp.ApiError = {
    name: "TestError",
    stack: "Error stack trace",
};

// $ExpectType string | undefined
apiError.message;
// $ExpectType string
apiError.name;
// $ExpectType string
apiError.stack;

// Test ApiError with message
const apiErrorWithMessage: Trello.PowerUp.ApiError = {
    message: "Something went wrong",
    name: "ApiError",
    stack: "Error: Something went wrong\n    at test",
};

// Test type errors
// @ts-expect-error - appKey should be string, not number
const invalidApiOptions1: Trello.PowerUp.ApiOptions = { appKey: 123 };

// @ts-expect-error - localStorage should be Storage, not string
const invalidApiOptions2: Trello.PowerUp.ApiOptions = { localStorage: "invalid" };

// @ts-expect-error - name is required in ApiError
const invalidApiError1: Trello.PowerUp.ApiError = { stack: "test" };

// @ts-expect-error - stack is required in ApiError
const invalidApiError2: Trello.PowerUp.ApiError = { name: "test" };

// @ts-expect-error - name should be string, not number
const invalidApiError3: Trello.PowerUp.ApiError = { name: 123, stack: "test" };

// @ts-expect-error - init() returns void, not string
const initResult: string = api.init();

// @ts-expect-error - apiBase() returns string, not number
const apiBaseResult: number = api.apiBase();

// @ts-expect-error - authBase() returns string, not number
const authBaseResult: number = api.authBase();
