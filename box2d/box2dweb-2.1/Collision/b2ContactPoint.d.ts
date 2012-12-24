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
/// <reference path="b2ContactID.d.ts" />
/// <reference path="Shapes/b2Shape.d.ts" />

module Box2D.Collision {

	/**
	* This structure is used to report contact points.
	**/
	export class b2ContactPoint {

		/**
		* The combined friction coefficient.
		**/
		public friction: number;
		
		/**
		* The contact id identifies the features in contact.
		**/
		public id: b2ContactID;

		/**
		* Points from shape1 to shape2.
		**/
		public normal: b2Math.b2Vec2;

		/**
		* Position in world coordinates.
		**/
		public position: b2Math.b2Vec2;

		/**
		* The combined restitution coefficient.
		**/
		public restitution: number;

		/**
		* The separation is negative when shapes are touching.
		**/
		public separation: number;

		/**
		* The first shape.
		**/
		public shape1: Shapes.b2Shape;

		/**
		* The second shape.
		**/
		public shape2: Shapes.b2Shape;

		/**
		* Velocity of point on body2 relative to point on body1 (pre-solver).
		**/
		public velocity: b2Math.b2Vec2;
	}
}
