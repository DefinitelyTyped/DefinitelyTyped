declare namespace GTA.NaturalMotion {

	class ActivePoseHelper {
		Mask: string;
		UseGravityCompensation: boolean;
		AnimSource: GTA.NaturalMotion.AnimSource;
		constructor(ped: GTA.Ped);
	}

	enum AdaptiveMode {
		NotAdaptive = 0,
		OnlyDirection = 1,
		DirectionAndSpeed = 2,
		DirectionSpeedAndStrength = 3
	}

	class AnimPoseHelper {
		MuscleStiffness: number;
		Stiffness: number;
		Damping: number;
		EffectorMask: string;
		OverideHeadlook: boolean;
		OveridePointArm: boolean;
		OveridePointGun: boolean;
		UseZMPGravityCompensation: boolean;
		GravityCompensation: number;
		MuscleStiffnessLeftArm: number;
		MuscleStiffnessRightArm: number;
		MuscleStiffnessSpine: number;
		MuscleStiffnessLeftLeg: number;
		MuscleStiffnessRightLeg: number;
		StiffnessLeftArm: number;
		StiffnessRightArm: number;
		StiffnessSpine: number;
		StiffnessLeftLeg: number;
		StiffnessRightLeg: number;
		DampingLeftArm: number;
		DampingRightArm: number;
		DampingSpine: number;
		DampingLeftLeg: number;
		DampingRightLeg: number;
		GravCompLeftArm: number;
		GravCompRightArm: number;
		GravCompSpine: number;
		GravCompLeftLeg: number;
		GravCompRightLeg: number;
		ConnectedLeftHand: number;
		ConnectedRightHand: number;
		ConnectedLeftFoot: number;
		ConnectedRightFoot: number;
		AnimSource: GTA.NaturalMotion.AnimSource;
		DampenSideMotionInstanceIndex: number;
		constructor(ped: GTA.Ped);
	}

	enum AnimSource {
		CurrentItems = 0,
		PreviousItems = 1,
		AnimItems = 2
	}

	class ApplyBulletImpulseHelper {
		EqualizeAmount: number;
		PartIndex: number;
		Impulse: GTA.Math.Vector3;
		HitPoint: GTA.Math.Vector3;
		LocalHitPointInfo: boolean;
		ExtraShare: number;
		constructor(ped: GTA.Ped);
	}

	class ApplyImpulseHelper {
		EqualizeAmount: number;
		PartIndex: number;
		Impulse: GTA.Math.Vector3;
		HitPoint: GTA.Math.Vector3;
		LocalHitPointInfo: boolean;
		LocalImpulseInfo: boolean;
		AngularImpulse: boolean;
		constructor(ped: GTA.Ped);
	}

	enum ArmDirection {
		Backwards = -1,
		Adaptive = 0,
		Forwards = 1
	}

	class ArmsWindmillAdaptiveHelper {
		AngSpeed: number;
		BodyStiffness: number;
		Amplitude: number;
		Phase: number;
		ArmStiffness: number;
		LeftElbowAngle: number;
		RightElbowAngle: number;
		Lean1mult: number;
		Lean1offset: number;
		ElbowRate: number;
		ArmDirection: GTA.NaturalMotion.ArmDirection;
		DisableOnImpact: boolean;
		SetBackAngles: boolean;
		UseAngMom: boolean;
		BendLeftElbow: boolean;
		BendRightElbow: boolean;
		Mask: string;
		constructor(ped: GTA.Ped);
	}

	class ArmsWindmillHelper {
		LeftPartID: number;
		LeftRadius1: number;
		LeftRadius2: number;
		LeftSpeed: number;
		LeftNormal: GTA.Math.Vector3;
		LeftCentre: GTA.Math.Vector3;
		RightPartID: number;
		RightRadius1: number;
		RightRadius2: number;
		RightSpeed: number;
		RightNormal: GTA.Math.Vector3;
		RightCentre: GTA.Math.Vector3;
		ShoulderStiffness: number;
		ShoulderDamping: number;
		ElbowStiffness: number;
		ElbowDamping: number;
		LeftElbowMin: number;
		RightElbowMin: number;
		PhaseOffset: number;
		DragReduction: number;
		IKtwist: number;
		AngVelThreshold: number;
		AngVelGain: number;
		MirrorMode: GTA.NaturalMotion.MirrorMode;
		AdaptiveMode: GTA.NaturalMotion.AdaptiveMode;
		ForceSync: boolean;
		UseLeft: boolean;
		UseRight: boolean;
		DisableOnImpact: boolean;
		constructor(ped: GTA.Ped);
	}

	class BalancerCollisionsReactionHelper {
		NumStepsTillSlump: number;
		Stable2SlumpTime: number;
		ExclusionZone: number;
		FootFrictionMultStart: number;
		FootFrictionMultRate: number;
		BackFrictionMultStart: number;
		BackFrictionMultRate: number;
		ImpactLegStiffReduction: number;
		SlumpLegStiffReduction: number;
		SlumpLegStiffRate: number;
		ReactTime: number;
		ImpactExagTime: number;
		GlanceSpinTime: number;
		GlanceSpinMag: number;
		GlanceSpinDecayMult: number;
		IgnoreColWithIndex: number;
		SlumpMode: number;
		ReboundMode: number;
		IgnoreColMassBelow: number;
		ForwardMode: number;
		TimeToForward: number;
		ReboundForce: number;
		BraceWall: boolean;
		IgnoreColVolumeBelow: number;
		FallOverWallDrape: boolean;
		FallOverHighWalls: boolean;
		Snap: boolean;
		SnapMag: number;
		SnapDirectionRandomness: number;
		SnapLeftArm: boolean;
		SnapRightArm: boolean;
		SnapLeftLeg: boolean;
		SnapRightLeg: boolean;
		SnapSpine: boolean;
		SnapNeck: boolean;
		SnapPhasedLegs: boolean;
		SnapHipType: number;
		UnSnapInterval: number;
		UnSnapRatio: number;
		SnapUseTorques: boolean;
		ImpactWeaknessZeroDuration: number;
		ImpactWeaknessRampDuration: number;
		ImpactLoosenessAmount: number;
		ObjectBehindVictim: boolean;
		ObjectBehindVictimPos: GTA.Math.Vector3;
		ObjectBehindVictimNormal: GTA.Math.Vector3;
		constructor(ped: GTA.Ped);
	}

	class BodyBalanceHelper {
		ArmStiffness: number;
		Elbow: number;
		Shoulder: number;
		ArmDamping: number;
		UseHeadLook: boolean;
		HeadLookPos: GTA.Math.Vector3;
		HeadLookInstanceIndex: number;
		SpineStiffness: number;
		SomersaultAngle: number;
		SomersaultAngleThreshold: number;
		SideSomersaultAngle: number;
		SideSomersaultAngleThreshold: number;
		BackwardsAutoTurn: boolean;
		TurnWithBumpRadius: number;
		BackwardsArms: boolean;
		BlendToZeroPose: boolean;
		ArmsOutOnPush: boolean;
		ArmsOutOnPushMultiplier: number;
		ArmsOutOnPushTimeout: number;
		ReturningToBalanceArmsOut: number;
		ArmsOutStraightenElbows: number;
		ArmsOutMinLean2: number;
		SpineDamping: number;
		UseBodyTurn: boolean;
		ElbowAngleOnContact: number;
		BendElbowsTime: number;
		BendElbowsGait: number;
		HipL2ArmL2: number;
		ShoulderL2: number;
		ShoulderL1: number;
		ShoulderTwist: number;
		HeadLookAtVelProb: number;
		TurnOffProb: number;
		Turn2VelProb: number;
		TurnAwayProb: number;
		TurnLeftProb: number;
		TurnRightProb: number;
		Turn2TargetProb: number;
		AngVelMultiplier: GTA.Math.Vector3;
		AngVelThreshold: GTA.Math.Vector3;
		BraceDistance: number;
		TargetPredictionTime: number;
		ReachAbsorbtionTime: number;
		BraceStiffness: number;
		MinBraceTime: number;
		TimeToBackwardsBrace: number;
		HandsDelayMin: number;
		HandsDelayMax: number;
		BraceOffset: number;
		MoveRadius: number;
		MoveAmount: number;
		MoveWhenBracing: boolean;
		constructor(ped: GTA.Ped);
	}

	class BodyFoetalHelper {
		Stiffness: number;
		DampingFactor: number;
		Asymmetry: number;
		RandomSeed: number;
		BackTwist: number;
		Mask: string;
		constructor(ped: GTA.Ped);
	}

	class BodyRelaxHelper {
		Relaxation: number;
		Damping: number;
		Mask: string;
		HoldPose: boolean;
		DisableJointDriving: boolean;
		constructor(ped: GTA.Ped);
	}

	class BodyRollUpHelper {
		Stiffness: number;
		UseArmToSlowDown: number;
		ArmReachAmount: number;
		Mask: string;
		LegPush: number;
		AsymmetricalLegs: number;
		NoRollTimeBeforeSuccess: number;
		RollVelForSuccess: number;
		RollVelLinearContribution: number;
		VelocityScale: number;
		VelocityOffset: number;
		ApplyMinMaxFriction: boolean;
		constructor(ped: GTA.Ped);
	}

	class BodyWritheHelper {
		ArmStiffness: number;
		BackStiffness: number;
		LegStiffness: number;
		ArmDamping: number;
		BackDamping: number;
		LegDamping: number;
		ArmPeriod: number;
		BackPeriod: number;
		LegPeriod: number;
		Mask: string;
		ArmAmplitude: number;
		BackAmplitude: number;
		LegAmplitude: number;
		ElbowAmplitude: number;
		KneeAmplitude: number;
		RollOverFlag: boolean;
		BlendArms: number;
		BlendBack: number;
		BlendLegs: number;
		ApplyStiffness: boolean;
		OnFire: boolean;
		ShoulderLean1: number;
		ShoulderLean2: number;
		Lean1BlendFactor: number;
		Lean2BlendFactor: number;
		RollTorqueScale: number;
		MaxRollOverTime: number;
		RollOverRadius: number;
		constructor(ped: GTA.Ped);
	}

	class BraceForImpactHelper {
		BraceDistance: number;
		TargetPredictionTime: number;
		ReachAbsorbtionTime: number;
		InstanceIndex: number;
		BodyStiffness: number;
		GrabDontLetGo: boolean;
		GrabStrength: number;
		GrabDistance: number;
		GrabReachAngle: number;
		GrabHoldTimer: number;
		MaxGrabCarVelocity: number;
		LegStiffness: number;
		TimeToBackwardsBrace: number;
		Look: GTA.Math.Vector3;
		Pos: GTA.Math.Vector3;
		MinBraceTime: number;
		HandsDelayMin: number;
		HandsDelayMax: number;
		MoveAway: boolean;
		MoveAwayAmount: number;
		MoveAwayLean: number;
		MoveSideways: number;
		BbArms: boolean;
		NewBrace: boolean;
		BraceOnImpact: boolean;
		Roll2Velocity: boolean;
		RollType: number;
		SnapImpacts: boolean;
		SnapImpact: number;
		SnapBonnet: number;
		SnapFloor: number;
		DampVel: boolean;
		DampSpin: number;
		DampUpVel: number;
		DampSpinThresh: number;
		DampUpVelThresh: number;
		GsHelp: boolean;
		GsEndMin: number;
		GsSideMin: number;
		GsSideMax: number;
		GsUpness: number;
		GsCarVelMin: number;
		GsScale1Foot: boolean;
		GsFricScale1: number;
		GsFricMask1: string;
		GsFricScale2: number;
		GsFricMask2: string;
		constructor(ped: GTA.Ped);
	}

	class BuoyancyHelper {
		SurfacePoint: GTA.Math.Vector3;
		SurfaceNormal: GTA.Math.Vector3;
		Buoyancy: number;
		ChestBuoyancy: number;
		Damping: number;
		Righting: boolean;
		RightingStrength: number;
		RightingTime: number;
		constructor(ped: GTA.Ped);
	}

	class CarriedHelper {
		constructor(ped: GTA.Ped);
	}

	class CatchFallHelper {
		TorsoStiffness: number;
		LegsStiffness: number;
		ArmsStiffness: number;
		BackwardsMinArmOffset: number;
		ForwardMaxArmOffset: number;
		ZAxisSpinReduction: number;
		ExtraSit: number;
		UseHeadLook: boolean;
		Mask: string;
		constructor(ped: GTA.Ped);
	}

	class ConfigureBalanceHelper {
		StepHeight: number;
		StepHeightInc4Step: number;
		LegsApartRestep: number;
		LegsTogetherRestep: number;
		LegsApartMax: number;
		TaperKneeStrength: boolean;
		LegStiffness: number;
		LeftLegSwingDamping: number;
		RightLegSwingDamping: number;
		OpposeGravityLegs: number;
		OpposeGravityAnkles: number;
		LeanAcc: number;
		HipLeanAcc: number;
		LeanAccMax: number;
		ResistAcc: number;
		ResistAccMax: number;
		FootSlipCompOnMovingFloor: boolean;
		AnkleEquilibrium: number;
		ExtraFeetApart: number;
		DontStepTime: number;
		BalanceAbortThreshold: number;
		GiveUpHeight: number;
		StepClampScale: number;
		StepClampScaleVariance: number;
		PredictionTimeHip: number;
		PredictionTime: number;
		PredictionTimeVariance: number;
		MaxSteps: number;
		MaxBalanceTime: number;
		ExtraSteps: number;
		ExtraTime: number;
		FallType: GTA.NaturalMotion.FallType;
		FallMult: number;
		FallReduceGravityComp: boolean;
		RampHipPitchOnFail: boolean;
		StableLinSpeedThresh: number;
		StableRotSpeedThresh: number;
		FailMustCollide: boolean;
		IgnoreFailure: boolean;
		ChangeStepTime: number;
		BalanceIndefinitely: boolean;
		MovingFloor: boolean;
		AirborneStep: boolean;
		UseComDirTurnVelThresh: number;
		MinKneeAngle: number;
		FlatterSwingFeet: boolean;
		FlatterStaticFeet: boolean;
		AvoidLeg: boolean;
		AvoidFootWidth: number;
		AvoidFeedback: number;
		LeanAgainstVelocity: number;
		StepDecisionThreshold: number;
		StepIfInSupport: boolean;
		AlwaysStepWithFarthest: boolean;
		StandUp: boolean;
		DepthFudge: number;
		DepthFudgeStagger: number;
		FootFriction: number;
		FootFrictionStagger: number;
		BackwardsLeanCutoff: number;
		GiveUpHeightEnd: number;
		BalanceAbortThresholdEnd: number;
		GiveUpRampDuration: number;
		LeanToAbort: number;
		constructor(ped: GTA.Ped);
	}

	class ConfigureBalanceResetHelper {
		constructor(ped: GTA.Ped);
	}

	class ConfigureBulletsExtraHelper {
		ImpulseSpreadOverParts: boolean;
		ImpulsePeriod: number;
		ImpulseTorqueScale: number;
		LoosenessFix: boolean;
		ImpulseDelay: number;
		TorqueMode: GTA.NaturalMotion.TorqueMode;
		TorqueSpinMode: GTA.NaturalMotion.TorqueSpinMode;
		TorqueFilterMode: GTA.NaturalMotion.TorqueFilterMode;
		TorqueAlwaysSpine3: boolean;
		TorqueDelay: number;
		TorquePeriod: number;
		TorqueGain: number;
		TorqueCutoff: number;
		TorqueReductionPerTick: number;
		LiftGain: number;
		CounterImpulseDelay: number;
		CounterImpulseMag: number;
		CounterAfterMagReached: boolean;
		DoCounterImpulse: boolean;
		CounterImpulse2Hips: number;
		ImpulseNoBalMult: number;
		ImpulseBalStabStart: number;
		ImpulseBalStabEnd: number;
		ImpulseBalStabMult: number;
		ImpulseSpineAngStart: number;
		ImpulseSpineAngEnd: number;
		ImpulseSpineAngMult: number;
		ImpulseVelStart: number;
		ImpulseVelEnd: number;
		ImpulseVelMult: number;
		ImpulseAirMult: number;
		ImpulseAirMultStart: number;
		ImpulseAirMax: number;
		ImpulseAirApplyAbove: number;
		ImpulseAirOn: boolean;
		ImpulseOneLegMult: number;
		ImpulseOneLegMultStart: number;
		ImpulseOneLegMax: number;
		ImpulseOneLegApplyAbove: number;
		ImpulseOneLegOn: boolean;
		RbRatio: number;
		RbLowerShare: number;
		RbMoment: number;
		RbMaxTwistMomentArm: number;
		RbMaxBroomMomentArm: number;
		RbRatioAirborne: number;
		RbMomentAirborne: number;
		RbMaxTwistMomentArmAirborne: number;
		RbMaxBroomMomentArmAirborne: number;
		RbRatioOneLeg: number;
		RbMomentOneLeg: number;
		RbMaxTwistMomentArmOneLeg: number;
		RbMaxBroomMomentArmOneLeg: number;
		RbTwistAxis: GTA.NaturalMotion.RbTwistAxis;
		RbPivot: boolean;
		constructor(ped: GTA.Ped);
	}

	class ConfigureBulletsHelper {
		ImpulseSpreadOverParts: boolean;
		ImpulseLeakageStrengthScaled: boolean;
		ImpulsePeriod: number;
		ImpulseTorqueScale: number;
		LoosenessFix: boolean;
		ImpulseDelay: number;
		ImpulseReductionPerShot: number;
		ImpulseRecovery: number;
		ImpulseMinLeakage: number;
		TorqueMode: GTA.NaturalMotion.TorqueMode;
		TorqueSpinMode: GTA.NaturalMotion.TorqueSpinMode;
		TorqueFilterMode: GTA.NaturalMotion.TorqueFilterMode;
		TorqueAlwaysSpine3: boolean;
		TorqueDelay: number;
		TorquePeriod: number;
		TorqueGain: number;
		TorqueCutoff: number;
		TorqueReductionPerTick: number;
		LiftGain: number;
		CounterImpulseDelay: number;
		CounterImpulseMag: number;
		CounterAfterMagReached: boolean;
		DoCounterImpulse: boolean;
		CounterImpulse2Hips: number;
		ImpulseNoBalMult: number;
		ImpulseBalStabStart: number;
		ImpulseBalStabEnd: number;
		ImpulseBalStabMult: number;
		ImpulseSpineAngStart: number;
		ImpulseSpineAngEnd: number;
		ImpulseSpineAngMult: number;
		ImpulseVelStart: number;
		ImpulseVelEnd: number;
		ImpulseVelMult: number;
		ImpulseAirMult: number;
		ImpulseAirMultStart: number;
		ImpulseAirMax: number;
		ImpulseAirApplyAbove: number;
		ImpulseAirOn: boolean;
		ImpulseOneLegMult: number;
		ImpulseOneLegMultStart: number;
		ImpulseOneLegMax: number;
		ImpulseOneLegApplyAbove: number;
		ImpulseOneLegOn: boolean;
		RbRatio: number;
		RbLowerShare: number;
		RbMoment: number;
		RbMaxTwistMomentArm: number;
		RbMaxBroomMomentArm: number;
		RbRatioAirborne: number;
		RbMomentAirborne: number;
		RbMaxTwistMomentArmAirborne: number;
		RbMaxBroomMomentArmAirborne: number;
		RbRatioOneLeg: number;
		RbMomentOneLeg: number;
		RbMaxTwistMomentArmOneLeg: number;
		RbMaxBroomMomentArmOneLeg: number;
		RbTwistAxis: GTA.NaturalMotion.RbTwistAxis;
		RbPivot: boolean;
		constructor(ped: GTA.Ped);
	}

	class ConfigureConstraintsHelper {
		HandCuffs: boolean;
		HandCuffsBehindBack: boolean;
		LegCuffs: boolean;
		RightDominant: boolean;
		PassiveMode: number;
		BespokeBehaviour: boolean;
		Blend2ZeroPose: number;
		constructor(ped: GTA.Ped);
	}

	class ConfigureLimitsHelper {
		Mask: string;
		Enable: boolean;
		ToDesired: boolean;
		Restore: boolean;
		ToCurAnimation: boolean;
		Index: number;
		Lean1: number;
		Lean2: number;
		Twist: number;
		Margin: number;
		constructor(ped: GTA.Ped);
	}

	class ConfigureSelfAvoidanceHelper {
		UseSelfAvoidance: boolean;
		OverwriteDragReduction: boolean;
		TorsoSwingFraction: number;
		MaxTorsoSwingAngleRad: number;
		SelfAvoidIfInSpineBoundsOnly: boolean;
		SelfAvoidAmount: number;
		OverwriteTwist: boolean;
		UsePolarPathAlgorithm: boolean;
		Radius: number;
		constructor(ped: GTA.Ped);
	}

	class ConfigureShotInjuredArmHelper {
		InjuredArmTime: number;
		HipYaw: number;
		HipRoll: number;
		ForceStepExtraHeight: number;
		ForceStep: boolean;
		StepTurn: boolean;
		VelMultiplierStart: number;
		VelMultiplierEnd: number;
		VelForceStep: number;
		VelStepTurn: number;
		VelScales: boolean;
		constructor(ped: GTA.Ped);
	}

	class ConfigureShotInjuredLegHelper {
		TimeBeforeCollapseWoundLeg: number;
		LegInjuryTime: number;
		LegForceStep: boolean;
		LegLimpBend: number;
		LegLiftTime: number;
		LegInjury: number;
		LegInjuryHipPitch: number;
		LegInjuryLiftHipPitch: number;
		LegInjurySpineBend: number;
		LegInjuryLiftSpineBend: number;
		constructor(ped: GTA.Ped);
	}

	class ConfigureSoftLimitHelper {
		Index: number;
		Stiffness: number;
		Damping: number;
		LimitAngle: number;
		ApproachDirection: number;
		VelocityScaled: boolean;
		constructor(ped: GTA.Ped);
	}

	class DangleHelper {
		DoGrab: boolean;
		GrabFrequency: number;
		constructor(ped: GTA.Ped);
	}

	class DefineAttachedObjectHelper {
		PartIndex: number;
		ObjectMass: number;
		WorldPos: GTA.Math.Vector3;
		constructor(ped: GTA.Ped);
	}

	class ElectrocuteHelper {
		StunMag: number;
		InitialMult: number;
		LargeMult: number;
		LargeMinTime: number;
		LargeMaxTime: number;
		MovingMult: number;
		BalancingMult: number;
		AirborneMult: number;
		MovingThresh: number;
		StunInterval: number;
		DirectionRandomness: number;
		LeftArm: boolean;
		RightArm: boolean;
		LeftLeg: boolean;
		RightLeg: boolean;
		Spine: boolean;
		Neck: boolean;
		PhasedLegs: boolean;
		ApplyStiffness: boolean;
		UseTorques: boolean;
		HipType: number;
		constructor(ped: GTA.Ped);
	}

	class Euphoria {
		readonly ActivePose: GTA.NaturalMotion.ActivePoseHelper;
		readonly ApplyImpulse: GTA.NaturalMotion.ApplyImpulseHelper;
		readonly ApplyBulletImpulse: GTA.NaturalMotion.ApplyBulletImpulseHelper;
		readonly BodyRelax: GTA.NaturalMotion.BodyRelaxHelper;
		readonly ConfigureBalance: GTA.NaturalMotion.ConfigureBalanceHelper;
		readonly ConfigureBalanceReset: GTA.NaturalMotion.ConfigureBalanceResetHelper;
		readonly ConfigureSelfAvoidance: GTA.NaturalMotion.ConfigureSelfAvoidanceHelper;
		readonly ConfigureBullets: GTA.NaturalMotion.ConfigureBulletsHelper;
		readonly ConfigureBulletsExtra: GTA.NaturalMotion.ConfigureBulletsExtraHelper;
		readonly ConfigureLimits: GTA.NaturalMotion.ConfigureLimitsHelper;
		readonly ConfigureSoftLimit: GTA.NaturalMotion.ConfigureSoftLimitHelper;
		readonly ConfigureShotInjuredArm: GTA.NaturalMotion.ConfigureShotInjuredArmHelper;
		readonly ConfigureShotInjuredLeg: GTA.NaturalMotion.ConfigureShotInjuredLegHelper;
		readonly DefineAttachedObject: GTA.NaturalMotion.DefineAttachedObjectHelper;
		readonly ForceToBodyPart: GTA.NaturalMotion.ForceToBodyPartHelper;
		readonly LeanInDirection: GTA.NaturalMotion.LeanInDirectionHelper;
		readonly LeanRandom: GTA.NaturalMotion.LeanRandomHelper;
		readonly LeanToPosition: GTA.NaturalMotion.LeanToPositionHelper;
		readonly LeanTowardsObject: GTA.NaturalMotion.LeanTowardsObjectHelper;
		readonly HipsLeanInDirection: GTA.NaturalMotion.HipsLeanInDirectionHelper;
		readonly HipsLeanRandom: GTA.NaturalMotion.HipsLeanRandomHelper;
		readonly HipsLeanToPosition: GTA.NaturalMotion.HipsLeanToPositionHelper;
		readonly HipsLeanTowardsObject: GTA.NaturalMotion.HipsLeanTowardsObjectHelper;
		readonly ForceLeanInDirection: GTA.NaturalMotion.ForceLeanInDirectionHelper;
		readonly ForceLeanRandom: GTA.NaturalMotion.ForceLeanRandomHelper;
		readonly ForceLeanToPosition: GTA.NaturalMotion.ForceLeanToPositionHelper;
		readonly ForceLeanTowardsObject: GTA.NaturalMotion.ForceLeanTowardsObjectHelper;
		readonly SetStiffness: GTA.NaturalMotion.SetStiffnessHelper;
		readonly SetMuscleStiffness: GTA.NaturalMotion.SetMuscleStiffnessHelper;
		readonly SetWeaponMode: GTA.NaturalMotion.SetWeaponModeHelper;
		readonly RegisterWeapon: GTA.NaturalMotion.RegisterWeaponHelper;
		readonly ShotRelax: GTA.NaturalMotion.ShotRelaxHelper;
		readonly FireWeapon: GTA.NaturalMotion.FireWeaponHelper;
		readonly ConfigureConstraints: GTA.NaturalMotion.ConfigureConstraintsHelper;
		readonly StayUpright: GTA.NaturalMotion.StayUprightHelper;
		readonly StopAllBehaviours: GTA.NaturalMotion.StopAllBehavioursHelper;
		readonly SetCharacterStrength: GTA.NaturalMotion.SetCharacterStrengthHelper;
		readonly SetCharacterHealth: GTA.NaturalMotion.SetCharacterHealthHelper;
		readonly SetFallingReaction: GTA.NaturalMotion.SetFallingReactionHelper;
		readonly SetCharacterUnderwater: GTA.NaturalMotion.SetCharacterUnderwaterHelper;
		readonly SetCharacterCollisions: GTA.NaturalMotion.SetCharacterCollisionsHelper;
		readonly SetCharacterDamping: GTA.NaturalMotion.SetCharacterDampingHelper;
		readonly SetFrictionScale: GTA.NaturalMotion.SetFrictionScaleHelper;
		readonly AnimPose: GTA.NaturalMotion.AnimPoseHelper;
		readonly ArmsWindmill: GTA.NaturalMotion.ArmsWindmillHelper;
		readonly ArmsWindmillAdaptive: GTA.NaturalMotion.ArmsWindmillAdaptiveHelper;
		readonly BalancerCollisionsReaction: GTA.NaturalMotion.BalancerCollisionsReactionHelper;
		readonly BodyBalance: GTA.NaturalMotion.BodyBalanceHelper;
		readonly BodyFoetal: GTA.NaturalMotion.BodyFoetalHelper;
		readonly BodyRollUp: GTA.NaturalMotion.BodyRollUpHelper;
		readonly BodyWrithe: GTA.NaturalMotion.BodyWritheHelper;
		readonly BraceForImpact: GTA.NaturalMotion.BraceForImpactHelper;
		readonly Buoyancy: GTA.NaturalMotion.BuoyancyHelper;
		readonly CatchFall: GTA.NaturalMotion.CatchFallHelper;
		readonly Electrocute: GTA.NaturalMotion.ElectrocuteHelper;
		readonly FallOverWall: GTA.NaturalMotion.FallOverWallHelper;
		readonly Grab: GTA.NaturalMotion.GrabHelper;
		readonly HeadLook: GTA.NaturalMotion.HeadLookHelper;
		readonly HighFall: GTA.NaturalMotion.HighFallHelper;
		readonly IncomingTransforms: GTA.NaturalMotion.IncomingTransformsHelper;
		readonly InjuredOnGround: GTA.NaturalMotion.InjuredOnGroundHelper;
		readonly Carried: GTA.NaturalMotion.CarriedHelper;
		readonly Dangle: GTA.NaturalMotion.DangleHelper;
		readonly OnFire: GTA.NaturalMotion.OnFireHelper;
		readonly PedalLegs: GTA.NaturalMotion.PedalLegsHelper;
		readonly PointArm: GTA.NaturalMotion.PointArmHelper;
		readonly PointGun: GTA.NaturalMotion.PointGunHelper;
		readonly PointGunExtra: GTA.NaturalMotion.PointGunExtraHelper;
		readonly RollDownStairs: GTA.NaturalMotion.RollDownStairsHelper;
		readonly Shot: GTA.NaturalMotion.ShotHelper;
		readonly ShotNewBullet: GTA.NaturalMotion.ShotNewBulletHelper;
		readonly ShotSnap: GTA.NaturalMotion.ShotSnapHelper;
		readonly ShotShockSpin: GTA.NaturalMotion.ShotShockSpinHelper;
		readonly ShotFallToKnees: GTA.NaturalMotion.ShotFallToKneesHelper;
		readonly ShotFromBehind: GTA.NaturalMotion.ShotFromBehindHelper;
		readonly ShotInGuts: GTA.NaturalMotion.ShotInGutsHelper;
		readonly ShotHeadLook: GTA.NaturalMotion.ShotHeadLookHelper;
		readonly ShotConfigureArms: GTA.NaturalMotion.ShotConfigureArmsHelper;
		readonly SmartFall: GTA.NaturalMotion.SmartFallHelper;
		readonly StaggerFall: GTA.NaturalMotion.StaggerFallHelper;
		readonly Teeter: GTA.NaturalMotion.TeeterHelper;
		readonly UpperBodyFlinch: GTA.NaturalMotion.UpperBodyFlinchHelper;
		readonly Yanked: GTA.NaturalMotion.YankedHelper;
	}

	class FallOverWallHelper {
		BodyStiffness: number;
		Damping: number;
		MagOfForce: number;
		MaxDistanceFromPelToHitPoint: number;
		MaxForceDist: number;
		StepExclusionZone: number;
		MinLegHeight: number;
		BodyTwist: number;
		MaxTwist: number;
		FallOverWallEndA: GTA.Math.Vector3;
		FallOverWallEndB: GTA.Math.Vector3;
		ForceAngleAbort: number;
		ForceTimeOut: number;
		MoveArms: boolean;
		MoveLegs: boolean;
		BendSpine: boolean;
		AngleDirWithWallNormal: number;
		LeaningAngleThreshold: number;
		MaxAngVel: number;
		AdaptForcesToLowWall: boolean;
		MaxWallHeight: number;
		DistanceToSendSuccessMessage: number;
		RollingBackThr: number;
		RollingPotential: number;
		UseArmIK: boolean;
		ReachDistanceFromHitPoint: number;
		MinReachDistanceFromHitPoint: number;
		AngleTotallyBack: number;
		constructor(ped: GTA.Ped);
	}

	enum FallType {
		RampDownStiffness = 0,
		DontChangeStep = 1,
		ForceBalance = 2,
		Slump = 3
	}

	class FireWeaponHelper {
		FiredWeaponStrength: number;
		GunHandEnum: GTA.NaturalMotion.Hand;
		ApplyFireGunForceAtClavicle: boolean;
		InhibitTime: number;
		Direction: GTA.Math.Vector3;
		Split: number;
		constructor(ped: GTA.Ped);
	}

	class ForceLeanInDirectionHelper {
		LeanAmount: number;
		Dir: GTA.Math.Vector3;
		BodyPart: number;
		constructor(ped: GTA.Ped);
	}

	class ForceLeanRandomHelper {
		LeanAmountMin: number;
		LeanAmountMax: number;
		ChangeTimeMin: number;
		ChangeTimeMax: number;
		BodyPart: number;
		constructor(ped: GTA.Ped);
	}

	class ForceLeanToPositionHelper {
		LeanAmount: number;
		Pos: GTA.Math.Vector3;
		BodyPart: number;
		constructor(ped: GTA.Ped);
	}

	class ForceLeanTowardsObjectHelper {
		LeanAmount: number;
		Offset: GTA.Math.Vector3;
		InstanceIndex: number;
		BoundIndex: number;
		BodyPart: number;
		constructor(ped: GTA.Ped);
	}

	class ForceToBodyPartHelper {
		PartIndex: number;
		Force: GTA.Math.Vector3;
		ForceDefinedInPartSpace: boolean;
		constructor(ped: GTA.Ped);
	}

	class GrabHelper {
		UseLeft: boolean;
		UseRight: boolean;
		DropWeaponIfNecessary: boolean;
		DropWeaponDistance: number;
		GrabStrength: number;
		StickyHands: number;
		TurnToTarget: GTA.NaturalMotion.TurnType;
		GrabHoldMaxTimer: number;
		PullUpTime: number;
		PullUpStrengthRight: number;
		PullUpStrengthLeft: number;
		Pos1: GTA.Math.Vector3;
		Pos2: GTA.Math.Vector3;
		Pos3: GTA.Math.Vector3;
		Pos4: GTA.Math.Vector3;
		NormalR: GTA.Math.Vector3;
		NormalL: GTA.Math.Vector3;
		NormalR2: GTA.Math.Vector3;
		NormalL2: GTA.Math.Vector3;
		HandsCollide: boolean;
		JustBrace: boolean;
		UseLineGrab: boolean;
		PointsX4grab: boolean;
		FromEA: boolean;
		SurfaceGrab: boolean;
		InstanceIndex: number;
		InstancePartIndex: number;
		DontLetGo: boolean;
		BodyStiffness: number;
		ReachAngle: number;
		OneSideReachAngle: number;
		GrabDistance: number;
		Move2Radius: number;
		ArmStiffness: number;
		MaxReachDistance: number;
		OrientationConstraintScale: number;
		MaxWristAngle: number;
		UseHeadLookToTarget: boolean;
		LookAtGrab: boolean;
		TargetForHeadLook: GTA.Math.Vector3;
		constructor(ped: GTA.Ped);
	}

	enum Hand {
		Left = 0,
		Right = 1
	}

	class HeadLookHelper {
		Damping: number;
		Stiffness: number;
		InstanceIndex: number;
		Vel: GTA.Math.Vector3;
		Pos: GTA.Math.Vector3;
		AlwaysLook: boolean;
		EyesHorizontal: boolean;
		AlwaysEyesHorizontal: boolean;
		KeepHeadAwayFromGround: boolean;
		TwistSpine: boolean;
		constructor(ped: GTA.Ped);
	}

	class HighFallHelper {
		BodyStiffness: number;
		Bodydamping: number;
		Catchfalltime: number;
		CrashOrLandCutOff: number;
		PdStrength: number;
		PdDamping: number;
		ArmAngSpeed: number;
		ArmAmplitude: number;
		ArmPhase: number;
		ArmBendElbows: boolean;
		LegRadius: number;
		LegAngSpeed: number;
		LegAsymmetry: number;
		Arms2LegsPhase: number;
		Arms2LegsSync: GTA.NaturalMotion.Synchroisation;
		ArmsUp: number;
		OrientateBodyToFallDirection: boolean;
		OrientateTwist: boolean;
		OrientateMax: number;
		AlanRickman: boolean;
		FowardRoll: boolean;
		UseZeroPose_withFowardRoll: boolean;
		AimAngleBase: number;
		FowardVelRotation: number;
		FootVelCompScale: number;
		SideD: number;
		FowardOffsetOfLegIK: number;
		LegL: number;
		CatchFallCutOff: number;
		LegStrength: number;
		Balance: boolean;
		IgnorWorldCollisions: boolean;
		AdaptiveCircling: boolean;
		Hula: boolean;
		MaxSpeedForRecoverableFall: number;
		MinSpeedForBrace: number;
		LandingNormal: number;
		constructor(ped: GTA.Ped);
	}

	class HipsLeanInDirectionHelper {
		LeanAmount: number;
		Dir: GTA.Math.Vector3;
		constructor(ped: GTA.Ped);
	}

	class HipsLeanRandomHelper {
		LeanAmountMin: number;
		LeanAmountMax: number;
		ChangeTimeMin: number;
		ChangeTimeMax: number;
		constructor(ped: GTA.Ped);
	}

	class HipsLeanToPositionHelper {
		LeanAmount: number;
		Pos: GTA.Math.Vector3;
		constructor(ped: GTA.Ped);
	}

	class HipsLeanTowardsObjectHelper {
		LeanAmount: number;
		Offset: GTA.Math.Vector3;
		InstanceIndex: number;
		BoundIndex: number;
		constructor(ped: GTA.Ped);
	}

	class IncomingTransformsHelper {
		constructor(ped: GTA.Ped);
	}

	class InjuredOnGroundHelper {
		NumInjuries: number;
		Injury1Component: number;
		Injury2Component: number;
		Injury1LocalPosition: GTA.Math.Vector3;
		Injury2LocalPosition: GTA.Math.Vector3;
		Injury1LocalNormal: GTA.Math.Vector3;
		Injury2LocalNormal: GTA.Math.Vector3;
		AttackerPos: GTA.Math.Vector3;
		DontReachWithLeft: boolean;
		DontReachWithRight: boolean;
		StrongRollForce: boolean;
		constructor(ped: GTA.Ped);
	}

	class LeanInDirectionHelper {
		LeanAmount: number;
		Dir: GTA.Math.Vector3;
		constructor(ped: GTA.Ped);
	}

	class LeanRandomHelper {
		LeanAmountMin: number;
		LeanAmountMax: number;
		ChangeTimeMin: number;
		ChangeTimeMax: number;
		constructor(ped: GTA.Ped);
	}

	class LeanToPositionHelper {
		LeanAmount: number;
		Pos: GTA.Math.Vector3;
		constructor(ped: GTA.Ped);
	}

	class LeanTowardsObjectHelper {
		LeanAmount: number;
		Offset: GTA.Math.Vector3;
		InstanceIndex: number;
		BoundIndex: number;
		constructor(ped: GTA.Ped);
	}

	enum MirrorMode {
		Independant = 0,
		Mirrored = 1,
		Parallel = 2
	}

	class OnFireHelper {
		StaggerTime: number;
		StaggerLeanRate: number;
		StumbleMaxLeanBack: number;
		StumbleMaxLeanForward: number;
		ArmsWindmillWritheBlend: number;
		SpineStumbleWritheBlend: number;
		LegsStumbleWritheBlend: number;
		ArmsPoseWritheBlend: number;
		SpinePoseWritheBlend: number;
		LegsPoseWritheBlend: number;
		RollOverFlag: boolean;
		RollTorqueScale: number;
		PredictTime: number;
		MaxRollOverTime: number;
		RollOverRadius: number;
		constructor(ped: GTA.Ped);
	}

	class PedalLegsHelper {
		PedalLeftLeg: boolean;
		PedalRightLeg: boolean;
		BackPedal: boolean;
		Radius: number;
		AngularSpeed: number;
		LegStiffness: number;
		PedalOffset: number;
		RandomSeed: number;
		SpeedAsymmetry: number;
		AdaptivePedal4Dragging: boolean;
		AngSpeedMultiplier4Dragging: number;
		RadiusVariance: number;
		LegAngleVariance: number;
		CentreSideways: number;
		CentreForwards: number;
		CentreUp: number;
		Ellipse: number;
		DragReduction: number;
		Spread: number;
		Hula: boolean;
		constructor(ped: GTA.Ped);
	}

	class PointArmHelper {
		TargetLeft: GTA.Math.Vector3;
		TwistLeft: number;
		ArmStraightnessLeft: number;
		UseLeftArm: boolean;
		ArmStiffnessLeft: number;
		ArmDampingLeft: number;
		InstanceIndexLeft: number;
		PointSwingLimitLeft: number;
		UseZeroPoseWhenNotPointingLeft: boolean;
		TargetRight: GTA.Math.Vector3;
		TwistRight: number;
		ArmStraightnessRight: number;
		UseRightArm: boolean;
		ArmStiffnessRight: number;
		ArmDampingRight: number;
		InstanceIndexRight: number;
		PointSwingLimitRight: number;
		UseZeroPoseWhenNotPointingRight: boolean;
		constructor(ped: GTA.Ped);
	}

	class PointGunExtraHelper {
		ConstraintStrength: number;
		ConstraintThresh: number;
		WeaponMask: number;
		TimeWarpActive: boolean;
		TimeWarpStrengthScale: number;
		OriStiff: number;
		OriDamp: number;
		PosStiff: number;
		PosDamp: number;
		constructor(ped: GTA.Ped);
	}

	class PointGunHelper {
		EnableRight: boolean;
		EnableLeft: boolean;
		LeftHandTarget: GTA.Math.Vector3;
		LeftHandTargetIndex: number;
		RightHandTarget: GTA.Math.Vector3;
		RightHandTargetIndex: number;
		LeadTarget: number;
		ArmStiffness: number;
		ArmStiffnessDetSupport: number;
		ArmDamping: number;
		GravityOpposition: number;
		GravOppDetachedSupport: number;
		MassMultDetachedSupport: number;
		AllowShotLooseness: boolean;
		ClavicleBlend: number;
		ElbowAttitude: number;
		SupportConstraint: number;
		ConstraintMinDistance: number;
		MakeConstraintDistance: number;
		ReduceConstraintLengthVel: number;
		BreakingStrength: number;
		BrokenSupportTime: number;
		BrokenToSideProb: number;
		ConnectAfter: number;
		ConnectFor: number;
		OneHandedPointing: number;
		AlwaysSupport: boolean;
		PoseUnusedGunArm: boolean;
		PoseUnusedSupportArm: boolean;
		PoseUnusedOtherArm: boolean;
		MaxAngleAcross: number;
		MaxAngleAway: number;
		FallingLimits: number;
		AcrossLimit: number;
		AwayLimit: number;
		UpLimit: number;
		DownLimit: number;
		RifleFall: number;
		FallingSupport: number;
		FallingTypeSupport: number;
		PistolNeutralType: number;
		NeutralPoint4Pistols: boolean;
		NeutralPoint4Rifle: boolean;
		CheckNeutralPoint: boolean;
		Point2Side: GTA.Math.Vector3;
		Add2WeaponDistSide: number;
		Point2Connect: GTA.Math.Vector3;
		Add2WeaponDistConnect: number;
		UsePistolIK: boolean;
		UseSpineTwist: boolean;
		UseTurnToTarget: boolean;
		UseHeadLook: boolean;
		ErrorThreshold: number;
		FireWeaponRelaxTime: number;
		FireWeaponRelaxAmount: number;
		FireWeaponRelaxDistance: number;
		UseIncomingTransforms: boolean;
		MeasureParentOffset: boolean;
		LeftHandParentOffset: GTA.Math.Vector3;
		LeftHandParentEffector: number;
		RightHandParentOffset: GTA.Math.Vector3;
		RightHandParentEffector: number;
		PrimaryHandWeaponDistance: number;
		ConstrainRifle: boolean;
		RifleConstraintMinDistance: number;
		DisableArmCollisions: boolean;
		DisableRifleCollisions: boolean;
		constructor(ped: GTA.Ped);
	}

	enum RbTwistAxis {
		WorldUp = 0,
		CharacterComUp = 1
	}

	class RegisterWeaponHelper {
		Hand: GTA.NaturalMotion.Hand;
		LevelIndex: number;
		ConstraintHandle: number;
		GunToHandA: GTA.Math.Vector3;
		GunToHandB: GTA.Math.Vector3;
		GunToHandC: GTA.Math.Vector3;
		GunToHandD: GTA.Math.Vector3;
		GunToMuzzleInGun: GTA.Math.Vector3;
		GunToButtInGun: GTA.Math.Vector3;
		constructor(ped: GTA.Ped);
	}

	class RollDownStairsHelper {
		Stiffness: number;
		Damping: number;
		Forcemag: number;
		M_useArmToSlowDown: number;
		UseZeroPose: boolean;
		SpinWhenInAir: boolean;
		M_armReachAmount: number;
		M_legPush: number;
		TryToAvoidHeadButtingGround: boolean;
		ArmReachLength: number;
		CustomRollDir: GTA.Math.Vector3;
		UseCustomRollDir: boolean;
		StiffnessDecayTarget: number;
		StiffnessDecayTime: number;
		AsymmetricalLegs: number;
		ZAxisSpinReduction: number;
		TargetLinearVelocityDecayTime: number;
		TargetLinearVelocity: number;
		OnlyApplyHelperForces: boolean;
		UseVelocityOfObjectBelow: boolean;
		UseRelativeVelocity: boolean;
		ApplyFoetalToLegs: boolean;
		MovementLegsInFoetalPosition: number;
		MaxAngVelAroundFrontwardAxis: number;
		MinAngVel: number;
		ApplyNewRollingCheatingTorques: boolean;
		MaxAngVel: number;
		MagOfTorqueToRoll: number;
		ApplyHelPerTorqueToAlign: boolean;
		DelayToAlignBody: number;
		MagOfTorqueToAlign: number;
		AirborneReduction: number;
		ApplyMinMaxFriction: boolean;
		LimitSpinReduction: boolean;
		constructor(ped: GTA.Ped);
	}

	class SetCharacterCollisionsHelper {
		Spin: number;
		MaxVelocity: number;
		ApplyToAll: boolean;
		ApplyToSpine: boolean;
		ApplyToThighs: boolean;
		ApplyToClavicles: boolean;
		ApplyToUpperArms: boolean;
		FootSlip: boolean;
		VehicleClass: number;
		constructor(ped: GTA.Ped);
	}

	class SetCharacterDampingHelper {
		SomersaultThresh: number;
		SomersaultDamp: number;
		CartwheelThresh: number;
		CartwheelDamp: number;
		VehicleCollisionTime: number;
		V2: boolean;
		constructor(ped: GTA.Ped);
	}

	class SetCharacterHealthHelper {
		CharacterHealth: number;
		constructor(ped: GTA.Ped);
	}

	class SetCharacterStrengthHelper {
		CharacterStrength: number;
		constructor(ped: GTA.Ped);
	}

	class SetCharacterUnderwaterHelper {
		Underwater: boolean;
		Viscosity: number;
		GravityFactor: number;
		Stroke: number;
		LinearStroke: boolean;
		constructor(ped: GTA.Ped);
	}

	class SetFallingReactionHelper {
		HandsAndKnees: boolean;
		CallRDS: boolean;
		ComVelRDSThresh: number;
		ResistRolling: boolean;
		ArmReduceSpeed: number;
		ReachLengthMultiplier: number;
		InhibitRollingTime: number;
		ChangeFrictionTime: number;
		GroundFriction: number;
		FrictionMin: number;
		FrictionMax: number;
		StopOnSlopes: boolean;
		StopManual: number;
		StoppedStrengthDecay: number;
		SpineLean1Offset: number;
		RiflePose: boolean;
		HkHeadAvoid: boolean;
		AntiPropClav: boolean;
		AntiPropWeak: boolean;
		HeadAsWeakAsArms: boolean;
		SuccessStrength: number;
		constructor(ped: GTA.Ped);
	}

	class SetFrictionScaleHelper {
		Scale: number;
		GlobalMin: number;
		GlobalMax: number;
		Mask: string;
		constructor(ped: GTA.Ped);
	}

	class SetMuscleStiffnessHelper {
		MuscleStiffness: number;
		Mask: string;
		constructor(ped: GTA.Ped);
	}

	class SetStiffnessHelper {
		BodyStiffness: number;
		Damping: number;
		Mask: string;
		constructor(ped: GTA.Ped);
	}

	class SetWeaponModeHelper {
		WeaponMode: GTA.NaturalMotion.WeaponMode;
		constructor(ped: GTA.Ped);
	}

	class ShotConfigureArmsHelper {
		Brace: boolean;
		PointGun: boolean;
		UseArmsWindmill: boolean;
		ReleaseWound: number;
		ReachFalling: number;
		ReachFallingWithOneHand: number;
		ReachOnFloor: number;
		AlwaysReachTime: number;
		AWSpeedMult: number;
		AWRadiusMult: number;
		AWStiffnessAdd: number;
		ReachWithOneHand: number;
		AllowLeftPistolRFW: boolean;
		AllowRightPistolRFW: boolean;
		RfwWithPistol: boolean;
		Fling2: boolean;
		Fling2Left: boolean;
		Fling2Right: boolean;
		Fling2OverrideStagger: boolean;
		Fling2TimeBefore: number;
		Fling2Time: number;
		Fling2MStiffL: number;
		Fling2MStiffR: number;
		Fling2RelaxTimeL: number;
		Fling2RelaxTimeR: number;
		Fling2AngleMinL: number;
		Fling2AngleMaxL: number;
		Fling2AngleMinR: number;
		Fling2AngleMaxR: number;
		Fling2LengthMinL: number;
		Fling2LengthMaxL: number;
		Fling2LengthMinR: number;
		Fling2LengthMaxR: number;
		Bust: boolean;
		BustElbowLift: number;
		CupSize: number;
		CupBust: boolean;
		constructor(ped: GTA.Ped);
	}

	class ShotFallToKneesHelper {
		FallToKnees: boolean;
		FtkAlwaysChangeFall: boolean;
		FtkBalanceTime: number;
		FtkHelperForce: number;
		FtkHelperForceOnSpine: boolean;
		FtkLeanHelp: number;
		FtkSpineBend: number;
		FtkStiffSpine: boolean;
		FtkImpactLooseness: number;
		FtkImpactLoosenessTime: number;
		FtkBendRate: number;
		FtkHipBlend: number;
		FtkLungeProb: number;
		FtkKneeSpin: boolean;
		FtkFricMult: number;
		FtkHipAngleFall: number;
		FtkPitchForwards: number;
		FtkPitchBackwards: number;
		FtkFallBelowStab: number;
		FtkBalanceAbortThreshold: number;
		FtkOnKneesArmType: number;
		FtkReleaseReachForWound: number;
		FtkReachForWound: boolean;
		FtkReleasePointGun: boolean;
		FtkFailMustCollide: boolean;
		constructor(ped: GTA.Ped);
	}

	class ShotFromBehindHelper {
		ShotFromBehind: boolean;
		SfbSpineAmount: number;
		SfbNeckAmount: number;
		SfbHipAmount: number;
		SfbKneeAmount: number;
		SfbPeriod: number;
		SfbForceBalancePeriod: number;
		SfbArmsOnset: number;
		SfbKneesOnset: number;
		SfbNoiseGain: number;
		SfbIgnoreFail: number;
		constructor(ped: GTA.Ped);
	}

	class ShotHeadLookHelper {
		UseHeadLook: boolean;
		HeadLook: GTA.Math.Vector3;
		HeadLookAtWoundMinTimer: number;
		HeadLookAtWoundMaxTimer: number;
		HeadLookAtHeadPosMaxTimer: number;
		HeadLookAtHeadPosMinTimer: number;
		constructor(ped: GTA.Ped);
	}

	class ShotHelper {
		BodyStiffness: number;
		SpineDamping: number;
		ArmStiffness: number;
		InitialNeckStiffness: number;
		InitialNeckDamping: number;
		NeckStiffness: number;
		NeckDamping: number;
		KMultOnLoose: number;
		KMult4Legs: number;
		LoosenessAmount: number;
		Looseness4Fall: number;
		Looseness4Stagger: number;
		MinArmsLooseness: number;
		MinLegsLooseness: number;
		GrabHoldTime: number;
		SpineBlendExagCPain: boolean;
		SpineBlendZero: number;
		BulletProofVest: boolean;
		AlwaysResetLooseness: boolean;
		AlwaysResetNeckLooseness: boolean;
		AngVelScale: number;
		AngVelScaleMask: string;
		FlingWidth: number;
		FlingTime: number;
		TimeBeforeReachForWound: number;
		ExagDuration: number;
		ExagMag: number;
		ExagTwistMag: number;
		ExagSmooth2Zero: number;
		ExagZeroTime: number;
		CpainSmooth2Time: number;
		CpainDuration: number;
		CpainMag: number;
		CpainTwistMag: number;
		CpainSmooth2Zero: number;
		Crouching: boolean;
		ChickenArms: boolean;
		ReachForWound: boolean;
		Fling: boolean;
		AllowInjuredArm: boolean;
		AllowInjuredLeg: boolean;
		AllowInjuredLowerLegReach: boolean;
		AllowInjuredThighReach: boolean;
		StableHandsAndNeck: boolean;
		Melee: boolean;
		FallingReaction: number;
		UseExtendedCatchFall: boolean;
		InitialWeaknessZeroDuration: number;
		InitialWeaknessRampDuration: number;
		InitialNeckDuration: number;
		InitialNeckRampDuration: number;
		UseCStrModulation: boolean;
		CStrUpperMin: number;
		CStrUpperMax: number;
		CStrLowerMin: number;
		CStrLowerMax: number;
		DeathTime: number;
		constructor(ped: GTA.Ped);
	}

	class ShotInGutsHelper {
		ShotInGuts: boolean;
		SigSpineAmount: number;
		SigNeckAmount: number;
		SigHipAmount: number;
		SigKneeAmount: number;
		SigPeriod: number;
		SigForceBalancePeriod: number;
		SigKneesOnset: number;
		constructor(ped: GTA.Ped);
	}

	class ShotNewBulletHelper {
		BodyPart: number;
		LocalHitPointInfo: boolean;
		Normal: GTA.Math.Vector3;
		HitPoint: GTA.Math.Vector3;
		BulletVel: GTA.Math.Vector3;
		constructor(ped: GTA.Ped);
	}

	class ShotRelaxHelper {
		RelaxPeriodUpper: number;
		RelaxPeriodLower: number;
		constructor(ped: GTA.Ped);
	}

	class ShotShockSpinHelper {
		AddShockSpin: boolean;
		RandomizeShockSpinDirection: boolean;
		AlwaysAddShockSpin: boolean;
		ShockSpinMin: number;
		ShockSpinMax: number;
		ShockSpinLiftForceMult: number;
		ShockSpinDecayMult: number;
		ShockSpinScalePerComponent: number;
		ShockSpinMaxTwistVel: number;
		ShockSpinScaleByLeverArm: boolean;
		ShockSpinAirMult: number;
		ShockSpin1FootMult: number;
		ShockSpinFootGripMult: number;
		BracedSideSpinMult: number;
		constructor(ped: GTA.Ped);
	}

	class ShotSnapHelper {
		Snap: boolean;
		SnapMag: number;
		SnapMovingMult: number;
		SnapBalancingMult: number;
		SnapAirborneMult: number;
		SnapMovingThresh: number;
		SnapDirectionRandomness: number;
		SnapLeftArm: boolean;
		SnapRightArm: boolean;
		SnapLeftLeg: boolean;
		SnapRightLeg: boolean;
		SnapSpine: boolean;
		SnapNeck: boolean;
		SnapPhasedLegs: boolean;
		SnapHipType: number;
		SnapUseBulletDir: boolean;
		SnapHitPart: boolean;
		UnSnapInterval: number;
		UnSnapRatio: number;
		SnapUseTorques: boolean;
		constructor(ped: GTA.Ped);
	}

	class SmartFallHelper {
		BodyStiffness: number;
		Bodydamping: number;
		Catchfalltime: number;
		CrashOrLandCutOff: number;
		PdStrength: number;
		PdDamping: number;
		ArmAngSpeed: number;
		ArmAmplitude: number;
		ArmPhase: number;
		ArmBendElbows: boolean;
		LegRadius: number;
		LegAngSpeed: number;
		LegAsymmetry: number;
		Arms2LegsPhase: number;
		Arms2LegsSync: GTA.NaturalMotion.Synchroisation;
		ArmsUp: number;
		OrientateBodyToFallDirection: boolean;
		OrientateTwist: boolean;
		OrientateMax: number;
		AlanRickman: boolean;
		FowardRoll: boolean;
		UseZeroPose_withFowardRoll: boolean;
		AimAngleBase: number;
		FowardVelRotation: number;
		FootVelCompScale: number;
		SideD: number;
		FowardOffsetOfLegIK: number;
		LegL: number;
		CatchFallCutOff: number;
		LegStrength: number;
		Balance: boolean;
		IgnorWorldCollisions: boolean;
		AdaptiveCircling: boolean;
		Hula: boolean;
		MaxSpeedForRecoverableFall: number;
		MinSpeedForBrace: number;
		LandingNormal: number;
		RdsForceMag: number;
		RdsTargetLinVeDecayTime: number;
		RdsTargetLinearVelocity: number;
		RdsUseStartingFriction: boolean;
		RdsStartingFriction: number;
		RdsStartingFrictionMin: number;
		RdsForceVelThreshold: number;
		InitialState: number;
		ChangeExtremityFriction: boolean;
		Teeter: boolean;
		TeeterOffset: number;
		StopRollingTime: number;
		ReboundScale: number;
		ReboundMask: string;
		ForceHeadAvoid: boolean;
		CfZAxisSpinReduction: number;
		SplatWhenStopped: number;
		BlendHeadWhenStopped: number;
		SpreadLegs: number;
		constructor(ped: GTA.Ped);
	}

	class StaggerFallHelper {
		ArmStiffness: number;
		ArmDamping: number;
		SpineDamping: number;
		SpineStiffness: number;
		ArmStiffnessStart: number;
		ArmDampingStart: number;
		SpineDampingStart: number;
		SpineStiffnessStart: number;
		TimeAtStartValues: number;
		RampTimeFromStartValues: number;
		StaggerStepProb: number;
		StepsTillStartEnd: number;
		TimeStartEnd: number;
		RampTimeToEndValues: number;
		LowerBodyStiffness: number;
		LowerBodyStiffnessEnd: number;
		PredictionTime: number;
		PerStepReduction1: number;
		LeanInDirRate: number;
		LeanInDirMaxF: number;
		LeanInDirMaxB: number;
		LeanHipsMaxF: number;
		LeanHipsMaxB: number;
		Lean2multF: number;
		Lean2multB: number;
		PushOffDist: number;
		MaxPushoffVel: number;
		HipBendMult: number;
		AlwaysBendForwards: boolean;
		SpineBendMult: number;
		UseHeadLook: boolean;
		HeadLookPos: GTA.Math.Vector3;
		HeadLookInstanceIndex: number;
		HeadLookAtVelProb: number;
		TurnOffProb: number;
		Turn2TargetProb: number;
		Turn2VelProb: number;
		TurnAwayProb: number;
		TurnLeftProb: number;
		TurnRightProb: number;
		UseBodyTurn: boolean;
		UpperBodyReaction: boolean;
		constructor(ped: GTA.Ped);
	}

	class StayUprightHelper {
		UseForces: boolean;
		UseTorques: boolean;
		LastStandMode: boolean;
		LastStandSinkRate: number;
		LastStandHorizDamping: number;
		LastStandMaxTime: number;
		TurnTowardsBullets: boolean;
		VelocityBased: boolean;
		TorqueOnlyInAir: boolean;
		ForceStrength: number;
		ForceDamping: number;
		ForceFeetMult: number;
		ForceSpine3Share: number;
		ForceLeanReduction: number;
		ForceInAirShare: number;
		ForceMin: number;
		ForceMax: number;
		ForceSaturationVel: number;
		ForceThresholdVel: number;
		TorqueStrength: number;
		TorqueDamping: number;
		TorqueSaturationVel: number;
		TorqueThresholdVel: number;
		SupportPosition: number;
		NoSupportForceMult: number;
		StepUpHelp: number;
		StayUpAcc: number;
		StayUpAccMax: number;
		constructor(ped: GTA.Ped);
	}

	class StopAllBehavioursHelper {
		constructor(ped: GTA.Ped);
	}

	enum Synchroisation {
		NotSynced = 0,
		AlwaysSynced = 1,
		SyncedAtStart = 2
	}

	class TeeterHelper {
		EdgeLeft: GTA.Math.Vector3;
		EdgeRight: GTA.Math.Vector3;
		UseExclusionZone: boolean;
		UseHeadLook: boolean;
		CallHighFall: boolean;
		LeanAway: boolean;
		PreTeeterTime: number;
		LeanAwayTime: number;
		LeanAwayScale: number;
		TeeterTime: number;
		constructor(ped: GTA.Ped);
	}

	enum TorqueFilterMode {
		ApplyEveryBullet = 0,
		ApplyIfLastFinished = 1,
		ApplyIfSpinDifferent = 2
	}

	enum TorqueMode {
		Disabled = 0,
		Proportional = 1,
		Additive = 2
	}

	enum TorqueSpinMode {
		FromImpulse = 0,
		Random = 1,
		Flipping = 2
	}

	enum TurnType {
		DontTurn = 0,
		ToTarget = 1,
		AwayFromTarget = 2
	}

	class UpperBodyFlinchHelper {
		HandDistanceLeftRight: number;
		HandDistanceFrontBack: number;
		HandDistanceVertical: number;
		BodyStiffness: number;
		BodyDamping: number;
		BackBendAmount: number;
		UseRightArm: boolean;
		UseLeftArm: boolean;
		NoiseScale: number;
		NewHit: boolean;
		ProtectHeadToggle: boolean;
		DontBraceHead: boolean;
		ApplyStiffness: boolean;
		HeadLookAwayFromTarget: boolean;
		UseHeadLook: boolean;
		TurnTowards: number;
		Pos: GTA.Math.Vector3;
		constructor(ped: GTA.Ped);
	}

	enum WeaponMode {
		None = -1,
		Pistol = 0,
		Dual = 1,
		Rifle = 2,
		SideArm = 3,
		PistolLeft = 4,
		PistolRight = 5
	}

	class YankedHelper {
		ArmStiffness: number;
		ArmDamping: number;
		SpineDamping: number;
		SpineStiffness: number;
		ArmStiffnessStart: number;
		ArmDampingStart: number;
		SpineDampingStart: number;
		SpineStiffnessStart: number;
		TimeAtStartValues: number;
		RampTimeFromStartValues: number;
		StepsTillStartEnd: number;
		TimeStartEnd: number;
		RampTimeToEndValues: number;
		LowerBodyStiffness: number;
		LowerBodyStiffnessEnd: number;
		PerStepReduction: number;
		HipPitchForward: number;
		HipPitchBack: number;
		SpineBend: number;
		FootFriction: number;
		TurnThresholdMin: number;
		TurnThresholdMax: number;
		UseHeadLook: boolean;
		HeadLookPos: GTA.Math.Vector3;
		HeadLookInstanceIndex: number;
		HeadLookAtVelProb: number;
		ComVelRDSThresh: number;
		HulaPeriod: number;
		HipAmplitude: number;
		SpineAmplitude: number;
		MinRelaxPeriod: number;
		MaxRelaxPeriod: number;
		RollHelp: number;
		GroundLegStiffness: number;
		GroundArmStiffness: number;
		GroundSpineStiffness: number;
		GroundLegDamping: number;
		GroundArmDamping: number;
		GroundSpineDamping: number;
		GroundFriction: number;
		constructor(ped: GTA.Ped);
	}

}
