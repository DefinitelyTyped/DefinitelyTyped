interface ModifierAttackEvent {
    attacker: CDOTA_BaseNPC;
    damage: number;
    damage_type: DAMAGE_TYPES;
    damage_category: DamageCategory_t;
    damage_flags: DOTADamageFlag_t;
    inflictor?: CDOTABaseAbility;
    original_damage: number;
    ranged_attack: boolean;
    target: CDOTA_BaseNPC;
}

interface ModifierEvent {
    new_pos: Vec;
    order_type: DotaUnitOrder_t;
    unit: CDOTA_BaseNPC;
}

interface ModifierAbilityEvent extends ModifierEvent {
    ability: CDOTABaseAbility;
    target?: CDOTA_BaseNPC;
}

/** !NoClassOr */
/** !PureAbstract */
declare abstract class CDOTA_Modifier_Lua extends CDOTA_Buff {
    /**
     * Return a list of modifier functions this modifier implements.
     */
    DeclareFunctions(): modifierfunction[];

    /**
     * Return a map of enabled/disabled states.
     */
    CheckState(): {[state: number]: boolean};

    /**
     * True/false if this modifier is active on illusions.
     */
    AllowIllusionDuplicate(): boolean;
    /**
     * True/false if this buff is removed when the duration expires.
     */
    DestroyOnExpire(): boolean;
    /**
     * Return the types of attributes applied to this modifier (enum value from DOTAModifierAttribute_t
     */
    GetAttributes(): DOTAModifierAttribute_t;
    /**
     * Returns aura stickiness
     */
    GetAuraDuration(): number;
    /**
     * Return true/false if this entity should receive the aura under specific conditions
     */
    GetAuraEntityReject(hEntity: CDOTA_BaseNPC): boolean;
    /**
     * Return the range around the parent this aura tries to apply its buff.
     */
    GetAuraRadius(): number;
    /**
     * Return the unit flags this aura respects when placing buffs.
     */
    GetAuraSearchFlags(): DOTA_UNIT_TARGET_FLAGS;
    /**
     * Return the teams this aura applies its buff to.
     */
    GetAuraSearchTeam(): DOTA_UNIT_TARGET_TEAM;
    /**
     * Return the unit classifications this aura applies its buff to.
     */
    GetAuraSearchType(): DOTA_UNIT_TARGET_TYPE;
    /**
     * Return the attach type of the particle system from GetEffectName.
     */
    GetEffectAttachType(): ParticleAttachment_t;
    /**
     * Return the name of the particle system that is created while this modifier is active.
     */
    GetEffectName(): string;
    /**
     * Return the name of the hero effect particle system that is created while this modifier is active.
     */
    GetHeroEffectName(): string;
    /**
     * The name of the secondary modifier that will be applied by this modifier (if it is an aura).
     */
    GetModifierAura(): string;
    /**
     * Return the priority order this modifier will be applied over others.
     */
    GetPriority(): modifierpriority;
    /**
     * Return the name of the status effect particle system that is created while this modifier is active.
     */
    GetStatusEffectName(): string;
    /**
     * Return the name of the buff icon to be shown for this modifier.
     */
    GetTexture(): string;
    /**
     * Relationship of this hero effect with those from other buffs (higher is more likely to be shown).
     */
    HeroEffectPriority(): modifierpriority;
    /**
     * True/false if this modifier is an aura.
     */
    IsAura(): boolean;
    /**
     * True/false if this aura provides buffs when the parent is dead.
     */
    IsAuraActiveOnDeath(): boolean;
    /**
     * True/false if this modifier should be displayed as a debuff.
     */
    IsDebuff(): boolean;
    /**
     * True/false if this modifier should be displayed on the buff bar.
     */
    IsHidden(): boolean;
    IsPermanent(): boolean;
    /**
     * True/false if this modifier can be purged.
     */
    IsPurgable(): boolean;
    /**
     * True/false if this modifier can be purged by strong dispels.
     */
    IsPurgeException(): boolean;
    /**
     * True/false if this modifier is considered a stun for purge reasons.
     */
    IsStunDebuff(): boolean;
    /**
     * Runs when the modifier is created.
     */
    OnCreated(params: table): void;
    /**
     * Runs when the modifier is destroyed (after unit loses modifier).
     */
    OnDestroy(): void;
    /**
     * Runs when the think interval occurs.
     */
    OnIntervalThink(): void;
    /**
     * Runs when the modifier is refreshed.
     */
    OnRefresh(params: table): void;
    /**
     * Runs when the modifier is destroyed (before unit loses modifier).
     */
    OnRemoved(): void;
    /**
     * Runs when stack count changes (param is old count).
     */
    OnStackCountChanged(iStackCount: number): void;
    /**
     * True/false if this modifier is removed when the parent dies.
     */
    RemoveOnDeath(): boolean;
    /**
     * Apply the overhead offset to the attached effect.
     */
    ShouldUseOverheadOffset(): boolean;
    /**
     * Relationship of this status effect with those from other buffs (higher is more likely to be shown).
     */
    StatusEffectPriority(): modifierpriority;

// ========== Modifier properties =================

    /**
     * Bonus damag (Green numbers)
     */
    GetModifierPreAttack_BonusDamage(): number;
    /**
     *
     */
    GetModifierPreAttack_BonusDamage_Proc(): number;
    /**
     * Bonus damage not factoring in with crit
     */
    GetModifierPreAttack_BonusDamagePostCrit(event: ModifierAttackEvent): number;
    /**
     * Changes base damage
     */
    GetModifierBaseAttack_BonusDamage(): number;
    /**
     * Add bonus physical damage
     */
    GetModifierProcAttack_BonusDamage_Physical(event: ModifierAttackEvent): number;
    /**
     * Add bonus magical damage
     */
    GetModifierProcAttack_BonusDamage_Magical(event: ModifierAttackEvent): number;
    /**
     * Add bonus pure damage
     */
    GetModifierProcAttack_BonusDamage_Pure(event: ModifierAttackEvent): number;

    GetModifierProcAttack_Feedback(event: ModifierAttackEvent): number;
    // Not working
    // GetModifierOverrideAttackDamage(): number;

    GetModifierPreAttack(event: ModifierAttackEvent): number;
    /**
     * Makes the hero transparent( Use a value from 0 to 1)
     */
    GetModifierInvisibilityLevel(): number;
    GetModifierPersistentInvisibility(): number;
    GetModifierMoveSpeedBonus_Constant(): number;
    GetModifierMoveSpeedOverride(): number;
    GetModifierMoveSpeedBonus_Percentage(): number;
    GetModifierMoveSpeedBonus_Percentage_Unique(): number;
    GetModifierMoveSpeedBonus_Percentage_Unique_2(): number;
    GetModifierMoveSpeedBonus_Special_Boots(): number;
    GetModifierMoveSpeedBonus_Special_Boots_2(): number;
    GetModifierMoveSpeed_Absolute(): number;
    GetModifierMoveSpeed_AbsoluteMin(): number;
    GetModifierMoveSpeed_Limit(): number;
    GetModifierMoveSpeed_Max(): number;
    GetModifierAttackSpeedBaseOverride(): number;
    GetModifierFixedAttackRate(): number;
    GetModifierAttackSpeedBonus_Constant(): number;
    GetModifierCooldownReduction_Constant(event: ModifierAbilityEvent): number;
    GetModifierBaseAttackTimeConstant(): number;
    GetModifierAttackPointConstant(): number;
    GetModifierDamageOutgoing_Percentage(event: ModifierAttackEvent): number;
    GetModifierDamageOutgoing_Percentage_Illusion(event: ModifierAttackEvent): number;
    GetModifierTotalDamageOutgoing_Percentage(event: ModifierAttackEvent): number;
    GetModifierSpellAmplify_Percentage(event: ModifierAttackEvent): number;
    // Not working
    GetModifierSpellAmplify_PercentageUnique(): number;
    GetModifierHPRegenAmplify_Percentage(): number;
    GetModifierMPRegenAmplify_Percentage(): number;
    // Not working
    GetModifierMagicDamageOutgoing_Percentage(event: ModifierAttackEvent): number;
    GetModifierBaseDamageOutgoing_Percentage(event: ModifierAttackEvent): number;
    // Not working
    GetModifierBaseDamageOutgoing_PercentageUnique(event: ModifierAttackEvent): number;
    GetModifierIncomingDamage_Percentage(event: ModifierAttackEvent): number;
    GetModifierIncomingPhysicalDamage_Percentage(event: ModifierAttackEvent): number;
    // Not working
    GetModifierIncomingPhysicalDamageConstant(event: ModifierAttackEvent): number;
    GetModifierIncomingSpellDamageConstant(event: ModifierAttackEvent): number;
    GetModifierEvasion_Constant(event: ModifierAttackEvent): number;
    // Not working
    GetModifierNegativeEvasion_Constant(): number;
    // Not working
    GetModifierStatusResistance(): number;
    // Not working
    GetModifierStatusResistanceStacking(): number;
    GetModifierAvoidDamage(event: ModifierAttackEvent): number;
    GetModifierAvoidSpell(event: ModifierAttackEvent): 0|1;
    GetModifierMiss_Percentage(): number;
    GetModifierPhysicalArmorBonus(event: ModifierAttackEvent): number;
    GetModifierPhysicalArmorBonusUnique(event: ModifierAttackEvent): number;
    GetModifierPhysicalArmorBonusUniqueActive(event: ModifierAttackEvent): number;
    // Not working
    GetModifierIgnorePhysicalArmor(event: ModifierAttackEvent): number;
    // Not working
    GetModifierMagicalResistanceDirectModification(event: ModifierAttackEvent): number;
    GetModifierMagicalResistanceBonus(event: ModifierAttackEvent): number;
    GetModifierMagicalResistanceDecrepifyUnique(event: ModifierAttackEvent): number;
    GetModifierBaseRegen(): number;
    GetModifierConstantManaRegen(): number;
    GetModifierConstantManaRegenUnique(): number;
    GetModifierTotalPercentageManaRegen(): number;
    GetModifierConstantHealthRegen(): number;
    GetModifierHealthRegenPercentage(): number;
    // Not working
    GetModifierHealthRegenPercentageUnique(): number;
    GetModifierHealthBonus(): number;
    GetModifierManaBonus(): number;
    GetModifierExtraStrengthBonus(): number;
    GetModifierExtraHealthBonus(): number;
    GetModifierExtraManaBonus(): number;
    GetModifierExtraHealthPercentage(): number;
    GetModifierBonusStats_Strength(): number;
    GetModifierBonusStats_Agility(): number;
    GetModifierBonusStats_Intellect(): number;
    GetModifierCastRangeBonus(event: ModifierAbilityEvent): number;
    // Not working
    GetModifierCastRangeBonusTarget(event: ModifierAbilityEvent): number;
    GetModifierCastRangeBonusStacking(event: ModifierAbilityEvent): number;
    // Not working
    GetModifierAttackRangeOverride(): number;
    GetModifierAttackRangeBonus(): number;
    // Not working
    GetModifierAttackRangeBonusUnique(): number;
    // Not working
    GetModifierMaxAttackRange(): number;
    GetModifierProjectileSpeedBonus(): number;
    GetModifierProjectileName(): string;
    ReincarnateTime(): number;
    GetModifierConstantRespawnTime(): number;
    GetModifierPercentageRespawnTime(): number;
    GetModifierStackingRespawnTime(): number;
    GetModifierPercentageCooldown(event: ModifierAbilityEvent): number;
    GetModifierPercentageCooldownStacking(event: ModifierAbilityEvent): number;
    GetModifierPercentageCasttime(event: ModifierAbilityEvent): number;
    GetModifierPercentageManacost(event: ModifierAbilityEvent): number;
    // Not working
    GetModifierPercentageManacostStacking(): number;
    GetModifierConstantDeathGoldCost(): number;
    GetModifierPercentageExpRateBoost(): number;
    GetModifierPreAttack_CriticalStrike(event: ModifierAttackEvent): number;
    // Not working
    GetModifierPreAttack_Target_CriticalStrike(): number;
    // Not working
    GetModifierMagical_ConstantBlock(event: ModifierAttackEvent): number;
    GetModifierPhysical_ConstantBlock(event: ModifierAttackEvent): number;
    // Not working
    GetModifierPhysical_ConstantBlockSpecial(): number;
    GetModifierPhysical_ConstantBlockUnavoidablePreArmor(event: ModifierAttackEvent): number;
    GetModifierTotal_ConstantBlock(event: ModifierAttackEvent): number;
    GetOverrideAnimation(): GameActivity_t;
    GetOverrideAnimationWeight(): number;
    GetOverrideAnimationRate(): number;
    GetAbsorbSpell(event: ModifierAbilityEvent): 0|1;
    GetReflectSpell(event: ModifierAbilityEvent): 0|1;
    GetDisableAutoAttack(): 0|1;
    GetBonusDayVision(): number;
    GetBonusNightVision(): number;
    // Not working
    GetBonusNightVisionUnique(): number;
    GetBonusVisionPercentage(): number;
    GetFixedDayVision(): number;
    GetFixedNightVision(): number;
    GetMinHealth(): number;
    GetAbsoluteNoDamagePhysical(event: ModifierAttackEvent): 0|1;
    GetAbsoluteNoDamageMagical(event: ModifierAttackEvent): 0|1;
    GetAbsoluteNoDamagePure(event: ModifierAttackEvent): 0|1;
    GetIsIllusion(): 0|1;
    GetModifierIllusionLabel(): 0|1;
    GetModifierSuperIllusion(): 0|1;
    GetModifierSuperIllusionWithUltimate(): 0|1;
    GetModifierTurnRate_Percentage(): number;
    GetDisableHealing(): 0|1;
    // Not working
    GetAlwaysAllowAttack(): 0|1;
    /**
     * 0 deal damage like usual; 1 no damage at all
     */
    GetOverrideAttackMagical(): 0|1;
    // Not working
    GetModifierUnitStatsNeedsRefresh(): 0|1;
    /**
     *  Untested on lane creeps; did not work on beastmaster creeps
     */
    GetModifierBountyCreepMultiplier(): number;
    // Not working
    GetModifierBountyOtherMultiplier(): number;
    /**
     *  Untested
     */
    GetModifierUnitDisllowUpgrading(): 0|1;
    // Not working
    GetModifierDodgeProjectile(): 0|1;
    // Not working
    OnSpellTargetReady(): void;
    OnAttackRecord(event: ModifierAttackEvent): void;
    OnAttackStart(event: ModifierAttackEvent): void;
    OnAttack(event: ModifierAttackEvent): void;
    OnAttackLanded(event: ModifierAttackEvent): void;
    OnAttackFail(event: ModifierAttackEvent): void;
    OnProjectileDodge(event: ModifierAttackEvent): void;
    OnOrder(event: ModifierEvent): void;
    OnUnitMoved(event: ModifierEvent): void;
    OnAbilityStart(event: ModifierAbilityEvent): void;
    OnAbilityExecuted(event: ModifierAbilityEvent): void;
    OnAbilityFullyCast(event: ModifierAbilityEvent): void;
    // Not working
    OnBreakInvisibility(): void;
    OnAbilityEndChannel(event: ModifierAbilityEvent): void;
    OnTakeDamage(event: ModifierAttackEvent): void;
    OnStateChanged(event: ModifierEvent): void;
    OnAttacked(event: ModifierAttackEvent): void;
    OnDeath(event: ModifierAttackEvent): void;
    OnRespawn(event: ModifierEvent): void;
    OnSpentMana(event: ModifierAbilityEvent): void;
    OnTeleporting(event: ModifierEvent): void;
    OnTeleported(event: ModifierEvent): void;
    OnSetLocation(event: ModifierEvent): void;
    OnHealthGained(event: ModifierEvent): void;
    OnManaGained(event: ModifierEvent): void;
    OnTakeDamageKillCredit(event: ModifierAttackEvent): void;
    OnHeroKilled(event: ModifierAttackEvent): void;
    OnHealReceived(event: ModifierEvent): void;
    OnBuildingKilled(event: ModifierAttackEvent): void;
    OnModelChanged(event: ModifierEvent): void;
    // Not working
    OnModifierAdded(): void;
    GetModifierModelChange(): string;
    GetModifierModelScale(): number;
    /**
     *  Always applies scepter when this property is active
     */
    GetModifierScepter(): void;
    GetActivityTranslationModifiers(): string;
    GetAttackSound(): string;
    GetUnitLifetimeFraction(): number;
    GetModifierProvidesFOWVision(): 0|1;
    GetModifierSpellsRequireHP(): number;
    // ??
    GetForceDrawOnMinimap(): 0|1;
    GetModifierDisableTurning(): 0|1;
    // Not working
    GetModifierIgnoreCastAngle(): 0|1;
    // ??
    GetModifierChangeAbilityValue(): void;
    GetModifierAbilityLayout(): number;
    // Not working
    OnDominated(event: ModifierEvent): void;
    OnAttackFinished(event: ModifierAttackEvent): void;
    // Not working
    GetModifierIgnoreCooldown(): 0|1;
    // Not working
    GetModifierCanAttackTrees(): 0|1;
}
