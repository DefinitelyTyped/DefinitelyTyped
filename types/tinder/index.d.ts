/// <reference types="node" />

declare module "tinder" {
    import fs = require("fs");

    class TinderClient {
        constructor();
        /**
         * Authorize this tinder client
         * @param {String} fbToken the Facebook token. This will be obtained when authenticating the user
         * @param {String} fbId the Facebook user id.
         * @param {Function} callback the callback to invoke when the request completes
         */
        authorize(fbToken: string, fbId: string, callback: Callback<any>): void;

        /**
         * Returns whether this client is authorized
         * @return whether or not this client is authorized
         */
        isAuthorized(): Boolean;

        /**
         * Returns the xAuthToken
         * @return xAuthToken
         */
        getAuthToken(): string;

        /**
         * Set auth token if you have it saved, no need to do fb login every time
         */
        setAuthToken(xAuthToken: string): void;

        /**
         * Returns client information and globals
         * Globals are used for interacting with tinder api limits
         */
        getDefaults(): any;

        /**
         * The current account's user id
         */
        userId: string;

        /**
         * Gets a list of nearby users
         * @param {Number} limit the maximum number of profiles to fetch
         * @param {Function} callback the callback to invoke when the request completes
         */
        getRecommendations(limit: number, callback: Callback<TinderRecommendationsResult>): void;

        /**
         * Sends a message to a user
         * @param {String} matchId the id of the match
         * @param {String} message the message to send
         * @param {Function} callback the callback to invoke when the request completes
         */
        sendMessage(matchId: string, message: string, callback: Callback<any>): void;

        /**
         * Likes (swipes right) on a user
         * @param {String} userId the id of the user
         * @param {Function} callback the callback to invoke when the request completes
         */
        like(userId: string, callback: Callback<any>): void;

        /**
         * Superlikes a user
         * @param {String} userId the id of the user
         * @param {Function} callback the callback to invoke when the request completes
         */
        superLike(userId: string, callback: Callback<any>): void;

        /**
         * Passes (swipes left) on a user
         * @param {String} userId the id of the user
         * @param {Function} callback the callback to invoke when the request completes
         */
        pass(userId: string, callback: Callback<any>): void;

        /**
         * Unmatch with a user
         * @param {String} matchID the id of the match
         * @param {Function} callback the callback to invoke when the request completes
         */
        unmatch(matchId: string, callback: Callback<any>): void;

        /**
         * Gets a list of new updates. This will be things like new messages, users who liked you, etc.
         * @param {Function} callback the callback to invoke when the request completes
         */
        getUpdates(callback: Callback<TinderUpdates>): void;

        /**
         * Gets the entire history for the current account (all matches, messages, blocks, etc.)
         *
         * NOTE: Old messages seem to not be returned after a certain threshold. Not yet
         * sure what exactly that timeout is. The official client seems to get this update
         * once when the app is installed then cache the results and only rely on the
         * incremental updates
         * @param {Function} callback the callback to invoke when the request completes
         */
        getHistory(callback: Callback<TinderHistory>): void;

        /**
         * Updates the geographical position for the current account
         * @param {Number} lon the longitude
         * @param {Number} lat the latitutde
         * @param {Function} callback the callback to invoke when the request completes
         */
        updatePosition(longitude: Number, latitude: Number, callback: Callback<any>): void;

        /**
         * Gets the current account info
         * @param {Function} callback the callback to invoke when the request completes
         */
        getAccount(callback: Callback<any>): void;

        /**
         * Updates the preferences for the current account
         * @param {Boolean} discovery whether or not to show user's card
         * @param {Number} ageMin the minimum age to show recommendations
         * @param {Number} ageMax the maximum age to show recommendations
         * @param {Number} gender the gender to show recommentations (0 = Male, 1 = Female, -1 = Both)
         * @param {Number} distance the distance in miles to show recommendations
         * @param {Function} callback the callback to invoke when the request completes
         */
        updatePreferences(
            discovery: Boolean,
            ageMin: number,
            ageMax: number,
            gender: number,
            distance: number,
            callback: Callback<any>,
        ): void;

        /**
         * Upload a new picture to the current account
         * @param {Buffer} file the picture that you want to upload
         * @param {Function} callback the callback to invoke when the request completes
         */
        uploadPicture(file: fs.ReadStream, callback: Callback<any>): void;

        /**
         * Post a new picture to the current account from Facebook
         * @param {String} pictureId is the facebook id of the picture
         * @param {Float} xdistance_percent is the zoom percentage in x 0 full Zoom 1 no Zoom
         * @param {Float} ydistance_percent is the zoom percentage in x 0 full Zoom 1 no Zoom
         * @param {Float} xoffset_percent is the offset from the left corner in percentage
         * @param {Float} yoffset_percent is the offset from the top corner in percentage
         * @param {Function} callback the callback to invoke when the request completes
         */
        uploadFBPicture(
            pictureId: string,
            xdistance_percent: number,
            ydistance_percent: number,
            xoffset_percent: number,
            yoffset_percent: number,
            callback: Callback<any>,
        ): void;

        /**
         * Delete a picture from the current account
         * @param {String} pictureId the id of the picture
         * @param {Function} callback the callback to invoke when the request completes
         */
        deletePicture(pictureId: string, callback: Callback<any>): void;

        /**
         * @deprecated
         * Get authenticated user info
         * @param {Function} callback the callback to invoke when the request completes
         */
        getProfile(callback: Callback<any>): void;

        /**
         * Update your gender
         * @param {Number} gender is your gender (0 = Male, 1 = Female)
         * @param {Function} callback the callback to invoke when the request completes
         */
        updateGender(gender: number, callback: Callback<any>): void;

        /**
         * Update your bio
         * @param {String} bio is you bio (500 characters max.)
         * @param {Function} callback the callback to invoke when the request completes
         */
        updateBio(bio: string, callback: Callback<any>): void;

        /**
         * Update your job
         * @param {String} id is the facebook id of the job
         * @param {Function} callback the callback to invoke when the request completes
         */
        updateJob(id: String, callback: Callback<any>): void;

        /**
         * Delete your current job
         * @param {Function} callback the callback to invoke when the request completes
         */
        deleteJob(callback: Callback<any>): void;

        /**
         * Update your school
         * @param {String} id is the facebook id of the school
         * @param {Function} callback the callback to invoke when the request completes
         */
        updateSchool(id: String, callback: Callback<any>): void;

        /**
         * Delete your current school
         * @param {Function} callback the callback to invoke when the request completes
         */
        deleteSchool(callback: Callback<any>): void;

        /**
         * Delete the current account
         * @param {Function} callback the callback to invoke when the request completes
         */
        deleteAccount(callback: Callback<any>): void;

        /**
         * Gets a user by id
         * @param {String} userId the id of the user
         * @param {Function} callback the callback to invoke when the request completes
         */
        getUser(userId: string, callback: Callback<any>): void;

        /**
         * Get a share URL for a user
         *
         * @param {String} userId the id of the user
         * @param {Function} callback the callback to invoke when the request completes
         */
        getShareLink(userId: string, callback: Callback<any>): void;

        /**
         * Report a user
         *
         * @param {String} userId the id of the user
         * @param {Number} causeId one of 4 (inappropriate photos), 1 (spam), or 0 (other)
         * @param {String} causeText optional reason for report when causeId is 0 (other)
         * @param {Function} callback the callback to invoke when the request completes
         */
        report(userId: string, causeId: Number, causeText: string, callback: Callback<any>): void;

        /**
         * Create a web username for the current account
         *
         * @param {String} userName the username to request be created
         * @param {Function} callback the callback to invoke when the request completes
         */
        createUsername(username: string, callback: Callback<any>): void;

        /**
         * Change a web username for the current account if it's already been set
         *
         * @param {String} userName the username to request be created
         * @param {Function} callback the callback to invoke when the request completes
         */
        changeUsername(username: string, callback: Callback<any>): void;

        /**
         * Deletes the existing web username for the current account
         *
         * @param {Function} callback the callback to invoke when the request completes
         */
        deleteUsername(username: string, callback: Callback<any>): void;

        /**
         * Update the passport location
         * @param {Number} lon the longitude
         * @param {Number} lat the latitutde
         * @param {Function} callback the callback to invoke when the request completes
         */
        updatePassport(latitude: string, longitude: string, callback: Callback<any>): void;

        /**
         * Reset the passport location
         * @param {Function} callback the callback to invoke when the request completes
         */
        resetPassport(callback: Callback<any>): void;
    }

    interface Callback<T> {
        (error: any, data: T): any;
    }

    interface TinderUpdates {
        matches: any[];
        blocks: any[];
        matchmaker: any[];
        lists: any[];
        deleted_lists: any[];
        liked_messages: TinderMessage[];
        squads: any[];
        last_activity_date: string;
    }

    /**
     * When out of recommendations it is set to "out of recs", a possible value is also "recs timeout",
     * otherwise does not seem to be used
     */
    interface TinderRecommendationsResult {
        message?: string | undefined;
        status: Number;
        results: TinderRecommendation[];
    }

    interface TinderRecommendation {
        distance_mi: Number;
        common_connections: any[]; // todo
        common_likes: any[]; // todo
        common_interests: any[]; // todo
        uncommon_interests: any[]; // todo
        common_friends: any[]; // todo
        _id: string;
        badges: any[]; // todo
        bio: string;
        birth_date: string;
        gender: number;
        name: string;
        ping_time: string;
        photos: TinderPhoto[];
        jobs: any[]; // todo
        schools: any[]; // todo
        teaser: { string: string }; // todo
        birth_date_info: string;
    }

    interface TinderHistory {
        matches: TinderMatch[];
        blocks: string[];
        lists: any[]; // todo
        deleted_lists: any[]; // todo
        liked_messages: TinderLikedMessage[];
        squads: any[]; // todo
        last_activity_date: string;
    }

    interface TinderLikedMessage {
        message_id: string;
        updated_at: string;
        liker_id: string;
        match_id: string;
        is_liked: Boolean;
    }

    interface TinderMatch {
        _id: string;
        closed: Boolean;
        common_friend_count: number;
        common_like_count: number;
        created_date: string;
        dead: Boolean;
        last_activity_date: string;
        message_count: number;
        messages: TinderMessage[];
        muted: Boolean;
        participants: string[];
        pending: Boolean;
        is_super_like: Boolean;
        following: Boolean;
        following_moments: Boolean;
        id: string;
        person: TinderPerson;
    }

    interface TinderPerson {
        _id: string;
        bio: string;
        birth_date: string;
        gender: number;
        name: string;
        ping_time: string;
        user_number: number;
        photos: TinderPhoto[];
        badges: any[]; // todo
    }

    interface TinderPhoto {
        url: string;
        processedFiles: TinderPhotoProcessedFile[];
        extension: string;
        fileName: string;
        xoffset_percent: number;
        ydistance_percent: number;
        main: Boolean;
        xdistance_percent: number;
        id: string;
        yoffset_percent: number;
    }

    interface TinderPhotoProcessedFile {
        url: string;
        height: number;
        width: number;
    }

    interface TinderMessage {
        _id: string;
        match_id: string;
        to: string;
        from: string;
        message: string;
        sent_date: string;
        created_date: string;
        timestamp: number;
    }
}
