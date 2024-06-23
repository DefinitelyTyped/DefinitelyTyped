// eslint-disable-next-line @typescript-eslint/ban-types
declare function SpeciesConstructor<C extends Function = new(...args: any) => any>(
    O: object,
    defaultConstructor?: C,
): C | (new(...args: any) => any);
export = SpeciesConstructor;
