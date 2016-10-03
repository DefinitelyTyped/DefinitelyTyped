/// <reference path="box2dweb.d.ts" />

import b2Common = Box2D.Common;
import b2Math = Box2D.Common.Math;
import b2Collision = Box2D.Collision;
import b2Shapes = Box2D.Collision.Shapes;
import b2Dynamics = Box2D.Dynamics;
import b2Contacts = Box2D.Dynamics.Contacts;
import b2Controllers = Box2D.Dynamics.Controllers;
import b2Joints = Box2D.Dynamics.Joints;

var w1 = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0, 10), true);
var w2 = new b2Dynamics.b2World(new b2Math.b2Vec2(0, 10), true);

var debugDraw = new Box2D.Dynamics.b2DebugDraw();
debugDraw.SetSprite((<HTMLCanvasElement>document.getElementsByTagName("canvas")[0]).getContext("2d"));
