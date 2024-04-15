import { FindColorByMode, Mode, TakeColorChannels } from "./common";
import { Rgb } from "./rgb/types";

type NumberOrRange = number | [number, number];

type Constraints<M extends Mode> = Partial<
    {
        [P in keyof TakeColorChannels<M>]: NumberOrRange;
    }
>;

declare function random<M extends Mode>(mode: M, constraints?: Constraints<M>): FindColorByMode<M>;
declare function random(mode?: undefined, constraints?: Constraints<"rgb">): Rgb;

export default random;
