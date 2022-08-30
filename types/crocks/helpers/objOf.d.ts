/**
 * objOf :: String -> a -> Object
 */
declare function objOf<A>(k: string, a: A): { [k: string]: A };
declare function objOf<A>(k: string): (a: A) => { [k: string]: A };

export default objOf;
