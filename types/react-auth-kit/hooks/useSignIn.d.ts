import { signInFunctionParams } from "../types";
/**
 * Authentication SignIn Hook
 *
 * @returns - Sign In function
 */
declare function useSignIn(): ({ token, authState, expiresIn, tokenType }: signInFunctionParams) => boolean;
export default useSignIn;
