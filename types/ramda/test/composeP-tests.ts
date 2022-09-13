import * as R from 'ramda';

() => {
    interface User {
        name: string;
        followers: string[];
    }
    interface Db {
        users: { [index: string]: User };
    }
    const db: Db = {
        users: {
            JOE: {
                name: 'Joe',
                followers: ['STEVE', 'SUZY'],
            },
        },
    };

    // We'll pretend to do a db lookup which returns a promise
    const lookupUser = (userId: string): Promise<User> => Promise.resolve(db.users[userId]);
    const lookupFollowers = (user: User): Promise<string[]> => Promise.resolve(user.followers);
    lookupUser('JOE').then(lookupFollowers);

    //  followersForUser :: String -> Promise [UserId]
    const followersForUser: (input: string) => Promise<string[]> = R.composeP(lookupFollowers, lookupUser);
    followersForUser('JOE').then(followers => console.log('Followers:', followers));
    // Followers: ["STEVE","SUZY"]
};
