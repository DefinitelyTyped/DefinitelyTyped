declare namespace GrandTheftMultiplayer.Client.Sync {

	class SyncPed {
		LocalHandle: number;
		readonly AverageLatency: number;
		readonly DataLatency: number;
		readonly DebugStep: number;
		readonly IsInVehicle: boolean;
		readonly IsRagdoll: boolean;
		readonly IsReloading: boolean;
		readonly LastUpdateReceived: number;
		readonly MainVehicle: GTA.Vehicle;
		readonly PedVelocity: GTA.Math.Vector3;
		readonly Position: GTA.Math.Vector3;
		readonly Rotation: GTA.Math.Vector3;
		readonly Speed: number;
		readonly TicksSinceLastUpdate: number;
		readonly VehicleHash: number;
		readonly VehicleMods: System.Collections.Generic.Dictionary<number, number>;
		readonly VehicleRotation: GTA.Math.Vector3;
		readonly VehicleVelocity: GTA.Math.Vector3;
	}

}
