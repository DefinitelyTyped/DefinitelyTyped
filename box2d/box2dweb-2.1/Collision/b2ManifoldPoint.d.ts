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

module Box2D.Collision {

	/**
	* A manifold point is a contact point belonging to a contact manifold. It holds details related to the geometry and dynamics of the contact points. The local point usage depends on the manifold type: -e_circles: the local center of circleB -e_faceA: the local center of cirlceB or the clip point of polygonB -e_faceB: the clip point of polygonA This structure is stored across time steps, so we keep it small. Note: the impulses are used for internal caching and may not provide reliable contact forces, especially for high speed collisions.
	**/
	export class b2ManifoldPoint {

		/**
		* Contact ID.
		**/
		public m_id: b2ContactID;

		/**
		* Local contact point.
		**/
		public m_localpoint: b2Math.b2Vec2;
		
		/**
		* Normal impluse for this contact point.
		**/
		public m_normalImpulse: number;

		/**
		* Tangent impulse for contact point.
		**/
		public m_tangentImpulse: number;

		/**
		* Creates a new manifold point.
		**/
		constructor ();

		/**
		* Resets this manifold point.
		**/
		public Reset(): void;

		/**
		* Sets this manifold point from a manifold point.
		* @m The manifold point to copy values from.
		**/
		public Set(m: b2ManifoldPoint): void;
	}
}
