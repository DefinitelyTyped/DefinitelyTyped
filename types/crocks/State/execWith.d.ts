import State from './State';

// execWith :: s -> State s a -> s
declare function execWith(val: unknown, state: State): any;
declare function execWith(val: unknown): (state: State) => any;

export default execWith;
