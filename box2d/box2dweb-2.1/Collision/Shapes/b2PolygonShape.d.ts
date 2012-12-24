/**
* Box2DWeb-2.1.d.ts Copyright (c) 2012 Josh Baldwin http://github.com/jbaldwin/box2dweb.d.ts
* There are a few competing javascript Box2D ports.
* This definitions file is for Box2dWeb.js ->
*   http://code.google.com/p/box2dweb/
*
* Box2D C++ Copyright (c) 2006-2007 Erin Catto http://www.gphysics.com
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
*    claim that you wrote the original software. If you use this software
*    in a product, an acknowledgment in the product documentation would be
*    appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
*    misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
**/

/// <reference path="../../Common/Math/init.d.ts" />
/// <reference path="../../Common/Math/b2Transform.d.ts" />
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="../b2AABB.d.ts" />
/// <reference path="b2MassData.d.ts" />
/// <reference path="b2Shape.d.ts" />

module Box2D.Collision.Shapes {

	/**
	* Convex polygon. The vertices must be in CCW order for a right-handed coordinate system with the z-axis coming out of the screen.
	**/
	export class b2PolygonShape extends b2Shape {
		
		/**
		* Creates a b2PolygonShape from a vertices list. This assumes the vertices define a convex polygon.  It is assumed that the exterior is the the right of each edge.
		* @vertices List of vertices to create the polygon shape from.
		* @vertexCount Number of vertices in the shape, default value is 0 and in the box2dweb.js code it is ignored.
		* @return Convex polygon shape.
		**/
		public static AsArray(vertices: b2Math.b2Vec2[], vertexCount?: number): b2PolygonShape;

		/**
		* Build vertices to represent an axis-aligned box.
		* @hx The half-width.
		* @hy The half-height.
		* @return Box polygon shape.
		**/
		public static AsBox(hx: number, hy: number): b2PolygonShape;

		/**
		* Creates a single edge from two vertices.
		* @v1 First vertex.
		* @v2 Second vertex.
		* @return Edge polygon shape.
		**/
		public static AsEdge(v1: b2Math.b2Vec2, b2: b2Math.b2Vec2): b2PolygonShape;

		/**
		* Build vertices to represent an oriented box.
		* @hx The half-width.
		* @hy The half-height.
		* @center The center of the box in local coordinates, default is null (no center?)
		* @angle The rotation of the box in local coordinates, default is 0.0.
		* @return Oriented box shape.
		**/
		public static AsOrientedBox(hx: number, hy: number, center?: b2Math.b2Vec2, angle?: number): b2PolygonShape;

		/**
		* This assumes the vertices define a convex polygon.  It is assumed that the exterior is the the right of each edge.
		* @vertices List of vertices to create the polygon shape from.
		* @vertexCount The number of vertices, default is 0 and in the box2dweb.js code it is ignored.
		* @return Convex polygon shape.
		**/
		public static AsVector(vertices: b2Math.b2Vec2[], vertexCount?: number): b2PolygonShape;

		/**
		* Given a transform, compute the associated axis aligned bounding box for this shape.
		* @aabb Calculated AABB, this argument is `out`.
		* @xf Transform to calculate the AABB.
		**/
		public ComputeAABB(aabb: b2AABB, xf: b2Math.b2Transform): void;

		/**
		* Compute the mass properties of this shape using its dimensions and density. The inertia tensor is computed about the local origin, not the centroid.
		* @massData Calculate the mass, this argument is `out`.
		**/
		public ComputeMass(massData: b2MassData, density: number): void;

		/**
		* Compute the volume and centroid of this shape intersected with a half plane
		* @normal The surface normal.
		* @offset The surface offset along the normal.
		* @xf The shape transform.
		* @c The centroid, this argument is `out`.
		**/
		public ComputeSubmergedArea(
			normal: b2Math.b2Vec2,
			offset: number,
			xf: b2Math.b2Transform,
			c: b2Math.b2Vec2): number;

		/**
		* Clone the shape.
		**/
		public Copy(): b2PolygonShape;

		/**
		* Get the edge normal vectors. There is one for each vertex.
		* @return List of edge normal vectors for each vertex.
		**/
		public GetNormals(): b2Math.b2Vec2[];

		/**
		* Get the supporting vertex index in the given direction.
		* @d Direction to look.
		* @return Vertex index supporting the direction.
		**/
		public GetSupport(d: b2Math.b2Vec2): number;

		/**
		* Get the supporting vertex in the given direction.
		* @d Direciton to look.
		* @return Vertex supporting the direction.
		**/
		public GetSupportVertex(d: b2Math.b2Vec2): b2Math.b2Vec2;

		/**
		* Get the vertex count.
		* @return Vertex count.
		**/
		public GetVertexCount(): number;

		/**
		* Get the vertices in local coordinates.
		* @return List of the vertices in local coordinates.
		**/
		public GetVertices(): b2Math.b2Vec2[];

		/**
		* Cast a ray against this shape.
		* @output Ray cast results, this argument is `out`.
		* @input Ray cast input parameters.
		* @transform The transform to be applied to the shape.
		* @return True if the ray hits the shape, otherwise false.
		**/
		public RayCast(output: b2RayCastOutput,
			input: b2RayCastInput,
			transform: b2Math.b2Transform): bool;

		/**
		* Set the shape values from another shape.
		* @other The other shape to copy values from.
		**/
		public Set(other: b2Shape): void;

		/**
		* Copy vertices. This assumes the vertices define a convex polygon.  It is assumed that the exterior is the the right of each edge.
		* @vertices List of vertices to create the polygon shape from.
		* @vertexCount Number of vertices in the shape, default value is 0 and in the box2dweb.js code it is ignored.
		* @return Convex polygon shape.
		**/
		public SetAsArray(vertices: b2Math.b2Vec2[], vertexCount?: number): void;

		/**
		* Build vertices to represent an axis-aligned box.
		* @hx The half-width.
		* @hy The half-height.
		* @return Box polygon shape.
		**/
		public SetAsBox(hx: number, hy: number): void;

		/**
		* Creates a single edge from two vertices.
		* @v1 First vertex.
		* @v2 Second vertex.
		* @return Edge polygon shape.
		**/
		public SetAsEdge(v1: b2Math.b2Vec2, b2: b2Math.b2Vec2): void;

		/**
		* Build vertices to represent an oriented box.
		* @hx The half-width.
		* @hy The half-height.
		* @center The center of the box in local coordinates, default is null (no center?)
		* @angle The rotation of the box in local coordinates, default is 0.0.
		* @return Oriented box shape.
		**/
		public SetAsOrientedBox(hx: number, hy: number, center?: b2Math.b2Vec2, angle?: number): void;

		/**
		* This assumes the vertices define a convex polygon.  It is assumed that the exterior is the the right of each edge.
		* @vertices List of vertices to create the polygon shape from.
		* @vertexCount The number of vertices, default is 0 and in the box2dweb.js code it is ignored.
		* @return Convex polygon shape.
		**/
		public SetAsVector(vertices: any[], vertexCount?: number): void;

		/**
		* Test a point for containment in this shape. This only works for convex shapes.
		* @xf Shape world transform.
		* @p Point to test against, in world coordinates.
		* @return True if the point is in this shape, otherwise false.
		**/
		public TestPoint(xf: b2Math.b2Transform, p: b2Math.b2Vec2): bool;
	}
}
