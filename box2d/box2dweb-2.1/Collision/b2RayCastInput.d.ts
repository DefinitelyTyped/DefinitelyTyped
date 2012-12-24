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

module Box2D.Collision {
	
	/**
	* Ray cast input data.
	**/
	export class b2RayCastInput {

		/**
		* Truncate the ray to reach up to this fraction from p1 to p2
		**/
		public maxFraction: number;

		/**
		* The start point of the ray.
		**/
		public p1: b2Math.b2Vec2;

		/**
		* The end point of the ray.
		**/
		public p2: b2Math.b2Vec2;
		
		/**
		* Creates a new ray cast input.
		* @p1 Start point of the ray, default = null.
		* @p2 End point of the ray, default = null.
		* @maxFraction Truncate the ray to reach up to this fraction from p1 to p2.
		**/
		constructor (p1?: b2Math.b2Vec2, p2?: b2Math.b2Vec2, maxFraction?: number);
	}
}
