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
	* Line joint definition. This requires defining a line of motion using an axis and an anchor point. The definition uses local anchor points and a local axis so that the initial configuration can violate the constraint slightly. The joint translation is zero when the local anchor points coincide in world space. Using local anchors and a local axis helps when saving and loading a game.
	**/
	export class b2LineJointDef extends b2JointDef {

		/**
		* Enable/disable the joint limit.
		**/
		public enableLimit: bool;

		/**
		* Enable/disable the joint motor.
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
		* The local translation axis in bodyA.
		**/
		public localAxisA: b2Math.b2Vec2;

		/**
		* The lower translation limit, usually in meters.
		**/
		public lowerTranslation: number;

		/**
		* The maximum motor torque, usually in N-m.
		**/
		public maxMotorForce: number;

		/**
		* The desired motor speed in radians per second.
		**/
		public motorSpeed: number;

		/**
		* The upper translation limit, usually in meters.
		**/
		public upperTranslation: number;

		/**
		* Constructor.
		**/
		constructor();
		
		/**
		* Initialize the bodies, anchors, and length using the world anchors.
		* @bA Body A.
		* @bB Body B.
		* @anchor Anchor.
		* @axis Axis.
		**/
		public Initialize(bA: b2Body, bB: b2Body, anchor: b2Math.b2Vec2, axis: b2Math.b2Vec2): void;
	}
}
