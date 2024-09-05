import { triangles3D } from "d3-3d";
import { select } from "d3-selection";

const triangles3d = triangles3D().scale(100).origin({ x: 480, y: 250 });

const projectedData = triangles3d([
    [
        { x: 0, y: -1, z: 0 },
        { x: -1, y: 1, z: 0 },
        { x: 1, y: 1, z: 0 },
    ],
]);

const triangles = select<SVGAElement, unknown>("svg").selectAll("path").data(projectedData);

console.log(triangles);
