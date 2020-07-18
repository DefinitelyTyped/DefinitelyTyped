import configsOverload from 'configs-overload';

configsOverload();
configsOverload('./configs');
configsOverload('./configs', {});
configsOverload('./configs', { defaultEnv: 'default' });
configsOverload('./configs', { env: 'production' });
configsOverload('./configs', { defaultEnv: 'default', env: 'production' });
