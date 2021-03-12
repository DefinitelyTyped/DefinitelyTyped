import type { ParamListBase } from '../routers';
import type { RouteProp } from './types';
/**
 * Hook to access the route prop of the parent screen anywhere.
 *
 * @returns Route prop of the parent screen.
 */
// tslint:disable-next-line no-unnecessary-generics
export default function useRoute<T extends RouteProp<ParamListBase, string>>(): T;
