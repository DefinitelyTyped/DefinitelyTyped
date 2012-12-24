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
	* An edge shape.
	**/
	export class b2EdgeShape extends b2Shape {

		/**
		* Creates a new edge shape.
		**/
		constructor (v1: b2Math.b2Vec2, v2: b2Math.b2Vec2);

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
		* Get the distance from vertex1 to vertex2.
		* @return Distance from vertex1 to vertex2.
		**/
		public GetLength(): number;

		/**
		* Get the local position of vertex1 in the parent body.
		* @return Local position of vertex1 in the parent body.
		**/
		public GetVertex1(): b2Math.b2Vec2;

		/**
		* Get the local position of vertex2 in the parent body.
		* @return Local position of vertex2 in the parent body.
		**/
		public GetVertex2(): b2Math.b2Vec2;

		/**
		* Get a core vertex 1 in local coordinates.  These vertices represent a smaller edge that is used for time of impact.
		* @return core vertex 1 in local coordinates.
		**/
		public GetCoreVertex1(): b2Math.b2Vec2;

		/**
		* Get a core vertex 2 in local coordinates.  These vertices represent a smaller edge that is used for time of impact.
		* @return core vertex 2 in local coordinates.
		**/
		public GetCoreVertex2(): b2Math.b2Vec2;

		/**
		* Get a perpendicular unit vector, pointing from the solid side to the empty side.
		* @return Normal vector.
		**/
		public GetNormalVector(): b2Math.b2Vec2;

		/**
		* Get a parallel unit vector, pointing from vertex 1 to vertex 2.
		* @return Vertex 1 to vertex 2 directional vector.
		**/
		public GetDirectionVector(): b2Math.b2Vec2;

		/**
		* Returns a unit vector halfway between direction and previous direction.
		* @return Halfway unit vector between direction and previous direction.
		**/
		public GetCorner1Vector(): b2Math.b2Vec2;

		/**
		* Returns a unit vector halfway between direction and previous direction.
		* @return Halfway unit vector between direction and previous direction.
		**/
		public GetCorner2Vector(): b2Math.b2Vec2;

		/**
		* Determines if the first corner of this edge bends towards the solid side.
		* @return True if convex, otherwise false.
		**/
		public Corner1IsConvex(): bool;

		/**
		* Determines if the second corner of this edge bends towards the solid side.
		* @return True if convex, otherwise false.
		**/
		public Corner2IsConvex(): bool;

		/**
		* Get the first vertex and apply the supplied transform.
		* @return First vertex with xf transform applied.
		**/
		public GetFirstVertex(xf: b2Math.b2Transform): b2Math.b2Vec2;

		/**
		* Get the next edge in the chain.
		* @return Next edge shape or null if there is no next edge shape.
		**/
		public GetNextEdge(): b2EdgeShape;

		/**
		* Get the previous edge in the chain.
		* @return Previous edge shape or null if there is no previous edge shape.
		**/
		public GetPrevEdge(): b2EdgeShape;

		/**
		* Get the support point in the given world direction with the supplied transform.
		* @xf Transform to apply.
		* @dX X world direction.
		* @dY Y world direction.
		* @return Support point.
		**/
		public Support(xf: b2Math.b2Transform, dX: number, dY: number): b2Math.b2Vec2;

		/**
		* Cast a ray against this shape.
		* @output Ray cast results, this argument is `out`.
		* @input Ray cast input parameters.
		* @transform The transform to be applied to the shape.
		* @return True if the ray hits the shape, otherwise false.
		**/
		public RayCast(
			output: b2RayCastOutput,
			input: b2RayCastInput,
			transform: b2Math.b2Transform): bool;

		/**
		* Test a point for containment in this shape. This only works for convex shapes.
		* @xf Shape world transform.
		* @p Point to test against, in world coordinates.
		* @return True if the point is in this shape, otherwise false.
		**/
		public TestPoint(xf: b2Math.b2Transform, p: b2Math.b2Vec2): bool;
	}
}
