// Type definitions for tinder 1.19.0 
// Project: https://github.com/tinderjs/tinderjs
// Definitions by: Matej Drolc <https://github.com/pingec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module 'tinder' {

    import fs = require('fs');

    class TinderClient {
        constructor();
        authorize(fbToken: string, fbId: string, callback: Callback<any>);
        isAuthorized(): Boolean;
        getAuthToken(): any;
        getDefaults(): any;
        userId(): any;
        getRecommendations(limit: number, callback: Callback<TinderRecommendationsResult>);
        sendMessage(matchId: string, message: string, callback: Callback<any>);
        like(userId: string, callback: Callback<any>);
        superLike(userId: string, callback: Callback<any>);
        pass(userId: string, callback: Callback<any>);
        unmatch(matchId: string, callback: Callback<any>);
        getUpdates(callback: Callback<TinderUpdates>);
        getHistory(callback: Callback<TinderHistory>);
        updatePosition(longitude, latitude, callback: Callback<any>);
        getAccount(callback: Callback<any>);
        updatePreferences(discovery: Boolean, minAge: number, maxAge: number, gender: number, distanceInMiles: string, callback: Callback<any>);
        uploadPicture(file: fs.ReadStream, callback: Callback<any>);
        uploadFBPicture(pictureId, xdistance_percent: number, ydistance_percent: number, xoffset_percent: number, yoffset_percent: number, callback: Callback<any>)
        deletePicture(pictureId, callback: Callback<any>)
        getProfile(callback: Callback<any>)
        updateGender(gender: number, callback: Callback<any>)
        updateBio(bio: string, callback: Callback<any>)
        updateJob(id, callback: Callback<any>)
        deleteJob(callback: Callback<any>)
        updateSchool(id, callback: Callback<any>)
        deleteSchool(callback: Callback<any>)
        deleteAccount(callback: Callback<any>)
        getUser(userId: string, callback: Callback<any>)
        getShareLink(userId: string, callback: Callback<any>)
        report(userId: string, causeId: Number, causeText: string, callback: Callback<any>)
        report(userId: string, causeId: Number, callback: Callback<any>)
        createUsername(username: string, callback: Callback<any>)
        changeUsername(username: string, callback: Callback<any>)
        deleteUsername(username: string, callback: Callback<any>)
        updatePassport(latitude: string, longitude: string, callback: Callback<any>)
        resetPassport(callback: Callback<any>)
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

    interface TinderRecommendationsResult {
        /**
         * when out of recommendations it is set to "out of recs", a possible value is also "recs timeout",
         *  otherwise does not seem to be used
         */
        message?: string; 
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
        teaser: { string: string; }; // todo
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
