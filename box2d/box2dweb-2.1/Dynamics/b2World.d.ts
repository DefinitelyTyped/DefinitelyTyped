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

/// <reference path="../Common/init.d.ts" />
/// <reference path="../Common/b2Color.d.ts" />
/// <reference path="../Common/Math/init.d.ts" />
/// <reference path="../Common/Math/b2Transform.d.ts" />
/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="../Collision/init.d.ts" />
/// <reference path="../Collision/b2AABB.d.ts" />
/// <reference path="../Collision/b2Segment.d.ts" />
/// <reference path="../Collision/IBroadPhase.d.ts" />
/// <reference path="../Collision/Shapes/init.d.ts" />
/// <reference path="../Collision/Shapes/b2Shape.d.ts" />
/// <reference path="Contacts/b2Contact.d.ts" />
/// <reference path="Controllers/b2Controller.d.ts" />
/// <reference path="Joints/b2Joint.d.ts" />
/// <reference path="Joints/b2JointDef.d.ts" />
/// <reference path="b2BodyDef.d.ts" />
/// <reference path="b2Body.d.ts" />
/// <reference path="b2ContactFilter.d.ts" />
/// <reference path="b2ContactListener.d.ts" />
/// <reference path="b2DebugDraw.d.ts" />
/// <reference path="b2DestructionListener.d.ts" />
/// <reference path="b2Fixture.d.ts" />

module Box2D.Dynamics {
	
	/**
	* The world class manages all physics entities, dynamic simulation, and asynchronous queries.
	**/
	export class b2World {
	
		/**
		* Locked
		**/
		public static e_locked: number;

		/**
		* New Fixture
		**/
		public static e_newFixture: number;

		/**
		* Creates a new world.
		* @gravity The world gravity vector.
		* @doSleep Improvie performance by not simulating inactive bodies.
		**/
		constructor(gravity: b2Math.b2Vec2, doSleep: bool);

		/**
		* Add a controller to the world list.
		* @c Controller to add.
		* @return Controller that was added to the world.
		**/
		public AddController(c: Controllers.b2Controller): Controllers.b2Controller;

		/**
		* Call this after you are done with time steps to clear the forces. You normally call this after each call to Step, unless you are performing sub-steps.
		**/
		public ClearForces(): void;

		/**
		* Create a rigid body given a definition. No reference to the definition is retained.
		* @def Body's definition.
		* @return Created rigid body.
		**/
		public CreateBody(def: b2BodyDef): b2Body;

		/**
		* Creates a new controller.
		* @controller New controller.
		* @return New controller.
		**/
		public CreateController(controller: Controllers.b2Controller): Controllers.b2Controller;

		/**
		* Create a joint to constrain bodies together. No reference to the definition is retained. This may cause the connected bodies to cease colliding.
		* @warning This function is locked during callbacks.
		* @def Joint definition.
		* @return New created joint.
		**/
		public CreateJoint(def: Joints.b2JointDef): Joints.b2Joint;

		/**
		* Destroy a rigid body given a definition. No reference to the definition is retained. This function is locked during callbacks.
		* @b Body to destroy.
		* @warning This function is locked during callbacks.
		**/
		public DestroyBody(b: b2Body): void;

		/**
		* Destroy a controller given the controller instance.
		* @warning This function is locked during callbacks.
		* @controller Controller to destroy.
		**/
		public DestroyController(controller: Controllers.b2Controller): void;

		/**
		* Destroy a joint. This may cause the connected bodies to begin colliding.
		* @j Joint to destroy.
		**/
		public DestroyJoint(j: Joints.b2Joint): void;

		/**
		* Call this to draw shapes and other debug draw data.
		**/
		public DrawDebugData(): void;

		/**
		* Get the number of bodies.
		* @return Number of bodies in this world.
		**/
		public GetBodyCount(): number;

		/**
		* Get the world body list. With the returned body, use b2Body::GetNext to get the next body in the world list. A NULL body indicates the end of the list.
		* @return The head of the world body list.
		**/
		public GetBodyList(): b2Body;

		/**
		* Get the number of contacts (each may have 0 or more contact points).
		* @return Number of contacts.
		**/
		public GetContactCount(): number;

		/**
		* Get the world contact list. With the returned contact, use b2Contact::GetNext to get the next contact in the world list. A NULL contact indicates the end of the list.
		* @return The head of the world contact list.
		**/
		public GetContactList(): Contacts.b2Contact;

		/**
		* Get the global gravity vector.
		* @return Global gravity vector.
		**/
		public GetGravity(): b2Math.b2Vec2;

		/**
		* The world provides a single static ground body with no collision shapes. You can use this to simplify the creation of joints and static shapes.
		* @return The ground body.
		**/
		public GetGroundBody(): b2Body;

		/**
		* Get the number of joints.
		* @return The number of joints in the world.
		**/
		public GetJointCount(): number;

		/**
		* Get the world joint list. With the returned joint, use b2Joint::GetNext to get the next joint in the world list. A NULL joint indicates the end of the list.
		* @return The head of the world joint list.
		**/
		public GetJointList(): Joints.b2Joint;

		/**
		* Get the number of broad-phase proxies.
		* @return Number of borad-phase proxies.
		**/
		public GetProxyCount(): number;

		/**
		* Is the world locked (in the middle of a time step).
		* @return True if the world is locked and in the middle of a time step, otherwise false.
		**/
		public IsLocked(): bool;

		/**
		* Query the world for all fixtures that potentially overlap the provided AABB.
		* @callback  A user implemented callback class. It should match signature function Callback(fixture:b2Fixture):Boolean.  Return true to continue to the next fixture.
		* @aabb The query bounding box.
		**/
		public QueryAABB(callback: (fixutre: b2Fixture) => bool, aabb: b2Collision.b2AABB): void;

		/**
		* Query the world for all fixtures that contain a point.
		* @note This provides a feature specific to this port.
		* @callback A user implemented callback class.  It should match signature function Callback(fixture:b2Fixture):Boolean.  Return true to continue to the next fixture.
		* @p The query point.
		**/
		public QueryPoint(callback: (fixture: b2Fixture) => bool, p: b2Math.b2Vec2): void;

		/**
		* Query the world for all fixtures that precisely overlap the provided transformed shape.
		* @note This provides a feature specific to this port.
		* @callback A user implemented callback class.  It should match signature function Callback(fixture:b2Fixture):Boolean.  Return true to continue to the next fixture.
		* @shape The query shape.
		* @transform Optional transform, default = null.
		**/
		public QueryShape(callback: (fixture: b2Fixture) => bool, shape: b2Shapes.b2Shape, transform?: b2Math.b2Transform): void;

		/**
		* Ray-cast the world for all fixtures in the path of the ray. Your callback Controls whether you get the closest point, any point, or n-points The ray-cast ignores shapes that contain the starting point.
		* @callback A callback function which must be of signature: 
		*	function Callback(
		*		fixture:b2Fixture,	// The fixture hit by the ray 
		*		point:b2Vec2,		// The point of initial intersection 
		*		normal:b2Vec2,		// The normal vector at the point of intersection 
		*		fraction:Number		// The fractional length along the ray of the intersection
		*	 ):Number
		*	 Callback should return the new length of the ray as a fraction of the original length. By returning 0, you immediately terminate. By returning 1, you continue wiht the original ray. By returning the current fraction, you proceed to find the closest point.
		* @point1 The ray starting point.
		* @point2 The ray ending point.
		**/
		public RayCast(callback: (fixture: b2Fixture, point: b2Math.b2Vec2, normal: b2Math.b2Vec2, fraction: number) => number, point1: b2Math.b2Vec2, point2: b2Math.b2Vec2): void;

		/**
		* Ray-cast the world for all fixture in the path of the ray.
		* @point1 The ray starting point.
		* @point2 The ray ending point.
		* @return Array of all the fixtures intersected by the ray.
		**/
		public RayCastAll(point1: b2Math.b2Vec2, point2: b2Math.b2Vec2): b2Fixture[];

		/**
		* Ray-cast the world for the first fixture in the path of the ray.
		* @point1 The ray starting point.
		* @point2 The ray ending point.
		* @return First fixture intersected by the ray.
		**/
		public RayCastOne(point1: b2Math.b2Vec2, point2: b2Math.b2Vec2): b2Fixture;

		/**
		* Removes the controller from the world.
		* @c Controller to remove.
		**/
		public RemoveController(c: Controllers.b2Controller): void;

		/**
		* Use the given object as a broadphase. The old broadphase will not be cleanly emptied.
		* @warning This function is locked during callbacks.
		* @broadphase: Broad phase implementation.
		**/
		public SetBroadPhase(broadPhase: b2Collision.IBroadPhase): void;

		/**
		* Register a contact filter to provide specific control over collision. Otherwise the default filter is used (b2_defaultFilter).
		* @filter Contact filter'er.
		**/
		public SetContactFilter(filter: b2ContactFilter): void;

		/**
		* Register a contact event listener.
		* @listener Contact event listener.
		**/
		public SetContactListener(listener: b2ContactListener): void;

		/**
		* Enable/disable continuous physics. For testing.
		* @flag True for continuous physics, otherwise false.
		**/
		public SetContinuousPhysics(flag: bool): void;

		/**
		* Register a routine for debug drawing. The debug draw functions are called inside the b2World::Step method, so make sure your renderer is ready to consume draw commands when you call Step().
		* @debugDraw Debug drawing instance.
		**/
		public SetDebugDraw(debugDraw: b2DebugDraw): void;
		
		/**
		* Destruct the world. All physics entities are destroyed and all heap memory is released.
		* @listener Destruction listener instance.
		**/
		public SetDestructionListener(listener: b2DestructionListener): void;

		/**
		* Change the global gravity vector.
		* @gravity New global gravity vector.
		**/
		public SetGravity(gravity: b2Math.b2Vec2): void;

		/**
		* Enable/disable warm starting. For testing.
		* @flag True for warm starting, otherwise false.
		**/
		public SetWarmStarting(flag: bool): void;

		/**
		* Take a time step. This performs collision detection, integration, and constraint solution.
		* @dt The amout of time to simulate, this should not vary.
		* @velocityIterations For the velocity constraint solver.
		* @positionIterations For the position constraint solver.
		**/
		public Step(dt: number, velocityIterations: number, positionIterations: number): void;

		/**
		* Perform validation of internal data structures.
		**/
		public Validate(): void;
	}
}
