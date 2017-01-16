import { IEntityTagData, EntityTagData } from '../';
/**
 * @name IMobTagData
 * @description
 * This interface represents the real Tags, which get converted to JSON String, when
 * the command is getting generated.
 */
export interface IMobTagData extends IEntityTagData {
    /**
     * @name AttackTime
     * @description
     * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
     */
    AttackTime: Number;
}
/**
 * @name MobTagData
 * @description
 * This class represents the real Tags, which get converted to JSON String, when
 * the command is getting generated.
 */
export declare class MobTagData extends EntityTagData implements IMobTagData {
    /**
     * @name AttackTime
     * @description
     * Number of ticks the mob's 'invincibility shield' lasts after the mob was last struck. 0 when not recently hit.
     */
    AttackTime: Number;
}
