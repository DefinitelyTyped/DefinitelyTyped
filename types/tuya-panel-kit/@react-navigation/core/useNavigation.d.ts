import type { ParamListBase } from '../routers';
import type { NavigationProp } from './types';
/**
 * Hook to access the navigation prop of the parent screen anywhere.
 *
 * @returns Navigation prop of the parent screen.
 */
// tslint:disable-next-line no-unnecessary-generics
export default function useNavigation<T extends NavigationProp<ParamListBase>>(): T;
