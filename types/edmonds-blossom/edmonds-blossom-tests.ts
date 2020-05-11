import blossom from "edmonds-blossom";
const data = [
      [0, 1, 6],
      [0, 2, 10],
      [1, 2, 5]
    ];
blossom(data); // $ExpectType number[]
