/**
 * pick :: Foldable f => f String -> Object -> Object
 */
declare function pick<O, K extends string>(ks: K[], o: O): Pick<O, Exclude<keyof O, Exclude<keyof O, K>>>;
declare function pick<O, K extends string>(ks: K[]): (o: O) => Pick<O, Exclude<keyof O, Exclude<keyof O, K>>>;

export default pick;
