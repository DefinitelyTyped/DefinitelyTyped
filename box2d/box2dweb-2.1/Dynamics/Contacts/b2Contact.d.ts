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

/// <reference path="../../Collision/init.d.ts" />
/// <reference path="../../Collision/b2Manifold.d.ts" />
/// <reference path="../../Collision/b2WorldManifold.d.ts" />
/// <reference path="../init.d.ts" />
/// <reference path="../b2Fixture.d.ts" />

module Box2D.Dynamics.Contacts {
	
	/**
	* The class manages contact between two shapes. A contact exists for each overlapping AABB in the broad-phase (except if filtered). Therefore a contact object may exist that has no contact points.
	**/
	export class b2Contact {

		/**
		* Constructor
		**/
		constructor();
		
		/**
		* Flag this contact for filtering. Filtering will occur the next time step.
		**/
		public FlagForFiltering(): void;
		
		/**
		* Get the first fixture in this contact.
		* @return First fixture in this contact.
		**/
		public GetFixtureA(): b2Fixture;
		
		/**
		* Get the second fixture in this contact.
		* @return Second fixture in this contact.
		**/
		public GetFixtureB(): b2Fixture;
		
		/**
		* Get the contact manifold. Do not modify the manifold unless you understand the internals of Box2D.
		* @return Contact manifold.
		**/
		public GetManifold(): b2Collision.b2Manifold;
		
		/**
		* Get the next contact in the world's contact list.
		* @return Next contact in the world's contact list.
		**/
		public GetNext(): b2Contact;
		
		/**
		* Get the world manifold.
		* @return World manifold.
		**/
		public GetWorldManifold(worldManifold: b2Collision.b2WorldManifold): void;
		
		/**
		* Does this contact generate TOI events for continuous simulation.
		* @return True for continous, otherwise false.
		**/
		public IsContinuous(): bool;
		
		/**
		* Has this contact been disabled?
		* @return True if disabled, otherwise false.
		**/
		public IsEnabled(): bool;
		
		/**
		* Is this contact a sensor?
		* @return True if sensor, otherwise false.
		**/
		public IsSensor(): bool;
		
		/**
		* Is this contact touching.
		* @return True if contact is touching, otherwise false.
		**/
		public IsTouching(): bool;
		
		/**
		* Enable/disable this contact. This can be used inside the pre-solve contact listener. The contact is only disabled for the current time step (or sub-step in continuous collision).
		* @flag True to enable, false to disable.
		**/
		public SetEnabled(flag: bool): void;

		/**
		* Change this to be a sensor or-non-sensor contact.
		* @sensor True to be sensor, false to not be a sensor.
		**/
		public SetSensor(sensor: bool): void;
	}
}
