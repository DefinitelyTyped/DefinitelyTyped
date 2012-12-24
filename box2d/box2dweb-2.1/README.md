box2dweb.d.ts
===========

This is a derived work of the original Box2D C++ located here: http://box2d.org/

This is a typescript definitions file for box2dweb.js located here: http://code.google.com/p/box2dweb/

There are a few ports of Box2D to javascript, I have specifically picked box2dweb.js since it has zero dependencies and can be linked to your project via a single file.  It also appears to be the most up to date with box2d and is a direct automated port from Box2DFlash (http://www.box2dflash.org/)

The actual typescript definitions are organized with the original Box2D directory structure, however you can reference everything by only including the box2dweb.d.ts in the root folder.
```javascript
/// <reference path="box2dweb.d.ts" />
```


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
