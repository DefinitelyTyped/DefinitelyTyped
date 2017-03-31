// Type definitions for tcomb 1.0
// Project: http://gcanti.github.io/tcomb/guide/index.html
// Definitions by: Hans Windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Original Definitions by: Jed Mao <https://github.com/jedmao>
declare namespace TComb {
  interface tcomb {
    format(format: string, ...values: any[]): string;
    getFunctionName(fn: Function): string;
    getTypeName(type: TCombBase): string;
    mixin(target: {}, source: {}, overwrite?: boolean): any;
    slice: typeof Array.prototype.slice;
    shallowCopy(x: TCombBase): TCombBase;
    update(instance: any, spec: {} ): TCombBase;
    assert(condition: boolean, message?: string, ...values: any[]): void;
    fail(message?: string): void;
    Any: Any_Static;
    Nil: Nil_Static;
    Str: Str_Static;
    Num: Num_Static;
    Bool: Bool_Static;
    Arr: Arr_Static;
    Obj: Obj_Static;

    Func: Func_Static;
    func: {
        (domain: TCombBase[], codomain: TCombBase, name?: string): Func_Static;
        (domain: TCombBase, codomain: TCombBase, name?: string): Func_Static;
    };
    Err: Err_Static;
    Re: Re_Static;
    Dat: Dat_Static;
    Type: Type_Static;
    irreducible(name: string, is: TypePredicate): TCombBase;
    struct(props: Object, name?: string): Struct_Static;

    Union: Union_Static;
    Maybe: Maybe_Static;

    enums(map: Object, name?: string): TCombBase;
    union(types: TCombBase[], name?: string): Union_Static;
    maybe(type: TCombBase, name?: string): Maybe_Static;

    Tuple: Tuple_Static;
    tuple(types: TCombBase[], name?: string): Tuple_Static;

    Subtype: Subtype_Static;

    List: List_Static;
    list(type: TCombBase, name?: string): List_Static;

    Dict: Dict_Static;
    dict(domain: TCombBase, codomain: TCombBase, name?: string): Dict_Static;

    subtype(type: TCombBase, predicate: TypePredicate, name?: string): Subtype_Static;
  }

  interface TCombBase {
    meta: {
      /**
       * The type kind, equal to "irreducible" for irreducible types.
       */
      kind: string;
      /**
       * The type name.
       */
      name: string;
    };
    displayName: string;
    is(value: any): boolean;
    update(instance: any, spec: {}): TCombBase;
  }

  interface TypePredicate {
    (x: any): Bool_Instance;
  }

  interface Any_Instance {}

  interface Any_Static extends TCombBase {
    new (value: any): Any_Instance;
    (value: any): Any_Instance;
  }

  interface Nil_Instance {}

  interface Nil_Static extends TCombBase {
    new (value: any): Nil_Instance;
    (value: any): Nil_Instance;
  }

  interface Str_Instance extends String {}

  interface Str_Static extends TCombBase {
    new (value: string): Str_Instance;
    (value: string): Str_Instance;
    meta: {
      /**
       * The type kind, equal to "irreducible" for irreducible types.
       */
      kind: string;
      /**
       * The type name.
       */
      name: string;
      /**
       * The type predicate.
       */
      is: TypePredicate;
    };
  }

  interface Num_Instance extends Number {}

  interface Num_Static extends TCombBase {
    new (value: number): Num_Instance;
    (value: number): Num_Instance;
  }

  interface Bool_Instance extends Boolean {}

  interface Bool_Static extends TCombBase {
    new (value: boolean): Bool_Instance;
    (value: boolean): Bool_Instance;
  }

  interface Arr_Instance extends Array<any> {}

  interface Arr_Static extends TCombBase {
    new (value: any[]): Arr_Instance;
    (value: any[]): Arr_Instance;
  }

  interface Obj_Instance extends Object {}

  interface Obj_Static extends TCombBase {
    new (value: Object): Obj_Instance;
    (value: Object): Obj_Instance;
  }

  interface Func_Instance extends Function {}

  interface Func_Static extends TCombBase {
    new (value: Function): Func_Instance;
    (value: Function): Func_Instance;
  }

  interface Err_Instance extends Error {}

  interface Err_Static extends TCombBase {
    new (value: Error): Err_Instance;
    (value: Error): Err_Instance;
  }

  interface Re_Instance extends RegExp {}

  interface Re_Static extends TCombBase {
    new (value: RegExp): Re_Instance;
    (value: RegExp): Re_Instance;
  }

  interface Dat_Instance extends Date {}

  interface Dat_Static extends TCombBase {
    new (value: Date): Dat_Instance;
    (value: Date): Dat_Instance;
  }

  interface Type_Instance {}

  interface Type_Static extends TCombBase {
    new (value: any): Type_Instance;
    (value: any): Type_Instance;
  }

  /**
   * @param name - The type name.
   * @param is - A predicate.
   */

  /**
   * @param props - A hash whose keys are the field names and the values are the fields types.
   * @param name - Useful for debugging purposes.
   */
  interface Struct_Static extends TCombBase {
    new (value: any, mutable?: boolean): Struct_Instance;
    (value: any, mutable?: boolean): Struct_Instance;
    meta: {
      kind: string;
      name: string;
      props: any[];
    };
    /**
     * @param mixins - Contains the new props.
     * @param name - Useful for debugging purposes.
     */
    extend(mixins: Object, name?: string): Struct_Static;
    /**
     * @param mixins - Contains the new props.
     * @param name - Useful for debugging purposes.
     */
    extend(mixins: Struct_Static, name?: string): Struct_Static;
    /**
     * @param mixins - Contains the new props.
     * @param name - Useful for debugging purposes.
     */
    extend(mixins: Object[], name?: string): Struct_Static;
    /**
     * @param mixins - Contains the new props.
     * @param name - Useful for debugging purposes.
     */
    extend(mixins: Struct_Static[], name?: string): Struct_Static;
  }

  interface Struct_Instance {}

  /**
   * @param map - A hash whose keys are the enums (values are free).
   * @param name - Useful for debugging purposes.
   */
  namespace enums {
    /**
     * @param keys - Array of enums.
     * @param name - Useful for debugging purposes.
     */
    function of(keys: string[], name?: string): TCombBase;
    /**
     * @param keys - String of enums separated by spaces.
     * @param name - Useful for debugging purposes.
     */
    function of(keys: string, name?: string): TCombBase;
  }

  /**
   * @param name - Useful for debugging purposes.
   */
  interface Union_Static extends TCombBase {
    new (value: any, mutable?: boolean): Union_Instance;
    (value: any, mutable?: boolean): Union_Instance;
    meta: {
      kind: string;
      name: string;
      types: TCombBase[];
    };
    dispatch(x: any): TCombBase;
  }

  interface Union_Instance {}

  /**
   * @param type - The wrapped type.
   * @param name - Useful for debugging purposes.
   */
  interface Maybe_Static extends TCombBase {
    new (value: any, mutable?: boolean): Maybe_Instance;
    (value: any, mutable?: boolean): Maybe_Instance;
    meta: {
      kind: string;
      name: string;
      typee: TCombBase;
    };
  }

  interface Maybe_Instance {}

  /**
   * @param name - Useful for debugging purposes.
   */
  interface Tuple_Static extends TCombBase {
    new (value: any, mutable?: boolean): Tuple_Instance;
    (value: any, mutable?: boolean): Tuple_Instance;
    meta: {
      kind: string;
      name: string;
      types: TCombBase[];
    };
  }

  interface Tuple_Instance {}

  /**
   * Combines old types into a new one.
   * @param type - A type already defined.
   * @param name - Useful for debugging purposes.
   */
  interface Subtype_Static extends TCombBase {
    new (value: any, mutable?: boolean): Subtype_Instance;
    (value: any, mutable?: boolean): Subtype_Instance;
    meta: {
      kind: string;
      name: string;
      type: TCombBase;
      predicate: TypePredicate;
    };
  }

  interface Subtype_Instance {}

  /**
   * @param type - The type of list items.
   * @param name - Useful for debugging purposes.
   */
  function list(type: TCombBase, name?: string): List_Static;

  interface List_Static extends TCombBase {
    new (value: any, mutable?: boolean): List_Instance;
    (value: any, mutable?: boolean): List_Instance;
    meta: {
      kind: string;
      name: string;
      'type': TCombBase;
    };
  }

  interface List_Instance {}

  /**
   * @param domain - The type of keys.
   * @param codomain - The type of values.
   * @param name - Useful for debugging purposes.
   */
  interface Dict_Static extends TCombBase {
    new (value: any, mutable?: boolean): Dict_Instance;
    (value: any, mutable?: boolean): Dict_Instance;
    meta: {
      kind: string;
      name: string;
      domain: TCombBase;
      codomain: TCombBase;
    };
  }

  interface Dict_Instance {}

  /**
   * @param type - The type of the function's argument.
   * @param codomain - The type of the function's return value.
   * @param name - Useful for debugging purposes.
   */
  /**
   * @param type - The list of types of the function's arguments.
   * @param codomain - The type of the function's return value.
   * @param name - Useful for debugging purposes.
   */
  interface Func_Static extends TCombBase {
    new (value: any, mutable?: boolean): Func_Instance;
    (value: any, mutable?: boolean): Func_Instance;
    meta: {
      kind: string;
      name: string;
      domain: any;
      codomain: TCombBase;
    };
    of(fn: Function): Function;
  }

  interface Func_Instance {}
}

declare var t: TComb.tcomb;

declare module "tcomb" {
  export = t;
}
