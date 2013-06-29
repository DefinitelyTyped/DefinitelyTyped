box2dweb.d.ts
===========

This is a derived work of the original Box2D C++ located here: http://box2d.org/

This is a typescript definitions file for box2dweb.js located here: http://code.google.com/p/box2dweb/

There are a few ports of Box2D to javascript, I have specifically picked box2dweb.js since it has zero dependencies and can be linked to your project via a single file.  It also appears to be the most up to date with box2d and is a direct automated port from Box2DFlash (http://www.box2dflash.org/)

Basic Usage
==========

Import Statements
-----------------

Reference the box2dweb.d.ts file in your project and in an appropriate location include the following import statements to reduce the amount of typing you will need to do to acccess deeply nested modules.

```typescript
/// <reference path="box2dweb.d.ts" />

// Include the following imports, or add more/less, to reduce the module nesting.
import b2Common = Box2D.Common;
import b2Math = Box2D.Common.Math;
import b2Collision = Box2D.Collision;
import b2Shapes = Box2D.Collision.Shapes;
import b2Dynamics = Box2D.Dynamics;
import b2Contacts = Box2D.Dynamics.Contacts;
import b2Controllers = Box2D.Dynamics.Controllers;
import b2Joints = Box2D.Dynamics.Joints;
```

Debug Drawing
-------------

Notes from Box2DWeb

Although Box2D is a physics engine and therefore has nothing to do with drawing, Box2dFlash provides such methods for debugging which are defined in the b2DebugDraw class. In Box2dWeb, a b2DebugDraw takes a canvas-context instead of a Sprite:

```typescript
var debugDraw = new Box2D.Dynamics.b2DebugDraw();
debugDraw.SetSprite(document.getElementsByTagName("canvas")[0].getContext("2d"));
```

Events
------

Notes from Box2DWeb

You have to implement event-interfaces in Box2dFlash. Since Javascript doesn't support classical inheritance natively, I show you how to deal with events in Box2dWeb:
```typescript
var world = new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(0, 10), true);

/* ... add bodies, etc. ... */

var myListener = new Box2D.Dynamics.b2DestructionListener;

myListener.SayGoodbyeFixture = function(fixture) {
   alert("goodbye fixture ...");
}

world.SetDestructionListener(myListener);
```

Change Log
==========

2.1a 2013/06/28
---------------
* Upgraded to TypeScript v0.9
* Removed import statements so the user can now declare the smaller namespaces in their code.  Before the import statements were not 'exported', so they appeared as 'any' objects.


License
=======

Box2DWeb-2.1.d.ts Copyright (c) 2012 Josh Baldwin http://github.com/jbaldwin/box2dweb.d.ts
There are a few competing javascript Box2D ports.
This definitions file is for Box2dWeb.js ->
  http://code.google.com/p/box2dweb/

Box2D C++ Copyright (c) 2006-2007 Erin Catto http://www.gphysics.com

This software is provided 'as-is', without any express or implied
warranty.  In no event will the authors be held liable for any damages
arising from the use of this software.
Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:
1. The origin of this software must not be misrepresented; you must not
   claim that you wrote the original software. If you use this software
   in a product, an acknowledgment in the product documentation would be
   appreciated but is not required.
2. Altered source versions must be plainly marked as such, and must not be
   misrepresented as being the original software.
3. This notice may not be removed or altered from any source distribution.
