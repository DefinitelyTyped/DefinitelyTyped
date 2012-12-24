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

/// <reference path="../Common/init.d.ts" />
/// <reference path="../Common/b2Color.d.ts" />
/// <reference path="../Common/Math/init.d.ts" />
/// <reference path="../Common/Math/b2Transform.d.ts" />
/// <reference path="../Common/Math/b2Vec2.d.ts" />

module Box2D.Dynamics {
	
	/**
	* Implement and register this class with a b2World to provide debug drawing of physics entities in your game.
	* @example Although Box2D is a physics engine and therefore has nothing to do with drawing, Box2dFlash provides such methods for debugging which are defined in the b2DebugDraw class. In Box2dWeb, a b2DebugDraw takes a canvas-context instead of a Sprite:
	*
	*	var debugDraw = new Box2D.Dynamics.b2DebugDraw();
	*	debugDraw.SetSprite(document.GetElementsByTagName("canvas")[0].getContext("2d"));
	**/
	export class b2DebugDraw {

		/**
		* Draw axis aligned bounding boxes.
		**/
		public static e_aabbBit: number;

		/**
		* Draw center of mass frame.
		**/
		public static e_centerOfMassBit: number;

		/**
		* Draw controllers.
		**/
		public static e_controllerBit: number;

		/**
		* Draw joint connections.
		**/
		public static e_jointBit: number;

		/**
		* Draw broad-phase pairs.
		**/
		public static e_pairBit: number;

		/**
		* Draw shapes.
		**/
		public static e_shapeBit: number;

		/**
		* Constructor.
		**/
		constructor();

		/**
		* Append flags to the current flags.
		* @flags Flags to add.
		**/
		public AppendFlags(flags:number): void;

		/**
		* Clear flags from the current flags.
		* @flags flags to clear.
		**/
		public ClearFlags(flags:number): void;

		/**
		* Draw a circle.
		* @center Circle center point.
		* @radius Circle radius.
		* @color Circle draw color.
		**/
		public DrawCircle(center: b2Math.b2Vec2, radius: number, color: b2Common.b2Color): void;

		/**
		* Draw a closed polygon provided in CCW order.
		* @vertices Polygon verticies.
		* @vertexCount Number of vertices in the polygon, usually vertices.length.
		* @color Polygon draw color.
		**/
		public DrawPolygon(vertices: b2Math.b2Vec2[], vertexCount:number, color: b2Common.b2Color): void;

		/**
		* Draw a line segment.
		* @p1 Line beginpoint.
		* @p2 Line endpoint.
		* @color Line color.
		**/
		public DrawSegment(p1: b2Math.b2Vec2, p2: b2Math.b2Vec2, color: b2Common.b2Color): void;

		/**
		* Draw a solid circle.
		* @center Circle center point.
		* @radius Circle radius.
		* @axis Circle axis.
		* @color Circle color.
		**/
		public DrawSolidCircle(center: b2Math.b2Vec2, radius: number, axis: b2Math.b2Vec2, color: b2Common.b2Color): void;

		/**
		* Draw a solid closed polygon provided in CCW order.
		* @vertices Polygon verticies.
		* @vertexCount Number of vertices in the polygon, usually vertices.length.
		* @color Polygon draw color.
		**/
		public DrawSolidPolygon(vertices: b2Math.b2Vec2[], vertexCount:number, color: b2Common.b2Color): void;

		/**
		* Draw a transform. Choose your own length scale.
		* @xf Transform to draw.
		**/
		public DrawTransform(xf: b2Math.b2Transform): void;

		/**
		* Get the alpha value used for lines.
		* @return Alpha value used for drawing lines.
		**/
		public GetAlpha(): number;

		/**
		* Get the draw scale.
		* @return Draw scale ratio.
		**/
		public GetDrawScale(): number;

		/**
		* Get the alpha value used for fills.
		* @return Alpha value used for drawing fills.
		**/
		public GetFillAlpha(): number;

		/**
		* Get the drawing flags.
		* @return Drawing flags.
		**/
		public GetFlags(): number;

		/**
		* Get the line thickness.
		* @return Line thickness.
		**/
		public GetLineThickness(): number;

		/**
		* Get the HTML Canvas Element for drawing.
		* @note box2dflash uses Sprite object, box2dweb uses HTMLCanvasElement, that is why this function is called GetSprite().
		* @return The HTML Canvas Element used for debug drawing.
		**/
		public GetSprite(): HTMLCanvasElement;

		/**
		* Get the scale used for drawing XForms.
		* @return Scale for drawing transforms.
		**/
		public GetXFormScale(): number;

		/**
		* Set the alpha value used for lines.
		* @alpha Alpha value for drawing lines.
		**/
		public SetAlpha(alpha: number): void;

		/**
		* Set the draw scale.
		* @drawScale Draw scale ratio.
		**/
		public SetDrawScale(drawScale: number): void;

		/**
		* Set the alpha value used for fills.
		* @alpha Alpha value for drawing fills.
		**/
		public SetFillAlpha(alpha: number): void;

		/**
		* Set the drawing flags.
		* @flags Sets the drawing flags.
		**/
		public SetFlags(flags: number): void;

		/**
		* Set the line thickness.
		* @lineThickness The new line thickness.
		**/
		public SetLineThickness(lineThickness: number): void;

		/**
		* Set the HTML Canvas Element for drawing.
		* @note box2dflash uses Sprite object, box2dweb uses HTMLCanvasElement, that is why this function is called SetSprite().
		* @canvas HTML Canvas Element to draw debug information to.
		**/
		public SetSprite(canvas: HTMLCanvasElement): void;

		/**
		* Set the scale used for drawing XForms.
		* @xformScale The transform scale.
		**/
		public SetXFormScale(xformScale: number): void;
	}
}
