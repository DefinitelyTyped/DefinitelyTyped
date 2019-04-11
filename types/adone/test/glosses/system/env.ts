namespace adoneTests.system.env {
    const {
        system: {
            env
        }
    } = adone;

    let str: string;

    str = env.user();

    str = env.prompt();

    str = env.hostname();

    str = env.tmpdir();

    str = env.home();

    str = env.path();

    str = env.editor();

    str = env.shell();
}
