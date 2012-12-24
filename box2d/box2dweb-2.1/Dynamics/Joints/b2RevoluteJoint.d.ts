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
/// <reference path="b2Joint.d.ts" />

module Box2D.Dynamics.Joints {

	/**
	* A revolute joint constrains to bodies to share a common point while they are free to rotate about the point. The relative rotation about the shared point is the joint angle. You can limit the relative rotation with a joint limit that specifies a lower and upper angle. You can use a motor to drive the relative rotation about the shared point. A maximum motor torque is provided so that infinite forces are not generated.
	**/
	export class b2RevoluteJoint extends b2Joint {

		/**
		* Enable/disable the joint limit.
		* @flag True to enable, false to disable.
		**/
		public EnableLimit(flag: bool): void;

		/**
		* Enable/disable the joint motor.
		* @flag True to enable, false to diasable.
		**/
		public EnableMotor(flag: bool): void;

		/**
		* Get the anchor point on bodyA in world coordinates.
		* @return Body A anchor.
		**/
		public GetAnchorA(): b2Math.b2Vec2;

		/**
		* Get the anchor point on bodyB in world coordinates.
		* @return Body B anchor.
		**/
		public GetAnchorB(): b2Math.b2Vec2;

		/**
		* Get the current joint angle in radians.
		* @return Joint angle.
		**/
		public GetJointAngle(): number;

		/**
		* Get the current joint angle speed in radians per second.
		* @return Joint speed.
		**/
		public GetJointSpeed(): number;

		/**
		* Get the lower joint limit in radians.
		* @return Lower limit.
		**/
		public GetLowerLimit(): number;

		/**
		* Get the motor speed in radians per second.
		* @return Motor speed.
		**/
		public GetMotorSpeed(): number;

		/**
		* Get the current motor torque, usually in N-m.
		* @return Motor torque.
		**/
		public GetMotorTorque(): number;

		/**
		* Get the reaction force on body2 at the joint anchor in N.
		* @inv_dt
		* @return Reaction force in N.
		**/
		public GetReactionForce(inv_dt: number): b2Math.b2Vec2;

		/**
		* Get the reaction torque on body 2 in N.
		* @return Reaction torque in N.
		**/
		public GetReactionTorque(inv_dt: number): number;

		/**
		* Get the upper joint limit in radians.
		* @return Upper limit.
		**/
		public GetUpperLimit(): number;

		/**
		* Is the joint limit enabled?
		* @return True if enabled, false if disabled.
		**/
		public IsLimitEnabled(): bool;

		/**
		* Is the joint motor enabled?
		* @return True if enabled, false if disabled.
		**/
		public IsMotorEnabled(): bool;

		/**
		* Set the joint limits in radians.
		* @lower New lower limit.
		* @upper New upper limit.
		**/
		public SetLimits(lower: number, upper: number): void;

		/**
		* Set the maximum motor torque, usually in N-m.
		* @torque New max torque.
		**/
		public SetMaxMotorTorque(torque: number): void;

		/**
		* Set the motor speed in radians per second.
		* @speed New motor speed.
		**/
		public SetMotorSpeed(speed: number); void;
	}
}
