import ON_DEATH = require('death');

const unsub1: () => void = ON_DEATH((value: 'SIGINT' | 'SIGTERM' | 'SIGQUIT') => {});

const unsub2: () => void = ON_DEATH({
    debug: true,
    SIGINT: true,
    SIGTERM: true,
    SIGQUIT: true,
})((value: 'SIGINT' | 'SIGTERM' | 'SIGQUIT') => {});

const unsub3: () => void = ON_DEATH({
    debug: true,
    uncaughtException: true,
    SIGINT: true,
    SIGTERM: true,
    SIGQUIT: true,
})((value: 'SIGINT' | 'SIGTERM' | 'SIGQUIT' | Error) => {});

const unsub4: () => void = ON_DEATH({
    debug: true,
    SIGINT: true,
    SIGTERM: true,
    SIGQUIT: true,
})((value: 'SIGINT' | 'SIGTERM' | 'SIGQUIT') => {});

const unsub5: () => void = ON_DEATH({
    debug: true,
    uncaughtException: true,
    SIGINT: true,
    SIGTERM: true,
    SIGQUIT: true,
})(
    // $ExpectError
    (value: 'SIGINT' | 'SIGTERM' | 'SIGQUIT') => {},
);
