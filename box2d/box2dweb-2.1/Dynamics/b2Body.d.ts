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
/// <reference path="../Collision/Shapes/init.d.ts" />
/// <reference path="../Collision/Shapes/b2Shape.d.ts" />
/// <reference path="../Collision/Shapes/b2MassData.d.ts" />
/// <reference path="b2BodyDef.d.ts" />
/// <reference path="b2FixtureDef.d.ts" />
/// <reference path="b2Fixture.d.ts" />
/// <reference path="b2World.d.ts" />
/// <reference path="Contacts/b2ContactEdge.d.ts" />
/// <reference path="Controllers/b2ControllerEdge.d.ts" />
/// <reference path="Joints/b2JointEdge.d.ts" />

module Box2D.Dynamics {

	/**
	* A rigid body.
	**/
	export class b2Body {

		/**
		* Dynamic Body
		**/
		public static b2_dynamicBody: number;

		/**
		* Kinematic Body
		**/
		public static b2_kinematicBody: number;

		/**
		* Static Body
		**/
		public static b2_staticBody: number;

		/**
		* Apply a force at a world point. If the force is not applied at the center of mass, it will generate a torque and affect the angular velocity. This wakes up the body.
		* @force The world force vector, usually in Newtons (N).
		* @point The world position of the point of application.
		**/
		public ApplyForce(force: b2Math.b2Vec2, point: b2Math.b2Vec2): void;

		/**
		* Apply an impulse at a point. This immediately modifies the velocity. It also modifies the angular velocity if the point of application is not at the center of mass. This wakes up the body.
		* @impules The world impulse vector, usually in N-seconds or kg-m/s.
		* @point The world position of the point of application.
		**/
		public ApplyImpulse(impulse: b2Math.b2Vec2, point: b2Math.b2Vec2): void;

		/**
		* Apply a torque. This affects the angular velocity without affecting the linear velocity of the center of mass. This wakes up the body.
		* @torque Force applied about the z-axis (out of the screen), usually in N-m.
		**/
		public ApplyTorque(torque: number): void;

		/**
		* Creates a fixture and attach it to this body. Use this function if you need to set some fixture parameters, like friction. Otherwise you can create the fixture directly from a shape. If the density is non-zero, this function automatically updates the mass of the body. Contacts are not created until the next time step.
		* @warning This function is locked during callbacks.
		* @def The fixture definition;
		* @return The created fixture.
		**/
		public CreateFixture(def: b2FixtureDef): b2Fixture;

		/**
		* Creates a fixture from a shape and attach it to this body. This is a convenience function. Use b2FixtureDef if you need to set parameters like friction, restitution, user data, or filtering. This function automatically updates the mass of the body.
		* @warning This function is locked during callbacks.
		* @shape The shaped of the fixture (to be cloned).
		* @density The shape density, default is 0.0, set to zero for static bodies.
		* @return The created fixture.
		**/
		public CreateFixture2(shape: b2Shapes.b2Shape, density?: number): b2Fixture;

		/**
		* Destroy a fixture. This removes the fixture from the broad-phase and destroys all contacts associated with this fixture. This will automatically adjust the mass of the body if the body is dynamic and the fixture has positive density. All fixtures attached to a body are implicitly destroyed when the body is destroyed.
		* @warning This function is locked during callbacks.
		* @fixture The fixed to be removed.
		**/
		public DestroyFixture(fixture: b2Fixture): void;

		/**
		* Get the angle in radians.
		* @return The current world rotation angle in radians
		**/
		public GetAngle(): number;

		/**
		* Get the angular damping of the body.
		* @return Angular damping of the body.
		**/
		public GetAngularDamping(): number;

		/**
		* Get the angular velocity.
		* @return The angular velocity in radians/second.
		**/
		public GetAngularVelocity(): number;

		/**
		* Get the list of all contacts attached to this body.
		* @return List of all contacts attached to this body.
		**/
		public GetContactList(): Contacts.b2ContactEdge;

		/**
		* Get the list of all controllers attached to this body.
		* @return List of all controllers attached to this body.
		**/
		public GetControllerList(): Controllers.b2ControllerEdge;

		/**
		* Get the definition containing the body properties.
		* @note This provides a feature specific to this port.
		* @return The body's definition.
		**/
		public GetDefinition(): b2BodyDef;

		/**
		* Get the list of all fixtures attached to this body.
		* @return List of all fixtures attached to this body.
		**/
		public GetFixtureList(): b2Fixture;

		/**
		* Get the central rotational inertia of the body.
		* @return The rotational inertia, usually in kg-m^2.
		**/
		public GetInertia(): number;

		/**
		* Get the list of all joints attached to this body.
		* @return List of all joints attached to this body.
		**/
		public GetJointList(): Joints.b2JointEdge;

		/**
		* Get the linear damping of the body.
		* @return The linear damping of the body.
		**/
		public GetLinearDamping(): number;

		/**
		* Get the linear velocity of the center of mass.
		* @return The linear velocity of the center of mass.
		**/
		public GetLinearVelocity(): b2Math.b2Vec2;

		/**
		* Get the world velocity of a local point.
		* @localPoint Point in local coordinates.
		* @return The world velocity of the point.
		**/
		public GetLinearVelocityFromLocalPoint(localPoint: b2Math.b2Vec2): b2Math.b2Vec2;

		/**
		* Get the world linear velocity of a world point attached to this body.
		* @worldPoint Point in world coordinates.
		* @return The world velocity of the point.
		**/
		public GetLinearVelocityFromWorldPoint(worldPoint: b2Math.b2Vec2): b2Math.b2Vec2;

		/**
		* Get the local position of the center of mass.
		* @return Local position of the center of mass.
		**/
		public GetLocalCenter(): b2Math.b2Vec2;

		/**
		* Gets a local point relative to the body's origin given a world point.
		* @worldPoint Pointin world coordinates.
		* @return The corresponding local point relative to the body's origin.
		**/
		public GetLocalPoint(worldPoint: b2Math.b2Vec2): b2Math.b2Vec2;

		/**
		* Gets a local vector given a world vector.
		* @worldVector World vector.
		* @return The corresponding local vector.
		**/
		public GetLocalVector(worldVector: b2Math.b2Vec2): b2Math.b2Vec2;

		/**
		* Get the total mass of the body.
		* @return The body's mass, usually in kilograms (kg).
		**/
		public GetMass(): number;

		/**
		* Get the mass data of the body. The rotational inertial is relative to the center of mass.
		* @data Body's mass data, this argument is `out`.
		**/
		public GetMassData(data: b2Shapes.b2MassData): void;

		/**
		* Get the next body in the world's body list.
		* @return Next body in the world's body list.
		**/
		public GetNext(): b2Body;

		/**
		* Get the world body origin position.
		* @return World position of the body's origin.
		**/
		public GetPosition(): b2Math.b2Vec2;

		/**
		* Get the body transform for the body's origin.
		* @return World transform of the body's origin.
		**/
		public GetTransform(): b2Math.b2Transform;

		/**
		* Get the type of this body.
		* @return Body type as uint.
		**/
		public GetType(): number;

		/**
		* Get the user data pointer that was provided in the body definition.
		* @return User's data, cast to the correct type.
		**/
		public GetUserData(): any;

		/**
		* Get the parent world of this body.
		* @return Body's world.
		**/
		public GetWorld(): b2World;

		/**
		* Get the world position of the center of mass.
		* @return World position of the center of mass.
		**/
		public GetWorldCenter(): b2Math.b2Vec2;

		/**
		* Get the world coordinates of a point given the local coordinates.
		* @localPoint Point on the body measured relative to the body's origin.
		* @return localPoint expressed in world coordinates.
		**/
		public GetWorldPoint(localPoint: b2Math.b2Vec2): b2Math.b2Vec2;

		/**
		* Get the world coordinates of a vector given the local coordinates.
		* @localVector Vector fixed in the body.
		* @return localVector expressed in world coordinates.
		**/
		public GetWorldVector(localVector: b2Math.b2Vec2): b2Math.b2Vec2;

		/**
		* Get the active state of the body.
		* @return True if the body is active, otherwise false.
		**/
		public IsActive(): bool;

		/**
		* Get the sleeping state of this body.
		* @return True if the body is awake, otherwise false.
		**/
		public IsAwake(): bool;

		/**
		* Is the body treated like a bullet for continuous collision detection?
		* @return True if the body is treated like a bullet, otherwise false.
		**/
		public IsBullet(): bool;

		/**
		* Does this body have fixed rotation?
		* @return True for fixed, otherwise false.
		**/
		public IsFixedRotation(): bool;

		/**
		* Is this body allowed to sleep?
		* @return True if the body can sleep, otherwise false.
		**/
		public IsSleepingAllowed(): bool;

		/**
		* Merges another body into this. Only fixtures, mass and velocity are effected, Other properties are ignored.
		* @note This provides a feature specific to this port.
		**/
		public Merge(other: b2Body): void;

		/**
		* This resets the mass properties to the sum of the mass properties of the fixtures. This normally does not need to be called unless you called SetMassData to override the mass and later you want to reset the mass.
		**/
		public ResetMassData(): void;

		/**
		* Set the active state of the body. An inactive body is not simulated and cannot be collided with or woken up. If you pass a flag of true, all fixtures will be added to the broad-phase. If you pass a flag of false, all fixtures will be removed from the broad-phase and all contacts will be destroyed. Fixtures and joints are otherwise unaffected. You may continue to create/destroy fixtures and joints on inactive bodies. Fixtures on an inactive body are implicitly inactive and will not participate in collisions, ray-casts, or queries. Joints connected to an inactive body are implicitly inactive. An inactive body is still owned by a b2World object and remains in the body list.
		* @flag True to activate, false to deactivate.
		**/
		public SetActive(flag: bool): void;

		/**
		* Set the world body angle
		* @angle New angle of the body.
		**/
		public SetAngle(angle: number): void;

		/**
		* Set the angular damping of the body.
		* @angularDamping New angular damping value.
		**/
		public SetAngularDamping(angularDamping: number): void;

		/**
		* Set the angular velocity.
		* @omega New angular velocity in radians/second.
		**/
		public SetAngularVelocity(omega: number): void;

		/**
		* Set the sleep state of the body. A sleeping body has vety low CPU cost.
		* @flag True to set the body to awake, false to put it to sleep.
		**/
		public SetAwake(flag: bool): void;

		/**
		* Should this body be treated like a bullet for continuous collision detection?
		* @flag True for bullet, false for normal.
		**/
		public SetBullet(flag: bool): void;

		/**
		* Set this body to have fixed rotation. This causes the mass to be reset.
		* @fixed True for no rotation, false to allow for rotation.
		**/
		public SetFixedRotation(fixed: bool): void;

		/**
		* Set the linear damping of the body.
		* @linearDamping The new linear damping for this body.
		**/
		public SetLinearDamping(linearDamping: number): void;

		/**
		* Set the linear velocity of the center of mass.
		* @v New linear velocity of the center of mass.
		**/
		public SetLinearVelocity(v: b2Math.b2Vec2): void;

		/**
		* Set the mass properties to override the mass properties of the fixtures Note that this changes the center of mass position. Note that creating or destroying fixtures can also alter the mass. This function has no effect if the body isn't dynamic.
		* @warning The supplied rotational inertia should be relative to the center of mass.
		* @massData New mass data properties.
		**/
		public SetMassData(massData: b2Shapes.b2MassData): void;

		/**
		* Set the world body origin position.
		* @position New world body origin position.
		**/
		public SetPosition(position: b2Math.b2Vec2): void;

		/**
		* Set the position of the body's origin and rotation (radians). This breaks any contacts and wakes the other bodies.
		* @position New world body origin position.
		* @angle New world rotation angle of the body in radians.
		**/
		public SetPositionAndAngle(position: b2Math.b2Vec2, angle: number): void;

		/**
		* Is this body allowed to sleep
		* @flag True if the body can sleep, false if not.
		**/
		public SetSleepingAllowed(flag: bool): void;

		/**
		* Set the position of the body's origin and rotation (radians). This breaks any contacts and wakes the other bodies. Note this is less efficient than the other overload - you should use that if the angle is available.
		* @xf Body's origin and rotation (radians).
		**/
		public SetTransform(xf: b2Math.b2Transform): void;

		/**
		* Set the type of this body. This may alter the mass and velocity
		* @type Type enum.
		**/
		public SetType(type: number): void;

		/**
		* Set the user data. Use this to store your application specific data.
		* @data The user data for this body.
		**/
		public SetUserData(data: any): void;

		/**
		* Splits a body into two, preserving dynamic properties
		* @note This provides a feature specific to this port.
		* @return The newly created bodies from the split.
		**/
		public Split(callback: (fixture: b2Fixture) => bool): b2Body;
	}
}
