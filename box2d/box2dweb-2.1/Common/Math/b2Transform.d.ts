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

/// <reference path="b2Vec2.d.ts" />
/// <reference path="b2Mat22.d.ts" />

module Box2D.Common.Math {

	/**
	* A transform contains translation and rotation. It is used to represent the position and orientation of rigid frames.
	**/
	export class b2Transform {

		/**
		* Transform position.
		**/
		public position: b2Vec2;

		/**
		* Transform rotation.
		**/
		public R: b2Mat22;

		/**
		* The default constructor does nothing (for performance).
		* @pos Position
		* @r Rotation
		**/
		constructor (pos: b2Vec2, r: b2Mat22);

		/**
		* Calculate the angle that the rotation matrix represents.
		* @return Rotation matrix angle.
		**/
		public GetAngle(): number;

		/**
		* Initialize using a position vector and rotation matrix.
		* @pos Position
		* @r Rotation
		**/
		public Initialize(pos: b2Vec2, r: b2Mat22): void;

		/**
		* Sets the transfrom from a transfrom.
		* @x Transform to copy values from.
		**/
		public Set(x: b2Transform): void;

		/**
		* Set this to the identity transform.
		**/
		public SetIdentity(): void;
	}
}
