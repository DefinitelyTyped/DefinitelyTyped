import * as YUKA from "yuka";

const params = {
    branchingFactor: 2,
    primitivesPerNode: 1,
    depth: 5,
    meshVisible: true,
};

const vertices = new Float32Array(10);
const meshGeometry = new YUKA.MeshGeometry(vertices);

const bvh = new YUKA.BVH(params.branchingFactor, params.primitivesPerNode, params.depth);
bvh.fromMeshGeometry(meshGeometry);
