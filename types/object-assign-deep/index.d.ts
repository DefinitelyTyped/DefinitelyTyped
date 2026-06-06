declare const objectAssignDeep: ObjectConstructor["assign"];

interface Options {
    arrayBehaviour: "replace" | "merge";
}

interface objectAssignDeep {
    noMutate: ObjectConstructor["assign"];

    withOptions<T, U>(target: T, objects: [U], options: Options): T & U;
    withOptions<T, U, V>(target: T, objects: [U, V], options: Options): T & U & V;
    withOptions<T, U, V, W>(target: T, objects: [U, V, W], options: Options): T & U & V & W;
    withOptions(target: any, objects: any[], options: Options): any;
}

export = objectAssignDeep;
