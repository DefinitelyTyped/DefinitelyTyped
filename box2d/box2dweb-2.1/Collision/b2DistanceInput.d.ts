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
/// <reference path="b2DistanceProxy.d.ts" />

module Box2D.Collision {

	/**
	* Input for b2Distance. You have to option to use the shape radii in the computation. Even
	**/
	export class b2DistanceInput {

		/**
		* Proxy A
		**/
		public proxyA: b2DistanceProxy;

		/**
		* Proxy B
		**/
		public proxyB: b2DistanceProxy;

		/**
		* Transform A
		**/
		public transformA: b2Math.b2Transform;

		/**
		* Transform B
		**/
		public transformB: b2Math.b2Transform;

		/**
		* Use shape radii in computation?
		**/
		public useRadii: bool;
	}
}
