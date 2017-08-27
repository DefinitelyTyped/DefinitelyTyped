declare namespace GrandTheftMultiplayer.Shared {

	class Attachment {
		NetHandle: number;
		PositionOffset: GrandTheftMultiplayer.Shared.Math.Vector3;
		RotationOffset: GrandTheftMultiplayer.Shared.Math.Vector3;
		Bone: string;
		constructor();
	}

	class Movement {
		Duration: number;
		Start: number;
		StartVector: GrandTheftMultiplayer.Shared.Math.Vector3;
		EndVector: GrandTheftMultiplayer.Shared.Math.Vector3;
		ServerStartTime: number;
		constructor();
	}

	enum WeaponHash {
		SniperRifle = 100416529,
		FireExtinguisher = 101631238,
		Snowball = 126349499,
		VintagePistol = 137902532,
		CombatPDW = 171789620,
		HeavySniper = 205991906,
		MicroSMG = 324215364,
		Pistol = 453432689,
		PumpShotgun = 487013001,
		APPistol = 584646201,
		Ball = 600439132,
		Molotov = 615608432,
		SMG = 736523883,
		StickyBomb = 741814745,
		PetrolCan = 883325847,
		StunGun = 911657153,
		HeavyShotgun = 984333226,
		DoubleBarrelShotgun = -275439685,
		CompactRifle = 1649403952,
		Minigun = 1119849093,
		Golfclub = 1141786504,
		FlareGun = 1198879012,
		Flare = 1233104067,
		GrenadeLauncherSmoke = 1305664598,
		Hammer = 1317494643,
		CombatPistol = 1593441988,
		Gusenberg = 1627465347,
		HomingLauncher = 1672152130,
		Nightstick = 1737195953,
		Railgun = 1834241177,
		SawnoffShotgun = 2017895192,
		BullpupRifle = 2132975508,
		Firework = 2138347493,
		CombatMG = 2144741730,
		CarbineRifle = -2084633992,
		Crowbar = -2067956739,
		Flashlight = -1951375401,
		Dagger = -1834847097,
		Grenade = -1813897027,
		Bat = -1786099057,
		Pistol50 = -1716589765,
		Knife = -1716189206,
		MG = -1660422300,
		BullpupShotgun = -1654528753,
		BZGas = -1600701090,
		Unarmed = -1569615261,
		GrenadeLauncher = -1568386805,
		Musket = -1466123874,
		ProximityMine = -1420407917,
		AdvancedRifle = -1357824103,
		RPG = -1312131151,
		SNSPistol = -1076751822,
		AssaultRifle = -1074790547,
		SpecialCarbine = -1063057011,
		Revolver = -1045183535,
		MarksmanRifle = -952879014,
		HeavyPistol = -771403250,
		KnuckleDuster = -656458692,
		MachinePistol = -619010992,
		MarksmanPistol = -598887786,
		Machete = -581044007,
		SwitchBlade = -538741184,
		AssaultShotgun = -494615257,
		AssaultSMG = -270015777,
		Hatchet = -102973651,
		Bottle = -102323637,
		SmokeGrenade = -37975472,
		Parachute = -72657034,
		Autoshotgun = 317205821,
		Battleaxe = -853065399,
		CompactLauncher = 125959754,
		MiniSMG = -1121678507,
		Pipebomb = -1169823560,
		Poolcue = -1810795771,
		Wrench = 419712736
	}

}
