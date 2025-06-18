// #region API Types

/**
 * This is a wrapper "namespace" for the various types used by the UAirship module.
 */
declare namespace UrbanAirshipPlugin {
    // #region API Definitions

    interface UrbanAirshipStatic {
        /**
         * The enumeration values for use with setNotificationTypes().
         */
        notificationType: {
            none: number;
            badge: number;
            sound: number;
            alert: number;
        };

        /**
         * Enables or disables user notifications on the device.
         * This will prompt users to opt-in to notifications on iOS.
         *
         * @param enabled Set to true to enable notifications, false to disable.
         * @param callback The function to call on completion.
         */
        setUserNotificationsEnabled(enabled: boolean, callback: (status: string) => void): void;

        /**
         * Checks if user notifications are enabled or not.
         *
         * @param callback The function to call on completion.
         */
        isUserNotificationsEnabled(callback: (enabled: boolean) => void): void;

        /**
         * Get the push identifier for the device. The channel ID is used to send
         * messages to the device for testing, and is the canonical identifier for
         * the device in Urban Airship.
         *
         * @param callback The function to call on completion.
         */
        getChannelID(callback: (id: string) => void): void;

        /**
         * Returns the push message object that contains the data associated with a
         * push notification. The extras dictionary can contain arbitrary key/value
         * data that you use in your application.
         *
         * @param clear Set to true to clear the notification.
         * @param callback The function to call on completion.
         */
        getLaunchNotification(clear: boolean, callback: (push: UrbanAirshipPlugin.PushEvent) => void): void;

        /**
         * Enables or disables quiet time.
         *
         * @param enabled Set to true to enable quiet time, false to disable.
         * @param callback The function to call on completion.
         */
        setQuietTimeEnabled(enabled: boolean, callback: () => void): void;

        /**
         * Checks if quiet time is enabled or not.
         *
         * @param callback The function to call on completion.
         */
        isQuietTimeEnabled(callback: (enabled: boolean) => void): void;

        /**
         * Set the quiet time for the device.
         *
         * @param startHour The start hour for quiet time.
         * @param startMinute The start minute for quiet time.
         * @param endHour The end hour for quiet time.
         * @param endMinute the end minute for quiet time.
         * @param callback The function to call on completion.
         */
        setQuietTime(
            startHour: number,
            startMinute: number,
            endHour: number,
            endMinute: number,
            callback: () => void,
        ): void;

        /**
         * Get the current quiet time. The quietTime object represents a timespan
         * during which notifications should be silenced. The typical use case is
         * to expose a preference to your users so that they can enable this setting
         * and specify an interval during which they do not wish to be disturbed.
         *
         * @param callback The function to call on completion.
         */
        getQuietTime(callback: (quietTime: UrbanAirshipPlugin.QuietTimeTimeSpan) => void): void;

        /**
         * Checks if quiet time is currently in effect.
         *
         * @param callback The function to call on completion.
         */
        isInQuietTime(callback: (inQuietTime: boolean) => void): void;

        /**
         * (iOS Only)
         *
         * On iOS, registration for push requires specifying what
         * combination of badges, sound and alerts are desired. This function
         * must be explicitly called in order to begin the registration process.
         *
         * For example:
         *
         * UAirship.setNotificationTypes(UAirship.notificationType.sound |
         *                                  UAirship.notificationType.alert);
         *
         * @param bitmask The notification types to set.
         * @param callback The function to call on completion.
         */
        setNotificationTypes(bitmask: number, callback: () => void): void;

        /**
         * (iOS Only)
         *
         * Set whether the UA Autobadge feature is enabled.
         *
         * @param enabled Set to true to enable Autobadge, false to disable.
         * @param callback The function to call on completion.
         */
        setAutobadgeEnabled(enabled: boolean, callback: () => void): void;

        /**
         * (iOS Only)
         *
         * Set the current application badge number.
         *
         * @param badge The number to use for the badge.
         * @param callback The function to call on completion.
         */
        setBadgeNumber(badge: number, callback: () => void): void;

        /**
         * (iOS Only)
         *
         * Gets the current application badge number.
         *
         * @param callback The function to call on completion.
         */
        getBadgeNumber(callback: (badgeNumber: number) => void): void;

        /**
         * (iOS Only)
         *
         * Reset the badge number to zero.
         *
         * @param callback The function to call on completion.
         */
        resetBadge(callback: () => void): void;

        /**
         * (Android Only)
         *
         * Clears the notifications posted by the application.
         *
         * @param callback The function to call on completion.
         */
        clearNotifications(callback: () => void): void;

        /**
         * (Android only, iOS sound settings come in the push)
         *
         * Set whether the device makes sound on push.
         *
         * @param enabled Set to true to enable sound, false to disable.
         * @param callback The function to call on completion.
         */
        setSoundEnabled(enabled: boolean, callback: () => void): void;

        /**
         * (Android Only)
         *
         * Checks if sound is enabled or not.
         *
         * @param callback The function to call on completion.
         */
        isSoundEnabled(callback: (enabled: boolean) => void): void;

        /**
         * (Android Only)
         *
         * Set whether the device vibrates on push.
         *
         * @param enabled Set to true to enable vibration, false to disable.
         * @param callback The function to call on completion.
         */
        setVibrateEnabled(enabled: boolean, callback: () => void): void;

        /**
         * (Android Only)
         *
         * Checks if vibration is enabled or not.
         *
         * @param callback The function to call on completion.
         */
        isVibrateEnabled(callback: (enabled: boolean) => void): void;

        /**
         * Sets tags for the device.
         *
         * @param tags An array of tags.
         * @param callback The function to call on completion.
         */
        setTags(tags: string[], callback: () => void): void;

        /**
         * Returns the tags for the device.
         *
         * @param callback The function to call on completion.
         */
        getTags(callback: (tags: string[]) => void): void;

        /**
         * Set alias for the device.
         *
         * @param alias The alias to set for this device.
         * @param callback The function to call on completion.
         */
        setAlias(alias: string, callback: () => void): void;

        /**
         * Gets the alias for this device.
         *
         * @param callback The function to call on completion.
         */
        getAlias(callback: (alias: string) => void): void;

        /**
         * Set the named user ID for this device.
         *
         * @param namedUser The named user ID.
         * @param callback The function to call on completion.
         */
        setNamedUser(namedUserId: string, callback: () => void): void;

        /**
         * Gets the named user ID for this device.
         *
         * @param callback The function to call on completion.
         */
        getNamedUser(callback: (namedUserId: string) => void): void;

        /**
         * Fluent API to edit the named user tag groups by adding or removing
         * tags, then applying the changes.
         *
         * For example:
         *
         * UAirship.editNamedUserTagGroups()
         *      .addTags("loyalty", ["platinum-member", "gold-member"])
         *      .removeTags("loyalty", ["silver-member", "bronze-member"])
         *      .apply()
         *
         * @returns The chainable API instance.
         */
        editNamedUserTagGroups(): UrbanAirshipPlugin.EditNamedUserTagGroupsApi;

        /**
         * Fluent API to edit the channel tag groups by adding or removing tags,
         * then applying the changes.
         *
         * For exmaple:
         *
         * UAirship.editChannelTagGroups()
         *      .addTags("loyalty", ["platinum-member", "gold-member"])
         *      .removeTags("loyalty", ["silver-member", "bronze-member"])
         *      .apply()
         */
        editChannelTagGroups(): UrbanAirshipPlugin.EditChannelTagGroupsApi;

        /**
         * Enables or disables analytics. Disabling analytics will delete any
         * locally stored events and prevent any events from uploading. Features
         * that depend on analytics being enabled may not work properly if it’s
         * disabled (reports, region triggers, location segmentation, push to
         * local time).
         *
         * @param enabled Set to true to enable analytics, false to disable.
         * @param callback The function to call on completion.
         */
        setAnalyticsEnabled(enabled: boolean, callback: () => void): void;

        /**
         * Checks if analytics is enabled or not.
         *
         * @param callback The function to call on completion.
         */
        isAnalyticsEnabled(callback: (enabled: boolean) => void): void;

        /**
         * Runs an Urban Airship action.
         *
         * @param actionName The name of the action to run.
         * @param actionValue The value for the action.
         * @param callback The function to call on completion.
         */
        runAction(
            actionName: string,
            actionValue: string,
            callback: (result: UrbanAirshipPlugin.RunActionResult) => void,
        ): void;

        /**
         * Enables or disables Urban Airship location services on the device.
         *
         * @param enabled Set to true to enable location, false to disable.
         * @param callback The function to call on completion.
         */
        setLocationEnabled(enabled: boolean, callback: () => void): void;

        /**
         * Checks if location is enabled or not.
         *
         * @param callback The function to call on completion.
         */
        isLocationEnabled(callback: (enabled: boolean) => void): void;

        /**
         * Enables or disables background location on the device.
         *
         * @param enabled Set to true to enable background location, false to disable.
         * @param callback The function to call on completion.
         */
        setBackgroundLocationEnabled(enabled: boolean, callback: () => void): void;

        /**
         * Checks if background location updates are enabled or not.
         *
         * @param callback The function to call on completion.
         */
        isBackgroundLocationEnabled(callback: () => void): void;

        /**
         * Records the current location of the device.
         *
         * @param callback The function to call on completion.
         */
        recordCurrentLocation(callback: () => void): void;
    }

    /**
     * Describes the chainable API object returned by editNamedUserTagGroups().
     */
    interface EditNamedUserTagGroupsApi {
        /**
         * Used to add the given tags to the given tag group.
         *
         * @param tagGroup The tag group to add tags to.
         * @param tags The tags to add to the group.
         *
         * @returns The chainable API instance.
         */
        addTags: (tagGroup: string, tags: string[]) => EditNamedUserTagGroupsApi;

        /**
         * Used to remove the given tags from the given tag group.
         *
         * @param tagGroup The tag group to remove tags from.
         * @param tags The tags to remove from the group.
         *
         * @returns The chainable API instance.
         */
        removeTags: (tagGroup: string, tags: string[]) => EditNamedUserTagGroupsApi;

        /**
         * Used to apply the changes from the chained API call.
         *
         * @param callback The optional function to call on completion.
         */
        apply: (callback?: () => void) => void;
    }

    /**
     * Describes the chainable API object returned by editChannelTagGroups().
     */
    interface EditChannelTagGroupsApi {
        /**
         * Used to add the given tags to the given tag group.
         *
         * @param tagGroup The tag group to add tags to.
         * @param tags The tags to add to the group.
         *
         * @returns The chainable API instance.
         */
        addTags: (tagGroup: string, tags: string[]) => EditChannelTagGroupsApi;

        /**
         * Used to remove the given tags from the given tag group.
         *
         * @param tagGroup The tag group to remove tags from.
         * @param tags The tags to remove from the group.
         *
         * @returns The chainable API instance.
         */
        removeTags: (tagGroup: string, tags: string[]) => EditChannelTagGroupsApi;

        /**
         * Used to apply the changes from the chained API call.
         *
         * @param callback The optional function to call on completion.
         */
        apply: (callback?: () => void) => void;
    }

    // #endregion

    // #region Data Types

    interface PushEvent extends Event {
        message: string;
        extras: { [key: string]: any };
    }

    interface RegistrationEvent extends Event {
        error: string;

        /**
         * The channel ID for the device.
         */
        channelID: string;

        /**
         * (iOS Only)
         *
         * The push token for the device.
         */
        deviceToken: string;
    }

    /**
     * Represents a timespan during which notifications should be silenced.
     *
     * For example, 10PM - 6AM would be:
     * { startHour: 22, startMinute: 0, endHour: 6, endMinute: 0 }
     */
    interface QuietTimeTimeSpan {
        startHour: number;
        startMinute: number;
        endHour: number;
        endMinute: number;
    }

    /**
     * The result of the runAction() call.
     */
    interface RunActionResult {
        error: string;
        value: any;
    }

    // #endregion
}

// #endregion

// #region UAirship Global Variable Declaration

declare var UAirship: UrbanAirshipPlugin.UrbanAirshipStatic;

// #endregion

// #region Additional Document Events

interface Document {
    addEventListener(
        type: "urbanairship.push",
        listener: (ev: UrbanAirshipPlugin.PushEvent) => void,
        useCapture?: boolean,
    ): void;
    addEventListener(
        type: "urbanairship.registration",
        listener: (ev: UrbanAirshipPlugin.RegistrationEvent) => void,
        useCapture?: boolean,
    ): void;
}

// #endregion
