/**
	Smoothstep easing function and its inverse
	Reference: https://en.wikipedia.org/wiki/Smoothstep
 */
declare function easingSmoothstep(t: number): number;
declare function easingSmoothstepInverse(t: number): number;

export { easingSmoothstep, easingSmoothstepInverse };
