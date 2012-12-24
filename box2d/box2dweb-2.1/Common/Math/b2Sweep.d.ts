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

/// <reference path="b2Vec2.d.ts" />
/// <reference path="b2Transform.d.ts" />

module Box2D.Common.Math {

	/**
	* This describes the motion of a body/shape for TOI computation. Shapes are defined with respect to the body origin, which may no coincide with the center of mass. However, to support dynamics we must interpolate the center of mass position.
	**/
	export class b2Sweep {

		/**
		* World angle.
		**/
		public a: number;

		/**
		* World angle.
		**/
		public a0: number;

		/**
		* Center world position.
		**/
		public c: b2Vec2;

		/**
		* Center world position.
		**/
		public c0: b2Vec2;
		
		/**
		* Local center of mass position.
		**/
		public localCenter: b2Vec2;
		
		/**
		* Time interval = [t0,1], where t0 is in [0,1].
		**/
		public t0: b2Vec2;

		/**
		* Advance the sweep forward, yielding a new initial state.
		* @t The new initial time.
		**/
		public Advance(t: number): void;

		/**
		* Creates a copy of the sweep.
		**/
		public Copy(): b2Sweep;

		/**
		* Get the interpolated transform at a specific time.
		* @xf Transform at specified time, this is an out parameter.
		* @alpha Is a factor in [0,1], where 0 indicates t0.
		**/
		public GetTransform(xf: b2Transform, alpha: number): void;

		/**
		* Sets the sweep from a sweep.
		* @other Sweep values to copy from.
		**/
		public Set(other: b2Sweep): void;
	}
}
