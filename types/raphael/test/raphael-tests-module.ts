import R, { RaphaelMatrix } from "raphael";

export function test() {
    // $ExpectType RaphaelPaper<"SVG" | "VML">
    R("#id", 10, 20);

    // $ExpectType RaphaelPaper<"SVG" | "VML">
    new R("#id", 10, 20);

    // $ExpectType number
    R.deg(90);

    const matrix: RaphaelMatrix = R.matrix(1, 0, 0, 1, 0, 0);

    // $ExpectType RaphaelMatrix
    matrix.clone();
}
