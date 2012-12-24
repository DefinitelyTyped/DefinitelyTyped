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
/// <reference path="../../Common/Math/b2Mat22.d.ts" />
/// <reference path="b2Controller.d.ts" />

module Box2D.Dynamics.Controllers {

	/**
	* Applies top down linear damping to the controlled bodies The damping is calculated by multiplying velocity by a matrix in local co-ordinates.
	**/
	export class b2TensorDampingController extends b2Controller {

		/**
		* Set this to a positive number to clamp the maximum amount of damping done.
		* @default = 0
		**/
		public maxTimeStep: number;

		/**
		* Tensor to use in damping model.
		**/
		public T: b2Math.b2Mat22;

		/**
		* Helper function to set T in a common case.
		* @xDamping x
		* @yDamping y
		**/
		public SetAxisAligned(xDamping: number, yDamping: number): void;

		/**
		* Step.
		* @step Internal b2TimeStep structure.
		**/
		public Step(step: any/* b2TimeStep*/): void;
	}
}
