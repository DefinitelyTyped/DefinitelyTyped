const testObjFile = `
# cube.obj
# Example object

o cube

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
f  2//1  8//1  4//1`;

// Create parser and load test OBJ
const parser = new ObjFileParser(testObjFile, 'test');
const file = parser.parse();

// get first model in file
const model: ObjFileParser.ObjModel = file.models[0];
// gets object name
const name: string = model.name;
// gets first face in model
const face: ObjFileParser.Face = model.faces[0];
// gets first vertex in face
const faceVert: ObjFileParser.FaceVertex = face.vertices[0];
// gets vertex
const vertPoints: ObjFileParser.Vertex = model.vertices[faceVert.vertexIndex];
// gets x value of vertex
const x = vertPoints.x;
