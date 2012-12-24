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
/// <reference path="b2ManifoldPoint.d.ts" />

module Box2D.Collision {

	/**
	* A manifold for two touching convex shapes. Box2D supports multiple types of contact: - clip point versus plane with radius - point versus point with radius (circles) The local point usage depends on the manifold type: -e_circles: the local center of circleA -e_faceA: the center of faceA -e_faceB: the center of faceB Similarly the local normal usage: -e_circles: not used -e_faceA: the normal on polygonA -e_faceB: the normal on polygonB We store contacts in this way so that position correction can account for movement, which is critical for continuous physics. All contact scenarios must be expressed in one of these types. This structure is stored across time steps, so we keep it small.
	**/
	export class b2Manifold {

		/**
		* Circles
		**/
		public static e_circles: number;

		/**
		* Face A
		**/
		public static e_faceA: number;

		/**
		* Face B
		**/
		public static e_faceB: number;

		/**
		* Not used for Type e_points
		**/
		public m_localPlaneNormal: b2Math.b2Vec2;

		/**
		* Usage depends on manifold type
		**/
		public m_localPoint: b2Math.b2Vec2;

		/**
		* The number of manifold points
		**/
		public m_pointCount: number;

		/**
		* The points of contact
		**/
		public m_points: b2ManifoldPoint[];

		/**
		* Manifold type.
		**/
		public m_type: number;

		/**
		* Creates a new manifold.
		**/
		constructor ();

		/**
		* Copies the manifold.
		* @return Copy of this manifold.
		**/
		public Copy(): b2Manifold;

		/**
		* Resets this manifold.
		**/
		public Reset(): void;

		/**
		* Sets this manifold from another manifold.
		* @m Manifold to copy values from.
		**/
		public Set(m: b2Manifold): void;
	}
}
