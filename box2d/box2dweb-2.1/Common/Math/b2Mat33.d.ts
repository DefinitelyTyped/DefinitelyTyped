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
/// <reference path="b2Vec3.d.ts" />

module Box2D.Common.Math {

	/**
	* A 3-by3 matrix.  Stored in column-major order.
	**/
	export class b2Mat33 {

		/**
		* Column 1
		**/
		public col1: b2Vec3;

		/**
		* Column 2
		**/
		public col2: b2Vec3;

		/**
		* Column 3
		**/
		public col3: b2Vec3;

		/**
		* Constructor
		* @c1 Column 1
		* @c2 Column 2
		* @c3 Column 3
		**/
		constructor (c1: b2Vec3, c2: b2Vec3, c3: b2Vec3);

		/**
		* Adds the two 3x3 matricies together and stores the result in this matrix.
		* @m 3x3 matrix to add.
		**/
		public AddM(m: b2Mat33): void;

		/**
		* Creates a copy of the matrix.
		* @return Copy of this 3x3 matrix.
		**/
		public Copy(): b2Mat33;

		/**
		* Sets the 3x3 matrix to identity.
		**/
		public SetIdentity(): void;

		/**
		* Sets the 3x3 matrix from a 3x3 matrix.
		* @m 3x3 matrix values.
		**/
		public SetM(m: b2Mat33): void;

		/**
		* Sets the 3x3 matrix from 3 column vectors.
		* @c1 Column 1 vector.
		* @c2 Column 2 vector.
		* @c3 Column 2 vector.
		**/
		public SetVVV(c1: b2Vec3, c2: b2Vec3, c3: b2Vec3): void;

		/**
		* Sets the 3x3 matrix to all zeros.
		**/
		public SetZero(): void;

		/**
		* TODO, has something to do with the determinant
		* @out Solved vector
		* @bX
		* @bY
		* @return Solved vector
		**/
		public Solve22(out: b2Vec2, bX: number, bY: number): b2Vec2;

		/**
		* TODO, has something to do with the determinant
		* @out Solved vector
		* @bX
		* @bY
		* @bZ
		* @return Solved vector
		**/
		public Solve33(out: b2Vec3, bX: number, bY: number, bZ: number): b2Vec3;
	}
}
