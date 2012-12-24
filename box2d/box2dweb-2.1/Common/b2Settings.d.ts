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

module Box2D.Common {

	/**
	* Controls Box2D global settings.
	**/
	export class b2Settings {

		/**
		* b2Assert is used internally to handle assertions. By default, calls are commented out to save performance, so they serve more as documentation than anything else.
		**/
		public static b2Assert(a: bool): void;

		/**
		* Friction mixing law. Feel free to customize this.
		* Friction values are usually set between 0 and 1. (0 = no friction, 1 = high friction)
		* By default this is `return Math.sqrt(friction1, friction2);`
		* @friction1 Friction 1 to mix.
		* @friction2 Friction 2 to mix.
		* @return The two frictions mixed as one value.
		**/
		public static b2MixFriction(friction1: number, friction2: number): number;

		/**
		* Restitution mixing law. Feel free to customize this.  Restitution is used to make objects bounce.
		* Restitution values are usually set between 0 and 1. (0 = no bounce (inelastic), 1 = perfect bounce (perfectly elastic))
		* By default this is `return Math.Max(restitution1, restitution2);`
		* @restitution1 Restitution 1 to mix.
		* @restitution2 Restitution 2 to mix.
		* @return The two restitutions mixed as one value.
		**/
		public static b2MixRestitution(restitution1: number, restitution2: number): number;

		/**
		* This is used to fatten AABBs in the dynamic tree. This allows proxies to move by a small amount without triggering a tree adjustment. This is in meters.
		**/
		public static b2_aabbExtension: number;

		/**
		* This is used to fatten AABBs in the dynamic tree. This is used to predict the future position based on the current displacement. This is a dimensionless multiplier.
		**/
		public static b2_aabbMultiplier: number;

		/**
		* A body cannot sleep if its angular velocity is above this tolerance.
		**/
		public static b2_angularSleepTolerance: number;

		/**
		* A small angle used as a collision and constraint tolerance. Usually it is chosen to be numerically significant, but visually insignificant.
		**/
		public static b2_angularSlop: number;

		/**
		* This scale factor controls how fast overlap is resolved. Ideally this would be 1 so that overlap is removed in one time step. However using values close to 1 often lead to overshoot.
		**/
		public static b2_contactBaumgarte: number;

		/**
		* A body cannot sleep if its linear velocity is above this tolerance.
		**/
		public static b2_linearSleepTolerance: number;

		/**
		* A small length used as a collision and constraint tolerance. Usually it is chosen to be numerically significant, but visually insignificant.
		**/
		public static b2_linearSlop: number;

		/**
		* The maximum angular position correction used when solving constraints. This helps to prevent overshoot.
		**/
		public static b2_maxAngularCorrection: number;

		/**
		* The maximum linear position correction used when solving constraints. This helps to prevent overshoot.
		**/
		public static b2_maxLinearCorrection: number;

		/**
		* Number of manifold points in a b2Manifold. This should NEVER change.
		**/
		public static b2_maxManifoldPoints: number;

		/**
		* The maximum angular velocity of a body. This limit is very large and is used to prevent numerical problems. You shouldn't need to adjust this.
		**/
		public static b2_maxRotation: number;

		/**
		* b2_maxRotation squared
		**/
		public static b2_maxRotationSquared: number;

		/**
		* Maximum number of contacts to be handled to solve a TOI island.
		**/
		public static b2_maxTOIContactsPerIsland: number;

		/**
		* Maximum number of joints to be handled to solve a TOI island.
		**/
		public static b2_maxTOIJointsPerIsland: number;

		/**
		* The maximum linear velocity of a body. This limit is very large and is used to prevent numerical problems. You shouldn't need to adjust this.
		**/
		public static b2_maxTranslation: number;

		/**
		* b2_maxTranslation squared
		**/
		public static b2_maxTranslationSquared: number;

		/**
		* 3.141592653589793
		**/
		public static b2_pi: number;

		/**
		* The radius of the polygon/edge shape skin. This should not be modified. Making this smaller means polygons will have and insufficient for continuous collision. Making it larger may create artifacts for vertex collision.
		**/
		public static b2_polygonRadius: number;

		/**
		* The time that a body must be still before it will go to sleep.
		**/
		public static b2_timeToSleep: number;

		/**
		* Continuous collision detection (CCD) works with core, shrunken shapes. This is the amount by which shapes are automatically shrunk to work with CCD. This must be larger than b2_linearSlop.
		* @see also b2_linearSlop
		**/
		public static b2_toiSlop: number;

		/**
		* A velocity threshold for elastic collisions. Any collision with a relative linear velocity below this threshold will be treated as inelastic.
		**/
		public static b2_velocityThreshold: number;


		/**
		* Maximum unsigned short value.
		**/
		public static USHRT_MAX: number;

		/**
		* The current version of Box2D.
		**/
		public static VERSION: string;
	}
}
