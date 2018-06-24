import ObjFileParser, { ObjModel, ObjFile } from 'obj-file-parser'

let testObjFile = `
# cube.obj
# Example object

g cube
 
v  0.0  0.0  0.0
v  0.0  0.0  1.0
v  0.0  1.0  0.0
v  0.0  1.0  1.0
v  1.0  0.0  0.0
v  1.0  0.0  1.0
v  1.0  1.0  0.0
v  1.0  1.0  1.0

vn  0.0  0.0  1.0
vn  0.0  0.0 -1.0
vn  0.0  1.0  0.0
vn  0.0 -1.0  0.0
vn  1.0  0.0  0.0
vn -1.0  0.0  0.0
 
g cube-faces

f  1//2  7//2  5//2
f  1//2  3//2  7//2 
f  1//6  4//6  3//6 
f  1//6  2//6  4//6 
f  3//3  8//3  7//3 
f  3//3  4//3  8//3 
f  5//5  7//5  8//5 
f  5//5  8//5  6//5 
f  1//4  5//4  6//4 
f  1//4  6//4  2//4 
f  2//1  6//1  8//1 
f  2//1  8//1  4//1`

// Create parser and load test OBJ
let parser = new ObjFileParser(testObjFile, 'test');
let file = parser.parse();
let model = file.models[0];

let name = model.name;       // Prints "test"
let face = model.faces[0]    // Prints faces object 

// gets { vertexIndex: 1, textureCoordsIndex: 0, vertexNormalIndex: 2 }
let vert = face.vertices[0];
// gets { x: 0, y: 0, z: 1 }
let vertPoints = model.vertices[vert.vertexIndex];