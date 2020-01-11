import { BoundFunctions, Queries } from './get-queries-for-element';
import * as queries from './queries';

export type Screen<Q extends Queries = typeof queries> = BoundFunctions<Q>;

export const screen: Screen;
