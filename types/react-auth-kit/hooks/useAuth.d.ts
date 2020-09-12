import { TokenInterface } from "../types";
/**
 * Auth State Hook
 *
 * @returns - Auth State Function
 */
declare function useAuth(): () => TokenInterface;
export default useAuth;
