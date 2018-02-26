namespace adoneTests.system.process.user {
    const {
        system: {
            user
        }
    } = adone;

    let str: string;
    let num: number;

    const a = user.uid("hello");
    num = a.uid;
    num = a.gid;

    num = user.gid("hello");

    num = user.gids("hello")[0];

    str = user.username(1000);

    str = user.groupname(1000);
}
