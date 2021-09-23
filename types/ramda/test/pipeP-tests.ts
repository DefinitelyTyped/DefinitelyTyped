import * as R from 'ramda';

/* pipeP */
() => {
  interface User {
    followers: string[];
    name: string;
  }

  const db = {
    getUserById(userName: string): Promise<User> {
      return Promise.resolve({
        name: 'Jon',
        followers: ['Samwell', 'Edd', 'Grenn'],
      });
    },
    getFollowers(user: User): Promise<string[]> {
      return Promise.resolve(user.followers);
    },
  };
  const followersForUser: (userName: string) => Promise<string[]> = R.pipeP(
    db.getUserById,
    db.getFollowers,
  );
};
