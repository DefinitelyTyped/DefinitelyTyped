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
/// <reference path="../Common/Math/b2Transform.d.ts" />
/// <reference path="b2Manifold.d.ts" />

module Box2D.Collision {

	/**
	* This is used to compute the current state of a contact manifold.
	**/
	export class b2WorldManifold {

		/**
		* World vector pointing from A to B.
		**/
		public m_normal: b2Math.b2Vec2;

		/**
		* World contact point (point of intersection).
		**/
		public m_points: b2Math.b2Vec2[];

		/**
		* Creates a new b2WorldManifold.
		**/
		constructor ();

		/**
		* Evaluate the manifold with supplied transforms. This assumes modest motion from the original state. This does not change the point count, impulses, etc. The radii must come from the shapes that generated the manifold.
		* @manifold Manifold to evaluate.
		* @xfA A transform.
		* @radiusA A radius.
		* @xfB B transform.
		* @radiusB B radius.
		**/
		public Initialize(
			manifold: b2Manifold,
			xfA: b2Math.b2Transform,
			radiusA: number,
			xfB: b2Math.b2Transform,
			radiusB: number): void;
	}
}
