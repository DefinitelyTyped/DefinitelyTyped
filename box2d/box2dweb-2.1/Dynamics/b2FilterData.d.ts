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

module Box2D.Dynamics {

	/**
	* This holds contact filtering data.
	**/
	export class b2FilterData {
		
		/**
		* The collision category bits. Normally you would just set one bit.
		**/
		public categoryBits: number;

		/**
		* Collision groups allow a certain group of objects to never collide (negative) or always collide (positive). Zero means no collision group. Non-zero group filtering always wins against the mask bits.
		**/
		public groupIndex: number;

		/**
		* The collision mask bits. This states the categories that this shape would accept for collision.
		**/
		public maskBits: number;

		/**
		* Creates a copy of the filter data.
		* @return Copy of this filter data.
		**/
		public Copy(): b2FilterData;
	}
}
