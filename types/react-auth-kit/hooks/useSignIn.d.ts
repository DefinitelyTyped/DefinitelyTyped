import { signInFunctionParams } from "../types";
/**
 * Authentication SignIn Hook
 *
 * @returns {function(): boolean} - Sign In function
 */
declare const useSignIn: () => ({ token, authState, expiresIn, tokenType }: signInFunctionParams) => boolean;
export default useSignIn;
