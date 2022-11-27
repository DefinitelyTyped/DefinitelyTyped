import Glide from '../index';
import { Components } from '../components';
import EventsBus from '../core/event/events-bus';
import Focusing from './transformers/focusing';
import Gap from './transformers/gap';
import Grow from './transformers/grow';
import Peeking from './transformers/peeking';
import Rtl from './transformers/rtl';

export interface Transformers {
    Focusing: Focusing;
    Gap: Gap;
    Grow: Grow;
    Peeking: Peeking;
    Rtl: Rtl;
}

type MutatorFunction = (
    Glide: Glide,
    Components: Components,
    Events: EventsBus,
) => {
    mutate(translate: number): number;
};

export default MutatorFunction;
