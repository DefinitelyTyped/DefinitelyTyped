import { signInFunctionParams } from "../types";
declare function useAuth(): {
    authHeader: () => (string | null);
    signIn: (signInConfig: signInFunctionParams) => boolean;
    signOut: () => (boolean);
    isAuthenticated: () => (boolean);
    authUser: () => (object | null);
};
export default useAuth;
