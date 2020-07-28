import { FC } from 'react';

import Slot from './slot';
import Fill from './fill';
import Provider, { Consumer } from './context';

export { Slot, Fill, Provider, Consumer };

// prettier-ignore
export function createSlotFill(name: string): {
    Fill: FC<Omit<Fill.Props, 'name'>>;
    Slot: FC<Omit<Slot.Props, 'name'>>;
};
