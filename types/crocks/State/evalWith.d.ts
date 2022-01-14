import State from './State';

// evalWith :: s -> State s a -> a
declare function evalWith(val: unknown, state: State): any;
declare function evalWith(val: unknown): (state: State) => any;

export default evalWith;
