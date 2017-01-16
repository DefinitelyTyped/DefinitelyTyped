import { ICommand } from '../../core';
import { Achievement } from './';
/**
 * @name IAchievementCommandTo
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Give' on IAchievementCommand
 */
export interface IAchievementCommandTo {
    /**
     * @name To
     * @description
     * Registers the given name to the command
     * @param {String} player Adds the given name to the command. Can also be @a or @p
     * @returns {ICommand} The final command, which can be generated.
     */
    To(player: String): ICommand;
}
/**
 * @name AchievementCommandTo
 * @description
 * Builder part of the AchievementCommand.
 * Adds a playername to a command.
 * Is used when calling 'Give' on IAchievementCommand
 */
export declare class AchievementCommandTo implements IAchievementCommandTo {
    private isGiven;
    private achievement;
    /**
     * @description
     * Initializes the Object.
     * @param {Achievement} achievement The achievement to give to a player
     */
    constructor(achievement: Achievement);
    /**
     * @name To
     * @description
     * Registers the playername to the command
     * @param {String} player The player you want to give the achievement.
     * @returns {AchievementCommandCommand} The final command, which can generate it as a string.
     */
    To(player: String): ICommand;
}
