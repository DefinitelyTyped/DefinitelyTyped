import { signInFunctionParams } from "../types";
/**
 * Authentication SignIn Hook
 *
 * @returns - Sign In function
 */
declare function useSignIn(): (signInConfig: signInFunctionParams) => boolean;
export default useSignIn;
