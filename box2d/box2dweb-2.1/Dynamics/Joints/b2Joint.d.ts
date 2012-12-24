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
/// <reference path="../b2Body.d.ts" />

module Box2D.Dynamics.Joints {
	
	/**
	* The base joint class. Joints are used to constraint two bodies together in various fashions. Some joints also feature limits and motors.
	**/
	export class b2Joint {
		
		/**
		* Get the anchor point on bodyA in world coordinates.
		* @return Anchor A point.
		**/
		public GetAnchorA(): b2Math.b2Vec2;

		/**
		* Get the anchor point on bodyB in world coordinates.
		* @return Anchor B point.
		**/
		public GetAnchorB(): b2Math.b2Vec2;

		/**
		* Get the first body attached to this joint.
		* @return Body A.
		**/
		public GetBodyA(): b2Body;

		/**
		* Get the second body attached to this joint.
		* @return Body B.
		**/
		public GetBodyB(): b2Body;

		/**
		* Get the next joint the world joint list.
		* @return Next joint.
		**/
		public GetNext(): b2Joint;

		/**
		* Get the reaction force on body2 at the joint anchor in Newtons.
		* @inv_dt 
		* @return Reaction force (N)
		**/
		public GetReactionForce(inv_dt: number): b2Math.b2Vec2;

		/**
		* Get the reaction torque on body2 in N.
		* @inv_dt
		* @return Reaction torque (N).
		**/
		public GetReactionTorque(inv_dt: number): number;

		/**
		* Get the type of the concrete joint.
		* @return Joint type.
		**/
		public GetType(): number;

		/**
		* Get the user data pointer.
		* @return User data.  Cast to your data type.
		**/
		public GetUserData(): any;

		/**
		* Short-cut function to determine if either body is inactive.
		* @return True if active, otherwise false.
		**/
		public IsActive(): bool;

		/**
		* Set the user data pointer.
		* @data Your custom data.
		**/
		public SetUserData(data: any); void;
	}
}
