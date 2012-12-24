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
/// <reference path="b2AABB.d.ts" />

module Box2D.Collision {

	/**
	* A line in space between two given vertices.
	**/
	export class b2Segment {

		/**
		* The starting point.
		**/
		public p1: b2Math.b2Vec2;

		/**
		* The ending point.
		**/
		public p2: b2Math.b2Vec2;

		/**
		* Extends or clips the segment so that it's ends lie on the boundary of the AABB.
		* @aabb AABB to extend/clip the segement.
		**/
		public Extend(aabb: b2AABB): void;

		/**
		* See Extend, this works on the ending point.
		* @aabb AABB to extend/clip the ending point.
		**/
		public ExtendBackward(aabb: b2AABB): void;

		/**
		* See Extend, this works on the starting point.
		* @aabb AABB to extend/clip the starting point.
		**/
		public ExtendForward(aabb: b2AABB): void;

		/**
		* Ray cast against this segment with another segment.
		* @lambda returns the hit fraction. You can use this to compute the contact point * p = (1 - lambda) * segment.p1 + lambda * segment.p2 * @normal Normal at the contact point.  If there is no intersection, the normal is not set.
		* @segment Defines the begining and end point of the ray cast.
		* @maxLambda a number typically in the range [0,1].
		* @return True if there is an intersection, otherwise false.
		**/
		public TestSegment(
			lambda: number[],
			normal: b2Math.b2Vec2,
			segment: b2Segment,
			maxLambda: number): bool;
	}
}
