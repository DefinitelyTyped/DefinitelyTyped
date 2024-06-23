import "ecma-proposal-math-extensions";

Math.scale(42, 21, 64, 0, 100);
Math.fscale(0.42, 0.21, 0.64, 0.0, 1.0);
Math.clamp(42, 0, 100);
Math.radians(180) === 180 * Math.DEG_PER_RAD;
Math.degrees(Math.PI) === Math.PI * Math.RAD_PER_DEG;
