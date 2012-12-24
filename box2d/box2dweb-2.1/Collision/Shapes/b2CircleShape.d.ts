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
	* A circle shape.
	**/
	export class b2CircleShape extends b2Shape {

		/**
		* Creates a new circle shape.
		**/
		constructor (radius?:number);

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
		* Copies the circle shape.
		* @return Copy of this circle shape.
		**/
		public Copy(): b2CircleShape;

		/**
		* Get the local position of this circle in its parent body.
		* @return This circle's local position.
		**/
		public GetLocalPosition(): b2Math.b2Vec2;

		/**
		* Get the radius of the circle.
		* @return This circle's radius.
		**/
		public GetRadius(): number;

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
		* Set the circle shape values from another shape.
		* @other The other circle shape to copy values from.
		**/
		public Set(other: b2CircleShape): void;

		/**
		* Set the local position of this circle in its parent body.
		* @position The new local position of this circle.
		**/
		public SetLocalPosition(position: b2Math.b2Vec2): void;

		/**
		* Set the radius of the circle.
		* @radius The new radius of the circle.
		**/
		public SetRadius(radius: number): void;
		
		/**
		* Test a point for containment in this shape. This only works for convex shapes.
		* @xf Shape world transform.
		* @p Point to test against, in world coordinates.
		* @return True if the point is in this shape, otherwise false.
		**/
		public TestPoint(xf: b2Math.b2Transform, p: b2Math.b2Vec2): bool;
	}
}
