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
/// <reference path="b2Transform.d.ts" />

module Box2D.Common.Math {

	/**
	* Math utility functions.
	**/
	export class b2Math {

		/**
		* Determines if a number is valid.  A number is valid if it is finite.
		* @x Number to check for validity.
		* @return True if x is valid, otherwise false.
		**/
		public static IsValid(x: number): bool;

		/**
		* Dot product of two vector 2s.
		* @a Vector 2 to use in dot product.
		* @b Vector 2 to use in dot product.
		* @return Dot product of a and b.
		**/
		public static Dot(a: b2Vec2, b: b2Vec2): number;

		/**
		* Cross product of two vector 2s.
		* @a Vector 2 to use in cross product.
		* @b Vector 2 to use in cross product.
		* @return Cross product of a and b.
		**/
		public static CrossVV(a: b2Vec2, b: b2Vec2): number;

		/**
		* Cross product of vector 2 and s.
		* @a Vector 2 to use in cross product.
		* @s s value.
		* @return Cross product of a and s.
		**/
		public static CrossVF(a: b2Vec2, s: number): b2Vec2;

		/**
		* Cross product of s and vector 2.
		* @s s value.
		* @a Vector 2 to use in cross product.
		* @return Cross product of s and a.
		**/
		public static CrossFV(s: number, a: b2Vec2): b2Vec2;

		/**
		* Multiply matrix and vector.
		* @A Matrix.
		* @v Vector.
		* @return Result.
		**/
		public static MulMV(A: b2Mat22, v: b2Vec2): b2Vec2;

		/**
		* 
		* @A
		* @v
		* @return
		**/
		public static MulTMV(A: b2Mat22, v: b2Vec2): b2Vec2;

		/**
		* 
		* @T
		* @v
		* @return
		**/
		public static MulX(T: b2Transform, v: b2Vec2): b2Vec2;

		/**
		* 
		* @T
		* @v
		* @return
		**/
		public static MulXT(T: b2Transform, v: b2Vec2): b2Vec2;

		/**
		* Adds two vectors.
		* @a First vector.
		* @b Second vector.
		* @return a + b.
		**/
		public static AddVV(a: b2Vec2, b: b2Vec2): b2Vec2;

		/**
		* Subtracts two vectors.
		* @a First vector.
		* @b Second vector.
		* @return a - b.
		**/
		public static SubtractVV(a: b2Vec2, b: b2Vec2): b2Vec2;

		/**
		* Calculates the distance between two vectors.
		* @a First vector.
		* @b Second vector.
		* @return Distance between a and b.
		**/
		public static Distance(a: b2Vec2, b: b2Vec2): number;

		/**
		* Calculates the squared distance between two vectors.
		* @a First vector.
		* @b Second vector.
		* @return dist^2 between a and b.
		**/
		public static DistanceSquared(a: b2Vec2, b: b2Vec2): number;

		/**
		* 
		* @s
		* @a
		* @return
		**/
		public static MulFV(s: number, a: b2Vec2): b2Vec2;

		/**
		* 
		* @A
		* @B
		* @return
		**/
		public static AddMM(A: b2Mat22, B: b2Mat22): b2Mat22;

		/**
		* 
		* @A
		* @B
		* @return
		**/
		public static MulMM(A: b2Mat22, B: b2Mat22): b2Mat22;

		/**
		* 
		* @A
		* @B
		* @return
		**/
		public static MulTMM(A: b2Mat22, B: b2Mat22): b2Mat22;

		/**
		* Creates an ABS number.
		* @a Number to ABS.
		* @return Absolute value of a.
		**/
		public static Abs(a: number): number;

		/**
		* Creates an ABS vector.
		* @a Vector to ABS all values.
		* @return Vector with all positive values.
		**/
		public static AbsV(a: b2Vec2): b2Vec2;

		/**
		* Creates an ABS matrix.
		* @A Matrix to ABS all values.
		* @return Matrix with all positive values.
		**/
		public static AbsM(A: b2Mat22): b2Mat22;

		/**
		* Determines the minimum number.
		* @a First number.
		* @b Second number.
		* @return a or b depending on which is the minimum.
		**/
		public static Min(a: number, b: number): number;

		/**
		* Determines the minimum vector.
		* @a First vector.
		* @b Second vector.
		* @return a or b depending on which is the minimum.
		**/
		public static MinV(a: b2Vec2, b: b2Vec2): b2Vec2;

		/**
		* Determines the max number.
		* @a First number.
		* @b Second number.
		* @return a or b depending on which is the maximum.
		**/
		public static Max(a: number, b: number): number;

		/**
		* Determines the max vector.
		* @a First vector.
		* @b Second vector.
		* @return a or b depending on which is the maximum.
		**/
		public static MaxV(a: b2Vec2, b: b2Vec2): b2Vec2;

		/**
		* Clamp a number to the range of low to high.
		* @a Number to clamp.
		* @low Low range.
		* @high High range.
		* @return Number a clamped to range of low to high.
		**/
		public static Clamp(a: number, low: number, high: number): number;

		/**
		* Clamps a vector to the range of low to high.
		* @a Vector to clamp.
		* @low Low range.
		* @high High range.
		* @return Vector a clamped to range of low to high.
		**/
		public static ClampV(a: b2Vec2, low: b2Vec2, high: b2Vec2): b2Vec2;

		/**
		* Swaps a and b objects.
		* @a a -> b.
		* @b b -> a.
		**/
		public static Swap(a: any, b: any): void;

		/**
		* Generates a random number.
		* @return Random number.
		**/
		public static Random(): number;

		/**
		* Returns a random number between lo and hi.
		* @lo Lowest random number.
		* @hi Highest random number.
		* @return Number between lo and hi.
		**/
		public static RandomRange(lo: number, hi: number): number;

		/**
		* Calculates the next power of 2 after the given number.
		* @x Number to start search for the next power of 2.
		* @return The next number that is a power of 2.
		**/
		public static NextPowerOfTwo(x: number): number;

		/**
		* Check if a number is a power of 2.
		* @x Number to check if it is a power of 2.
		* @return True if x is a power of 2, otherwise false.
		**/
		public static IsPowerOfTwo(x: number): bool;

		/**
		* Global instance of a zero'ed vector.  Use as read-only.
		**/
		public static b2Vec2_zero: b2Vec2;

		/**
		* Global instance of a 2x2 identity matrix.  Use as read-only.
		**/
		public static b2Mat22_identity: b2Mat22;

		/**
		* Global instance of an identity transform.  Use as read-only.
		**/
		public static b2Transform_identity: b2Transform;
	}
}
