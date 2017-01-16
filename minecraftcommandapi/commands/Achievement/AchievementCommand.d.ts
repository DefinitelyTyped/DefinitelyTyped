import { Achievement, IAchievementCommandTo, IAchievementCommandFrom, AchievementCommandTo, AchievementCommandFrom } from './';
/**
 * @name IAchievementCommand
 * @description
 * Builder part of the AchievementCommand.
 * Gives or takes the given achievement from the user
 */
export interface IAchievementCommand {
    /**
     * @name Give
     * @description
     * Gives the player the given Achievement
     * @param {Achievement} name The achievement the player should get
     */
    Give(name: Achievement): IAchievementCommandTo;
    /**
     * @name Take
     * @description
     * Takes from the player the given Achievement
     * @param {Achievement} name The achievement the player should loose
     */
    Take(name: Achievement): IAchievementCommandFrom;
}
/**
 * @name AchievementCommand
 * @description
 * Builder part of the AchievementCommand.
 * Gives or takes the given achievement from the user
 */
export declare class AchievementCommand {
    /**
     * @name Give
     * @description
     * Gives the player the given Achievement
     * @param {Achievement} name The achievement the player should get
     */
    Give(name: Achievement): AchievementCommandTo;
    /**
     * @name Take
     * @description
     * Takes from the player the given Achievement
     * @param {Achievement} name The achievement the player should loose
     */
    Take(name: Achievement): AchievementCommandFrom;
}
