declare namespace GrandTheftMultiplayer.Shared.Math {

	class Vector3 {
		X: number;
		Y: number;
		Z: number;
		readonly Normalized: GrandTheftMultiplayer.Shared.Math.Vector3;
		constructor(x: number, y: number, z: number);
		constructor(x: number, y: number, z: number);
		constructor();
		Lerp(start: GrandTheftMultiplayer.Shared.Math.Vector3, end: GrandTheftMultiplayer.Shared.Math.Vector3, n: number): GrandTheftMultiplayer.Shared.Math.Vector3;
		Distance(a: GrandTheftMultiplayer.Shared.Math.Vector3, b: GrandTheftMultiplayer.Shared.Math.Vector3): number;
		DistanceSquared(a: GrandTheftMultiplayer.Shared.Math.Vector3, b: GrandTheftMultiplayer.Shared.Math.Vector3): number;
		ToString(): string;
		LengthSquared(): number;
		Length(): number;
		Normalize(): void;
		Add(right: GrandTheftMultiplayer.Shared.Math.Vector3): GrandTheftMultiplayer.Shared.Math.Vector3;
		Subtract(right: GrandTheftMultiplayer.Shared.Math.Vector3): GrandTheftMultiplayer.Shared.Math.Vector3;
		Multiply(right: number): GrandTheftMultiplayer.Shared.Math.Vector3;
		Divide(right: number): GrandTheftMultiplayer.Shared.Math.Vector3;
		RandomXY(): GrandTheftMultiplayer.Shared.Math.Vector3;
		Around(distance: number): GrandTheftMultiplayer.Shared.Math.Vector3;
		DistanceToSquared(right: GrandTheftMultiplayer.Shared.Math.Vector3): number;
		DistanceTo(right: GrandTheftMultiplayer.Shared.Math.Vector3): number;
		DistanceToSquared2D(right: GrandTheftMultiplayer.Shared.Math.Vector3): number;
		DistanceTo2D(right: GrandTheftMultiplayer.Shared.Math.Vector3): number;
	}

}
