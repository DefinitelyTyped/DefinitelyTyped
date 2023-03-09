import parse from './parse';
import { FindColorByMode, Mode } from './common';

declare function prepare(color: undefined): undefined;
declare function prepare(color: string): ReturnType<typeof parse>;
declare function prepare<M extends Mode>(
	color: FindColorByMode<M>
): FindColorByMode<M>;
declare function prepare<M extends Mode>(
	color: Omit<FindColorByMode<M>, 'mode'>,
	mode: M
): FindColorByMode<M>;
declare function prepare<M extends Mode>(
	color: unknown,
	mode?: undefined
): undefined;

export default prepare;
