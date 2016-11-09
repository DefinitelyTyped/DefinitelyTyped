// Type definitions for deep-diff
// Project: https://github.com/flitbit/diff/
// Definitions by: ZauberNerd <https://github.com/ZauberNerd/>, forabi <https://github.com/forabi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace deepDiff {
  export interface BaseDiff<T> {
    /**
     * indicates the kind of change; will be one of the following:
     * 'N' = indicates a newly added property/element
     * 'D' = indicates a property/element was deleted
     * 'E' = indicates a property/element was edited
     * 'A' = indicates a change occurred within an array
     */
    kind: 'N' |'D' | 'E' |'A';
    /** The property path (from the left-hand-side root) */
    path: ReadonlyArray<string>;
  }

  export interface NewDiff<T> extends BaseDiff<T> {
    kind: 'N';
    /** The value on the right-hand-side of the comparison (undefined if kind === 'D') */
    rhs: T;
  }

  export interface EditDiff<T> extends BaseDiff<T> {
    kind: 'E';
    /** The value on the left-hand-side of the comparison (undefined if kind === 'N') */
    lhs: T;
    rhs: T;
  }

  export interface DeleteDiff<T> extends BaseDiff<T> {
    kind: 'D';
    /** The value on the left-hand-side of the comparison (undefined if kind === 'N') */
    lhs: T;
  }

  export interface ArrayDiff<T> extends BaseDiff<T> {
    kind: 'A';
    /** The value on the right-hand-side of the comparison (undefined if kind === 'D') */
    rhs: T;
    /** The value on the left-hand-side of the comparison (undefined if kind === 'N') */
    lhs: T;
    /** Indicates the array index where the change occurred */
    index?: number;
    /** Contains a nested change record indicating the change that occurred at the array index */
    item?: Diff<T>;
    /** The property path (from the left-hand-side root) */
    path: ReadonlyArray<string> & { 0: number };
  }

  type Diff<T> = NewDiff<T> | EditDiff<T> | DeleteDiff<T> | ArrayDiff<T>;
  
  interface Accumulator<T> {
    push(o: T): void;
    length: number;
  }

  type DiffableObject<T> = { [id: string]: T } | Array<T>;
  /**
   * A function that calculates the differences between two objects
   */
  export type DiffFunction = <T>(
    /**
     * The left-hand operand; the origin object
     */
    origin?: DiffableObject<T>,
    /**
     * The right-hand operand; the object being compared structurally with the origin object.
     */
    target?: typeof origin,
    /**
     * An optional function that determines whether difference analysis should continue down the object graph
     */
    prefilter?: (path: string[], key: string) => boolean,
    /**
     * An optional accumulator/array (requirement is that it have a push function).
     * Each difference is pushed to the specified accumulator.
     */
    acc?: Accumulator<Diff<T>>,
  ) => Diff<T>[] | undefined;

  interface DeepDiff {
    /**
     * A function that calculates the differences between two objects.
     */
    diff: DiffFunction;

    isConflict(): boolean;

    /**
     * In a browser, deep-diff defines a global variable DeepDiff.
     * If there is a conflict in the global namespace you can restore the conflicting definition and assign deep-diff to another variable like this:
     * var deep = DeepDiff.noConflict();.
     */
    noConflict(): DeepDiff;

    /**
     * A function that calculates the differences between two objects and reports each to an observer function
     */
    observableDiff<T>(
      lhs: DiffableObject<T>,
      rhs: typeof lhs,
      changes: (diff: Diff<T>) => void,
      prefilter?: (path: string[], key: string) => boolean,
      path?: string[],
      key?: string,
      stack?: Diff<T>[],
    ): void;

    /**
     * A function that applies any structural differences from one object to another
     */
    applyDiff<T>(
      target: DiffableObject<T>,
      source: typeof target,
      filter: (target: typeof source, src: typeof source, change: Diff<T>) => boolean,
    ): void;

    /**
     * A function that applies a single change record to an origin object
     */
    applyChange<T>(
      target: DiffableObject<T>,
      source: typeof target,
      change: Diff<T>,
    ): void;
  
    /**
     * A function that reverts a single change record from a target object
     */
    revertChange<T>(
      target: DiffableObject<T>,
      source: typeof target,
      change: Diff<T>,
    ): void;
  }
}

declare const DeepDiff: deepDiff.DeepDiff;

declare module 'deep-diff' {
  const deepDiff: deepDiff.DeepDiff;
  export = deepDiff;
}
