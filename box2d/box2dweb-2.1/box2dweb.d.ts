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

/// <reference path="Common/init.d.ts" />
/// <reference path="Common/b2Color.d.ts" />
/// <reference path="Common/b2Settings.d.ts" />
/// <reference path="Common/Math/init.d.ts" />
/// <reference path="Common/Math/b2Mat22.d.ts" />
/// <reference path="Common/Math/b2Mat33.d.ts" />
/// <reference path="Common/Math/b2Math.d.ts" />
/// <reference path="Common/Math/b2Sweep.d.ts" />
/// <reference path="Common/Math/b2Transform.d.ts" />
/// <reference path="Common/Math/b2Vec2.d.ts" />
/// <reference path="Common/Math/b2Vec3.d.ts" />

/// <reference path="Collision/init.d.ts" />
/// <reference path="Collision/b2AABB.d.ts" />
/// <reference path="Collision/b2ContactID.d.ts" />
/// <reference path="Collision/b2ContactPoint.d.ts" />
/// <reference path="Collision/b2DistanceInput.d.ts" />
/// <reference path="Collision/b2DistanceOutput.d.ts" />
/// <reference path="Collision/b2DistanceProxy.d.ts" />
/// <reference path="Collision/b2DynamicTree.d.ts" />
/// <reference path="Collision/b2DynamicTreeBroadPhase.d.ts" />
/// <reference path="Collision/b2DynamicTreeNode.d.ts" />
/// <reference path="Collision/b2Manifold.d.ts" />
/// <reference path="Collision/b2ManifoldPoint.d.ts" />
/// <reference path="Collision/b2OBB.d.ts" />
/// <reference path="Collision/b2RayCastInput.d.ts" />
/// <reference path="Collision/b2RayCastOutput.d.ts" />
/// <reference path="Collision/b2Segment.d.ts" />
/// <reference path="Collision/b2SimplexCache.d.ts" />
/// <reference path="Collision/b2TOIInput.d.ts" />
/// <reference path="Collision/b2WorldManifold.d.ts" />
/// <reference path="Collision/Features.d.ts" />
/// <reference path="Collision/IBroadPhase.d.ts" />
/// <reference path="Collision/Shapes/init.d.ts" />
/// <reference path="Collision/Shapes/b2CircleShape.d.ts" />
/// <reference path="Collision/Shapes/b2EdgeChainDef.d.ts" />
/// <reference path="Collision/Shapes/b2EdgeShape.d.ts" />
/// <reference path="Collision/Shapes/b2MassData.d.ts" />
/// <reference path="Collision/Shapes/b2PolygonShape.d.ts" />
/// <reference path="Collision/Shapes/b2Shape.d.ts" />

/// <reference path="Dynamics/init.d.ts" />
/// <reference path="Dynamics/b2Body.d.ts" />
/// <reference path="Dynamics/b2BodyDef.d.ts" />
/// <reference path="Dynamics/b2ContactFilter.d.ts" />
/// <reference path="Dynamics/b2ContactImpulse.d.ts" />
/// <reference path="Dynamics/b2ContactListener.d.ts" />
/// <reference path="Dynamics/b2DebugDraw.d.ts" />
/// <reference path="Dynamics/b2DestructionListener.d.ts" />
/// <reference path="Dynamics/b2FilterData.d.ts" />
/// <reference path="Dynamics/b2Fixture.d.ts" />
/// <reference path="Dynamics/b2FixtureDef.d.ts" />
/// <reference path="Dynamics/b2World.d.ts" />
/// <reference path="Dynamics/Contacts/init.d.ts" />
/// <reference path="Dynamics/Contacts/b2Contact.d.ts" />
/// <reference path="Dynamics/Contacts/b2ContactEdge.d.ts" /> 
/// <reference path="Dynamics/Contacts/b2ContactResult.d.ts" />
/// <reference path="Dynamics/Controllers/init.d.ts" />
/// <reference path="Dynamics/Controllers/b2Controller.d.ts" />
/// <reference path="Dynamics/Controllers/b2ControllerEdge.d.ts" />
/// <reference path="Dynamics/Controllers/b2BuoyancyController.d.ts" />
/// <reference path="Dynamics/Controllers/b2ConstantAccelController.d.ts" />
/// <reference path="Dynamics/Controllers/b2ConstantForceController.d.ts" />
/// <reference path="Dynamics/Controllers/b2GravityController.d.ts" />
/// <reference path="Dynamics/Controllers/b2TensorDampingController.d.ts" />
/// <reference path="Dynamics/Joints/init.d.ts" />
/// <reference path="Dynamics/Joints/b2Joint.d.ts" />
/// <reference path="Dynamics/Joints/b2JointDef.d.ts" />
/// <reference path="Dynamics/Joints/b2JointEdge.d.ts" />
/// <reference path="Dynamics/Joints/b2DistanceJoint.d.ts" />
/// <reference path="Dynamics/Joints/b2DistanceJointDef.d.ts" />
/// <reference path="Dynamics/Joints/b2FrictionJoint.d.ts" />
/// <reference path="Dynamics/Joints/b2FrictionJointDef.d.ts" />
/// <reference path="Dynamics/Joints/b2GearJoint.d.ts" />
/// <reference path="Dynamics/Joints/b2GearJointDef.d.ts" />
/// <reference path="Dynamics/Joints/b2LineJoint.d.ts" />
/// <reference path="Dynamics/Joints/b2LineJointDef.d.ts" />
/// <reference path="Dynamics/Joints/b2MouseJoint.d.ts" />
/// <reference path="Dynamics/Joints/b2MouseJointDef.d.ts" />
/// <reference path="Dynamics/Joints/b2PrismaticJoint.d.ts" />
/// <reference path="Dynamics/Joints/b2PrismaticJointDef.d.ts" />
/// <reference path="Dynamics/Joints/b2PullyJoint.d.ts" />
/// <reference path="Dynamics/Joints/b2PullyJointDef.d.ts" />
/// <reference path="Dynamics/Joints/b2RevoluteJoint.d.ts" />
/// <reference path="Dynamics/Joints/b2RevoluteJointDef.d.ts" />
/// <reference path="Dynamics/Joints/b2WeldJoint.d.ts" />
/// <reference path="Dynamics/Joints/b2WeldJointDef.d.ts" />

module Box2D { }
