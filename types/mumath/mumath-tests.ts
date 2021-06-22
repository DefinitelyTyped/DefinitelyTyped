import mumath = require("mumath");

import mumathClamp = require("mumath/clamp");
import mumathClosest = require("mumath/closest");
import mumathIsMultiple = require("mumath/isMultiple");
import mumathLen = require("mumath/len");
import mumathLerp = require("mumath/lerp");
import mumathMod = require("mumath/mod");
import mumathOrder = require("mumath/order");
import mumathPrecision = require("mumath/precision");
import mumathRound = require("mumath/round");
import mumathScale = require("mumath/scale");
import mumathWithin = require("mumath/within");

mumath.clamp(1, 2, 3);
mumathClamp(1, 2, 3);

mumath.closest(5, [1, 7, 3, 6, 10]);
mumathClosest(5, [1, 7, 3, 6, 10]);

mumath.isMultiple(5, 10, 1.000074);
mumath.isMultiple(5, 10);
mumathIsMultiple(5, 10, 1.000074);

mumath.len(15, 1.0);
mumathLen(15, 1.0);

mumath.lerp(1, 2, 3);
mumathLerp(1, 2, 3);

mumath.mod(1, 2, 3);
mumath.mod(1, 2);
mumathMod(1, 2, 3);

mumath.order(5);
mumathOrder(5);

mumath.precision(5.0000001);
mumathPrecision(5.0000001);

mumath.round(0.3, 0.5);
mumathRound(0.3, 0.5);

mumath.scale(5.93, [1.0, 35, 10, 7.135]);
mumathScale(5.93, [1.0, 35, 10, 7.135]);

mumath.within(5, 1, 10);
mumathWithin(5, 1, 10);
