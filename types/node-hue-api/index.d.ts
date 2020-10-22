// Type definitions for node-hue-api 2.3.0
// Project: https://github.com/peter-murray/node-hue-api
// Definitions by: wind-rider <https://github.com/wind-rider/>, Frederic Morel <https://github.com/fjmorel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

    //Not documented because it says it's broken
    //export function connect(config) : HueApi;

    //TODO: document lightState, scheduledEvent, scene, timer
    //export lightState: lightState,
    //export scheduledEvent: scheduledEvent,
    //export scene: scene,
    //export timer: timer,

    /**
     * Will locate the Philips Hue Devices on the network. Depending upon the speed and size of the network the timeout
     * may need to be adjusted to locate the Hue Bridge.
     * 
     * @param timeout The maximum time to wait for Hue Devices to be located. If not specified will use the default of 5 seconds.
     * @return A promise that will resolve the Hue Bridges as an Array of {"id": {String}, "ipaddress": {String}} objects.
     */
    export function upnpSearch(timeout: number): IUpnpSearchResultItem[];
    //Not documented because it's deprecated
    //export function searchForBridges(timeout: number): IUpnpSearchResultItem[];

    /**
     * Uses the http://www.meethue.com/api/nupnp call to search for any bridges locally on the network. This lookup can be
     * significantly faster than issuing search requests in the {locateBridges} function.
     * 
     * @param cb An option callback function that will be informed of results.
     * @returns {Q.promise} A promise that will resolve the addresses of the bridges, or {null} if a callback was provided.
     */
    export function nupnpSearch(): Promise<IUpnpSearchResultItem[]>;
    //Not documented because it's deprecated
    //export function locateBridges(): Promise<IUpnpSearchResultItem[]>;

    /* An Error Type for API related errors when calling the Philips Hue API.

     * @param error The error object returned from the request.
     * @constructor
     */
    export class ApiError extends Error {

        name: string;
        message: string;
        type: any;
        address: string;

        constructor(error: Object);
    }

    export class HueApi {

        /*
         * Constructor used for searching for bridges and registering users
         */
        constructor();

        /**
         * Creates an instance of HueApi.
         * @param {string} host Address of Hue bridge
         * @param {string} username Application username for Hue bridge
         * @param {number} [timeout]
         * @param {number} [port]
         */
        constructor(host: string, username: string, timeout?: number, port?: number);

        /**
         * Gets the version data for the Philips Hue Bridge.
         *
         * @param cb An optional callback function if you don't want to be informed via a promise.
         * @returns {Q.promise} A promise will be provided that will resolve to the version data for the bridge, or {null} if a
         * callback was provided.
         */
        getVersion(): Promise<IBridgeVersion>;
        //getVersion(cb: (err: NodeJS.ErrnoException, data: IBridgeVersion) => void): void;
        version(): Promise<IBridgeVersion>;
        //version(cb: (err: NodeJS.ErrnoException, data: IBridgeVersion) => void): void;

        /**
         * Loads the description for the Philips Hue.
         *
         * @param cb An optional callback function if you don't want to be informed via a promise.
         * @return {Q.promise} A promise that will be provided with a description object, or {null} if a callback was provided.
         */
        description(): Promise<IBridgeDescription>;
        //description(cb: (err: NodeJS.ErrnoException, data: IBridgeDescription) => void): void;
        getDescription(): Promise<IBridgeDescription>;
        //getDescription(cb: (err: NodeJS.ErrnoException, data: IBridgeDescription) => void): void;

        /**
         * Reads the bridge configuration and returns it as a JSON object.
         *
         * @param cb An optional callback function to use if you do not want to use the promise for results.
         * @return {Q.promise} A promise with the result, or <null> if a callback function was provided.
         */
        config(): Promise<IBridgeConfig>;
        //config(cb: (err: NodeJS.ErrnoException, data: IBridgeConfig) => void): void;
        getConfig(): Promise<IBridgeConfig>;
        //getConfig(cb: (err: NodeJS.ErrnoException, data: IBridgeConfig) => void): void;

        /**
         * Obtains the complete state for the Bridge. This is considered to be a very expensive operation and should not be invoked
         * frequently. The results detail all config, users, groups, schedules and lights for the system.
         *
         * @param cb An optional callback function if you don't want to be informed via a promise.
         * @returns {Q.promise} A promise with the result, or {null} if a callback function was provided
         */
        getFullState(): Promise<IState>;
        //getFullState(cb: (err: NodeJS.ErrnoException, data: IState) => void): void;
        fullState(): Promise<IState>;
        //fullState(cb: (err: NodeJS.ErrnoException, data: IState) => void): void;

        /**
         * Allows a new user/device to be registered with the Philips Hue Bridge. This will return the name of the user that was
         * created by the function call.
         *
         * This function does not require the HueApi to have been initialized with a host or username. It does however require
         * the end user to have pressed the link button on the bridge, before invoking this function.
         *
         * @param host The hostname or IP Address of the Hue Bridge.
         * @param deviceDescription The description for the user/device that is being registered. This is a human readable
         * description of the user/device. If one is not provided then a default will be set.
         * @param cb An optional callback function to use if you do not want a promise returned.
         * @return {Q.promise} A promise with the result, or <null> if a callback was provided.
         */
        registerUser(host: string, deviceDescription?: string): Promise<string>;
        //registerUser(host: string, deviceDescription?: string, cb: (err: NodeJS.ErrnoException, data: string) => void): void;
        createUser(host: string, deviceDescription?: string): Promise<string>;
        //createUser(host: string, deviceDescription?: string, cb: (err: NodeJS.ErrnoException, data: string) => void): void;

        /**
         * Presses the Link Button on the Bridge (without the user actually having to do it). If successful then {true} will be
         * returned as the result.
         *
         * @param cb An optional callback function to use if you do not want to use the promise returned.
         * @return {Q.promise} A promise with the result, or <null> if a callback was provided.
         */
        pressLinkButton(): Promise<boolean>;
        //pressLinkButton(cb: (err: NodeJS.ErrnoException, data: boolean) => void): void;


        /**
         * Deletes an existing user from the Phillips Hue Bridge.
         *
         * @param username The username of the user to delete.
         * @param cb An optional callback function to use if you do not want to get the result via a promise chain.
         * @returns {Q.promise} A promise with the result of the deletion, or <null> if a callback was provided.
         */
        deleteUser(username: string): Promise<boolean>;
        //deleteUser(username: string, cb: (err: NodeJS.ErrnoException, data: boolean) => void): void;
        unregisterUser(username: string): Promise<boolean>;
        //unregisterUser(username: string, cb: (err: NodeJS.ErrnoException, data: boolean) => void): void


        /**
         * Obtain a list of registered "users" or "devices" that can interact with the Philips Hue.
         *
         * @param cb An optional callback function if you do not want to use the promise to obtain the results.
         * @return A promise that will provide the results of registered users, or <null> if a callback was provided.
         */
        registeredUsers(): Promise<IRegisteredUser>;
        //registeredUsers(cb: (err: NodeJS.ErrnoException, data: IRegisteredUser) => void): void;
        getRegisteredUsers(): Promise<IRegisteredUser>;
        //getRegisteredUsers(cb: (err: NodeJS.ErrnoException, data: IRegisteredUser) => void): void;


        /**
         * Obtains the details of the individual sensors that are attached to the Philips Hue.
         *
         * @param cb An optional callback function to use if you do not want a promise returned.
         * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
         */
        sensors(): Promise<ISensorsApiResponse>;
        //sensors(cb: (err: NodeJS.ErrnoException, data: ISensorsApiResponse) => void): void;
        getSensors(): Promise<ISensorsApiResponse>;
        //getSensors(cb: (err: NodeJS.ErrnoException, data: ISensorsApiResponse) => void): void;

        /**
         * Obtains the details of the individual lights that are attached to the Philips Hue.
         *
         * @param cb An optional callback function to use if you do not want a promise returned.
         * @return A promise that will be provided with the lights object, or {null} if a callback function was provided.
         */
        lights(): Promise<ILightsApiResponse>;
        //lights(cb: (err: NodeJS.ErrnoException, data: ILightsApiResponse) => void): void;
        getLights(): Promise<ILightsApiResponse>;
        //getLights(cb: (err: NodeJS.ErrnoException, data: ILightsApiResponse) => void): void;


        /**
         * Obtains the status of the specified light.
         *
         * @param id The id of the light as an integer, this value will be parsed into an integer value so can be a {String} or
         * {Number} value.
         * @param cb An optional callback function to use if you do not want a promise returned.
         * @return A promise that will be provided with the light status, or {null} if a callback function was provided.
         */
        lightStatus(id: string | number): Promise<ILight>;
        //lightStatus(id: string|number, cb: (err: NodeJS.ErrnoException, data: ILight) => void): void;
        getLightStatus(id: string | number): Promise<ILight>;
        //getLightStatus(id: string|number, cb: (err: NodeJS.ErrnoException, data: ILight) => void): void;

        lightStatusWithRGB(id: string | number): Promise<ILight>;
        //lightStatusWithRGB(id: string|number, cb: (err: NodeJS.ErrnoException, data: ILight) => void): void;
        getLightStatusWithRGB(id: string | number): Promise<ILight>;
        //getLightStatusWithRGB(id: string|number, cb: (err: NodeJS.ErrnoException, data: ILight) => void): void;


        /**
         * Obtains the new lights found by the bridge, dependant upon the last search.
         *
         * @param cb An optional callback function to use if you do not want a promise returned.
         * @return A promise that will be provided with the new lights search result, or {null} if a callback function was provided.
         */
        newLights(): Promise<INewLightsResponse>;
        //newLights(cb: (err: NodeJS.ErrnoException, data: INewLightsResponse) => void): void;
        getNewLights(): Promise<INewLightsResponse>;
        //getNewLights(cb: (err: NodeJS.ErrnoException, data: INewLightsResponse) => void): void;


        /**
         * Starts a search for new lights.
         *
         * @param cb An optional callback function to use if you do not want a promise returned.
         * @return A promise that will be provided with the new lights, or {null} if a callback function was provided.
         */
        searchForNewLights(): Promise<boolean>;
        //searchForNewLights(cb: (err: NodeJS.ErrnoException, data: boolean) => void): void;


        /**
         * Sets the name of a light on the Bridge.
         *
         * @param id The ID of the light to set the name for.
         * @param name The name to apply to the light.
         * @param cb An optional callback function to use if you do not want a promise returned.
         * @return A promise that will be provided with the results of setting the name, or {null} if a callback function was provided.
         */
        setLightName(id: string | number, name: string): Promise<boolean>;
        //setLightName(id: string|number, name: string, cb: (err: NodeJS.ErrnoException, data: boolean) => void): void;

        /**
         * Sets the light state to the provided values.
         *
         * @param id The id of the light which is an integer or a value that can be parsed into an integer value.
         * @param stateValues {lightState.State} containing the properties and values to set on the light.
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will set the specified state on the light, or {null} if a callback was provided.
         */
        setLightState(id: string | number, stateValues: lightState.State | Object): Promise<boolean>;
        //setLightState(id: string|number, stateValues: lightState.State | Object, cb: (err: NodeJS.ErrnoException, data: boolean) => void): void;


        /**
         * Sets the light state to the provided values for an entire group.
         *
         * @param id The id of the group which is an integer or a value that can be parsed into an integer value.
         * @param stateValues {lightState.State} containing the properties and values to set on the light.
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return {Q.promise} A promise that will set the specified state on the group, or {null} if a callback was provided.
         */
        setGroupLightState(id: string | number, stateValues: lightState.State | Object): Promise<boolean>;
        //setGroupLightState(id: string|number, stateValues: lightState.State | Object, cb: (err: NodeJS.ErrnoException, data: boolean) => void): void;


        /**
         * Obtains all the groups from the Hue Bridge as an Array of {id: {*}, name: {*}} objects.
         *
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will obtain the groups, or {null} if a callback was provided.
         */
        groups(): Promise<ILightGroup[]>;
        //groups(cb: (err: NodeJS.ErrnoException, data: ILightGroup) => void): void;
        getGroups(): Promise<ILightGroup[]>;
        //getGroups(cb: (err: NodeJS.ErrnoException, data: ILightGroup) => void): void;
        getAllGroups(): Promise<ILightGroup[]>;
        //getAllGroups(cb: (err: NodeJS.ErrnoException, data: ILightGroup) => void): void;


        /**
         * Obtains all the Luminaires from the Hue Bridge as an Array of {id: {*}, name: {*}} objects.
         *
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will obtain the luminaires, or {null} if a callback was provided.
         */
        luminaires(): Promise<ILightGroup[]>;
        //luminaires(cb: (err: NodeJS.ErrnoException, data: ILightGroup) => void): void;
        getLuminaires(): Promise<ILightGroup[]>;
        //getLuminaires(cb: (err: NodeJS.ErrnoException, data: ILightGroup) => void): void;

        /**
         * Obtains all the LightSources from the Hue Bridge as an Array of {id: {*}, name: {*}} objects.
         *
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will obtain the lightsources, or {null} if a callback was provided.
         */
        lightSources(): Promise<ILightGroup[]>;
        //lightSources(cb: (err: NodeJS.ErrnoException, data: ILightGroup) => void): void;
        getLightSources(): Promise<ILightGroup[]>;
        //getLightSources(cb: (err: NodeJS.ErrnoException, data: ILightGroup) => void): void;

        /**
         * Obtains all the LightGroups from the Hue Bridge as an Array of {id: {*}, name: {*}} objects.
         *
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will obtain the LightGroups, or {null} if a callback was provided.
         */
        lightGroups(): Promise<ILightGroup[]>;
        //lightGroups(cb: (err: NodeJS.ErrnoException, data: ILightGroup) => void): void;
        getLightGroups(): Promise<ILightGroup[]>;
        //getLightGroups(cb: (err: NodeJS.ErrnoException, data: ILightGroup) => void): void;


        /**
         * Obtains the details for a specified group in a format of {id: {*}, name: {*}, lights: [], lastAction: {*}}.
         *
         * @param id {Number} or {String} which is the id of the group to get the details for.
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will set the specified state on the light, or {null} if a callback was provided.
         */
        getGroup(id: string | number): Promise<ILightGroup>;
        group(id: string | number): Promise<ILightGroup>;

        /**
         * Updates a light group to the specified name and/or lights ids. The name and light ids can be specified independently or
         * together when calling this function.
         *
         * @param id The id of the group to update the name and/or light ids associated with it.
         * @param name {String} The name of the group
         * @param lightIds {Array} An array of light ids to be assigned to the group. If any of the ids are not present in the
         * bridge the creation will fail with an error being produced.
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise with a result of <true> if the update was successful, or null if a callback was provided.
         */

        updateGroup(id: string | number, name: string, lightIds: string[]): Promise<boolean>;
        updateGroup(id: string | number, name: string, lightIds: string[], cb: (err: NodeJS.ErrnoException, data: boolean) => void): void;

        /**
         * Creates a new light Group.
         *
         * @param name The name of the group that we are creating, limited to 16 characters.
         * @param lightIds {Array} of ids for the lights to be included in the group.
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return {*} A promise that will return the id of the group that was created, or null if a callback was provided.
         */
        createGroup(name: string, lightIds: string[]): Promise<string>;
        //createGroup(name: string, lightIds: string[], cb: (err: NodeJS.ErrnoException, data: string) => void): void;

        /**
         * Deletes a group with the specified id, returning <true> if the action was successful.
         *
         * @param id The id of the group to delete.
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return {*} A promise that will return <true> if the deletion was successful, or null if a callback was provided.
         */
        deleteGroup(id: string | number): Promise<boolean>;
        //deleteGroup(id: string|number, cb: (err: NodeJS.ErrnoException, data: boolean) => void): void;

        /**
         * Gets the schedules on the Bridge, as an array of {"id": {String}, "name": {String}} objects.
         *
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will return the results or <null> if a callback was provided.
         */
        schedules(): Promise<ISchedule[]>;
        //schedules(cb: (err: NodeJS.ErrnoException, data: ISchedule[]) => void): void;
        getSchedules(): Promise<ISchedule[]>;
        //getSchedules(cb: (err: NodeJS.ErrnoException, data: ISchedule[]) => void): void;

        /**
         * Gets the specified schedule by id, which is in an identical format the the Hue API documentation, with the addition
         * of an "id" value for the schedule.
         *
         * @param id The id of the schedule to retrieve.
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @returns A promise that will return the results or <null> if a callback was provided.
         */
        schedule(id: string | number): Promise<ISchedule>;
        //schedule(id: string | number, cb: (err: NodeJS.ErrnoException, data: ISchedule) => void): void;
        getSchedule(id: string | number): Promise<ISchedule>;
        //getSchedule(id: string | number, cb: (err: NodeJS.ErrnoException, data: ISchedule) => void): void;

        /**
         * Creates a one time scheduled event. The results from this function is the id of the created schedule. The bridge only
         * supports 100 schedules, so once they are triggered, they are removed from the bridge.
         *
         * @param schedule {ScheduledEvent}
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will return the id value of the schedule that was created, or <null> if a callback was provided.
         */
        scheduleEvent(schedule: ISchedule): Promise<string>;
        //scheduleEvent(schedule: ISchedule, cb: (err: NodeJS.ErrnoException, data: string) => void): void;
        createSchedule(schedule: ISchedule): Promise<string>;
        //createSchedule(schedule: ISchedule, cb: (err: NodeJS.ErrnoException, data: string) => void): void;

        /**
         * Deletes a schedule by id, returning {true} if the deletion was successful.
         *
         * @param id of the schedule
         * @param cb An option callback function to use if you do not want to use a promise for the results.
         * @return {Q.promise} A promise that will return the result of the deletion, or <null> if a callback was provided.
         */
        deleteSchedule(id: string | number): Promise<Object>;
        //deleteSchedule(id: string | number, cb: (err: NodeJS.ErrnoException, data: Object) => void): void;

        /**
         * Updates an existing schedule event with the provided details.
         *
         * @param id The id of the schedule being updated.
         * @param schedule The object containing the details to update for the existing schedule event.
         * @param cb An optional callback function to use if you do not want to deal with a promise for the results.
         * @return {Q.promise} A promise that will return the result, or <null> if a callback was provided.
         */
        updateSchedule(id: string | number, schedule: ISchedule): Promise<ISchedule>;
        //updateSchedule(id: string | number, schedule: ISchedule, cb: (err: NodeJS.ErrnoException, data: ISchedule) => void): void;

        /**
         * Gets the scenes on the Bridge, as an array of {"id": {String}, "name": {String}, "lights": {Array}, "active": {Boolean}}
         * objects.
         *
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will return the results or <null> if a callback was provided.
         */
        scenes(): Promise<IScene[]>;
        getScenes(): Promise<IScene[]>;

        /**
         * Obtains a scene by a given id.
         * @param sceneId {String} The id of the scene to obtain.
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will return the scene or <null> if a callback was provided.
         */
        scene(id: string | number): Promise<IScene>;
        //scene(id: string | number, cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;
        getScene(id: string | number): Promise<IScene>;
        //getScene(id: string | number, cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;

        /**
         * Deletes a Scene (that is stored inside the bridge, not in the lights).
         * @param sceneId The ID for the scene to delete
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @returns {*} A promise that will return the result from deleting the scene or null if a callback was provided.
         */
        deleteScene(id: string | number): Promise<Object>;
        //deleteScene(id: string | number, cb: (err: NodeJS.ErrnoException, data: Object) => void): void;

        /**
         * Creates a new Scene.
         * When the scene is created, it will store the current state of the lights and will use those "current" settings
         * when the scene is recalled/activated later.
         *
         * There are two variants to this function, one that accepts lightIds and a name and another that takes a Scene object.
         * The former is to maintain backwards compatibility with the 1.2.x version of this library.
         * 
         * @param scene Scene configuration to create
         * @param lightIds {Array} of ids for the lights to be included in the scene.
         * @param name {String} The name of the scene to be created. If one is not provided, then the id of the scene will become the name.
         *
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return {*} A promise that will return the id of the scene that was created (as well as the values that make up the scene),
         * or null if a callback was provided.
         */
        createScene(scene: IScene): Promise<IScene>;
        createScene(lightIds: string[] | number[], name: string): Promise<IScene>;
        //createScene(scene: IScene, cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;
        //createScene(lightIds: string[] | number[], cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;

        /**
         * Provides backwards compatibility for < 1.11.x versions of the Hue Bridge Firmware.
         * @param lightIds Lights to include in the scene
         * @param name Name to use for the scene
         * @param cb An optional callback function to use if you do not want to use a promise chain for the results.
         * @return {*} A promise that will return the id of the scene that was created (as well as the values that make up the scene),
         * or null if a callback was provided.
         */
        createBasicScene(lightIds: string[] | number[], name: string): Promise<IScene>;
        //createBasicScene(lightIds: string[] | number[], name: string, cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;

        /**
         * Provides scene creation for >= 1.11.x firmware versions of the Hue Bridge.
         * @param scene The Scene object containing the details of the scene to be created.
         * @param cb An optional callback function to use if you do not want to use a promise chain for the results.
         * @return {*} A promise that will return the id of the scene that was created (as well as the values that make up the scene),
         * or null if a callback was provided.
         */
        createAdvancedScene(scene: IScene): Promise<IScene>;
        //createAdvancedScene(scene: IScene, cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;

        /**
         * Update the lights and/or name associated with a scene (or will create a new one if the
         * sceneId is not present in the bridge).
         *
         * @param sceneId {String} The id for the scene in the bridge
         * @param scene The configuration of the scene with the details to modify, which can be either a name or an array of
         * light ids.
         * @param storeLightState {Boolean} flag to save the current light state of the lights in the scene.
         *
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return {*} A promise that will return the id of the scene that was updated and the light ids that are now set,
         * or null if a callback was provided.
         */
        updateScene(sceneId: string | number, scene: IScene, storeLightState: boolean): Promise<IScene>;
        //updateScene(sceneId: string | number, scene: IScene, storeLightState: boolean, cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;
        modifyScene(sceneId: string | number, scene: IScene, storeLightState: boolean): Promise<IScene>;
        //modifyScene(sceneId: string | number, scene: IScene, storeLightState: boolean, cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;

        /**
         * Modifies the light state of one of the lights in a scene.
         *
         * @param sceneId The scene id, which if it does not exist a new scene will be created.
         * @param lightId integer The id of light that is having the state values set.
         * @param stateValues {IState} containing the properties and values to set on the light.
         *
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will return the state values on the light, or {null} if a callback was provided.
         */
        setSceneLightState(sceneId: string | number, lightId: string | number, stateValues: lightState.State | Object): Promise<IScene>;
        //setSceneLightState(sceneId: string | number, lightId: string | number, stateValues: lightState.State | Object, cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;
        updateSceneLightState(sceneId: string | number, lightId: string | number, stateValues: lightState.State | Object): Promise<IScene>;
        //updateSceneLightState(sceneId: string | number, lightId: string | number, stateValues: lightState.State | Object, cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;
        modifySceneLightState(sceneId: string | number, lightId: string | number, stateValues: lightState.State | Object): Promise<IScene>;
        //modifySceneLightState(sceneId: string | number, lightId: string | number, stateValues: lightState.State | Object, cb: (err: NodeJS.ErrnoException, data: IScene) => void): void;

        /**
         * Helper-function that recalls a scene for a group using setGroupLightState. Reason for existence is simplicity for
         * user.
         *
         * @param sceneId The id of the scene to activate, which is an integer or a value that can be parsed into an integer value.
         * @param groupIdFilter An optional group filter to apply to the scene, to select a sub set of the lights in the scene. This can
         * be {null} or {undefined} to not apply a filter.
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return A promise that will set activate the scene, or {null} if a callback was provided.
         */
        activateScene(sceneId: string | number, groupIdFilter?: string | number): Promise<boolean>;
        //activateScene(sceneId: string|number, groupIdFilter: string|number, cb: (err: NodeJS.ErrnoException, data: boolean) => void): void;
        recallScene(sceneId: string | number, groupIdFilter?: string | number): Promise<boolean>;
        //recallScene(sceneId: string|number, groupIdFilter: string|number, cb: (err: NodeJS.ErrnoException, data: boolean) => void): void;

        /**
         * Obtains all the allowed timezones from the bridge.
         *
         * @param cb An optional callback function to use if you do not want to use a promise for the results.
         * @return {*} A promise that will return the id of the scene that was created, or null if a callback was provided.
         */
        getTimezones(): Promise<string[]>;
        //getTimezones(cb: (err: NodeJS.ErrnoException, data: string[]) => void): void;
        timezones(): Promise<string[]>;
        //timezones(cb: (err: NodeJS.ErrnoException, data: string[]) => void): void;

    }

    /**
     * Alias for HueApi
     */
    export type BridgeApi = HueApi;

    /**
     * Alias for HueApi
     */
    export type api = HueApi;

    /*
     * Interface declarations 
     */

    export interface IBridgeVersion {
        name: string,
        version: {
            api: string,
            software: string
        }
    }

    export interface IUpnpSearchResultItem {
        id: string,
        ipaddress: string
    }

    export interface IBridgeIcon {
        mimetype: string,
        height: string,
        width: string,
        depth: string,
        url: string
    }

    export interface IBridgeDescription {
        version: {
            major: string,
            minor: string
        },
        url: string,
        name: string,
        manufacturer: string,
        model: {
            name: string,
            description: string,
            number: string,
            serial: string,
            udn: string
        },
        icons?: IBridgeIcon[]
    }

    export type BackupStatus = "idle" | "startmigration" | "fileready_disabled" | "prepare_restore" | "restoring";

    export interface IBridgeConfig {
        name: string,
        zigbeechannel: number,
        bridgeid: string,
        mac: string,
        dhcp: boolean,
        ipaddress: string,
        netmask: string,
        gateway: string,
        proxyaddress: string,
        proxyport: number,
        UTC: Date,
        localtime: Date,
        timezone: string,
        modelid: string,
        swversion: string,
        apiversion: string,
        swupdate: {
            updatestate: number,
            checkforupdate: boolean,
            devicetypes: {
                bridge: boolean,
                lights: string[],
                sensors: string[]
            },
            url: string,
            text: string,
            notify: boolean
        },
        linkbutton: boolean,
        portalservices: boolean,
        portalconnection: string,
        portalstate: {
            signedon: boolean,
            incoming: boolean,
            outgoing: boolean,
            communication: string
        },
        factorynew: boolean,
        replacesbridgeid?: string,
        backup: {
            status: BackupStatus,
            errorcode: number
        },
        whitelist: {
            [key: string]: {
                "last use date": Date,
                "create date": Date,
                name: string
            }
        }
    }

    /**
     * 3 methods to set color of light, in order of precedence if multiple are set
     * 
     * xy: Coordinates in CIE color space,
     * ct: Color Temperature,
     * hs: Hue and Saturation
     */
    export type ColorMode = "xy" | "ct" | "hs";

    /**
     * Alert command
     * 
     * none = stop,
     * select = flash once,
     * lselect = flash for 15 seconds
     */
    export type LightAlert = "none" | "select" | "lselect";

    export type LightEffect = "none" | "colorloop";

    /**
     * If not set when creating a group, default is LightGroup
     */
    export type LightGroupType = "LightGroup" | "Room" | "Luminaire" | "LightSource";

    /**
     * If not set when creating a group, default is Other
     */
    export type RoomType =
        "Living room" | "Kitchen" | "Dining" |
        "Bedroom" | "Kids bedroom" | "Bathroom" |
        "Nursery" | "Recreation" | "Office" |
        "Gym" | "Hallway" | "Toilet" |
        "Front door" | "Garage Terrace" | "Garden" |
        "Driveway" | "Carport" | "Other";

    export interface IScene {
        id: string;
        name: string;
        lights: number[];
    }

    export interface ILightGroup {
        id: string,
        name: string,
        type: LightGroupType,
        class?: RoomType,
        action?: {
            on: boolean,
            bri: number,
            hue: number,
            sat: number,
            xy: [number, number],
            ct: number,
            effect: LightEffect,
            colormode: ColorMode
        },
        lights?: string[]

    }

    export interface ILight {
        id?: string,
        manufacturername: string,
        uniqueid: string,
        state: {
            rgb?: number[],
            on: boolean,
            bri: number,
            hue?: number,
            sat?: number,
            xy?: [number, number],
            ct?: number,
            alert: LightAlert,
            effect?: LightEffect,
            colormode?: ColorMode,
            reachable: boolean
        },
        type: string,
        name: string,
        modelid: string,
        swversion: string,
        pointsymbol?: {
            "1": string,
            "2": string,
            "3": string,
            "4": string,
            "5": string,
            "6": string,
            "7": string,
            "8": string
        }
    }

    export interface ILightsApiResponse {
        lights: ILight[]
    }

    //State and config depend on sensor type
    //TODO: definitions for different sensor types
    export interface ISensor {
        id?: string,
        manufacturername: string,
        uniqueid?: string,
        state: {
            [key: string]: number | string;
            lastupdated: string;
        };
        config: {
            [key: string]: number | string;
        };
        type: string,
        name: string,
        modelid: string,
        swversion: string,
    }

    export interface ISensorsApiResponse {
        sensors: ISensor[]
    }

    export interface ISchedule {
        name: string,
        description: string,
        command: {
            address: string,
            body: {
                on: boolean
            },
            method: string
        },
        time: Date
    }

    export interface IState {
        lights: {
            [key: string]: ILight
        },
        groups: {
            [key: string]: ILightGroup
        },
        config: IBridgeConfig,
        schedules: {
            [key: string]: ISchedule
        }
    }

    export interface IRegisteredUser {
        name: string,
        username: string,
        created: Date,
        accessed: Date
    }

    export interface INewLightsResponse {
        lastscan: string,
        [key: string]: string | { name: string }
    }

    /*
     * lightState part
     */

    export module lightState {

        class State {
            payload(): Object;

            /**
             * Resets/Clears the properties that have been set in the light state object.
             * @returns {State}
             */
            reset(): State;
            clear(): State;

            /**
             * Creates a copy of the state object
             * @returns {State}
             */
            copy(): State;

            /**
             * Sets the strict state for setting parameters for the light state.
             * @param strict
             * @returns {State}
             */
            strict(): State;

            isStrict(): boolean;

            /**
             * Sets the on state
             * @param on The state (true for on, false for off). If this parameter is not specified, it is assumed to be true.
             * @returns {State}
             */
            on(on?: boolean): State;

            /**
             * Adds the bri state
             * @param value The hue bri value, 0 to 254.
             * @return {State}
             */
            bri(value: number): State;

            /**
             * Adds the hue for the color desired.
             * @param hue The hue value is a wrapping value between 0 and 65535. Both 0 and 65535 are red, 25500 is green and 46920 is blue.
             * @returns {State}
             */
            hue(hue: number): State;

            /**
             * The saturation of the color for the bulb, 0 being the least saturated i.e. white.
             * @param saturation The saturation value 0 to 255
             * @returns {State}
             */
            sat(saturation: number): State;

            /**
             * Adds the xy values
             * @param x The x value ranged from 0 to 1, or an Array of [x, y] values
             * @param y The y value ranged from 0 to 1
             * @return {State}
             */
            xy(x: number, y: number): State;

            /**
             * Adds the Mired Color Temperature
             * @param colorTemp The Color Temperature between 153 to 500 inclusive.
             * @returns {State}
             */
            ct(colorTemp: number): State;

            /**
             * Adds the alert state
             * @param value A String value representing the alert state, "none", "select", "lselect".
             * @return {State}
             */
            alert(value: LightAlert): State;

            /**
             * Adds an effect for the bulb.
             * @param value The type of effect, currently supports "none" and "colorloop".
             * @returns {State}
             */
            effect(value: LightEffect): State;

            /**
             * Adds a transition to the desired state.
             * @param value This is given as a multiple of 100ms and defaults to 4 (400ms).
             * @return {State}
             */
            transitiontime(value: number): State;

            /**
             * Increments/Decrements the brightness value for the lights.
             * @param value An amount to change the current brightness by, -254 to 254.
             * @returns {State}
             */
            bri_inc(value: number): State;

            /**
             * Increments/Decrements the saturation value for the lights.
             * @param value An amount to change the current saturation by, -254 to 254.
             * @returns {State}
             */
            sat_inc(value: number): State;

            /**
             * Increments/Decrements the Hue value for the lights.
             * @param value An amount to change the current hue by, -65534 to 65534.
             * @returns {State}
             */
            hue_inc(value: number): State;

            /**
             * Increments/Decrements the color temperature value for the lights.
             * @param value An amount to change the current color temperature by, -65534 to 65534.
             * @returns {State}
             */
            ct_inc(value: number): State;

            /**
             * Increments/Decrements the XY value for the lights.
             * @param value An amount to change the current XY by, -0.5 to 0.5.
             * @returns {State}
             */
            xy_inc(value: number): State;

            scene(value: string): State;


            ///////////////////////////////////////////////////////////////////////
            // Convenience functions

            turnOn(): State;

            off(): State;
            turnOff(): State;

            /**
             * Set the brightness as a percent value
             * @param percentage The brightness percentage value between 0 and 100.
             * @returns {State}
             */
            brightness(percentage: number): State;

            incrementBrightness(value: number): State;

            colorTemperature(value: number): State;
            colourTemperature(value: number): State;
            colorTemp(value: number): State;
            colourTemp(value: number): State;

            incrementColorTemp(value: number): State;
            incrementColorTemperature(value: number): State;
            incrementColourTemp(value: number): State;
            incrementColourTemperature(value: number): State;

            incrementHue(value: number): State;

            incrementXY(value: number): State;

            saturation(percentage: number): State;

            incrementSaturation(value: number): State;

            shortAlert(): State;
            alertShort(): State;

            longAlert(): State;
            alertLong(): State;

            transitionTime(value: number): State;
            /**
             * Sets the transition time in milliseconds.
             * @param milliseconds The number of milliseconds for the transition
             * @returns {State}
             */
            transition(milliseconds: number): State;

            transitionSlow(): State;

            transitionFast(): State;

            transitionInstant(): State;

            transitionDefault(): State;

            /**
             * Builds the White state for a lamp
             * @param colorTemp The temperature, a value of 153-500
             * @param brightPercentage The percentage of brightness 0-100
             * @return {State}
             */
            white(colorTemp: number, brightPercentage: number): State;

            /**
             * Adds the HSL values
             * @param hue The hue value in degrees 0-360
             * @param saturation The saturation percentage 0-100
             * @param luminosity The luminosity percentage 0-100
             * @return {State}
             */
            hsl(hue: number, saturation: number, luminosity: number): State;

            /**
             * Adds the HSB values
             * @param hue The hue value in degrees 0-360
             * @param saturation The saturation percentage 0-100
             * @param brightness The brightness percentage 0-100
             * @return {State}
             */
            hsb(hue: number, saturation: number, brightness: number): State;

            /**
             * Adds the rgb color to the state. This requires knowledge of the light type to be able to convert it into
             * an actual color that the map can display.
             *
             * @param r The amount of Red 0-255, or an {Array} or r, g, b values.
             * @param g The amount of Green 0-255
             * @param b The amount of Blue 0-255
             * @return {State}
             */
            rgb(r: number, g: number, b: number): State;

            hasRGB(): boolean;

            colorLoop(): State;
            colourLoop(): State;
            effectColorLoop(): State;
            effectColourLoop(): State;

            /**
             * Creates a copy of the State if there is an RGB value set.
             *
             * @param modelid The model ID of the light(s) to convert the rgb value for.
             *
             * @returns {State} If there is an RGB value set, then a copy of the state, with the rgb value applied based on the
             * lamp model provided. If there is no RGB value set, then {null} will be returned.
             */
            applyRGB(modelid: string): State;
        }

        function create(values?: Object): State;
        function isLightState(obj: Object): obj is State;
    }
