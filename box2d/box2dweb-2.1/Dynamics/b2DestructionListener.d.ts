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

/// <reference path="Joints/b2Joint.d.ts" />
/// <reference path="b2Fixture.d.ts" />

module Box2D.Dynamics {

	/**
	* Joints and shapes are destroyed when their associated body is destroyed. Implement this listener so that you may nullify references to these joints and shapes.
	**/
	export class b2DestructionListener {

		/**
		* Called when any fixture is about to be destroyed due to the destruction of its parent body.
		* @fixture b2Fixture being destroyed.
		**/
		public SayGoodbyeFixture(fixture: b2Fixture): void;

		/**
		* Called when any joint is about to be destroyed due to the destruction of one of its attached bodies.
		* @joint b2Joint being destroyed.
		**/
		public SayGoodbyeJoint(joint: Joints.b2Joint): void;
	}
}
