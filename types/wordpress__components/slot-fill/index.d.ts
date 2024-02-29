import { FC } from "react";

import Provider, { Consumer } from "./context";
import Fill from "./fill";
import Slot from "./slot";

export { Consumer, Fill, Provider, Slot };

// prettier-ignore
export function createSlotFill(name: string): {
    Fill: FC<Omit<Fill.Props, "name">>;
    Slot: FC<Omit<Slot.Props, "name">>;
};
