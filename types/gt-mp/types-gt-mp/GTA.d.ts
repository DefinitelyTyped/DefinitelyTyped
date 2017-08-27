declare namespace GTA {

	enum AnimationFlags {
		None = 0,
		Loop = 1,
		StayInEndFrame = 2,
		UpperBodyOnly = 16,
		AllowRotation = 32,
		CancelableWithMovement = 128,
		RagdollOnCollision = 4194304
	}

	class Blip {
		Position: GTA.Math.Vector3;
		Rotation: number;
		Scale: number;
		readonly Type: number;
		Alpha: number;
		Priority: number;
		NumberLabel: number;
		Color: GTA.BlipColor;
		Sprite: GTA.BlipSprite;
		Name: string;
		readonly Entity: GTA.Entity;
		ShowRoute: boolean;
		IsFriendly: boolean;
		IsFlashing: boolean;
		readonly IsOnMinimap: boolean;
		IsShortRange: boolean;
		constructor(handle: number);
		RemoveNumberLabel(): void;
		Remove(): void;
		Exists(): boolean;
		Exists(blip: GTA.Blip): boolean;
		Equals(blip: GTA.Blip): boolean;
		Equals(obj: any): boolean;
		GetHashCode(): number;
	}

	enum BlipColor {
		White = 0,
		Red = 1,
		Green = 2,
		Blue = 3,
		Yellow = 66
	}

	enum BlipSprite {
		Standard = 1,
		BigBlip = 2,
		PoliceOfficer = 3,
		PoliceArea = 4,
		Square = 5,
		Player = 6,
		North = 7,
		Waypoint = 8,
		BigCircle = 9,
		BigCircleOutline = 10,
		ArrowUpOutlined = 11,
		ArrowDownOutlined = 12,
		ArrowUp = 13,
		ArrowDown = 14,
		PoliceHelicopterAnimated = 15,
		Jet = 16,
		Number1 = 17,
		Number2 = 18,
		Number3 = 19,
		Number4 = 20,
		Number5 = 21,
		Number6 = 22,
		Number7 = 23,
		Number8 = 24,
		Number9 = 25,
		Number10 = 26,
		GTAOCrew = 27,
		GTAOFriendly = 28,
		Lift = 36,
		RaceFinish = 38,
		Safehouse = 40,
		PoliceOfficer2 = 41,
		PoliceCarDot = 42,
		PoliceHelicopter = 43,
		ChatBubble = 47,
		Garage2 = 50,
		Drugs = 51,
		Store = 52,
		PoliceCar = 56,
		PolicePlayer = 58,
		PoliceStation = 60,
		Hospital = 61,
		Helicopter = 64,
		StrangersAndFreaks = 65,
		ArmoredTruck = 66,
		TowTruck = 68,
		Barber = 71,
		LosSantosCustoms = 72,
		Clothes = 73,
		TattooParlor = 75,
		Simeon = 76,
		Lester = 77,
		Michael = 78,
		Trevor = 79,
		Rampage = 84,
		VinewoodTours = 85,
		Lamar = 86,
		Franklin = 88,
		Chinese = 89,
		Airport = 90,
		Bar = 93,
		BaseJump = 94,
		CarWash = 100,
		ComedyClub = 102,
		Dart = 103,
		FIB = 106,
		DollarSign = 108,
		Golf = 109,
		AmmuNation = 110,
		Exile = 112,
		ShootingRange = 119,
		Solomon = 120,
		StripClub = 121,
		Tennis = 122,
		Triathlon = 126,
		OffRoadRaceFinish = 127,
		Key = 134,
		MovieTheater = 135,
		Music = 136,
		Marijuana = 140,
		Hunting = 141,
		ArmsTraffickingGround = 147,
		Nigel = 149,
		AssaultRifle = 150,
		Bat = 151,
		Grenade = 152,
		Health = 153,
		Knife = 154,
		Molotov = 155,
		Pistol = 156,
		RPG = 157,
		Shotgun = 158,
		SMG = 159,
		Sniper = 160,
		SonicWave = 161,
		PointOfInterest = 162,
		GTAOPassive = 163,
		GTAOUsingMenu = 164,
		Link = 171,
		Minigun = 173,
		GrenadeLauncher = 174,
		Armor = 175,
		Castle = 176,
		Camera = 184,
		Handcuffs = 188,
		Yoga = 197,
		Cab = 198,
		Number11 = 199,
		Number12 = 200,
		Number13 = 201,
		Number14 = 202,
		Number15 = 203,
		Number16 = 204,
		Shrink = 205,
		Epsilon = 206,
		PersonalVehicleCar = 225,
		PersonalVehicleBike = 226,
		Custody = 237,
		ArmsTraffickingAir = 251,
		Fairground = 266,
		PropertyManagement = 267,
		Altruist = 269,
		Enemy = 270,
		Chop = 273,
		Dead = 274,
		Hooker = 279,
		Friend = 280,
		BountyHit = 303,
		GTAOMission = 304,
		GTAOSurvival = 305,
		CrateDrop = 306,
		PlaneDrop = 307,
		Sub = 308,
		Race = 309,
		Deathmatch = 310,
		ArmWrestling = 311,
		AmmuNationShootingRange = 313,
		RaceAir = 314,
		RaceCar = 315,
		RaceSea = 316,
		GarbageTruck = 318,
		SafehouseForSale = 350,
		Package = 351,
		MartinMadrazo = 352,
		EnemyHelicopter = 353,
		Boost = 354,
		Devin = 355,
		Marina = 356,
		Garage = 357,
		GolfFlag = 358,
		Hangar = 359,
		Helipad = 360,
		JerryCan = 361,
		Masks = 362,
		HeistSetup = 363,
		Incapacitated = 364,
		PickupSpawn = 365,
		BoilerSuit = 366,
		Completed = 367,
		Rockets = 368,
		GarageForSale = 369,
		HelipadForSale = 370,
		MarinaForSale = 371,
		HangarForSale = 372,
		Business = 374,
		BusinessForSale = 375,
		RaceBike = 376,
		Parachute = 377,
		TeamDeathmatch = 378,
		RaceFoot = 379,
		VehicleDeathmatch = 380,
		Barry = 381,
		Dom = 382,
		MaryAnn = 383,
		Cletus = 384,
		Josh = 385,
		Minute = 386,
		Omega = 387,
		Tonya = 388,
		Paparazzo = 389,
		Crosshair = 390,
		Creator = 398,
		CreatorDirection = 399,
		Abigail = 400,
		Blimp = 401,
		Repair = 402,
		Testosterone = 403,
		Dinghy = 404,
		Fanatic = 405,
		Information = 407,
		CaptureBriefcase = 408,
		LastTeamStanding = 409,
		Boat = 410,
		CaptureHouse = 411,
		JerryCan2 = 415,
		RP = 416,
		GTAOPlayerSafehouse = 417,
		GTAOPlayerSafehouseDead = 418,
		CaptureAmericanFlag = 419,
		CaptureFlag = 420,
		Tank = 421,
		HelicopterAnimated = 422,
		Plane = 423,
		PlayerNoColor = 425,
		GunCar = 426,
		Speedboat = 427,
		Heist = 428,
		Stopwatch = 430,
		DollarSignCircled = 431,
		Crosshair2 = 432,
		DollarSignSquared = 434
	}

	enum Bone {
		SKEL_ROOT = 0,
		SKEL_Pelvis = 11816,
		SKEL_L_Thigh = 58271,
		SKEL_L_Calf = 63931,
		SKEL_L_Foot = 14201,
		SKEL_L_Toe0 = 2108,
		IK_L_Foot = 65245,
		PH_L_Foot = 57717,
		MH_L_Knee = 46078,
		SKEL_R_Thigh = 51826,
		SKEL_R_Calf = 36864,
		SKEL_R_Foot = 52301,
		SKEL_R_Toe0 = 20781,
		IK_R_Foot = 35502,
		PH_R_Foot = 24806,
		MH_R_Knee = 16335,
		RB_L_ThighRoll = 23639,
		RB_R_ThighRoll = 6442,
		SKEL_Spine_Root = 57597,
		SKEL_Spine0 = 23553,
		SKEL_Spine1 = 24816,
		SKEL_Spine2 = 24817,
		SKEL_Spine3 = 24818,
		SKEL_L_Clavicle = 64729,
		SKEL_L_UpperArm = 45509,
		SKEL_L_Forearm = 61163,
		SKEL_L_Hand = 18905,
		SKEL_L_Finger00 = 26610,
		SKEL_L_Finger01 = 4089,
		SKEL_L_Finger02 = 4090,
		SKEL_L_Finger10 = 26611,
		SKEL_L_Finger11 = 4169,
		SKEL_L_Finger12 = 4170,
		SKEL_L_Finger20 = 26612,
		SKEL_L_Finger21 = 4185,
		SKEL_L_Finger22 = 4186,
		SKEL_L_Finger30 = 26613,
		SKEL_L_Finger31 = 4137,
		SKEL_L_Finger32 = 4138,
		SKEL_L_Finger40 = 26614,
		SKEL_L_Finger41 = 4153,
		SKEL_L_Finger42 = 4154,
		PH_L_Hand = 60309,
		IK_L_Hand = 36029,
		RB_L_ForeArmRoll = 61007,
		RB_L_ArmRoll = 5232,
		MH_L_Elbow = 22711,
		SKEL_R_Clavicle = 10706,
		SKEL_R_UpperArm = 40269,
		SKEL_R_Forearm = 28252,
		SKEL_R_Hand = 57005,
		SKEL_R_Finger00 = 58866,
		SKEL_R_Finger01 = 64016,
		SKEL_R_Finger02 = 64017,
		SKEL_R_Finger10 = 58867,
		SKEL_R_Finger11 = 64096,
		SKEL_R_Finger12 = 64097,
		SKEL_R_Finger20 = 58868,
		SKEL_R_Finger21 = 64112,
		SKEL_R_Finger22 = 64113,
		SKEL_R_Finger30 = 58869,
		SKEL_R_Finger31 = 64064,
		SKEL_R_Finger32 = 64065,
		SKEL_R_Finger40 = 58870,
		SKEL_R_Finger41 = 64080,
		SKEL_R_Finger42 = 64081,
		PH_R_Hand = 28422,
		IK_R_Hand = 6286,
		RB_R_ForeArmRoll = 43810,
		RB_R_ArmRoll = 37119,
		MH_R_Elbow = 2992,
		SKEL_Neck_1 = 39317,
		SKEL_Head = 31086,
		IK_Head = 12844,
		FACIAL_facialRoot = 65068,
		FB_L_Brow_Out_000 = 58331,
		FB_L_Lid_Upper_000 = 45750,
		FB_L_Eye_000 = 25260,
		FB_L_CheekBone_000 = 21550,
		FB_L_Lip_Corner_000 = 29868,
		FB_R_Lid_Upper_000 = 43536,
		FB_R_Eye_000 = 27474,
		FB_R_CheekBone_000 = 19336,
		FB_R_Brow_Out_000 = 1356,
		FB_R_Lip_Corner_000 = 11174,
		FB_Brow_Centre_000 = 37193,
		FB_UpperLipRoot_000 = 20178,
		FB_UpperLip_000 = 61839,
		FB_L_Lip_Top_000 = 20279,
		FB_R_Lip_Top_000 = 17719,
		FB_Jaw_000 = 46240,
		FB_LowerLipRoot_000 = 17188,
		FB_LowerLip_000 = 20623,
		FB_L_Lip_Bot_000 = 47419,
		FB_R_Lip_Bot_000 = 49979,
		FB_Tongue_000 = 47495,
		RB_Neck_1 = 35731,
		IK_Root = 56604
	}

	class Camera {
		IsActive: boolean;
		Position: GTA.Math.Vector3;
		Rotation: GTA.Math.Vector3;
		Direction: GTA.Math.Vector3;
		FieldOfView: number;
		NearClip: number;
		FarClip: number;
		NearDepthOfField: number;
		FarDepthOfField: number;
		DepthOfFieldStrength: number;
		MotionBlurStrength: number;
		readonly IsShaking: boolean;
		ShakeAmplitude: number;
		readonly IsInterpolating: boolean;
		constructor(handle: number);
		GetOffsetInWorldCoords(offset: GTA.Math.Vector3): GTA.Math.Vector3;
		GetOffsetFromWorldCoords(worldCoords: GTA.Math.Vector3): GTA.Math.Vector3;
		Shake(shakeType: GTA.CameraShake, amplitude: number): void;
		StopShaking(): void;
		PointAt(target: GTA.Entity): void;
		PointAt(target: GTA.Entity, offset: GTA.Math.Vector3): void;
		PointAt(target: GTA.Ped, boneIndex: number): void;
		PointAt(target: GTA.Ped, boneIndex: number, offset: GTA.Math.Vector3): void;
		PointAt(target: GTA.Math.Vector3): void;
		StopPointing(): void;
		InterpTo(to: GTA.Camera, duration: number, easePosition: boolean, easeRotation: boolean): void;
		AttachTo(entity: GTA.Entity, offset: GTA.Math.Vector3): void;
		AttachTo(entity: GTA.Ped, boneIndex: number, offset: GTA.Math.Vector3): void;
		Detach(): void;
		Destroy(): void;
		Exists(): boolean;
		Exists(camera: GTA.Camera): boolean;
		Equals(camera: GTA.Camera): boolean;
		Equals(obj: any): boolean;
		GetHashCode(): number;
	}

	enum CameraShake {
		Hand = 0,
		SmallExplosion = 1,
		MediumExplosion = 2,
		LargeExplosion = 3,
		Jolt = 4,
		Vibrate = 5,
		RoadVibration = 6,
		Drunk = 7,
		SkyDiving = 8,
		FamilyDrugTrip = 9,
		DeathFail = 10
	}

	enum CargobobHook {
		Hook = 0,
		Magnet = 1
	}

	enum Control {
		NextCamera = 0,
		LookLeftRight = 1,
		LookUpDown = 2,
		LookUpOnly = 3,
		LookDownOnly = 4,
		LookLeftOnly = 5,
		LookRightOnly = 6,
		CinematicSlowMo = 7,
		FlyUpDown = 8,
		FlyLeftRight = 9,
		ScriptedFlyZUp = 10,
		ScriptedFlyZDown = 11,
		WeaponWheelUpDown = 12,
		WeaponWheelLeftRight = 13,
		WeaponWheelNext = 14,
		WeaponWheelPrev = 15,
		SelectNextWeapon = 16,
		SelectPrevWeapon = 17,
		SkipCutscene = 18,
		CharacterWheel = 19,
		MultiplayerInfo = 20,
		Sprint = 21,
		Jump = 22,
		Enter = 23,
		Attack = 24,
		Aim = 25,
		LookBehind = 26,
		Phone = 27,
		SpecialAbility = 28,
		SpecialAbilitySecondary = 29,
		MoveLeftRight = 30,
		MoveUpDown = 31,
		MoveUpOnly = 32,
		MoveDownOnly = 33,
		MoveLeftOnly = 34,
		MoveRightOnly = 35,
		Duck = 36,
		SelectWeapon = 37,
		Pickup = 38,
		SniperZoom = 39,
		SniperZoomInOnly = 40,
		SniperZoomOutOnly = 41,
		SniperZoomInSecondary = 42,
		SniperZoomOutSecondary = 43,
		Cover = 44,
		Reload = 45,
		Talk = 46,
		Detonate = 47,
		HUDSpecial = 48,
		Arrest = 49,
		AccurateAim = 50,
		Context = 51,
		ContextSecondary = 52,
		WeaponSpecial = 53,
		WeaponSpecial2 = 54,
		Dive = 55,
		DropWeapon = 56,
		DropAmmo = 57,
		ThrowGrenade = 58,
		VehicleMoveLeftRight = 59,
		VehicleMoveUpDown = 60,
		VehicleMoveUpOnly = 61,
		VehicleMoveDownOnly = 62,
		VehicleMoveLeftOnly = 63,
		VehicleMoveRightOnly = 64,
		VehicleSpecial = 65,
		VehicleGunLeftRight = 66,
		VehicleGunUpDown = 67,
		VehicleAim = 68,
		VehicleAttack = 69,
		VehicleAttack2 = 70,
		VehicleAccelerate = 71,
		VehicleBrake = 72,
		VehicleDuck = 73,
		VehicleHeadlight = 74,
		VehicleExit = 75,
		VehicleHandbrake = 76,
		VehicleHotwireLeft = 77,
		VehicleHotwireRight = 78,
		VehicleLookBehind = 79,
		VehicleCinCam = 80,
		VehicleNextRadio = 81,
		VehiclePrevRadio = 82,
		VehicleNextRadioTrack = 83,
		VehiclePrevRadioTrack = 84,
		VehicleRadioWheel = 85,
		VehicleHorn = 86,
		VehicleFlyThrottleUp = 87,
		VehicleFlyThrottleDown = 88,
		VehicleFlyYawLeft = 89,
		VehicleFlyYawRight = 90,
		VehiclePassengerAim = 91,
		VehiclePassengerAttack = 92,
		VehicleSpecialAbilityFranklin = 93,
		VehicleStuntUpDown = 94,
		VehicleCinematicUpDown = 95,
		VehicleCinematicUpOnly = 96,
		VehicleCinematicDownOnly = 97,
		VehicleCinematicLeftRight = 98,
		VehicleSelectNextWeapon = 99,
		VehicleSelectPrevWeapon = 100,
		VehicleRoof = 101,
		VehicleJump = 102,
		VehicleGrapplingHook = 103,
		VehicleShuffle = 104,
		VehicleDropProjectile = 105,
		VehicleMouseControlOverride = 106,
		VehicleFlyRollLeftRight = 107,
		VehicleFlyRollLeftOnly = 108,
		VehicleFlyRollRightOnly = 109,
		VehicleFlyPitchUpDown = 110,
		VehicleFlyPitchUpOnly = 111,
		VehicleFlyPitchDownOnly = 112,
		VehicleFlyUnderCarriage = 113,
		VehicleFlyAttack = 114,
		VehicleFlySelectNextWeapon = 115,
		VehicleFlySelectPrevWeapon = 116,
		VehicleFlySelectTargetLeft = 117,
		VehicleFlySelectTargetRight = 118,
		VehicleFlyVerticalFlightMode = 119,
		VehicleFlyDuck = 120,
		VehicleFlyAttackCamera = 121,
		VehicleFlyMouseControlOverride = 122,
		VehicleSubTurnLeftRight = 123,
		VehicleSubTurnLeftOnly = 124,
		VehicleSubTurnRightOnly = 125,
		VehicleSubPitchUpDown = 126,
		VehicleSubPitchUpOnly = 127,
		VehicleSubPitchDownOnly = 128,
		VehicleSubThrottleUp = 129,
		VehicleSubThrottleDown = 130,
		VehicleSubAscend = 131,
		VehicleSubDescend = 132,
		VehicleSubTurnHardLeft = 133,
		VehicleSubTurnHardRight = 134,
		VehicleSubMouseControlOverride = 135,
		VehiclePushbikePedal = 136,
		VehiclePushbikeSprint = 137,
		VehiclePushbikeFrontBrake = 138,
		VehiclePushbikeRearBrake = 139,
		MeleeAttackLight = 140,
		MeleeAttackHeavy = 141,
		MeleeAttackAlternate = 142,
		MeleeBlock = 143,
		ParachuteDeploy = 144,
		ParachuteDetach = 145,
		ParachuteTurnLeftRight = 146,
		ParachuteTurnLeftOnly = 147,
		ParachuteTurnRightOnly = 148,
		ParachutePitchUpDown = 149,
		ParachutePitchUpOnly = 150,
		ParachutePitchDownOnly = 151,
		ParachuteBrakeLeft = 152,
		ParachuteBrakeRight = 153,
		ParachuteSmoke = 154,
		ParachutePrecisionLanding = 155,
		Map = 156,
		SelectWeaponUnarmed = 157,
		SelectWeaponMelee = 158,
		SelectWeaponHandgun = 159,
		SelectWeaponShotgun = 160,
		SelectWeaponSmg = 161,
		SelectWeaponAutoRifle = 162,
		SelectWeaponSniper = 163,
		SelectWeaponHeavy = 164,
		SelectWeaponSpecial = 165,
		SelectCharacterMichael = 166,
		SelectCharacterFranklin = 167,
		SelectCharacterTrevor = 168,
		SelectCharacterMultiplayer = 169,
		SaveReplayClip = 170,
		SpecialAbilityPC = 171,
		PhoneUp = 172,
		PhoneDown = 173,
		PhoneLeft = 174,
		PhoneRight = 175,
		PhoneSelect = 176,
		PhoneCancel = 177,
		PhoneOption = 178,
		PhoneExtraOption = 179,
		PhoneScrollForward = 180,
		PhoneScrollBackward = 181,
		PhoneCameraFocusLock = 182,
		PhoneCameraGrid = 183,
		PhoneCameraSelfie = 184,
		PhoneCameraDOF = 185,
		PhoneCameraExpression = 186,
		FrontendDown = 187,
		FrontendUp = 188,
		FrontendLeft = 189,
		FrontendRight = 190,
		FrontendRdown = 191,
		FrontendRup = 192,
		FrontendRleft = 193,
		FrontendRright = 194,
		FrontendAxisX = 195,
		FrontendAxisY = 196,
		FrontendRightAxisX = 197,
		FrontendRightAxisY = 198,
		FrontendPause = 199,
		FrontendPauseAlternate = 200,
		FrontendAccept = 201,
		FrontendCancel = 202,
		FrontendX = 203,
		FrontendY = 204,
		FrontendLb = 205,
		FrontendRb = 206,
		FrontendLt = 207,
		FrontendRt = 208,
		FrontendLs = 209,
		FrontendRs = 210,
		FrontendLeaderboard = 211,
		FrontendSocialClub = 212,
		FrontendSocialClubSecondary = 213,
		FrontendDelete = 214,
		FrontendEndscreenAccept = 215,
		FrontendEndscreenExpand = 216,
		FrontendSelect = 217,
		ScriptLeftAxisX = 218,
		ScriptLeftAxisY = 219,
		ScriptRightAxisX = 220,
		ScriptRightAxisY = 221,
		ScriptRUp = 222,
		ScriptRDown = 223,
		ScriptRLeft = 224,
		ScriptRRight = 225,
		ScriptLB = 226,
		ScriptRB = 227,
		ScriptLT = 228,
		ScriptRT = 229,
		ScriptLS = 230,
		ScriptRS = 231,
		ScriptPadUp = 232,
		ScriptPadDown = 233,
		ScriptPadLeft = 234,
		ScriptPadRight = 235,
		ScriptSelect = 236,
		CursorAccept = 237,
		CursorCancel = 238,
		CursorX = 239,
		CursorY = 240,
		CursorScrollUp = 241,
		CursorScrollDown = 242,
		EnterCheatCode = 243,
		InteractionMenu = 244,
		MpTextChatAll = 245,
		MpTextChatTeam = 246,
		MpTextChatFriends = 247,
		MpTextChatCrew = 248,
		PushToTalk = 249,
		CreatorLS = 250,
		CreatorRS = 251,
		CreatorLT = 252,
		CreatorRT = 253,
		CreatorMenuToggle = 254,
		CreatorAccept = 255,
		CreatorDelete = 256,
		Attack2 = 257,
		RappelJump = 258,
		RappelLongJump = 259,
		RappelSmashWindow = 260,
		PrevWeapon = 261,
		NextWeapon = 262,
		MeleeAttack1 = 263,
		MeleeAttack2 = 264,
		Whistle = 265,
		MoveLeft = 266,
		MoveRight = 267,
		MoveUp = 268,
		MoveDown = 269,
		LookLeft = 270,
		LookRight = 271,
		LookUp = 272,
		LookDown = 273,
		SniperZoomIn = 274,
		SniperZoomOut = 275,
		SniperZoomInAlternate = 276,
		SniperZoomOutAlternate = 277,
		VehicleMoveLeft = 278,
		VehicleMoveRight = 279,
		VehicleMoveUp = 280,
		VehicleMoveDown = 281,
		VehicleGunLeft = 282,
		VehicleGunRight = 283,
		VehicleGunUp = 284,
		VehicleGunDown = 285,
		VehicleLookLeft = 286,
		VehicleLookRight = 287,
		ReplayStartStopRecording = 288,
		ReplayStartStopRecordingSecondary = 289,
		ScaledLookLeftRight = 290,
		ScaledLookUpDown = 291,
		ScaledLookUpOnly = 292,
		ScaledLookDownOnly = 293,
		ScaledLookLeftOnly = 294,
		ScaledLookRightOnly = 295,
		ReplayMarkerDelete = 296,
		ReplayClipDelete = 297,
		ReplayPause = 298,
		ReplayRewind = 299,
		ReplayFfwd = 300,
		ReplayNewmarker = 301,
		ReplayRecord = 302,
		ReplayScreenshot = 303,
		ReplayHidehud = 304,
		ReplayStartpoint = 305,
		ReplayEndpoint = 306,
		ReplayAdvance = 307,
		ReplayBack = 308,
		ReplayTools = 309,
		ReplayRestart = 310,
		ReplayShowhotkey = 311,
		ReplayCycleMarkerLeft = 312,
		ReplayCycleMarkerRight = 313,
		ReplayFOVIncrease = 314,
		ReplayFOVDecrease = 315,
		ReplayCameraUp = 316,
		ReplayCameraDown = 317,
		ReplaySave = 318,
		ReplayToggletime = 319,
		ReplayToggletips = 320,
		ReplayPreview = 321,
		ReplayToggleTimeline = 322,
		ReplayTimelinePickupClip = 323,
		ReplayTimelineDuplicateClip = 324,
		ReplayTimelinePlaceClip = 325,
		ReplayCtrl = 326,
		ReplayTimelineSave = 327,
		ReplayPreviewAudio = 328,
		VehicleDriveLook = 329,
		VehicleDriveLook2 = 330,
		VehicleFlyAttack2 = 331,
		RadioWheelUpDown = 332,
		RadioWheelLeftRight = 333,
		VehicleSlowMoUpDown = 334,
		VehicleSlowMoUpOnly = 335,
		VehicleSlowMoDownOnly = 336,
		MapPointOfInterest = 337,
		ReplaySnapmaticPhoto = 338,
		VehicleCarJump = 339,
		VehicleRocketBoost = 340,
		VehicleParachute = 341
	}

	enum DrivingStyle {
		Normal = 786603,
		IgnoreLights = 2883621,
		SometimesOvertakeTraffic = 5,
		Rushed = 1074528293,
		AvoidTraffic = 786468,
		AvoidTrafficExtremely = 6
	}

	class Entity {
		readonly MemoryAddress: any;
		Health: number;
		MaxHealth: number;
		readonly IsDead: boolean;
		readonly IsAlive: boolean;
		readonly Model: GTA.Model;
		Position: GTA.Math.Vector3;
		PositionNoOffset: GTA.Math.Vector3;
		Rotation: GTA.Math.Vector3;
		Quaternion: GTA.Math.Quaternion;
		Heading: number;
		readonly UpVector: GTA.Math.Vector3;
		readonly RightVector: GTA.Math.Vector3;
		readonly ForwardVector: GTA.Math.Vector3;
		readonly Matrix: GTA.Math.Matrix;
		IsPositionFrozen: boolean;
		Velocity: GTA.Math.Vector3;
		readonly RotationVelocity: GTA.Math.Vector3;
		MaxSpeed: number;
		HasGravity: boolean;
		readonly HeightAboveGround: number;
		readonly SubmersionLevel: number;
		LodDistance: number;
		IsVisible: boolean;
		readonly IsOccluded: boolean;
		readonly IsOnScreen: boolean;
		readonly IsUpright: boolean;
		readonly IsUpsideDown: boolean;
		readonly IsInAir: boolean;
		readonly IsInWater: boolean;
		IsPersistent: boolean;
		readonly IsOnFire: boolean;
		IsFireProof: boolean;
		IsMeleeProof: boolean;
		IsBulletProof: boolean;
		IsExplosionProof: boolean;
		IsCollisionProof: boolean;
		IsInvincible: boolean;
		IsOnlyDamagedByPlayer: boolean;
		Opacity: number;
		readonly HasCollided: boolean;
		IsCollisionEnabled: boolean;
		IsRecordingCollisions: boolean;
		readonly AttachedBlip: GTA.Blip;
		readonly AttachedBlips: any[];
		constructor(handle: number);
		ResetOpacity(): void;
		SetNoCollision(entity: GTA.Entity, toggle: boolean): void;
		HasBeenDamagedBy(entity: GTA.Entity): boolean;
		HasBeenDamagedBy(weapon: GTA.WeaponHash): boolean;
		HasBeenDamagedByAnyWeapon(): boolean;
		HasBeenDamagedByAnyMeleeWeapon(): boolean;
		ClearLastWeaponDamage(): void;
		IsInArea(minBounds: GTA.Math.Vector3, maxBounds: GTA.Math.Vector3): boolean;
		IsInAngledArea(origin: GTA.Math.Vector3, edge: GTA.Math.Vector3, angle: number): boolean;
		IsInRangeOf(position: GTA.Math.Vector3, range: number): boolean;
		IsNearEntity(entity: GTA.Entity, bounds: GTA.Math.Vector3): boolean;
		IsTouching(model: GTA.Model): boolean;
		IsTouching(entity: GTA.Entity): boolean;
		GetOffsetPosition(offset: GTA.Math.Vector3): GTA.Math.Vector3;
		GetPositionOffset(worldCoords: GTA.Math.Vector3): GTA.Math.Vector3;
		GetBoneIndex(boneName: string): number;
		GetBonePosition(boneIndex: number): GTA.Math.Vector3;
		GetBonePosition(boneName: string): GTA.Math.Vector3;
		GetBoneOffsetPosition(boneName: string, offset: GTA.Math.Vector3): GTA.Math.Vector3;
		GetBoneOffsetPosition(boneIndex: number, offset: GTA.Math.Vector3): GTA.Math.Vector3;
		GetBonePositionOffset(boneName: string, worldCoords: GTA.Math.Vector3): GTA.Math.Vector3;
		GetBonePositionOffset(boneIndex: number, worldCoords: GTA.Math.Vector3): GTA.Math.Vector3;
		GetBoneMatrix(boneName: string): GTA.Math.Matrix;
		GetBoneMatrix(boneIndex: number): GTA.Math.Matrix;
		HasBone(boneName: string): boolean;
		AttachBlip(): GTA.Blip;
		AttachTo(entity: GTA.Entity, boneIndex: number): void;
		AttachTo(entity: GTA.Entity, boneIndex: number, position: GTA.Math.Vector3, rotation: GTA.Math.Vector3): void;
		Detach(): void;
		IsAttached(): boolean;
		IsAttachedTo(entity: GTA.Entity): boolean;
		GetEntityAttachedTo(): GTA.Entity;
		ApplyForce(direction: GTA.Math.Vector3): void;
		ApplyForce(direction: GTA.Math.Vector3, rotation: GTA.Math.Vector3): void;
		ApplyForce(direction: GTA.Math.Vector3, rotation: GTA.Math.Vector3, forceType: GTA.ForceType): void;
		ApplyForceRelative(direction: GTA.Math.Vector3): void;
		ApplyForceRelative(direction: GTA.Math.Vector3, rotation: GTA.Math.Vector3): void;
		ApplyForceRelative(direction: GTA.Math.Vector3, rotation: GTA.Math.Vector3, forceType: GTA.ForceType): void;
		Delete(): void;
		MarkAsNoLongerNeeded(): void;
		FromHandle(handle: number): GTA.Entity;
		Exists(): boolean;
		Exists(entity: GTA.Entity): boolean;
		Equals(entity: GTA.Entity): boolean;
		Equals(obj: any): boolean;
		GetHashCode(): number;
	}

	enum FiringPattern {
		Default = 0,
		FullAuto = 3337513804,
		BurstFire = 3607063905,
		BurstInCover = 40051185,
		BurstFireDriveby = 3541198322,
		FromGround = 577037782,
		DelayFireByOneSec = 2055493265,
		SingleShot = 1566631136,
		BurstFirePistol = 2685983626,
		BurstFireSMG = 3507334638,
		BurstFireRifle = 2624893958,
		BurstFireMG = 3044263348,
		BurstFirePumpShotGun = 12239771,
		BurstFireHeli = 2437838959,
		BurstFireMicro = 1122960381,
		BurstFireBursts = 1122960381,
		BurstFireTank = 3804904049
	}

	enum ForceType {
		MinForce = 0,
		MaxForceRot = 1,
		MinForce2 = 2,
		MaxForceRot2 = 3,
		ForceNoRot = 4,
		ForceRotPlusForce = 5
	}

	enum FormationType {
		Default = 0,
		Circle1 = 1,
		Circle2 = 2,
		Line = 3
	}

	enum Gender {
		Male = 0,
		Female = 1
	}

	enum HelmetType {
		RegularMotorcycleHelmet = 4096,
		FiremanHelmet = 16384,
		PilotHeadset = 32768
	}

	enum LeaveVehicleFlags {
		None = 0,
		WarpOut = 16,
		LeaveDoorOpen = 256,
		BailOut = 4096
	}

	enum LicensePlateStyle {
		BlueOnWhite1 = 3,
		BlueOnWhite2 = 0,
		BlueOnWhite3 = 4,
		YellowOnBlack = 1,
		YellowOnBlue = 2,
		NorthYankton = 5
	}

	enum LicensePlateType {
		FrontAndRearPlates = 0,
		FrontPlate = 1,
		RearPlate = 2,
		None = 3
	}

	class Model {
		readonly Hash: number;
		NativeValue: number;
		readonly IsValid: boolean;
		readonly IsInCdImage: boolean;
		readonly IsLoaded: boolean;
		readonly IsCollisionLoaded: boolean;
		readonly IsBicycle: boolean;
		readonly IsBike: boolean;
		readonly IsBoat: boolean;
		readonly IsCar: boolean;
		readonly IsCargobob: boolean;
		readonly IsHelicopter: boolean;
		readonly IsPed: boolean;
		readonly IsPlane: boolean;
		readonly IsProp: boolean;
		readonly IsQuadbike: boolean;
		readonly IsTrain: boolean;
		readonly IsVehicle: boolean;
		constructor(hash: number);
		constructor(name: string);
		constructor(hash: GTA.PedHash);
		constructor(hash: GTA.VehicleHash);
		constructor(hash: GTA.WeaponHash);
		GetDimensions(): GTA.Math.Vector3;
		GetDimensions(minimum: any, maximum: any): void;
		Request(): void;
		Request(timeout: number): boolean;
		MarkAsNoLongerNeeded(): void;
		Equals(model: GTA.Model): boolean;
		Equals(obj: any): boolean;
		GetHashCode(): number;
		ToString(): string;
	}

	enum ParachuteLandingType {
		None = -1,
		Stumbling = 1,
		Rolling = 2,
		Ragdoll = 3
	}

	enum ParachuteState {
		None = -1,
		FreeFalling = 0,
		Deploying = 1,
		Gliding = 2,
		LandingOrFallingToDoom = 3
	}

	class Ped extends GTA.Entity {
		Money: number;
		readonly Gender: GTA.Gender;
		MaxHealth: number;
		Armor: number;
		Accuracy: number;
		readonly Task: GTA.Tasks;
		readonly TaskSequenceProgress: number;
		readonly Euphoria: GTA.NaturalMotion.Euphoria;
		readonly Weapons: GTA.WeaponCollection;
		readonly LastVehicle: GTA.Vehicle;
		readonly CurrentVehicle: GTA.Vehicle;
		readonly VehicleTryingToEnter: GTA.Vehicle;
		readonly PedGroup: GTA.PedGroup;
		Sweat: number;
		WetnessHeight: number;
		Voice: string;
		ShootRate: number;
		readonly WasKilledByStealth: boolean;
		readonly WasKilledByTakedown: boolean;
		readonly SeatIndex: GTA.VehicleSeat;
		readonly IsJumpingOutOfVehicle: boolean;
		StaysInVehicleWhenJacked: boolean;
		MaxDrivingSpeed: number;
		readonly IsHuman: boolean;
		IsEnemy: boolean;
		IsPriorityTargetForEnemies: boolean;
		readonly IsPlayer: boolean;
		readonly IsCuffed: boolean;
		readonly IsWearingHelmet: boolean;
		readonly IsRagdoll: boolean;
		readonly IsIdle: boolean;
		readonly IsProne: boolean;
		IsDucking: boolean;
		readonly IsGettingUp: boolean;
		readonly IsClimbing: boolean;
		readonly IsJumping: boolean;
		readonly IsFalling: boolean;
		readonly IsStopped: boolean;
		readonly IsWalking: boolean;
		readonly IsRunning: boolean;
		readonly IsSprinting: boolean;
		readonly IsDiving: boolean;
		readonly IsInParachuteFreeFall: boolean;
		readonly IsSwimming: boolean;
		readonly IsSwimmingUnderWater: boolean;
		readonly IsVaulting: boolean;
		readonly IsOnBike: boolean;
		readonly IsOnFoot: boolean;
		readonly IsInSub: boolean;
		readonly IsInTaxi: boolean;
		readonly IsInTrain: boolean;
		readonly IsInHeli: boolean;
		readonly IsInPlane: boolean;
		readonly IsInFlyingVehicle: boolean;
		readonly IsInBoat: boolean;
		readonly IsInPoliceVehicle: boolean;
		readonly IsJacking: boolean;
		readonly IsBeingJacked: boolean;
		readonly IsGettingIntoAVehicle: boolean;
		readonly IsTryingToEnterALockedVehicle: boolean;
		readonly IsInjured: boolean;
		readonly IsFleeing: boolean;
		readonly IsInCombat: boolean;
		readonly IsInMeleeCombat: boolean;
		readonly IsInStealthMode: boolean;
		readonly IsPlantingBomb: boolean;
		readonly IsShooting: boolean;
		readonly IsAiming: boolean;
		readonly IsReloading: boolean;
		readonly IsDoingDriveBy: boolean;
		readonly IsGoingIntoCover: boolean;
		readonly IsBeingStunned: boolean;
		readonly IsBeingStealthKilled: boolean;
		readonly IsPerformingStealthKill: boolean;
		readonly IsAimingFromCover: boolean;
		readonly IsInCoverFacingLeft: boolean;
		MovementAnimationSet: string;
		FiringPattern: GTA.FiringPattern;
		readonly ParachuteLandingType: GTA.ParachuteLandingType;
		readonly ParachuteState: GTA.ParachuteState;
		DropsWeaponsOnDeath: boolean;
		DrivingSpeed: number;
		DrivingStyle: GTA.DrivingStyle;
		VehicleDrivingFlags: GTA.VehicleDrivingFlags;
		CanRagdoll: boolean;
		CanPlayGestures: boolean;
		CanSwitchWeapons: boolean;
		CanWearHelmet: boolean;
		CanBeTargetted: boolean;
		CanBeShotInVehicle: boolean;
		CanBeDraggedOutOfVehicle: boolean;
		CanBeKnockedOffBike: boolean;
		CanFlyThroughWindscreen: boolean;
		CanSufferCriticalHits: boolean;
		CanWrithe: boolean;
		BlockPermanentEvents: boolean;
		AlwaysKeepTask: boolean;
		AlwaysDiesOnLowHealth: boolean;
		DrownsInWater: boolean;
		DrownsInSinkingVehicle: boolean;
		DiesInstantlyInWater: boolean;
		RelationshipGroup: GTA.RelationshipGroup;
		readonly IsInGroup: boolean;
		NeverLeavesGroup: boolean;
		constructor(handle: number);
		IsInCover(): boolean;
		IsInCover(expectUseWeapon: boolean): boolean;
		IsInVehicle(): boolean;
		IsInVehicle(vehicle: GTA.Vehicle): boolean;
		IsSittingInVehicle(): boolean;
		IsSittingInVehicle(vehicle: GTA.Vehicle): boolean;
		SetIntoVehicle(vehicle: GTA.Vehicle, seat: GTA.VehicleSeat): void;
		GetRelationshipWithPed(ped: GTA.Ped): GTA.Relationship;
		IsHeadtracking(entity: GTA.Entity): boolean;
		IsInCombatAgainst(target: GTA.Ped): boolean;
		GetJacker(): GTA.Ped;
		GetJackTarget(): GTA.Ped;
		GetMeleeTarget(): GTA.Ped;
		GetKiller(): GTA.Entity;
		Kill(): void;
		ResetVisibleDamage(): void;
		ClearBloodDamage(): void;
		RandomizeOutfit(): void;
		SetDefaultClothes(): void;
		LeaveGroup(): void;
		PlayAmbientSpeech(speechName: string, modifier?: GTA.SpeechModifier): void;
		PlayAmbientSpeech(voiceName: string, speechName: string, modifier?: GTA.SpeechModifier): void;
		ApplyDamage(damageAmount: number): void;
		HasBeenDamagedBy(weapon: GTA.WeaponHash): boolean;
		HasBeenDamagedByAnyWeapon(): boolean;
		HasBeenDamagedByAnyMeleeWeapon(): boolean;
		ClearLastWeaponDamage(): void;
		GetLastDamagedBone(): GTA.Bone;
		ClearLastBoneDamage(): void;
		GetBoneIndex(boneID: GTA.Bone): number;
		GetBoneCoord(boneID: GTA.Bone): GTA.Math.Vector3;
		GetBoneCoord(boneID: GTA.Bone, offset: GTA.Math.Vector3): GTA.Math.Vector3;
		GetLastWeaponImpactPosition(): GTA.Math.Vector3;
		Ragdoll(duration?: number, ragdollType?: GTA.RagdollType): void;
		CancelRagdoll(): void;
		GiveHelmet(canBeRemovedByPed: boolean, helmetType: GTA.HelmetType, textureIndex: number): void;
		RemoveHelmet(instantly: boolean): void;
		OpenParachute(): void;
		GetConfigFlag(flagID: number): boolean;
		SetConfigFlag(flagID: number, value: boolean): void;
		ResetConfigFlag(flagID: number): void;
		Clone(heading?: number): GTA.Ped;
	}

	class PedGroup {
		readonly MemberCount: number;
		SeparationRange: number;
		FormationType: GTA.FormationType;
		readonly Leader: GTA.Ped;
		constructor();
		constructor(handle: number);
		Dispose(): void;
		Add(ped: GTA.Ped, leader: boolean): void;
		Remove(ped: GTA.Ped): void;
		GetMember(index: number): GTA.Ped;
		Contains(ped: GTA.Ped): boolean;
		ToArray(includingLeader: boolean): any[];
		ToList(includingLeader: boolean): System.Collections.Generic.List<GTA.Ped>;
		Exists(): boolean;
		Exists(pedGroup: GTA.PedGroup): boolean;
		Equals(pedGroup: GTA.PedGroup): boolean;
		Equals(obj: any): boolean;
		GetHashCode(): number;
		GetEnumerator(): any;
	}

	enum PedHash {
		Michael = 225514697,
		Franklin = 2602752943,
		Trevor = 2608926626,
		Abigail = 1074457665,
		Agent = 3614493108,
		Agent14 = 4227433577,
		AmandaTownley = 1830688247,
		Andreas = 1206185632,
		Ashley = 2129936603,
		AviSchwartzman = 939183526,
		Ballasog = 2802535058,
		Bankman = 2426248831,
		Barry = 797459875,
		Bestmen = 1464257942,
		Beverly = 3181518428,
		Brad = 3183167778,
		Bride = 1633872967,
		Car3Guy1 = 2230970679,
		Car3Guy2 = 1975732938,
		Casey = 3774489940,
		Chef = 1240128502,
		Chef2 = 2240322243,
		Clay = 1825562762,
		Claypain = 2634057640,
		Cletus = 3865252245,
		CrisFormage = 678319271,
		Dale = 1182012905,
		DaveNorton = 365775923,
		Denise = 2181772221,
		Devin = 1952555184,
		DoaMan = 1646160893,
		Dom = 2620240008,
		Dreyfuss = 3666413874,
		DrFriedlander = 3422293493,
		EdToh = 712602007,
		Fabien = 3499148112,
		FbiSuit01 = 988062523,
		Floyd = 2981205682,
		G = 2216405299,
		Groom = 4274948997,
		Hao = 1704428387,
		Hunter = 3457361118,
		Janet = 225287241,
		JayNorris = 2050158196,
		Jewelass = 257763003,
		JimmyBoston = 3986688045,
		JimmyDisanto = 1459905209,
		JoeMinuteman = 3189787803,
		JohnnyKlebitz = 2278195374,
		Josef = 3776618420,
		Josh = 2040438510,
		KarenDaniels = 3948009817,
		KerryMcintosh = 1530648845,
		LamarDavis = 1706635382,
		Lazlow = 3756278757,
		LesterCrest = 1302784073,
		Lifeinvad01 = 1401530684,
		Lifeinvad02 = 666718676,
		Magenta = 4242313482,
		Malc = 4055673113,
		Manuel = 4248931856,
		Marnie = 411185872,
		MaryAnn = 2741999622,
		Maude = 1005070462,
		Michelle = 3214308084,
		Milton = 3408943538,
		Molly = 2936266209,
		MrK = 3990661997,
		MrsPhillips = 946007720,
		MrsThornhill = 503621995,
		Natalia = 3726105915,
		NervousRon = 3170921201,
		Nigel = 3367442045,
		OldMan1a = 1906124788,
		OldMan2 = 4011150407,
		Omega = 1625728984,
		ONeil = 768005095,
		Orleans = 1641334641,
		Ortega = 648372919,
		Paper = 2577072326,
		Patricia = 3312325004,
		Popov = 645279998,
		Paige = 357551935,
		Priest = 1681385341,
		PrologueDriver = 2237544099,
		PrologueSec01 = 1888624839,
		PrologueSec02 = 666086773,
		RampGang = 3845001836,
		RampHic = 1165307954,
		RampHipster = 3740245870,
		RampMex = 3870061732,
		Rashkovsky = 940326374,
		RoccoPelosi = 3585757951,
		RussianDrunk = 1024089777,
		ScreenWriter = 4293277303,
		SiemonYetarian = 1283141381,
		Solomon = 2260598310,
		SteveHains = 941695432,
		Stretch = 915948376,
		Talina = 3885222120,
		Tanisha = 226559113,
		TaoCheng = 3697041061,
		TaosTranslator = 2089096292,
		TennisCoach = 2721800023,
		Terry = 1728056212,
		TomEpsilon = 3447159466,
		Tonya = 3402126148,
		TracyDisanto = 3728026165,
		TrafficWarden = 1461287021,
		TylerDixon = 1382414087,
		VagosSpeak = 4194109068,
		Wade = 2459507570,
		WeiCheng = 2867128955,
		Zimbor = 188012277,
		AbigailCutscene = 2306246977,
		AgentCutscene = 3614493108,
		Agent14Cutscene = 1841036427,
		AmandaTownleyCutscene = 2515474659,
		AndreasCutscene = 3881194279,
		AnitaCutscene = 117698822,
		AntonCutscene = 2781317046,
		AshleyCutscene = 650367097,
		AviSchwartzmanCutscene = 2560490906,
		BallasogCutscene = 2884567044,
		BankmanCutscene = 2539657518,
		BarryCutscene = 1767447799,
		BeverlyCutscene = 3027157846,
		BradCutscene = 4024807398,
		BradCadaverCutscene = 1915268960,
		BrideCutscene = 2193587873,
		BurgerDrugCutscene = 2363277399,
		Car3Guy1Cutscene = 71501447,
		Car3Guy2Cutscene = 327394568,
		CarBuyerCutscene = 2362341647,
		CaseyCutscene = 3935738944,
		ChefCutscene = 2739391114,
		Chef2Cutscene = 2925257274,
		ChinGoonCutscene = 2831296918,
		ClayCutscene = 3687553076,
		CletusCutscene = 3404326357,
		CopCutscene = 2595446627,
		CrisFormageCutscene = 3253960934,
		CustomerCutscene = 2756669323,
		DaleCutscene = 216536661,
		DaveNortonCutscene = 2240226444,
		DebraCutscene = 3973074921,
		DeniseCutscene = 1870669624,
		DeniseFriendCutscene = 3045926185,
		DevinCutscene = 788622594,
		DomCutscene = 1198698306,
		DreyfussCutscene = 1012965715,
		DrFriedlanderCutscene = 2745392175,
		FabienCutscene = 1191403201,
		FbiSuit01Cutscene = 1482427218,
		FloydCutscene = 103106535,
		FosRepCutscene = 466359675,
		GCutscene = 2727244247,
		GroomCutscene = 2058033618,
		GroveStrDlrCutscene = 3898166818,
		GuadalopeCutscene = 261428209,
		GurkCutscene = 3272931111,
		HaoCutscene = 3969814300,
		HughCutscene = 1863555924,
		HunterCutscene = 1531218220,
		ImranCutscene = 3812756443,
		JackHowitzerCutscene = 1153203121,
		JanetCutscene = 808778210,
		JanitorCutscene = 3254803008,
		JewelassCutscene = 1145088004,
		JimmyBostonCutscene = 60192701,
		JimmyDisantoCutscene = 3100414644,
		JoeMinutemanCutscene = 4036845097,
		JohnnyKlebitzCutscene = 4203395201,
		JosefCutscene = 1167549130,
		JoshCutscene = 1158606749,
		KarenDanielsCutscene = 1269774364,
		LamarDavisCutscene = 1162230285,
		LazlowCutscene = 949295643,
		LesterCrestCutscene = 3046438339,
		Lifeinvad01Cutscene = 1918178165,
		MagentaCutscene = 1477887514,
		ManuelCutscene = 4222842058,
		MarnieCutscene = 1464721716,
		MartinMadrazoCutscene = 1129928304,
		MaryannCutscene = 161007533,
		MaudeCutscene = 3166991819,
		MerryWeatherCutscene = 1631478380,
		MichelleCutscene = 1890499016,
		MiltonCutscene = 3077190415,
		MollyCutscene = 1167167044,
		MoviePremFemaleCutscene = 1270514905,
		MoviePremMaleCutscene = 2372398717,
		MrKCutscene = 3284966005,
		MrsPhillipsCutscene = 3422397391,
		MrsThornhillCutscene = 1334976110,
		NataliaCutscene = 1325314544,
		NervousRonCutscene = 2023152276,
		NigelCutscene = 3779566603,
		OldMan1aCutscene = 518814684,
		OldMan2Cutscene = 2566514544,
		OmegaCutscene = 2339419141,
		OrleansCutscene = 2905870170,
		OrtegaCutscene = 3235579087,
		OscarCutscene = 4095687067,
		PaigeCutscene = 1528799427,
		PaperCutscene = 1798879480,
		PopovCutscene = 1635617250,
		PatriciaCutscene = 3750433537,
		PornDudesCutscene = 793443893,
		PriestCutscene = 1299047806,
		PrologueDriverCutscene = 4027271643,
		PrologueSec01Cutscene = 2141384740,
		PrologueSec02Cutscene = 512955554,
		RampGangCutscene = 3263172030,
		RampHicCutscene = 2240582840,
		RampHipsterCutscene = 569740212,
		RampMarineCutscene = 1634506681,
		RampMexCutscene = 4132362192,
		RashkovskyCutscene = 411081129,
		ReporterCutscene = 776079908,
		RoccoPelosiCutscene = 2858686092,
		RussianDrunkCutscene = 1179785778,
		ScreenWriterCutscene = 2346790124,
		SiemonYetarianCutscene = 3230888450,
		SolomonCutscene = 4140949582,
		SteveHainsCutscene = 2766184958,
		StretchCutscene = 2302502917,
		Stripper01Cutscene = 2934601397,
		Stripper02Cutscene = 2168724337,
		TanishaCutscene = 1123963760,
		TaoChengCutscene = 2288257085,
		TaosTranslatorCutscene = 1397974313,
		TennisCoachCutscene = 1545995274,
		TerryCutscene = 978452933,
		TomCutscene = 1776856003,
		TomEpsilonCutscene = 2349847778,
		TonyaCutscene = 1665391897,
		TracyDisantoCutscene = 101298480,
		TrafficWardenCutscene = 3727243251,
		UndercoverCopCutscene = 4017642090,
		VagosSpeakCutscene = 1224690857,
		WadeCutscene = 3529955798,
		WeiChengCutscene = 819699067,
		ZimborCutscene = 3937184496,
		Boar = 3462393972,
		Cat = 1462895032,
		ChickenHawk = 2864127842,
		Chimp = 2825402133,
		Chop = 351016938,
		Cormorant = 1457690978,
		Cow = 4244282910,
		Coyote = 1682622302,
		Crow = 402729631,
		Deer = 3630914197,
		Dolphin = 2344268885,
		Fish = 802685111,
		Hen = 1794449327,
		HammerShark = 1015224100,
		Humpback = 1193010354,
		Husky = 1318032802,
		KillerWhale = 2374682809,
		MountainLion = 307287994,
		Pig = 2971380566,
		Pigeon = 111281960,
		Poodle = 1125994524,
		Pug = 1832265812,
		Rabbit = 3753204865,
		Rat = 3283429734,
		Retriever = 882848737,
		Rhesus = 3268439891,
		Rottweiler = 2506301981,
		Seagull = 3549666813,
		Shepherd = 1126154828,
		Stingray = 2705875277,
		TigerShark = 113504370,
		Westy = 2910340283,
		Abner = 4037813798,
		AlDiNapoli = 4042020578,
		Antonb = 3479321132,
		Armoured01 = 3455013896,
		Babyd = 3658575486,
		Bankman01 = 3272005365,
		Baygor = 1380197501,
		Benny = 3300333010,
		BikeHire01 = 1984382277,
		BikerChic = 4198014287,
		BoatStaff01M = 3361671816,
		BoatStaff01F = 848542878,
		BurgerDrug = 2340239206,
		CarDesignFemale01 = 606876839,
		Chip = 610290475,
		Claude01 = 3237179831,
		ClubHouseBar01 = 1914945105,
		CocaineFemale01 = 1897303236,
		CocaineMale01 = 3455927962,
		ComJane = 3064628686,
		Corpse01 = 773063444,
		Corpse02 = 228356856,
		CounterfeitFemale01 = 1074385436,
		CounterfeitMale01 = 2625926338,
		Cyclist01 = 755956971,
		DeadHooker = 1943971979,
		Drowned = 1943971979,
		ExArmy01 = 1161072059,
		ExecutivePAMale01 = 983887149,
		ExecutivePAFemale01 = 2913175640,
		ExecutivePAFemale02 = 1500695792,
		Famdd01 = 866411749,
		FibArchitect = 874722259,
		FibMugger01 = 2243544680,
		FibSec01 = 1558115333,
		FilmDirector = 728636342,
		FilmNoir = 732742363,
		Finguru01 = 1189322339,
		ForgeryFemale01 = 3691903615,
		ForgeryMale01 = 325317957,
		FreemodeFemale01 = 2627665880,
		FreemodeMale01 = 1885233650,
		Glenstank01 = 1169888870,
		Griff01 = 3293887675,
		Guido01 = 3333724719,
		GunVend01 = 3005388626,
		Hacker = 2579169528,
		HeliStaff01 = 431423238,
		Hippie01 = 4030826507,
		Hotposh01 = 2526768638,
		Imporage = 880829941,
		ImportExportFemale01 = 2225189146,
		ImportExportMale01 = 3164785898,
		Jesus01 = 3459037009,
		Jewelass01 = 4040474158,
		JewelSec01 = 2899099062,
		JewelThief = 3872144604,
		Justin = 2109968527,
		Mani = 3367706194,
		Markfost = 479578891,
		Marston01 = 943915367,
		MethFemale01 = 3778572496,
		MethMale01 = 1293671805,
		MilitaryBum = 1191548746,
		Miranda = 1095737979,
		Mistress = 1573528872,
		Misty01 = 3509125021,
		MovieStar = 894928436,
		MPros01 = 1822283721,
		Niko01 = 4007317449,
		Paparazzi = 1346941736,
		Party01 = 921110016,
		PartyTarget = 2180468199,
		PestContDriver = 994527967,
		PestContGunman = 193469166,
		Pogo01 = 3696858125,
		Poppymich = 602513566,
		Princess = 3538133636,
		Prisoner01 = 2073775040,
		PrologueHostage01 = 3306347811,
		PrologueMournFemale01 = 2718472679,
		PrologueMournMale01 = 3465937675,
		RivalPaparazzi = 1624626906,
		SecuroGuardMale01 = 3660355662,
		ShopKeep01 = 416176080,
		SpyActor = 2886641112,
		SpyActress = 1535236204,
		StripperLite = 695248020,
		Taphillbilly = 2585681490,
		Tramp01 = 1787764635,
		VagosFun01 = 3299219389,
		WareMechMale01 = 4154933561,
		WillyFist = 2423691919,
		WeedFemale01 = 1596374223,
		WeedMale01 = 2648833641,
		Zombie01 = 2890614022,
		Acult01AMM = 1413662315,
		Acult01AMO = 1430544400,
		Acult01AMY = 3043264555,
		Acult02AMO = 1268862154,
		Acult02AMY = 2162532142,
		AfriAmer01AMM = 3513928062,
		Airhostess01SFY = 1567728751,
		AirworkerSMY = 1644266841,
		Ammucity01SMY = 2651349821,
		AmmuCountrySMM = 233415434,
		ArmBoss01GMM = 4058522530,
		ArmGoon01GMM = 4255728232,
		ArmGoon02GMY = 3310258058,
		ArmLieut01GMM = 3882958867,
		Armoured01SMM = 2512875213,
		Armoured02SMM = 1669696074,
		Armymech01SMY = 1657546978,
		Autopsy01SMY = 2988916046,
		Autoshop01SMM = 68070371,
		Autoshop02SMM = 4033578141,
		Azteca01GMY = 1752208920,
		BallaEast01GMY = 4096714883,
		BallaOrig01GMY = 588969535,
		Ballas01GFY = 361513884,
		BallaSout01GMY = 599294057,
		Barman01SMY = 3852538118,
		Bartender01SFY = 2014052797,
		Baywatch01SFY = 1250841910,
		Baywatch01SMY = 189425762,
		Beach01AFM = 808859815,
		Beach01AFY = 3349113128,
		Beach01AMM = 1077785853,
		Beach01AMO = 2217202584,
		Beach01AMY = 3523131524,
		Beach02AMM = 2021631368,
		Beach02AMY = 600300561,
		Beach03AMY = 3886638041,
		Beachvesp01AMY = 2114544056,
		Beachvesp02AMY = 3394697810,
		Bevhills01AFM = 3188223741,
		Bevhills01AFY = 1146800212,
		Bevhills01AMM = 1423699487,
		Bevhills01AMY = 1982350912,
		Bevhills02AFM = 2688103263,
		Bevhills02AFY = 1546450936,
		Bevhills02AMM = 1068876755,
		Bevhills02AMY = 1720428295,
		Bevhills03AFY = 549978415,
		Bevhills04AFY = 920595805,
		Blackops01SMY = 3019107892,
		Blackops02SMY = 2047212121,
		Blackops03SMY = 1349953339,
		Bodybuild01AFM = 1004114196,
		Bouncer01SMM = 2681481517,
		Breakdance01AMY = 933205398,
		Busboy01SMY = 3640249671,
		Busicas01AMY = 2597531625,
		Business01AFY = 664399832,
		Business01AMM = 2120901815,
		Business01AMY = 3382649284,
		Business02AFM = 532905404,
		Business02AFY = 826475330,
		Business02AMY = 3014915558,
		Business03AFY = 2928082356,
		Business03AMY = 2705543429,
		Business04AFY = 3083210802,
		Busker01SMO = 2912874939,
		CCrew01SMM = 3387290987,
		Chef01SMY = 261586155,
		ChemSec01SMM = 788443093,
		ChemWork01GMM = 4128603535,
		ChiBoss01GMM = 3118269184,
		ChiCold01GMM = 275618457,
		ChiGoon01GMM = 2119136831,
		ChiGoon02GMM = 4285659174,
		CiaSec01SMM = 1650288984,
		Clown01SMY = 71929310,
		Cntrybar01SMM = 436345731,
		Construct01SMY = 3621428889,
		Construct02SMY = 3321821918,
		Cop01SFY = 368603149,
		Cop01SMY = 1581098148,
		Cyclist01AMY = 4257633223,
		Dealer01SMY = 3835149295,
		Devinsec01SMY = 2606068340,
		Dhill01AMY = 4282288299,
		Dockwork01SMM = 349680864,
		Dockwork01SMY = 2255894993,
		Doctor01SMM = 3564307372,
		Doorman01SMY = 579932932,
		Downtown01AFM = 1699403886,
		Downtown01AMY = 766375082,
		DwService01SMY = 1976765073,
		DwService02SMY = 4119890438,
		Eastsa01AFM = 2638072698,
		Eastsa01AFY = 4121954205,
		Eastsa01AMM = 4188468543,
		Eastsa01AMY = 2756120947,
		Eastsa02AFM = 1674107025,
		Eastsa02AFY = 70821038,
		Eastsa02AMM = 131961260,
		Eastsa02AMY = 377976310,
		Eastsa03AFY = 1371553700,
		Epsilon01AFY = 1755064960,
		Epsilon01AMY = 2010389054,
		Epsilon02AMY = 2860711835,
		Factory01SFY = 1777626099,
		Factory01SMY = 1097048408,
		Famca01GMY = 3896218551,
		Famdnf01GMY = 3681718840,
		Famfor01GMY = 2217749257,
		Families01GFY = 1309468115,
		Farmer01AMM = 2488675799,
		FatBla01AFM = 4206136267,
		FatCult01AFM = 3050275044,
		Fatlatin01AMM = 1641152947,
		FatWhite01AFM = 951767867,
		FemBarberSFM = 373000027,
		FibOffice01SMM = 3988550982,
		FibOffice02SMM = 653289389,
		FibSec01SMM = 2072724299,
		Fireman01SMY = 3065114024,
		Fitness01AFY = 1165780219,
		Fitness02AFY = 331645324,
		Gaffer01SMM = 2841034142,
		GarbageSMY = 4000686095,
		Gardener01SMM = 1240094341,
		Gay01AMY = 3519864886,
		Gay02AMY = 2775713665,
		Genfat01AMM = 115168927,
		Genfat02AMM = 330231874,
		Genhot01AFY = 793439294,
		Genstreet01AFO = 1640504453,
		Genstreet01AMO = 2908022696,
		Genstreet01AMY = 2557996913,
		Genstreet02AMY = 891398354,
		GentransportSMM = 411102470,
		Golfer01AFY = 2111372120,
		Golfer01AMM = 2850754114,
		Golfer01AMY = 3609190705,
		Grip01SMY = 815693290,
		Hairdress01SMM = 1099825042,
		Hasjew01AMM = 1809430156,
		Hasjew01AMY = 3782053633,
		Highsec01SMM = 4049719826,
		Highsec02SMM = 691061163,
		Hiker01AFY = 813893651,
		Hiker01AMY = 1358380044,
		Hillbilly01AMM = 1822107721,
		Hillbilly02AMM = 2064532783,
		Hippie01AFY = 343259175,
		Hippy01AMY = 2097407511,
		Hipster01AFY = 2185745201,
		Hipster01AMY = 587703123,
		Hipster02AFY = 2549481101,
		Hipster02AMY = 349505262,
		Hipster03AFY = 2780469782,
		Hipster03AMY = 1312913862,
		Hipster04AFY = 429425116,
		Hooker01SFY = 42647445,
		Hooker02SFY = 348382215,
		Hooker03SFY = 51789996,
		Hwaycop01SMY = 1939545845,
		Indian01AFO = 3134700416,
		Indian01AFY = 153984193,
		Indian01AMM = 3721046572,
		Indian01AMY = 706935758,
		JanitorSMM = 2842417644,
		Jetski01AMY = 767028979,
		Juggalo01AFY = 3675473203,
		Juggalo01AMY = 2445950508,
		KorBoss01GMM = 891945583,
		Korean01GMY = 611648169,
		Korean02GMY = 2414729609,
		KorLieut01GMY = 2093736314,
		Ktown01AFM = 1388848350,
		Ktown01AFO = 1204772502,
		Ktown01AMM = 3512565361,
		Ktown01AMO = 355916122,
		Ktown01AMY = 452351020,
		Ktown02AFM = 1090617681,
		Ktown02AMY = 696250687,
		Lathandy01SMM = 2659242702,
		Latino01AMY = 321657486,
		Lifeinvad01SMM = 3724572669,
		LinecookSMM = 3684436375,
		Lost01GFY = 4250220510,
		Lost01GMY = 1330042375,
		Lost02GMY = 1032073858,
		Lost03GMY = 850468060,
		Lsmetro01SMM = 1985653476,
		Maid01SFM = 3767780806,
		Malibu01AMM = 803106487,
		Mariachi01SMM = 2124742566,
		Marine01SMM = 4074414829,
		Marine01SMY = 1702441027,
		Marine02SMM = 4028996995,
		Marine02SMY = 1490458366,
		Marine03SMY = 1925237458,
		Methhead01AMY = 1768677545,
		MexBoss01GMM = 1466037421,
		MexBoss02GMM = 1226102803,
		MexCntry01AMM = 3716251309,
		MexGang01GMY = 3185399110,
		MexGoon01GMY = 653210662,
		MexGoon02GMY = 832784782,
		MexGoon03GMY = 2521633500,
		MexLabor01AMM = 2992445106,
		MexThug01AMY = 810804565,
		Migrant01SFY = 3579522037,
		Migrant01SMM = 3977045190,
		MimeSMY = 1021093698,
		Motox01AMY = 1694362237,
		Motox02AMY = 2007797722,
		MovAlien01 = 1684083350,
		MovPrem01SFY = 587253782,
		Movprem01SMM = 3630066984,
		Movspace01SMM = 3887273010,
		Musclbeac01AMY = 1264920838,
		Musclbeac02AMY = 3374523516,
		OgBoss01AMM = 1746653202,
		Paparazzi01AMM = 3972697109,
		Paramedic01SMM = 3008586398,
		PestCont01SMY = 1209091352,
		Pilot01SMM = 3881519900,
		Pilot01SMY = 2872052743,
		Pilot02SMM = 4131252449,
		PoloGoon01GMY = 1329576454,
		PoloGoon02GMY = 2733138262,
		Polynesian01AMM = 2849617566,
		Polynesian01AMY = 2206530719,
		Postal01SMM = 1650036788,
		Postal02SMM = 1936142927,
		Prisguard01SMM = 1456041926,
		PrisMuscl01SMY = 1596003233,
		Prisoner01SMY = 2981862233,
		PrologueHostage01AFM = 379310561,
		PrologueHostage01AMM = 2534589327,
		Ranger01SFY = 2680682039,
		Ranger01SMY = 4017173934,
		Roadcyc01AMY = 4116817094,
		Robber01SMY = 3227390873,
		RsRanger01AMO = 1011059922,
		Runner01AFY = 3343476521,
		Runner01AMY = 623927022,
		Runner02AMY = 2218630415,
		Rurmeth01AFY = 1064866854,
		Rurmeth01AMM = 1001210244,
		Salton01AFM = 3725461865,
		Salton01AFO = 3439295882,
		Salton01AMM = 1328415626,
		Salton01AMO = 539004493,
		Salton01AMY = 3613420592,
		Salton02AMM = 1626646295,
		Salton03AMM = 2995538501,
		Salton04AMM = 2521108919,
		SalvaBoss01GMY = 2422005962,
		SalvaGoon01GMY = 663522487,
		SalvaGoon02GMY = 846439045,
		SalvaGoon03GMY = 62440720,
		SbikeAMO = 1794381917,
		Scdressy01AFY = 3680420864,
		Scientist01SMM = 1092080539,
		Scrubs01SFY = 2874755766,
		Security01SMM = 3613962792,
		Sheriff01SFY = 1096929346,
		Sheriff01SMY = 2974087609,
		ShopHighSFM = 2923947184,
		ShopLowSFY = 2842568196,
		ShopMaskSMY = 1846684678,
		ShopMidSFY = 1055701597,
		Skater01AFY = 1767892582,
		Skater01AMM = 3654768780,
		Skater01AMY = 3250873975,
		Skater02AMY = 2952446692,
		Skidrow01AFM = 2962707003,
		Skidrow01AMM = 32417469,
		Snowcop01SMM = 451459928,
		Socenlat01AMM = 193817059,
		Soucent01AFM = 1951946145,
		Soucent01AFO = 1039800368,
		Soucent01AFY = 744758650,
		Soucent01AMM = 1750583735,
		Soucent01AMO = 718836251,
		Soucent01AMY = 3877027275,
		Soucent02AFM = 4079145784,
		Soucent02AFO = 2775443222,
		Soucent02AFY = 1519319503,
		Soucent02AMM = 2674735073,
		Soucent02AMO = 1082572151,
		Soucent02AMY = 2896414922,
		Soucent03AFY = 2276611093,
		Soucent03AMM = 2346291386,
		Soucent03AMO = 238213328,
		Soucent03AMY = 3287349092,
		Soucent04AMM = 3271294718,
		Soucent04AMY = 2318861297,
		Soucentmc01AFM = 3454621138,
		Staggrm01AMO = 2442448387,
		Stbla01AMY = 3482496489,
		Stbla02AMY = 2563194959,
		Stlat01AMY = 2255803900,
		Stlat02AMM = 3265820418,
		Stripper01SFY = 1381498905,
		Stripper02SFY = 1846523796,
		StripperLiteSFY = 1544875514,
		Strperf01SMM = 2035992488,
		Strpreach01SMM = 469792763,
		StrPunk01GMY = 4246489531,
		StrPunk02GMY = 228715206,
		Strvend01SMM = 3465614249,
		Strvend01SMY = 2457805603,
		Stwhi01AMY = 605602864,
		Stwhi02AMY = 919005580,
		Sunbathe01AMY = 3072929548,
		Surfer01AMY = 3938633710,
		Swat01SMY = 2374966032,
		Sweatshop01SFM = 824925120,
		Sweatshop01SFY = 2231547570,
		Tattoo01AMO = 2494442380,
		Tennis01AFY = 1426880966,
		Tennis01AMM = 1416254276,
		Topless01AFY = 2633130371,
		Tourist01AFM = 1347814329,
		Tourist01AFY = 1446741360,
		Tourist01AMM = 3365863812,
		Tourist02AFY = 2435054400,
		Tramp01AFM = 1224306523,
		Tramp01AMM = 516505552,
		Tramp01AMO = 390939205,
		TrampBeac01AFM = 2359345766,
		TrampBeac01AMM = 1404403376,
		Tranvest01AMM = 3773208948,
		Tranvest02AMM = 4144940484,
		Trucker01SMM = 1498487404,
		Ups01SMM = 2680389410,
		Ups02SMM = 3502104854,
		Uscg01SMY = 3389018345,
		Vagos01GFY = 1520708641,
		Valet01SMY = 999748158,
		Vindouche01AMY = 3247667175,
		Vinewood01AFY = 435429221,
		Vinewood01AMY = 1264851357,
		Vinewood02AFY = 3669401835,
		Vinewood02AMY = 1561705728,
		Vinewood03AFY = 933092024,
		Vinewood03AMY = 534725268,
		Vinewood04AFY = 4209271110,
		Vinewood04AMY = 835315305,
		Waiter01SMY = 2907468364,
		WinClean01SMY = 1426951581,
		Xmech01SMY = 1142162924,
		Xmech02SMY = 3189832196,
		Xmech02SMYMP = 1755203590,
		Yoga01AFY = 3290105390,
		Yoga01AMY = 2869588309
	}

	class Prop extends GTA.Entity {
		constructor(handle: number);
	}

	enum RadioStation {
		LosSantosRockRadio = 0,
		NonStopPopFM = 1,
		RadioLosSantos = 2,
		ChannelX = 3,
		WestCoastTalkRadio = 4,
		RebelRadio = 5,
		SoulwaxFM = 6,
		EastLosFM = 7,
		WestCoastClassics = 8,
		BlaineCountyRadio = 9,
		TheBlueArk = 10,
		WorldWideFM = 11,
		FlyloFM = 12,
		TheLowdown = 13,
		RadioMirrorPark = 14,
		Space = 15,
		VinewoodBoulevardRadio = 16,
		SelfRadio = 17,
		TheLab = 18,
		RadioOff = 255
	}

	enum RagdollType {
		Normal = 0,
		StiffLegs = 1,
		NarrowLegs = 2,
		WideLegs = 3
	}

	class RaycastResult {
		readonly HitEntity: GTA.Entity;
		readonly HitPosition: GTA.Math.Vector3;
		readonly SurfaceNormal: GTA.Math.Vector3;
		readonly DitHit: boolean;
		readonly DitHitEntity: boolean;
		readonly Result: number;
		constructor(handle: number);
	}

	enum Relationship {
		Hate = 5,
		Dislike = 4,
		Neutral = 3,
		Like = 2,
		Respect = 1,
		Companion = 0,
		Pedestrians = 255
	}

	class RelationshipGroup {
		readonly Hash: number;
		NativeValue: number;
		constructor(hash: number);
		constructor(hash: number);
		GetRelationshipBetweenGroups(targetGroup: GTA.RelationshipGroup): GTA.Relationship;
		SetRelationshipBetweenGroups(targetGroup: GTA.RelationshipGroup, relationship: GTA.Relationship, bidirectionally?: boolean): void;
		ClearRelationshipBetweenGroups(targetGroup: GTA.RelationshipGroup, relationship: GTA.Relationship, bidirectionally?: boolean): void;
		Remove(): void;
		Equals(obj: GTA.RelationshipGroup): boolean;
		Equals(obj: any): boolean;
		GetHashCode(): number;
		ToString(): string;
	}

	class Scaleform {
		readonly Handle: number;
		NativeValue: number;
		readonly IsValid: boolean;
		readonly IsLoaded: boolean;
		constructor(scaleformID: string);
		Dispose(): void;
		CallFunction(_function: string, ..._arguments: any[]): void;
		Render2D(): void;
		Render2DScreenSpace(location: System.Drawing.PointF, size: System.Drawing.PointF): void;
		Render3D(position: GTA.Math.Vector3, rotation: GTA.Math.Vector3, scale: GTA.Math.Vector3): void;
		Render3DAdditive(position: GTA.Math.Vector3, rotation: GTA.Math.Vector3, scale: GTA.Math.Vector3): void;
	}

	enum SpeechModifier {
		Standard = 0,
		AllowRepeat = 1,
		Beat = 2,
		Force = 3,
		ForceFrontend = 4,
		ForceNoRepeatFrontend = 5,
		ForceNormal = 6,
		ForceNormalClear = 7,
		ForceNormalCritical = 8,
		ForceShouted = 9,
		ForceShoutedClear = 10,
		ForceShoutedCritical = 11,
		ForcePreloadOnly = 12,
		Megaphone = 13,
		Helicopter = 14,
		ForceMegaphone = 15,
		ForceHelicopter = 16,
		Interrupt = 17,
		InterruptShouted = 18,
		InterruptShoutedClear = 19,
		InterruptShoutedCritical = 20,
		InterruptNoForce = 21,
		InterruptFrontend = 22,
		InterruptNoForceFrontend = 23,
		AddBlip = 24,
		AddBlipAllowRepeat = 25,
		AddBlipForce = 26,
		AddBlipShouted = 27,
		AddBlipShoutedForce = 28,
		AddBlipInterrupt = 29,
		AddBlipInterruptForce = 30,
		ForcePreloadOnlyShouted = 31,
		ForcePreloadOnlyShoutedClear = 32,
		ForcePreloadOnlyShoutedCritical = 33,
		Shouted = 34,
		ShoutedClear = 35,
		ShoutedCritical = 36
	}

	class Tasks {
		AchieveHeading(heading: number, timeout?: number): void;
		AimAt(target: GTA.Entity, duration: number): void;
		AimAt(target: GTA.Math.Vector3, duration: number): void;
		Arrest(ped: GTA.Ped): void;
		ChatTo(ped: GTA.Ped): void;
		Jump(): void;
		Climb(): void;
		Cower(duration: number): void;
		CruiseWithVehicle(vehicle: GTA.Vehicle, speed: number, drivingstyle?: number): void;
		DriveTo(vehicle: GTA.Vehicle, target: GTA.Math.Vector3, radius: number, speed: number, drivingstyle?: number): void;
		EnterAnyVehicle(seat?: GTA.VehicleSeat, timeout?: number, speed?: number, flag?: number): void;
		EnterVehicle(vehicle: GTA.Vehicle, seat?: GTA.VehicleSeat, timeout?: number, speed?: number, flag?: number): void;
		EveryoneLeaveVehicle(vehicle: GTA.Vehicle): void;
		FightAgainst(target: GTA.Ped): void;
		FightAgainst(target: GTA.Ped, duration: number): void;
		FightAgainstHatedTargets(radius: number): void;
		FightAgainstHatedTargets(radius: number, duration: number): void;
		FleeFrom(ped: GTA.Ped, duration?: number): void;
		FleeFrom(position: GTA.Math.Vector3, duration?: number): void;
		FollowPointRoute(...points: any[]): void;
		FollowToOffsetFromEntity(target: GTA.Entity, offset: GTA.Math.Vector3, timeout: number, stoppingRange: number): void;
		FollowToOffsetFromEntity(target: GTA.Entity, offset: GTA.Math.Vector3, movementSpeed: number, timeout: number, stoppingRange: number, persistFollowing: boolean): void;
		GoTo(target: GTA.Entity): void;
		GoTo(target: GTA.Entity, offset: GTA.Math.Vector3, timeout?: number): void;
		GoTo(position: GTA.Math.Vector3, ignorePaths?: boolean, timeout?: number): void;
		GuardCurrentPosition(): void;
		HandsUp(duration: number): void;
		LeaveVehicle(flags?: GTA.LeaveVehicleFlags): void;
		LeaveVehicle(vehicle: GTA.Vehicle, closeDoor: boolean): void;
		LeaveVehicle(vehicle: GTA.Vehicle, flags: GTA.LeaveVehicleFlags): void;
		LookAt(target: GTA.Entity, duration?: number): void;
		LookAt(position: GTA.Math.Vector3, duration?: number): void;
		ParachuteTo(position: GTA.Math.Vector3): void;
		ParkVehicle(vehicle: GTA.Vehicle, position: GTA.Math.Vector3, heading: number, radius?: number, keepEngineOn?: boolean): void;
		PerformSequence(sequence: GTA.TaskSequence): void;
		PlayAnimation(animDict: string, animName: string): void;
		PlayAnimation(animDict: string, animName: string, speed: number, duration: number, playbackRate: number): void;
		PlayAnimation(animDict: string, animName: string, blendInSpeed: number, duration: number, flags: GTA.AnimationFlags): void;
		PlayAnimation(animDict: string, animName: string, blendInSpeed: number, blendOutSpeed: number, duration: number, flags: GTA.AnimationFlags, playbackRate: number): void;
		ReactAndFlee(ped: GTA.Ped): void;
		ReloadWeapon(): void;
		RunTo(position: GTA.Math.Vector3, ignorePaths?: boolean, timeout?: number): void;
		ShootAt(target: GTA.Ped, duration?: number, pattern?: GTA.FiringPattern): void;
		ShootAt(position: GTA.Math.Vector3, duration?: number, pattern?: GTA.FiringPattern): void;
		ShuffleToNextVehicleSeat(vehicle: GTA.Vehicle): void;
		Skydive(): void;
		SlideTo(position: GTA.Math.Vector3, heading: number): void;
		StandStill(duration: number): void;
		StartScenario(name: string, position: GTA.Math.Vector3): void;
		SwapWeapon(): void;
		TurnTo(target: GTA.Entity, duration?: number): void;
		TurnTo(position: GTA.Math.Vector3, duration?: number): void;
		UseParachute(): void;
		UseMobilePhone(): void;
		UseMobilePhone(duration: number): void;
		PutAwayParachute(): void;
		PutAwayMobilePhone(): void;
		VehicleChase(target: GTA.Ped): void;
		VehicleShootAtPed(target: GTA.Ped): void;
		Wait(duration: number): void;
		WanderAround(): void;
		WanderAround(position: GTA.Math.Vector3, radius: number): void;
		WarpIntoVehicle(vehicle: GTA.Vehicle, seat: GTA.VehicleSeat): void;
		WarpOutOfVehicle(vehicle: GTA.Vehicle): void;
		ClearAll(): void;
		ClearAllImmediately(): void;
		ClearLookAt(): void;
		ClearSecondary(): void;
		ClearAnimation(animSet: string, animName: string): void;
	}

	class TaskSequence {
		readonly Handle: number;
		readonly Count: number;
		readonly IsClosed: boolean;
		readonly AddTask: GTA.Tasks;
		constructor();
		constructor(handle: number);
		Dispose(): void;
		Close(): void;
		Close(repeat: boolean): void;
	}

	class Vehicle extends GTA.Entity {
		readonly DisplayName: string;
		readonly FriendlyName: string;
		readonly ClassDisplayName: string;
		readonly ClassFriendlyName: string;
		readonly ClassType: GTA.VehicleClass;
		BodyHealth: number;
		EngineHealth: number;
		PetrolTankHealth: number;
		FuelLevel: number;
		IsEngineRunning: boolean;
		IsRadioEnabled: boolean;
		RadioStation: GTA.RadioStation;
		Speed: number;
		readonly WheelSpeed: number;
		readonly Acceleration: number;
		CurrentRPM: number;
		HighGear: number;
		readonly CurrentGear: number;
		SteeringAngle: number;
		SteeringScale: number;
		readonly HasForks: boolean;
		HasAlarm: boolean;
		readonly AlarmActive: boolean;
		readonly HasSiren: boolean;
		SirenActive: boolean;
		IsSirenSilent: boolean;
		IsWanted: boolean;
		ProvidesCover: boolean;
		DropsMoneyOnExplosion: boolean;
		PreviouslyOwnedByPlayer: boolean;
		NeedsToBeHotwired: boolean;
		LightsOn: boolean;
		HighBeamsOn: boolean;
		InteriorLightOn: boolean;
		SearchLightOn: boolean;
		TaxiLightOn: boolean;
		LeftIndicatorLightOn: boolean;
		RightIndicatorLightOn: boolean;
		HandbrakeOn: boolean;
		BrakeLightsOn: boolean;
		LightsMultiplier: number;
		CanBeVisiblyDamaged: boolean;
		readonly IsDamaged: boolean;
		IsDriveable: boolean;
		readonly HasRoof: boolean;
		IsLeftHeadLightBroken: boolean;
		IsRightHeadLightBroken: boolean;
		readonly IsRearBumperBrokenOff: boolean;
		readonly IsFrontBumperBrokenOff: boolean;
		IsAxlesStrong: boolean;
		CanEngineDegrade: boolean;
		EnginePowerMultiplier: number;
		EngineTorqueMultiplier: number;
		LandingGearState: GTA.VehicleLandingGearState;
		RoofState: GTA.VehicleRoofState;
		LockStatus: GTA.VehicleLockStatus;
		readonly MaxBraking: number;
		readonly MaxTraction: number;
		readonly IsOnAllWheels: boolean;
		readonly IsStopped: boolean;
		readonly IsStoppedAtTrafficLights: boolean;
		IsStolen: boolean;
		readonly IsConvertible: boolean;
		IsBurnoutForced: boolean;
		readonly IsInBurnout: boolean;
		readonly Driver: GTA.Ped;
		readonly Occupants: any[];
		readonly Passengers: any[];
		readonly PassengerCapacity: number;
		readonly PassengerCount: number;
		readonly Doors: GTA.VehicleDoorCollection;
		readonly Mods: GTA.VehicleModCollection;
		readonly Wheels: GTA.VehicleWheelCollection;
		readonly Windows: GTA.VehicleWindowCollection;
		DirtLevel: number;
		CanTiresBurst: boolean;
		CanWheelsBreak: boolean;
		readonly HasBombBay: boolean;
		readonly HasTowArm: boolean;
		TowingCraneRaisedAmount: number;
		readonly TowedVehicle: GTA.Vehicle;
		constructor(handle: number);
		StartAlarm(): void;
		SoundHorn(duration: number): void;
		ExtraExists(extra: number): boolean;
		IsExtraOn(extra: number): boolean;
		ToggleExtra(extra: number, toggle: boolean): void;
		GetPedOnSeat(seat: GTA.VehicleSeat): GTA.Ped;
		IsSeatFree(seat: GTA.VehicleSeat): boolean;
		Wash(): void;
		PlaceOnGround(): boolean;
		PlaceOnNextStreet(): void;
		Repair(): void;
		Explode(): void;
		OpenBombBay(): void;
		CloseBombBay(): void;
		SetHeliYawPitchRollMult(mult: number): void;
		DropCargobobHook(hook: GTA.CargobobHook): void;
		RetractCargobobHook(): void;
		IsCargobobHookActive(): boolean;
		IsCargobobHookActive(hook: GTA.CargobobHook): boolean;
		CargoBobMagnetGrabVehicle(): void;
		CargoBobMagnetReleaseVehicle(): void;
		TowVehicle(vehicle: GTA.Vehicle, rear: boolean): void;
		DetachFromTowTruck(): void;
		DetachTowedVehicle(): void;
		ApplyDamage(position: GTA.Math.Vector3, damageAmount: number, radius: number): void;
		CreatePedOnSeat(seat: GTA.VehicleSeat, model: GTA.Model): GTA.Ped;
		CreateRandomPedOnSeat(seat: GTA.VehicleSeat): GTA.Ped;
		GetModelDisplayName(vehicleModel: GTA.Model): string;
		GetModelClass(vehicleModel: GTA.Model): GTA.VehicleClass;
		GetClassDisplayName(vehicleClass: GTA.VehicleClass): string;
		GetAllModelsOfClass(vehicleClass: GTA.VehicleClass): any[];
		GetAllModels(): any[];
	}

	enum VehicleClass {
		Compacts = 0,
		Sedans = 1,
		SUVs = 2,
		Coupes = 3,
		Muscle = 4,
		SportsClassics = 5,
		Sports = 6,
		Super = 7,
		Motorcycles = 8,
		OffRoad = 9,
		Industrial = 10,
		Utility = 11,
		Vans = 12,
		Cycles = 13,
		Boats = 14,
		Helicopters = 15,
		Planes = 16,
		Service = 17,
		Emergency = 18,
		Military = 19,
		Commercial = 20,
		Trains = 21
	}

	enum VehicleColor {
		MetallicBlack = 0,
		MetallicGraphiteBlack = 1,
		MetallicBlackSteel = 2,
		MetallicDarkSilver = 3,
		MetallicSilver = 4,
		MetallicBlueSilver = 5,
		MetallicSteelGray = 6,
		MetallicShadowSilver = 7,
		MetallicStoneSilver = 8,
		MetallicMidnightSilver = 9,
		MetallicGunMetal = 10,
		MetallicAnthraciteGray = 11,
		MatteBlack = 12,
		MatteGray = 13,
		MatteLightGray = 14,
		UtilBlack = 15,
		UtilBlackPoly = 16,
		UtilDarksilver = 17,
		UtilSilver = 18,
		UtilGunMetal = 19,
		UtilShadowSilver = 20,
		WornBlack = 21,
		WornGraphite = 22,
		WornSilverGray = 23,
		WornSilver = 24,
		WornBlueSilver = 25,
		WornShadowSilver = 26,
		MetallicRed = 27,
		MetallicTorinoRed = 28,
		MetallicFormulaRed = 29,
		MetallicBlazeRed = 30,
		MetallicGracefulRed = 31,
		MetallicGarnetRed = 32,
		MetallicDesertRed = 33,
		MetallicCabernetRed = 34,
		MetallicCandyRed = 35,
		MetallicSunriseOrange = 36,
		MetallicClassicGold = 37,
		MetallicOrange = 38,
		MatteRed = 39,
		MatteDarkRed = 40,
		MatteOrange = 41,
		MatteYellow = 42,
		UtilRed = 43,
		UtilBrightRed = 44,
		UtilGarnetRed = 45,
		WornRed = 46,
		WornGoldenRed = 47,
		WornDarkRed = 48,
		MetallicDarkGreen = 49,
		MetallicRacingGreen = 50,
		MetallicSeaGreen = 51,
		MetallicOliveGreen = 52,
		MetallicGreen = 53,
		MetallicGasolineBlueGreen = 54,
		MatteLimeGreen = 55,
		UtilDarkGreen = 56,
		UtilGreen = 57,
		WornDarkGreen = 58,
		WornGreen = 59,
		WornSeaWash = 60,
		MetallicMidnightBlue = 61,
		MetallicDarkBlue = 62,
		MetallicSaxonyBlue = 63,
		MetallicBlue = 64,
		MetallicMarinerBlue = 65,
		MetallicHarborBlue = 66,
		MetallicDiamondBlue = 67,
		MetallicSurfBlue = 68,
		MetallicNauticalBlue = 69,
		MetallicBrightBlue = 70,
		MetallicPurpleBlue = 71,
		MetallicSpinnakerBlue = 72,
		MetallicUltraBlue = 73,
		MetallicBrightBlue2 = 74,
		UtilDarkBlue = 75,
		UtilMidnightBlue = 76,
		UtilBlue = 77,
		UtilSeaFoamBlue = 78,
		UtilLightningBlue = 79,
		UtilMauiBluePoly = 80,
		UtilBrightBlue = 81,
		MatteDarkBlue = 82,
		MatteBlue = 83,
		MatteMidnightBlue = 84,
		WornDarkBlue = 85,
		WornBlue = 86,
		WornLightBlue = 87,
		MetallicTaxiYellow = 88,
		MetallicRaceYellow = 89,
		MetallicBronze = 90,
		MetallicYellowBird = 91,
		MetallicLime = 92,
		MetallicChampagne = 93,
		MetallicPuebloBeige = 94,
		MetallicDarkIvory = 95,
		MetallicChocoBrown = 96,
		MetallicGoldenBrown = 97,
		MetallicLightBrown = 98,
		MetallicStrawBeige = 99,
		MetallicMossBrown = 100,
		MetallicBistonBrown = 101,
		MetallicBeechwood = 102,
		MetallicDarkBeechwood = 103,
		MetallicChocoOrange = 104,
		MetallicBeachSand = 105,
		MetallicSunBleechedSand = 106,
		MetallicCream = 107,
		UtilBrown = 108,
		UtilMediumBrown = 109,
		UtilLightBrown = 110,
		MetallicWhite = 111,
		MetallicFrostWhite = 112,
		WornHoneyBeige = 113,
		WornBrown = 114,
		WornDarkBrown = 115,
		WornStrawBeige = 116,
		BrushedSteel = 117,
		BrushedBlackSteel = 118,
		BrushedAluminium = 119,
		Chrome = 120,
		WornOffWhite = 121,
		UtilOffWhite = 122,
		WornOrange = 123,
		WornLightOrange = 124,
		MetallicSecuricorGreen = 125,
		WornTaxiYellow = 126,
		PoliceCarBlue = 127,
		MatteGreen = 128,
		MatteBrown = 129,
		WornOrange2 = 130,
		MatteWhite = 131,
		WornWhite = 132,
		WornOliveArmyGreen = 133,
		PureWhite = 134,
		HotPink = 135,
		Salmonpink = 136,
		MetallicVermillionPink = 137,
		Orange = 138,
		Green = 139,
		Blue = 140,
		MettalicBlackBlue = 141,
		MetallicBlackPurple = 142,
		MetallicBlackRed = 143,
		HunterGreen = 144,
		MetallicPurple = 145,
		MetaillicVDarkBlue = 146,
		ModshopBlack1 = 147,
		MattePurple = 148,
		MatteDarkPurple = 149,
		MetallicLavaRed = 150,
		MatteForestGreen = 151,
		MatteOliveDrab = 152,
		MatteDesertBrown = 153,
		MatteDesertTan = 154,
		MatteFoliageGreen = 155,
		DefaultAlloyColor = 156,
		EpsilonBlue = 157,
		PureGold = 158,
		BrushedGold = 159
	}

	class VehicleDoor {
		readonly Index: GTA.VehicleDoorIndex;
		readonly AngleRatio: number;
		CanBeBroken: boolean;
		readonly IsOpen: boolean;
		readonly IsFullyOpen: boolean;
		readonly IsBroken: boolean;
		readonly Vehicle: GTA.Vehicle;
		Open(loose?: boolean, instantly?: boolean): void;
		Close(instantly?: boolean): void;
		Break(stayInTheWorld?: boolean): void;
	}

	class VehicleDoorCollection {
		readonly Item: GTA.VehicleDoor;
		HasDoor(door: GTA.VehicleDoorIndex): boolean;
		GetAll(): any[];
		GetEnumerator(): any;
	}

	enum VehicleDoorIndex {
		FrontRightDoor = 1,
		FrontLeftDoor = 0,
		BackRightDoor = 3,
		BackLeftDoor = 2,
		Hood = 4,
		Trunk = 5
	}

	enum VehicleDrivingFlags {
		None = 0,
		FollowTraffic = 1,
		YieldToPeds = 2,
		AvoidVehicles = 4,
		AvoidEmptyVehicles = 8,
		AvoidPeds = 16,
		AvoidObjects = 32,
		StopAtTrafficLights = 128,
		UseBlinkers = 256,
		AllowGoingWrongWay = 512,
		Reverse = 1024,
		AllowMedianCrossing = 262144,
		DriveBySight = 4194304,
		IgnorePathFinding = 16777216,
		TryToAvoidHighways = 536870912,
		StopAtDestination = 2147483648
	}

	enum VehicleHash {
		Adder = 3078201489,
		Airbus = 1283517198,
		Airtug = 1560980623,
		Akuma = 1672195559,
		Alpha = 767087018,
		Ambulance = 1171614426,
		Annihilator = 837858166,
		ArmyTanker = 3087536137,
		ArmyTrailer = 2818520053,
		ArmyTrailer2 = 2657817814,
		Asea = 2485144969,
		Asea2 = 2487343317,
		Asterope = 2391954683,
		Avarus = 2179174271,
		Bagger = 2154536131,
		BaleTrailer = 3895125590,
		Baller = 3486135912,
		Baller2 = 142944341,
		Baller3 = 1878062887,
		Baller4 = 634118882,
		Baller5 = 470404958,
		Baller6 = 666166960,
		Banshee = 3253274834,
		Banshee2 = 633712403,
		Barracks = 3471458123,
		Barracks2 = 1074326203,
		Barracks3 = 630371791,
		Bati = 4180675781,
		Bati2 = 3403504941,
		Benson = 2053223216,
		Besra = 1824333165,
		BestiaGTS = 1274868363,
		BF400 = 86520421,
		BfInjection = 1126868326,
		Biff = 850991848,
		Bifta = 3945366167,
		Bison = 4278019151,
		Bison2 = 2072156101,
		Bison3 = 1739845664,
		BJXL = 850565707,
		Blade = 3089165662,
		Blazer = 2166734073,
		Blazer2 = 4246935337,
		Blazer3 = 3025077634,
		Blazer4 = 3854198872,
		Blazer5 = 2704629607,
		Blimp = 4143991942,
		Blimp2 = 3681241380,
		Blista = 3950024287,
		Blista2 = 1039032026,
		Blista3 = 3703315515,
		Bmx = 1131912276,
		BoatTrailer = 524108981,
		BobcatXL = 1069929536,
		Bodhi2 = 2859047862,
		Boxville = 2307837162,
		Boxville2 = 4061868990,
		Boxville3 = 121658888,
		Boxville4 = 444171386,
		Boxville5 = 682434785,
		Brawler = 2815302597,
		Brickade = 3989239879,
		Brioso = 1549126457,
		BType = 117401876,
		BType2 = 3463132580,
		BType3 = 3692679425,
		Buccaneer = 3612755468,
		Buccaneer2 = 3281516360,
		Buffalo = 3990165190,
		Buffalo2 = 736902334,
		Buffalo3 = 237764926,
		Bulldozer = 1886712733,
		Bullet = 2598821281,
		Burrito = 2948279460,
		Burrito2 = 3387490166,
		Burrito3 = 2551651283,
		Burrito4 = 893081117,
		Burrito5 = 1132262048,
		Bus = 3581397346,
		Buzzard = 788747387,
		Buzzard2 = 745926877,
		CableCar = 3334677549,
		Caddy = 1147287684,
		Caddy2 = 3757070668,
		Camper = 1876516712,
		Carbonizzare = 2072687711,
		CarbonRS = 11251904,
		Cargobob = 4244420235,
		Cargobob2 = 1621617168,
		Cargobob3 = 1394036463,
		Cargobob4 = 2025593404,
		CargoPlane = 368211810,
		Casco = 941800958,
		Cavalcade = 2006918058,
		Cavalcade2 = 3505073125,
		Cheetah = 2983812512,
		Chimera = 1491277511,
		Chino = 349605904,
		Chino2 = 2933279331,
		Cliffhanger = 390201602,
		Coach = 2222034228,
		Cog55 = 906642318,
		Cog552 = 704435172,
		CogCabrio = 330661258,
		Cognoscenti = 2264796000,
		Cognoscenti2 = 3690124666,
		Comet2 = 3249425686,
		Comet3 = 2272483501,
		Contender = 683047626,
		Coquette = 108773431,
		Coquette2 = 1011753235,
		Coquette3 = 784565758,
		Cruiser = 448402357,
		Crusader = 321739290,
		Cuban800 = 3650256867,
		Cutter = 3288047904,
		Daemon = 2006142190,
		Daemon2 = 2890830793,
		Defiler = 822018448,
		Diablous = 4055125828,
		Diablous2 = 1790834270,
		Dilettante = 3164157193,
		Dilettante2 = 1682114128,
		Dinghy = 1033245328,
		Dinghy2 = 276773164,
		Dinghy3 = 509498602,
		Dinghy4 = 867467158,
		DLoader = 1770332643,
		DockTrailer = 2154757102,
		Docktug = 3410276810,
		Dodo = 3393804037,
		Dominator = 80636076,
		Dominator2 = 3379262425,
		Double = 2623969160,
		Dubsta = 1177543287,
		Dubsta2 = 3900892662,
		Dubsta3 = 3057713523,
		Dukes = 723973206,
		Dukes2 = 3968823444,
		Dump = 2164484578,
		Dune = 2633113103,
		Dune2 = 534258863,
		Dune4 = 3467805257,
		Dune5 = 3982671785,
		Duster = 970356638,
		Elegy = 196747873,
		Elegy2 = 3728579874,
		Emperor = 3609690755,
		Emperor2 = 2411965148,
		Emperor3 = 3053254478,
		Enduro = 1753414259,
		EntityXF = 3003014393,
		Esskey = 2035069708,
		Exemplar = 4289813342,
		F620 = 3703357000,
		Faction = 2175389151,
		Faction2 = 2504420315,
		Faction3 = 2255212070,
		Faggio = 2452219115,
		Faggio2 = 55628203,
		Faggio3 = 3005788552,
		FBI = 1127131465,
		FBI2 = 2647026068,
		FCR = 627535535,
		FCR2 = 3537231886,
		Felon = 3903372712,
		Felon2 = 4205676014,
		Feltzer2 = 2299640309,
		Feltzer3 = 2728226064,
		FireTruck = 1938952078,
		Fixter = 3458454463,
		Flatbed = 1353720154,
		Forklift = 1491375716,
		FMJ = 1426219628,
		FQ2 = 3157435195,
		Freight = 1030400667,
		FreightCar = 184361638,
		FreightCont1 = 920453016,
		FreightCont2 = 240201337,
		FreightGrain = 642617954,
		FreightTrailer = 3517691494,
		Frogger = 744705981,
		Frogger2 = 1949211328,
		Fugitive = 1909141499,
		Furoregt = 3205927392,
		Fusilade = 499169875,
		Futo = 2016857647,
		Gargoyle = 741090084,
		Gauntlet = 2494797253,
		Gauntlet2 = 349315417,
		GBurrito = 2549763894,
		GBurrito2 = 296357396,
		Glendale = 75131841,
		GP1 = 1234311532,
		GrainTrailer = 1019737494,
		Granger = 2519238556,
		Gresley = 2751205197,
		Guardian = 2186977100,
		Habanero = 884422927,
		Hakuchou = 1265391242,
		Hakuchou2 = 3685342204,
		Handler = 444583674,
		Hauler = 1518533038,
		Hexer = 301427732,
		Hotknife = 37348240,
		Huntley = 486987393,
		Hydra = 970385471,
		Infernus = 418536135,
		Infernus2 = 2889029532,
		Ingot = 3005245074,
		Innovation = 4135840458,
		Insurgent = 2434067162,
		Insurgent2 = 2071877360,
		Intruder = 886934177,
		Issi2 = 3117103977,
		ItaliGTB = 2246633323,
		ItaliGTB2 = 3812247419,
		Jackal = 3670438162,
		JB700 = 1051415893,
		Jester = 2997294755,
		Jester2 = 3188613414,
		Jet = 1058115860,
		Jetmax = 861409633,
		Journey = 4174679674,
		Kalahari = 92612664,
		Khamelion = 544021352,
		Kuruma = 2922118804,
		Kuruma2 = 410882957,
		Landstalker = 1269098716,
		Lazer = 3013282534,
		LE7B = 3062131285,
		Lectro = 640818791,
		Lguard = 469291905,
		Limo2 = 4180339789,
		Lurcher = 2068293287,
		Luxor = 621481054,
		Luxor2 = 3080673438,
		Lynx = 482197771,
		Mamba = 2634021974,
		Mammatus = 2548391185,
		Manana = 2170765704,
		Manchez = 2771538552,
		Marquis = 3251507587,
		Marshall = 1233534620,
		Massacro = 4152024626,
		Massacro2 = 3663206819,
		Maverick = 2634305738,
		Mesa = 914654722,
		Mesa2 = 3546958660,
		Mesa3 = 2230595153,
		Miljet = 165154707,
		Minivan = 3984502180,
		Minivan2 = 3168702960,
		Mixer = 3510150843,
		Mixer2 = 475220373,
		Monroe = 3861591579,
		Monster = 3449006043,
		Moonbeam = 525509695,
		Moonbeam2 = 1896491931,
		Mower = 1783355638,
		Mule = 904750859,
		Mule2 = 3244501995,
		Mule3 = 2242229361,
		Nemesis = 3660088182,
		Nero = 1034187331,
		Nero2 = 1093792632,
		Nightblade = 2688780135,
		Nightshade = 2351681756,
		Nimbus = 2999939664,
		Ninef = 1032823388,
		Ninef2 = 2833484545,
		Omnis = 3517794615,
		Oracle = 1348744438,
		Oracle2 = 3783366066,
		Osiris = 1987142870,
		Packer = 569305213,
		Panto = 3863274624,
		Paradise = 1488164764,
		Patriot = 3486509883,
		PBus = 2287941233,
		PCJ = 3385765638,
		Penetrator = 2536829930,
		Penumbra = 3917501776,
		Peyote = 1830407356,
		Pfister811 = 2465164804,
		Phantom = 2157618379,
		Phantom2 = 2645431192,
		Phoenix = 2199527893,
		Picador = 1507916787,
		Pigalle = 1078682497,
		Police = 2046537925,
		Police2 = 2667966721,
		Police3 = 1912215274,
		Police4 = 2321795001,
		Policeb = 4260343491,
		PoliceOld1 = 2758042359,
		PoliceOld2 = 2515846680,
		PoliceT = 456714581,
		Polmav = 353883353,
		Pony = 4175309224,
		Pony2 = 943752001,
		Pounder = 2112052861,
		Prairie = 2844316578,
		Pranger = 741586030,
		Predator = 3806844075,
		Premier = 2411098011,
		Primo = 3144368207,
		Primo2 = 2254540506,
		PropTrailer = 356391690,
		Prototipo = 2123327359,
		Radi = 2643899483,
		RakeTrailer = 390902130,
		RancherXL = 1645267888,
		RancherXL2 = 1933662059,
		RallyTruck = 2191146052,
		RapidGT = 2360515092,
		RapidGT2 = 1737773231,
		Raptor = 3620039993,
		RatBike = 1873600305,
		RatLoader = 3627815886,
		RatLoader2 = 3705788919,
		Reaper = 234062309,
		Rebel = 3087195462,
		Rebel2 = 2249373259,
		Regina = 4280472072,
		RentalBus = 3196165219,
		Rhapsody = 841808271,
		Rhino = 782665360,
		Riot = 3089277354,
		Ripley = 3448987385,
		Rocoto = 2136773105,
		Romero = 627094268,
		Rubble = 2589662668,
		Ruffian = 3401388520,
		Ruiner = 4067225593,
		Ruiner2 = 941494461,
		Ruiner3 = 777714999,
		Rumpo = 1162065741,
		Rumpo2 = 2518351607,
		Rumpo3 = 1475773103,
		Ruston = 719660200,
		SabreGT = 2609945748,
		SabreGT2 = 223258115,
		Sadler = 3695398481,
		Sadler2 = 734217681,
		Sanchez = 788045382,
		Sanchez2 = 2841686334,
		Sanctus = 1491277511,
		Sandking = 3105951696,
		Sandking2 = 989381445,
		Savage = 4212341271,
		Schafter2 = 3039514899,
		Schafter3 = 2809443750,
		Schafter4 = 1489967196,
		Schafter5 = 3406724313,
		Schafter6 = 1922255844,
		Schwarzer = 3548084598,
		Scorcher = 4108429845,
		Scrap = 2594165727,
		Seashark = 3264692260,
		Seashark2 = 3678636260,
		Seashark3 = 3983945033,
		Seminole = 1221512915,
		Sentinel = 1349725314,
		Sentinel2 = 873639469,
		Serrano = 1337041428,
		Seven70 = 2537130571,
		Shamal = 3080461301,
		Sheava = 819197656,
		Sheriff = 2611638396,
		Sheriff2 = 1922257928,
		Shotaro = 3889340782,
		Skylift = 1044954915,
		SlamVan = 729783779,
		SlamVan2 = 833469436,
		SlamVan3 = 1119641113,
		Sovereign = 743478836,
		Specter = 1886268224,
		Specter2 = 1074745671,
		Speeder = 231083307,
		Speeder2 = 437538602,
		Speedo = 3484649228,
		Speedo2 = 728614474,
		Squalo = 400514754,
		Stalion = 1923400478,
		Stalion2 = 3893323758,
		Stanier = 2817386317,
		Stinger = 1545842587,
		StingerGT = 2196019706,
		Stockade = 1747439474,
		Stockade3 = 4080511798,
		Stratum = 1723137093,
		Stretch = 2333339779,
		Stunt = 2172210288,
		Submersible = 771711535,
		Submersible2 = 3228633070,
		Sultan = 970598228,
		SultanRS = 3999278268,
		Suntrap = 4012021193,
		Superd = 1123216662,
		Supervolito = 710198397,
		Supervolito2 = 2623428164,
		Surano = 384071873,
		Surfer = 699456151,
		Surfer2 = 2983726598,
		Surge = 2400073108,
		Swift2 = 1075432268,
		Swift = 3955379698,
		T20 = 1663218586,
		Taco = 1951180813,
		Tailgater = 3286105550,
		Tampa = 972671128,
		Tampa2 = 3223586949,
		Tanker = 3564062519,
		Tanker2 = 1956216962,
		TankerCar = 586013744,
		Taxi = 3338918751,
		Technical = 2198148358,
		Technical2 = 1180875963,
		Tempesta = 272929391,
		Thrust = 1836027715,
		TipTruck = 48339065,
		TipTruck2 = 3347205726,
		Titan = 1981688531,
		Tornado = 464687292,
		Tornado2 = 1531094468,
		Tornado3 = 1762279763,
		Tornado4 = 2261744861,
		Tornado5 = 2497353967,
		Tornado6 = 2736567667,
		Toro = 1070967343,
		Toro2 = 908897389,
		Tourbus = 1941029835,
		TowTruck = 2971866336,
		TowTruck2 = 3852654278,
		TR2 = 2078290630,
		TR3 = 1784254509,
		TR4 = 2091594960,
		Tractor = 1641462412,
		Tractor2 = 2218488798,
		Tractor3 = 1445631933,
		TrailerLogs = 2016027501,
		Trailers = 3417488910,
		Trailers2 = 2715434129,
		Trailers3 = 2236089197,
		TrailerSmall = 712162987,
		Trash = 1917016601,
		Trash2 = 3039269212,
		TRFlat = 2942498482,
		TriBike = 1127861609,
		TriBike2 = 3061159916,
		TriBike3 = 3894672200,
		TrophyTruck = 101905590,
		TrophyTruck2 = 3631668194,
		Tropic = 290013743,
		Tropic2 = 1448677353,
		Tropos = 1887331236,
		Tug = 2194326579,
		Turismor = 408192225,
		Turismo2 = 3312836369,
		TVTrailer = 2524324030,
		Tyrus = 2067820283,
		UtilityTruck = 516990260,
		UtilityTruck2 = 887537515,
		UtilityTruck3 = 2132890591,
		UtilliTruck = 516990260,
		UtilliTruck2 = 887537515,
		UtilliTruck3 = 2132890591,
		Vacca = 338562499,
		Vader = 4154065143,
		Valkyrie = 2694714877,
		Valkyrie2 = 1543134283,
		Velum = 2621610858,
		Velum2 = 1077420264,
		Verlierer2 = 1102544804,
		Vestra = 1341619767,
		Vigero = 3469130167,
		Vindicator = 2941886209,
		Virgo = 3796912450,
		Virgo2 = 3395457658,
		Virgo3 = 16646064,
		Volatus = 2449479409,
		Voltic = 2672523198,
		Voltic2 = 989294410,
		Voodoo = 2006667053,
		Voodoo2 = 523724515,
		Vortex = 3685342204,
		Warrener = 1373123368,
		Washington = 1777363799,
		Wastelander = 2382949506,
		Windsor = 1581459400,
		Windsor2 = 2364918497,
		Wolfsbane = 3676349299,
		XLS = 1203490606,
		XLS2 = 3862958888,
		Youga = 65402552,
		Youga2 = 3685342204,
		Zentorno = 2891838741,
		Zion = 3172678083,
		Zion2 = 3101863448,
		ZombieA = 3285698347,
		ZombieB = 3724934023,
		ZType = 758895617
	}

	enum VehicleLandingGearState {
		Deployed = 0,
		Closing = 1,
		Opening = 2,
		Retracted = 3
	}

	enum VehicleLockStatus {
		None = 0,
		Unlocked = 1,
		Locked = 2,
		LockedForPlayer = 3,
		StickPlayerInside = 4,
		CanBeBrokenInto = 7,
		CanBeBrokenIntoPersist = 8,
		CannotBeTriedToEnter = 10
	}

	class VehicleMod {
		readonly ModType: GTA.VehicleModType;
		Index: number;
		Variation: boolean;
		readonly LocalizedModTypeName: string;
		readonly LocalizedModName: string;
		readonly ModCount: number;
		readonly Vehicle: GTA.Vehicle;
		GetLocalizedModName(index: number): string;
		Remove(): void;
	}

	class VehicleModCollection {
		readonly Item: GTA.VehicleMod;
		WheelType: GTA.VehicleWheelType;
		readonly AllowedWheelTypes: any[];
		readonly LocalizedWheelTypeName: string;
		Livery: number;
		readonly LiveryCount: number;
		readonly LocalizedLiveryName: string;
		WindowTint: GTA.VehicleWindowTint;
		PrimaryColor: GTA.VehicleColor;
		SecondaryColor: GTA.VehicleColor;
		RimColor: GTA.VehicleColor;
		PearlescentColor: GTA.VehicleColor;
		TrimColor: GTA.VehicleColor;
		DashboardColor: GTA.VehicleColor;
		ColorCombination: number;
		readonly ColorCombinationCount: number;
		TireSmokeColor: System.Drawing.Color;
		NeonLightsColor: System.Drawing.Color;
		readonly HasNeonLights: boolean;
		CustomPrimaryColor: System.Drawing.Color;
		CustomSecondaryColor: System.Drawing.Color;
		readonly IsPrimaryColorCustom: boolean;
		readonly IsSecondaryColorCustom: boolean;
		LicensePlateStyle: GTA.LicensePlateStyle;
		readonly LicensePlateType: GTA.LicensePlateType;
		LicensePlate: string;
		HasVehicleMod(type: GTA.VehicleModType): boolean;
		GetAllMods(): any[];
		GetLocalizedWheelTypeName(wheelType: GTA.VehicleWheelType): string;
		InstallModKit(): void;
		RequestAdditionTextFile(timeout?: number): boolean;
		GetLocalizedLiveryName(index: number): string;
		IsNeonLightsOn(light: GTA.VehicleNeonLight): boolean;
		SetNeonLightsOn(light: GTA.VehicleNeonLight, on: boolean): void;
		HasNeonLight(neonLight: GTA.VehicleNeonLight): boolean;
		ClearCustomPrimaryColor(): void;
		ClearCustomSecondaryColor(): void;
	}

	enum VehicleModType {
		Spoilers = 0,
		FrontBumper = 1,
		RearBumper = 2,
		SideSkirt = 3,
		Exhaust = 4,
		Frame = 5,
		Grille = 6,
		Hood = 7,
		Fender = 8,
		RightFender = 9,
		Roof = 10,
		Engine = 11,
		Brakes = 12,
		Transmission = 13,
		Horns = 14,
		Suspension = 15,
		Armor = 16,
		FrontWheel = 23,
		RearWheel = 24,
		PlateHolder = 25,
		VanityPlates = 26,
		TrimDesign = 27,
		Ornaments = 28,
		Dashboard = 29,
		DialDesign = 30,
		DoorSpeakers = 31,
		Seats = 32,
		SteeringWheels = 33,
		ColumnShifterLevers = 34,
		Plaques = 35,
		Speakers = 36,
		Trunk = 37,
		Hydraulics = 38,
		EngineBlock = 39,
		AirFilter = 40,
		Struts = 41,
		ArchCover = 42,
		Aerials = 43,
		Trim = 44,
		Tank = 45,
		Windows = 46,
		Livery = 48
	}

	enum VehicleNeonLight {
		Left = 0,
		Right = 1,
		Front = 2,
		Back = 3
	}

	enum VehicleRoofState {
		Closed = 0,
		Opening = 1,
		Opened = 2,
		Closing = 3
	}

	enum VehicleSeat {
		None = -3,
		Any = -2,
		Driver = -1,
		Passenger = 0,
		LeftFront = -1,
		RightFront = 0,
		LeftRear = 1,
		RightRear = 2,
		ExtraSeat1 = 3,
		ExtraSeat2 = 4,
		ExtraSeat3 = 5,
		ExtraSeat4 = 6,
		ExtraSeat5 = 7,
		ExtraSeat6 = 8,
		ExtraSeat7 = 9,
		ExtraSeat8 = 10,
		ExtraSeat9 = 11,
		ExtraSeat10 = 12,
		ExtraSeat11 = 13,
		ExtraSeat12 = 14
	}

	class VehicleToggleMod {
		readonly ModType: GTA.VehicleToggleModType;
		IsInstalled: boolean;
		readonly LocalizedModTypeName: string;
		readonly Vehicle: GTA.Vehicle;
		Remove(): void;
	}

	enum VehicleToggleModType {
		Turbo = 18,
		TireSmoke = 20,
		XenonHeadlights = 22
	}

	class VehicleWheel {
		readonly Index: number;
		readonly Vehicle: GTA.Vehicle;
		Burst(): void;
		Fix(): void;
	}

	class VehicleWheelCollection {
		readonly Item: GTA.VehicleWheel;
		readonly Count: number;
	}

	enum VehicleWheelType {
		Sport = 0,
		Muscle = 1,
		Lowrider = 2,
		SUV = 3,
		Offroad = 4,
		Tuner = 5,
		BikeWheels = 6,
		HighEnd = 7,
		BennysOriginals = 8,
		BennysBespoke = 9
	}

	class VehicleWindow {
		readonly Index: GTA.VehicleWindowIndex;
		readonly IsIntact: boolean;
		readonly Vehicle: GTA.Vehicle;
		Repair(): void;
		Smash(): void;
		RollUp(): void;
		RollDown(): void;
		Remove(): void;
	}

	class VehicleWindowCollection {
		readonly Item: GTA.VehicleWindow;
		readonly AreAllWindowsIntact: boolean;
		RollDownAllWindows(): void;
	}

	enum VehicleWindowIndex {
		FrontRightWindow = 1,
		FrontLeftWindow = 0,
		BackRightWindow = 3,
		BackLeftWindow = 2,
		ExtraWindow1 = 4,
		ExtraWindow2 = 5,
		ExtraWindow3 = 6,
		ExtraWindow4 = 7
	}

	enum VehicleWindowTint {
		None = 0,
		PureBlack = 1,
		DarkSmoke = 2,
		LightSmoke = 3,
		Stock = 4,
		Limo = 5,
		Green = 6
	}

	class Weapon {
		readonly Hash: GTA.WeaponHash;
		readonly IsPresent: boolean;
		readonly Name: string;
		readonly Model: GTA.Model;
		Tint: GTA.WeaponTint;
		readonly Group: GTA.WeaponGroup;
		Ammo: number;
		AmmoInClip: number;
		readonly MaxAmmo: number;
		readonly MaxAmmoInClip: number;
		readonly DefaultClipSize: number;
		InfiniteAmmo: boolean;
		InfiniteAmmoClip: boolean;
		readonly CanUseOnParachute: boolean;
		readonly MaxComponents: number;
		GetComponent(index: number): GTA.WeaponComponent;
		GetComponentName(component: GTA.WeaponComponent): string;
		SetComponent(component: GTA.WeaponComponent, active: boolean): void;
		IsComponentActive(component: GTA.WeaponComponent): boolean;
		GetDisplayNameFromHash(hash: GTA.WeaponHash): string;
		GetComponentsFromHash(hash: GTA.WeaponHash): any[];
		GetComponentDisplayNameFromHash(hash: GTA.WeaponHash, component: GTA.WeaponComponent): string;
	}

	class WeaponCollection {
		readonly Item: GTA.Weapon;
		readonly Current: GTA.Weapon;
		readonly CurrentWeaponObject: GTA.Prop;
		readonly BestWeapon: GTA.Weapon;
		HasWeapon(weaponHash: GTA.WeaponHash): boolean;
		IsWeaponValid(hash: GTA.WeaponHash): boolean;
		Give(hash: GTA.WeaponHash, ammoCount: number, equipNow: boolean, isAmmoLoaded: boolean): GTA.Weapon;
		Select(weapon: GTA.Weapon): boolean;
		Select(weaponHash: GTA.WeaponHash): boolean;
		Select(weaponHash: GTA.WeaponHash, equipNow: boolean): boolean;
		Drop(): void;
		Remove(weapon: GTA.Weapon): void;
		Remove(weaponHash: GTA.WeaponHash): void;
		RemoveAll(): void;
	}

	enum WeaponComponent {
		AdvancedRifleClip01 = 4203716879,
		AdvancedRifleClip02 = 2395064697,
		AdvancedRifleVarmodLuxe = 930927479,
		APPistolClip01 = 834974250,
		APPistolClip02 = 614078421,
		APPistolVarmodLuxe = 2608252716,
		AssaultRifleClip01 = 3193891350,
		AssaultRifleClip02 = 2971750299,
		AssaultRifleClip03 = 3689981245,
		AssaultRifleVarmodLuxe = 1319990579,
		AssaultSMGClip01 = 2366834608,
		AssaultSMGClip02 = 3141985303,
		AssaultSMGVarmodLowrider = 663517359,
		AssaultShotgunClip01 = 2498239431,
		AssaultShotgunClip02 = 2260565874,
		AtArAfGrip = 202788691,
		AtArFlsh = 2076495324,
		AtArSupp = 2205435306,
		AtArSupp02 = 2805810788,
		AtPiFlsh = 899381934,
		AtPiSupp = 3271853210,
		AtPiSupp02 = 1709866683,
		AtRailCover01 = 1967214384,
		AtScopeLarge = 3527687644,
		AtScopeLargeFixedZoom = 471997210,
		AtScopeMacro = 2637152041,
		AtScopeMacro02 = 1019656791,
		AtScopeMax = 3159677559,
		AtScopeMedium = 2698550338,
		AtScopeSmall = 2855028148,
		AtScopeSmall02 = 1006677997,
		AtSrSupp = 3859329886,
		BullpupRifleClip01 = 3315675008,
		BullpupRifleClip02 = 3009973007,
		BullpupRifleVarmodLow = 2824322168,
		BullpupShotgunClip01 = 3377353998,
		CarbineRifleClip01 = 2680042476,
		CarbineRifleClip02 = 2433783441,
		CarbineRifleClip03 = 3127044405,
		CarbineRifleVarmodLuxe = 3634075224,
		CombatMGClip01 = 3791631178,
		CombatMGClip02 = 3603274966,
		CombatMGVarmodLowrider = 2466172125,
		CombatPDWClip01 = 1125642654,
		CombatPDWClip02 = 860508675,
		CombatPDWClip03 = 1857603803,
		CombatPistolClip01 = 119648377,
		CombatPistolClip02 = 3598405421,
		CombatPistolVarmodLowrider = 3328527730,
		CompactRifleClip01 = 1363085923,
		CompactRifleClip02 = 1509923832,
		CompactRifleClip03 = 3322377230,
		DBShotgunClip01 = 703231006,
		FireworkClip01 = 3840197261,
		FlareGunClip01 = 2481569177,
		FlashlightLight = 3719772431,
		GrenadeLauncherClip01 = 296639639,
		GusenbergClip01 = 484812453,
		GusenbergClip02 = 3939025520,
		HeavyPistolClip01 = 222992026,
		HeavyPistolClip02 = 1694090795,
		HeavyPistolVarmodLuxe = 2053798779,
		HeavyShotgunClip01 = 844049759,
		HeavyShotgunClip02 = 2535257853,
		HeavyShotgunClip03 = 2294798931,
		HeavySniperClip01 = 1198478068,
		HomingLauncherClip01 = 4162006335,
		KnuckleVarmodBallas = 4007263587,
		KnuckleVarmodBase = 4081463091,
		KnuckleVarmodDiamond = 2539772380,
		KnuckleVarmodDollar = 1351683121,
		KnuckleVarmodHate = 2112683568,
		KnuckleVarmodKing = 3800804335,
		KnuckleVarmodLove = 1062111910,
		KnuckleVarmodPimp = 3323197061,
		KnuckleVarmodPlayer = 146278587,
		KnuckleVarmodVagos = 2062808965,
		MGClip01 = 4097109892,
		MGClip02 = 2182449991,
		MGVarmodLowrider = 3604658878,
		MachinePistolClip01 = 1198425599,
		MachinePistolClip02 = 3106695545,
		MachinePistolClip03 = 2850671348,
		MarksmanPistolClip01 = 3416146413,
		MarksmanRifleClip01 = 3627761985,
		MarksmanRifleClip02 = 3439143621,
		MicroSMGClip01 = 3410538224,
		MicroSMGClip02 = 283556395,
		MicroSMGVarmodLuxe = 1215999497,
		MinigunClip01 = 3370020614,
		MusketClip01 = 1322387263,
		Pistol50Clip01 = 580369945,
		Pistol50Clip02 = 3654528146,
		Pistol50VarmodLuxe = 2008591151,
		PistolClip01 = 4275109233,
		PistolClip02 = 3978713628,
		PistolVarmodLuxe = 3610841222,
		PoliceTorchFlashlight = 3315797997,
		PumpShotgunClip01 = 3513717816,
		PumpShotgunVarmodLowrider = 2732039643,
		RPGClip01 = 1319465907,
		RailgunClip01 = 59044840,
		RevolverClip01 = 3917905123,
		RevolverVarmodBoss = 384708672,
		RevolverVarmodGoon = 2492708877,
		SMGClip01 = 643254679,
		SMGClip02 = 889808635,
		SMGClip03 = 2043113590,
		SMGVarmodLuxe = 663170192,
		SNSPistolClip01 = 4169150169,
		SNSPistolClip02 = 2063610803,
		SNSPistolVarmodLowrider = 2150886575,
		SawnoffShotgunClip01 = 3352699429,
		SawnoffShotgunVarmodLuxe = 2242268665,
		SniperRifleClip01 = 2613461129,
		SniperRifleVarmodLuxe = 1077065191,
		SpecialCarbineClip01 = 3334989185,
		SpecialCarbineClip02 = 2089537806,
		SpecialCarbineClip03 = 1801039530,
		SpecialCarbineVarmodLowrider = 1929467122,
		SwitchbladeVarmodBase = 2436343040,
		SwitchbladeVarmodVar1 = 1530822070,
		SwitchbladeVarmodVar2 = 3885209186,
		VintagePistolClip01 = 1168357051,
		VintagePistolClip02 = 867832552,
		Invalid = 4294967295
	}

	enum WeaponGroup {
		Unarmed = 2685387236,
		Melee = 3566412244,
		Pistol = 416676503,
		SMG = 3337201093,
		AssaultRifle = 3352383570,
		MG = 1159398588,
		Shotgun = 860033945,
		Sniper = 3082541095,
		Heavy = 2725924767,
		Thrown = 1548507267,
		PetrolCan = 1595662460
	}

	enum WeaponHash {
		Knife = 2578778090,
		Nightstick = 1737195953,
		Hammer = 1317494643,
		Bat = 2508868239,
		GolfClub = 1141786504,
		Crowbar = 2227010557,
		Bottle = 4192643659,
		SwitchBlade = 3756226112,
		Pistol = 453432689,
		CombatPistol = 1593441988,
		APPistol = 584646201,
		Pistol50 = 2578377531,
		FlareGun = 1198879012,
		MarksmanPistol = 3696079510,
		Revolver = 3249783761,
		MicroSMG = 324215364,
		SMG = 736523883,
		AssaultSMG = 4024951519,
		CombatPDW = 171789620,
		AssaultRifle = 3220176749,
		CarbineRifle = 2210333304,
		AdvancedRifle = 2937143193,
		CompactRifle = 1649403952,
		MG = 2634544996,
		CombatMG = 2144741730,
		PumpShotgun = 487013001,
		SawnOffShotgun = 2017895192,
		AssaultShotgun = 3800352039,
		BullpupShotgun = 2640438543,
		DoubleBarrelShotgun = 4019527611,
		StunGun = 911657153,
		SniperRifle = 100416529,
		HeavySniper = 205991906,
		GrenadeLauncher = 2726580491,
		GrenadeLauncherSmoke = 1305664598,
		RPG = 2982836145,
		Minigun = 1119849093,
		Grenade = 2481070269,
		StickyBomb = 741814745,
		SmokeGrenade = 4256991824,
		BZGas = 2694266206,
		Molotov = 615608432,
		FireExtinguisher = 101631238,
		PetrolCan = 883325847,
		SNSPistol = 3218215474,
		SpecialCarbine = 3231910285,
		HeavyPistol = 3523564046,
		BullpupRifle = 2132975508,
		HomingLauncher = 1672152130,
		ProximityMine = 2874559379,
		Snowball = 126349499,
		VintagePistol = 137902532,
		Dagger = 2460120199,
		Firework = 2138347493,
		Musket = 2828843422,
		MarksmanRifle = 3342088282,
		HeavyShotgun = 984333226,
		Gusenberg = 1627465347,
		Hatchet = 4191993645,
		Railgun = 1834241177,
		Unarmed = 2725352035,
		KnuckleDuster = 3638508604,
		Machete = 3713923289,
		MachinePistol = 3675956304,
		Flashlight = 2343591895,
		Ball = 600439132,
		Flare = 1233104067,
		NightVision = 2803906140,
		Parachute = 4222310262
	}

	enum WeaponTint {
		Normal = 0,
		Green = 1,
		Gold = 2,
		Pink = 3,
		Army = 4,
		LSPD = 5,
		Orange = 6,
		Platinum = 7
	}

}
