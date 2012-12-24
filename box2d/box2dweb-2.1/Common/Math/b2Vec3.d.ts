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

module Box2D.Common.Math {

	/**
	* A 2D column vector with 3 elements.
	**/
	export class b2Vec3 {

		/**
		* x value.
		**/
		public x: number;

		/**
		* y value.
		**/
		public y: number;

		/**
		* z value.
		**/
		public z: number;

		/**
		* Construct using coordinates x,y,z.
		* @x x value, default = 0.
		* @y y value, default = 0.
		* @z z value, default = 0.
		**/
		constructor (x?: number, y?: number, z?: number);

		/**
		* Adds the vector 3 to this vector 3.  The result is stored in this vector 3.
		* @v Vector 3 to add.
		**/
		public Add(v: b2Vec3): void;

		/**
		* Creates a copy of the vector 3.
		* @return Copy of this vector 3.
		**/
		public Copy(): b2Vec3;

		/**
		* Gets the negative of this vector 3.
		* @return Negative copy of this vector 3.
		**/
		public GetNegative(): b2Vec3;

		/**
		* Vector multiplication.  Stores the result in this vector 3.
		* @a Value to multiple the vector's values by.
		**/
		public Multiply(a: number): void;

		/**
		* Sets this vector 3 to its negative.
		**/
		public NegativeSelf(): void;

		/**
		* Sets the vector 3.
		* @x x value, default is 0.
		* @y y value, default is 0.
		* @z z value, default is 0.
		**/
		public Set(x?: number, y?: number, z?: number): void;

		/**
		* Sets the vector 3 from a vector 3.
		* @v Vector 3 to copy values from.
		**/
		public SetV(v: b2Vec3): void;

		/**
		* Sets the vector 3 to zero values.
		**/
		public SetZero(): void;

		/**
		* Subtracts the vector 3 from this vector 3.  The result is stored in this vector 3.
		* @v Vector 3 to subtract.
		**/
		public Subtract(v: b2Vec3): void;
	}
}
