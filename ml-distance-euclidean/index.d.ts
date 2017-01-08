// Type definitions for ml-distance-euclidean v1.0.0
// Project: https://github.com/mljs/distance-euclidean
// Definitions by: Diana Caro <https://github.com/CaribeSoy/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var euclidean: ML.Math.Distance.euclidean.Euclidean;
export = euclidean;

declare namespace ML.Math.Distance.euclidean {
	export interface Euclidean {
		(p: number[], q: number[]): number;
		squared: (p: number[], q: number[]) => number;
	}
}
