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

/// <reference path="../Common/Math/init.d.ts" />
/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2RayCastOutput.d.ts" />
/// <reference path="b2RayCastInput.d.ts" />

module Box2D.Collision {

	/**
	* Axis aligned bounding box.
	**/
	export class b2AABB {

		/**
		* Lower bound.
		**/
		public lowerBound: b2Math.b2Vec2;

		/**
		* Upper bound.
		**/
		public upperBound: b2Math.b2Vec2;

		/**
		* Combines two AABBs into one with max values for upper bound and min values for lower bound.
		* @aabb1 First AABB to combine.
		* @aabb2 Second AABB to combine.
		* @return New AABB with max values from aabb1 and aabb2.
		**/
		public static Combine(aabb1: b2AABB, aabb2: b2AABB): b2AABB;

		/**
		* Combines two AABBs into one with max values for upper bound and min values for lower bound.  The result is stored in this AABB.
		* @aabb1 First AABB to combine.
		* @aabb2 Second AABB to combine.
		**/
		public Combine(aabb1: b2AABB, aabb2: b2AABB): void;

		/**
		* Determines if an AABB is contained within this one.
		* @aabb AABB to see if it is contained.
		* @return True if aabb is contained, otherwise false.
		**/
		public Contains(aabb: b2AABB): bool;

		/**
		* Gets the center of the AABB.
		* @return Center of this AABB.
		**/
		public GetCenter(): b2Math.b2Vec2;

		/**
		* Gets the extents of the AABB (half-widths).
		* @return Extents of this AABB.
		**/
		public GetExtents(): b2Math.b2Vec2;

		/**
		* Verify that the bounds are sorted.
		* @return True if the bounds are sorted, otherwise false.
		**/
		public IsValid(): bool;

		/**
		* Perform a precise raycast against this AABB.
		* @output Ray cast output values.
		* @input Ray cast input values.
		* @return True if the ray cast hits this AABB, otherwise false.
		**/
		public RayCast(output: b2RayCastOutput, input: b2RayCastInput): bool;

		/**
		* Tests if another AABB overlaps this AABB.
		* @other Other AABB to test for overlap.
		* @return True if other overlaps this AABB, otherwise false.
		**/
		public TestOverlap(other: b2AABB): bool;
	}
}
