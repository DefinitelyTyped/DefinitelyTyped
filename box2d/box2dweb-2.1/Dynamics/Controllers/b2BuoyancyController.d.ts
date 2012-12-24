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
/// <reference path="../../Common/Math/b2Vec2.d.ts" />
/// <reference path="b2Controller.d.ts" />

module Box2D.Dynamics.Controllers {

	/**
	* Calculates buoyancy forces for fluids in the form of a half plane.
	**/
	export class b2BuoyancyController extends b2Controller {

		/**
		* Linear drag co-efficient.
		* @default = 1
		**/
		public angularDrag: number;

		/**
		* The fluid density.
		* @default = 0
		**/
		public density: number;

		/**
		* Gravity vector, if the world's gravity is not used.
		* @default = null
		**/
		public gravity: b2Math.b2Vec2;

		/**
		* Linear drag co-efficient.
		* @default = 2
		**/
		public linearDrag: number;

		/**
		* The outer surface normal.
		**/
		public normal: b2Math.b2Vec2;

		/**
		* The height of the fluid surface along the normal.
		* @default = 0
		**/
		public offset: number;

		/**
		* If false, bodies are assumed to be uniformly dense, otherwise use the shapes densities.
		* @default = false.
		**/
		public useDensity: bool;

		/**
		* If true, gravity is taken from the world instead of the gravity parameter.
		* @default = true.
		**/
		public useWorldGravity: bool;

		/**
		* Fluid velocity, for drag calculations.
		**/
		public velocity: b2Math.b2Vec2;
	}
}
