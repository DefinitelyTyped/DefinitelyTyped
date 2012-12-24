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

/// <reference path="../b2Body.d.ts" />
/// <reference path="../b2DebugDraw.d.ts" />
/// <reference path="../b2World.d.ts" />
/// <reference path="b2ControllerEdge.d.ts" />

module Box2D.Dynamics.Controllers {

	/**
	* Base class for controllers. Controllers are a convience for encapsulating common per-step functionality.
	**/
	export class b2Controller {
		
		/**
		* Body count.
		**/
		public m_bodyCount: number;

		/**
		* List of bodies.
		**/
		public m_bodyList: b2ControllerEdge;

		/**
		* Adds a body to the controller.
		* @body Body to add.
		**/
		public AddBody(body: b2Body): void;

		/**
		* Removes all bodies from the controller.
		**/
		public Clear(): void;

		/**
		* Debug drawing.
		* @debugDraw Handle to drawer.
		**/
		public Draw(debugDraw: b2DebugDraw): void;

		/**
		* Gets the body list.
		* @return Body list.
		**/
		public GetBodyList(): b2ControllerEdge;

		/**
		* Gets the next controller.
		* @return Next controller.
		**/
		public GetNext(): b2Controller;

		/**
		* Gets the world.
		* @return World.
		**/
		public GetWorld(): b2World;

		/**
		* Removes a body from the controller.
		* @body Body to remove from this controller.
		**/
		public RemoveBody(body: b2Body): void;

		/**
		* Step
		* @step b2TimeStep -> Private internal class.  Not sure why this is exposed.
		**/
		public Step(step: any/*b2TimeStep*/): void;
	}
}
