// https://github.com/mrdoob/three.js/blob/master/examples/js/TypedArrayUtils.js

/** k-d Tree for typed arrays (e.g. for Float32Array) */
export namespace TypedArrayUtils {

  export namespace Kdtree {
    export class Node {
      obj: Float32Array;
      left: Node;
      right: Node;
      parent: Node;
      depth: number;
      pos: number;
    }
  }

  export class Kdtree {
    constructor(
        points: Float32Array, metric: (a: number[], b: number[]) => number,
        eleSize: number);
    nearest(point: Float32Array, maxNodes: number, maxDistance: number):
        Array<[Kdtree.Node, number]>;
  }

}
