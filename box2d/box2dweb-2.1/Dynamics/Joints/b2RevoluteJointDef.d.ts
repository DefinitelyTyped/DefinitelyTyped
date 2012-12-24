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
/// <reference path="b2JointDef.d.ts" />
/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* Revolute joint definition. This requires defining an anchor point where the bodies are joined. The definition uses local anchor points so that the initial configuration can violate the constraint slightly. You also need to specify the initial relative angle for joint limits. This helps when saving and loading a game. The local anchor points are measured from the body's origin rather than the center of mass because: 1. you might not know where the center of mass will be. 2. if you add/remove shapes from a body and recompute the mass, the joints will be broken.
	**/
	export class b2RevoluteJointDef extends b2JointDef {

		/**
		* A flag to enable joint limits.
		**/
		public enableLimit: bool;

		/**
		* A flag to enable the joint motor.
		**/
		public enableMotor: bool;

		/**
		* The local anchor point relative to body1's origin.
		**/
		public localAnchorA: b2Math.b2Vec2;

		/**
		* The local anchor point relative to body2's origin.
		**/
		public localAnchorB: b2Math.b2Vec2;

		/**
		* The lower angle for the joint limit (radians).
		**/
		public lowerAngle: number;

		/**
		* The maximum motor torque used to achieve the desired motor speed. Usually in N-m.
		**/
		public maxMotorTorque: number;

		/**
		* The desired motor speed. Usually in radians per second.
		**/
		public motorSpeed: number;

		/**
		* The bodyB angle minus bodyA angle in the reference state (radians).
		**/
		public referenceAngle: number;

		/**
		* The upper angle for the joint limit (radians).
		**/
		public upperAngle: number;

		/**
		* Constructor.
		**/
		constructor();
		
		/**
		* Initialize the bodies, achors, and reference angle using the world anchor.
		* @bA Body A.
		* @bB Body B.
		* @anchor Anchor.
		**/
		public Initialize(bA: b2Body, bB: b2Body, anchor: b2Math.b2Vec2): void;
	}
}
