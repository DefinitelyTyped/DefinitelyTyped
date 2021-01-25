// Type definitions for omit-deep-lodash 1.1
// Project: https://github.com/odynvolk/omit-deep-lodash
// Definitions by: Daniel Chong <https://github.com/dZefa>
//                 Bartosz Kopciuch <https://github.com/ideffix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:ban-types
type Primitive = string | Function | number | boolean | symbol | undefined | null;
type DeepOmitArray<T extends any[], K> = {
    [P in keyof T]: DeepOmit<T[P], K>;
};

type DeepOmit<Input, OmittedKeys> = Input extends Primitive
    ? Input
    : {
          [P in Exclude<keyof Input, OmittedKeys>]: Input[P] extends infer TP
              ? TP extends Primitive
                  ? TP
                  : TP extends any[]
                  ? DeepOmitArray<TP, OmittedKeys>
                  : DeepOmit<TP, OmittedKeys>
              : never;
      };

declare function omitDeep<Input, OmittedKeys extends string | string[]>(
    input: Input,
    props: OmittedKeys,
): DeepOmit<Input, OmittedKeys>;
declare function omitDeep<Input, OmittedKeys extends string[]>(
    input: Input,
    ...props: OmittedKeys
): DeepOmit<Input, OmittedKeys>;

export = omitDeep;
