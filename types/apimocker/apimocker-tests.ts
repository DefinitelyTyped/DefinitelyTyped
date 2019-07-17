import * as ApiMocker from 'apimocker';
import * as path from 'path';

const PORT = 7878;

// const server = ApiMocker.createServer({ quiet: false }).setConfigFile(path.resolve(__dirname, 'apimocker-test.config'));

const server = ApiMocker.createServer({ quiet: false });

server.start(PORT, () => {
    console.log(`API mocker started successfully @${PORT}`);
    server.stop(() => console.log('API mocker stopped successully'));
});
