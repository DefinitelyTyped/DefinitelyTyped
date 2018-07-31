import { Matrix, Vector } from 'vectorious';

let vector: Vector;
let num: number;
let flag: boolean;
let str: string;
let numberArray: number[];

function testMatrix () {

    const a = new Matrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);
    const b = new Matrix([[1, 2, 3], [1, 2, 3], [1, 2, 3]]);

    let matrix: Matrix;
    let numberArrayArray: number[][];
    let anyArray: any[];

    matrix = Matrix.add(a, b);
    matrix = Matrix.subtract(a, b);
    matrix = Matrix.scale(matrix, 3);
    matrix = Matrix.product(a, b);
    matrix = Matrix.multiply(a, b);
    anyArray = Matrix.plu(matrix);
    matrix = Matrix.augment(a, b);
    flag = Matrix.equals(a, b);
    matrix = Matrix.identity(3);
    matrix = Matrix.magic(3);
    matrix = Matrix.zeros(3, 3);
    matrix = Matrix.ones(3, 3);

    matrix = matrix.add(b);
    matrix = matrix.subtract(b);
    matrix = matrix.scale(3);
    matrix = matrix.product(b);
    matrix = matrix.multiply(b);
    matrix = matrix.transpose();
    matrix = matrix.inverse();
    matrix = matrix.gauss();
    numberArray = matrix.lu();
    anyArray = matrix.plu();
    matrix = matrix.lusolve(b, new Int32Array(3));
    matrix = matrix.solve(b);
    matrix = matrix.augment(b);
    vector = matrix.diag();
    num = matrix.trace();
    num = matrix.determinant();
    flag = matrix.equals(b);
    num = matrix.get(3, 3);
    matrix = matrix.set(3, 3, 3);
    matrix = matrix.swap(3, 3);
    matrix = matrix.map((element) => 3);
    matrix = matrix.each((element) => {});
    matrix.reduce((memo, element) => 3, 3);
    num = matrix.rank();
    str = matrix.toString();
    numberArrayArray = matrix.toArray();
}

function testVector () {

    const a = new Vector([1, 2, 3]);
    const b = new Vector([4, 5, 6]);

    vector = Vector.add(a, b);
    vector = Vector.subtract(a, b);
    num = Vector.dot(a, b);
    vector = Vector.scale(a, 3);
    num = Vector.angle(a, b);
    flag = Vector.equals(a, b);
    vector = Vector.combine(a, b);
    vector = Vector.zeros(3);
    vector = Vector.ones(3);
    vector = Vector.range(0, 5);

    vector = vector.add(b);
    vector = vector.subtract(b);
    vector = vector.scale(3);
    vector = vector.normalize();
    vector = vector.project(b);
    num = vector.dot(b);
    num = vector.magnitude();
    num = vector.angle(b);
    flag = vector.equals(b);
    num = vector.get(3);
    num = vector.min();
    num = vector.max();
    vector = vector.set(3,3);
    vector = vector.combine(b);
    vector = vector.push(3);
    vector = vector.map((element) => 3);
    vector = vector.each((element) => {});
    vector.reduce((memo, element) => 3, 3);
    str = vector.toString();
    numberArray = vector.toArray();
}