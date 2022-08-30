import * as R from 'ramda';

() => {
    interface User {
        followers: string[];
        name: string;
    }

    const db = {
        getUserById(userId: string): Promise<User> {
            return Promise.resolve({
                name: 'Jon',
                followers: ['Samwell', 'Edd', 'Grenn'],
            });
        },
        getFollowers(user: User): Promise<string[]> {
            return Promise.resolve(user.followers);
        },
    };

    // $ExpectType (userId: string) => Promise<string[]>
    const followersForUser = R.pipeWith(
        (f: (value: any) => any, res: Promise<unknown>) => res.then(f),
        [db.getUserById, db.getFollowers],
    );

    // $ExpectType (userId: string) => Promise<User>
    const getUser = R.pipeWith((f: (value: any) => any, res: Promise<unknown>) => res.then(f), [db.getUserById]);

    // Should pipe at least on function.
    // @ts-expect-error
    R.pipeWith((f: (value: any) => any, res: Promise<unknown>) => res.then(f), []);
};
