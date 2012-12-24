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

//import b2Math = Box2D.Common.Math;

module Box2D.Collision.Shapes {

	/**
	* A shape is used for collision detection. Shapes are created in b2Body. You can use shape for collision detection before they are attached to the world.
	* Warning: you cannot reuse shapes.
	**/
	export class b2Shape {

		/**
		* Return value for TestSegment indicating a hit.
		**/
		public static e_hitCollide: number;

		/**
		* Return value for TestSegment indicating a miss.
		**/
		public static e_missCollide: number;

		/**
		* Return value for TestSegment indicating that the segment starting point, p1, is already inside the shape.
		**/
		public static startsInsideCollide: number;

		// Note: these enums are public in the source but no referenced by the documentation
		public static e_unknownShape: number;
		public static e_circleShape: number;
		public static e_polygonShape: number;
		public static e_edgeShape: number;
		public static e_shapeTypeCount: number;

		/**
		* Creates a new b2Shape.
		**/
		constructor ();

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
		public Copy(): b2Shape;

		/**
		* Get the type of this shape. You can use this to down cast to the concrete shape.
		**/
		public GetType(): number;

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
		* Set the shape values from another shape.
		* @other The other shape to copy values from.
		**/
		public Set(other: b2Shape): void;

		/**
		* Test if two shapes overlap with the applied transforms.
		* @shape1 shape to test for overlap with shape2.
		* @transform1 shape1 transform to apply.
		* @shape2 shape to test for overlap with shape1.
		* @transform2 shape2 transform to apply.
		* @return True if shape1 and shape2 overlap, otherwise false.
		**/
		public static TestOverlap(
			shape1: b2Shape,
			transform1: b2Math.b2Transform,
			shape2: b2Shape,
			transform2: b2Math.b2Transform): bool;

		/**
		* Test a point for containment in this shape. This only works for convex shapes.
		* @xf Shape world transform.
		* @p Point to test against, in world coordinates.
		* @return True if the point is in this shape, otherwise false.
		**/
		public TestPoint(xf: b2Math.b2Transform, p: b2Math.b2Vec2): bool;
	}
}
