import * as YUKA from "yuka";

const points: YUKA.Vector3[] = [];

const params = {
    boundingVolume: "None",
};

fetch("points.json").then(response => response.json()).then((position: Array<[number, number, number]>) => {
    // add object to scene
    for (let i = 0; i < position.length; i += 3) {
        const x = position[i][0];
        const y = position[i][1];
        const z = position[i][2];
        points.push(new YUKA.Vector3(x, y, z));
    }
});

switch (params.boundingVolume) {
    case "BoundingSphere":
        const boundingSphere = new YUKA.BoundingSphere().fromPoints(points);
        break;
    case "AABB":
        const aabb = new YUKA.AABB().fromPoints(points);
        break;
    case "OBB":
        const obb = new YUKA.OBB().fromPoints(points);
        break;
    case "ConvexHull":
        const convexHull = new YUKA.ConvexHull().fromPoints(points);
        break;
    default:
}
