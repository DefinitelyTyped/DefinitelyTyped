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

module Box2D.Common.Math {
	
	/**
	* A 2-by-2 matrix.  Stored in column-major order.
	**/
	export class b2Mat22 {

		/**
		* Column 1
		**/
		public col1: b2Vec2;

		/**
		* Column 2
		**/
		public col2: b2Vec2;

		/**
		* Empty constructor
		**/
		constructor ();

		/**
		* Sets all internal matrix values to absolute values.
		**/
		public Abs(): void;

		/**
		* Adds the two 2x2 matricies together and stores the result in this matrix.
		* @m 2x2 matrix to add.
		**/
		public AddM(m: b2Mat22): void;

		/**
		* Creates a copy of the matrix.
		* @return Copy of this 2x2 matrix.
		**/
		public Copy(): b2Mat22;

		/**
		* Creates a rotation 2x2 matrix from the given angle.
		* R(theta) = [ cos(theta)  -sin(theta) ]
		*            [ sin(theta)   cos(theta) ]
		* @angle Matrix angle (theta).
		* @return 2x2 matrix.
		**/
		public static FromAngle(angle: number): b2Mat22;
		
		/**
		* Creates a 2x2 matrix from two columns.
		* @c1 Column 1 vector.
		* @c2 Column 2 vector.
		* @return 2x2 matrix.
		**/
		public static FromVV(c1: b2Vec2, c2: b2Vec2): b2Mat22;
		
		/**
		* Gets the rotation matrix angle.
		* R(theta) = [ cos(theta)  -sin(theta) ]
		*            [ sin(theta)   cos(theta) ]
		* @return The rotation matrix angle (theta).
		**/
		public GetAngle(): number;

		/**
		* Compute the inverse of this matrix, such that inv(A) A = identity.
		* @out Inverse matrix.
		* @return Inverse matrix.
		**/
		public GetInverse(out: b2Mat22): b2Mat22;

		/**
		* Sets the 2x2 rotation matrix from the given angle.
		* R(theta) = [ cos(theta)  -sin(theta) ]
		*            [ sin(theta)   cos(theta) ]
		* @angle Matrix angle (theta).
		**/
		public Set(angle: number): void;
		
		/**
		* Sets the 2x2 matrix to identity.
		**/
		public SetIdentity(): void;

		/**
		* Sets the 2x2 matrix from a 2x2 matrix.
		* @m 2x2 matrix values.
		**/
		public SetM(m: b2Mat22): void;

		/**
		* Sets the 2x2 matrix from 2 column vectors.
		* @c1 Column 1 vector.
		* @c2 Column 2 vector.
		**/
		public SetVV(c1: b2Vec2, c2: b2Vec2): void;

		/**
		* Sets the 2x2 matrix to all zeros.
		**/
		public SetZero(): void;

		/**
		* TODO, has something to do with the determinant
		* @out Solved vector
		* @bX
		* @bY
		* @return Solved vector
		**/
		public Solve(out: b2Vec2, bX: number, bY: number): b2Vec2;
	}
}
