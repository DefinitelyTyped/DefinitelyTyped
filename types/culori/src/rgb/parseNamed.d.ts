import named from "../colors/named";
import { Color } from "../common";

declare function parseNamed(color: keyof typeof named): Color;

export default parseNamed;
