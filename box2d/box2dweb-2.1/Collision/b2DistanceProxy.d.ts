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

/// <reference path="../Common/Math/init.d.ts" />
/// <reference path="../Common/Math/b2Vec2.d.ts" />
/// <reference path="Shapes/b2Shape.d.ts" />

module Box2D.Collision {

	/**
	* A distance proxy is used by the GJK algorithm. It encapsulates any shape.
	**/
	export class b2DistanceProxy {
	
		/**
		* Count
		**/
		public m_count: number;

		/**
		* Radius
		**/
		public m_radius: number;

		/**
		* Verticies
		**/
		public m_vertices: b2Math.b2Vec2[];

		/**
		* Get the supporting vertex index in the given direction.
		* @d Direction to look for the supporting vertex.
		* @return Supporting vertex index.
		**/
		public GetSupport(d: b2Math.b2Vec2): number;

		/**
		* Get the supporting vertex in the given direction.
		* @d Direction to look for the supporting vertex.
		* @return Supporting vertex.
		**/
		public GetSupportVertex(d: b2Math.b2Vec2): b2Math.b2Vec2;

		/**
		* Get a vertex by index.  Used by b2Distance.
		* @return Vertex at the given index.
		**/
		public GetVertex(index: number): b2Math.b2Vec2;

		/**
		* Get the vertex count.
		* @return The number of vertices. (m_vertices.length)
		**/
		public GetVertexCount(): number;

		/**
		* Initialize the proxy using the given shape. The shape must remain in scope while the proxy is in use.
		* @shape Shape to initialize the distance proxy.
		**/
		public Set(shape: Shapes.b2Shape): void;
	}
}
