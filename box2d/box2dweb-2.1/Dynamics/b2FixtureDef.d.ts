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

/// <reference path="../Collision/Shapes/init.d.ts" />
/// <reference path="../Collision/Shapes/b2Shape.d.ts" />
/// <reference path="b2FilterData.d.ts" />

module Box2D.Dynamics {
	
	/**
	* A fixture definition is used to create a fixture. This class defines an abstract fixture definition. You can reuse fixture definitions safely.
	**/
	export class b2FixtureDef {

		/**
		* The density, usually in kg/m^2.
		**/
		public density: number;

		/**
		* Contact filtering data.
		**/
		public filter: b2FilterData;

		/**
		* The friction coefficient, usually in the range [0,1].
		**/
		public friction: number;

		/**
		* A sensor shape collects contact information but never generates a collision response.
		**/
		public isSensor: bool;

		/**
		* The restitution (elasticity) usually in the range [0,1].
		**/
		public restitution: number;

		/**
		* The shape, this must be set. The shape will be cloned, so you can create the shape on the stack.
		**/
		public shape: b2Shapes.b2Shape;

		/**
		* Use this to store application specific fixture data.
		**/
		public userData: any;

		/**
		* The constructor sets the default fixture definition values.
		**/
		constructor();
	}
}
