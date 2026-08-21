import { Polyhedron } from "./Polyhedron";

/**
 * Implementation of the separating axis theorem (SAT). Used to detect intersections
 * between convex polyhedra. The code is based on the presentation
 * {@link http://twvideo01.ubm-us.net/o1/vault/gdc2013/slides/822403Gregorius_Dirk_TheSeparatingAxisTest.pdf The Separating Axis Test between convex polyhedra}
 * by Dirk Gregorius (Valve Software) from GDC 2013.
 */
export class SAT {
    /**
     * Returns true if the given convex polyhedra intersect. A polyhedron is just
     * an array of {@link Polygon} objects.
     *
     * @param polyhedronA - The first convex polyhedron.
     * @param polyhedronB - The second convex polyhedron.
     * @return Whether there is an intersection or not.
     */
    intersects(polyhedronA: Polyhedron, polyhedronB: Polyhedron): boolean;
}
