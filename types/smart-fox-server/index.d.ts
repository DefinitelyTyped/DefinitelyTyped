// Type definitions for SmartFoxServer Apis
// Project: http://docs2x.smartfoxserver.com/api-docs/jsdoc/
// Definitions by: Gregory Moore <https://github.com/ChanceM>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

//#region SFX2X

// http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.html
declare namespace SFS2X {
    //#region Entities

    // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.html
    namespace Entities {

        //#region Data

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Data.html
        namespace Data {

            //#region Vec3D

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Data.Vec3D.html
            export class Vec3D {

                /** @type {number} Returns the position along the X axis. */
                px: number;
                /** @type {number} Returns the position along the Y axis. */
                py: number;
                /** @type {number} Returns the position along the Z axis. */
                pz: number;

                /**
                 * Creates a new Vec3D instance.
                 * @param {number} px The position along the X axis.
                 * @param {number} py The position along the Y axis.
                 * @param {number} [pz] The position along the Z axis.
                 */
                constructor(px: number, py: number, pz?: number);
                /**
                 * Indicates whether the position is expressed using floating point values or not.
                 * @return {boolean} Returns: true if the position is expressed using floating point values.
                 */
                isFloat(): boolean;
            }
            //#endregion

        }
        //#endregion
        //#region Invitation

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Invitation.html
        namespace Invitation {

            //#region InvitationReply

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Invitation.InvitationReply.html
            export class InvitationReply {

                /** @type {number} Invitation is accepted. */
                static ACCEPT: number;
                /** @type {number} Invitation is refused. */
                static REFUSE: number;

            }

            //#endregion

            //#region SFSInvitation

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Invitation.SFSInvitation.html
            export class SFSInvitation {

                /** @type {number} Indicates the id of the invitation. */
                id: number;
                /** @type {SFSUser} Returns the SFSUser object corresponding to the user who received the invitation. */
                invitee: SFSUser;
                /** @type {SFSUser} Returns the SFSUser object corresponding to the user who sent the invitation. */
                inviter: SFSUser;
                /** @type {Object} Returns an object containing a custom set of parameters. */
                params: Object;
                /** @type {number} Returns the number of seconds available to the invitee to reply to the invitation, after which the invitation expires. */
                secondsForAnswer: number;

                /**
                 * Creates a new SFSInvitation instance.
                 * @param {SFSUser} inviter          A SFSUser object corresponding to the user who sent the invitation.
                 * @param {SFSUser} invitee          A SFSUser object corresponding to the user who received the invitation.
                 * @param {number}  secondsForAnswer The number of seconds available to the invitee to reply to the invitation.
                 * @param {Object}  params           An object containing a custom set of parameters representing the invitation details.
                 */
                constructor(inviter: SFSUser, invitee: SFSUser, secondsForAnswer: number, params: Object);
            }

            //#endregion

        }
        //#endregion
        //#region Match

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Match.html
        namespace Match {

            //#region BoolMatch

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Match.BoolMatch.html
            export class BoolMatch {

                /** @type {BoolMatch} An instance of BoolMatch representing the following condition: bool1 == bool2. */
                static EQUALS: BoolMatch;
                /** @type {BoolMatch} An instance of BoolMatch representing the following condition: bool1 != bool2. */
                static NOT_EQUALS: BoolMatch;

            }

            //#endregion
            //#region LogicOperator

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Match.LogicOperator.html
            export class LogicOperator {

                /** @type {LogicOperator} An instance of LogicOperator representing the AND logical operator. */
                static AND: LogicOperator;
                /** @type {LogicOperator} An instance of LogicOperator representing the OR logical operator. */
                static OR: LogicOperator;

            }

            //#endregion
            //#region MatchExpression

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Match.MatchExpression.html
            export class MatchExpression {

                /** @type {(RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest)} Returns the matching criteria used during values comparison among those provided by the BoolMatch, NumberMatch and StringMatch classes. */
                condition: RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest;
                /** @type {LogicOperator} In case of concatenated expressions, returns the current logical operator. */
                loginOp: LogicOperator;
                /** @type {MatchExpression} Returns the next matching expression concatenated to the current one, if existing. */
                next: MatchExpression;
                /** @type {any} Returns the value against which the variable or property corresponding to varName is compared. */
                value: any;
                /** @type {string} Returns the name of the variable or property against which the comparison is made. */
                varName: string;

                /**
                 * Creates a new MatchExpression instance.
                 * @param {string}            varName Name of the variable or property to match.
                 * @param {(RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest)} condition A matching condition among those provided by the BoolMatch, NumberMatch and StringMatch classes.
                 * @param {any}               value   The value to compare against the variable or property during the matching.
                 */
                constructor(varName: string, condition: RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest, value: any);
                /**
                 * Concatenates the current expression with a new one using the logical AND operator.
                 * @param  {string}            varName Name of the additional variable or property to match.
                 * @param  {(RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest)} condition The additional matching condition among those provided by the BoolMatch, NumberMatch and StringMatch classes.
                 * @param  {any}               value   The value to compare against the additional variable or property during the matching.
                 * @return {MatchExpression}            A new MatchExpression resulting from the concatenation of the current expression with a new one generated from the specified parameters.
                 */
                and(varName: string, condition: RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest, value: any): MatchExpression;
                /**
                 * Checks if the current matching expression is concatenated to another one through a logical operator.
                 * @return {boolean} Returns: true if the current matching expression is concatenated to another one.

                 */
                hasNext(): boolean;
                /**
                 * Concatenates the current expression with a new one using the logical OR operator.
                 * @param  {string}            varName Name of the additional variable or property to match.
                 * @param  {(RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest)} condition The additional matching condition among those provided by the BoolMatch, NumberMatch and StringMatch classes.
                 * @param  {any}               value   The value to compare against the additional variable or property during the matching.
                 * @return {MatchExpression}           A new MatchExpression resulting from the concatenation of the current expression with a new one generated from the specified parameters.
                 */
                or(varName: string, condition: RoomProperties | UserProperties | BoolMatch | NumberMatch | StringMatch | Requests.Game.CreateSFSGameRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest, value: any): MatchExpression;
                /**
                 * Moves the iterator cursor to the first matching expression in the chain.
                 * @return {MatchExpression} The MatchExpression object at the top of the chain of matching expressions.
                 */
                rewind(): MatchExpression;
                /**
                 * Returns a string representation of the matching expression.
                 * @return {string} The string representation of the MatchExpression object.
                 */
                toString(): string;
            }

            //#endregion
            //#region NumberMatch

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Match.NumberMatch.html
            export class NumberMatch {

                /** @type {NumberMatch} An instance of NumberMatch representing the following condition: number1 == number2. */
                static EQUALS: NumberMatch;
                /** @type {NumberMatch} An instance of NumberMatch representing the following condition: number1 > number2. */
                static GREATER_THAN: NumberMatch;
                /** @type {NumberMatch} An instance of NumberMatch representing the following condition: number1 >= number2. */
                static GREATER_THAN_OR_EQUAL_TO: NumberMatch;
                /** @type {NumberMatch} An instance of NumberMatch representing the following condition: number1 < number2. */
                static LESS_THAN: NumberMatch;
                /** @type {NumberMatch} An instance of NumberMatch representing the following condition: number1 <= number2. */
                static LESS_THAN_OR_EQUAL_TO: NumberMatch;
                /** @type {NumberMatch} An instance of NumberMatch representing the following condition: number1 != number2. */
                static NOT_EQUALS: NumberMatch;

            }

            //#endregion
            //#region RoomProperties

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Match.RoomProperties.html
            export class RoomProperties {

                /** @type {string} The name of the Group to which the Room belongs. */
                static GROUP_ID: string;
                /** @type {string} The Room has at least one free player slot. */
                static HAS_FREE_PLAYER_SLOTS: string;
                /** @type {string} The Room is a Game Room. */
                static IS_GAME: string;
                /** @type {string} The Room is private. */
                static IS_PRIVATE: string;
                /** @type {string} The Room is an SFSGame on the server-side. */
                static IS_TYPE_SFSGAME: string;
                /** @type {string} The maximum number of spectators allowed in the Room (Game Rooms only). */
                static MAX_SPECTATORS: string;
                /** @type {string} The maximum number of users allowed in the Room (players in Game Rooms). */
                static MAX_USERS: string;
                /** @type {string} The Room name. */
                static NAME: string;
                /** @type {string} The Room spectators count (Game Rooms only). */
                static SPECTATOR_COUNT: string;
                /** @type {string} The Room users count (players in Game Rooms). */
                static USER_COUNT: string;

            }

            //#endregion
            //#region StringMatch

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Match.StringMatch.html
            export class StringMatch {

                /** @type {StringMatch} An instance of StringMatch representing the following condition: string1.indexOf(string2) != -1 */
                static CONTAINS: StringMatch;
                /** @type {StringMatch} An instance of StringMatch representing the following condition: string1 ends with characters contained in string2. */
                static ENDS_WITH: StringMatch;
                /** @type {StringMatch} An instance of StringMatch representing the following condition: string1 == string2. */
                static EQUALS: StringMatch;
                /** @type {StringMatch} An instance of StringMatch representing the following condition: string1 != string2. */
                static NOT_EQUALS: StringMatch;
                /** @type {StringMatch} An instance of StringMatch representing the following condition: string1 starts with characters contained in string2. */
                static STARTS_WITH: StringMatch;

            }

            //#endregion
            //#region UserProperties

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Match.UserProperties.html
            export class UserProperties {

                /** @type {string} The user joined at least one Room. */
                static IS_IN_ANY_ROOM: string;
                /** @type {string} The user is a Non-Player Character (NPC). */
                static IS_NPC: string;
                /** @type {string} The user is a player in a Game Room. */
                static IS_PLAYER: string;
                /** @type {string} The user is a spectator in a Game Room. */
                static IS_SPECTATOR: string;
                /** @type {string} The user name. */
                static NAME: string;
                /** @type {string} The user privilege id. */
                static PRIVILEGE_ID: string;

            }

            //#endregion

        }
        //#endregion
        //#region MMOItem

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.MMOItem.html
        export class MMOItem {

            /** @type {Data.Vec3D} Returns the entry point of this item in the current user's AoI. */
            aoiEnteryPoint: Data.Vec3D;
            /** @type {number} Indicates the id of this item. */
            id: number;

            /**
             * Creates a new MMOItem instance.
             * @param {number} id The item id.
             */
            constructor(id: number);
            /**
             * Indicates whether this item has the specified MMOItem Variable set or not.
             * @param  {string}  varName The name of the MMOItem Variable whose existance must be checked.
             * @return {boolean}         Returns: true if an MMOItem Variable with the passed name is set for this item.
             */
            containsVariable(varName: string): boolean;
            /**
             * Retrieves an MMOItem Variable from its name.
             * @param  {string}                    varName The name of the MMOItem Variable to be retrieved.
             * @return {Variables.MMOItemVariable}         The MMOItemVariable object, or null if no MMOItem Variable with the passed name is associated to this item.
             */
            getVariable(varName: string): Variables.MMOItemVariable;
            /**
             * Retrieves all the MMOItem Variables of this item.
             * @return {Variables.MMOItemVariable[]} The list of MMOItemVariable objects associated to this item.
             */
            getVariables(): Variables.MMOItemVariable[];
            /**
             * Returns a string that contains the item id.
             * @return {string} Returns: The string representation of the MMOItem object.
             */
            toString(): string;

        }

        //#endregion
        //#region MMORoom

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.MMORoom.html
        export class MMORoom extends SFSRoom {

            /** @type {Data.Vec3D} Returns the default Area of Interest (AoI) of this MMORoom. */
            defaultAOI: Data.Vec3D;
            /** @type {Requests.MMO.MapLimits} Returns the higher coordinates limit of the virtual environment represented by the MMORoom along the X,Y,Z axes. If null is returned, no limits were set at Room creation time. */
            higherMapLimit: Requests.MMO.MapLimits;
            /** @type {Requests.MMO.MapLimits} Returns the lower coordinates limit of the virtual environment represented by the MMORoom along the X,Y,Z axes. If null is returned, no limits were set at Room creation time. */
            lowerMapLimit: Requests.MMO.MapLimits;

            /**
             * Creates a new MMORoom instance.
             * @param {number} id      The MMORoom id.
             * @param {string} name    The MMORoom name.
             * @param {string} groupId The id of the Group to which the MMORoom belongs.
             */
            constructor(id: number, name: string, groupId?: string);
            /**
             * Retrieves an MMOItem object from its id property. The item is available to the current user if it falls within their Area of Interest only.
             * @param  {number}  id The id of the item to be retrieved.
             * @return {MMOItem}    Returns: An MMOItem object, or null if the item with the passed id is not in proximity of the current user.

             */
            getMMOItem(id: number): MMOItem;
            /**
             * Retrieves all MMOItem object in the MMORoom that fall within the current user's Area of Interest.
             * @return {MMOItem[]} Returns: A list of MMOItem objects, or an empty list if no item is in proximity of the current user.
             */
            getMMOItems(): MMOItem[];
        }

        //#endregion
        //#region SFSBuddy

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.SFSBuddy.html
        export class SFSBuddy {

            /** @type {number} Indicates the id of this buddy. */
            id: number;
            /** @type {string} Indicates the name of this buddy. */
            name: string;

            /**
             * Creates a new SFSBuddy instance.
             * @param {number}  id        The buddy id.
             * @param {string}  name      The buddy name.
             * @param {boolean} [isBlocked=false] If true, the buddy is blocked by the current user.
             * @param {boolean} [isTemp=false]    If true, the buddy is just temporary in the current user's buddy list.
             */
            constructor(id: number, name: string, isBlocked?: boolean, isTemp?: boolean);
            /**
             * Indicates whether this user has the specified Buddy Variable set or not.
             * @param  {string}  varName The name of the Buddy Variable whose existance must be checked.
             * @return {boolean}         Returns: true if a Buddy Variable with the passed name is set for this buddy.
             */
            containsVariable(varName: string): boolean;
            /**
             * Returns the nickname of this buddy. If the nickname is not set, null is returned.
             * @return {string} Returns: The nickname of the buddy.
             */
            getNickName(): string;
            /**
             * Retrieves the list of persistent Buddy Variables for this buddy.
             * @return {Variables.SFSBuddyVariable[]} Returns: An array of SFSBuddyVariable objects.
             */
            getOfflineVariables(): Variables.SFSBuddyVariable[];
            /**
             * Retrieves the list of non-persistent Buddy Variables for this buddy.
             * @return {Variables.SFSBuddyVariable[]} Returns: An array of SFSBuddyVariable objects.
             */
            getOnlineVariables(): Variables.SFSBuddyVariable[];
            /**
             * Returns the custom state of this buddy. Examples of custom states are "Available", "Busy", "Be right back", etc. If the custom state is not set, null is returned.
             * @return {string} Returns: The custom state of the buddy.
             */
            getState(): string;
            /**
             * Retrieves a Buddy Variable from its name.
             * @param  {string}                     varName The name of the Buddy Variable to be retrieved.
             * @return {Variables.SFSBuddyVariable}         Returns: The object representing the Buddy Variable, or null if no Buddy Variable with the passed name is associated to this buddy.
             */
            getVariable(varName: string): Variables.SFSBuddyVariable;
            /**
             * Retrieves all the Buddy Variables of this user.
             * @return {Variables.SFSBuddyVariable[]} Returns: The list of SFSBuddyVariable objects associated to the buddy.
             */
            getVariables(): Variables.SFSBuddyVariable[];
            /**
             * Indicates whether this buddy is blocked in the current user's buddy list or not. A buddy can be blocked by means of a BlockBuddyRequest request.
             * @return {boolean} Returns: true if the buddy is blocked.
             */
            isBlocked(): boolean;
            /**
             * Indicates whether this buddy is online in the Buddy List system or not.
             * @return {boolean} Returns: true if the buddy is online.
             */
            isOnline(): boolean;
            /**
             * Indicates whether this buddy is temporary (non-persistent) in the current user's buddy list or not.
             * @return {boolean} Returns: true if the buddy is temporary.
             */
            isTemp(): boolean;
            /**
             * Returns a string that contains the buddy id and name.
             * @return {string} Returns: The string representation of the SFSBuddy object.
             */
            toString(): string;

        }

        //#endregion
        //#region SFSRoom

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.SFSRoom.html
        export class SFSRoom {

            /** @type {string} Returns the Room Group name. */
            groupId: string;
            /** @type {number} Indicates the id of this Room. */
            id: number;
            /** @type {boolean} Indicates whether this is a Game Room or not. */
            isGame: boolean;
            /** @type {boolean} Indicates whether this Room is hidden or not. */
            isHidden: boolean;
            /** @type {boolean} Indicates whether the client joined this Room or not. */
            isJoined: boolean;
            /** @type {boolean} Indicates whether this Room requires a password to be joined or not. */
            isPasswordProtected: boolean;
            /** @type {number} Returns the maximum number of spectators allowed in this Room (Game Rooms only). */
            maxSpectators: number;
            /** @type {number} Returns the maximum number of users allowed in this Room. */
            maxUsers: number;
            /** @type {string} Indicates the name of this Room. */
            name: string;
            /** @type {Object} Defines a generic utility object that can be used to store custom Room data. */
            properties: Object;

            /**
             * Creates a new SFSRoom instance.
             * @param {number} id      The Room id.
             * @param {string} name    The Room name.
             * @param {string} [groupId="default"] The id of the Group to which the Room belongs.
             */
            constructor(id: number, name: string, groupId?: string);
            /**
             * Indicates whether the specified user is currently inside this Room or not.
             * @param  {SFSUser} user The SFSUser object representing the user whose presence in this Room must be checked.
             * @return {boolean}      Returns: true if the user is inside this Room; false otherwise.
             */
            containsUser(user: SFSUser): boolean;
            /**
             * Indicates whether this Room has the specified Room Variable set or not.
             * @param  {string}  varName The name of the Room Variable whose existance in this Room must be checked.
             * @return {boolean}         Returns: true if a Room Variable with the passed name exists in this Room.
             */
            containsVariable(varName: string): boolean;
            /**
             * Returns the maximum amount of users, including spectators, that can be contained in this Room.
             * @return {number} Returns: Maximum number of users that can enter the Room.
             */
            getCapacity(): number;
            /**
             * Retrieves the list of SFSUser objects representing the players currently inside this Room (Game Rooms only).
             * @return {SFSUser[]} Returns: The list of SFSUser objects representing the users who joined the Room as players.
             */
            getPlayerList(): SFSUser[];
            /**
             * Retrieves a reference to the Room Manager which manages this Room.
             * @return {Managers.RoomManager} Returns: The Room Manager to which this Room is associated.
             */
            getRoomManager(): Managers.RoomManager;
            /**
             * Returns the current number of spectators in this Room (Game Rooms only).
             * @return {number} Returns: Current number of spectators in the Room.
             */
            getSpectatorCount(): number;
            /**
             * Retrieves the list of SFSUser objects representing the spectators currently inside this Room (Game Rooms only).
             * @return {SFSUser[]} Returns: The list of SFSUser objects representing the users who joined the Room as spectators.
             */
            getSpectatorList(): SFSUser[];
            /**
             * Retrieves a SFSUser object from its id property.
             * @param  {number}  id The id of the user to be found.
             * @return {SFSUser}    Returns: An object representing the user, or null if no user with the passed id exists in this Room.
             */
            getUserById(id: number): SFSUser;
            /**
             * Retrieves a SFSUser object from its name property.
             * @param  {string}  name The name of the user to be found.
             * @return {SFSUser}      Returns: An object representing the user, or null if no user with the passed name exists in this Room.
             */
            getUserByName(name: string): SFSUser;
            /**
             * Returns the current number of users in this Room. In case of Game Rooms, this is the number of players.
             * @return {number} Returns: Current number of users in the Room.
             */
            getUserCount(): number;
            /**
             * Returns the current number of users in this Room. In case of Game Rooms, this is the number of players.
             * @return {SFSUser[]} Returns: Current number of users in the Room.
             */
            getUserList(): SFSUser[];
            /**
             * Retrieves a Room Variable from its name.
             * @param  {string}                    varName The name of the Room Variable to be retrieved.
             * @return {Variables.SFSRoomVariable}         Returns: The object representing the Room Variable, or null if no Room Variable with the passed name exists in this Room.
             */
            getVariable(varName: string): Variables.SFSRoomVariable;
            /**
             * Retrieves all the Room Variables of this Room.
             * @return {Variables.SFSRoomVariable[]} Returns: The list of SFSRoomVariable objects associated with this Room.
             */
            getVariables(): Variables.SFSRoomVariable[];
            /**
             * Returns a string that contains the Room id, name and id of the Group to which it belongs.
             * @return {string} Returns: The string representation of the SFSRoom object.
             */
            toString(): string;

        }

        //#endregion
        //#region SFSUser

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.SFSUser.html
        export class SFSUser {

            /** @type {Data.Vec3D} Returns the entry point of this user in the current user's AoI. */
            aoiEntryPoint: Data.Vec3D;
            /** @type {number} Indicates the id of this user. It is unique and it is generated by the server when the user is created. */
            id: number;
            /** @type {boolean} Indicates if this SFSUser object represents the current client. */
            isItMe: boolean;
            /** @type {string} Indicates the name of this user. Two users in the same Zone can't have the same name. */
            name: string;
            /** @type {number} Returns the id which identifies the privilege level of this user. */
            privilegeId: number;
            /** @type {Object} Defines a generic utility object that can be used to store custom user data. The values added to this object are for client-side use only and are never transmitted to the server or to the other clients. */
            properties: Object;

            /**
             * Creates a new SFSUser instance.
             * @param {number}  id     The user id.
             * @param {string}  name   The user name.
             * @param {boolean} [isItMe=false] If true, the user being created corresponds to the current client.
             */
            constructor(id: number, name: string, isItMe?: boolean);
            /**
             * Indicates whether this user has the specified User Variable set or not.
             * @param  {string}  varName The name of the User Variable whose existance must be checked.
             * @return {boolean}         Returns: true if a User Variable with the passed name is set for this user.
             */
            containsVariable(varName: string): boolean;
            /**
             * Returns the playerId value of this user in the passed Room. See the playerId property description for more informations.
             * @param  {SFSRoom} room The SFSRoom object representing the Room to retrieve the player id from.
             * @return {number}       Returns: The playerId of this user in the passed Room.
             */
            getPlayerId(room: SFSRoom): number;
            /**
             * Returns a reference to the User Manager which manages this user.
             * @return {Managers.UserManager} Returns: The User Manager to which this user is associated.
             */
            getUserManager(): Managers.UserManager;
            /**
             * Retrieves a User Variable from its name.
             * @param  {string}                    varName The name of the User Variable to be retrieved.
             * @return {Variables.SFSUserVariable}         Returns: The object representing the User Variable, or null if no User Variable with the passed name is associated with this user.
             */
            getVariable(varName: string): Variables.SFSUserVariable;
            /**
             * Retrieves all the User Variables of this user.
             * @return {Variables.SFSUserVariable[]} Returns: The list of SFSUserVariable objects associated with the user.
             */
            getVariables(): Variables.SFSUserVariable[];
            /**
             * Indicates whether this user logged in as an administrator or not. Administrator users have the privilegeId property set to UserPrivileges.ADMINISTRATOR.
             * @return {boolean} Returns: true if this user is an administrator.
             */
            isAdmin(): boolean;
            /**
             * Indicates whether this user logged in as a guest or not. Guest users have the privilegeId property set to UserPrivileges.GUEST.
             * @return {boolean} Returns: true if this user is a guest.
             */
            isGuest(): boolean;
            /**
             * Indicates whether this user joined the passed Room or not.
             * @param  {SFSRoom} room The SFSRoom object representing the Room where to check the user presence.
             * @return {boolean}      Returns: true if this user is inside the passed Room.
             */
            isJoinedInRoom(room: SFSRoom): boolean;
            /**
             * Indicates whether this user logged in as a moderator or not. Moderator users have the privilegeId property set to UserPrivileges.MODERATOR.
             * @return {boolean} Returns: true if this user is a moderator.
             */
            isModerator(): boolean;
            /**
             * Indicates whether this user is a player (playerId greater than 0) in the last joined Room or not. Non-Game Rooms always return false.
             * @return {boolean} Returns: true if this user is a player in the last joined Room.
             */
            isPlayer(): boolean;
            /**
             * Indicates whether this user is a player (playerId greater than 0) in the passed Room or not. Non-Game Rooms always return false.
             * @param  {SFSRoom} room The SFSRoom object representing the Room where to check if this user is a player.
             * @return {boolean}      Returns: true if this user is a player in the passed Room.
             */
            isPlayerInRoom(room: SFSRoom): boolean;
            /**
             * Indicates whether this user is a spectator (playerId lower than 0) in the last joined Room or not. Non-Game Rooms always return false.
             * @return {boolean} Returns: true if this user is a spectator in the last joined Room.
             */
            isSpectator(): boolean;
            /**
             * Indicates whether this user is a spectator (playerId lower than 0) in the passed Room or not. Non-Game Rooms always return false.
             * @param  {SFSRoom} room The SFSRoom object representing the Room where to check if this user is a spectator.
             * @return {boolean}      Returns: true if this user is a spectator in the passed Room.
             */
            isSpectatorInRoom(room: SFSRoom): boolean;
            /**
             * Indicates whether this user logged in as a standard user or not. Standard users have the privilegeId property set to UserPrivileges.STANDARD.
             * @return {boolean} Returns: true if this user is a standard user.
             */
            isStandardUser(): boolean;
            /**
             * Returns a string that contains the user id, name and a boolean indicating if the SFSUser object represents the current client.
             * @return {string} Returns: The string representation of the SFSUser object.
             */
            toString(): string;

        }

        //#endregion
        //#region UserPrivileges

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.UserPrivileges.html
        export class UserPrivileges {

            /** @type {number} The administrator user can send dedicated "administrator messages", kick and ban users. */
            static ADMINISTRATOR: number;
            /** @type {number} The Guest user is usually the lowest level in the privilege profiles scale. */
            static GUEST: number;
            /** @type {number} The moderator user can send dedicated "moderator messages", kick and ban users. */
            static MODERATOR: number;
            /** @type {number} The standard user is usually registered in the application custom login system; uses a unique name and password to login. */
            static STANDARD: number;

        }

        //#endregion
        //#region Variables

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Variables.html
        namespace Variables {

            //#region MMOItemVariable

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Variables.MMOItemVariable.html
            export class MMOItemVariable extends SFSUserVariable {

                /**
                 * Creates a new MMOItemVariable instance.
                 * @param {string} name  The name of the MMOItem Variable.
                 * @param {any}    value The value of the MMOItem Variable; valid data types are: Boolean, Number, String, Object, Array. The value can also be null.
                 * @param {number} [type=-1]  The type id of the MMOItem Variable among those available in the VariableType class. Usually it is not necessary to pass this parameter, as the type is auto-detected from the value.
                 */
                constructor(name: string, value: any, type?: number);
                /**
                 * Returns a string that contains the MMOItem Variable name, type and value.
                 * @return {string} Returns: The string representation of the MMOItemVariable object.
                 */
                toString(): string;

            }
            //#endregion
            //#region ReservedBuddyVariables

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Variables.ReservedBuddyVariables.html
            export class ReservedBuddyVariables {

                /** @type {string} The Buddy Variable with this name stores the optional nickname of the user in a buddy list. This variable is persistent, which means that the nickname is preserved upon disconnection. */
                static BV_NICKNAME: string;
                /** @type {string} The Buddy Variable with this name keeps track of the online/offline state of the user in a buddy list. This variable is persistent, which means that the online/offline state is preserved upon disconnection. */
                static BV_ONLINE: string;
                /** @type {string} The Buddy Variable with this name stores the custom state of the user in a buddy list. This variable is persistent, which means that the custom state is preserved upon disconnection. */
                static BV_STATE: string;

            }
            //#endregion
            //#region ReservedRoomVariables

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Variables.ReservedRoomVariables.html
            export class ReservedRoomVariables {

                /** @type {string} The Room Variable with this name keeps track of the state (started or stopped) of a game created with the CreateSFSGameRequest request. */
                static RV_GAME_STARTED: string;

            }
            //#endregion
            //#region SFSBuddyVariable

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Variables.SFSBuddyVariable.html
            export class SFSBuddyVariable extends SFSUserVariable {

                /** @type {string} The prefix to be added to a Buddy Variable name to make it persistent. */
                static OFFLINE_PREFIX: string;

                /**
                 * Creates a new SFSBuddyVariable instance.
                 * @param {string} name  The name of the Buddy Variable.
                 * @param {any}    value The value of the Buddy Variable; valid data types are: Boolean, Number, String, Object, Array. The value can also be null.
                 * @param {number} [type=-1]  The type id of the Buddy Variable among those available in the VariableType class. Usually it is not necessary to pass this parameter, as the type is auto-detected from the value.
                 */
                constructor(name: string, value: any, type?: number);
                /**
                 * Indicates whether the Buddy Variable is persistent or not.
                 * @return {boolean} Returns: true if the Buddy Variable is persistent.
                 */
                isOffline(): boolean;
                /**
                 * Returns a string that contains the Buddy Variable name, type and value.
                 * @return {string} Returns: The string representation of the SFSBuddyVariable object.
                 */
                toString(): string;

            }
            //#endregion
            //#region SFSRoomVariable

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Variables.SFSRoomVariable.html
            export class SFSRoomVariable extends SFSUserVariable {

                /** @type {boolean} Indicates whether this Room Variable is persistent or not. */
                isPersistent: boolean;
                /** @type {boolean} Indicates whether this Room Variable is private or not. */
                isPrivate: boolean;

                /**
                 * Creates a new SFSRoomVariable instance.
                 * @param {string} name  The name of the Room Variable.
                 * @param {any}    value The value of the Room Variable; valid data types are: Boolean, Number, String, Object, Array. The value can also be null.
                 * @param {number} [type=-1]  The type id of the Room Variable among those available in the VariableType class. Usually it is not necessary to pass this parameter, as the type is auto-detected from the value.
                 */
                constructor(name: string, value: any, type?: number);
                /**
                 * Returns a string that contains the Room Variable name, type, value and isPrivate flag.
                 * @return {string} Returns: The string representation of the SFSRoomVariable object.
                 */
                toString(): string;

            }
            //#endregion
            //#region SFSUserVariable

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Variables.SFSUserVariable.html
            export class SFSUserVariable {

                /** @type {string} Indicates the name of this variable. */
                name: string;
                /** @type {number} Returns the value of this variable. */
                value: number;

                /**
                 * Creates a new SFSUserVariable instance.
                 * @param {string} name  The name of the User Variable.
                 * @param {any}    value The value of the User Variable; valid data types are: Boolean, Number, String, Object, Array. The value can also be null.
                 * @param {number} [type=-1]  The type id of the User Variable among those available in the VariableType class. Usually it is not necessary to pass this parameter, as the type is auto-detected from the value.
                 */
                constructor(name: string, value: any, type?: number);
                /**
                 * Indicates the type of this variable. Possibly returned strings are: Null, Bool, Int, Double, String, Object, Array.
                 * @param  {number} typeId The type id of the User Variable among those available in the VariableType class.
                 * @return {string}        Returns: The variable type name.
                 */
                getTypeName(typeId: number): string;
                /**
                 * Indicates if the variable is null.
                 * @return {boolean} Returns: true if the variable has a null value.
                 */
                isNull(): boolean;
                /**
                 * Returns a string that contains the User Variable name, type and value.
                 * @return {string} Returns: The string representation of the SFSUserVariable object.
                 */
                toString(): string;
            }
            //#endregion
            //#region VariableType

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Entities.Variables.VariableType.html
            export class VariableType {

                /** @type {number} The type of the User/Room Variable is array. */
                static ARRAY: number;
                /** @type {number} The type of the User/Room Variable is boolean. */
                static BOOL: number;
                /** @type {number} The type of the User/Room Variable is number (specifically a double). */
                static DOUBLE: number;
                /** @type {number} The type of the User/Room Variable is number (specifically an integer). */
                static INT: number;
                /** @type {number} The User/Room Variable is null. */
                static NULL: number;
                /** @type {number} The type of the User/Room Variable is object. */
                static OBJECT: number;
                /** @type {number} The type of the User/Room Variable is string. */
                static STRING: number;

            }
            //#endregion

        }
        //#endregion

    }
    //#endregion
    //#region ErrorCodes

    // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.ErrorCodes.html
    export class ErrorCodes {

        /**
         * Sets the text of the error message corresponding to the passed error code.
         * @param {number} code    The code of the error message to be modified.
         * @param {string} message The new error message, including the placeholders for runtime informations.
         */
        static setErrorMessage(code: number, message: string): void;

    }
    //#endregion
    //#region Logger

    // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Logger.html
    export class Logger {

        /**
         * Sets the current logging level.
         * @param {number} level The minimum logging level.
         */
        setLevel(level: number): void;

    }
    //#endregion
    //#region LogLevel

    // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.LogLevel.html
    export class LogLevel {

        /** @type {number} A DEBUG message is a fine-grained information on the client activity. */
        static DEBUG: number;
        /** @type {number} An ERROR message contains informations on a problem that occurred during the client activities. Client operations might be compromised when an error is raised. */
        static ERROR: number;
        /** @type {number} An INFO message contains informations on the standard client activities. */
        static INFO: number;
        /** @type {number} A WARN message is a warning caused by an unexpected behavior of the client. Client operations are not compromised when a warning is raised. */
        static WARN: number;

    }
    //#endregion
    //#region Managers

    // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Managers.html
    namespace Managers {

        //#region BuddyManager

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Managers.BuddyManager.html
        export class BuddyManager {

            /**
             * Creates a new BuddyManager instance.
             * @param {SmartFox} sfs An instance of the SmartFoxServer 2X client API main SmartFox class.
             */
            constructor(sfs: SmartFox);
            /**
             * Indicates whether a buddy exists in user's buddy list or not.
             * @param  {string}  name The name of the buddy whose presence in the buddy list is to be checked.
             * @return {boolean}      Returns: true if the specified buddy exists in the buddy list.
             */
            containsBuddy(name: string): boolean;
            /**
             * Retrieves a SFSBuddy object from its id property.
             * @param  {number}            id The id of the buddy to be found.
             * @return {Entities.SFSBuddy}   Returns: The SFSBuddy object representing the buddy, or null if no buddy with the passed id exists in the buddy list.
             */
            getBuddyById(id: number): Entities.SFSBuddy;
            /**
             * Retrieves a SFSBuddy object from its name property.
             * @param  {string}            name The name of the buddy to be found.
             * @return {Entities.SFSBuddy}      Returns: The SFSBuddy object representing the buddy, or null if no buddy with the passed name exists in the buddy list.
             */
            getBuddyByName(name: string): Entities.SFSBuddy;
            /**
             * Retrieves a SFSBuddy object using its getNickName method.
             * @param  {string}            nickName The nickname of the buddy to be found.
             * @return {Entities.SFSBuddy}          Returns: The SFSBuddy object representing the buddy, or null if no buddy with the passed nickname exists in the buddies list.
             */
            getBuddyByNickName(nickName: string): Entities.SFSBuddy;
            /**
             * Returns a list of SFSBuddy objects representing all the buddies in the user's buddy list.
             * @return {Entities.SFSBuddy[]} Returns: A list of SFSBuddy objects representing all the buddies.
             */
            getBuddyList(): Entities.SFSBuddy[];
            /**
             * Returns a list of strings representing the available custom buddy states.
             * @return {string[]} Returns: The list of available custom buddy states in the Buddy List system.
             */
            getBuddyStates(): string[];
            /**
             * Returns the current user's nickname (if set). If the nickname was never set before, null is returned.
             * @return {string} Returns: The user nickname in the Buddy List system.
             */
            getMyNickName(): string;
            /**
             * Returns the current user's online/offline state.
             * @return {boolean} Returns true if the user is online in the Buddy List system.
             */
            getMyOnlineState(): boolean;
            /**
             * Returns the current user's custom state (if set). Examples of custom states are "Available", "Busy", "Be right back", etc. If the custom state was never set before, null is returned.
             * @return {string} Returns: The user state in the Buddy List system.
             */
            getMyState(): string;
            /**
             * Retrieves a Buddy Variable set for the current user from its name.
             * @param  {string}                              varName The name of the Buddy Variable to be retrieved.
             * @return {Entities.Variables.SFSBuddyVariable}         Returns: The SFSBuddyVariable object representing the Buddy Variable, or null if no Buddy Variable with the passed name is associated to the current user.
             */
            getMyVariable(varName: string): Entities.Variables.SFSBuddyVariable;
            /**
             * Returns all the Buddy Variables set for the current user.
             * @return {Entities.Variables.SFSBuddyVariable[]} Returns: A list of SFSBuddyVariable objects representing all the Buddy Variables set for the user.
             */
            getMyVariables(): Entities.Variables.SFSBuddyVariable[];
            /**
             * Returns a list of SFSBuddy objects representing all the offline buddies in the user's buddy list.
             * @return {Entities.SFSBuddy[]} Returns: A list of SFSBuddy objects representing the offline buddies.
             */
            getOfflineBuddies(): Entities.SFSBuddy[];
            /**
             * Returns a list of SFSBuddy objects representing all the online buddies in the user's buddy list.
             * @return {Entities.SFSBuddy[]} Returns: A list of SFSBuddy objects representing the online buddies.
             */
            getOnlineBuddies(): Entities.SFSBuddy[];
            /**
             * Indicates whether the client's Buddy List system is initialized or not. If not, an InitBuddyListRequest request should be sent to the server in order to retrieve the persistent Buddy List data.
             * @return {boolean} Returns: true if the Buddy List system is initialized in the client.
             */
            isInited(): boolean;

        }
        //#endregion
        //#region RoomManager

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Managers.RoomManager.html
        export class RoomManager {

            /**
             * Creates a new RoomManager instance.
             * @param {SmartFox} sfs An instance of the SmartFoxServer 2X client API main SmartFox class.
             */
            constructor(sfs: SmartFox);
            /**
             * Indicates whether the specified Group has been subscribed by the client or not.
             * @param  {string}  groupId The name of the Group.
             * @return {boolean}         Returns: true if the client subscribed the passed Group.
             */
            containsGroup(groupId: string): boolean;
            /**
             * Indicates whether the Rooms list contains a Room belonging to the specified Group or not.
             * @param  {any}     idOrName The id or name of the SFSRoom object whose presence in the Rooms list is to be tested.
             * @return {boolean}          Returns: true if the passed Room exists in the Rooms list.
             */
            containsRoom(idOrName: any): boolean;
            /**
             * Indicates whether the Rooms list contains a Room belonging to the specified Group or not.
             * @param  {any}     idOrName The id or name of the SFSRoom object whose presence in the Rooms list is to be tested.
             * @param  {string}  groupId  The name of the Group to which the specified Room must belong.
             * @return {boolean}          Returns: true if the Rooms list contains the passed Room and it belongs to the specified Group.
             */
            containsRoomInGroup(idOrName: any, groupId: string): boolean;
            /**
             * Returns a list of Rooms currently joined by the client.
             * @return {Entities.SFSRoom[]} Returns: The list of SFSRoom objects representing the Rooms currently joined by the client.
             */
            getJoinedRooms(): Entities.SFSRoom[];
            /**
             * Retrieves a SFSRoom object from its id.
             * @param  {number}           id The id of the Room.
             * @return {Entities.SFSRoom}    Returns: The object representing the requested Room; null if no SFSRoom object with the passed id exists in the Rooms list.
             */
            getRoomById(id: number): Entities.SFSRoom;
            /**
             * Retrieves a SFSRoom object from its name.
             * @param  {string}           name The name of the Room.
             * @return {Entities.SFSRoom}      Returns: The object representing the requested Room; null if no SFSRoom object with the passed name exists in the Rooms list.
             */
            getRoomByName(name: string): Entities.SFSRoom;
            /**
             * Returns the current number of Rooms in the Rooms list.
             * @return {number} Returns: A list of Group names.
             */
            getRoomCount(): number;
            /**
             * Returns the names of Groups currently subscribed by the client.
             * @return {string[]} Returns: A list of Group names.
             */
            getRoomGroups(): string[];
            /**
             * Returns a list of Rooms currently "known" by the client. The list contains all the Rooms that are currently joined and all the Rooms belonging to the Room Groups that have been subscribed.
             * @return {Entities.SFSRoom[]} Returns: The list of the available SFSRoom objects.
             */
            getRoomList(): Entities.SFSRoom[];
            /**
             * Retrieves the list of Rooms which are part of the specified Room Group.
             * @param  {string}             groupId The name of the Group.
             * @return {Entities.SFSRoom[]}         Returns: The list of SFSRoom objects belonging to the passed Group.
             */
            getRoomListFromGroup(groupId: string): Entities.SFSRoom[];
            /**
             * Retrieves a list of Rooms joined by the specified user. The list contains only those Rooms "known" by the Room Manager; the user might have joined others the client is not aware of.
             * @param  {Entities.SFSUser}   user A SFSUser object representing the user to look for in the current Rooms list.
             * @return {Entities.SFSRoom[]}      Returns: The list of Rooms joined by the passed user.
             */
            getUserRooms(user: Entities.SFSUser): Entities.SFSRoom[];

        }
        //#endregion
        //#region UserManager

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Managers.UserManager.html
        export class UserManager {

            /**
             * Creates a new UserManager instance.
             * @param {SmartFox} sfs An instance of the SmartFoxServer 2X client API main SmartFox class.
             */
            constructor(sfs: SmartFox);
            /**
             * Indicates whether a user exists in the local users list or not.
             * @param  {Entities.SFSUser} user The SFSUser object representing the user whose presence in the users list is to be tested.
             * @return {boolean}               Returns: true if the passed user exists in the users list.
             */
            containsUser(user: Entities.SFSUser): boolean;
            /**
             * Indicates whether a user exists in the local users list or not from the id.
             * @param  {number}  userId The id of the user whose presence in the users list is to be tested.
             * @return {boolean}        Returns: true if the passed user exists in the users list.
             */
            containsUserId(userId: number): boolean;
            /**
             * Indicates whether a user exists in the local users list or not from the name.
             * @param  {string}  userName The name of the user whose presence in the users list is to be tested.
             * @return {boolean}          Returns: true if the passed user exists in the users list.
             */
            containsUserName(userName: string): boolean;
            /**
             * Retrieves a SFSUser object from its id property.
             * @param  {number}           userId The id of the user to be found.
             * @return {Entities.SFSUser}        Returns: The SFSUser object representing the user, or null if no user with the passed id exists in the local users list.
             */
            getUserById(userId: number): Entities.SFSUser;
            /**
             * Retrieves a SFSUser object from its name property.
             * @param  {string}           userName The name of the user to be found.
             * @return {Entities.SFSUser}          Returns: The SFSUser object representing the user, or null if no user with the passed name exists in the local users list.
             */
            getUserByName(userName: string): Entities.SFSUser;
            /**
             * Returns the total number of users in the local users list.
             * @return {number} Returns: The number of users in the local users list.
             */
            getUserCount(): number;
            /**
             * Get the whole list of users inside the Rooms joined by the client.
             * @return {Entities.SFSUser[]} Returns: The list of SFSUser objects representing the users in the local users list.
             */
            getUserList(): Entities.SFSUser[];

        }
        //#endregion

    }
    //#endregion
    //#region Requests

    // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.html
    namespace Requests {

        //#region BanMode

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.BanMode.html
        export class BanMode {

            /** @type {number} User is banned by IP address. */
            static BY_ADDRESS: number;
            /** @type {number} User is banned by name. */
            static BY_NAME: number;

        }
        //#endregion
        //#region BuddyList

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.BuddyList.html
        namespace BuddyList {

            //#region AddBuddyRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.BuddyList.AddBuddyRequest.html
            export class AddBuddyRequest {

                /**
                 * Creates a new AddBuddyRequest instance.
                 * @param {string} buddyName The name of the user to be added as a buddy.
                 */
                constructor(buddyName: string);

            }
            //#endregion
            //#region BlockBuddyRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.BuddyList.BlockBuddyRequest.html
            export class BlockBuddyRequest {

                /**
                 * Creates a new BlockBuddyRequest instance.
                 * @param {string}  buddyName The name of the buddy to be removed from the user's buddy list.
                 * @param {boolean} blocked   blocked
                 */
                constructor(buddyName: string, blocked: boolean);

            }
            //#endregion
            //#region BuddyMessageRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.BuddyList.BuddyMessageRequest.html
            export class BuddyMessageRequest {

                /**
                 * Creates a new BuddyMessageRequest instance.
                 * @param {string}            message     The message to be sent to a buddy.
                 * @param {Entities.SFSBuddy} targetBuddy The SFSBuddy object corresponding to the message recipient.
                 * @param {Object}            [parms=null]       An object containing additional custom parameters (e.g. the message color, an emoticon id, etc).
                 */
                constructor(message: string, targetBuddy: Entities.SFSBuddy, parms?: Object);

            }
            //#endregion
            //#region GoOnlineRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.BuddyList.GoOnlineRequest.html
            export class GoOnlineRequest {

                /**
                 * Creates a new GoOnlineRequest instance.
                 * @param {boolean} online true to make the current user available (online) in the Buddy List system; false to make them not available (offline).
                 */
                constructor(online: boolean);

            }
            //#endregion
            //#region InitBuddyListRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.BuddyList.InitBuddyListRequest.html
            export class InitBuddyListRequest {

                /**
                 * Creates a new InitBuddyListRequest instance.
                 */
                constructor();

            }
            //#endregion
            //#region RemoveBuddyRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.BuddyList.RemoveBuddyRequest.html
            export class RemoveBuddyRequest {

                /**
                 * Creates a new RemoveBuddyRequest instance.
                 * @param {string} buddyName The name of the buddy to be removed from the user's buddy list.
                 */
                constructor(buddyName: string);

            }
            //#endregion
            //#region SetBuddyVariablesRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.BuddyList.SetBuddyVariablesRequest.html
            export class SetBuddyVariablesRequest {

                /**
                 * Creates a new SetBuddyVariablesRequest instance.
                 * @param {Entities.Variables.SFSBuddyVariable[]} buddyVariables A list of SFSBuddyVariable objects representing the Buddy Variables to set.
                 */
                constructor(buddyVariables: Entities.Variables.SFSBuddyVariable[]);

            }
            //#endregion

        }
        //#endregion
        //#region Game

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.Game.html
        namespace Game {

            //#region CreateSFSGameRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.Game.CreateSFSGameRequest.html
            export class CreateSFSGameRequest {

                /**
                 * Creates a new CreateSFSGameRequest instance.
                 * @param {SFSGameSettings} settings An object containing the Game Room configuration settings.
                 */
                constructor(settings: SFSGameSettings);

            }
            //#endregion
            //#region InvitationReplyRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.Game.InvitationReplyRequest.html
            export class InvitationReplyRequest {

                /**
                 * Creates a new InvitationReplyRequest instance.
                 * @param {IINVITATION} invitation      An instance of the Invitation class containing the invitation details (inviter, custom parameters, etc).
                 * @param {number}      invitationReply The answer to be sent to the inviter, among those available as constants in the InvitationReply class.
                 * @param {Object}      [params=null]          An object containing custom parameters to be returned to the inviter together with the reply (for example a message describing the reason of refusal).
                 */
                constructor(invitation: IINVITATION, invitationReply: number, params?: Object);

            }
            //#endregion
            //#region InviteUsersRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.Game.InviteUsersRequest.html
            export class InviteUsersRequest {

                /**
                 * Creates a new InviteUsersRequest instance.
                 * @param {Entities.SFSUser[]} invitedUsers     A list of SFSUser objects, each representing a user to send the invitation to.
                 * @param {number}             secondsForAnswer The number of seconds available to each invited user to reply to the invitation (recommended range: 15 to 40 seconds).
                 * @param {Object}             [params=null]           An object containing custom parameters containing additional invitation details.
                 */
                constructor(invitedUsers: Entities.SFSUser[], secondsForAnswer: number, params?: Object);

            }
            //#endregion
            //#region QuickJoinGameRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.Game.QuickJoinGameRequest.html
            export class QuickJoinGameRequest {

                /**
                 * Creates a new QuickJoinGameRequest instance.
                 * @param {Entities.SFSRoom[]} whereToSearch An array of SFSRoom objects or an array of Group names to which the matching expression should be applied. The maximum number of elements that this array can contain is 32.
                 * @param {Entities.SFSRoom}   [roomToLeave=null]   A SFSRoom object representing the Room that the user should leave when joining the game.
                 */
                constructor(whereToSearch: Entities.SFSRoom[], roomToLeave?: Entities.SFSRoom);
                /**
                 * Creates a new QuickJoinGameRequest instance.
                 * @param {Entities.Match.MatchExpression} matchExpression A matching expression that the system will use to search a Game Room where to join the current user.
                 * @param {Entities.SFSRoom[]} whereToSearch An array of SFSRoom objects or an array of Group names to which the matching expression should be applied. The maximum number of elements that this array can contain is 32.
                 * @param {Entities.SFSRoom}               [roomToLeave=null]     A SFSRoom object representing the Room that the user should leave when joining the game.
                 */
                constructor(matchExpression: Entities.Match.MatchExpression, whereToSearch: Entities.SFSRoom[], roomToLeave?: Entities.SFSRoom);

            }
            //#endregion
            //#region SFSGameSettings

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.Game.SFSGameSettings.html
            export class SFSGameSettings extends RoomSettings {

                /** @type {number} In private games, defines the number of seconds that users have to reply to the invitation to join a game. The suggested range is 10 to 40 seconds. */
                invitationExpiryTime: number;
                /** @type {Object} In private games, defines a list of SFSUser objects representing players to be invited to join the game. */
                invitiationParams: Object;
                /** @type {Entities.SFSUser[]} In private games, defines a list of SFSUser objects representing players to be invited to join the game.. */
                invitiedPlayers: Entities.SFSUser[];
                /** @type {boolean} Indicates whether the game is public or private. */
                isPublic: boolean;
                /** @type {boolean} In private games, indicates whether the players must leave the previous Room when joining the game or not. */
                leaveLastJoinedRoom: boolean;
                /** @type {number} Defines the minimum number of players required to start the game. If the notifyGameStarted property is set to true, when this number is reached, the game start is notified. */
                minPlayersToStartGame: number;
                /** @type {boolean} Indicates if a game state change must be notified when the minimum number of players is reached. */
                notifyGameStarted: boolean;
                /** @type {Entities.Match.MatchExpression} Defines the game matching expression to be used to filters players. */
                playerMatchExpression: Entities.Match.MatchExpression;
                /** @type {string[]} In private games, defines a list of Groups names where to search players to invite. */
                serachableRooms: string[]; // Might need any
                /** @type {Entities.Match.MatchExpression} Defines the game matching expression to be used to filters spectators. */
                spectatorMatchExpression: Entities.Match.MatchExpression;

                /**
                 * Creates a new SFSGameSettings instance.
                 * @param {string} name The name of the Game Room to be created.
                 */
                constructor(name: string);

            }
            //#endregion

        }
        //#endregion
        //#region MessageRecipientMode

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.MessageRecipientMode.html
        export class MessageRecipientMode {

            /** @type {number} Returns the selected recipient mode. */
            mode: number;
            /** @type {any} Returns the moderator/administrator message target, according to the selected recipient mode. */
            target: any;
            /** @type {number} The moderator/administrator message will be sent to all the clients who subscribed a specific Room Group. */
            static TO_GROUP: number;
            /** @type {number} The moderator/administrator message will be sent to all the users in a specific Room. */
            static TO_ROOM: number;
            /** @type {number} The moderator/administrator message will be sent to a specific user. */
            static TO_USER: number;
            /** @type {number} The moderator/administrator message will be sent to all the users in the Zone. */
            static TO_ZONE: number;

            /**
             * Creates a new MessageRecipientMode instance.
             * @param {number} mode   One of the costants contained in this class, describing the recipient mode.
             * @param {any}    target The moderator/administrator message recipient/s, according to the selected recipient mode.
             */
            constructor(mode: number, target: any);

        }
        //#endregion
        //#region MMO

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.MMO.html
        namespace MMO {

            //#region MapLimits

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.MMO.MapLimits.html
            export class MapLimits {

                /** @type {Entities.Data.Vec3D} Returns the higher coordinates limit of the virtual environment along the X,Y,Z axes. */
                higherLimit: Entities.Data.Vec3D;
                /** @type {Entities.Data.Vec3D} Returns the lower coordinates limit of the virtual environment along the X,Y,Z axes. */
                lowerLimit: Entities.Data.Vec3D;

                /**
                 * Creates a new MapLimits instance.
                 * @param {Entities.Data.Vec3D} lowerLimit
                 * @param {Entities.Data.Vec3D} higherLimit
                 */
                constructor(lowerLimit: Entities.Data.Vec3D, higherLimit: Entities.Data.Vec3D);

            }
            //#endregion
            //#region MMORoomSettings

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.MMO.MMORoomSettings.html
            export class MMORoomSettings {

                /** @type {Entities.Data.Vec3D} Defines the Area of Interest (AoI) for the MMORoom. */
                defaultAOI: Entities.Data.Vec3D;
                /** @type {MapLimits} Defines the limits of the virtual environment represented by the MMORoom. */
                mapLimits: MapLimits;
                /** @type {number} Configures the speed at which the SFSEvent.PROXIMITY_LIST_UPDATE event is sent by the server. */
                proximityListUpdateMillis: number;
                /** @type {boolean} Sets if the users entry points in the current user's Area of Interest should be transmitted in the SFSEvent.PROXIMITY_LIST_UPDATE event. */
                sendAOIEntryPoint: boolean;
                /** @type {number} Defines the time limit before a user without a physical position set inside the MMORoom is kicked from the Room. */
                userMaxLimboSeconds: number;

                /**
                 * Creates a new MMORoomSettings instance.
                 * @param {string} name The name of the MMORoom to be created.
                 */
                constructor(name: string);

            }
            //#endregion
            //#region SetUserPositionRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.MMO.SetUserPositionRequest.html
            export class SetUserPositionRequest {

                /**
                 * Creates a new SetUserPositionRequest instance.
                 * @param {Entities.Data.Vec3D} pos        The user position.
                 * @param {Entities.MMORoom}    [targetRoom=null] The MMORoom object corresponding to the Room where the position should be set; if null, the last Room joined by the user is used.
                 */
                constructor(pos: Entities.Data.Vec3D, targetRoom?: Entities.MMORoom);

            }
            //#endregion

        }
        //#endregion
        //#region RoomEvents

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.RoomEvents.html
        export class RoomEvents {

            /** @type {boolean} Sets whether or not the userCountChange event should be dispatched whenever the users (or players+spectators) count changes in the Room. */
            allowUserCountChance: boolean;
            /** @type {boolean} Sets whether the userEnterRoom event should be dispatched whenever a user joins the Room or not. */
            allowUserEnter: boolean;
            /** @type {boolean} Sets whether the userExitRoom event should be dispatched whenever a user leaves the Room or not. */
            allowUserExit: boolean;
            /** @type {boolean} Sets whether or not the userVariablesUpdate event should be dispatched whenever a user in the Room updates their User Variables */
            allowUserVariablesUpdate: boolean;

            /**
             * Creates a new RoomEvents instance.
             */
            constructor();

        }
        //#endregion
        //#region RoomExtension

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.RoomExtension.html
        export class RoomExtension {

            /** @type {string} Returns the fully qualified name of the main class of the Extension. */
            className: string;
            /** @type {string} Returns the name of the Extension to be attached to the Room. */
            id: string;
            /** @type {string} Sets the name of an optional properties file that should be loaded on the server-side during the Extension initialization. */
            propertiesFile: string;

            /**
             * Creates a new RoomExtension instance.
             * @param {string} id        The name of the Extension as deployed on the server; it's the name of the folder containing the Extension classes inside the main [sfs2x-install-folder]/SFS2X/extensions folder.
             * @param {string} className The fully qualified name of the main class of the Extension.
             */
            constructor(id: string, className: string);

        }
        //#endregion
        //#region RoomPermissions

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.RoomPermissions.html
        export class RoomPermissions {

            /** @type {boolean} Sets whether changing the Room name after its creation is allowed or not. */
            allowNameChange: boolean;
            /** @type {boolean} Sets whether changing (or removing) the Room password after its creation is allowed or not. */
            allowPasswordStateChange: boolean;
            /** @type {boolean} Sets whether users inside the Room are allowed to send public messages or not. */
            allowPublicMessages: boolean;
            /** @type {boolean} Sets whether the Room capacity can be changed after its creation or not. */
            aloowResizing: boolean;

            /**
             * Creates a new RoomPermissions instance.
             */
            constructor();

        }
        //#endregion
        //#region RoomSettings

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.RoomSettings.html
        export class RoomSettings {

            /** @type {RoomEvents} Sets the flags indicating which events related to the Room are dispatched by the SmartFox client. */
            events: RoomEvents;
            /** @type {RoomExtension} Sets the Extension that must be attached to the Room on the server-side, and its settings. */
            extension: RoomExtension;
            /** @type {string} Sets the id of the Group to which the Room should belong. */
            groupId: string;
            /** @type {boolean} Sets whether the Room is a Game Room or not. */
            isGame: boolean;
            /** @type {number} Sets the maximum number of spectators allowed in the Room (only for Game Rooms). */
            maxSpectators: number;
            /** @type {number} Sets the maximum number of users allowed in the Room. */
            maxUsers: number;
            /** @type {number} Sets the maximum number of Room Variables allowed for the Room. */
            maxVariables: number;
            /** @type {string} Defines the name of the Room. */
            name: string;
            /** @type {string} Sets the password of the Room. */
            password: string;
            /** @type {RoomPermissions} Sets the flags indicating which operations are permitted on the Room. */
            permissions: RoomPermissions;
            /** @type {Entities.Variables.ReservedRoomVariables[]} Sets a list of SFSRooomVariable objects to be attached to the Room. */
            variables: Entities.Variables.ReservedRoomVariables[];

            /**
             * Creates a new RoomSettings instance.
             * @param {string} name The name of the Room to be created.
             */
            constructor(name: string);

        }
        //#endregion
        //#region System

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.html
        namespace System {

            //#region AdminMessageRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.AdminMessageRequest.html
            export class AdminMessageRequest{

                /**
                 * Creates a new AdminMessageRequest instance.
                 * @param {string}               message       The message of the administrator to be sent to the target user/s defined by the recipientMode parameter.
                 * @param {MessageRecipientMode} recipientMode An instance of MessageRecipientMode containing the target to which the message should be delivered.
                 * @param {Object}               [params=null]        An object containing custom parameters to be sent to the recipient user/s.
                 */
                constructor(message: string, recipientMode: MessageRecipientMode, params?: Object);

            }
            //#endregion
            //#region BanUserRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.BanUserRequest.html
            export class BanUserRequest{

                /**
                 * Creates a new BanUserRequest instance.
                 * @param {number}  userId        The id of the user to be banned.
                 * @param {string}  [message=null]       A custom message to be delivered to the user before banning them; if null, the default message configured in the SmartFoxServer 2X Administration Tool is used.
                 * @param {BanMode} [banMode=BY_NAME]       One of the ban modes defined in the BanMode class.
                 * @param {number}  [delaySeconds=5]  The number of seconds after which the user is banned after receiving the ban message.
                 * @param {number}  [durationHours=24] The duration of the banishment, expressed in hours.
                 */
                constructor(userId: number, message?: string, banMode?: BanMode, delaySeconds?: number, durationHours?: number);

            }
            //#endregion
            //#region ChangeRoomCapacityRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.ChangeRoomCapacityRequest.html
            export class ChangeRoomCapacityRequest{

                /**
                 * Creates a new ChangeRoomCapacityRequest instance.
                 * @param {Entities.SFSRoom} room        The Room object corresponding to the Room whose capacity should be changed.
                 * @param {number}           newMaxUsers The new maximum number of users/players who can join the Room; the -1 value can be passed not to change the Room.maxUsers property.
                 * @param {number}           newMaxSpect The new maximum number of spectators who can join the Room (for Game Rooms only); the -1 value can be passed not to change the Room.maxSpectators property.
                 */
                constructor(room: Entities.SFSRoom, newMaxUsers: number, newMaxSpect: number);

            }
            //#endregion
            //#region ChangeRoomNameRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.ChangeRoomNameRequest.html
            export class ChangeRoomNameRequest{

                /**
                 * Creates a new ChangeRoomNameRequest instance.
                 * @param {Entities.SFSRoom} room    The SFSRoom object corresponding to the Room whose name should be changed.
                 * @param {string}           newName The new name to be assigned to the Room.
                 */
                constructor(room: Entities.SFSRoom, newName: string);

            }
            //#endregion
            //#region ChangeRoomPasswordStateRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.ChangeRoomPasswordStateRequest.html
            export class ChangeRoomPasswordStateRequest{

                /**
                 * Creates a new ChangeRoomPasswordStateRequest instance.
                 * @param {Entities.SFSRoom} room    The SFSRoom object corresponding to the Room whose password should be changed.
                 * @param {string}           newPass The new password to be assigned to the Room; an empty string or the null value can be passed to remove the Room's password.
                 */
                constructor(room: Entities.SFSRoom, newPass: string);

            }
            //#endregion
            //#region CreateRoomRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.CreateRoomRequest.html
            export class CreateRoomRequest{

                /**
                 * Creates a new CreateRoomRequest instance.
                 * @param {RoomSettings}     settings    An object containing the Room configuration settings.
                 * @param {boolean}          {autoJoin=false}    If true, the Room is joined as soon as it is created.
                 * @param {Entities.SFSRoom} {roomToLeave=null} A SFSRoom object representing the Room that should be left if the new Room is auto-joined.
                 */
                constructor(settings: RoomSettings, autoJoin?: boolean, roomToLeave?: Entities.SFSRoom);

            }
            //#endregion
            //#region ExtensionRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.ExtensionRequest.html
            export class ExtensionRequest{

                /**
                 * Creates a new ExtensionRequest instance.
                 * @param {string}           extCmd The name of the command which identifies an action that should be executed by the server-side Extension.
                 * @param {Object}           {params=null} An object containing custom data to be sent to the Extension. Can be null if no data needs to be sent.
                 * @param {Entities.SFSRoom} {room=null}   If null, the specified command is sent to the current Zone server-side Extension; if not null, the command is sent to the server-side Extension attached to the passed Room.
                 */
                constructor(extCmd: string, params?: Object, room?: Entities.SFSRoom);

            }
            //#endregion
            //#region FindRoomsRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.FindRoomsRequest.html
            export class FindRoomsRequest{

                /**
                 * Creates a new FindRoomsRequest instance.
                 * @param {Entities.Match.MatchExpression} expr    A matching expression that the system will use to retrieve the Rooms.
                 * @param {string}                         {groupId=null} The name of the Group where to search for matching Rooms; if null, the search is performed in the whole Zone.
                 * @param {number}                         [limit=0]   The maximum size of the list of Rooms that will be returned by the roomFindResult event. If 0, all the found Rooms are returned.
                 */
                constructor(expr: Entities.Match.MatchExpression, groupId?: string, limit?: number);

            }
            //#endregion
            //#region FindUsersRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.FindUsersRequest.html
            export class FindUsersRequest{

                /**
                 * Creates a new FindUsersRequest instance.
                 * @param {Entities.Match.MatchExpression} expr   A matching expression that the system will use to retrieve the users.
                 * @param {any}                            [target=null] The name of a Group or a single SFSRoom object where to search for matching users; if null, the search is performed in the whole Zone.
                 * @param {number}                         [limit=0]  The maximum size of the list of users that will be returned by the userFindResult event. If 0, all the found users are returned.
                 */
                constructor(expr: Entities.Match.MatchExpression, target?: any, limit?: number);

            }
            //#endregion
            //#region JoinRoomRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.JoinRoomRequest.html
            export class JoinRoomRequest{

                /**
                 * Creates a new JoinRoomRequest instance.
                 * @param {any}     room          The id or the name of the Room to be joined.
                 * @param {string}  [password]      The password of the Room, in case it is password protected.
                 * @param {number}  [roomIdToLeave] The id of a previously joined Room that the user should leave when joining the new Room. By default, the last joined Room is left; if a negative number is passed, no previous Room is left.
                 * @param {boolean} [asSpect=false]       true to join the Room as a spectator (in Game Rooms only).
                 */
                constructor(room: any, password?: string, roomIdToLeave?: number, asSpect?: boolean);

            }
            //#endregion
            //#region KickUserRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.KickUserRequest.html
            export class KickUserRequest{

                /**
                 * Creates a new KickUserRequest instance.
                 * @param {number} userId       The id of the user to be kicked.
                 * @param {string} [message=null]      A custom message to be delivered to the user before kicking them; if null, the default message configured in the SmartFoxServer 2X Administration Tool is used.
                 * @param {number} [delaySeconds=5] The number of seconds after which the user is kicked after receiving the kick message.
                 */
                constructor(userId: number, message?: string, delaySeconds?: number);

            }
            //#endregion
            //#region LeaveRoomRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.LeaveRoomRequest.html
            export class LeaveRoomRequest{

                /**
                 * Creates a new LeaveRoomRequest instance.
                 * @param {Entities.SFSRoom} [room=null] The SFSRoom object corresponding to the Room that the current user must leave. If null, the last Room joined by the user is left.
                 */
                constructor(room?: Entities.SFSRoom);

            }
            //#endregion
            //#region LoginRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.LoginRequest.html
            export class LoginRequest{

                /**
                 * Creates a new LoginRequest instance.
                 * @param {string} userName The name to be assigned to the user. If not passed and if the Zone allows guest users, the name is generated automatically by the server.
                 * @param {string} [password] The user password to access the system. SmartFoxServer doesn't offer a default authentication system, so the password must be validated implementing a custom login system in the Zone's server-side Extension.
                 * @param {Object} [params]   An object containing custom parameters to be passed to the Zone Extension (requires a custom login system to be in place).
                 * @param {string} [zoneName] The name (case-sensitive) of the server Zone to login to; if a Zone name is not specified, the client will use the setting passed to the SmartFox class constructor.
                 */
                constructor(userName: string, password?: string, params?: Object, zoneName?: string);

            }
            //#endregion
            //#region LogoutRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.LogoutRequest.html
            export class LogoutRequest{

                /**
                 * Creates a new LogoutRequest instance.
                 */
                constructor();

            }
            //#endregion
            //#region ModeratorMessageRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.ModeratorMessageRequest.html
            export class ModeratorMessageRequest{

                /**
                 * Creates a new ModeratorMessageRequest instance.
                 * @param {string}               message       The message of the moderator to be sent to the target user/s defined by the recipientMode parameter.
                 * @param {MessageRecipientMode} recipientMode An instance of MessageRecipientMode containing the target to which the message should be delivered.
                 * @param {Object}               [params=null]        An object containing custom parameters to be sent to the recipient user/s.
                 */
                constructor(message: string, recipientMode: MessageRecipientMode, params?: Object);

            }
            //#endregion
            //#region ObjectMessageRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.ObjectMessageRequest.html
            export class ObjectMessageRequest{

                /**
                 * Creates a new ObjectMessageRequest instance.
                 * @param {Object}             obj        An object containing custom parameters to be sent to the message recipients.
                 * @param {Entities.SFSRoom}   [targetRoom=null] The SFSRoom object corresponding to the Room where the message should be dispatched; if null, the last Room joined by the user is used.
                 * @param {Entities.SFSUser[]} [recipients=null] A list of SFSUser objects corresponding to the message recipients; if null, the message is sent to all users in the target Room (except the sender themselves).
                 */
                constructor(obj: Object, targetRoom?: Entities.SFSRoom, recipients?: Entities.SFSUser[]);

            }
            //#endregion
            //#region PlayerToSpectatorRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.PlayerToSpectatorRequest.html
            export class PlayerToSpectatorRequest{

                /**
                 * Creates a new SpectatorToPlayerRequest instance.
                 * @param {Entities.SFSRoom} [targetRoom=null] The SFSRoom object corresponding to the Room in which the spectator should be turned to player. If null, the last Room joined by the user is used.
                 */
                constructor(targetRoom?: Entities.SFSRoom);

            }
            //#endregion
            //#region PrivateMessageRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.PrivateMessageRequest.html
            export class PrivateMessageRequest{

                /**
                 * Creates a new PrivateMessageRequest instance.
                 * @param {string} message     The message to be sent to to the recipient user.
                 * @param {number} recipientId The id of the user to which the message is to be sent.
                 * @param {Object} [params=null]      An object containing additional custom parameters to be sent to the message recipient (for example the color of the text, etc).
                 */
                constructor(message: string, recipientId: number, params?: Object);

            }
            //#endregion
            //#region PublicMessageRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.PublicMessageRequest.html
            export class PublicMessageRequest{

                /**
                 * Creates a new PublicMessageRequest instance.
                 * @param {string}           message    The message to be sent to all the users in the target Room.
                 * @param {Object}           [params=null]     An object containing additional custom parameters to be sent to the message recipients (for example the color of the text, etc).
                 * @param {Entities.SFSRoom} [targetRoom=null] The SFSRoom object corresponding to the Room where the message should be dispatched; if null, the last Room joined by the user is used.
                 */
                constructor(message: string, params?: Object, targetRoom?: Entities.SFSRoom);

            }
            //#endregion
            //#region SetRoomVariablesRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.SetRoomVariablesRequest.html
            export class SetRoomVariablesRequest{

                /**
                 * Creates a new SetRoomVariablesRequest instance.
                 * @param {Entities.Variables.SFSRoomVariable[]} roomVariables A list of SFSRoomVariable objects representing the Room Variables to be set.
                 * @param {Entities.SFSRoom}                     [room=null]          A SFSRoom object representing the Room where to set the Room Variables; if null, the last Room joined by the current user is used.
                 */
                constructor(roomVariables: Entities.Variables.SFSRoomVariable[], room: Entities.SFSRoom);

            }
            //#endregion
            //#region SetUserVariablesRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.SetUserVariablesRequest.html
            export class SetUserVariablesRequest{

                /**
                 * Creates a new SetUserVariablesRequest instance.
                 * @param {Entities.Variables.SFSUserVariable} userVariables A list of SFSUserVariable objects representing the User Variables to be set.
                 */
                constructor(userVariables: Entities.Variables.SFSUserVariable);

            }
            //#endregion
            //#region SpectatorToPlayerRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.SpectatorToPlayerRequest.html
            export class SpectatorToPlayerRequest{

                /**
                 * Creates a new SpectatorToPlayerRequest instance.
                 * @param {Entities.SFSRoom} targetRoom The SFSRoom object corresponding to the Room in which the spectator should be turned to player. If null, the last Room joined by the user is used.
                 */
                constructor(targetRoom: Entities.SFSRoom);

            }
            //#endregion
            //#region SubscribeRoomGroupRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.SubscribeRoomGroupRequest.html
            export class SubscribeRoomGroupRequest{

                /**
                 * Creates a new SubscribeRoomGroupRequest instance.
                 * @param {string} groupId The name of the Room Group to subscribe.
                 */
                constructor(groupId: string);

            }
            //#endregion
            //#region UnsubscribeRoomGroupRequest

            // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Requests.System.UnsubscribeRoomGroupRequest.html
            export class UnsubscribeRoomGroupRequest{

                /**
                 * Creates a new UnsubscribeRoomGroupRequest instance.
                 * @param {string} groupId The name of the Room Group to unsubscribe.
                 */
                constructor(groupId: string);

            }
            //#endregion

        }
        //#endregion

    }
    //#endregion
    //#region SFSBuddyEvent

    // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.SFSBuddyEvent.html
    export class SFSBuddyEvent {

        /** @type {string} The buddyAdd event type, dispatched when a buddy is added successfully to the current user's buddy list. */
        static BUDDY_ADD: string;
        /** @type {string} The buddyBlock event type, dispatched when a buddy is blocked or unblocked successfully by the current user. */
        static BUDDY_BLOCK: string;
        /** @type {string} The buddyError event type, dispatched if an error occurs while executing a request related to the Buddy List system. */
        static BUDDY_ERROR: string;
        /** @type {string} The buddyListInit event type, dispatched if the Buddy List system is successfully initialized. */
        static BUDDY_LIST_INIT: string;
        /** @type {string} The buddyMessage event type, dispatched when a message from a buddy is received by the current user. */
        static BUDDY_MESSAGE: string;
        /** @type {string} The buddyOnlineStateChange event type, dispatched when a buddy in the current user's buddy list changes their online state in the Buddy List system. */
        static BUDDY_ONLINE_STATE_CHANGE: string;
        /** @type {string} The buddyRemove event type, dispatched when a buddy is removed successfully from the current user's buddy list. */
        static BUDDY_REMOVE: string;
        /** @type {string} The buddyVariablesUpdate event type, dispatched when a buddy in the current user's buddies list updates one or more Buddy Variables. */
        static BUDDY_VARIABLES_UPDATE: string;

    }

    interface IBUDDY_ADD {
        buddy: Entities.SFSBuddy;
    }

    interface IBUDDY_BLOCK {
        buddy: Entities.SFSBuddy;
    }

    interface IBUDDY_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface IBUDDY_LIST_INIT {
        buddyList: Entities.SFSBuddy[];
        myVariables: Entities.Variables.SFSBuddyVariable[];
    }

    interface IBUDDY_MESSAGE {
        buddy: Entities.SFSBuddy;
        isItMe: boolean;
        message: string;
        data: Object;
    }

    interface IBUDDY_ONLINE_STATE_CHANGE {
        buddy: Entities.SFSBuddy;
        isItMe: boolean;
    }

    interface IBUDDY_REMOVE {
        buddy: Entities.SFSBuddy;
    }

    interface IBUDDY_VARIABLES_UPDATE {
        buddy: Entities.SFSBuddy;
        isItMe: boolean;
        changedVars: string[];
    }

    //#endregion
    //#region SFSEvent

    // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.SFSEvent.html
    export class SFSEvent {

        /** @type {string} The adminMessage event type, dispatched when the current user receives a message from an administrator user. */
        static ADMIN_MESSAGE: string;
        /** @type {string} The connection event type, dispatched when a connection between the client and a SmartFoxServer 2X instance is attempted. */
        static CONNECTION: string;
        /** @type {string} The connectionLost event type, dispatched when the connection between the client and the SmartFoxServer 2X instance is interrupted. */
        static CONNECTION_LOST: string;
        /** @type {string} The extensionResponse event type, dispatched when data coming from a server-side Extension is received by the current user. */
        static EXTENSION_RESPONSE: string;
        /** @type {string} The invitation event type, dispatched when the current user receives an invitation from another user. */
        static INVITATION: string;
        /** @type {string} The invitationReply event type, dispatched when the current user receives a reply to an invitation they sent previously. */
        static INVITATION_REPLY: string;
        /** @type {string} The invitationReplyError event type, dispatched when an error occurs while the current user is sending a reply to an invitation they received. */
        static INVITATION_REPLY_ERROR: string;
        /** @type {string} The login event type, dispatched when the current user performs a successful login in a server Zone. */
        static LOGIN: string;
        /** @type {string} The loginError event type, dispatched if an error occurs while the user login is being performed. */
        static LOGIN_ERROR: string;
        /** @type {string} The logout event type, dispatched when the current user performs logs out of the server Zone. */
        static LOGOUT: string;
        /** @type {string} The mmoItemVariablesUpdate event type, dispatched when an MMOItem Variable is updated in an MMORoom. */
        static MMOITEM_VARIABLES_UPDATE: string;
        /** @type {string} The moderatorMessage event type, dispatched when the current user receives a message from a moderator user. */
        static MODERATOR_MESSAGE: string;
        /** @type {string} The objectMessage event type, dispatched when an object containing custom data is received by the current user. */
        static OBJECT_MESSAGE: string;
        /** @type {string} The pingPong event type, dispatched when a new lag value measurement is available. */
        static PING_PONG: string;
        /** @type {string} The playerToSpectator event type, dispatched when a player is turned to a spectator inside a Game Room. */
        static PLAYER_TO_SPECTATOR: string;
        /** @type {string} The playerToSpectatorError event type, dispatched when an error occurs while the current user is being turned from player to spectator in a Game Room. */
        static PLAYER_TO_SPECTATOR_ERROR: string;
        /** @type {string} The privateMessage event type, dispatched when a private message is received by the current user. */
        static PRIVATE_MESSAGE: string;
        /** @type {string} The proximityListUpdate event type, dispatched when one more users or one or more MMOItem objects enter/leave the current user's Area of Interest in MMORooms. */
        static PROXIMITY_LIST_UPDATE: string;
        /** @type {string} The publicMessage event type, dispatched when a public message is received by the current user. */
        static PUBLIC_MESSAGE: string;
        /** @type {string} The roomAdd event type, dispatched when a new Room is created inside the Zone under any of the Room Groups that the client subscribed. */
        static ROOM_ADD: string;
        /** @type {string} The roomCapacityChange event type, dispatched when the capacity of a Room is changed. */
        static ROOM_CAPACITY_CHANGE: string;
        /** @type {string} The roomCapacityChangeError event type, dispatched when an error occurs while attempting to change the capacity of a Room. */
        static ROOM_CAPACITY_CHANGE_ERROR: string;
        /** @type {string} The roomCreationError event type, dispatched if an error occurs while creating a new Room. */
        static ROOM_CREATION_ERROR: string;
        /** @type {string} The roomFindResult event type, dispatched when a Rooms search is completed. */
        static ROOM_FIND_RESULT: string;
        /** @type {string} The roomGroupSubscribe event type, dispatched when a Group is subscribed by the current user. */
        static ROOM_GROUP_SUBSCRIBE: string;
        /** @type {string} The roomGroupSubscribeError event type, dispatched when an error occurs while a Room Group is being subscribed. */
        static ROOM_GROUP_SUBSCRIBE_ERROR: string;
        /** @type {string} The roomGroupUnsubscribe event type, dispatched when a Group is unsubscribed by the current user. */
        static ROOM_GROUP_UNSUBSCRIBE: string;
        /** @type {string} The roomGroupUnsubscribeError event type, dispatched when an error occurs while a Room Group is being unsubscribed. */
        static ROOM_GROUP_UNSUBSCRIBE_ERROR: string;
        /** @type {string} The roomJoin event type, dispatched when a Room is joined by the current user. */
        static ROOM_JOIN: string;
        /** @type {string} The roomJoinError event type, dispatched when an error occurs while the current user is trying to join a Room. */
        static ROOM_JOIN_ERROR: string;
        /** @type {string} The roomNameChange event type, dispatched when the name of a Room is changed. */
        static ROOM_NAME_CHANGE: string;
        /** @type {string} The roomNameChangeError event type, dispatched when an error occurs while attempting to change the name of a Room. */
        static ROOM_NAME_CHANGE_ERROR: string;
        /** @type {string} The roomPasswordStateChange event type, dispatched when the password of a Room is set, changed or removed. */
        static ROOM_PASSWORD_STATE_CHANGE: string;
        /** @type {string} The roomPasswordStateChangeError event type, dispatched when an error occurs while attempting to set, change or remove the password of a Room. */
        static ROOM_PASSWORD_STATE_CHANGE_ERROR: string;
        /** @type {string} The roomRemove event type, dispatched when a Room belonging to one of the Groups subscribed by the client is removed from the Zone. */
        static ROOM_REMOVE: string;
        /** @type {string} The roomVariablesUpdate event type, dispatched when a Room Variable is updated. */
        static ROOM_VARIABLES_UPDATE: string;
        /** @type {string} The socketError event type, dispatched when a low level socket error is detected, for example bad/inconsistent data. */
        static SOCKET_ERROR: string;
        /** @type {string} The spectatorToPlayer event type, dispatched when a spectator is turned to a player inside a Game Room. */
        static SPECTATOR_TO_PLAYER: string;
        /** @type {string} The spectatorToPlayerError event type, dispatched when an error occurs while the current user is being turned from spectator to player in a Game Room. */
        static SPECTATOR_TO_PLAYER_ERROR: string;
        /** @type {string} The userCountChange event type, dispatched when the number of users/players or spectators inside a Room changes. */
        static USER_COUNT_CHANGE: string;
        /** @type {string} The userEnterRoom event type, dispatched when one of the Rooms joined by the current user is entered by another user. */
        static USER_ENTER_ROOM: string;
        /** @type {string} The userExitRoom event type, dispatched when one of the Rooms joined by the current user is left by another user, or by the current user themselves. */
        static USER_EXIT_ROOM: string;
        /** @type {string} The userFindResult event type, dispatched when a users search is completed. */
        static USER_FIND_RESULT: string;
        /** @type {string} The userVariablesUpdate event type, dispatched when a User Variable is updated. */
        static USER_VARIABLES_UPDATE: string;

    }

    interface IADMIN_MESSAGE {
        sender: Entities.SFSUser;
        message: string;
        data: Object;
    }

    interface ICONNECTION {
        success: boolean;
    }

    interface ICONNECTION_LOST {
        reason: string;
    }

    interface IEXTENSION_RESPONSE {
        cmd: string;
        params: Object;
        sourceRoom: number;
    }

    interface IINVITATION {
        invitation: Entities.Invitation.SFSInvitation;
    }

    interface IINVITATION_REPLY {
        invitee: Entities.SFSUser;
        reply: number;
        data: Object;
    }

    interface IINVITATION_REPLY_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface ILOGIN {
        user: Entities.SFSUser;
        data: Object;
    }

    interface ILOGIN_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface ILOGOUT {

    }

    interface IMMOITEM_VARIABLES_UPDATE {
        room: Entities.MMORoom;
        mmoItem: Entities.MMOItem;
        changedVars: string[];
    }

    interface IMODERATOR_MESSAGE {
        sender: Entities.SFSUser;
        message: string;
        data: Object;
    }

    interface IOBJECT_MESSAGE {
        sender: Entities.SFSUser;
        message: string;
    }

    interface IPING_PONG {
        lagValue: number;
    }

    interface IPLAYER_TO_SPECTATOR {
        room: Entities.SFSRoom;
        user: Entities.SFSUser;
    }

    interface IPLAYER_TO_SPECTATOR_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface IPRIVATE_MESSAGE {
        sender: Entities.SFSUser;
        message: string;
        data: Object;
    }

    interface IPROXIMITY_LIST_UPDATE {
        addedUsers: Entities.SFSUser[];
        removedUsers: Entities.SFSUser[];
        addedItems: Entities.MMOItem[];
        removedItems: Entities.MMOItem[];
    }

    interface IPUBLIC_MESSAGE {
        room: Entities.SFSRoom;
        sender: Entities.SFSUser;
        message: string;
        data: Object;
    }

    interface IROOM_ADD {
        room: Entities.SFSRoom;
    }

    interface IROOM_CAPACITY_CHANGE {
        room: Entities.SFSRoom;
    }

    interface IROOM_CAPACITY_CHANGE_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface IROOM_CREATION_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface IROOM_FIND_RESULT {
        rooms: Entities.SFSRoom[];
    }

    interface IROOM_GROUP_SUBSCRIBE {
        groupId: string;
        newRooms: Entities.SFSRoom[];
    }

    interface IROOM_GROUP_SUBSCRIBE_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface IROOM_GROUP_UNSUBSCRIBE {
        groupId: string;
    }

    interface IROOM_GROUP_UNSUBSCRIBE_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface IROOM_JOIN {
        room: Entities.SFSRoom;
    }

    interface IROOM_JOIN_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface IROOM_NAME_CHANGE {
        room: Entities.SFSRoom;
        oldName: string;
    }

    interface IROOM_NAME_CHANGE_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface IROOM_PASSWORD_STATE_CHANGE {
        room: Entities.SFSRoom;
    }

    interface IROOM_PASSWORD_STATE_CHANGE_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface IROOM_REMOVE {
        room: Entities.SFSRoom;
    }

    interface IROOM_VARIABLES_UPDATE {
        room: Entities.SFSRoom;
        changedVars: string[];
    }

    interface ISOCKET_ERROR {
         errorMessage: string;
    }

    interface ISPECTATOR_TO_PLAYER {
        room: Entities.SFSRoom;
        user: Entities.SFSUser;
        playerId: number;
    }

    interface ISPECTATOR_TO_PLAYER_ERROR {
        errorMessage: string;
        errorCode: number;
    }

    interface IUSER_COUNT_CHANGE {
        room: Entities.SFSRoom;
        uCount: number;
        sCount: number;
    }

    interface IUSER_ENTER_ROOM {
        user: Entities.SFSUser;
        room: Entities.SFSRoom;
    }

    interface IUSER_EXIT_ROOM {
        user: Entities.SFSUser;
        room: Entities.SFSRoom;
    }

    interface IUSER_FIND_RESULT {
        users: Entities.SFSUser[];
    }

    interface IUSER_VARIABLES_UPDATE {
        user: Entities.SFSUser;
        changedVars: string[];
    }
    //#endregion
    //#region SmartFox

    // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.SmartFox.html
    export class SmartFox {

        /** @type {Managers.BuddyManager} Returns a reference to the Buddy Manager. */
        buddyManager: Managers.BuddyManager;
        /** @type {IconfigObj} Returns the client configuration object passed during the SmartFox instance creation. */
        config: IconfigObj;
        /** @type {boolean} Indicates whether the client-server messages console debug is enabled or not. */
        debug: boolean;
        /** @type {Entities.SFSRoom} Returns the object representing the last Room joined by the client, if any. */
        lastJoinedRoom: Entities.SFSRoom;
        /** @type {Logger} Returns a reference to the internal Logger instance used by SmartFoxServer 2X. */
        logger: Logger;
        /** @type {Entities.SFSUser} Returns the SFSUser object representing the client itself when connected to a SmartFoxServer 2X instance. */
        mySelf: Entities.SFSUser;
        /** @type {Managers.RoomManager} Returns a reference to the Room Manager. */
        roomManager: Managers.RoomManager;
        /** @type {string} Returns the unique session token of the client. */
        sessionToken: string;
        /** @type {Managers.UserManager} Returns a reference to the User Manager. */
        userManager: Managers.UserManager;
        /** @type {string} Returns the current version of the SmartFoxServer 2X JavaScript API. */
        version: string;

        /**
         * Creates a new SmartFox instance.
         * @param {IconfigObj} configObj The SmartFox instance can be configured through a configuration object with the following properties (all optional).
         */
        constructor(configObj?: IconfigObj);
        /**
         * Registers an event listener function that will receive notification of an event.
         * @param {string}   evtType  The type of event to listen to, among those available in the SFSevent and SFSBuddyEvent classes.
         * @param {Function} listener The listener function that processes the event. This function should accept an object as its only parameter, which in turn contains the event parameters.
         * @param {number}   scope    The object that acts as a context for the event listener: it is the object that acts as a "parent scope" for the callback function, thus providing context (i.e. access to variables and other mehtods) to the function itself.
         */
        addEventListener(evtType: string, listener: Function, scope: number): void;
        /**
         * Establishes a connection between the client and a SmartFoxServer 2X instance.
         * @param {string}  [host]   The address of the server to connect to.
         * @param {number}  [port]   The TCP port to connect to.
         * @param {boolean} [useSSL] Use an encrypted SSL connection.
         */
        connect(host?: string, port?: number, useSSL?: boolean): void;
        /**
         * Closes the connection between the client and the SmartFoxServer 2X instance.
         */
        disconnect(): void;
        /**
         * Enables the automatic realtime monitoring of the lag between the client and the server (round robin).
         * @param {boolean} enabled   The lag monitoring status: true to start the monitoring, false to stop it.
         * @param {number}  [interval=4]  The amount of seconds to wait between each query (recommended 3-4s).
         * @param {number}  [queueSize=10] The amount of values stored temporarily and used to calculate the average lag.
         */
        enableLagMonitor(enabled: boolean, interval?: number, queueSize?: number): void;
        /**
         * Returns a list of SFSRoom objects representing the Rooms currently joined by the client.
         * @return {Entities.SFSRoom[]} Returns: The list of SFSRoom objects representing the Rooms joined by the client.
         */
        getJoinedRooms(): Entities.SFSRoom[];
        /**
         * Returns the maximum size of messages allowed by the server.
         * @return {number} Returns: The maximum size of messages allowed by the server.
         */
        getMaxMessageSize(): number;
        /**
         * Retrieves a SFSRoom object from its id.
         * @param  {number}           id The id of the Room.
         * @return {Entities.SFSRoom}    Returns: The object representing the requested Room; null if no SFSRoom object with the passed id exists in the Rooms list.
         */
        getRoomById(id: number): Entities.SFSRoom;
        /**
         * Retrieves a SFSRoom object from its name.
         * @param  {string}           name The name of the Room.
         * @return {Entities.SFSRoom}      Returns: The object representing the requested Room; null if no SFSRoom object with the passed name exists in the Rooms list.
         */
        getRoomByName(name: string): Entities.SFSRoom;
        /**
         * Returns the list of SFSRoom objects representing the Rooms currently "watched" by the client.
         * @return {Entities.SFSRoom[]} Returns: The list of SFSRoom objects representing the Rooms available on the client.
         */
        getRoomList(): Entities.SFSRoom[];
        /**
         * Retrieves the list of Rooms which are part of the specified Room Group.
         * @param  {string}           groupId The name of the Group.
         * @return {Entities.SFSRoom}         Returns: The list of SFSRoom objects belonging to the passed Group.
         */
        getRoomListFromGroup(groupId: string): Entities.SFSRoom;
        /**
         * Indicates whether the client is connected to the server or not.
         * @return {boolean} Returns: true if the client is connected.
         */
        isConnected(): boolean;
        /**
         * Removes an event listener.
         * @param {string}   evtType  The type of event to remove, among those available in the SFSevent and SFSBuddyEvent classes.
         * @param {Function} listener The listener function to be removed.
         */
        removeEventListener(evtType: string, listener: Function): void;
        /**
         * Sends a request to the server.
         * @param {(Requests.BuddyList.AddBuddyRequest | Requests.BuddyList.BlockBuddyRequest | Requests.BuddyList.BuddyMessageRequest | Requests.BuddyList.GoOnlineRequest | Requests.BuddyList.InitBuddyListRequest | Requests.BuddyList.RemoveBuddyRequest | Requests.BuddyList.SetBuddyVariablesRequest | Requests.Game.CreateSFSGameRequest | Requests.Game.InvitationReplyRequest | Requests.Game.InviteUsersRequest | Requests.Game.QuickJoinGameRequest | Requests.MMO.SetUserPositionRequest | Requests.System.AdminMessageRequest | Requests.System.BanUserRequest | Requests.System.ChangeRoomCapacityRequest | Requests.System.ChangeRoomNameRequest | Requests.System.ChangeRoomPasswordStateRequest | Requests.System.CreateRoomRequest | Requests.System.ExtensionRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest | Requests.System.JoinRoomRequest | Requests.System.KickUserRequest | Requests.System.LeaveRoomRequest | Requests.System.LoginRequest | Requests.System.LogoutRequest | Requests.System.ModeratorMessageRequest | Requests.System.ObjectMessageRequest | Requests.System.PlayerToSpectatorRequest | Requests.System.PrivateMessageRequest | Requests.System.PublicMessageRequest | Requests.System.SetRoomVariablesRequest | Requests.System.SetUserVariablesRequest | Requests.System.SpectatorToPlayerRequest | Requests.System.SubscribeRoomGroupRequest | Requests.System.UnsubscribeRoomGroupRequest)} request Sends a request to the server.
         */
        send(request: Requests.BuddyList.AddBuddyRequest | Requests.BuddyList.BlockBuddyRequest | Requests.BuddyList.BuddyMessageRequest | Requests.BuddyList.GoOnlineRequest | Requests.BuddyList.InitBuddyListRequest | Requests.BuddyList.RemoveBuddyRequest | Requests.BuddyList.SetBuddyVariablesRequest | Requests.Game.CreateSFSGameRequest | Requests.Game.InvitationReplyRequest | Requests.Game.InviteUsersRequest | Requests.Game.QuickJoinGameRequest | Requests.MMO.SetUserPositionRequest | Requests.System.AdminMessageRequest | Requests.System.BanUserRequest | Requests.System.ChangeRoomCapacityRequest | Requests.System.ChangeRoomNameRequest | Requests.System.ChangeRoomPasswordStateRequest | Requests.System.CreateRoomRequest | Requests.System.ExtensionRequest | Requests.System.FindRoomsRequest | Requests.System.FindUsersRequest | Requests.System.JoinRoomRequest | Requests.System.KickUserRequest | Requests.System.LeaveRoomRequest | Requests.System.LoginRequest | Requests.System.LogoutRequest | Requests.System.ModeratorMessageRequest | Requests.System.ObjectMessageRequest | Requests.System.PlayerToSpectatorRequest | Requests.System.PrivateMessageRequest | Requests.System.PublicMessageRequest | Requests.System.SetRoomVariablesRequest | Requests.System.SetUserVariablesRequest | Requests.System.SpectatorToPlayerRequest | Requests.System.SubscribeRoomGroupRequest | Requests.System.UnsubscribeRoomGroupRequest): void;
        /**
         * Allows to specify custom client details that will be used to gather statistics about the client platform via the AdminTool's Analytics Module.
         * @param {string} platformId An identification string for the client, like the browser name for example.
         * @param {string} version    An additional string to describe the client version, like the browser version for example.
         */
        setClientDetails(platformId: string, version: string): void;
    }

    export interface IconfigObj {
        /** @type {string} The IP address or host name of the SmartFoxServer 2X instance to connect to. */
        host?: string;
        /** @type {number} The TCP port of the SmartFoxServer 2X instance to connect to. */
        port?: number;
        /** @type {boolean} Use an encrypted SSL connection. */
        useSSL?: boolean;
        /** @type {string} The Zone of the SmartFoxServer 2X instance to join during the login process. */
        zone?: string;
        /** @type {boolean} Indicates whether the client-server messages console debug should be enabled or not. */
        debug?: boolean;
    }
    //#endregion
    //#region Utils

    // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Utils.html
    namespace Utils {

        //#region ClientDisconnectionReason

        // http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Utils.ClientDisconnectionReason.html
        export class ClientDisconnectionReason {

            /** @type {string} Client was banned from the server. */
            static BAN: string;
            /** @type {string} Client was disconnected because it was idle for too long. */
            static IDLE: string;
            /** @type {string} Client was kicked out of the server. */
            static KICK: string;
            /** @type {string} The client manually disconnected from the server. */
            static MANUAL: string;
            /** @type {string} A generic network error occurred, and the client is unable to determine the cause of the disconnection. */
            static UNKNOWN: string;

        }
        //#endregion

    }
    //#endregion

}
//#endregion
