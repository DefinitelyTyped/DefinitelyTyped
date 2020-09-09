import { TokenInterface } from "../types";
/**
 * Auth State Hook
 *
 * @returns - Auth State Function
 */
declare const useAuth: () => () => TokenInterface;
export default useAuth;
