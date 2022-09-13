() => {
    // $ExpectType RaphaelPaper<"SVG" | "VML">
    Raphael("#id", 10, 20);

    // $ExpectType RaphaelPaper<"SVG" | "VML">
    new Raphael("#id", 10, 20);

    // $ExpectType number
    Raphael.deg(90);

    const matrix: import("raphael").RaphaelMatrix = Raphael.matrix(1, 0, 0, 1, 0, 0);

    // $ExpectType RaphaelMatrix
    matrix.clone();
};
