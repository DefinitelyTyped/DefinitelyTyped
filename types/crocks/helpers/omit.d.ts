/**
 * omit :: [ String ] -> Object -> Object
 */
declare function omit<O, K extends string>(ks: K[], o: O): Omit<O, K>;
declare function omit<O, K extends string>(ks: K[]): (o: O) => Omit<O, K>;

export default omit;
