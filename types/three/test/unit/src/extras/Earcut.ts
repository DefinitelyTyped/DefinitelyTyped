import { Earcut } from "three/src/extras/Earcut";

const triangles = Earcut.triangulate([0, 0, 1, 0, 1, 1, 0, 1]); // $ExpectType number[]
